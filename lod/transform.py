from pathlib import Path
import re
import unicodedata
import json
from rdflib import Graph, Literal, URIRef, Namespace
from rdflib.namespace import RDF

# --- Immer relativer Pfad zum Script ---
base_dir = Path(__file__).parent.resolve()
in_path = base_dir / "fairyland.ttl"
out_path = base_dir / "fairyland.ttl"  # überschreibt in-place (bei Bedarf ändern)

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
    """
    Erzeuge einen lokalen Bezeichner im CamelCase aus einem Namen (Unicode-freundlich).
    Beispiel: 'Minion IIa' -> 'MinionIIa', 'Kötbullar' -> 'Kotbullar'
    """
    nfkd = unicodedata.normalize("NFKD", name)
    ascii_str = "".join(ch for ch in nfkd if not unicodedata.combining(ch))
    cleaned = re.sub(r"[^0-9A-Za-z]+", " ", ascii_str)
    parts = [p for p in cleaned.strip().split() if p]
    return "".join(w[0].upper() + w[1:] for w in parts)


def ensure_instance_local(local_name: str, class_local: str) -> URIRef:
    """
    Stelle sicher, dass eine Instanz fairyland:<local_name> existiert und den Typ fairyland:<class_local> besitzt.
    Gibt die Instanz-URI zurück.
    """
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

# Mapping-Tabelle (hart kodiert)
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

# ------------------------ 4) Punkte aus GeoJSON -> WKT POINT im TTL ------------------------
geojson_path = base_dir / "points_tmp.geojson"
if geojson_path.exists():
    with geojson_path.open("r", encoding="utf-8") as f:
        gj = json.load(f)

    # GeoSPARQL-Namespace ermitteln (oder Standard setzen)
    GEO_IRI = (
        next((str(ns) for prefix, ns in g.namespaces() if prefix == "geo"), None)
        or "http://www.opengis.net/ont/geosparql#"
    )
    GEO_hasGeometry = URIRef(GEO_IRI + "hasGeometry")
    GEO_asWKT = URIRef(GEO_IRI + "asWKT")
    GEO_wktLiteral = URIRef(GEO_IRI + "wktLiteral")

    # id -> POINT(lon lat) aus GeoJSON (id entspricht suni:fid)
    id_to_point_wkt = {}
    for feat in gj.get("features", []):
        props = feat.get("properties") or {}
        fid = (
            props.get("id") or props.get("ID") or props.get("fid")
        )  # <- korrektes Mapping
        geom = feat.get("geometry") or {}
        if geom.get("type") == "Point":
            coords = geom.get("coordinates")
            if isinstance(coords, (list, tuple)) and len(coords) >= 2:
                lon, lat = coords[0], coords[1]
                wkt = f"POINT({lon} {lat})"
                id_to_point_wkt[str(fid)] = wkt
                try:
                    id_to_point_wkt[int(fid)] = wkt
                except Exception:
                    pass

    updated_points = 0
    suni_fid_pred = URIRef(SUNI + "fid")

    for s, _, o in list(g.triples((None, suni_fid_pred, None))):
        key = str(o)
        new_wkt = id_to_point_wkt.get(key)
        if new_wkt is None:
            try:
                new_wkt = id_to_point_wkt.get(int(key))
            except Exception:
                new_wkt = None
        if not new_wkt:
            continue

        for _, _, geom in g.triples((s, GEO_hasGeometry, None)):
            # vorhandenes asWKT (egal welcher Inhalt) ersetzen
            for _, _, oldlit in list(g.triples((geom, GEO_asWKT, None))):
                g.remove((geom, GEO_asWKT, oldlit))
            g.add((geom, GEO_asWKT, Literal(new_wkt, datatype=GEO_wktLiteral)))
            updated_points += 1

    print(f"• GeoJSON-Point-Updates durchgeführt: {updated_points}")
else:
    print("• Hinweis: points_tmp.geojson nicht gefunden – Abschnitt 4 übersprungen.")


# ------------------------ 5) POLYGON-Koordinaten runden (6 Dezimalstellen) ------------------------
def _round_number_str(num_str: str, places: int = 6) -> str:
    try:
        return f"{float(num_str):.{places}f}"
    except Exception:
        return num_str


def round_polygon_wkt(text: str, places: int = 6) -> str:
    # Nur echte POLYGON-Geometrien anfassen
    if not text.lstrip().upper().startswith("POLYGON("):
        return text
    # Zahlen (inkl. negativ, mit Dezimalpunkt) runden
    return re.sub(
        r"(-?\d+(?:\.\d+)?)", lambda m: _round_number_str(m.group(1), places), text
    )


# Alle geo:asWKT-Literale prüfen und POLYGON-Koordinaten runden
GEO_IRI2 = (
    next((str(ns) for prefix, ns in g.namespaces() if prefix == "geo"), None)
    or "http://www.opengis.net/ont/geosparql#"
)
GEO_asWKT2 = URIRef(GEO_IRI2 + "asWKT")
GEO_wktLiteral2 = URIRef(GEO_IRI2 + "wktLiteral")

rounded_polygons = 0
for geom, _, lit in list(g.triples((None, GEO_asWKT2, None))):
    if isinstance(lit, Literal):
        txt = str(lit)
        if txt.lstrip().upper().startswith("POLYGON("):
            new_txt = round_polygon_wkt(txt, 6)
            if new_txt != txt:
                g.remove((geom, GEO_asWKT2, lit))
                g.add((geom, GEO_asWKT2, Literal(new_txt, datatype=GEO_wktLiteral2)))
                rounded_polygons += 1

print(f"• POLYGON-Koordinaten auf 6 Dezimalstellen gerundet: {rounded_polygons}")

# --- Datei speichern ---
g.serialize(destination=str(out_path), format="turtle")
print(f"✅ Fertig. Datei geschrieben: {out_path}")
