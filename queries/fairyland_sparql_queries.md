# FAIRyland SPARQL Queries Documentation

**For CAA International 2025 Poster & Jupyter Notebook**

---

## Overview

The FAIRyland dataset contains 7 SPARQL queries. Four of these queries power the **Summary Dashboard** - a comprehensive visualization perfect for poster presentations.

---

## 🎯 Dashboard Queries (The Essential Four)

These queries form the basis of the Summary Dashboard visualization.

### Query 1: Feature Type Inventory
**Dashboard Position:** Top-Left Panel (Bar Chart)  
**Archaeological Question:** What types of features were found in FAIRyland?

```sparql
PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>

SELECT ?type (COUNT(?feature) AS ?count)
WHERE {
  ?feature a ?type .
  FILTER(STRSTARTS(STR(?type), "https://github.com/Research-Squirrel-Engineers/FAIRyland/"))
}
GROUP BY ?type
ORDER BY DESC(?count)
```

**Results:**
- Koetbullar: 139
- Minion: 13
- Street: 6
- Kangaroo: 3
- Stone: 3
- Crater: 2
- AllenKey: 1

**Total:** 167 features

---

### Query 2: Kötbullar Preservation State
**Dashboard Position:** Bottom-Right Panel (Pie Chart)  
**Archaeological Question:** What is the preservation state of the Kötbullar (petrified kangaroo droppings)?

```sparql
PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?condition (COUNT(?koetbullar) AS ?count)
WHERE {
  ?koetbullar a fairyland:Koetbullar .
  OPTIONAL { ?koetbullar suni:Condition ?condition }
}
GROUP BY ?condition
ORDER BY DESC(?count)
```

**Results:**
- intact: 123 (88.5%)
- smashed: 16 (11.5%)

**Total:** 139 Kötbullar

---

### Query 3: Stratigraphic Sequence
**Dashboard Position:** Top-Right Panel (Horizontal Bar Chart)  
**Archaeological Question:** How are features distributed across Minion Period phases?

```sparql
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?period (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Time_Period ?period .
}
GROUP BY ?period
ORDER BY ?period
```

**Results:**
- Minion: 153
- Minion I: 1
- Minion IIa: 5
- Minion IIb: 1

**Total:** 160 features across 4 chronological phases

---

### Query 4: Spatial Distribution by Trench
**Dashboard Position:** Bottom-Left Panel (Bar Chart)  
**Archaeological Question:** Which excavation trenches yielded the most finds?

```sparql
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?trench (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Trench ?trench .
}
GROUP BY ?trench
ORDER BY DESC(?count)
```

**Results:**
- Ikea Land: 153
- Norrfors: 7

**Total:** 160 features across 2 trenches

---

## 📊 Additional Queries (Supporting Analyses)

### Query 5: Minion Catalog
**Question:** Get a detailed catalog of all Minions found.

```sparql
PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?name ?condition ?period ?trench
WHERE {
  ?minion a fairyland:Minion ;
          suni:Name ?name ;
          suni:Time_Period ?period ;
          suni:Trench ?trench .
  OPTIONAL { ?minion suni:Condition ?condition }
}
ORDER BY ?period ?trench
```

**Result:** 13 Minion individuals with complete attribute data

---

### Query 6: Feature Co-occurrence Analysis
**Question:** Which feature types co-occur in the same trenches?

```sparql
PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?trench (GROUP_CONCAT(DISTINCT ?typeName; separator=", ") AS ?feature_types)
WHERE {
  ?feature a ?type ;
           suni:Trench ?trench .
  FILTER(STRSTARTS(STR(?type), "https://github.com/Research-Squirrel-Engineers/FAIRyland/"))
  BIND(REPLACE(STR(?type), ".*FAIRyland/", "") AS ?typeName)
}
GROUP BY ?trench
ORDER BY ?trench
```

**Results:**
- Ikea Land: 7 different feature types
- Norrfors: 4 different feature types

---

### Query 7: Geometry Data Availability
**Question:** How many features have GeoSPARQL geometry data?

```sparql
PREFIX geo: <http://www.opengis.net/ont/geosparql#>

SELECT (COUNT(?feature) AS ?features_with_geometry)
WHERE {
  ?feature geo:hasGeometry ?geom .
}
```

**Result:** All 160 features have spatial geometry data

---

## 🎨 Dashboard Visualization Layout

```
┌────────────────────────┬────────────────────────┐
│ Query 1                │ Query 3                │
│ Feature Type Inventory │ Stratigraphic Sequence │
│                        │                        │
│ Bar Chart              │ Horizontal Bars        │
│ (7 feature types)      │ (4 time periods)       │
├────────────────────────┼────────────────────────┤
│ Query 4                │ Query 2                │
│ Trench Distribution    │ Kötbullar Condition    │
│                        │                        │
│ Bar Chart              │ Pie Chart              │
│ (2 trenches)           │ (intact vs. smashed)   │
└────────────────────────┴────────────────────────┘
```

---

## 🔧 Technical Details

### Namespaces Used
```turtle
@prefix fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/> .
@prefix suni: <http://www.github.com/sparqlunicorn#> .
@prefix geo: <http://www.opengis.net/ont/geosparql#> .
```

### Key Properties
- `rdf:type` / `a` - Feature classification
- `suni:Name` - Feature name
- `suni:Time_Period` - Chronological attribution
- `suni:Trench` - Spatial context (excavation area)
- `suni:Condition` - Preservation state
- `geo:hasGeometry` - GeoSPARQL geometry

### Aggregation Functions
- `COUNT()` - Count instances
- `GROUP_CONCAT()` - Concatenate values
- `GROUP BY` - Group results
- `ORDER BY` - Sort results

---

## 📖 How to Use

### In Python (with rdflib)
```python
from rdflib import Graph

g = Graph()
g.parse("fairyland.ttl", format="turtle")

query = """
PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>

SELECT ?type (COUNT(?feature) AS ?count)
WHERE {
  ?feature a ?type .
  FILTER(STRSTARTS(STR(?type), "https://github.com/Research-Squirrel-Engineers/FAIRyland/"))
}
GROUP BY ?type
ORDER BY DESC(?count)
"""

results = g.query(query)
for row in results:
    print(f"{row.type}: {row.count}")
```

### In QGIS (with SPARQLing Unicorn)
1. Load FAIRyland vector layers
2. Use SPARQLing Unicorn Plugin
3. Export to RDF/TTL
4. Query via SPARQL endpoint

---

## 📚 References

**Dataset:** FAIRyland - https://github.com/Research-Squirrel-Engineers/FAIRyland  
**Tool:** SPARQLing Unicorn QGIS Plugin  
**Conference:** CAA International 2026, Vienna  
**Author:** Florian Thiery (LEIZA)

---

## 📄 License

Queries and documentation: CC BY 4.0  
Code: MIT License