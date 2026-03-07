# FAIRyland Dashboard SPARQL Queries

**For CAA International 2025 Poster**

These four SPARQL queries power the Summary Dashboard visualization.

---

## Query 1: Feature Type Inventory

**Dashboard Position:** Top-Left Panel  
**Question:** What types of features were found in FAIRyland?

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

**Result:** This query generates the data for the top-left panel of the dashboard.

---

## Query 2: Kötbullar Preservation State

**Dashboard Position:** Bottom-Right Panel  
**Question:** What is the preservation state of petrified kangaroo droppings?

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

**Result:** This query generates the data for the bottom-right panel of the dashboard.

---

## Query 3: Stratigraphic Sequence

**Dashboard Position:** Top-Right Panel  
**Question:** How are features distributed across Minion Period phases?

```sparql
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?period (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Time_Period ?period .
}
GROUP BY ?period
ORDER BY ?period
```

**Result:** This query generates the data for the top-right panel of the dashboard.

---

## Query 4: Spatial Distribution

**Dashboard Position:** Bottom-Left Panel  
**Question:** Which excavation trenches yielded the most finds?

```sparql
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?trench (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Trench ?trench .
}
GROUP BY ?trench
ORDER BY DESC(?count)
```

**Result:** This query generates the data for the bottom-left panel of the dashboard.

---

## How to Use These Queries

1. Load the FAIRyland dataset (`fairyland.ttl`)
2. Execute each query using SPARQL
3. Visualize results as shown in the dashboard
4. Combine into a 2×2 grid for comprehensive overview

## Dashboard Layout

```
┌─────────────────────┬─────────────────────┐
│  Query 1            │  Query 3            │
│  Feature Inventory  │  Stratigraphy       │
│  (Bar Chart)        │  (Horizontal Bars)  │
├─────────────────────┼─────────────────────┤
│  Query 4            │  Query 2            │
│  Trench Distrib.    │  Kötbullar Cond.    │
│  (Bar Chart)        │  (Pie Chart)        │
└─────────────────────┴─────────────────────┘
```

---

**Author:** Florian Thiery  
**Project:** FAIRyland - FAIR Data Training Environment  
**Conference:** CAA International 2025, Belfast  
**Repository:** https://github.com/Research-Squirrel-Engineers/FAIRyland
