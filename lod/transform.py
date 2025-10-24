from pathlib import Path
import re
from rdflib import Graph, Literal, URIRef, Namespace
from rdflib.namespace import RDF

# --- Immer relativer Pfad zum Script ---
base_dir = Path(__file__).parent.resolve()
in_path = base_dir / "fairyland.ttl"
out_path = (
    base_dir / "fairyland.ttl"
)  # überschreibt in-place (kannst ändern auf fixed-Datei)

print(f"Arbeitsverzeichnis: {base_dir}")
print(f"Lade Datei: {in_path.name}")

# RDF-Datei laden
g = Graph()
g.parse(str(in_path), format="turtle")

# --- Prefix-Handling ---
# Erwartete Prefixes
FAIRYLAND_IRI = "https://github.com/Research-Squirrel-Engineers/FAIRyland/"
SUNI_IRI = None

# Prüfe vorhandene Prefixes und ggf. ergänze
has_fairyland = False
for prefix, ns in g.namespaces():
    if prefix == "fairyland":
        has_fairyland = True
    if prefix == "suni":
        SUNI_IRI = str(ns)

if not has_fairyland:
    print("⚙️  Prefix 'fairyland:' fehlt – wird ergänzt.")
    g.bind("fairyland", Namespace(FAIRYLAND_IRI))

if not SUNI_IRI:
    raise RuntimeError("Prefix 'suni:' nicht gefunden – bitte in der TTL-Datei prüfen.")

# Namespaces
SUNI = SUNI_IRI
FAIR = FAIRYLAND_IRI


# --- 1) Normalisiere 'Polygon(' -> 'POLYGON(' ---
def normalise_polygon(text: str) -> str:
    return re.sub(r"(?i)\bpolygon\s*\(", "POLYGON(", text)


changed_polygon = 0
to_remove, to_add = [], []

for s, p, o in g:
    if isinstance(o, Literal):
        new_text = normalise_polygon(str(o))
        if new_text != str(o):
            to_remove.append((s, p, o))
            to_add.append(
                (s, p, Literal(new_text, lang=o.language, datatype=o.datatype))
            )
            changed_polygon += 1

for t in to_remove:
    g.remove(t)
for t in to_add:
    g.add(t)

print(f"• WKT-Normalisierung: {changed_polygon} Literal(e) geändert.")

# --- 2) Typ-Mapping basierend auf suni:Name ---
name_pred = URIRef(SUNI + "Name")
original_type = URIRef(SUNI + "29555707-7201-41b5-8ef4-1c59caac6f59")

# Mapping-Tabelle (hart kodiert)
mapping = {
    "Allen key (Inbusschlüssel)": "AllenKey",
    "Crater": "Crater",
    "Kangaroo": "Kangaroo",
    "Kötbullar": "Koetbullar",
    "Minions": "Minion",
    "Stone": "Stone",
    "Street": "Street",
}

# URIRefs der Zielklassen
class_uri = {k: URIRef(FAIR + v) for k, v in mapping.items()}

changed_types = 0
skipped_no_map = 0

for s, _, o in g.triples((None, name_pred, None)):
    if not isinstance(o, Literal):
        continue
    key = str(o).strip()
    key_ci = key.casefold()
    match_key = next((k for k in mapping if k.casefold() == key_ci), None)
    if not match_key:
        skipped_no_map += 1
        continue

    target_class = class_uri[match_key]

    # Entferne alten Typ
    removed = False
    if (s, RDF.type, original_type) in g:
        g.remove((s, RDF.type, original_type))
        removed = True

    # Füge neuen Typ hinzu
    if (s, RDF.type, target_class) not in g:
        g.add((s, RDF.type, target_class))

    if removed:
        changed_types += 1

print(
    f"• Typ-Mapping: {changed_types} Ressourcen umgetypt. (ohne Map: {skipped_no_map})"
)

# --- Datei speichern ---
g.serialize(destination=str(out_path), format="turtle")
print(f"✅ Fertig. Datei geschrieben: {out_path}")
