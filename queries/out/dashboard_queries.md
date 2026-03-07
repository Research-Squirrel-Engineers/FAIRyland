# FAIRyland Dashboard SPARQL Queries

This document contains the SPARQL queries used to generate the dashboard visualization.

## Query 1: Feature Type Inventory

**Description:** Count archaeological features by type

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

---

## Query 2: Kötbullar Preservation Analysis

**Description:** Analyze preservation state of archaeological features

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

---

## Query 3: Stratigraphic Distribution

**Description:** Distribution of features across time periods

```sparql
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?period (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Time_Period ?period .
}
GROUP BY ?period
ORDER BY ?period
```

---

## Query 4: Spatial Distribution

**Description:** Feature counts by excavation trench

```sparql
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?trench (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Trench ?trench .
}
GROUP BY ?trench
ORDER BY DESC(?count)
```

---

