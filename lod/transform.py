from pathlib import Path
import re
import unicodedata
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
FAIRYLAND_IRI = "https://github.com/Research-Squirrel-Engineers/FAIRyland/"
SUNI_IRI = None

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

SUNI = SUNI_IRI
FAIR = FAIRYLAND_IRI


# ------------------------ Hilfsfunktionen ------------------------
def normalise_polygon(text: str) -> str:
    """Normalisiere 'Polygon (' -> 'POLYGON('"""
    return re.sub(r"(?i)\bpolygon\s*\(", "POLYGON(", text)


def slugify_local(name: str) -> str:
    nfkd = unicodedata.normalize("NFKD", name)
    ascii_str = "".join(ch for ch in nfkd if not unicodedata.combining(ch))
    cleaned = re.sub(r"[^0-9A-Za-z]+", " ", ascii_str)
    parts = [p for p in cleaned.strip().split() if p]
    return "".join(w[0].upper() + w[1:] for w in parts)


def ensure_instance_local(local_name: str, class_local: str) -> URIRef:
    inst = URIRef(FAIR + local_name)
    class_uri = URIRef(FAIR + class_local)
    if (inst, RDF.type, class_uri) not in g:
        g.add((inst, RDF.type, class_uri))
    return inst


# ------------------------ 1) WKT-Normalisierung ------------------------
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

# ------------------------ 2) Typ-Mapping per suni:Name ------------------------
name_pred = URIRef(SUNI + "Name")
original_type = URIRef(SUNI + "29555707-7201-41b5-8ef4-1c59caac6f59")

mapping_name_to_class = {
    "Allen key (Inbusschlüssel)": "AllenKey",
    "Crater": "Crater",
    "Kangaroo": "Kangaroo",
    "Kötbullar": "Koetbullar",
    "Minions": "Minion",
    "Stone": "Stone",
    "Street": "Street",
}

changed_types = 0
skipped_no_map = 0

for s, _, o in g.triples((None, name_pred, None)):
    if not isinstance(o, Literal):
        continue
    key = str(o).strip()
    match_key = next(
        (k for k in mapping_name_to_class if k.casefold() == key.casefold()), None
    )
    if not match_key:
        skipped_no_map += 1
        continue

    target_class = URIRef(FAIR + mapping_name_to_class[match_key])

    removed = False
    if (s, RDF.type, original_type) in g:
        g.remove((s, RDF.type, original_type))
        removed = True

    if (s, RDF.type, target_class) not in g:
        g.add((s, RDF.type, target_class))

    if removed:
        changed_types += 1

print(
    f"• Typ-Mapping: {changed_types} Ressourcen umgetypt. (ohne Map: {skipped_no_map})"
)

# ------------------------ 3) Trench/TimePeriod-Linking ------------------------
trench_pred_lit = URIRef(SUNI + "Trench")
time_pred_lit = URIRef(SUNI + "Time_Period")

has_trench_prop = URIRef(FAIR + "hastrench")
has_period_prop = URIRef(FAIR + "hasperiod")  # gewünschtes Property

# Klassen-Mapping (Literal -> Klasse)
mapping_trench_class = {
    "Ikea Land": "Trench",
    "Norrfors": "Trench",
}
mapping_timeperiod_class = {
    "Minion": "TimePeriod",
    "Minion I": "TimePeriod",
    "Minion IIa": "TimePeriod",
    "Minion IIb": "TimePeriod",
}

# Instanz-Mapping (Literal -> Instanz-Lokalname)
mapping_trench_instance = {
    "Ikea Land": "IkeaLand",
    "Norrfors": "Norrfors",
}
mapping_timeperiod_instance = {
    "Minion": "Minion_Period",
    "Minion I": "Minion_I",
    "Minion IIa": "Minion_IIa",
    "Minion IIb": "Minion_IIb",
}

# Trench-Verknüpfungen
linked_trench = 0
for s, _, o in g.triples((None, trench_pred_lit, None)):
    if not isinstance(o, Literal):
        continue
    label = str(o).strip()
    mk = next(
        (k for k in mapping_trench_class if k.casefold() == label.casefold()), None
    )
    if not mk:
        continue
    class_local = mapping_trench_class[mk]
    inst_local = mapping_trench_instance.get(mk, slugify_local(mk))
    inst_uri = ensure_instance_local(inst_local, class_local)
    if (s, has_trench_prop, inst_uri) not in g:
        g.add((s, has_trench_prop, inst_uri))
        linked_trench += 1

print(f"• Trench-Verknüpfungen gesetzt: {linked_trench}")

# TimePeriod-Verknüpfungen
linked_time = 0
for s, _, o in g.triples((None, time_pred_lit, None)):
    if not isinstance(o, Literal):
        continue
    label = str(o).strip()
    mk = next(
        (k for k in mapping_timeperiod_class if k.casefold() == label.casefold()), None
    )
    if not mk:
        continue
    class_local = mapping_timeperiod_class[mk]
    inst_local = mapping_timeperiod_instance.get(mk, slugify_local(mk))
    inst_uri = ensure_instance_local(inst_local, class_local)
    if (s, has_period_prop, inst_uri) not in g:
        g.add((s, has_period_prop, inst_uri))
        linked_time += 1

print(f"• TimePeriod-Verknüpfungen gesetzt: {linked_time}")

# --- Datei speichern ---
g.serialize(destination=str(out_path), format="turtle")
print(f"✅ Fertig. Datei geschrieben: {out_path}")
