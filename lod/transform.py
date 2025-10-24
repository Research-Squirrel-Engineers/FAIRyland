from pathlib import Path
import re
from rdflib import Graph, Literal

# --- Immer relativer Pfad zum Script ---
base_dir = Path(__file__).parent.resolve()
in_path = base_dir / "fairyland.ttl"
out_path = (
    base_dir / "fairyland.ttl"
)  # überschreibt die Originaldatei (optional: ändere auf "fairyland_fixed.ttl")

print(f"Arbeitsverzeichnis: {base_dir}")
print(f"Lade Datei: {in_path.name}")

# RDF-Datei laden
g = Graph()
g.parse(str(in_path), format="turtle")

changed_count = 0


# Funktion: 'Polygon' -> 'POLYGON(' (entfernt beliebige Spaces vor '(')
def replace_polygon(text: str) -> str:
    # Match 'polygon' (case-insensitive) + beliebige Whitespaces + '('
    # und ersetze durch genau 'POLYGON('
    return re.sub(r"(?i)\bpolygon\s*\(", "POLYGON(", text)


# Tripel bearbeiten
new_triples = []
to_remove = []

for s, p, o in g:
    if isinstance(o, Literal):
        s_o = str(o)
        new_text = replace_polygon(s_o)
        if new_text != s_o:
            to_remove.append((s, p, o))
            new_lit = Literal(new_text, lang=o.language, datatype=o.datatype)
            new_triples.append((s, p, new_lit))
            changed_count += 1

# Änderungen anwenden
for t in to_remove:
    g.remove(t)
for t in new_triples:
    g.add(t)

# Ergebnis speichern
g.serialize(destination=str(out_path), format="turtle")

print(f"✅ Fertig! {changed_count} Literale geändert.")
print(f"📄 Datei geschrieben: {out_path}")
