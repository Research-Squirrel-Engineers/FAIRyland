var vowlresult={
 "_comment": "Created with pyowl2vowl (version 0.1) as part of the SPARQLing Unicorn QGIS Plugin",
 "header": {
  "prefixList": {
   "brick": "https://brickschema.org/schema/Brick#",
   "csvw": "http://www.w3.org/ns/csvw#",
   "dc": "http://purl.org/dc/elements/1.1/",
   "dcat": "http://www.w3.org/ns/dcat#",
   "dcmitype": "http://purl.org/dc/dcmitype/",
   "dcterms": "http://purl.org/dc/terms/",
   "dcam": "http://purl.org/dc/dcam/",
   "doap": "http://usefulinc.com/ns/doap#",
   "foaf": "http://xmlns.com/foaf/0.1/",
   "geo": "http://www.opengis.net/ont/geosparql#",
   "odrl": "http://www.w3.org/ns/odrl/2/",
   "org": "http://www.w3.org/ns/org#",
   "prof": "http://www.w3.org/ns/dx/prof/",
   "prov": "http://www.w3.org/ns/prov#",
   "qb": "http://purl.org/linked-data/cube#",
   "schema": "https://schema.org/",
   "sh": "http://www.w3.org/ns/shacl#",
   "skos": "http://www.w3.org/2004/02/skos/core#",
   "sosa": "http://www.w3.org/ns/sosa/",
   "ssn": "http://www.w3.org/ns/ssn/",
   "time": "http://www.w3.org/2006/time#",
   "vann": "http://purl.org/vocab/vann/",
   "void": "http://rdfs.org/ns/void#",
   "wgs": "https://www.w3.org/2003/01/geo/wgs84_pos#",
   "owl": "http://www.w3.org/2002/07/owl#",
   "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
   "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
   "xsd": "http://www.w3.org/2001/XMLSchema#",
   "xml": "http://www.w3.org/XML/1998/namespace",
   "fairyland": "https://github.com/Research-Squirrel-Engineers/FAIRyland/",
   "ns1": "http://www.opengis.net/ont/crs/",
   "suni": "http://www.github.com/sparqlunicorn#"
  },
  "baseIris": [
   "https://brickschema.org/schema/Brick#",
   "http://www.w3.org/ns/csvw#",
   "http://purl.org/dc/elements/1.1/",
   "http://www.w3.org/ns/dcat#",
   "http://purl.org/dc/dcmitype/",
   "http://purl.org/dc/terms/",
   "http://purl.org/dc/dcam/",
   "http://usefulinc.com/ns/doap#",
   "http://xmlns.com/foaf/0.1/",
   "http://www.opengis.net/ont/geosparql#",
   "http://www.w3.org/ns/odrl/2/",
   "http://www.w3.org/ns/org#",
   "http://www.w3.org/ns/dx/prof/",
   "http://www.w3.org/ns/prov#",
   "http://purl.org/linked-data/cube#",
   "https://schema.org/",
   "http://www.w3.org/ns/shacl#",
   "http://www.w3.org/2004/02/skos/core#",
   "http://www.w3.org/ns/sosa/",
   "http://www.w3.org/ns/ssn/",
   "http://www.w3.org/2006/time#",
   "http://purl.org/vocab/vann/",
   "http://rdfs.org/ns/void#",
   "https://www.w3.org/2003/01/geo/wgs84_pos#",
   "http://www.w3.org/2002/07/owl#",
   "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
   "http://www.w3.org/2000/01/rdf-schema#",
   "http://www.w3.org/2001/XMLSchema#",
   "http://www.w3.org/XML/1998/namespace",
   "https://github.com/Research-Squirrel-Engineers/FAIRyland/",
   "http://www.opengis.net/ont/crs/",
   "http://www.github.com/sparqlunicorn#"
  ],
  "languages": []
 },
 "namespace": [],
 "class": [
  {
   "id": 361,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 362,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 363,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 364,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 365,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 366,
   "type": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "id": 367,
   "type": "http://www.w3.org/2000/01/rdf-schema#Datatype"
  },
  {
   "id": 368,
   "type": "http://www.w3.org/2000/01/rdf-schema#Datatype"
  }
 ],
 "classAttribute": [
  {
   "id": 361,
   "iri": "http://www.opengis.net/ont/geosparql#Feature",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "Feature"
   },
   "annotations": {},
   "subClasses": [
    "364",
    "366"
   ],
   "superClasses": [
    "363"
   ]
  },
  {
   "id": 362,
   "iri": "http://www.opengis.net/ont/geosparql#Geometry",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "Geometry"
   },
   "annotations": {},
   "subClasses": [
    "361",
    "362"
   ],
   "superClasses": []
  },
  {
   "id": 363,
   "iri": "http://www.opengis.net/ont/geosparql#SpatialObject",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "SpatialObject"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "362"
   ]
  },
  {
   "id": 364,
   "iri": "http://www.opengis.net/ont/sf#MultiPolygon",
   "baseIRI": "http://www.opengis.net/ont/sf",
   "instances": 0,
   "label": {
    "IRI-based": "MultiPolygon"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "361"
   ]
  },
  {
   "id": 365,
   "iri": "http://www.github.com/sparqlunicorn#29555707-7201-41b5-8ef4-1c59caac6f59",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "29555707-7201-41b5-8ef4-1c59caac6f59"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": [
    "362"
   ]
  },
  {
   "id": 366,
   "iri": "http://www.opengis.net/ont/sf#Polygon",
   "baseIRI": "http://www.opengis.net/ont/sf",
   "instances": 0,
   "label": {
    "IRI-based": "Polygon"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": []
  },
  {
   "id": 367,
   "iri": "http://www.w3.org/2001/XMLSchema#string",
   "baseIRI": "(rdflib.term.URIRef('http://www.github.com/sparqlunicorn#Name'), rdflib.term.URIRef('http://www.w3.org/2001/XMLSchema",
   "instances": 0,
   "label": {
    "IRI-based": "string"
   },
   "annotations": {},
   "subClasses": [],
   "superClasses": []
  },
  {
   "id": 368,
   "iri": "http://www.w3.org/2001/XMLSchema#integer",
   "baseIRI": "(rdflib.term.URIRef('http://www.github.com/sparqlunicorn#fid'), rdflib.term.URIRef('http://www.w3.org/2001/XMLSchema",
   "instances": 0,
   "label": {
    "IRI-based": "integer"
   },
   "annotations": {},
   "subClasses": [
    "365"
   ],
   "superClasses": [
    "363"
   ]
  }
 ],
 "property": [
  {
   "id": 0,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 1,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 2,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 3,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 4,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 5,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 6,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 7,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 8,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 9,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 10,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 11,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 12,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 13,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 14,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 15,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 16,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 17,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 18,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 19,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 20,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 21,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 22,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 23,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 24,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 25,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 26,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 27,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 28,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 29,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 30,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 31,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 32,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 33,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 34,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 35,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 36,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 37,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 38,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 39,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 40,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 41,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 42,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 43,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 44,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 45,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 46,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 47,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 48,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 49,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 50,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 51,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 52,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 53,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 54,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 55,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 56,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 57,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 58,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 59,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 60,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 61,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 62,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 63,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 64,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 65,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 66,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 67,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 68,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 69,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 70,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 71,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 72,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 73,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 74,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 75,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 76,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 77,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 78,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 79,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 80,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 81,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 82,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 83,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 84,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 85,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 86,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 87,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 88,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 89,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 90,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 91,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 92,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 93,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 94,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 95,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 96,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 97,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 98,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 99,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 100,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 101,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 102,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 103,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 104,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 105,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 106,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 107,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 108,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 109,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 110,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 111,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 112,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 113,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 114,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 115,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 116,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 117,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 118,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 119,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 120,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 121,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 122,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 123,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 124,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 125,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 126,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 127,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 128,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 129,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 130,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 131,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 132,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 133,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 134,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 135,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Koetbullar"
  },
  {
   "id": 136,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 137,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 138,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 139,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 140,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 141,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 142,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 143,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 144,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 145,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 146,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 147,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 148,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 149,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 150,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 151,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 152,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 153,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Minion"
  },
  {
   "id": 154,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Stone"
  },
  {
   "id": 155,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Stone"
  },
  {
   "id": 156,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Stone"
  },
  {
   "id": 157,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Stone"
  },
  {
   "id": 158,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Street"
  },
  {
   "id": 159,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Street"
  },
  {
   "id": 160,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Street"
  },
  {
   "id": 161,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Street"
  },
  {
   "id": 162,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Street"
  },
  {
   "id": 163,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Street"
  },
  {
   "id": 164,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Street"
  },
  {
   "id": 165,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Kangaroo"
  },
  {
   "id": 166,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Kangaroo"
  },
  {
   "id": 167,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Kangaroo"
  },
  {
   "id": 168,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Kangaroo"
  },
  {
   "id": 169,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Crater"
  },
  {
   "id": 170,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/Crater"
  },
  {
   "id": 171,
   "type": "https://github.com/Research-Squirrel-Engineers/FAIRyland/AllenKey"
  },
  {
   "id": 172,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 173,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 174,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 175,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 176,
   "type": "owl:DatatypeProperty"
  },
  {
   "id": 177,
   "type": "http://www.opengis.net/ont/crs/GeographicCRS"
  },
  {
   "id": 178,
   "type": "http://www.opengis.net/ont/crs/GeographicCRS"
  },
  {
   "id": 179,
   "type": "http://www.opengis.net/ont/crs/GeographicCRS"
  },
  {
   "id": 180,
   "type": "http://www.opengis.net/ont/crs/SpatialReferenceSystem"
  },
  {
   "id": 181,
   "type": "http://www.opengis.net/ont/crs/AxisDirection"
  },
  {
   "id": 182,
   "type": "http://www.opengis.net/ont/crs/AxisDirection"
  },
  {
   "id": 183,
   "type": "http://www.opengis.net/ont/crs/Ellipsoid"
  },
  {
   "id": 184,
   "type": "owl:ObjectProperty"
  },
  {
   "id": 185,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 186,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 187,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 188,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 189,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 190,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 191,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 192,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 193,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 194,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 195,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 196,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 197,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 198,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 199,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 200,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 201,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 202,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 203,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 204,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 205,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 206,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 207,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 208,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 209,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 210,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 211,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 212,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 213,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 214,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 215,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 216,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 217,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 218,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 219,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 220,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 221,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 222,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 223,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 224,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 225,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 226,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 227,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 228,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 229,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 230,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 231,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 232,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 233,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 234,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 235,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 236,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 237,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 238,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 239,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 240,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 241,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 242,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 243,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 244,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 245,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 246,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 247,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 248,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 249,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 250,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 251,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 252,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 253,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 254,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 255,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 256,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 257,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 258,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 259,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 260,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 261,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 262,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 263,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 264,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 265,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 266,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 267,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 268,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 269,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 270,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 271,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 272,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 273,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 274,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 275,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 276,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 277,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 278,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 279,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 280,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 281,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 282,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 283,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 284,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 285,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 286,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 287,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 288,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 289,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 290,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 291,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 292,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 293,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 294,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 295,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 296,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 297,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 298,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 299,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 300,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 301,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 302,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 303,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 304,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 305,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 306,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 307,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 308,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 309,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 310,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 311,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 312,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 313,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 314,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 315,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 316,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 317,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 318,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 319,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 320,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 321,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 322,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 323,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 324,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 325,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 326,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 327,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 328,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 329,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 330,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 331,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 332,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 333,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 334,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 335,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 336,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 337,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 338,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 339,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 340,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 341,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 342,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 343,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 344,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 345,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 346,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 347,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 348,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 349,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 350,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 351,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 352,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 353,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 354,
   "type": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "id": 355,
   "type": "http://www.opengis.net/ont/sf#MultiPolygon"
  },
  {
   "id": 356,
   "type": "http://www.opengis.net/ont/sf#MultiPolygon"
  },
  {
   "id": 357,
   "type": "http://www.opengis.net/ont/crs/EllipsoidalCoordinateSystem"
  },
  {
   "id": 358,
   "type": "http://www.opengis.net/ont/crs/EllipsoidalCoordinateSystem"
  },
  {
   "id": 359,
   "type": "http://www.opengis.net/ont/crs/CoordinateSystemAxis"
  },
  {
   "id": 360,
   "type": "http://www.opengis.net/ont/crs/CoordinateSystemAxis"
  }
 ],
 "propertyAttribute": [
  {
   "id": 0,
   "iri": "http://www.github.com/sparqlunicorn#0194d590-c58c-4c97-98f8-303ea8ffe32a",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0194d590-c58c-4c97-98f8-303ea8ffe32a"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "154",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#038d7342-a29b-4fb4-848a-38956486b324_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 1,
   "iri": "http://www.github.com/sparqlunicorn#038d7342-a29b-4fb4-848a-38956486b324",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "038d7342-a29b-4fb4-848a-38956486b324"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "141",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#03bf5218-bda5-4791-b190-b302c4d8d6ce_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 2,
   "iri": "http://www.github.com/sparqlunicorn#03bf5218-bda5-4791-b190-b302c4d8d6ce",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "03bf5218-bda5-4791-b190-b302c4d8d6ce"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "2",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#047d2aa4-c98d-4c8e-bba6-c5bc935b626a_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 3,
   "iri": "http://www.github.com/sparqlunicorn#047d2aa4-c98d-4c8e-bba6-c5bc935b626a",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "047d2aa4-c98d-4c8e-bba6-c5bc935b626a"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "119",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#069e7a2d-631d-4338-adf9-5fd2f9bd2155_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 4,
   "iri": "http://www.github.com/sparqlunicorn#069e7a2d-631d-4338-adf9-5fd2f9bd2155",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "069e7a2d-631d-4338-adf9-5fd2f9bd2155"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "103",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#0800c7da-7e10-4ba2-a020-7db1bc018572_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 5,
   "iri": "http://www.github.com/sparqlunicorn#0800c7da-7e10-4ba2-a020-7db1bc018572",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0800c7da-7e10-4ba2-a020-7db1bc018572"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "24",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#09625e57-e1e3-4819-baac-8154feac0fe6_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 6,
   "iri": "http://www.github.com/sparqlunicorn#09625e57-e1e3-4819-baac-8154feac0fe6",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "09625e57-e1e3-4819-baac-8154feac0fe6"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "28",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#0b959b96-55fd-4550-b4de-68e2c4f9625f_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 7,
   "iri": "http://www.github.com/sparqlunicorn#0b959b96-55fd-4550-b4de-68e2c4f9625f",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0b959b96-55fd-4550-b4de-68e2c4f9625f"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "81",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#0cc84bdb-a46b-47fc-851f-925f22e3fd77_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 8,
   "iri": "http://www.github.com/sparqlunicorn#0cc84bdb-a46b-47fc-851f-925f22e3fd77",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0cc84bdb-a46b-47fc-851f-925f22e3fd77"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "75",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#0cde71e0-701f-44cd-a025-5cac1d1c7d70_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 9,
   "iri": "http://www.github.com/sparqlunicorn#0cde71e0-701f-44cd-a025-5cac1d1c7d70",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0cde71e0-701f-44cd-a025-5cac1d1c7d70"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "122",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#1073f60f-73b2-4193-8bd7-951995224dbb_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 10,
   "iri": "http://www.github.com/sparqlunicorn#1073f60f-73b2-4193-8bd7-951995224dbb",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1073f60f-73b2-4193-8bd7-951995224dbb"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "88",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#10d1a1c2-f56c-485c-a5cc-4d4e48c8e675_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 11,
   "iri": "http://www.github.com/sparqlunicorn#10d1a1c2-f56c-485c-a5cc-4d4e48c8e675",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "10d1a1c2-f56c-485c-a5cc-4d4e48c8e675"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "135",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#12ce69a0-6b49-4159-8ff6-b468f44d33b5_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 12,
   "iri": "http://www.github.com/sparqlunicorn#12ce69a0-6b49-4159-8ff6-b468f44d33b5",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "12ce69a0-6b49-4159-8ff6-b468f44d33b5"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "101",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#12d61444-88ae-43b3-95d4-15e5fecd4180_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 13,
   "iri": "http://www.github.com/sparqlunicorn#12d61444-88ae-43b3-95d4-15e5fecd4180",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "12d61444-88ae-43b3-95d4-15e5fecd4180"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "27",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#180a5320-3833-4133-aa46-aab7f0d80d84_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 14,
   "iri": "http://www.github.com/sparqlunicorn#180a5320-3833-4133-aa46-aab7f0d80d84",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "180a5320-3833-4133-aa46-aab7f0d80d84"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "92",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#19793c7f-6cc9-462c-99da-e3e33ff97461_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 15,
   "iri": "http://www.github.com/sparqlunicorn#19793c7f-6cc9-462c-99da-e3e33ff97461",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "19793c7f-6cc9-462c-99da-e3e33ff97461"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "108",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#1a2be1c9-acaf-4659-839d-0146401472f2_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 16,
   "iri": "http://www.github.com/sparqlunicorn#1a2be1c9-acaf-4659-839d-0146401472f2",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1a2be1c9-acaf-4659-839d-0146401472f2"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "79",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#1fcfa357-13f8-4cb5-8e28-f98280989898_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 17,
   "iri": "http://www.github.com/sparqlunicorn#1fcfa357-13f8-4cb5-8e28-f98280989898",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1fcfa357-13f8-4cb5-8e28-f98280989898"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "143",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#25d0c170-da08-47ed-8bf8-78f36d0f558e_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 18,
   "iri": "http://www.github.com/sparqlunicorn#25d0c170-da08-47ed-8bf8-78f36d0f558e",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "25d0c170-da08-47ed-8bf8-78f36d0f558e"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "132",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#264aceda-0df9-48de-9c9a-bfac46e9d790_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 19,
   "iri": "http://www.github.com/sparqlunicorn#264aceda-0df9-48de-9c9a-bfac46e9d790",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "264aceda-0df9-48de-9c9a-bfac46e9d790"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "82",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#275a5b7f-e28a-41ec-b6b5-9bc82b47f1a0_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 20,
   "iri": "http://www.github.com/sparqlunicorn#275a5b7f-e28a-41ec-b6b5-9bc82b47f1a0",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "275a5b7f-e28a-41ec-b6b5-9bc82b47f1a0"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "84",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#28ec2dbf-6806-4a32-a35d-78764bfda459_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 21,
   "iri": "http://www.github.com/sparqlunicorn#28ec2dbf-6806-4a32-a35d-78764bfda459",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "28ec2dbf-6806-4a32-a35d-78764bfda459"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "148",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#2abb9a90-732f-4e75-b764-6b3df7dfa173_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 22,
   "iri": "http://www.github.com/sparqlunicorn#2abb9a90-732f-4e75-b764-6b3df7dfa173",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "2abb9a90-732f-4e75-b764-6b3df7dfa173"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "29",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#2d3d304e-4ac7-4f2f-93a6-251105f7ace4_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 23,
   "iri": "http://www.github.com/sparqlunicorn#2d3d304e-4ac7-4f2f-93a6-251105f7ace4",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "2d3d304e-4ac7-4f2f-93a6-251105f7ace4"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "114",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#2e711592-9068-438a-80b9-0c7725e1d6bb_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 24,
   "iri": "http://www.github.com/sparqlunicorn#2e711592-9068-438a-80b9-0c7725e1d6bb",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "2e711592-9068-438a-80b9-0c7725e1d6bb"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "136",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#3018eba9-3c11-41e8-901e-7377167b58e4_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 25,
   "iri": "http://www.github.com/sparqlunicorn#3018eba9-3c11-41e8-901e-7377167b58e4",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3018eba9-3c11-41e8-901e-7377167b58e4"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "1",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#31615fc1-a7de-48af-80a2-777dd77760b2_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 26,
   "iri": "http://www.github.com/sparqlunicorn#31615fc1-a7de-48af-80a2-777dd77760b2",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "31615fc1-a7de-48af-80a2-777dd77760b2"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "134",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#32126fde-7a0e-46ab-b512-ad9f20ea10ea_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 27,
   "iri": "http://www.github.com/sparqlunicorn#32126fde-7a0e-46ab-b512-ad9f20ea10ea",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "32126fde-7a0e-46ab-b512-ad9f20ea10ea"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "159",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#327283ae-3a31-4397-ae77-2566e4d146b6_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 28,
   "iri": "http://www.github.com/sparqlunicorn#327283ae-3a31-4397-ae77-2566e4d146b6",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "327283ae-3a31-4397-ae77-2566e4d146b6"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "105",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#3280d786-1bb7-4913-9be9-9041f65ef4b6_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 29,
   "iri": "http://www.github.com/sparqlunicorn#3280d786-1bb7-4913-9be9-9041f65ef4b6",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3280d786-1bb7-4913-9be9-9041f65ef4b6"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "48",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#3672902d-7362-4069-9769-21296706d028_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 30,
   "iri": "http://www.github.com/sparqlunicorn#3672902d-7362-4069-9769-21296706d028",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3672902d-7362-4069-9769-21296706d028"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "15",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#389c5712-618e-4532-84fd-4eb084e6c0aa_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 31,
   "iri": "http://www.github.com/sparqlunicorn#389c5712-618e-4532-84fd-4eb084e6c0aa",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "389c5712-618e-4532-84fd-4eb084e6c0aa"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "130",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#3cd74fe7-9b31-4361-ad28-08afb3097edc_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 32,
   "iri": "http://www.github.com/sparqlunicorn#3cd74fe7-9b31-4361-ad28-08afb3097edc",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3cd74fe7-9b31-4361-ad28-08afb3097edc"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "13",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#3e78afb0-3e1c-4814-a038-dfde669dc4c1_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 33,
   "iri": "http://www.github.com/sparqlunicorn#3e78afb0-3e1c-4814-a038-dfde669dc4c1",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3e78afb0-3e1c-4814-a038-dfde669dc4c1"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "50",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#41bc9d9f-999b-4c03-868d-e3823fc03184_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 34,
   "iri": "http://www.github.com/sparqlunicorn#41bc9d9f-999b-4c03-868d-e3823fc03184",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "41bc9d9f-999b-4c03-868d-e3823fc03184"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "147",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#435bca7b-b840-4894-9bff-df7c45b2c20c_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 35,
   "iri": "http://www.github.com/sparqlunicorn#435bca7b-b840-4894-9bff-df7c45b2c20c",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "435bca7b-b840-4894-9bff-df7c45b2c20c"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "14",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#45d241e5-c948-4ae3-860b-668b54894e58_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 36,
   "iri": "http://www.github.com/sparqlunicorn#45d241e5-c948-4ae3-860b-668b54894e58",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "45d241e5-c948-4ae3-860b-668b54894e58"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "74",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#464f2805-ec4f-4d89-858e-f56a4378062d_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 37,
   "iri": "http://www.github.com/sparqlunicorn#464f2805-ec4f-4d89-858e-f56a4378062d",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "464f2805-ec4f-4d89-858e-f56a4378062d"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "109",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#467872e1-4482-4e05-ba2e-2ac81b40dcf7_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 38,
   "iri": "http://www.github.com/sparqlunicorn#467872e1-4482-4e05-ba2e-2ac81b40dcf7",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "467872e1-4482-4e05-ba2e-2ac81b40dcf7"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "156",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#4692f53e-797d-4457-bbc3-55273889566f_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 39,
   "iri": "http://www.github.com/sparqlunicorn#4692f53e-797d-4457-bbc3-55273889566f",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4692f53e-797d-4457-bbc3-55273889566f"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "23",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#4960c3ef-c969-4930-8f87-3e9250c5b716_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 40,
   "iri": "http://www.github.com/sparqlunicorn#4960c3ef-c969-4930-8f87-3e9250c5b716",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4960c3ef-c969-4930-8f87-3e9250c5b716"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "7",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#49ca3504-ffe4-4ec4-bd95-72123b14e48e_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 41,
   "iri": "http://www.github.com/sparqlunicorn#49ca3504-ffe4-4ec4-bd95-72123b14e48e",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "49ca3504-ffe4-4ec4-bd95-72123b14e48e"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "32",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#4a4c2cd5-02ce-415c-b812-ec9fd13d73c6_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 42,
   "iri": "http://www.github.com/sparqlunicorn#4a4c2cd5-02ce-415c-b812-ec9fd13d73c6",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4a4c2cd5-02ce-415c-b812-ec9fd13d73c6"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "149",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#4bb458df-e06c-4d79-bcdb-663a09168b93_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 43,
   "iri": "http://www.github.com/sparqlunicorn#4bb458df-e06c-4d79-bcdb-663a09168b93",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4bb458df-e06c-4d79-bcdb-663a09168b93"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "152",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#4ccf2904-a68a-4c88-81de-8d549bc421e9_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 44,
   "iri": "http://www.github.com/sparqlunicorn#4ccf2904-a68a-4c88-81de-8d549bc421e9",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4ccf2904-a68a-4c88-81de-8d549bc421e9"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "157",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#4f25cbc8-6f89-434b-8988-0e3e965f2aa7_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 45,
   "iri": "http://www.github.com/sparqlunicorn#4f25cbc8-6f89-434b-8988-0e3e965f2aa7",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4f25cbc8-6f89-434b-8988-0e3e965f2aa7"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "20",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#521dd20c-2456-40a9-8b2b-0064396ccb07_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 46,
   "iri": "http://www.github.com/sparqlunicorn#521dd20c-2456-40a9-8b2b-0064396ccb07",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "521dd20c-2456-40a9-8b2b-0064396ccb07"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "91",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#526eb9a7-2805-4a93-b49c-df9a922b279c_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 47,
   "iri": "http://www.github.com/sparqlunicorn#526eb9a7-2805-4a93-b49c-df9a922b279c",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "526eb9a7-2805-4a93-b49c-df9a922b279c"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "90",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#52f8f607-2c6b-4b25-90f8-861ed744e1ca_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 48,
   "iri": "http://www.github.com/sparqlunicorn#52f8f607-2c6b-4b25-90f8-861ed744e1ca",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "52f8f607-2c6b-4b25-90f8-861ed744e1ca"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "65",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#53bf2db7-7718-4835-bc3c-2baf3068207f_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 49,
   "iri": "http://www.github.com/sparqlunicorn#53bf2db7-7718-4835-bc3c-2baf3068207f",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "53bf2db7-7718-4835-bc3c-2baf3068207f"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "78",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#53ed429c-06e1-419a-9002-12d7bcf18ba0_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 50,
   "iri": "http://www.github.com/sparqlunicorn#53ed429c-06e1-419a-9002-12d7bcf18ba0",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "53ed429c-06e1-419a-9002-12d7bcf18ba0"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "21",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#54e13ec0-7b5a-4f4a-892f-615ab97d9000_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 51,
   "iri": "http://www.github.com/sparqlunicorn#54e13ec0-7b5a-4f4a-892f-615ab97d9000",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "54e13ec0-7b5a-4f4a-892f-615ab97d9000"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "142",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#55eee8ec-2c4a-4924-8d2e-89b0d57b2d74_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 52,
   "iri": "http://www.github.com/sparqlunicorn#55eee8ec-2c4a-4924-8d2e-89b0d57b2d74",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "55eee8ec-2c4a-4924-8d2e-89b0d57b2d74"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "39",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#569674c9-3895-4cb5-8f2c-38e608cab577_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 53,
   "iri": "http://www.github.com/sparqlunicorn#569674c9-3895-4cb5-8f2c-38e608cab577",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "569674c9-3895-4cb5-8f2c-38e608cab577"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "62",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#5bcc0471-f0ba-417c-bae1-abb3223cd352_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 54,
   "iri": "http://www.github.com/sparqlunicorn#5bcc0471-f0ba-417c-bae1-abb3223cd352",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "5bcc0471-f0ba-417c-bae1-abb3223cd352"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "129",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#5c6ce17c-cdde-459e-a423-ad5d827e5d4e_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 55,
   "iri": "http://www.github.com/sparqlunicorn#5c6ce17c-cdde-459e-a423-ad5d827e5d4e",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "5c6ce17c-cdde-459e-a423-ad5d827e5d4e"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "26",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#5f5d079d-712c-4ad0-842c-c04d0d0763e5_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 56,
   "iri": "http://www.github.com/sparqlunicorn#5f5d079d-712c-4ad0-842c-c04d0d0763e5",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "5f5d079d-712c-4ad0-842c-c04d0d0763e5"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "137",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#64586be1-1d82-4160-a5fb-5af067a6276b_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 57,
   "iri": "http://www.github.com/sparqlunicorn#64586be1-1d82-4160-a5fb-5af067a6276b",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "64586be1-1d82-4160-a5fb-5af067a6276b"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "99",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#646cf01d-f91f-454d-96f3-69f122d90cf1_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 58,
   "iri": "http://www.github.com/sparqlunicorn#646cf01d-f91f-454d-96f3-69f122d90cf1",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "646cf01d-f91f-454d-96f3-69f122d90cf1"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "116",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#65f7355b-9621-4b7e-a716-8fa0a4f07a0e_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 59,
   "iri": "http://www.github.com/sparqlunicorn#65f7355b-9621-4b7e-a716-8fa0a4f07a0e",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "65f7355b-9621-4b7e-a716-8fa0a4f07a0e"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "22",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#66424eb1-6ec0-4f2a-9003-e2143babe975_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 60,
   "iri": "http://www.github.com/sparqlunicorn#66424eb1-6ec0-4f2a-9003-e2143babe975",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "66424eb1-6ec0-4f2a-9003-e2143babe975"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "118",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#6839545f-3c21-456c-8e65-a34518a8bf7c_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 61,
   "iri": "http://www.github.com/sparqlunicorn#6839545f-3c21-456c-8e65-a34518a8bf7c",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6839545f-3c21-456c-8e65-a34518a8bf7c"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "53",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#69195ab5-0241-4995-8079-fee9d5509376_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 62,
   "iri": "http://www.github.com/sparqlunicorn#69195ab5-0241-4995-8079-fee9d5509376",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "69195ab5-0241-4995-8079-fee9d5509376"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "145",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#6939e3db-546a-4041-a823-e729a2d4b694_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 63,
   "iri": "http://www.github.com/sparqlunicorn#6939e3db-546a-4041-a823-e729a2d4b694",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6939e3db-546a-4041-a823-e729a2d4b694"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "18",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#6f14de57-897a-4758-a984-262ca18baf75_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 64,
   "iri": "http://www.github.com/sparqlunicorn#6f14de57-897a-4758-a984-262ca18baf75",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6f14de57-897a-4758-a984-262ca18baf75"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "111",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#6fa013cb-f86c-4978-ac06-999760a58991_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 65,
   "iri": "http://www.github.com/sparqlunicorn#6fa013cb-f86c-4978-ac06-999760a58991",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6fa013cb-f86c-4978-ac06-999760a58991"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "80",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#7a2b1560-c346-41b6-915b-a10547cd3440_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 66,
   "iri": "http://www.github.com/sparqlunicorn#7a2b1560-c346-41b6-915b-a10547cd3440",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7a2b1560-c346-41b6-915b-a10547cd3440"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "144",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#7abeb59f-2759-4736-897c-69d50f0cdb27_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 67,
   "iri": "http://www.github.com/sparqlunicorn#7abeb59f-2759-4736-897c-69d50f0cdb27",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7abeb59f-2759-4736-897c-69d50f0cdb27"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "133",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#7c93771e-f108-4c1a-8ede-799d87629036_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 68,
   "iri": "http://www.github.com/sparqlunicorn#7c93771e-f108-4c1a-8ede-799d87629036",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7c93771e-f108-4c1a-8ede-799d87629036"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "63",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#7effe8a8-89ea-40c7-b095-ac70c7f9c030_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 69,
   "iri": "http://www.github.com/sparqlunicorn#7effe8a8-89ea-40c7-b095-ac70c7f9c030",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7effe8a8-89ea-40c7-b095-ac70c7f9c030"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "77",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#81a150a3-f5f9-4f03-84d7-b5e043f9d371_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 70,
   "iri": "http://www.github.com/sparqlunicorn#81a150a3-f5f9-4f03-84d7-b5e043f9d371",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "81a150a3-f5f9-4f03-84d7-b5e043f9d371"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "19",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#866cbf6d-496f-4aff-acce-5f47e32fdcd9_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 71,
   "iri": "http://www.github.com/sparqlunicorn#866cbf6d-496f-4aff-acce-5f47e32fdcd9",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "866cbf6d-496f-4aff-acce-5f47e32fdcd9"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "76",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#86997e8b-4662-4c0f-a2d1-b17edc36ac8a_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 72,
   "iri": "http://www.github.com/sparqlunicorn#86997e8b-4662-4c0f-a2d1-b17edc36ac8a",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "86997e8b-4662-4c0f-a2d1-b17edc36ac8a"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "158",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#89b07983-8e6c-4b79-a97f-618a913945ee_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 73,
   "iri": "http://www.github.com/sparqlunicorn#89b07983-8e6c-4b79-a97f-618a913945ee",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "89b07983-8e6c-4b79-a97f-618a913945ee"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "120",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#8a782006-277b-43df-b476-622e770433ba_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 74,
   "iri": "http://www.github.com/sparqlunicorn#8a782006-277b-43df-b476-622e770433ba",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8a782006-277b-43df-b476-622e770433ba"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "49",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#8fc69a50-3bd3-43ef-9f74-2e52360f520c_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 75,
   "iri": "http://www.github.com/sparqlunicorn#8fc69a50-3bd3-43ef-9f74-2e52360f520c",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8fc69a50-3bd3-43ef-9f74-2e52360f520c"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "104",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#90d8c5f4-021b-414b-8219-47f4e39bbff6_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 76,
   "iri": "http://www.github.com/sparqlunicorn#90d8c5f4-021b-414b-8219-47f4e39bbff6",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "90d8c5f4-021b-414b-8219-47f4e39bbff6"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "61",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#91417e18-f9c7-49d7-80b2-ec408b898147_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 77,
   "iri": "http://www.github.com/sparqlunicorn#91417e18-f9c7-49d7-80b2-ec408b898147",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "91417e18-f9c7-49d7-80b2-ec408b898147"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "40",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#92bc7954-d3e5-456e-a3f9-15ed633ca086_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 78,
   "iri": "http://www.github.com/sparqlunicorn#92bc7954-d3e5-456e-a3f9-15ed633ca086",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "92bc7954-d3e5-456e-a3f9-15ed633ca086"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "153",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#9460842b-7734-4665-82a2-0085a33ce453_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 79,
   "iri": "http://www.github.com/sparqlunicorn#9460842b-7734-4665-82a2-0085a33ce453",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "9460842b-7734-4665-82a2-0085a33ce453"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "97",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#9a404584-fd22-42a3-ba09-2382a8cc7596_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 80,
   "iri": "http://www.github.com/sparqlunicorn#9a404584-fd22-42a3-ba09-2382a8cc7596",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "9a404584-fd22-42a3-ba09-2382a8cc7596"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "66",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#9d5f5c58-94c9-426a-862c-0bce70aa017e_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 81,
   "iri": "http://www.github.com/sparqlunicorn#9d5f5c58-94c9-426a-862c-0bce70aa017e",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "9d5f5c58-94c9-426a-862c-0bce70aa017e"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "64",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#9e80e441-dc60-4514-8477-702e7d8ea321_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 82,
   "iri": "http://www.github.com/sparqlunicorn#9e80e441-dc60-4514-8477-702e7d8ea321",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "9e80e441-dc60-4514-8477-702e7d8ea321"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "124",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#a0108469-2166-4732-8aff-f6429f29a82f_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 83,
   "iri": "http://www.github.com/sparqlunicorn#a0108469-2166-4732-8aff-f6429f29a82f",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a0108469-2166-4732-8aff-f6429f29a82f"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "113",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#a09111ca-c359-48cc-9a96-e79673caa0b8_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 84,
   "iri": "http://www.github.com/sparqlunicorn#a09111ca-c359-48cc-9a96-e79673caa0b8",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a09111ca-c359-48cc-9a96-e79673caa0b8"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "3",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#a3228d61-d64a-4b1f-be73-130b222b1c11_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 85,
   "iri": "http://www.github.com/sparqlunicorn#a3228d61-d64a-4b1f-be73-130b222b1c11",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a3228d61-d64a-4b1f-be73-130b222b1c11"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "17",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#a7f106af-5755-44ed-9ba2-86b1110e21f7_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 86,
   "iri": "http://www.github.com/sparqlunicorn#a7f106af-5755-44ed-9ba2-86b1110e21f7",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a7f106af-5755-44ed-9ba2-86b1110e21f7"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "126",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#abb845a6-5386-459e-938f-5100e0af1f72_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 87,
   "iri": "http://www.github.com/sparqlunicorn#abb845a6-5386-459e-938f-5100e0af1f72",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "abb845a6-5386-459e-938f-5100e0af1f72"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "6",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#b1984fb3-ca88-4453-8fa3-b782d735052c_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 88,
   "iri": "http://www.github.com/sparqlunicorn#b1984fb3-ca88-4453-8fa3-b782d735052c",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b1984fb3-ca88-4453-8fa3-b782d735052c"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "85",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#b3a42fde-e5a1-4a7f-912f-ef0fe1019b2b_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 89,
   "iri": "http://www.github.com/sparqlunicorn#b3a42fde-e5a1-4a7f-912f-ef0fe1019b2b",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b3a42fde-e5a1-4a7f-912f-ef0fe1019b2b"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "121",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#b6233e40-079e-447d-b960-2f59a90dcd6e_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 90,
   "iri": "http://www.github.com/sparqlunicorn#b6233e40-079e-447d-b960-2f59a90dcd6e",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b6233e40-079e-447d-b960-2f59a90dcd6e"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "123",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#b70a68c4-e63b-445d-8f0f-ec2384dc1363_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 91,
   "iri": "http://www.github.com/sparqlunicorn#b70a68c4-e63b-445d-8f0f-ec2384dc1363",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b70a68c4-e63b-445d-8f0f-ec2384dc1363"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "128",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#b7b8283e-fd64-4b1f-b6e3-81a71091b63a_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 92,
   "iri": "http://www.github.com/sparqlunicorn#b7b8283e-fd64-4b1f-b6e3-81a71091b63a",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b7b8283e-fd64-4b1f-b6e3-81a71091b63a"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "107",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#b8b8a52d-9851-4436-9d74-90cc18bdc8e1_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 93,
   "iri": "http://www.github.com/sparqlunicorn#b8b8a52d-9851-4436-9d74-90cc18bdc8e1",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b8b8a52d-9851-4436-9d74-90cc18bdc8e1"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "60",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#b8ca6de4-79fe-49d2-b786-e5a01b2dc2a0_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 94,
   "iri": "http://www.github.com/sparqlunicorn#b8ca6de4-79fe-49d2-b786-e5a01b2dc2a0",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b8ca6de4-79fe-49d2-b786-e5a01b2dc2a0"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "30",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#b9b8ed23-6d56-4374-b098-d5fe1a84c94f_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 95,
   "iri": "http://www.github.com/sparqlunicorn#b9b8ed23-6d56-4374-b098-d5fe1a84c94f",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b9b8ed23-6d56-4374-b098-d5fe1a84c94f"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "150",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#ba37ba09-e4e5-4785-886e-bf6e84dbfb8a_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 96,
   "iri": "http://www.github.com/sparqlunicorn#ba37ba09-e4e5-4785-886e-bf6e84dbfb8a",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ba37ba09-e4e5-4785-886e-bf6e84dbfb8a"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "86",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#bb2e25bb-08ac-43b7-bdd0-c0fb04835eb8_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 97,
   "iri": "http://www.github.com/sparqlunicorn#bb2e25bb-08ac-43b7-bdd0-c0fb04835eb8",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "bb2e25bb-08ac-43b7-bdd0-c0fb04835eb8"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "110",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#bd4e5cb6-b4bc-4d65-921d-21dec34dda1b_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 98,
   "iri": "http://www.github.com/sparqlunicorn#bd4e5cb6-b4bc-4d65-921d-21dec34dda1b",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "bd4e5cb6-b4bc-4d65-921d-21dec34dda1b"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "125",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#c08f3cf1-e573-4914-b15f-b249261d9fab_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 99,
   "iri": "http://www.github.com/sparqlunicorn#c08f3cf1-e573-4914-b15f-b249261d9fab",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c08f3cf1-e573-4914-b15f-b249261d9fab"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "95",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#c2174141-51b4-4932-b3b3-4526eb6245d5_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 100,
   "iri": "http://www.github.com/sparqlunicorn#c2174141-51b4-4932-b3b3-4526eb6245d5",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c2174141-51b4-4932-b3b3-4526eb6245d5"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "96",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#c2efc23f-47bb-47cc-9786-739739a84f3b_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 101,
   "iri": "http://www.github.com/sparqlunicorn#c2efc23f-47bb-47cc-9786-739739a84f3b",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c2efc23f-47bb-47cc-9786-739739a84f3b"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "115",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#c3bb016c-19bf-454f-8530-ffe68ec1da1a_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 102,
   "iri": "http://www.github.com/sparqlunicorn#c3bb016c-19bf-454f-8530-ffe68ec1da1a",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c3bb016c-19bf-454f-8530-ffe68ec1da1a"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "93",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#c5f35a70-8ad6-4cd8-8b0d-519a9ce95b94_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 103,
   "iri": "http://www.github.com/sparqlunicorn#c5f35a70-8ad6-4cd8-8b0d-519a9ce95b94",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c5f35a70-8ad6-4cd8-8b0d-519a9ce95b94"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "131",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#cbe5d6de-a929-4641-9d9b-9b9b2498eeb3_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 104,
   "iri": "http://www.github.com/sparqlunicorn#cbe5d6de-a929-4641-9d9b-9b9b2498eeb3",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cbe5d6de-a929-4641-9d9b-9b9b2498eeb3"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "100",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#cc01dfc5-6d56-472f-9045-d22f22b2ca3a_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 105,
   "iri": "http://www.github.com/sparqlunicorn#cc01dfc5-6d56-472f-9045-d22f22b2ca3a",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cc01dfc5-6d56-472f-9045-d22f22b2ca3a"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "69",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#cc774e18-df41-45a3-976b-bbbbc25ecff1_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 106,
   "iri": "http://www.github.com/sparqlunicorn#cc774e18-df41-45a3-976b-bbbbc25ecff1",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cc774e18-df41-45a3-976b-bbbbc25ecff1"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "102",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#cdab6a0b-7238-4f14-894e-b5fe7bb763d9_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 107,
   "iri": "http://www.github.com/sparqlunicorn#cdab6a0b-7238-4f14-894e-b5fe7bb763d9",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cdab6a0b-7238-4f14-894e-b5fe7bb763d9"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "73",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#ce36306d-ab71-49f0-aed2-6cea0b2cf1d7_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 108,
   "iri": "http://www.github.com/sparqlunicorn#ce36306d-ab71-49f0-aed2-6cea0b2cf1d7",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ce36306d-ab71-49f0-aed2-6cea0b2cf1d7"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "151",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#cfd8197a-ab1b-41e3-9c44-30bb2d1827ac_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 109,
   "iri": "http://www.github.com/sparqlunicorn#cfd8197a-ab1b-41e3-9c44-30bb2d1827ac",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cfd8197a-ab1b-41e3-9c44-30bb2d1827ac"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "127",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#d04e1b9c-9c7e-4e90-86a1-9c1e367de3e4_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 110,
   "iri": "http://www.github.com/sparqlunicorn#d04e1b9c-9c7e-4e90-86a1-9c1e367de3e4",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d04e1b9c-9c7e-4e90-86a1-9c1e367de3e4"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "140",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#d1248c32-d156-418a-a10f-104d770ca6fd_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 111,
   "iri": "http://www.github.com/sparqlunicorn#d1248c32-d156-418a-a10f-104d770ca6fd",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d1248c32-d156-418a-a10f-104d770ca6fd"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "138",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#d39b0a02-169d-40a8-897d-7c7a5eee497d_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 112,
   "iri": "http://www.github.com/sparqlunicorn#d39b0a02-169d-40a8-897d-7c7a5eee497d",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d39b0a02-169d-40a8-897d-7c7a5eee497d"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "52",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#d46e1360-2fe2-43a6-80fc-892d3d2881c1_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 113,
   "iri": "http://www.github.com/sparqlunicorn#d46e1360-2fe2-43a6-80fc-892d3d2881c1",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d46e1360-2fe2-43a6-80fc-892d3d2881c1"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "11",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#d5710f70-63c7-4107-ac87-3fad0dca5830_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 114,
   "iri": "http://www.github.com/sparqlunicorn#d5710f70-63c7-4107-ac87-3fad0dca5830",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d5710f70-63c7-4107-ac87-3fad0dca5830"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "10",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#dc5ba2e0-7975-466e-930f-a5469030df40_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 115,
   "iri": "http://www.github.com/sparqlunicorn#dc5ba2e0-7975-466e-930f-a5469030df40",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "dc5ba2e0-7975-466e-930f-a5469030df40"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "5",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#dca0e312-48bb-4ff0-9316-fa71cdda0c9c_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 116,
   "iri": "http://www.github.com/sparqlunicorn#dca0e312-48bb-4ff0-9316-fa71cdda0c9c",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "dca0e312-48bb-4ff0-9316-fa71cdda0c9c"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "12",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#ddc25136-83aa-463c-9460-c718847292e0_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 117,
   "iri": "http://www.github.com/sparqlunicorn#ddc25136-83aa-463c-9460-c718847292e0",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ddc25136-83aa-463c-9460-c718847292e0"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "8",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#de109b58-0791-4eb7-9fff-d536f15297af_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 118,
   "iri": "http://www.github.com/sparqlunicorn#de109b58-0791-4eb7-9fff-d536f15297af",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "de109b58-0791-4eb7-9fff-d536f15297af"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "112",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#e1a4e1ed-5021-4210-80a0-248b4c59ba2b_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 119,
   "iri": "http://www.github.com/sparqlunicorn#e1a4e1ed-5021-4210-80a0-248b4c59ba2b",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e1a4e1ed-5021-4210-80a0-248b4c59ba2b"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "25",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#e2bb5213-40ec-467b-ab58-dfd191d67b15_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 120,
   "iri": "http://www.github.com/sparqlunicorn#e2bb5213-40ec-467b-ab58-dfd191d67b15",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e2bb5213-40ec-467b-ab58-dfd191d67b15"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "106",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#e46dfffe-e0b5-4b6b-8545-7f7133231fcd_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 121,
   "iri": "http://www.github.com/sparqlunicorn#e46dfffe-e0b5-4b6b-8545-7f7133231fcd",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e46dfffe-e0b5-4b6b-8545-7f7133231fcd"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "51",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#e4f0d99c-176b-4354-872f-84ea358ac1d1_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 122,
   "iri": "http://www.github.com/sparqlunicorn#e4f0d99c-176b-4354-872f-84ea358ac1d1",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e4f0d99c-176b-4354-872f-84ea358ac1d1"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "139",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#e537eb8d-e10d-4cfa-88d8-f7e4e74e5a66_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 123,
   "iri": "http://www.github.com/sparqlunicorn#e537eb8d-e10d-4cfa-88d8-f7e4e74e5a66",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e537eb8d-e10d-4cfa-88d8-f7e4e74e5a66"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "94",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#e6b91a0a-28db-4f3c-bbe7-3191b69ece51_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 124,
   "iri": "http://www.github.com/sparqlunicorn#e6b91a0a-28db-4f3c-bbe7-3191b69ece51",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e6b91a0a-28db-4f3c-bbe7-3191b69ece51"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "155",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#e80677e6-20b7-4e3b-85f3-26eabae3fe58_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 125,
   "iri": "http://www.github.com/sparqlunicorn#e80677e6-20b7-4e3b-85f3-26eabae3fe58",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e80677e6-20b7-4e3b-85f3-26eabae3fe58"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "89",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#e9b6f78c-acb3-44a8-a83d-5230ac8adfb8_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 126,
   "iri": "http://www.github.com/sparqlunicorn#e9b6f78c-acb3-44a8-a83d-5230ac8adfb8",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e9b6f78c-acb3-44a8-a83d-5230ac8adfb8"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "16",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#ea530a2d-219a-4b12-a8b4-4cf7ca09b6b1_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 127,
   "iri": "http://www.github.com/sparqlunicorn#ea530a2d-219a-4b12-a8b4-4cf7ca09b6b1",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ea530a2d-219a-4b12-a8b4-4cf7ca09b6b1"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "72",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#ebd26bae-6b1e-419b-ab53-a52e011f6c81_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 128,
   "iri": "http://www.github.com/sparqlunicorn#ebd26bae-6b1e-419b-ab53-a52e011f6c81",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ebd26bae-6b1e-419b-ab53-a52e011f6c81"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "117",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#ec69643d-e636-443f-95a0-bb55b9614841_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 129,
   "iri": "http://www.github.com/sparqlunicorn#ec69643d-e636-443f-95a0-bb55b9614841",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ec69643d-e636-443f-95a0-bb55b9614841"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "9",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#eec807e9-47d0-4801-a3f8-017c818a99e7_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 130,
   "iri": "http://www.github.com/sparqlunicorn#eec807e9-47d0-4801-a3f8-017c818a99e7",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "eec807e9-47d0-4801-a3f8-017c818a99e7"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "87",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#f148606b-a850-4d16-a627-606fb8ee5577_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 131,
   "iri": "http://www.github.com/sparqlunicorn#f148606b-a850-4d16-a627-606fb8ee5577",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "f148606b-a850-4d16-a627-606fb8ee5577"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "146",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#f533c183-22fb-43cf-9bd1-265caaa661a0_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 132,
   "iri": "http://www.github.com/sparqlunicorn#f533c183-22fb-43cf-9bd1-265caaa661a0",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "f533c183-22fb-43cf-9bd1-265caaa661a0"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "4",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#fab26445-cb25-492a-8d8a-47f31706a753_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 133,
   "iri": "http://www.github.com/sparqlunicorn#fab26445-cb25-492a-8d8a-47f31706a753",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fab26445-cb25-492a-8d8a-47f31706a753"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "83",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#fd82485d-f6e8-4413-9120-c739f0cc1e82_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 134,
   "iri": "http://www.github.com/sparqlunicorn#fd82485d-f6e8-4413-9120-c739f0cc1e82",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fd82485d-f6e8-4413-9120-c739f0cc1e82"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "smashed",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "54",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#fec6c570-b8d5-49be-aa15-8be41afd1aa3_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 135,
   "iri": "http://www.github.com/sparqlunicorn#fec6c570-b8d5-49be-aa15-8be41afd1aa3",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fec6c570-b8d5-49be-aa15-8be41afd1aa3"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "46",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#09dd46c1-cd5f-4f5a-b2fa-2341b6d0c9eb_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 136,
   "iri": "http://www.github.com/sparqlunicorn#09dd46c1-cd5f-4f5a-b2fa-2341b6d0c9eb",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "09dd46c1-cd5f-4f5a-b2fa-2341b6d0c9eb"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "43",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#0d9d574e-754a-4f9c-93b7-47fc15d4f2d3_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 137,
   "iri": "http://www.github.com/sparqlunicorn#0d9d574e-754a-4f9c-93b7-47fc15d4f2d3",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0d9d574e-754a-4f9c-93b7-47fc15d4f2d3"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "42",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#18d49631-5a11-48f6-acb7-62cfaf8de742_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 138,
   "iri": "http://www.github.com/sparqlunicorn#18d49631-5a11-48f6-acb7-62cfaf8de742",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "18d49631-5a11-48f6-acb7-62cfaf8de742"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "35",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#1d935768-ea8d-4be8-884b-a4dff9825021_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 139,
   "iri": "http://www.github.com/sparqlunicorn#1d935768-ea8d-4be8-884b-a4dff9825021",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1d935768-ea8d-4be8-884b-a4dff9825021"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "58",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#37993191-20c4-49a4-b3bc-2a28960f323d_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 140,
   "iri": "http://www.github.com/sparqlunicorn#37993191-20c4-49a4-b3bc-2a28960f323d",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "37993191-20c4-49a4-b3bc-2a28960f323d"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "55",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#3d393a7a-ea8c-45d2-aca7-1453da500bb5_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 141,
   "iri": "http://www.github.com/sparqlunicorn#3d393a7a-ea8c-45d2-aca7-1453da500bb5",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3d393a7a-ea8c-45d2-aca7-1453da500bb5"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "57",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#4e1bbd40-75c2-4134-abdf-71a85b238394_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 142,
   "iri": "http://www.github.com/sparqlunicorn#4e1bbd40-75c2-4134-abdf-71a85b238394",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4e1bbd40-75c2-4134-abdf-71a85b238394"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "59",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#6247dd7d-45da-4805-9922-ad78d30ddc00_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 143,
   "iri": "http://www.github.com/sparqlunicorn#6247dd7d-45da-4805-9922-ad78d30ddc00",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6247dd7d-45da-4805-9922-ad78d30ddc00"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion IIa",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Norrfors",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "169",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#62c65c41-af9e-4af8-af61-97602598da5c_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 144,
   "iri": "http://www.github.com/sparqlunicorn#62c65c41-af9e-4af8-af61-97602598da5c",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "62c65c41-af9e-4af8-af61-97602598da5c"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "38",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#6a176aee-0f30-4da3-bd88-b48f61a6a5ca_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 145,
   "iri": "http://www.github.com/sparqlunicorn#6a176aee-0f30-4da3-bd88-b48f61a6a5ca",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6a176aee-0f30-4da3-bd88-b48f61a6a5ca"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "56",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#8a40c3de-b0fb-4dc0-84d4-2000b15d6f60_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 146,
   "iri": "http://www.github.com/sparqlunicorn#8a40c3de-b0fb-4dc0-84d4-2000b15d6f60",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8a40c3de-b0fb-4dc0-84d4-2000b15d6f60"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "41",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#a3006e8d-46d6-4db0-81aa-23238514e5eb_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 147,
   "iri": "http://www.github.com/sparqlunicorn#a3006e8d-46d6-4db0-81aa-23238514e5eb",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a3006e8d-46d6-4db0-81aa-23238514e5eb"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "37",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#a9d036a7-9001-47c8-89db-54c0fe8d6829_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 148,
   "iri": "http://www.github.com/sparqlunicorn#a9d036a7-9001-47c8-89db-54c0fe8d6829",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a9d036a7-9001-47c8-89db-54c0fe8d6829"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion IIa",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Norrfors",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "168",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#ab7a69ca-6c8f-4d13-893b-3702231a60b7_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 149,
   "iri": "http://www.github.com/sparqlunicorn#ab7a69ca-6c8f-4d13-893b-3702231a60b7",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ab7a69ca-6c8f-4d13-893b-3702231a60b7"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion IIb",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Norrfors",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "171",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#ba7170d7-475e-4502-9cbd-054d5d326a7d_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 150,
   "iri": "http://www.github.com/sparqlunicorn#ba7170d7-475e-4502-9cbd-054d5d326a7d",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ba7170d7-475e-4502-9cbd-054d5d326a7d"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "34",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#f4c616a4-3188-45f4-ad66-878498003c20_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 151,
   "iri": "http://www.github.com/sparqlunicorn#f4c616a4-3188-45f4-ad66-878498003c20",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "f4c616a4-3188-45f4-ad66-878498003c20"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion IIb",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Norrfors",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "170",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#fd8fe6ba-e13a-4ef3-9047-626fc45be9e2_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 152,
   "iri": "http://www.github.com/sparqlunicorn#fd8fe6ba-e13a-4ef3-9047-626fc45be9e2",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fd8fe6ba-e13a-4ef3-9047-626fc45be9e2"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Minions",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "36",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#fdf099f7-869f-499e-80c3-00c91f0a4d35_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 153,
   "iri": "http://www.github.com/sparqlunicorn#fdf099f7-869f-499e-80c3-00c91f0a4d35",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fdf099f7-869f-499e-80c3-00c91f0a4d35"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Stone",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "33",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#0b12b1c6-4f43-4635-9437-2eccad89860a_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 154,
   "iri": "http://www.github.com/sparqlunicorn#0b12b1c6-4f43-4635-9437-2eccad89860a",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0b12b1c6-4f43-4635-9437-2eccad89860a"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Stone",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "31",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#43445b66-c4c5-4668-8fb7-00186131c6ff_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 155,
   "iri": "http://www.github.com/sparqlunicorn#43445b66-c4c5-4668-8fb7-00186131c6ff",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "43445b66-c4c5-4668-8fb7-00186131c6ff"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Stone",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "44",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#b7ee573a-bf90-4f57-b159-39e1fc2822a8_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 156,
   "iri": "http://www.github.com/sparqlunicorn#b7ee573a-bf90-4f57-b159-39e1fc2822a8",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b7ee573a-bf90-4f57-b159-39e1fc2822a8"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Stone",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "45",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#c7c46dd9-6977-4662-86fa-7bd465591b65_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 157,
   "iri": "http://www.github.com/sparqlunicorn#c7c46dd9-6977-4662-86fa-7bd465591b65",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c7c46dd9-6977-4662-86fa-7bd465591b65"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Street",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "161",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#1ac53fc4-aeb3-4256-ac8e-47160f4d642a_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 158,
   "iri": "http://www.github.com/sparqlunicorn#1ac53fc4-aeb3-4256-ac8e-47160f4d642a",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1ac53fc4-aeb3-4256-ac8e-47160f4d642a"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Street",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion IIa",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Norrfors",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "162",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#3e67e756-dad2-4514-a9af-511fd2db0e91_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 159,
   "iri": "http://www.github.com/sparqlunicorn#3e67e756-dad2-4514-a9af-511fd2db0e91",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3e67e756-dad2-4514-a9af-511fd2db0e91"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Street",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "163",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#72d83c05-1969-4b24-a507-eb1450bffea4_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 160,
   "iri": "http://www.github.com/sparqlunicorn#72d83c05-1969-4b24-a507-eb1450bffea4",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "72d83c05-1969-4b24-a507-eb1450bffea4"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Street",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion IIa",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Norrfors",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "167",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#7ee2bf5f-4059-4b49-af4f-173eb49582c7_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 161,
   "iri": "http://www.github.com/sparqlunicorn#7ee2bf5f-4059-4b49-af4f-173eb49582c7",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7ee2bf5f-4059-4b49-af4f-173eb49582c7"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Street",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "165",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#8e91ce6c-6177-45e0-80f4-477fd6e14587_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 162,
   "iri": "http://www.github.com/sparqlunicorn#8e91ce6c-6177-45e0-80f4-477fd6e14587",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8e91ce6c-6177-45e0-80f4-477fd6e14587"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Street",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "166",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#c62d6ed4-30ab-402b-ba2e-c432aaa0d53b_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 163,
   "iri": "http://www.github.com/sparqlunicorn#c62d6ed4-30ab-402b-ba2e-c432aaa0d53b",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c62d6ed4-30ab-402b-ba2e-c432aaa0d53b"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Street",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "164",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#d2e36d44-1ea1-4205-8920-c97cdab3b3aa_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 164,
   "iri": "http://www.github.com/sparqlunicorn#d2e36d44-1ea1-4205-8920-c97cdab3b3aa",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d2e36d44-1ea1-4205-8920-c97cdab3b3aa"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Kangaroo",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "67",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#3a55458f-5c2f-4368-9a03-384f6377e301_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 165,
   "iri": "http://www.github.com/sparqlunicorn#3a55458f-5c2f-4368-9a03-384f6377e301",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3a55458f-5c2f-4368-9a03-384f6377e301"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Kangaroo",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion I",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Norrfors",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "172",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#622ce224-fab0-4fbd-8a79-d8ecc9b26a49_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 166,
   "iri": "http://www.github.com/sparqlunicorn#622ce224-fab0-4fbd-8a79-d8ecc9b26a49",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "622ce224-fab0-4fbd-8a79-d8ecc9b26a49"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Kangaroo",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "70",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#6daab534-65db-49f5-9b1b-5842930184c6_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 167,
   "iri": "http://www.github.com/sparqlunicorn#6daab534-65db-49f5-9b1b-5842930184c6",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6daab534-65db-49f5-9b1b-5842930184c6"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "flatten",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Kangaroo",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "71",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#8522a6f2-b165-4529-9dd6-30bc0da88476_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 168,
   "iri": "http://www.github.com/sparqlunicorn#8522a6f2-b165-4529-9dd6-30bc0da88476",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8522a6f2-b165-4529-9dd6-30bc0da88476"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Condition": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Condition",
      "language": "undefined",
      "value": "dry",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Crater",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion IIa",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Norrfors",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "160",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#4db030c2-2331-4dad-b17c-da023bceff9f_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 169,
   "iri": "http://www.github.com/sparqlunicorn#4db030c2-2331-4dad-b17c-da023bceff9f",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4db030c2-2331-4dad-b17c-da023bceff9f"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Crater",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "47",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#97e0311e-f072-4b6c-8619-4c8b81cb2232_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 170,
   "iri": "http://www.github.com/sparqlunicorn#97e0311e-f072-4b6c-8619-4c8b81cb2232",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "97e0311e-f072-4b6c-8619-4c8b81cb2232"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "Allen key (Inbusschl\u00fcssel)",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "68",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#86f8a06e-51c7-41be-935b-e70bfcaa67b7_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 171,
   "iri": "http://www.github.com/sparqlunicorn#86f8a06e-51c7-41be-935b-e70bfcaa67b7",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "86f8a06e-51c7-41be-935b-e70bfcaa67b7"
   },
   "annotations": {
    "http://www.w3.org/2000/01/rdf-schema#domain": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#domain",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#29555707-7201-41b5-8ef4-1c59caac6f59",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#range",
      "language": "undefined",
      "value": "http://www.w3.org/2001/XMLSchema#string",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 172,
   "iri": "http://www.github.com/sparqlunicorn#Name",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "Name"
   },
   "annotations": {
    "http://www.w3.org/2000/01/rdf-schema#domain": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#domain",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#29555707-7201-41b5-8ef4-1c59caac6f59",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#range",
      "language": "undefined",
      "value": "http://www.w3.org/2001/XMLSchema#string",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 173,
   "iri": "http://www.github.com/sparqlunicorn#Time_Period",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "Time_Period"
   },
   "annotations": {
    "http://www.w3.org/2000/01/rdf-schema#domain": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#domain",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#29555707-7201-41b5-8ef4-1c59caac6f59",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#range",
      "language": "undefined",
      "value": "http://www.w3.org/2001/XMLSchema#string",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 174,
   "iri": "http://www.github.com/sparqlunicorn#Trench",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "Trench"
   },
   "annotations": {
    "http://www.w3.org/2000/01/rdf-schema#domain": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#domain",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#29555707-7201-41b5-8ef4-1c59caac6f59",
      "type": "iri"
     }
    ],
    "http://www.w3.org/2000/01/rdf-schema#range": [
     {
      "identifier": "http://www.w3.org/2000/01/rdf-schema#range",
      "language": "undefined",
      "value": "http://www.w3.org/2001/XMLSchema#integer",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 175,
   "iri": "http://www.github.com/sparqlunicorn#fid",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fid"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 176,
   "iri": "http://www.opengis.net/ont/geosparql#asWKT",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "asWKT"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 177,
   "iri": "http://www.opengis.net/def/crs/EPSG/0/4326",
   "baseIRI": "http://www.opengis.net/def/crs/EPSG/0",
   "instances": 0,
   "label": {
    "IRI-based": "4326"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 178,
   "iri": "http://www.opengis.net/def/crs/EPSG/0/4326",
   "baseIRI": "http://www.opengis.net/def/crs/EPSG/0",
   "instances": 0,
   "label": "WGS 84",
   "annotations": {
    "http://www.opengis.net/ont/crs/coordinateSystem": [
     {
      "identifier": "http://www.opengis.net/ont/crs/coordinateSystem",
      "language": "undefined",
      "value": "http://www.opengis.net/def/crs/EPSG/0/4326_cs",
      "type": "iri"
     }
    ],
    "http://www.opengis.net/ont/crs/isApplicableTo": [
     {
      "identifier": "http://www.opengis.net/ont/crs/isApplicableTo",
      "language": "undefined",
      "value": "http://www.opengis.net/ont/crs/isbody/Earth",
      "type": "iri"
     }
    ],
    "http://www.opengis.net/ont/crs/isBound": [
     {
      "identifier": "http://www.opengis.net/ont/crs/isBound",
      "language": "undefined",
      "value": "false",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 179,
   "iri": "http://www.opengis.net/def/crs/EPSG/0/4326",
   "baseIRI": "http://www.opengis.net/def/crs/EPSG/0",
   "instances": 0,
   "label": {
    "IRI-based": "4326"
   },
   "annotations": {
    "http://www.opengis.net/ont/crs/asProj": [
     {
      "identifier": "http://www.opengis.net/ont/crs/asProj",
      "language": "undefined",
      "value": "+proj=longlat +datum=WGS84 +no_defs",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/crs/asWKT",
      "language": "undefined",
      "value": "GEOGCS[\\\"WGS 84\\\",DATUM[\\\"WGS_1984\\\",SPHEROID[\\\"WGS 84\\\",6378137,298.257223563,AUTHORITY[\\\"EPSG\\\",\\\"7030\\\"]],AUTHORITY[\\\"EPSG\\\",\\\"6326\\\"]],PRIMEM[\\\"Greenwich\\\",0,AUTHORITY[\\\"EPSG\\\",\\\"8901\\\"]],UNIT[\\\"degree\\\",0.0174532925199433,AUTHORITY[\\\"EPSG\\\",\\\"9122\\\"]],AUTHORITY[\\\"EPSG\\\",\\\"4326\\\"]]",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 180,
   "iri": "http://www.opengis.net/ont/crs/EPSG:4326",
   "baseIRI": "http://www.opengis.net/ont/crs",
   "instances": 0,
   "label": {
    "IRI-based": "EPSG:4326"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 181,
   "iri": "http://www.opengis.net/ont/crs/cs/axis/east",
   "baseIRI": "http://www.opengis.net/ont/crs/cs/axis",
   "instances": 0,
   "label": {
    "IRI-based": "east"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 182,
   "iri": "http://www.opengis.net/ont/crs/cs/axis/north",
   "baseIRI": "http://www.opengis.net/ont/crs/cs/axis",
   "instances": 0,
   "label": "WGS 84",
   "annotations": {
    "http://www.opengis.net/ont/crs/approximates": [
     {
      "identifier": "http://www.opengis.net/ont/crs/approximates",
      "language": "undefined",
      "value": "http://www.opengis.net/ont/crs/isbody/Earth",
      "type": "iri"
     }
    ],
    "http://www.opengis.net/ont/crs/eccentricity": [
     {
      "identifier": "http://www.opengis.net/ont/crs/eccentricity",
      "language": "undefined",
      "value": "0.00669438",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/flatteningParameter": [
     {
      "identifier": "http://www.opengis.net/ont/crs/flatteningParameter",
      "language": "undefined",
      "value": "0.003352811",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/isSphere": [
     {
      "identifier": "http://www.opengis.net/ont/crs/isSphere",
      "language": "undefined",
      "value": "false",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/semiMajorAxis": [
     {
      "identifier": "http://www.opengis.net/ont/crs/semiMajorAxis",
      "language": "undefined",
      "value": "6378137.0",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/semiMinorAxis": [
     {
      "identifier": "http://www.opengis.net/ont/crs/semiMinorAxis",
      "language": "undefined",
      "value": "6356752.314245179",
      "type": "label"
     }
    ],
    "http://www.w3.org/2004/02/skos/core#definition": [
     {
      "identifier": "http://www.w3.org/2004/02/skos/core#definition",
      "language": "undefined",
      "value": "+a=6378137 +f=0.0033528106647475126",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 183,
   "iri": "http://www.opengis.net/ont/crs/geod/WGS84",
   "baseIRI": "http://www.opengis.net/ont/crs/geod",
   "instances": 0,
   "label": {
    "IRI-based": "WGS84"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 184,
   "iri": "http://www.opengis.net/ont/geosparql#hasGeometry",
   "baseIRI": "http://www.opengis.net/ont/geosparql",
   "instances": 0,
   "label": {
    "IRI-based": "hasGeometry"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02639800000000037 63.8801599999999965, 20.02639599999999831 63.8801599999999965, 20.02639399999999981 63.88015899999999903, 20.02639299999999878 63.88015899999999903, 20.0263920000000013 63.88015800000000155, 20.02639100000000028 63.88015699999999697, 20.0263920000000013 63.88015599999999949, 20.02639399999999981 63.88015599999999949, 20.02639599999999831 63.88015599999999949, 20.02639800000000037 63.88015599999999949, 20.02639900000000139 63.88015599999999949, 20.02639999999999887 63.88015699999999697, 20.0264009999999999 63.88015800000000155, 20.0264009999999999 63.88015800000000155, 20.02639800000000037 63.8801599999999965))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 185,
   "iri": "http://www.github.com/sparqlunicorn#0194d590-c58c-4c97-98f8-303ea8ffe32a_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0194d590-c58c-4c97-98f8-303ea8ffe32a_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02642200000000017 63.88011699999999848, 20.02642099999999914 63.88011699999999848, 20.02642000000000166 63.88011699999999848, 20.02641900000000064 63.88011600000000101, 20.02641900000000064 63.88011600000000101, 20.02641900000000064 63.88011500000000353, 20.02642000000000166 63.88011500000000353, 20.02642099999999914 63.88011500000000353, 20.02642200000000017 63.88011500000000353, 20.0264230000000012 63.88011600000000101, 20.0264230000000012 63.88011600000000101, 20.0264230000000012 63.88011600000000101, 20.02642200000000017 63.88011699999999848))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 186,
   "iri": "http://www.github.com/sparqlunicorn#038d7342-a29b-4fb4-848a-38956486b324_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "038d7342-a29b-4fb4-848a-38956486b324_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02653099999999853 63.88015500000000202, 20.02653000000000105 63.88015500000000202, 20.026527999999999 63.88015500000000202, 20.026527999999999 63.88015399999999744, 20.02653000000000105 63.88015299999999996, 20.02653099999999853 63.88015399999999744, 20.02653300000000058 63.88015399999999744, 20.02653099999999853 63.88015500000000202))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 187,
   "iri": "http://www.github.com/sparqlunicorn#03bf5218-bda5-4791-b190-b302c4d8d6ce_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "03bf5218-bda5-4791-b190-b302c4d8d6ce_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02675299999999936 63.88011699999999848, 20.02675100000000086 63.88011800000000306, 20.02674999999999983 63.88011699999999848, 20.02675100000000086 63.88011600000000101, 20.02675299999999936 63.88011600000000101, 20.02675299999999936 63.88011699999999848))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 188,
   "iri": "http://www.github.com/sparqlunicorn#047d2aa4-c98d-4c8e-bba6-c5bc935b626a_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "047d2aa4-c98d-4c8e-bba6-c5bc935b626a_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02637199999999851 63.88018399999999986, 20.02637 63.88018399999999986, 20.02636899999999898 63.88018399999999986, 20.02636899999999898 63.88018300000000238, 20.02637 63.88018300000000238, 20.02637199999999851 63.88018300000000238, 20.02637299999999954 63.88018300000000238, 20.02637199999999851 63.88018399999999986))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 189,
   "iri": "http://www.github.com/sparqlunicorn#069e7a2d-631d-4338-adf9-5fd2f9bd2155_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "069e7a2d-631d-4338-adf9-5fd2f9bd2155_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02638200000000168 63.88017800000000079, 20.02638100000000065 63.88017899999999827, 20.02638100000000065 63.88017899999999827, 20.02638200000000168 63.88018000000000285, 20.02638100000000065 63.88018100000000032, 20.0263789999999986 63.88018100000000032, 20.02637800000000112 63.88018000000000285, 20.02637700000000009 63.88017899999999827, 20.02637599999999907 63.88017899999999827, 20.02637599999999907 63.88017800000000079, 20.02637500000000159 63.88017700000000332, 20.02637500000000159 63.88017599999999874, 20.02637400000000056 63.88017599999999874, 20.02637400000000056 63.88017500000000126, 20.02637500000000159 63.88017399999999668, 20.02637700000000009 63.88017399999999668, 20.02637800000000112 63.88017299999999921, 20.02637999999999963 63.88017399999999668, 20.02638200000000168 63.88017399999999668, 20.02638299999999916 63.88017500000000126, 20.02638500000000121 63.88017500000000126, 20.02638599999999869 63.88017500000000126, 20.02638800000000074 63.88017500000000126, 20.02638900000000177 63.88017599999999874, 20.02638900000000177 63.88017700000000332, 20.02638200000000168 63.88017800000000079))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 190,
   "iri": "http://www.github.com/sparqlunicorn#0800c7da-7e10-4ba2-a020-7db1bc018572_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0800c7da-7e10-4ba2-a020-7db1bc018572_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02667200000000136 63.88012200000000007, 20.02666999999999931 63.88012200000000007, 20.0266680000000008 63.88012200000000007, 20.02666899999999828 63.8801210000000026, 20.02667100000000033 63.88011999999999802, 20.02667299999999884 63.88011999999999802, 20.02667500000000089 63.8801210000000026, 20.02667200000000136 63.88012200000000007))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 191,
   "iri": "http://www.github.com/sparqlunicorn#09625e57-e1e3-4819-baac-8154feac0fe6_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "09625e57-e1e3-4819-baac-8154feac0fe6_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02664199999999894 63.88014199999999931, 20.02664100000000147 63.88014299999999679, 20.02663799999999839 63.88014199999999931, 20.02663700000000091 63.88014100000000184, 20.02663700000000091 63.88013999999999726, 20.02664000000000044 63.88013899999999978, 20.02664199999999894 63.88013999999999726, 20.02664199999999894 63.88014199999999931))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 192,
   "iri": "http://www.github.com/sparqlunicorn#09dd46c1-cd5f-4f5a-b2fa-2341b6d0c9eb_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "09dd46c1-cd5f-4f5a-b2fa-2341b6d0c9eb_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02655100000000132 63.88011099999999942, 20.02654899999999927 63.88011000000000195, 20.02654799999999824 63.88010899999999737, 20.0265500000000003 63.88010899999999737, 20.02655299999999983 63.88010899999999737, 20.02655499999999833 63.88011000000000195, 20.02655400000000085 63.88011099999999942, 20.02655100000000132 63.88011099999999942))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 193,
   "iri": "http://www.github.com/sparqlunicorn#0b12b1c6-4f43-4635-9437-2eccad89860a_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0b12b1c6-4f43-4635-9437-2eccad89860a_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02672700000000106 63.8801339999999982, 20.026724999999999 63.88013300000000072, 20.0267230000000005 63.88013300000000072, 20.02672400000000152 63.88013200000000325, 20.02672700000000106 63.88013200000000325, 20.02672899999999956 63.88013300000000072, 20.02672700000000106 63.8801339999999982))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 194,
   "iri": "http://www.github.com/sparqlunicorn#0b959b96-55fd-4550-b4de-68e2c4f9625f_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0b959b96-55fd-4550-b4de-68e2c4f9625f_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02638500000000121 63.8801029999999983, 20.02638400000000019 63.88010400000000288, 20.02638200000000168 63.88010400000000288, 20.02638100000000065 63.8801029999999983, 20.0263789999999986 63.8801029999999983, 20.02637999999999963 63.88010200000000083, 20.02638299999999916 63.88010100000000335, 20.02638400000000019 63.88010100000000335, 20.02638599999999869 63.88010100000000335, 20.02638699999999972 63.88010200000000083, 20.02638500000000121 63.8801029999999983))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 195,
   "iri": "http://www.github.com/sparqlunicorn#0cc84bdb-a46b-47fc-851f-925f22e3fd77_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0cc84bdb-a46b-47fc-851f-925f22e3fd77_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02648100000000042 63.88011999999999802, 20.02647999999999939 63.8801210000000026, 20.02647999999999939 63.8801210000000026, 20.02647800000000089 63.8801210000000026, 20.02647599999999883 63.8801210000000026, 20.02647400000000033 63.88011999999999802, 20.0264729999999993 63.88011999999999802, 20.0264729999999993 63.88011900000000054, 20.0264729999999993 63.88011800000000306, 20.02647400000000033 63.88011800000000306, 20.02647599999999883 63.88011699999999848, 20.02647800000000089 63.88011699999999848, 20.02647899999999836 63.88011800000000306, 20.02648100000000042 63.88011800000000306, 20.02648100000000042 63.88011999999999802))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 196,
   "iri": "http://www.github.com/sparqlunicorn#0cde71e0-701f-44cd-a025-5cac1d1c7d70_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0cde71e0-701f-44cd-a025-5cac1d1c7d70_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0265519999999988 63.88013200000000325, 20.02654899999999927 63.88013200000000325, 20.02654799999999824 63.88013099999999866, 20.02654700000000076 63.88013000000000119, 20.02654899999999927 63.88012899999999661, 20.0265519999999988 63.88012899999999661, 20.02655400000000085 63.88013000000000119, 20.02655400000000085 63.88013099999999866, 20.0265519999999988 63.88013200000000325))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 197,
   "iri": "http://www.github.com/sparqlunicorn#0d9d574e-754a-4f9c-93b7-47fc15d4f2d3_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "0d9d574e-754a-4f9c-93b7-47fc15d4f2d3_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02645499999999856 63.88020099999999957, 20.02645499999999856 63.88020199999999704, 20.02645400000000109 63.88020199999999704, 20.02645300000000006 63.88020199999999704, 20.02645199999999903 63.88020099999999957, 20.02645100000000156 63.88020000000000209, 20.02645100000000156 63.88020000000000209, 20.02645000000000053 63.88019899999999751, 20.02645000000000053 63.88019800000000004, 20.02645199999999903 63.88019800000000004, 20.02645400000000109 63.88019800000000004, 20.02645599999999959 63.88019899999999751, 20.02645499999999856 63.88020099999999957))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 198,
   "iri": "http://www.github.com/sparqlunicorn#1073f60f-73b2-4193-8bd7-951995224dbb_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1073f60f-73b2-4193-8bd7-951995224dbb_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02641600000000111 63.88013899999999978, 20.02641399999999905 63.88013800000000231, 20.02641300000000157 63.88013800000000231, 20.02641300000000157 63.88013699999999773, 20.02641500000000008 63.88013699999999773, 20.02641699999999858 63.88013699999999773, 20.02641799999999961 63.88013699999999773, 20.02641900000000064 63.88013800000000231, 20.02641600000000111 63.88013899999999978))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 199,
   "iri": "http://www.github.com/sparqlunicorn#10d1a1c2-f56c-485c-a5cc-4d4e48c8e675_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "10d1a1c2-f56c-485c-a5cc-4d4e48c8e675_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02653000000000105 63.88018799999999686, 20.02653199999999956 63.88018799999999686, 20.02653300000000058 63.88018799999999686, 20.02653600000000012 63.88018799999999686, 20.02653700000000114 63.88018799999999686, 20.02653899999999965 63.88018900000000144, 20.02654000000000067 63.88018900000000144, 20.0265410000000017 63.88018999999999892, 20.02654300000000021 63.88018999999999892, 20.02654499999999871 63.88018999999999892, 20.02654599999999974 63.88018999999999892, 20.02654700000000076 63.88018900000000144, 20.02654499999999871 63.88018799999999686, 20.02654400000000123 63.88018699999999939, 20.02654300000000021 63.88018699999999939, 20.02654199999999918 63.88018600000000191, 20.02654000000000067 63.88018600000000191, 20.02653799999999862 63.88018600000000191, 20.02653700000000114 63.88018600000000191, 20.02653499999999909 63.88018499999999733, 20.02653499999999909 63.88018600000000191, 20.02653300000000058 63.88018699999999939, 20.02653099999999853 63.88018699999999939, 20.02652900000000002 63.88018699999999939, 20.02653000000000105 63.88018799999999686))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 200,
   "iri": "http://www.github.com/sparqlunicorn#12ce69a0-6b49-4159-8ff6-b468f44d33b5_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "12ce69a0-6b49-4159-8ff6-b468f44d33b5_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02639699999999934 63.88017099999999715, 20.02639500000000083 63.88017099999999715, 20.02639399999999981 63.88017099999999715, 20.0263920000000013 63.88016999999999967, 20.02638999999999925 63.8801690000000022, 20.02639100000000028 63.88016799999999762, 20.02639299999999878 63.88016700000000014, 20.02639500000000083 63.88016700000000014, 20.02639699999999934 63.88016700000000014, 20.02639900000000139 63.88016700000000014, 20.02639999999999887 63.88016700000000014, 20.02640200000000092 63.88016799999999762, 20.0264029999999984 63.8801690000000022, 20.0264029999999984 63.8801690000000022, 20.02640200000000092 63.88016999999999967, 20.0264029999999984 63.88017099999999715, 20.02639699999999934 63.88017099999999715))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 201,
   "iri": "http://www.github.com/sparqlunicorn#12d61444-88ae-43b3-95d4-15e5fecd4180_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "12d61444-88ae-43b3-95d4-15e5fecd4180_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02670499999999976 63.88013300000000072, 20.02670699999999826 63.88013300000000072, 20.02670900000000032 63.88013300000000072, 20.02671199999999985 63.8801339999999982, 20.02671399999999835 63.8801339999999982, 20.02671600000000041 63.88013300000000072, 20.02671600000000041 63.88013200000000325, 20.02671600000000041 63.88013099999999866, 20.02671700000000143 63.88013000000000119, 20.02672000000000097 63.88013000000000119, 20.02672000000000097 63.88012899999999661, 20.02672099999999844 63.88012799999999913, 20.0267230000000005 63.88012799999999913, 20.026724999999999 63.88012799999999913, 20.02672799999999853 63.88012799999999913, 20.02673000000000059 63.88012799999999913, 20.02673199999999909 63.88012700000000166, 20.02673100000000161 63.88012599999999708, 20.02673000000000059 63.8801249999999996, 20.02672899999999956 63.88012400000000213, 20.02672799999999853 63.88012299999999755, 20.02672700000000106 63.88012200000000007, 20.02672700000000106 63.8801210000000026, 20.02672700000000106 63.88011999999999802, 20.02672799999999853 63.88011900000000054, 20.02672700000000106 63.88011800000000306, 20.02672600000000003 63.88011699999999848, 20.026724999999999 63.88011600000000101, 20.02672400000000152 63.88011500000000353, 20.02672199999999947 63.88011500000000353, 20.02671899999999994 63.88011699999999848, 20.02671799999999891 63.88011699999999848, 20.02671600000000041 63.88011699999999848, 20.02671499999999938 63.88011600000000101, 20.02671600000000041 63.88011500000000353, 20.02671300000000087 63.88011500000000353, 20.02671099999999882 63.88011500000000353, 20.02670900000000032 63.88011399999999895, 20.02670600000000078 63.88011399999999895, 20.02670399999999873 63.88011399999999895, 20.0267009999999992 63.88011399999999895, 20.02669900000000069 63.88011500000000353, 20.02669699999999864 63.88011500000000353, 20.02669699999999864 63.88011699999999848, 20.02669500000000014 63.88011699999999848, 20.0266920000000006 63.88011800000000306, 20.02668999999999855 63.88011800000000306, 20.02668999999999855 63.88011900000000054, 20.02669099999999958 63.8801210000000026, 20.02669099999999958 63.88012200000000007, 20.02669300000000163 63.88012299999999755, 20.02669399999999911 63.88012400000000213, 20.02669399999999911 63.8801249999999996, 20.02669500000000014 63.88012599999999708, 20.02669399999999911 63.88012700000000166, 20.02669300000000163 63.88012799999999913, 20.02669500000000014 63.88012899999999661, 20.02669699999999864 63.88012899999999661, 20.02669900000000069 63.88013000000000119, 20.02669900000000069 63.88013000000000119, 20.0267009999999992 63.88013000000000119, 20.02670300000000125 63.88013000000000119, 20.02670399999999873 63.88013099999999866, 20.02670300000000125 63.88013200000000325, 20.02670499999999976 63.88013300000000072),(20.02670699999999826 63.88011999999999802, 20.02670900000000032 63.8801210000000026, 20.02671000000000134 63.88012200000000007, 20.02671099999999882 63.8801210000000026, 20.02671399999999835 63.8801210000000026, 20.02671600000000041 63.8801210000000026, 20.02671700000000143 63.88012200000000007, 20.02671600000000041 63.88012299999999755, 20.02671300000000087 63.88012400000000213, 20.02671000000000134 63.88012400000000213, 20.02671000000000134 63.88012299999999755, 20.02670799999999929 63.88012299999999755, 20.02670499999999976 63.88012400000000213, 20.02670300000000125 63.88012299999999755, 20.02670399999999873 63.88012200000000007, 20.02670399999999873 63.8801210000000026, 20.02670300000000125 63.88011999999999802, 20.02670499999999976 63.88011999999999802, 20.02670699999999826 63.88011999999999802),(20.02671600000000041 63.88012700000000166, 20.02671499999999938 63.88012799999999913, 20.02671199999999985 63.88012899999999661, 20.02671000000000134 63.88012899999999661, 20.02670799999999929 63.88012799999999913, 20.02670799999999929 63.88012700000000166, 20.02671000000000134 63.88012599999999708, 20.02671199999999985 63.88012599999999708, 20.02671499999999938 63.88012599999999708, 20.02671600000000041 63.88012700000000166))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 202,
   "iri": "http://www.github.com/sparqlunicorn#180a5320-3833-4133-aa46-aab7f0d80d84_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "180a5320-3833-4133-aa46-aab7f0d80d84_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02655899999999889 63.88012700000000166, 20.02655700000000039 63.88012700000000166, 20.02655499999999833 63.88012700000000166, 20.02655400000000085 63.8801249999999996, 20.02655299999999983 63.88012400000000213, 20.02655400000000085 63.88012299999999755, 20.02655700000000039 63.88012299999999755, 20.02655899999999889 63.88012299999999755, 20.02656100000000094 63.88012400000000213, 20.02656199999999842 63.8801249999999996, 20.02655899999999889 63.88012700000000166))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 203,
   "iri": "http://www.github.com/sparqlunicorn#18d49631-5a11-48f6-acb7-62cfaf8de742_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "18d49631-5a11-48f6-acb7-62cfaf8de742_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0264249999999997 63.88012200000000007, 20.0264230000000012 63.88012200000000007, 20.02642200000000017 63.8801210000000026, 20.02642099999999914 63.8801210000000026, 20.02642200000000017 63.88011999999999802, 20.02642399999999867 63.88011999999999802, 20.02642600000000073 63.88011999999999802, 20.02642600000000073 63.8801210000000026, 20.0264249999999997 63.88012200000000007))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 204,
   "iri": "http://www.github.com/sparqlunicorn#19793c7f-6cc9-462c-99da-e3e33ff97461_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "19793c7f-6cc9-462c-99da-e3e33ff97461_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02634700000000123 63.88020000000000209, 20.02634499999999917 63.88020000000000209, 20.02634300000000067 63.88019899999999751, 20.02634199999999964 63.88019899999999751, 20.02634300000000067 63.88019800000000004, 20.02634499999999917 63.88019800000000004, 20.02634700000000123 63.88019800000000004, 20.02634799999999871 63.88019899999999751, 20.02634899999999973 63.88019899999999751, 20.02634700000000123 63.88020000000000209))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 205,
   "iri": "http://www.github.com/sparqlunicorn#1a2be1c9-acaf-4659-839d-0146401472f2_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1a2be1c9-acaf-4659-839d-0146401472f2_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02628800000000098 63.8801339999999982, 20.02635899999999936 63.88014600000000343, 20.02636899999999898 63.8801470000000009, 20.02636899999999898 63.88014600000000343, 20.02636899999999898 63.88014499999999884, 20.02636899999999898 63.88014400000000137, 20.02637 63.88014299999999679, 20.02637100000000103 63.88014299999999679, 20.02637100000000103 63.88014199999999931, 20.02637199999999851 63.88014100000000184, 20.02637199999999851 63.88013999999999726, 20.02637299999999954 63.88013899999999978, 20.02637299999999954 63.88013800000000231, 20.02637400000000056 63.88013699999999773, 20.02629400000000004 63.88012700000000166, 20.02626700000000071 63.88011300000000148, 20.02622399999999914 63.88009799999999672, 20.02618899999999869 63.88008599999999859, 20.0261710000000015 63.88009799999999672, 20.02622900000000072 63.88011699999999848, 20.02628800000000098 63.8801339999999982))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 206,
   "iri": "http://www.github.com/sparqlunicorn#1ac53fc4-aeb3-4256-ac8e-47160f4d642a_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1ac53fc4-aeb3-4256-ac8e-47160f4d642a_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02658900000000131 63.88012700000000166, 20.02658699999999925 63.88012700000000166, 20.02658500000000075 63.88012599999999708, 20.02658500000000075 63.88012400000000213, 20.02658699999999925 63.88012400000000213, 20.02658999999999878 63.88012400000000213, 20.02659299999999831 63.88012400000000213, 20.02659399999999934 63.8801249999999996, 20.02659299999999831 63.88012700000000166, 20.02658900000000131 63.88012700000000166))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 207,
   "iri": "http://www.github.com/sparqlunicorn#1d935768-ea8d-4be8-884b-a4dff9825021_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1d935768-ea8d-4be8-884b-a4dff9825021_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02640200000000092 63.88010899999999737, 20.0264009999999999 63.88011000000000195, 20.02639999999999887 63.88011000000000195, 20.02639800000000037 63.88011000000000195, 20.02639699999999934 63.88011099999999942, 20.02639500000000083 63.88011000000000195, 20.02639399999999981 63.88011000000000195, 20.02639299999999878 63.88010899999999737, 20.02639100000000028 63.88010899999999737, 20.02638999999999925 63.88010799999999989, 20.02638800000000074 63.88010799999999989, 20.02638699999999972 63.88010700000000242, 20.02638599999999869 63.88010700000000242, 20.02638599999999869 63.88010599999999783, 20.02638699999999972 63.88010500000000036, 20.02638800000000074 63.88010500000000036, 20.02639100000000028 63.88010400000000288, 20.0263920000000013 63.88010400000000288, 20.02639399999999981 63.88010400000000288, 20.02639500000000083 63.8801029999999983, 20.02639699999999934 63.8801029999999983, 20.02639800000000037 63.88010400000000288, 20.02639999999999887 63.88010500000000036, 20.0264009999999999 63.88010500000000036, 20.0264029999999984 63.88010500000000036, 20.02640399999999943 63.88010599999999783, 20.02640600000000148 63.88010599999999783, 20.02640699999999896 63.88010700000000242, 20.02640799999999999 63.88010700000000242, 20.02640200000000092 63.88010899999999737))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 208,
   "iri": "http://www.github.com/sparqlunicorn#1fcfa357-13f8-4cb5-8e28-f98280989898_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "1fcfa357-13f8-4cb5-8e28-f98280989898_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02649200000000107 63.88014100000000184, 20.02648999999999901 63.88014100000000184, 20.02648900000000154 63.88014100000000184, 20.02648800000000051 63.88013999999999726, 20.02648800000000051 63.88013999999999726, 20.02648900000000154 63.88013899999999978, 20.02649100000000004 63.88013899999999978, 20.02649200000000107 63.88013899999999978, 20.02649200000000107 63.88014100000000184))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 209,
   "iri": "http://www.github.com/sparqlunicorn#25d0c170-da08-47ed-8bf8-78f36d0f558e_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "25d0c170-da08-47ed-8bf8-78f36d0f558e_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0265410000000017 63.88019599999999798, 20.02653899999999965 63.88019700000000256, 20.02653700000000114 63.88019700000000256, 20.02653600000000012 63.88019599999999798, 20.02653499999999909 63.8801950000000005, 20.02653600000000012 63.8801950000000005, 20.02653700000000114 63.88019400000000303, 20.02653899999999965 63.88019400000000303, 20.02654000000000067 63.88019400000000303, 20.02654199999999918 63.8801950000000005, 20.02654199999999918 63.8801950000000005, 20.0265410000000017 63.88019599999999798))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 210,
   "iri": "http://www.github.com/sparqlunicorn#264aceda-0df9-48de-9c9a-bfac46e9d790_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "264aceda-0df9-48de-9c9a-bfac46e9d790_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0264710000000008 63.8801339999999982, 20.02646899999999874 63.8801339999999982, 20.02646700000000024 63.8801339999999982, 20.02646599999999921 63.88013300000000072, 20.02646700000000024 63.88013300000000072, 20.02646800000000127 63.88013200000000325, 20.02646999999999977 63.88013200000000325, 20.02647199999999827 63.88013200000000325, 20.0264710000000008 63.8801339999999982))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 211,
   "iri": "http://www.github.com/sparqlunicorn#275a5b7f-e28a-41ec-b6b5-9bc82b47f1a0_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "275a5b7f-e28a-41ec-b6b5-9bc82b47f1a0_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02639800000000037 63.8801249999999996, 20.02639599999999831 63.8801249999999996, 20.02639399999999981 63.8801249999999996, 20.02639299999999878 63.8801249999999996, 20.0263920000000013 63.88012400000000213, 20.0263920000000013 63.88012299999999755, 20.02639299999999878 63.88012299999999755, 20.02639500000000083 63.88012299999999755, 20.02639699999999934 63.88012299999999755, 20.02639900000000139 63.88012299999999755, 20.02639999999999887 63.88012299999999755, 20.0264009999999999 63.88012400000000213, 20.02639800000000037 63.8801249999999996))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 212,
   "iri": "http://www.github.com/sparqlunicorn#28ec2dbf-6806-4a32-a35d-78764bfda459_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "28ec2dbf-6806-4a32-a35d-78764bfda459_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02657299999999907 63.88016799999999762, 20.02657100000000057 63.88016799999999762, 20.02656899999999851 63.88016799999999762, 20.02656800000000104 63.88016700000000014, 20.02656800000000104 63.88016600000000267, 20.02656899999999851 63.88016600000000267, 20.02657100000000057 63.88016600000000267, 20.02657200000000159 63.88016600000000267, 20.0265740000000001 63.88016600000000267, 20.02657500000000113 63.88016600000000267, 20.0265759999999986 63.88016700000000014, 20.02657299999999907 63.88016799999999762))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 213,
   "iri": "http://www.github.com/sparqlunicorn#2abb9a90-732f-4e75-b764-6b3df7dfa173_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "2abb9a90-732f-4e75-b764-6b3df7dfa173_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0267230000000005 63.88013500000000278, 20.02672099999999844 63.88013500000000278, 20.02672199999999947 63.8801339999999982, 20.026724999999999 63.88013300000000072, 20.02672600000000003 63.8801339999999982, 20.0267230000000005 63.88013500000000278))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 214,
   "iri": "http://www.github.com/sparqlunicorn#2d3d304e-4ac7-4f2f-93a6-251105f7ace4_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "2d3d304e-4ac7-4f2f-93a6-251105f7ace4_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02638900000000177 63.88020600000000115, 20.02638999999999925 63.88020600000000115, 20.02639100000000028 63.88020699999999863, 20.02638900000000177 63.88020800000000321, 20.02638699999999972 63.88020699999999863, 20.02638599999999869 63.88020600000000115, 20.02638599999999869 63.88020600000000115, 20.02638800000000074 63.88020499999999657, 20.02638900000000177 63.88020600000000115))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 215,
   "iri": "http://www.github.com/sparqlunicorn#2e711592-9068-438a-80b9-0c7725e1d6bb_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "2e711592-9068-438a-80b9-0c7725e1d6bb_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02657699999999963 63.8801950000000005, 20.02657500000000113 63.8801950000000005, 20.02657299999999907 63.8801950000000005, 20.02657100000000057 63.88019400000000303, 20.02656999999999954 63.88019400000000303, 20.02657100000000057 63.88019299999999845, 20.02657200000000159 63.88019200000000097, 20.02657299999999907 63.8801910000000035, 20.02657500000000113 63.8801910000000035, 20.02657699999999963 63.8801910000000035, 20.02657900000000168 63.88019200000000097, 20.02657900000000168 63.88019299999999845, 20.02657900000000168 63.88019299999999845, 20.02657900000000168 63.88019400000000303, 20.02657699999999963 63.8801950000000005))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 216,
   "iri": "http://www.github.com/sparqlunicorn#3018eba9-3c11-41e8-901e-7377167b58e4_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3018eba9-3c11-41e8-901e-7377167b58e4_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02675999999999945 63.88012599999999708, 20.02676500000000104 63.8801249999999996, 20.02676699999999954 63.88012400000000213, 20.02676800000000057 63.88012299999999755, 20.02676800000000057 63.88012200000000007, 20.02676699999999954 63.8801210000000026, 20.02676599999999851 63.88011999999999802, 20.02676400000000001 63.88011999999999802, 20.02676100000000048 63.88011999999999802, 20.02675899999999842 63.8801210000000026, 20.02675699999999992 63.8801210000000026, 20.02675500000000142 63.88012200000000007, 20.02675199999999833 63.88012200000000007, 20.02674999999999983 63.88012299999999755, 20.02674999999999983 63.88012400000000213, 20.02675100000000086 63.8801249999999996, 20.02675199999999833 63.88012599999999708, 20.02675299999999936 63.88012599999999708, 20.02675500000000142 63.88012599999999708, 20.02675800000000095 63.88012599999999708, 20.02675999999999945 63.88012599999999708))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 217,
   "iri": "http://www.github.com/sparqlunicorn#31615fc1-a7de-48af-80a2-777dd77760b2_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "31615fc1-a7de-48af-80a2-777dd77760b2_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02652000000000143 63.88018499999999733, 20.0265190000000004 63.88018499999999733, 20.02651799999999938 63.88018600000000191, 20.02651600000000087 63.88018600000000191, 20.02651499999999984 63.88018600000000191, 20.02651399999999882 63.88018499999999733, 20.02651499999999984 63.88018399999999986, 20.02651600000000087 63.88018399999999986, 20.02651799999999938 63.88018300000000238, 20.02652000000000143 63.88018300000000238, 20.02652000000000143 63.88018499999999733))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 218,
   "iri": "http://www.github.com/sparqlunicorn#32126fde-7a0e-46ab-b512-ad9f20ea10ea_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "32126fde-7a0e-46ab-b512-ad9f20ea10ea_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02649299999999855 63.88010799999999989, 20.02649200000000107 63.88010799999999989, 20.02649100000000004 63.88010799999999989, 20.02649100000000004 63.88010799999999989, 20.02648999999999901 63.88010700000000242, 20.02649100000000004 63.88010700000000242, 20.02649200000000107 63.88010700000000242, 20.02649299999999855 63.88010700000000242, 20.02649399999999957 63.88010700000000242, 20.02649399999999957 63.88010700000000242, 20.02649399999999957 63.88010700000000242, 20.02649299999999855 63.88010799999999989))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 219,
   "iri": "http://www.github.com/sparqlunicorn#327283ae-3a31-4397-ae77-2566e4d146b6_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "327283ae-3a31-4397-ae77-2566e4d146b6_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02635599999999982 63.88018999999999892, 20.02635400000000132 63.88018999999999892, 20.02635300000000029 63.88018900000000144, 20.02635099999999824 63.88018900000000144, 20.02635000000000076 63.88018799999999686, 20.02634899999999973 63.88018799999999686, 20.02635000000000076 63.88018699999999939, 20.02635199999999926 63.88018699999999939, 20.02635300000000029 63.88018699999999939, 20.02635599999999982 63.88018699999999939, 20.02635700000000085 63.88018799999999686, 20.02635799999999833 63.88018900000000144, 20.02635899999999936 63.88018900000000144, 20.02635599999999982 63.88018999999999892))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 220,
   "iri": "http://www.github.com/sparqlunicorn#3280d786-1bb7-4913-9be9-9041f65ef4b6_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3280d786-1bb7-4913-9be9-9041f65ef4b6_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02658299999999869 63.88015599999999949, 20.02658100000000019 63.88015599999999949, 20.02657900000000168 63.88015599999999949, 20.02657800000000066 63.88015500000000202, 20.02657900000000168 63.88015399999999744, 20.02657999999999916 63.88015399999999744, 20.02658200000000122 63.88015399999999744, 20.02658399999999972 63.88015299999999996, 20.02658500000000075 63.88015399999999744, 20.02658699999999925 63.88015399999999744, 20.02658800000000028 63.88015500000000202, 20.02658699999999925 63.88015599999999949, 20.02658600000000177 63.88015599999999949, 20.02658299999999869 63.88015599999999949))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 221,
   "iri": "http://www.github.com/sparqlunicorn#3672902d-7362-4069-9769-21296706d028_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3672902d-7362-4069-9769-21296706d028_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02650300000000172 63.88014799999999838, 20.02650099999999966 63.88014900000000296, 20.02649999999999864 63.88014900000000296, 20.02649900000000116 63.88014799999999838, 20.02649900000000116 63.8801470000000009, 20.02649999999999864 63.88014600000000343, 20.02650200000000069 63.88014600000000343, 20.02650399999999919 63.8801470000000009, 20.02650399999999919 63.8801470000000009, 20.02650300000000172 63.88014799999999838))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 222,
   "iri": "http://www.github.com/sparqlunicorn#37993191-20c4-49a4-b3bc-2a28960f323d_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "37993191-20c4-49a4-b3bc-2a28960f323d_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02667399999999986 63.88013000000000119, 20.02667200000000136 63.88012899999999661, 20.02667299999999884 63.88012799999999913, 20.02667399999999986 63.88012799999999913, 20.02667599999999837 63.88012700000000166, 20.02667800000000042 63.88012700000000166, 20.02667900000000145 63.88012799999999913, 20.02667800000000042 63.88012899999999661, 20.02667599999999837 63.88013000000000119, 20.02667399999999986 63.88013000000000119))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 223,
   "iri": "http://www.github.com/sparqlunicorn#389c5712-618e-4532-84fd-4eb084e6c0aa_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "389c5712-618e-4532-84fd-4eb084e6c0aa_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02645199999999903 63.88017800000000079, 20.02645300000000006 63.88017899999999827, 20.02645499999999856 63.88017899999999827, 20.02645599999999959 63.88018000000000285, 20.02645800000000165 63.88018000000000285, 20.02646000000000015 63.88018000000000285, 20.02646100000000118 63.88018100000000032, 20.02646100000000118 63.8801819999999978, 20.02646100000000118 63.88018300000000238, 20.02646199999999865 63.88018300000000238, 20.02646199999999865 63.88018399999999986, 20.02646299999999968 63.88018499999999733, 20.02646400000000071 63.88018399999999986, 20.02646400000000071 63.88018300000000238, 20.02646400000000071 63.8801819999999978, 20.02646500000000174 63.88018100000000032, 20.02646599999999921 63.88017899999999827, 20.02646700000000024 63.88017800000000079, 20.02646899999999874 63.88017899999999827, 20.02646999999999977 63.88017899999999827, 20.0264710000000008 63.88018000000000285, 20.02647199999999827 63.88018100000000032, 20.0264729999999993 63.88018100000000032, 20.02647400000000033 63.8801819999999978, 20.02647599999999883 63.88018300000000238, 20.02647699999999986 63.88018399999999986, 20.02647899999999836 63.88018399999999986, 20.02648100000000042 63.88018399999999986, 20.02648200000000145 63.88018399999999986, 20.02648399999999995 63.88018399999999986, 20.02648500000000098 63.88018399999999986, 20.02648699999999948 63.88018300000000238, 20.02648699999999948 63.8801819999999978, 20.02648699999999948 63.88018100000000032, 20.02648599999999846 63.88018000000000285, 20.02648500000000098 63.88017899999999827, 20.02648399999999995 63.88017899999999827, 20.02648299999999892 63.88017800000000079, 20.02648200000000145 63.88017700000000332, 20.02648100000000042 63.88017700000000332, 20.02647899999999836 63.88017700000000332, 20.02647699999999986 63.88017599999999874, 20.02647599999999883 63.88017599999999874, 20.02647400000000033 63.88017599999999874, 20.02647199999999827 63.88017599999999874, 20.0264710000000008 63.88017500000000126, 20.02646899999999874 63.88017500000000126, 20.02646899999999874 63.88017399999999668, 20.02646999999999977 63.88017299999999921, 20.0264710000000008 63.88017200000000173, 20.0264710000000008 63.88017099999999715, 20.02647199999999827 63.88017099999999715, 20.0264729999999993 63.88016999999999967, 20.02647400000000033 63.8801690000000022, 20.02647400000000033 63.88016799999999762, 20.02647500000000136 63.88016799999999762, 20.02647500000000136 63.88016700000000014, 20.02647500000000136 63.88016600000000267, 20.02647400000000033 63.88016499999999809, 20.02647199999999827 63.88016499999999809, 20.02647199999999827 63.88016600000000267, 20.02647199999999827 63.88016700000000014, 20.0264710000000008 63.88016700000000014, 20.0264710000000008 63.88016799999999762, 20.02646899999999874 63.8801690000000022, 20.02646800000000127 63.88016999999999967, 20.02646700000000024 63.88017099999999715, 20.02646599999999921 63.88017099999999715, 20.02646400000000071 63.88017099999999715, 20.02646299999999968 63.88017099999999715, 20.02646100000000118 63.88017099999999715, 20.02645899999999912 63.88016999999999967, 20.02645700000000062 63.88016999999999967, 20.02645599999999959 63.88017099999999715, 20.02645400000000109 63.88017099999999715, 20.02645499999999856 63.88016999999999967, 20.02645599999999959 63.88016999999999967, 20.02645700000000062 63.8801690000000022, 20.02645499999999856 63.8801690000000022, 20.02645400000000109 63.8801690000000022, 20.02645199999999903 63.8801690000000022, 20.02645000000000053 63.88016999999999967, 20.0264489999999995 63.8801690000000022, 20.02644799999999847 63.8801690000000022, 20.026447000000001 63.88016799999999762, 20.02644599999999997 63.8801690000000022, 20.02644599999999997 63.88016999999999967, 20.02644400000000147 63.88016999999999967, 20.02644099999999838 63.8801690000000022, 20.02644000000000091 63.8801690000000022, 20.02643799999999885 63.8801690000000022, 20.02643600000000035 63.8801690000000022, 20.02643499999999932 63.88016999999999967, 20.02643600000000035 63.88016999999999967, 20.02643799999999885 63.88017099999999715, 20.02643799999999885 63.88017200000000173, 20.02643700000000138 63.88017299999999921, 20.02643600000000035 63.88017299999999921, 20.02643499999999932 63.88017399999999668, 20.02643700000000138 63.88017399999999668, 20.02643899999999988 63.88017399999999668, 20.02643899999999988 63.88017299999999921, 20.02644000000000091 63.88017299999999921, 20.02644099999999838 63.88017299999999921, 20.02644099999999838 63.88017399999999668, 20.02644199999999941 63.88017500000000126, 20.02644300000000044 63.88017599999999874, 20.02644400000000147 63.88017700000000332, 20.02644499999999894 63.88017700000000332, 20.026447000000001 63.88017800000000079, 20.026447000000001 63.88017700000000332, 20.026447000000001 63.88017599999999874, 20.02644599999999997 63.88017599999999874, 20.02644499999999894 63.88017500000000126, 20.02644499999999894 63.88017399999999668, 20.02644599999999997 63.88017299999999921, 20.02644799999999847 63.88017399999999668, 20.0264489999999995 63.88017399999999668, 20.0264489999999995 63.88017500000000126, 20.02645000000000053 63.88017599999999874, 20.02645100000000156 63.88017700000000332, 20.02645199999999903 63.88017800000000079))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 224,
   "iri": "http://www.github.com/sparqlunicorn#3a55458f-5c2f-4368-9a03-384f6377e301_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3a55458f-5c2f-4368-9a03-384f6377e301_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02657800000000066 63.8802039999999991, 20.0265759999999986 63.8802039999999991, 20.0265740000000001 63.88020499999999657, 20.02657200000000159 63.88020499999999657, 20.02656999999999954 63.88020499999999657, 20.02656899999999851 63.88020499999999657, 20.02656700000000001 63.88020499999999657, 20.02656599999999898 63.88020600000000115, 20.02656400000000048 63.88020600000000115, 20.02656199999999842 63.88020600000000115, 20.02656100000000094 63.88020600000000115, 20.02656100000000094 63.88020499999999657, 20.02656199999999842 63.88020499999999657, 20.02656400000000048 63.8802039999999991, 20.0265650000000015 63.8802039999999991, 20.02656400000000048 63.88020300000000162, 20.02656400000000048 63.88020199999999704, 20.02656199999999842 63.88020199999999704, 20.02656400000000048 63.88020099999999957, 20.02656599999999898 63.88020099999999957, 20.02656700000000001 63.88020099999999957, 20.02656899999999851 63.88020099999999957, 20.02657100000000057 63.88020099999999957, 20.02657100000000057 63.88020000000000209, 20.02656999999999954 63.88020000000000209, 20.02656800000000104 63.88019899999999751, 20.02656599999999898 63.88019800000000004, 20.0265650000000015 63.88019700000000256, 20.02656700000000001 63.88019700000000256, 20.02656999999999954 63.88019800000000004, 20.02657100000000057 63.88019899999999751, 20.02657200000000159 63.88019899999999751, 20.0265740000000001 63.88020000000000209, 20.0265740000000001 63.88019899999999751, 20.02657299999999907 63.88019800000000004, 20.02657299999999907 63.88019800000000004, 20.02657500000000113 63.88019700000000256, 20.0265759999999986 63.88019800000000004, 20.02657699999999963 63.88019899999999751, 20.02657900000000168 63.88019899999999751, 20.02657999999999916 63.88019800000000004, 20.02658200000000122 63.88019800000000004, 20.02658299999999869 63.88019899999999751, 20.02658399999999972 63.88020000000000209, 20.02658299999999869 63.88020000000000209, 20.02658200000000122 63.88020099999999957, 20.02658100000000019 63.88020199999999704, 20.02657800000000066 63.8802039999999991))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 225,
   "iri": "http://www.github.com/sparqlunicorn#3cd74fe7-9b31-4361-ad28-08afb3097edc_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3cd74fe7-9b31-4361-ad28-08afb3097edc_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02652199999999993 63.88014600000000343, 20.02652000000000143 63.88014600000000343, 20.02651799999999938 63.88014600000000343, 20.02651699999999835 63.88014600000000343, 20.02651499999999984 63.88014499999999884, 20.02651499999999984 63.88014499999999884, 20.02651499999999984 63.88014400000000137, 20.02651600000000087 63.88014299999999679, 20.02651799999999938 63.88014299999999679, 20.0265190000000004 63.88014299999999679, 20.02652099999999891 63.88014299999999679, 20.02652300000000096 63.88014299999999679, 20.02652399999999844 63.88014400000000137, 20.02652399999999844 63.88014499999999884, 20.02652199999999993 63.88014600000000343))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 226,
   "iri": "http://www.github.com/sparqlunicorn#3d393a7a-ea8c-45d2-aca7-1453da500bb5_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3d393a7a-ea8c-45d2-aca7-1453da500bb5_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02503499999999903 63.87929799999999858, 20.0251020000000004 63.87933999999999912, 20.0251240000000017 63.879331999999998, 20.02504599999999968 63.8792839999999984, 20.02498299999999887 63.87924499999999739, 20.02496100000000112 63.87925200000000103, 20.02503499999999903 63.87929799999999858))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 227,
   "iri": "http://www.github.com/sparqlunicorn#3e67e756-dad2-4514-a9af-511fd2db0e91_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3e67e756-dad2-4514-a9af-511fd2db0e91_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02666299999999922 63.88012299999999755, 20.02665999999999968 63.88012299999999755, 20.02665999999999968 63.88012200000000007, 20.02666100000000071 63.8801210000000026, 20.02666299999999922 63.8801210000000026, 20.02666500000000127 63.8801210000000026, 20.02666500000000127 63.88012200000000007, 20.02666400000000024 63.88012299999999755, 20.02666299999999922 63.88012299999999755))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 228,
   "iri": "http://www.github.com/sparqlunicorn#3e78afb0-3e1c-4814-a038-dfde669dc4c1_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "3e78afb0-3e1c-4814-a038-dfde669dc4c1_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02655999999999992 63.88015299999999996, 20.02655800000000141 63.88015299999999996, 20.02655599999999936 63.88015299999999996, 20.02655499999999833 63.88015200000000249, 20.02655499999999833 63.88015099999999791, 20.02655599999999936 63.88015099999999791, 20.02655800000000141 63.88015000000000043, 20.02655999999999992 63.88015000000000043, 20.02656199999999842 63.88015099999999791, 20.02656299999999945 63.88015200000000249, 20.02656400000000048 63.88015200000000249, 20.02655999999999992 63.88015299999999996))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 229,
   "iri": "http://www.github.com/sparqlunicorn#41bc9d9f-999b-4c03-868d-e3823fc03184_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "41bc9d9f-999b-4c03-868d-e3823fc03184_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02656400000000048 63.88010899999999737, 20.02656299999999945 63.88010799999999989, 20.02656599999999898 63.88010700000000242, 20.02656899999999851 63.88010700000000242, 20.02657100000000057 63.88010799999999989, 20.02657200000000159 63.88010899999999737, 20.02657299999999907 63.88011000000000195, 20.02657100000000057 63.88011099999999942, 20.02656800000000104 63.88011099999999942, 20.02656599999999898 63.88011000000000195, 20.02656400000000048 63.88010899999999737))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 230,
   "iri": "http://www.github.com/sparqlunicorn#43445b66-c4c5-4668-8fb7-00186131c6ff_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "43445b66-c4c5-4668-8fb7-00186131c6ff_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02656199999999842 63.88016199999999856, 20.02656100000000094 63.88016300000000314, 20.02655899999999889 63.88016300000000314, 20.02655700000000039 63.88016199999999856, 20.02655700000000039 63.88016100000000108, 20.02655700000000039 63.8801599999999965, 20.02655800000000141 63.8801599999999965, 20.02655999999999992 63.8801599999999965, 20.02656100000000094 63.8801599999999965, 20.02656199999999842 63.88016199999999856))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 231,
   "iri": "http://www.github.com/sparqlunicorn#435bca7b-b840-4894-9bff-df7c45b2c20c_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "435bca7b-b840-4894-9bff-df7c45b2c20c_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02665599999999912 63.88011300000000148, 20.02665500000000165 63.88011300000000148, 20.02665500000000165 63.8801119999999969, 20.02665700000000015 63.8801119999999969, 20.02665800000000118 63.88011300000000148, 20.02665599999999912 63.88011300000000148))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 232,
   "iri": "http://www.github.com/sparqlunicorn#45d241e5-c948-4ae3-860b-668b54894e58_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "45d241e5-c948-4ae3-860b-668b54894e58_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02648699999999948 63.88012599999999708, 20.02648599999999846 63.88012599999999708, 20.02648500000000098 63.88012700000000166, 20.02648299999999892 63.88012700000000166, 20.02648200000000145 63.88012599999999708, 20.02647999999999939 63.88012599999999708, 20.02647899999999836 63.8801249999999996, 20.02647800000000089 63.8801249999999996, 20.02647800000000089 63.88012400000000213, 20.02647999999999939 63.88012299999999755, 20.02648100000000042 63.88012299999999755, 20.02648299999999892 63.88012299999999755, 20.02648500000000098 63.88012299999999755, 20.02648599999999846 63.88012299999999755, 20.02648699999999948 63.88012400000000213, 20.02648699999999948 63.88012599999999708))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 233,
   "iri": "http://www.github.com/sparqlunicorn#464f2805-ec4f-4d89-858e-f56a4378062d_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "464f2805-ec4f-4d89-858e-f56a4378062d_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02640999999999849 63.88020900000000069, 20.02640900000000101 63.88020999999999816, 20.02640699999999896 63.88020999999999816, 20.02640500000000046 63.88020999999999816, 20.02640399999999943 63.88020999999999816, 20.02639999999999887 63.88020999999999816, 20.02639800000000037 63.88020999999999816, 20.02639699999999934 63.88020900000000069, 20.02639699999999934 63.88020800000000321, 20.02639699999999934 63.88020699999999863, 20.02639699999999934 63.88020699999999863, 20.02639800000000037 63.88020600000000115, 20.02639999999999887 63.88020499999999657, 20.0264009999999999 63.8802039999999991, 20.0264009999999999 63.88020300000000162, 20.02640200000000092 63.88020300000000162, 20.0264029999999984 63.88020199999999704, 20.02640500000000046 63.88020199999999704, 20.02640699999999896 63.88020199999999704, 20.02640900000000101 63.88020199999999704, 20.02640999999999849 63.88020199999999704, 20.02641200000000055 63.88020300000000162, 20.02641399999999905 63.88020300000000162, 20.02641600000000111 63.8802039999999991, 20.02641799999999961 63.8802039999999991, 20.02641900000000064 63.88020499999999657, 20.02642099999999914 63.88020499999999657, 20.02642200000000017 63.88020600000000115, 20.02642200000000017 63.88020699999999863, 20.02642000000000166 63.88020699999999863, 20.02641799999999961 63.88020800000000321, 20.02641699999999858 63.88020800000000321, 20.02640999999999849 63.88020900000000069))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 234,
   "iri": "http://www.github.com/sparqlunicorn#467872e1-4482-4e05-ba2e-2ac81b40dcf7_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "467872e1-4482-4e05-ba2e-2ac81b40dcf7_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02639599999999831 63.88011699999999848, 20.02639599999999831 63.88011800000000306, 20.02639500000000083 63.88011800000000306, 20.02639500000000083 63.88011800000000306, 20.02639399999999981 63.88011800000000306, 20.02639299999999878 63.88011800000000306, 20.02639299999999878 63.88011699999999848, 20.02639299999999878 63.88011699999999848, 20.02639299999999878 63.88011600000000101, 20.02639299999999878 63.88011600000000101, 20.02639399999999981 63.88011600000000101, 20.02639500000000083 63.88011600000000101, 20.02639500000000083 63.88011600000000101, 20.02639599999999831 63.88011600000000101, 20.02639699999999934 63.88011600000000101, 20.02639699999999934 63.88011600000000101, 20.02639599999999831 63.88011699999999848))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 235,
   "iri": "http://www.github.com/sparqlunicorn#4692f53e-797d-4457-bbc3-55273889566f_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4692f53e-797d-4457-bbc3-55273889566f_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02667900000000145 63.88012400000000213, 20.0266769999999994 63.88012299999999755, 20.02667599999999837 63.88012200000000007, 20.02667900000000145 63.88012200000000007, 20.02668099999999995 63.88012299999999755, 20.02667999999999893 63.88012400000000213, 20.02667900000000145 63.88012400000000213))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 236,
   "iri": "http://www.github.com/sparqlunicorn#4960c3ef-c969-4930-8f87-3e9250c5b716_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4960c3ef-c969-4930-8f87-3e9250c5b716_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02671899999999994 63.88011699999999848, 20.02671799999999891 63.88011699999999848, 20.02671600000000041 63.88011699999999848, 20.02671499999999938 63.88011600000000101, 20.02671600000000041 63.88011500000000353, 20.02671600000000041 63.88011399999999895, 20.02671799999999891 63.88011300000000148, 20.02672000000000097 63.88011300000000148, 20.02672199999999947 63.88011399999999895, 20.02672199999999947 63.88011500000000353, 20.02671899999999994 63.88011699999999848))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 237,
   "iri": "http://www.github.com/sparqlunicorn#49ca3504-ffe4-4ec4-bd95-72123b14e48e_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "49ca3504-ffe4-4ec4-bd95-72123b14e48e_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02656299999999945 63.88011300000000148, 20.02656100000000094 63.8801119999999969, 20.02655999999999992 63.88011099999999942, 20.02656199999999842 63.88011000000000195, 20.0265650000000015 63.88011099999999942, 20.02656299999999945 63.88011300000000148))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 238,
   "iri": "http://www.github.com/sparqlunicorn#4a4c2cd5-02ce-415c-b812-ec9fd13d73c6_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4a4c2cd5-02ce-415c-b812-ec9fd13d73c6_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02659900000000093 63.8801599999999965, 20.02659699999999887 63.8801599999999965, 20.0265960000000014 63.8801599999999965, 20.02659399999999934 63.8801599999999965, 20.02659299999999831 63.88015899999999903, 20.02659299999999831 63.88015800000000155, 20.02659500000000037 63.88015800000000155, 20.02659699999999887 63.88015800000000155, 20.0265979999999999 63.88015800000000155, 20.0265999999999984 63.88015800000000155, 20.02660099999999943 63.88015899999999903, 20.02659900000000093 63.8801599999999965))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 239,
   "iri": "http://www.github.com/sparqlunicorn#4bb458df-e06c-4d79-bcdb-663a09168b93_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4bb458df-e06c-4d79-bcdb-663a09168b93_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02640399999999943 63.88011500000000353, 20.0264029999999984 63.88011500000000353, 20.0264029999999984 63.88011600000000101, 20.02640200000000092 63.88011500000000353, 20.0264009999999999 63.88011500000000353, 20.0264009999999999 63.88011500000000353, 20.02640200000000092 63.88011500000000353, 20.0264009999999999 63.88011500000000353, 20.02640200000000092 63.88011500000000353, 20.0264009999999999 63.88011500000000353, 20.02640200000000092 63.88011500000000353, 20.0264009999999999 63.88011500000000353, 20.0264009999999999 63.88011399999999895, 20.02640200000000092 63.88011399999999895, 20.0264029999999984 63.88011399999999895, 20.02640399999999943 63.88011399999999895, 20.02640500000000046 63.88011399999999895, 20.02640399999999943 63.88011500000000353))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 240,
   "iri": "http://www.github.com/sparqlunicorn#4ccf2904-a68a-4c88-81de-8d549bc421e9_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4ccf2904-a68a-4c88-81de-8d549bc421e9_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02482699999999838 63.87922900000000226, 20.02494000000000085 63.87925899999999757, 20.02502799999999894 63.87922900000000226, 20.02504400000000118 63.87919000000000125, 20.02506100000000089 63.87913300000000305, 20.0249839999999999 63.87911900000000287, 20.02492000000000161 63.87908900000000045, 20.02483099999999894 63.8791000000000011, 20.02474600000000038 63.87912299999999988, 20.02460999999999913 63.87913199999999847, 20.0246859999999991 63.87916200000000089, 20.02468999999999966 63.87919699999999779, 20.02467400000000097 63.87923500000000132, 20.02480299999999858 63.87925200000000103, 20.02482699999999838 63.87922900000000226))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 241,
   "iri": "http://www.github.com/sparqlunicorn#4db030c2-2331-4dad-b17c-da023bceff9f_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4db030c2-2331-4dad-b17c-da023bceff9f_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02651099999999929 63.88015000000000043, 20.02650900000000078 63.88015000000000043, 20.02650699999999873 63.88015000000000043, 20.02650600000000125 63.88014900000000296, 20.02650699999999873 63.88014799999999838, 20.02650799999999975 63.88014799999999838, 20.02650999999999826 63.88014799999999838, 20.02651300000000134 63.88014799999999838, 20.02651099999999929 63.88014799999999838, 20.02651300000000134 63.88014799999999838, 20.02651200000000031 63.88014900000000296, 20.02651200000000031 63.88014900000000296, 20.02651099999999929 63.88015000000000043))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 242,
   "iri": "http://www.github.com/sparqlunicorn#4e1bbd40-75c2-4134-abdf-71a85b238394_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4e1bbd40-75c2-4134-abdf-71a85b238394_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02641900000000064 63.88012400000000213, 20.02641799999999961 63.88012400000000213, 20.02641600000000111 63.88012299999999755, 20.02641600000000111 63.88012299999999755, 20.02641600000000111 63.88012299999999755, 20.02641600000000111 63.88012200000000007, 20.02641799999999961 63.88012200000000007, 20.02641799999999961 63.88012200000000007, 20.02641900000000064 63.88012299999999755, 20.02641900000000064 63.88012299999999755, 20.02641900000000064 63.88012400000000213))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 243,
   "iri": "http://www.github.com/sparqlunicorn#4f25cbc8-6f89-434b-8988-0e3e965f2aa7_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "4f25cbc8-6f89-434b-8988-0e3e965f2aa7_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02668999999999855 63.88012400000000213, 20.02668999999999855 63.8801249999999996, 20.02668900000000107 63.88012599999999708, 20.02668699999999902 63.8801249999999996, 20.02668699999999902 63.88012400000000213, 20.02668800000000005 63.88012299999999755, 20.02668900000000107 63.88012200000000007, 20.0266920000000006 63.88012200000000007, 20.02668999999999855 63.88012400000000213))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 244,
   "iri": "http://www.github.com/sparqlunicorn#521dd20c-2456-40a9-8b2b-0064396ccb07_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "521dd20c-2456-40a9-8b2b-0064396ccb07_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02642399999999867 63.8801249999999996, 20.02642200000000017 63.8801249999999996, 20.02642000000000166 63.88012400000000213, 20.02642000000000166 63.88012299999999755, 20.02642099999999914 63.88012299999999755, 20.0264230000000012 63.88012299999999755, 20.0264249999999997 63.88012299999999755, 20.02642600000000073 63.88012400000000213, 20.02642399999999867 63.8801249999999996))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 245,
   "iri": "http://www.github.com/sparqlunicorn#526eb9a7-2805-4a93-b49c-df9a922b279c_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "526eb9a7-2805-4a93-b49c-df9a922b279c_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02638900000000177 63.8801339999999982, 20.02639100000000028 63.88013500000000278, 20.02639299999999878 63.88013500000000278, 20.02639399999999981 63.88013600000000025, 20.02639299999999878 63.88013600000000025, 20.02639100000000028 63.88013600000000025, 20.02638900000000177 63.88013600000000025, 20.02638699999999972 63.88013600000000025, 20.02638500000000121 63.88013600000000025, 20.02638400000000019 63.88013500000000278, 20.02638200000000168 63.88013500000000278, 20.02637999999999963 63.8801339999999982, 20.0263789999999986 63.8801339999999982, 20.02637800000000112 63.88013300000000072, 20.02637599999999907 63.88013300000000072, 20.02637500000000159 63.88013200000000325, 20.02637400000000056 63.88013099999999866, 20.02637400000000056 63.88013099999999866, 20.02637400000000056 63.88013000000000119, 20.02637500000000159 63.88012899999999661, 20.02637700000000009 63.88013000000000119, 20.02637800000000112 63.88013000000000119, 20.02637999999999963 63.88013000000000119, 20.02638100000000065 63.88013099999999866, 20.02638299999999916 63.88013099999999866, 20.02638400000000019 63.88013200000000325, 20.02638900000000177 63.8801339999999982))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 246,
   "iri": "http://www.github.com/sparqlunicorn#52f8f607-2c6b-4b25-90f8-861ed744e1ca_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "52f8f607-2c6b-4b25-90f8-861ed744e1ca_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02658699999999925 63.88018399999999986, 20.02658600000000177 63.88018399999999986, 20.02658399999999972 63.88018399999999986, 20.02658299999999869 63.88018300000000238, 20.02658100000000019 63.88018300000000238, 20.02657999999999916 63.88018300000000238, 20.02657900000000168 63.88018399999999986, 20.02657900000000168 63.88018399999999986, 20.02657900000000168 63.88018499999999733, 20.02657800000000066 63.88018499999999733, 20.02657699999999963 63.88018399999999986, 20.02657699999999963 63.88018300000000238, 20.02657500000000113 63.88018300000000238, 20.0265740000000001 63.88018300000000238, 20.02657200000000159 63.88018300000000238, 20.02657100000000057 63.88018399999999986, 20.02656999999999954 63.88018300000000238, 20.02657200000000159 63.8801819999999978, 20.0265740000000001 63.8801819999999978, 20.02657500000000113 63.88018100000000032, 20.0265759999999986 63.88018100000000032, 20.02657699999999963 63.88018000000000285, 20.0265759999999986 63.88017899999999827, 20.02657500000000113 63.88017899999999827, 20.02657299999999907 63.88017899999999827, 20.02657200000000159 63.88017899999999827, 20.02656999999999954 63.88018000000000285, 20.02656899999999851 63.88018000000000285, 20.02656700000000001 63.88018000000000285, 20.02656800000000104 63.88017899999999827, 20.02656899999999851 63.88017899999999827, 20.02657100000000057 63.88017899999999827, 20.02657200000000159 63.88017800000000079, 20.0265740000000001 63.88017800000000079, 20.02657500000000113 63.88017700000000332, 20.02657699999999963 63.88017700000000332, 20.02657900000000168 63.88017700000000332, 20.02657999999999916 63.88017800000000079, 20.02658299999999869 63.88017800000000079, 20.02658500000000075 63.88017800000000079, 20.02658600000000177 63.88017899999999827, 20.02658800000000028 63.88018000000000285, 20.02658900000000131 63.88018000000000285, 20.02658900000000131 63.88018100000000032, 20.02658999999999878 63.8801819999999978, 20.02658999999999878 63.88018300000000238, 20.02658699999999925 63.88018399999999986))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 247,
   "iri": "http://www.github.com/sparqlunicorn#53bf2db7-7718-4835-bc3c-2baf3068207f_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "53bf2db7-7718-4835-bc3c-2baf3068207f_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02642200000000017 63.8801029999999983, 20.02642200000000017 63.8801029999999983, 20.02642099999999914 63.88010400000000288, 20.02641900000000064 63.88010500000000036, 20.02641699999999858 63.88010500000000036, 20.02641600000000111 63.88010400000000288, 20.02641399999999905 63.8801029999999983, 20.02641300000000157 63.88010200000000083, 20.02641200000000055 63.88010200000000083, 20.02641099999999952 63.88010100000000335, 20.02641099999999952 63.88009999999999877, 20.02640999999999849 63.8800990000000013, 20.02640999999999849 63.8800990000000013, 20.02640900000000101 63.88009799999999672, 20.02641099999999952 63.88009699999999924, 20.02641200000000055 63.88009600000000177, 20.02641399999999905 63.88009499999999719, 20.02641600000000111 63.88009499999999719, 20.02641699999999858 63.88009499999999719, 20.02641900000000064 63.88009499999999719, 20.02642099999999914 63.88009499999999719, 20.02642200000000017 63.88009499999999719, 20.02642399999999867 63.88009600000000177, 20.0264249999999997 63.88009699999999924, 20.0264249999999997 63.88009699999999924, 20.0264249999999997 63.88009799999999672, 20.0264249999999997 63.8800990000000013, 20.0264249999999997 63.8800990000000013, 20.02642200000000017 63.8801029999999983))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 248,
   "iri": "http://www.github.com/sparqlunicorn#53ed429c-06e1-419a-9002-12d7bcf18ba0_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "53ed429c-06e1-419a-9002-12d7bcf18ba0_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02668299999999846 63.88011699999999848, 20.02668099999999995 63.88011800000000306, 20.02667900000000145 63.88011800000000306, 20.0266769999999994 63.88011699999999848, 20.02667599999999837 63.88011600000000101, 20.02667500000000089 63.88011500000000353, 20.0266769999999994 63.88011500000000353, 20.02667900000000145 63.88011600000000101, 20.02668099999999995 63.88011600000000101, 20.02668299999999846 63.88011699999999848))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 249,
   "iri": "http://www.github.com/sparqlunicorn#54e13ec0-7b5a-4f4a-892f-615ab97d9000_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "54e13ec0-7b5a-4f4a-892f-615ab97d9000_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02649100000000004 63.88014600000000343, 20.02649100000000004 63.8801470000000009, 20.02648999999999901 63.88014799999999838, 20.02648900000000154 63.88014799999999838, 20.02648800000000051 63.8801470000000009, 20.02648699999999948 63.88014600000000343, 20.02648699999999948 63.88014499999999884, 20.02648800000000051 63.88014499999999884, 20.02648999999999901 63.88014400000000137, 20.02648999999999901 63.88014499999999884, 20.02649100000000004 63.88014600000000343))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 250,
   "iri": "http://www.github.com/sparqlunicorn#55eee8ec-2c4a-4924-8d2e-89b0d57b2d74_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "55eee8ec-2c4a-4924-8d2e-89b0d57b2d74_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02657800000000066 63.88013699999999773, 20.02657999999999916 63.88013600000000025, 20.02657800000000066 63.88013500000000278, 20.0265759999999986 63.88013699999999773, 20.02657800000000066 63.88013699999999773))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 251,
   "iri": "http://www.github.com/sparqlunicorn#569674c9-3895-4cb5-8f2c-38e608cab577_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "569674c9-3895-4cb5-8f2c-38e608cab577_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02654599999999974 63.88015699999999697, 20.02654499999999871 63.88015699999999697, 20.02654199999999918 63.88015599999999949, 20.02654199999999918 63.88015599999999949, 20.02654300000000021 63.88015500000000202, 20.02654499999999871 63.88015500000000202, 20.02654700000000076 63.88015500000000202, 20.02654899999999927 63.88015500000000202, 20.0265500000000003 63.88015599999999949, 20.0265500000000003 63.88015599999999949, 20.02654599999999974 63.88015699999999697))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 252,
   "iri": "http://www.github.com/sparqlunicorn#5bcc0471-f0ba-417c-bae1-abb3223cd352_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "5bcc0471-f0ba-417c-bae1-abb3223cd352_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02650799999999975 63.88020199999999704, 20.02650600000000125 63.88020199999999704, 20.02650399999999919 63.88020199999999704, 20.02650200000000069 63.88020199999999704, 20.02650099999999966 63.88020099999999957, 20.02649999999999864 63.88020000000000209, 20.02650099999999966 63.88019899999999751, 20.02650200000000069 63.88019899999999751, 20.02650500000000022 63.88019899999999751, 20.02650699999999873 63.88019899999999751, 20.02650799999999975 63.88019899999999751, 20.02650999999999826 63.88019899999999751, 20.02651099999999929 63.88020000000000209, 20.02651099999999929 63.88020000000000209, 20.02650799999999975 63.88020199999999704))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 253,
   "iri": "http://www.github.com/sparqlunicorn#5c6ce17c-cdde-459e-a423-ad5d827e5d4e_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "5c6ce17c-cdde-459e-a423-ad5d827e5d4e_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02665899999999866 63.88013699999999773, 20.02665700000000015 63.88013699999999773, 20.02665599999999912 63.88013699999999773, 20.02665599999999912 63.88013500000000278, 20.02665700000000015 63.8801339999999982, 20.02665999999999968 63.88013500000000278, 20.02666100000000071 63.88013500000000278, 20.02665899999999866 63.88013699999999773))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 254,
   "iri": "http://www.github.com/sparqlunicorn#5f5d079d-712c-4ad0-842c-c04d0d0763e5_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "5f5d079d-712c-4ad0-842c-c04d0d0763e5_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02539099999999905 63.87913300000000305, 20.02543999999999969 63.87912399999999735, 20.02544400000000024 63.87911400000000128, 20.02543199999999857 63.87911100000000175, 20.02542199999999895 63.87911199999999923, 20.02541199999999932 63.87911799999999829, 20.02539700000000167 63.87911900000000287, 20.02537099999999981 63.87912000000000035, 20.02536200000000122 63.8791220000000024, 20.02533800000000141 63.87912800000000146, 20.02532899999999927 63.879134999999998, 20.02534700000000001 63.87914599999999865, 20.02535999999999916 63.87916100000000341, 20.02539700000000167 63.87916100000000341, 20.02541400000000138 63.87915499999999724, 20.02541799999999839 63.87914099999999706, 20.02539099999999905 63.87913300000000305))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 255,
   "iri": "http://www.github.com/sparqlunicorn#622ce224-fab0-4fbd-8a79-d8ecc9b26a49_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "622ce224-fab0-4fbd-8a79-d8ecc9b26a49_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02649600000000163 63.88014600000000343, 20.0264950000000006 63.88014600000000343, 20.02649299999999855 63.88014600000000343, 20.02649100000000004 63.88014600000000343, 20.02648999999999901 63.88014499999999884, 20.02648999999999901 63.88014400000000137, 20.02648900000000154 63.88014299999999679, 20.02649100000000004 63.88014299999999679, 20.02649299999999855 63.88014299999999679, 20.0264950000000006 63.88014299999999679, 20.02649600000000163 63.88014299999999679, 20.02649800000000013 63.88014400000000137, 20.02649800000000013 63.88014400000000137, 20.02649900000000116 63.88014499999999884, 20.02649600000000163 63.88014600000000343))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 256,
   "iri": "http://www.github.com/sparqlunicorn#6247dd7d-45da-4805-9922-ad78d30ddc00_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6247dd7d-45da-4805-9922-ad78d30ddc00_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02488999999999919 63.87931100000000129, 20.02495899999999907 63.87931799999999782, 20.02495700000000056 63.8793059999999997, 20.02493700000000132 63.87929100000000204, 20.0248810000000006 63.87929799999999858, 20.0248810000000006 63.87929799999999858, 20.02488999999999919 63.87931100000000129))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 257,
   "iri": "http://www.github.com/sparqlunicorn#62c65c41-af9e-4af8-af61-97602598da5c_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "62c65c41-af9e-4af8-af61-97602598da5c_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02656800000000104 63.88019200000000097, 20.02656599999999898 63.88019200000000097, 20.0265650000000015 63.88019299999999845, 20.02656299999999945 63.88019200000000097, 20.02656299999999945 63.8801910000000035, 20.0265650000000015 63.88018999999999892, 20.02656700000000001 63.88018999999999892, 20.02656899999999851 63.88018999999999892, 20.02656999999999954 63.8801910000000035, 20.02656999999999954 63.88019200000000097, 20.02656800000000104 63.88019200000000097))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 258,
   "iri": "http://www.github.com/sparqlunicorn#64586be1-1d82-4160-a5fb-5af067a6276b_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "64586be1-1d82-4160-a5fb-5af067a6276b_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0264009999999999 63.88016499999999809, 20.02639900000000139 63.88016499999999809, 20.02639800000000037 63.88016400000000061, 20.02639699999999934 63.88016300000000314, 20.02639699999999934 63.88016300000000314, 20.02639800000000037 63.88016199999999856, 20.02639999999999887 63.88016199999999856, 20.0264009999999999 63.88016100000000108, 20.0264029999999984 63.88016199999999856, 20.02640500000000046 63.88016199999999856, 20.02640600000000148 63.88016300000000314, 20.02640600000000148 63.88016300000000314, 20.02640399999999943 63.88016400000000061, 20.0264009999999999 63.88016499999999809))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 259,
   "iri": "http://www.github.com/sparqlunicorn#646cf01d-f91f-454d-96f3-69f122d90cf1_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "646cf01d-f91f-454d-96f3-69f122d90cf1_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02639100000000028 63.88020099999999957, 20.02638999999999925 63.88020000000000209, 20.02638900000000177 63.88020000000000209, 20.02638699999999972 63.88020000000000209, 20.02638599999999869 63.88020000000000209, 20.02638500000000121 63.88020099999999957, 20.02638299999999916 63.88020099999999957, 20.02638200000000168 63.88020199999999704, 20.02638299999999916 63.88020300000000162, 20.02638500000000121 63.88020300000000162, 20.02638599999999869 63.88020300000000162, 20.02638800000000074 63.88020300000000162, 20.02638999999999925 63.88020300000000162, 20.02638999999999925 63.88020199999999704, 20.02639100000000028 63.88020199999999704, 20.02639100000000028 63.88020099999999957))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 260,
   "iri": "http://www.github.com/sparqlunicorn#65f7355b-9621-4b7e-a716-8fa0a4f07a0e_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "65f7355b-9621-4b7e-a716-8fa0a4f07a0e_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02668099999999995 63.88012599999999708, 20.02667900000000145 63.88012599999999708, 20.02667800000000042 63.8801249999999996, 20.02667999999999893 63.88012400000000213, 20.02668200000000098 63.88012400000000213, 20.02668399999999949 63.8801249999999996, 20.02668099999999995 63.88012599999999708))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 261,
   "iri": "http://www.github.com/sparqlunicorn#66424eb1-6ec0-4f2a-9003-e2143babe975_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "66424eb1-6ec0-4f2a-9003-e2143babe975_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0263680000000015 63.88018600000000191, 20.02636700000000047 63.88018600000000191, 20.02636499999999842 63.88018699999999939, 20.02636400000000094 63.88018600000000191, 20.02636400000000094 63.88018499999999733, 20.02636599999999945 63.88018499999999733, 20.0263680000000015 63.88018499999999733, 20.0263680000000015 63.88018600000000191))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 262,
   "iri": "http://www.github.com/sparqlunicorn#6839545f-3c21-456c-8e65-a34518a8bf7c_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6839545f-3c21-456c-8e65-a34518a8bf7c_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02664499999999848 63.88015599999999949, 20.026644000000001 63.88015599999999949, 20.02664199999999894 63.88015699999999697, 20.02664100000000147 63.88015699999999697, 20.02663899999999941 63.88015800000000155, 20.02663700000000091 63.88015800000000155, 20.02663599999999988 63.88015800000000155, 20.02663499999999885 63.88015699999999697, 20.02663400000000138 63.88015599999999949, 20.02663300000000035 63.88015500000000202, 20.02663300000000035 63.88015500000000202, 20.02663300000000035 63.88015399999999744, 20.02663400000000138 63.88015299999999996, 20.02663300000000035 63.88015200000000249, 20.02663400000000138 63.88015099999999791, 20.02663499999999885 63.88015099999999791, 20.02663700000000091 63.88015099999999791, 20.02663899999999941 63.88015000000000043, 20.02664199999999894 63.88015000000000043, 20.026644000000001 63.88015099999999791, 20.0266459999999995 63.88015099999999791, 20.02664700000000053 63.88015099999999791, 20.02664899999999903 63.88015200000000249, 20.02664899999999903 63.88015299999999996, 20.02664899999999903 63.88015399999999744, 20.02664800000000156 63.88015399999999744, 20.02664499999999848 63.88015599999999949))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 263,
   "iri": "http://www.github.com/sparqlunicorn#69195ab5-0241-4995-8079-fee9d5509376_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "69195ab5-0241-4995-8079-fee9d5509376_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02648200000000145 63.88015099999999791, 20.02648200000000145 63.88015200000000249, 20.02647999999999939 63.88015299999999996, 20.02647899999999836 63.88015299999999996, 20.02647699999999986 63.88015200000000249, 20.02647699999999986 63.88015099999999791, 20.02647800000000089 63.88015099999999791, 20.02647999999999939 63.88015000000000043, 20.02648100000000042 63.88014900000000296, 20.02648299999999892 63.88014900000000296, 20.02648500000000098 63.88014900000000296, 20.02648699999999948 63.88014900000000296, 20.02648800000000051 63.88015000000000043, 20.02648200000000145 63.88015099999999791))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 264,
   "iri": "http://www.github.com/sparqlunicorn#6939e3db-546a-4041-a823-e729a2d4b694_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6939e3db-546a-4041-a823-e729a2d4b694_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0265759999999986 63.88013699999999773, 20.02657299999999907 63.88013699999999773, 20.02657200000000159 63.88013600000000025, 20.02657200000000159 63.88013500000000278, 20.0265740000000001 63.8801339999999982, 20.02657699999999963 63.8801339999999982, 20.02657900000000168 63.8801339999999982, 20.02657800000000066 63.88013500000000278, 20.0265759999999986 63.88013699999999773))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 265,
   "iri": "http://www.github.com/sparqlunicorn#6a176aee-0f30-4da3-bd88-b48f61a6a5ca_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6a176aee-0f30-4da3-bd88-b48f61a6a5ca_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02654899999999927 63.88018300000000238, 20.02654799999999824 63.8801819999999978, 20.02654499999999871 63.88018100000000032, 20.02654400000000123 63.88018100000000032, 20.02654300000000021 63.88018000000000285, 20.0265410000000017 63.88018000000000285, 20.02653899999999965 63.88017899999999827, 20.02653799999999862 63.88017899999999827, 20.02653700000000114 63.88017800000000079, 20.02653600000000012 63.88017899999999827, 20.02653499999999909 63.88017899999999827, 20.02653300000000058 63.88018000000000285, 20.02653300000000058 63.88018100000000032, 20.02653300000000058 63.88018100000000032, 20.02653300000000058 63.8801819999999978, 20.02653300000000058 63.88018300000000238, 20.02653400000000161 63.88018399999999986, 20.02653499999999909 63.88018399999999986, 20.02653499999999909 63.88018499999999733, 20.02653499999999909 63.88018600000000191, 20.02653300000000058 63.88018699999999939, 20.02653099999999853 63.88018699999999939, 20.026527999999999 63.88018699999999939, 20.02652700000000152 63.88018699999999939, 20.02652499999999947 63.88018600000000191, 20.02652499999999947 63.88018600000000191, 20.02652399999999844 63.88018499999999733, 20.02652399999999844 63.88018399999999986, 20.02652399999999844 63.88018300000000238, 20.02652499999999947 63.88018300000000238, 20.02652600000000049 63.8801819999999978, 20.02652600000000049 63.88018100000000032, 20.02652700000000152 63.88018000000000285, 20.026527999999999 63.88017899999999827, 20.026527999999999 63.88017899999999827, 20.026527999999999 63.88017800000000079, 20.026527999999999 63.88017700000000332, 20.026527999999999 63.88017599999999874, 20.02652600000000049 63.88017599999999874, 20.02652399999999844 63.88017599999999874, 20.02652199999999993 63.88017700000000332, 20.02652099999999891 63.88017700000000332, 20.0265190000000004 63.88017800000000079, 20.02651799999999938 63.88017899999999827, 20.02651699999999835 63.88017899999999827, 20.02651499999999984 63.88017899999999827, 20.02651499999999984 63.88017800000000079, 20.02651600000000087 63.88017700000000332, 20.02651699999999835 63.88017700000000332, 20.0265190000000004 63.88017599999999874, 20.02652000000000143 63.88017599999999874, 20.02652199999999993 63.88017599999999874, 20.02652300000000096 63.88017500000000126, 20.02652499999999947 63.88017500000000126, 20.02652700000000152 63.88017500000000126, 20.02652900000000002 63.88017500000000126, 20.02653099999999853 63.88017500000000126, 20.02653199999999956 63.88017399999999668, 20.02653300000000058 63.88017399999999668, 20.02653499999999909 63.88017299999999921, 20.02653600000000012 63.88017200000000173, 20.02653700000000114 63.88017200000000173, 20.02653899999999965 63.88017099999999715, 20.02654000000000067 63.88017099999999715, 20.0265410000000017 63.88017200000000173, 20.02654000000000067 63.88017200000000173, 20.02653899999999965 63.88017299999999921, 20.02653799999999862 63.88017299999999921, 20.02653700000000114 63.88017399999999668, 20.02653600000000012 63.88017500000000126, 20.02653700000000114 63.88017500000000126, 20.02653899999999965 63.88017500000000126, 20.0265410000000017 63.88017500000000126, 20.02654199999999918 63.88017500000000126, 20.02654199999999918 63.88017599999999874, 20.0265410000000017 63.88017700000000332, 20.0265410000000017 63.88017700000000332, 20.02654199999999918 63.88017800000000079, 20.02654400000000123 63.88017899999999827, 20.02654599999999974 63.88017899999999827, 20.02654700000000076 63.88018000000000285, 20.02654799999999824 63.88018100000000032, 20.02654899999999927 63.88018100000000032, 20.0265500000000003 63.8801819999999978, 20.02654899999999927 63.88018300000000238))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 266,
   "iri": "http://www.github.com/sparqlunicorn#6daab534-65db-49f5-9b1b-5842930184c6_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6daab534-65db-49f5-9b1b-5842930184c6_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0267009999999992 63.88013000000000119, 20.02670300000000125 63.88013000000000119, 20.02670399999999873 63.88013099999999866, 20.02670300000000125 63.88013200000000325, 20.0267009999999992 63.88013200000000325, 20.02669799999999967 63.88013200000000325, 20.02669600000000116 63.88013099999999866, 20.02669600000000116 63.88013000000000119, 20.0267009999999992 63.88013000000000119))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 267,
   "iri": "http://www.github.com/sparqlunicorn#6f14de57-897a-4758-a984-262ca18baf75_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6f14de57-897a-4758-a984-262ca18baf75_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02641200000000055 63.88020099999999957, 20.02641300000000157 63.88020199999999704, 20.02640999999999849 63.88020199999999704, 20.02640900000000101 63.88020199999999704, 20.02640699999999896 63.88020199999999704, 20.02640600000000148 63.88020099999999957, 20.02640399999999943 63.88020000000000209, 20.0264029999999984 63.88020000000000209, 20.0264009999999999 63.88020000000000209, 20.02639999999999887 63.88020099999999957, 20.02639999999999887 63.88020199999999704, 20.02639900000000139 63.88020300000000162, 20.02639800000000037 63.88020199999999704, 20.02639699999999934 63.88020099999999957, 20.02639699999999934 63.88020099999999957, 20.02639699999999934 63.88020000000000209, 20.02639500000000083 63.88020000000000209, 20.02639299999999878 63.88019899999999751, 20.02639299999999878 63.88019800000000004, 20.02639299999999878 63.88019800000000004, 20.02639299999999878 63.88019700000000256, 20.02639399999999981 63.88019599999999798, 20.02639299999999878 63.88019599999999798, 20.02639500000000083 63.8801950000000005, 20.02639599999999831 63.88019599999999798, 20.02639800000000037 63.88019599999999798, 20.02639999999999887 63.88019599999999798, 20.0264009999999999 63.88019599999999798, 20.0264029999999984 63.8801950000000005, 20.02640399999999943 63.8801950000000005, 20.02640500000000046 63.88019599999999798, 20.02640600000000148 63.88019599999999798, 20.02640799999999999 63.88019599999999798, 20.02640999999999849 63.88019700000000256, 20.02641099999999952 63.88019700000000256, 20.02641200000000055 63.88019800000000004, 20.02641300000000157 63.88019899999999751, 20.02641300000000157 63.88020000000000209, 20.02641200000000055 63.88020099999999957))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 268,
   "iri": "http://www.github.com/sparqlunicorn#6fa013cb-f86c-4978-ac06-999760a58991_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "6fa013cb-f86c-4978-ac06-999760a58991_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02640699999999896 63.88010599999999783, 20.02640699999999896 63.88010500000000036, 20.02640600000000148 63.88010400000000288, 20.02640500000000046 63.88010400000000288, 20.02640500000000046 63.8801029999999983, 20.02640399999999943 63.88010200000000083, 20.0264029999999984 63.88010100000000335, 20.02640200000000092 63.88010100000000335, 20.02640200000000092 63.88009999999999877, 20.0264009999999999 63.8800990000000013, 20.0264009999999999 63.88009799999999672, 20.02639900000000139 63.88009799999999672, 20.02639800000000037 63.8800990000000013, 20.02639599999999831 63.88009799999999672, 20.02639299999999878 63.88009699999999924, 20.0263920000000013 63.88009799999999672, 20.0263920000000013 63.88009799999999672, 20.02639299999999878 63.8800990000000013, 20.02639299999999878 63.88009999999999877, 20.02639299999999878 63.88010100000000335, 20.02639299999999878 63.88010100000000335, 20.02639399999999981 63.88010200000000083, 20.02639500000000083 63.8801029999999983, 20.02639699999999934 63.8801029999999983, 20.02639800000000037 63.88010400000000288, 20.02639999999999887 63.88010500000000036, 20.0264009999999999 63.88010500000000036, 20.0264029999999984 63.88010500000000036, 20.02640399999999943 63.88010599999999783, 20.02640600000000148 63.88010599999999783, 20.02640600000000148 63.88010599999999783, 20.02640699999999896 63.88010599999999783))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 269,
   "iri": "http://www.github.com/sparqlunicorn#7a2b1560-c346-41b6-915b-a10547cd3440_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7a2b1560-c346-41b6-915b-a10547cd3440_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02650399999999919 63.88014299999999679, 20.02650200000000069 63.88014299999999679, 20.02649999999999864 63.88014299999999679, 20.02649900000000116 63.88014299999999679, 20.02649600000000163 63.88014299999999679, 20.0264969999999991 63.88014199999999931, 20.0264969999999991 63.88014100000000184, 20.02649800000000013 63.88014100000000184, 20.02649900000000116 63.88014100000000184, 20.02650099999999966 63.88014100000000184, 20.02650300000000172 63.88014100000000184, 20.02650399999999919 63.88014299999999679))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 270,
   "iri": "http://www.github.com/sparqlunicorn#7abeb59f-2759-4736-897c-69d50f0cdb27_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7abeb59f-2759-4736-897c-69d50f0cdb27_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02653700000000114 63.88018600000000191, 20.02653799999999862 63.88018600000000191, 20.02654000000000067 63.88018600000000191, 20.02654199999999918 63.88018600000000191, 20.02654300000000021 63.88018499999999733, 20.02654300000000021 63.88018499999999733, 20.02654300000000021 63.88018399999999986, 20.02654300000000021 63.88018300000000238, 20.02654199999999918 63.8801819999999978, 20.02654199999999918 63.8801819999999978, 20.02654000000000067 63.88018100000000032, 20.02653799999999862 63.88018100000000032, 20.02653700000000114 63.88018100000000032, 20.02653499999999909 63.8801819999999978, 20.02653400000000161 63.88018300000000238, 20.02653300000000058 63.88018300000000238, 20.02653300000000058 63.88018300000000238, 20.02653400000000161 63.88018399999999986, 20.02653499999999909 63.88018399999999986, 20.02653499999999909 63.88018499999999733, 20.02653700000000114 63.88018600000000191))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 271,
   "iri": "http://www.github.com/sparqlunicorn#7c93771e-f108-4c1a-8ede-799d87629036_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7c93771e-f108-4c1a-8ede-799d87629036_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02533400000000086 63.87948300000000046, 20.02554100000000048 63.87961399999999657, 20.02566600000000108 63.87965100000000263, 20.02591599999999872 63.87972400000000306, 20.02610500000000116 63.87978199999999873, 20.0261509999999987 63.87979899999999844, 20.02631900000000087 63.87986099999999823, 20.02635400000000132 63.87987400000000093, 20.02637700000000009 63.87986099999999823, 20.02634899999999973 63.87985400000000169, 20.02631699999999881 63.8798450000000031, 20.02615499999999926 63.87978199999999873, 20.02573500000000095 63.87965799999999916, 20.02555399999999963 63.87960100000000097, 20.02542499999999848 63.87951799999999736, 20.02522300000000044 63.87939000000000078, 20.0251240000000017 63.879331999999998, 20.0251020000000004 63.87933999999999912, 20.02533400000000086 63.87948300000000046))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 272,
   "iri": "http://www.github.com/sparqlunicorn#7ee2bf5f-4059-4b49-af4f-173eb49582c7_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7ee2bf5f-4059-4b49-af4f-173eb49582c7_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02655700000000039 63.88015599999999949, 20.02655800000000141 63.88015699999999697, 20.02655700000000039 63.88015800000000155, 20.02655599999999936 63.88015800000000155, 20.02655400000000085 63.88015800000000155, 20.02655299999999983 63.88015800000000155, 20.0265519999999988 63.88015699999999697, 20.0265519999999988 63.88015599999999949, 20.02655100000000132 63.88015599999999949, 20.02655100000000132 63.88015500000000202, 20.0265500000000003 63.88015399999999744, 20.02654899999999927 63.88015299999999996, 20.02654799999999824 63.88015299999999996, 20.02654799999999824 63.88015200000000249, 20.02654899999999927 63.88015099999999791, 20.0265500000000003 63.88015099999999791, 20.0265519999999988 63.88015200000000249, 20.02655299999999983 63.88015299999999996, 20.02655400000000085 63.88015299999999996, 20.02655400000000085 63.88015399999999744, 20.02655499999999833 63.88015500000000202, 20.02655700000000039 63.88015599999999949))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 273,
   "iri": "http://www.github.com/sparqlunicorn#7effe8a8-89ea-40c7-b095-ac70c7f9c030_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "7effe8a8-89ea-40c7-b095-ac70c7f9c030_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02643600000000035 63.88012299999999755, 20.02643499999999932 63.88012400000000213, 20.02643300000000082 63.88012400000000213, 20.02643199999999979 63.88012400000000213, 20.02643000000000129 63.88012400000000213, 20.02642900000000026 63.88012299999999755, 20.02642799999999923 63.88012299999999755, 20.02642799999999923 63.88012200000000007, 20.02642900000000026 63.8801210000000026, 20.02643099999999876 63.8801210000000026, 20.02643300000000082 63.8801210000000026, 20.02643399999999829 63.8801210000000026, 20.02643600000000035 63.8801210000000026, 20.02643700000000138 63.8801210000000026, 20.02643600000000035 63.88012299999999755))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 274,
   "iri": "http://www.github.com/sparqlunicorn#81a150a3-f5f9-4f03-84d7-b5e043f9d371_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "81a150a3-f5f9-4f03-84d7-b5e043f9d371_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02642799999999923 63.88017899999999827, 20.02642700000000175 63.88017800000000079, 20.02642700000000175 63.88017700000000332, 20.02642600000000073 63.88017700000000332, 20.02642399999999867 63.88017700000000332, 20.02642200000000017 63.88017599999999874, 20.02642099999999914 63.88017700000000332, 20.02641900000000064 63.88017700000000332, 20.02641900000000064 63.88017800000000079, 20.02642000000000166 63.88017800000000079, 20.02642099999999914 63.88017899999999827, 20.02642099999999914 63.88018000000000285, 20.02642099999999914 63.88018100000000032, 20.02641799999999961 63.8801819999999978, 20.02641600000000111 63.8801819999999978, 20.02641399999999905 63.8801819999999978, 20.02641300000000157 63.88018300000000238, 20.02641300000000157 63.88018399999999986, 20.02641300000000157 63.88018499999999733, 20.02641300000000157 63.88018600000000191, 20.02641300000000157 63.88018699999999939, 20.02641500000000008 63.88018699999999939, 20.02641600000000111 63.88018699999999939, 20.02641699999999858 63.88018799999999686, 20.02641699999999858 63.88018900000000144, 20.02641799999999961 63.88018999999999892, 20.02641900000000064 63.88018999999999892, 20.02642099999999914 63.8801910000000035, 20.0264230000000012 63.8801910000000035, 20.0264249999999997 63.8801910000000035, 20.02642600000000073 63.88018999999999892, 20.02642600000000073 63.88018900000000144, 20.02642700000000175 63.88018799999999686, 20.02642799999999923 63.88018699999999939, 20.02643000000000129 63.88018699999999939, 20.02643199999999979 63.88018699999999939, 20.02643300000000082 63.88018799999999686, 20.02643600000000035 63.88018799999999686, 20.02643700000000138 63.88018799999999686, 20.02643700000000138 63.88018699999999939, 20.02643799999999885 63.88018699999999939, 20.02644000000000091 63.88018699999999939, 20.02644099999999838 63.88018600000000191, 20.02643899999999988 63.88018600000000191, 20.02643700000000138 63.88018499999999733, 20.02643499999999932 63.88018499999999733, 20.02643199999999979 63.88018499999999733, 20.02643099999999876 63.88018499999999733, 20.02642900000000026 63.88018399999999986, 20.02642700000000175 63.88018399999999986, 20.02642700000000175 63.88018300000000238, 20.02642799999999923 63.88018300000000238, 20.02643000000000129 63.88018300000000238, 20.02643199999999979 63.88018300000000238, 20.02643399999999829 63.88018300000000238, 20.02643399999999829 63.8801819999999978, 20.02643199999999979 63.8801819999999978, 20.02643099999999876 63.8801819999999978, 20.02643000000000129 63.88018100000000032, 20.02642900000000026 63.88018000000000285, 20.02642799999999923 63.88017899999999827))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 275,
   "iri": "http://www.github.com/sparqlunicorn#8522a6f2-b165-4529-9dd6-30bc0da88476_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8522a6f2-b165-4529-9dd6-30bc0da88476_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02671600000000041 63.88013800000000231, 20.02671399999999835 63.88013699999999773, 20.02671399999999835 63.88013600000000025, 20.02671499999999938 63.88013500000000278, 20.02671799999999891 63.88013500000000278, 20.02671899999999994 63.88013600000000025, 20.02671899999999994 63.88013699999999773, 20.02671600000000041 63.88013800000000231))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 276,
   "iri": "http://www.github.com/sparqlunicorn#866cbf6d-496f-4aff-acce-5f47e32fdcd9_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "866cbf6d-496f-4aff-acce-5f47e32fdcd9_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02648800000000051 63.8801249999999996, 20.02648900000000154 63.88012599999999708, 20.02649100000000004 63.8801249999999996, 20.02649200000000107 63.8801249999999996, 20.02649200000000107 63.88012400000000213, 20.02649200000000107 63.88012299999999755, 20.02648999999999901 63.88012200000000007, 20.02648800000000051 63.88012200000000007, 20.02648599999999846 63.88012200000000007, 20.02648500000000098 63.88012299999999755, 20.02648599999999846 63.88012299999999755, 20.02648699999999948 63.88012400000000213, 20.02648699999999948 63.8801249999999996, 20.02648800000000051 63.8801249999999996))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 277,
   "iri": "http://www.github.com/sparqlunicorn#86997e8b-4662-4c0f-a2d1-b17edc36ac8a_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "86997e8b-4662-4c0f-a2d1-b17edc36ac8a_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02648100000000042 63.88016999999999967, 20.02648100000000042 63.88017299999999921, 20.02650900000000078 63.88017200000000173, 20.02650900000000078 63.88017099999999715, 20.02648399999999995 63.88017200000000173, 20.02648399999999995 63.88016999999999967, 20.02648100000000042 63.88016999999999967))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 278,
   "iri": "http://www.github.com/sparqlunicorn#86f8a06e-51c7-41be-935b-e70bfcaa67b7_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "86f8a06e-51c7-41be-935b-e70bfcaa67b7_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02638800000000074 63.88011800000000306, 20.02638800000000074 63.88011900000000054, 20.02638699999999972 63.88011900000000054, 20.02638599999999869 63.88011900000000054, 20.02638599999999869 63.88011800000000306, 20.02638500000000121 63.88011800000000306, 20.02638500000000121 63.88011699999999848, 20.02638599999999869 63.88011699999999848, 20.02638699999999972 63.88011699999999848, 20.02638800000000074 63.88011699999999848, 20.02638999999999925 63.88011699999999848, 20.02638999999999925 63.88011800000000306, 20.02638800000000074 63.88011800000000306))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 279,
   "iri": "http://www.github.com/sparqlunicorn#89b07983-8e6c-4b79-a97f-618a913945ee_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "89b07983-8e6c-4b79-a97f-618a913945ee_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02651699999999835 63.88014799999999838, 20.02651499999999984 63.88014799999999838, 20.02651300000000134 63.88014799999999838, 20.02651200000000031 63.8801470000000009, 20.02651300000000134 63.8801470000000009, 20.02651499999999984 63.88014600000000343, 20.02651699999999835 63.88014600000000343, 20.02651799999999938 63.88014600000000343, 20.02651799999999938 63.8801470000000009, 20.0265190000000004 63.88014799999999838, 20.02651699999999835 63.88014799999999838))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 280,
   "iri": "http://www.github.com/sparqlunicorn#8a40c3de-b0fb-4dc0-84d4-2000b15d6f60_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8a40c3de-b0fb-4dc0-84d4-2000b15d6f60_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02637599999999907 63.88017800000000079, 20.02637500000000159 63.88017700000000332, 20.02637500000000159 63.88017599999999874, 20.02637299999999954 63.88017599999999874, 20.02637100000000103 63.88017599999999874, 20.02636899999999898 63.88017700000000332, 20.0263680000000015 63.88017800000000079, 20.0263680000000015 63.88017899999999827, 20.02636899999999898 63.88017899999999827, 20.02637 63.88018000000000285, 20.02637199999999851 63.88018000000000285, 20.02637400000000056 63.88018000000000285, 20.02637500000000159 63.88017899999999827, 20.02637599999999907 63.88017899999999827, 20.02637599999999907 63.88017800000000079))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 281,
   "iri": "http://www.github.com/sparqlunicorn#8a782006-277b-43df-b476-622e770433ba_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8a782006-277b-43df-b476-622e770433ba_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0265759999999986 63.88015899999999903, 20.0265740000000001 63.88015899999999903, 20.02657200000000159 63.88015899999999903, 20.02657100000000057 63.88015800000000155, 20.02657100000000057 63.88015699999999697, 20.02657200000000159 63.88015699999999697, 20.02657299999999907 63.88015599999999949, 20.02657500000000113 63.88015599999999949, 20.02657699999999963 63.88015599999999949, 20.02657900000000168 63.88015699999999697, 20.02657900000000168 63.88015699999999697, 20.02657900000000168 63.88015800000000155, 20.0265759999999986 63.88015899999999903))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 282,
   "iri": "http://www.github.com/sparqlunicorn#8fc69a50-3bd3-43ef-9f74-2e52360f520c_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8fc69a50-3bd3-43ef-9f74-2e52360f520c_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02639699999999934 63.88018000000000285, 20.02639699999999934 63.88018100000000032, 20.02639900000000139 63.88018100000000032, 20.02639999999999887 63.88018000000000285, 20.02640200000000092 63.88018000000000285, 20.02640399999999943 63.88017899999999827, 20.02640600000000148 63.88017899999999827, 20.02640799999999999 63.88017899999999827, 20.02640900000000101 63.88017800000000079, 20.02641099999999952 63.88017800000000079, 20.02641300000000157 63.88017800000000079, 20.02641399999999905 63.88017700000000332, 20.02641500000000008 63.88017700000000332, 20.02641500000000008 63.88017599999999874, 20.02641399999999905 63.88017599999999874, 20.02641200000000055 63.88017599999999874, 20.02640999999999849 63.88017599999999874, 20.02640900000000101 63.88017599999999874, 20.02640699999999896 63.88017599999999874, 20.02640500000000046 63.88017599999999874, 20.02640399999999943 63.88017500000000126, 20.02640200000000092 63.88017500000000126, 20.0264009999999999 63.88017500000000126, 20.02640200000000092 63.88017599999999874, 20.02640200000000092 63.88017700000000332, 20.02639999999999887 63.88017700000000332, 20.02639800000000037 63.88017700000000332, 20.02639599999999831 63.88017700000000332, 20.02639399999999981 63.88017599999999874, 20.02639299999999878 63.88017599999999874, 20.02639399999999981 63.88017700000000332, 20.02639599999999831 63.88017800000000079, 20.02639699999999934 63.88017899999999827, 20.02639699999999934 63.88018000000000285))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 283,
   "iri": "http://www.github.com/sparqlunicorn#90d8c5f4-021b-414b-8219-47f4e39bbff6_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "90d8c5f4-021b-414b-8219-47f4e39bbff6_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02649399999999957 63.88013699999999773, 20.02649200000000107 63.88013699999999773, 20.02649100000000004 63.88013699999999773, 20.02648900000000154 63.88013600000000025, 20.02648800000000051 63.88013600000000025, 20.02648800000000051 63.88013500000000278, 20.02648900000000154 63.8801339999999982, 20.02649100000000004 63.8801339999999982, 20.02649399999999957 63.88013500000000278, 20.0264950000000006 63.88013500000000278, 20.0264950000000006 63.88013600000000025, 20.02649399999999957 63.88013699999999773))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 284,
   "iri": "http://www.github.com/sparqlunicorn#91417e18-f9c7-49d7-80b2-ec408b898147_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "91417e18-f9c7-49d7-80b2-ec408b898147_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02657100000000057 63.8801339999999982, 20.02656899999999851 63.88013500000000278, 20.02657100000000057 63.88013600000000025, 20.02657200000000159 63.88013600000000025, 20.02657200000000159 63.88013500000000278, 20.0265740000000001 63.8801339999999982, 20.02657100000000057 63.8801339999999982))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 285,
   "iri": "http://www.github.com/sparqlunicorn#92bc7954-d3e5-456e-a3f9-15ed633ca086_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "92bc7954-d3e5-456e-a3f9-15ed633ca086_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02642700000000175 63.88011699999999848, 20.02642600000000073 63.88011699999999848, 20.0264249999999997 63.88011699999999848, 20.02642600000000073 63.88011800000000306, 20.02642700000000175 63.88011699999999848))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 286,
   "iri": "http://www.github.com/sparqlunicorn#9460842b-7734-4665-82a2-0085a33ce453_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "9460842b-7734-4665-82a2-0085a33ce453_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02662899999999979 63.88012200000000007, 20.02661799999999914 63.8801210000000026, 20.02661300000000111 63.88011699999999848, 20.02661399999999858 63.88011099999999942, 20.02662400000000176 63.88010799999999989, 20.02663300000000035 63.88010700000000242, 20.02663899999999941 63.88010899999999737, 20.02664199999999894 63.88011000000000195, 20.0266459999999995 63.88011099999999942, 20.0266459999999995 63.88011600000000101, 20.02663799999999839 63.88011999999999802, 20.02662899999999979 63.88012200000000007))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 287,
   "iri": "http://www.github.com/sparqlunicorn#97e0311e-f072-4b6c-8619-4c8b81cb2232_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "97e0311e-f072-4b6c-8619-4c8b81cb2232_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02639399999999981 63.88015500000000202, 20.02639299999999878 63.88015500000000202, 20.02638999999999925 63.88015399999999744, 20.02638800000000074 63.88015399999999744, 20.02638699999999972 63.88015299999999996, 20.02638699999999972 63.88015200000000249, 20.02638900000000177 63.88015200000000249, 20.02639100000000028 63.88015200000000249, 20.02639299999999878 63.88015200000000249, 20.02639399999999981 63.88015200000000249, 20.02639599999999831 63.88015299999999996, 20.02639800000000037 63.88015299999999996, 20.02639900000000139 63.88015299999999996, 20.02639399999999981 63.88015500000000202))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 288,
   "iri": "http://www.github.com/sparqlunicorn#9a404584-fd22-42a3-ba09-2382a8cc7596_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "9a404584-fd22-42a3-ba09-2382a8cc7596_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02646800000000127 63.88016400000000061, 20.02646599999999921 63.88016400000000061, 20.02646500000000174 63.88016400000000061, 20.02646299999999968 63.88016400000000061, 20.02646100000000118 63.88016400000000061, 20.02646100000000118 63.88016300000000314, 20.02646000000000015 63.88016300000000314, 20.02645899999999912 63.88016199999999856, 20.02645800000000165 63.88016100000000108, 20.02645800000000165 63.8801599999999965, 20.02645700000000062 63.88015899999999903, 20.02645800000000165 63.88015899999999903, 20.02645899999999912 63.88015800000000155, 20.02646100000000118 63.88015800000000155, 20.02646199999999865 63.88015800000000155, 20.02646400000000071 63.88015800000000155, 20.02646599999999921 63.88015800000000155, 20.02646800000000127 63.88015800000000155, 20.02646899999999874 63.88015800000000155, 20.02646999999999977 63.88015899999999903, 20.0264710000000008 63.8801599999999965, 20.0264710000000008 63.88016100000000108, 20.02647199999999827 63.88016199999999856, 20.02647199999999827 63.88016199999999856, 20.02646800000000127 63.88016400000000061))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 289,
   "iri": "http://www.github.com/sparqlunicorn#9d5f5c58-94c9-426a-862c-0bce70aa017e_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "9d5f5c58-94c9-426a-862c-0bce70aa017e_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02649600000000163 63.88015299999999996, 20.0264950000000006 63.88015299999999996, 20.02649299999999855 63.88015299999999996, 20.02649200000000107 63.88015299999999996, 20.02648900000000154 63.88015299999999996, 20.02648800000000051 63.88015299999999996, 20.02648699999999948 63.88015200000000249, 20.02648699999999948 63.88015099999999791, 20.02648699999999948 63.88015000000000043, 20.02648800000000051 63.88015000000000043, 20.02648900000000154 63.88014900000000296, 20.02649100000000004 63.88014900000000296, 20.02649200000000107 63.88014799999999838, 20.02649399999999957 63.88014799999999838, 20.0264950000000006 63.88014799999999838, 20.02649600000000163 63.88014900000000296, 20.02649600000000163 63.88014900000000296, 20.0264969999999991 63.88015000000000043, 20.0264969999999991 63.88015099999999791, 20.02649600000000163 63.88015299999999996))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 290,
   "iri": "http://www.github.com/sparqlunicorn#9e80e441-dc60-4514-8477-702e7d8ea321_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "9e80e441-dc60-4514-8477-702e7d8ea321_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02654599999999974 63.88021400000000227, 20.02654599999999974 63.88021499999999975, 20.02654599999999974 63.88021599999999722, 20.02654599999999974 63.8802170000000018, 20.02654599999999974 63.8802170000000018, 20.02654499999999871 63.88021799999999928, 20.02654400000000123 63.88021899999999675, 20.02654300000000021 63.88021899999999675, 20.0265410000000017 63.88021899999999675, 20.02653899999999965 63.88021899999999675, 20.02653700000000114 63.88021899999999675, 20.02653600000000012 63.88021899999999675, 20.02653400000000161 63.88021899999999675, 20.02653199999999956 63.88021799999999928, 20.02653000000000105 63.88021799999999928, 20.02652900000000002 63.88021799999999928, 20.02652700000000152 63.8802170000000018, 20.02652499999999947 63.8802170000000018, 20.02652300000000096 63.8802170000000018, 20.02652099999999891 63.88021599999999722, 20.02652000000000143 63.88021599999999722, 20.0265190000000004 63.88021499999999975, 20.02651799999999938 63.88021400000000227, 20.02651600000000087 63.88021400000000227, 20.02651499999999984 63.88021299999999769, 20.02651300000000134 63.88021299999999769, 20.02651200000000031 63.88021200000000022, 20.02650999999999826 63.88021200000000022, 20.02650900000000078 63.88021100000000274, 20.02650799999999975 63.88021100000000274, 20.02650900000000078 63.88020999999999816, 20.02651099999999929 63.88020900000000069, 20.02651300000000134 63.88020800000000321, 20.02651499999999984 63.88020800000000321, 20.02651799999999938 63.88020900000000069, 20.02652000000000143 63.88020800000000321, 20.02652199999999993 63.88020800000000321, 20.02652300000000096 63.88020699999999863, 20.02652499999999947 63.88020699999999863, 20.02652600000000049 63.88020699999999863, 20.026527999999999 63.88020699999999863, 20.02653000000000105 63.88020800000000321, 20.02653199999999956 63.88020800000000321, 20.02653300000000058 63.88020900000000069, 20.02653499999999909 63.88020900000000069, 20.02653600000000012 63.88020999999999816, 20.02653799999999862 63.88020999999999816, 20.02654000000000067 63.88021100000000274, 20.02654199999999918 63.88021100000000274, 20.02654300000000021 63.88021200000000022, 20.02654499999999871 63.88021200000000022, 20.02654599999999974 63.88021299999999769, 20.02654700000000076 63.88021299999999769, 20.02654599999999974 63.88021400000000227))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 291,
   "iri": "http://www.github.com/sparqlunicorn#a0108469-2166-4732-8aff-f6429f29a82f_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a0108469-2166-4732-8aff-f6429f29a82f_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02639599999999831 63.88018699999999939, 20.02639599999999831 63.88018799999999686, 20.02639500000000083 63.88018799999999686, 20.02639299999999878 63.88018799999999686, 20.02639299999999878 63.88018699999999939, 20.0263920000000013 63.88018600000000191, 20.0263920000000013 63.88018600000000191, 20.0263920000000013 63.88018499999999733, 20.02639399999999981 63.88018399999999986, 20.02639599999999831 63.88018399999999986, 20.02639699999999934 63.88018499999999733, 20.02639800000000037 63.88018600000000191, 20.02639599999999831 63.88018699999999939))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 292,
   "iri": "http://www.github.com/sparqlunicorn#a09111ca-c359-48cc-9a96-e79673caa0b8_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a09111ca-c359-48cc-9a96-e79673caa0b8_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02655999999999992 63.8801339999999982, 20.02655800000000141 63.88013500000000278, 20.02655599999999936 63.8801339999999982, 20.02655599999999936 63.88013300000000072, 20.02655700000000039 63.88013200000000325, 20.02655999999999992 63.88013099999999866, 20.02656199999999842 63.88013200000000325, 20.02656199999999842 63.88013300000000072, 20.02655999999999992 63.8801339999999982))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 293,
   "iri": "http://www.github.com/sparqlunicorn#a3006e8d-46d6-4db0-81aa-23238514e5eb_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a3006e8d-46d6-4db0-81aa-23238514e5eb_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02667200000000136 63.88010799999999989, 20.02666999999999931 63.88010799999999989, 20.0266680000000008 63.88010700000000242, 20.0266680000000008 63.88010599999999783, 20.02666699999999977 63.88010599999999783, 20.02666699999999977 63.88010500000000036, 20.02666899999999828 63.88010400000000288, 20.02667100000000033 63.88010400000000288, 20.02667399999999986 63.8801029999999983, 20.02667599999999837 63.8801029999999983, 20.02667800000000042 63.8801029999999983, 20.02667800000000042 63.88010400000000288, 20.0266769999999994 63.88010500000000036, 20.02667599999999837 63.88010599999999783, 20.02667500000000089 63.88010700000000242, 20.02667399999999986 63.88010700000000242, 20.02667200000000136 63.88010799999999989))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 294,
   "iri": "http://www.github.com/sparqlunicorn#a3228d61-d64a-4b1f-be73-130b222b1c11_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a3228d61-d64a-4b1f-be73-130b222b1c11_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02669099999999958 63.88013500000000278, 20.02668900000000107 63.8801339999999982, 20.02668800000000005 63.88013300000000072, 20.02668800000000005 63.88013200000000325, 20.02668699999999902 63.88013099999999866, 20.02668900000000107 63.88013099999999866, 20.02669099999999958 63.88013099999999866, 20.02669300000000163 63.88013200000000325, 20.02669399999999911 63.88013300000000072, 20.02669300000000163 63.8801339999999982, 20.02669099999999958 63.88013500000000278))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 295,
   "iri": "http://www.github.com/sparqlunicorn#a7f106af-5755-44ed-9ba2-86b1110e21f7_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a7f106af-5755-44ed-9ba2-86b1110e21f7_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02658999999999878 63.88013200000000325, 20.02658800000000028 63.88013200000000325, 20.02658600000000177 63.88013099999999866, 20.02658600000000177 63.88013000000000119, 20.02658600000000177 63.88012899999999661, 20.02658800000000028 63.88012799999999913, 20.02659099999999981 63.88012899999999661, 20.02659299999999831 63.88012899999999661, 20.02659299999999831 63.88013099999999866, 20.02658999999999878 63.88013200000000325))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 296,
   "iri": "http://www.github.com/sparqlunicorn#a9d036a7-9001-47c8-89db-54c0fe8d6829_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "a9d036a7-9001-47c8-89db-54c0fe8d6829_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02474700000000141 63.87927899999999681, 20.02479500000000101 63.8793059999999997, 20.02483099999999894 63.87929499999999905, 20.0248349999999995 63.8792839999999984, 20.02481300000000175 63.87927499999999981, 20.02476899999999915 63.8792710000000028, 20.02474700000000141 63.87927899999999681))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 297,
   "iri": "http://www.github.com/sparqlunicorn#ab7a69ca-6c8f-4d13-893b-3702231a60b7_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ab7a69ca-6c8f-4d13-893b-3702231a60b7_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02651300000000134 63.88022300000000087, 20.02651099999999929 63.88022300000000087, 20.02650799999999975 63.88022300000000087, 20.02650600000000125 63.88022300000000087, 20.02650399999999919 63.88022300000000087, 20.02650300000000172 63.88022300000000087, 20.02650099999999966 63.88022300000000087, 20.02649999999999864 63.88022399999999834, 20.02649800000000013 63.88022399999999834, 20.02649600000000163 63.88022399999999834, 20.02649299999999855 63.88022300000000087, 20.02649100000000004 63.88022300000000087, 20.02648999999999901 63.88022200000000339, 20.02649200000000107 63.88022099999999881, 20.02649299999999855 63.88022099999999881, 20.0264969999999991 63.88022000000000133, 20.02649900000000116 63.88022000000000133, 20.02650099999999966 63.88022000000000133, 20.02650200000000069 63.88022000000000133, 20.02650399999999919 63.88022000000000133, 20.02650699999999873 63.88022000000000133, 20.02650900000000078 63.88022000000000133, 20.02650999999999826 63.88022000000000133, 20.02651300000000134 63.88022000000000133, 20.02651499999999984 63.88022000000000133, 20.02651699999999835 63.88022000000000133, 20.0265190000000004 63.88022000000000133, 20.02652000000000143 63.88022000000000133, 20.02652099999999891 63.88022099999999881, 20.02652199999999993 63.88022099999999881, 20.02651300000000134 63.88022300000000087))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 298,
   "iri": "http://www.github.com/sparqlunicorn#abb845a6-5386-459e-938f-5100e0af1f72_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "abb845a6-5386-459e-938f-5100e0af1f72_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02670200000000023 63.88011300000000148, 20.02670000000000172 63.88011300000000148, 20.02669799999999967 63.8801119999999969, 20.02669799999999967 63.88011099999999942, 20.0267009999999992 63.88011099999999942, 20.02670200000000023 63.88011099999999942, 20.02670300000000125 63.8801119999999969, 20.02670200000000023 63.88011300000000148))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 299,
   "iri": "http://www.github.com/sparqlunicorn#b1984fb3-ca88-4453-8fa3-b782d735052c_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b1984fb3-ca88-4453-8fa3-b782d735052c_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02638100000000065 63.88012599999999708, 20.0263789999999986 63.88012700000000166, 20.02637700000000009 63.88012700000000166, 20.02637500000000159 63.88012700000000166, 20.02637299999999954 63.88012700000000166, 20.02637199999999851 63.88012599999999708, 20.02637199999999851 63.88012599999999708, 20.02637199999999851 63.8801249999999996, 20.02636899999999898 63.8801249999999996, 20.0263680000000015 63.88012400000000213, 20.0263680000000015 63.88012299999999755, 20.0263680000000015 63.88012200000000007, 20.0263680000000015 63.88012200000000007, 20.02636899999999898 63.8801210000000026, 20.02637 63.88011999999999802, 20.02637100000000103 63.88011999999999802, 20.02637299999999954 63.88011999999999802, 20.02637500000000159 63.88011999999999802, 20.02637599999999907 63.88011999999999802, 20.02637800000000112 63.8801210000000026, 20.02637999999999963 63.8801210000000026, 20.02638200000000168 63.8801210000000026, 20.02638299999999916 63.8801210000000026, 20.02638400000000019 63.88012200000000007, 20.02638500000000121 63.88012299999999755, 20.02638500000000121 63.88012400000000213, 20.02638500000000121 63.88012400000000213, 20.02638400000000019 63.8801249999999996, 20.02638100000000065 63.88012599999999708))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 300,
   "iri": "http://www.github.com/sparqlunicorn#b3a42fde-e5a1-4a7f-912f-ef0fe1019b2b_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b3a42fde-e5a1-4a7f-912f-ef0fe1019b2b_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02646800000000127 63.88020600000000115, 20.02646599999999921 63.88020600000000115, 20.02646299999999968 63.88020600000000115, 20.02646199999999865 63.88020600000000115, 20.02646000000000015 63.88020499999999657, 20.02645899999999912 63.8802039999999991, 20.02645800000000165 63.8802039999999991, 20.02645800000000165 63.88020300000000162, 20.02645899999999912 63.88020199999999704, 20.02646100000000118 63.88020199999999704, 20.02646299999999968 63.88020199999999704, 20.02646599999999921 63.88020199999999704, 20.02646700000000024 63.88020300000000162, 20.02646800000000127 63.88020300000000162, 20.02646899999999874 63.8802039999999991, 20.02646999999999977 63.88020499999999657, 20.02646800000000127 63.88020600000000115))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 301,
   "iri": "http://www.github.com/sparqlunicorn#b6233e40-079e-447d-b960-2f59a90dcd6e_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b6233e40-079e-447d-b960-2f59a90dcd6e_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02649299999999855 63.88020499999999657, 20.02648999999999901 63.88020499999999657, 20.02648800000000051 63.88020499999999657, 20.02648699999999948 63.88020499999999657, 20.02648500000000098 63.88020499999999657, 20.02648299999999892 63.88020600000000115, 20.02648100000000042 63.88020600000000115, 20.02647999999999939 63.88020699999999863, 20.02647800000000089 63.88020600000000115, 20.02647800000000089 63.88020499999999657, 20.02647899999999836 63.88020499999999657, 20.02648200000000145 63.8802039999999991, 20.02648299999999892 63.88020300000000162, 20.02648299999999892 63.88020199999999704, 20.02648299999999892 63.88020099999999957, 20.02648299999999892 63.88020099999999957, 20.02648500000000098 63.88020000000000209, 20.02648599999999846 63.88020000000000209, 20.02648800000000051 63.88020000000000209, 20.02648999999999901 63.88020000000000209, 20.02649200000000107 63.88020000000000209, 20.02649399999999957 63.88020199999999704, 20.02649399999999957 63.88020300000000162, 20.0264950000000006 63.8802039999999991, 20.0264950000000006 63.88020499999999657, 20.02649299999999855 63.88020499999999657))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 302,
   "iri": "http://www.github.com/sparqlunicorn#b70a68c4-e63b-445d-8f0f-ec2384dc1363_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b70a68c4-e63b-445d-8f0f-ec2384dc1363_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02651799999999938 63.88020800000000321, 20.02651799999999938 63.88020900000000069, 20.02651699999999835 63.88020800000000321, 20.02651499999999984 63.88020800000000321, 20.02651399999999882 63.88020699999999863, 20.02651399999999882 63.88020600000000115, 20.02651600000000087 63.88020600000000115, 20.02651799999999938 63.88020600000000115, 20.02652000000000143 63.88020600000000115, 20.02652099999999891 63.88020699999999863, 20.02651799999999938 63.88020800000000321))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 303,
   "iri": "http://www.github.com/sparqlunicorn#b7b8283e-fd64-4b1f-b6e3-81a71091b63a_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b7b8283e-fd64-4b1f-b6e3-81a71091b63a_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02654599999999974 63.88012599999999708, 20.02654300000000021 63.88012700000000166, 20.0265410000000017 63.88012599999999708, 20.02654000000000067 63.8801249999999996, 20.02654199999999918 63.88012400000000213, 20.02654199999999918 63.88012299999999755, 20.02654199999999918 63.88012200000000007, 20.0265410000000017 63.8801210000000026, 20.02654300000000021 63.88012200000000007, 20.02654400000000123 63.88012299999999755, 20.02654700000000076 63.88012299999999755, 20.02654899999999927 63.88012299999999755, 20.02655100000000132 63.88012400000000213, 20.02655100000000132 63.8801249999999996, 20.02654599999999974 63.88012599999999708))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 304,
   "iri": "http://www.github.com/sparqlunicorn#b7ee573a-bf90-4f57-b159-39e1fc2822a8_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b7ee573a-bf90-4f57-b159-39e1fc2822a8_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02634899999999973 63.88019700000000256, 20.02634700000000123 63.88019700000000256, 20.0263460000000002 63.88019700000000256, 20.0263460000000002 63.88019599999999798, 20.0263460000000002 63.8801950000000005, 20.02634700000000123 63.88019400000000303, 20.02634799999999871 63.88019400000000303, 20.02635000000000076 63.88019400000000303, 20.02635199999999926 63.88019400000000303, 20.02635300000000029 63.88019400000000303, 20.0263549999999988 63.8801950000000005, 20.02635400000000132 63.88019599999999798, 20.02634899999999973 63.88019700000000256))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 305,
   "iri": "http://www.github.com/sparqlunicorn#b8b8a52d-9851-4436-9d74-90cc18bdc8e1_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b8b8a52d-9851-4436-9d74-90cc18bdc8e1_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02650699999999873 63.88013699999999773, 20.02650799999999975 63.88013699999999773, 20.02650900000000078 63.88013800000000231, 20.02650999999999826 63.88013899999999978, 20.02650799999999975 63.88013899999999978, 20.02650600000000125 63.88013800000000231, 20.02650500000000022 63.88013800000000231, 20.02650300000000172 63.88013699999999773, 20.02650099999999966 63.88013800000000231, 20.02650099999999966 63.88013899999999978, 20.02650099999999966 63.88013899999999978, 20.02649999999999864 63.88013899999999978, 20.02649999999999864 63.88013800000000231, 20.02649900000000116 63.88013699999999773, 20.02649800000000013 63.88013699999999773, 20.0264969999999991 63.88013600000000025, 20.0264969999999991 63.88013500000000278, 20.0264969999999991 63.8801339999999982, 20.02649800000000013 63.8801339999999982, 20.02649900000000116 63.88013300000000072, 20.02650099999999966 63.88013300000000072, 20.02650200000000069 63.88013300000000072, 20.02650399999999919 63.8801339999999982, 20.02650500000000022 63.8801339999999982, 20.02650699999999873 63.88013500000000278, 20.02650699999999873 63.88013500000000278, 20.02650699999999873 63.88013699999999773))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 306,
   "iri": "http://www.github.com/sparqlunicorn#b8ca6de4-79fe-49d2-b786-e5a01b2dc2a0_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b8ca6de4-79fe-49d2-b786-e5a01b2dc2a0_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02669399999999911 63.88013300000000072, 20.02669500000000014 63.8801339999999982, 20.02669699999999864 63.8801339999999982, 20.02669900000000069 63.88013300000000072, 20.02669600000000116 63.88013099999999866, 20.02669300000000163 63.88013200000000325, 20.02669399999999911 63.88013300000000072))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 307,
   "iri": "http://www.github.com/sparqlunicorn#b9b8ed23-6d56-4374-b098-d5fe1a84c94f_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "b9b8ed23-6d56-4374-b098-d5fe1a84c94f_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02656800000000104 63.88015399999999744, 20.02656599999999898 63.88015399999999744, 20.0265650000000015 63.88015399999999744, 20.02656599999999898 63.88015299999999996, 20.02656800000000104 63.88015299999999996, 20.02656899999999851 63.88015299999999996, 20.02656800000000104 63.88015399999999744))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 308,
   "iri": "http://www.github.com/sparqlunicorn#ba37ba09-e4e5-4785-886e-bf6e84dbfb8a_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ba37ba09-e4e5-4785-886e-bf6e84dbfb8a_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02484499999999912 63.87907599999999775, 20.02484000000000108 63.87905299999999897, 20.02489399999999975 63.87905299999999897, 20.02491600000000105 63.87906000000000262, 20.02491799999999955 63.87906999999999869, 20.02487599999999901 63.87906600000000168, 20.02486400000000089 63.87905800000000056, 20.02486400000000089 63.87905800000000056, 20.02484499999999912 63.87907599999999775))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 309,
   "iri": "http://www.github.com/sparqlunicorn#ba7170d7-475e-4502-9cbd-054d5d326a7d_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ba7170d7-475e-4502-9cbd-054d5d326a7d_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02638299999999916 63.88011600000000101, 20.02638200000000168 63.88011699999999848, 20.02638200000000168 63.88011800000000306, 20.02638100000000065 63.88011800000000306, 20.0263789999999986 63.88011800000000306, 20.02637700000000009 63.88011699999999848, 20.02637700000000009 63.88011600000000101, 20.02637700000000009 63.88011500000000353, 20.02637700000000009 63.88011500000000353, 20.02637800000000112 63.88011399999999895, 20.02638100000000065 63.88011399999999895, 20.02638200000000168 63.88011500000000353, 20.02638299999999916 63.88011500000000353, 20.02638299999999916 63.88011600000000101))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 310,
   "iri": "http://www.github.com/sparqlunicorn#bb2e25bb-08ac-43b7-bdd0-c0fb04835eb8_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "bb2e25bb-08ac-43b7-bdd0-c0fb04835eb8_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02642799999999923 63.88020099999999957, 20.02642600000000073 63.88020099999999957, 20.02642399999999867 63.88020099999999957, 20.0264230000000012 63.88020099999999957, 20.02642099999999914 63.88020000000000209, 20.02642000000000166 63.88020000000000209, 20.02641900000000064 63.88019899999999751, 20.02641900000000064 63.88019800000000004, 20.02642099999999914 63.88019800000000004, 20.02642200000000017 63.88019700000000256, 20.02642399999999867 63.88019700000000256, 20.02642600000000073 63.88019700000000256, 20.02642700000000175 63.88019800000000004, 20.02642900000000026 63.88019800000000004, 20.02643099999999876 63.88019899999999751, 20.02643199999999979 63.88019899999999751, 20.02642799999999923 63.88020099999999957))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 311,
   "iri": "http://www.github.com/sparqlunicorn#bd4e5cb6-b4bc-4d65-921d-21dec34dda1b_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "bd4e5cb6-b4bc-4d65-921d-21dec34dda1b_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0265410000000017 63.88022500000000292, 20.02653899999999965 63.8802260000000004, 20.02653799999999862 63.88022500000000292, 20.02653600000000012 63.88022399999999834, 20.02653600000000012 63.88022399999999834, 20.02653600000000012 63.88022300000000087, 20.02653700000000114 63.88022200000000339, 20.02653899999999965 63.88022200000000339, 20.0265410000000017 63.88022200000000339, 20.02654199999999918 63.88022300000000087, 20.02654199999999918 63.88022300000000087, 20.0265410000000017 63.88022500000000292))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 312,
   "iri": "http://www.github.com/sparqlunicorn#c08f3cf1-e573-4914-b15f-b249261d9fab_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c08f3cf1-e573-4914-b15f-b249261d9fab_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02640200000000092 63.88013200000000325, 20.02639999999999887 63.88013200000000325, 20.02639800000000037 63.88013200000000325, 20.02639699999999934 63.88013099999999866, 20.02639699999999934 63.88013099999999866, 20.02639800000000037 63.88013000000000119, 20.02639999999999887 63.88013000000000119, 20.0264009999999999 63.88013000000000119, 20.0264029999999984 63.88013000000000119, 20.02640399999999943 63.88013099999999866, 20.02640200000000092 63.88013200000000325))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 313,
   "iri": "http://www.github.com/sparqlunicorn#c2174141-51b4-4932-b3b3-4526eb6245d5_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c2174141-51b4-4932-b3b3-4526eb6245d5_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02643399999999829 63.88015699999999697, 20.02643199999999979 63.88015800000000155, 20.02643099999999876 63.88015800000000155, 20.02643000000000129 63.88015800000000155, 20.02642900000000026 63.88015699999999697, 20.02642900000000026 63.88015500000000202, 20.02642900000000026 63.88015500000000202, 20.02643099999999876 63.88015399999999744, 20.02643300000000082 63.88015399999999744, 20.02643399999999829 63.88015500000000202, 20.02643499999999932 63.88015500000000202, 20.02643399999999829 63.88015699999999697))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 314,
   "iri": "http://www.github.com/sparqlunicorn#c2efc23f-47bb-47cc-9786-739739a84f3b_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c2efc23f-47bb-47cc-9786-739739a84f3b_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02639399999999981 63.88020300000000162, 20.02639399999999981 63.8802039999999991, 20.0263920000000013 63.8802039999999991, 20.02638999999999925 63.8802039999999991, 20.02638999999999925 63.88020300000000162, 20.02638999999999925 63.88020199999999704, 20.02639100000000028 63.88020199999999704, 20.02639299999999878 63.88020099999999957, 20.02639399999999981 63.88020099999999957, 20.02639399999999981 63.88020300000000162))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 315,
   "iri": "http://www.github.com/sparqlunicorn#c3bb016c-19bf-454f-8530-ffe68ec1da1a_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c3bb016c-19bf-454f-8530-ffe68ec1da1a_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02643899999999988 63.88013600000000025, 20.02643600000000035 63.88013500000000278, 20.02643399999999829 63.88013500000000278, 20.02643300000000082 63.8801339999999982, 20.02643199999999979 63.88013300000000072, 20.02643399999999829 63.88013200000000325, 20.02643499999999932 63.88013200000000325, 20.02643700000000138 63.88013200000000325, 20.02643899999999988 63.88013300000000072, 20.02644000000000091 63.88013300000000072, 20.02644000000000091 63.8801339999999982, 20.02643899999999988 63.88013600000000025))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 316,
   "iri": "http://www.github.com/sparqlunicorn#c5f35a70-8ad6-4cd8-8b0d-519a9ce95b94_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c5f35a70-8ad6-4cd8-8b0d-519a9ce95b94_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0261710000000015 63.88009799999999672, 20.02604200000000034 63.88006399999999729, 20.02609899999999854 63.88002600000000086, 20.02621099999999998 63.87995899999999949, 20.02633499999999955 63.879883999999997, 20.02637700000000009 63.87986099999999823, 20.02641799999999961 63.87987799999999794, 20.02639100000000028 63.87989100000000064, 20.02609999999999957 63.88006099999999776, 20.02614799999999917 63.88007400000000047, 20.02618899999999869 63.88008599999999859, 20.0261710000000015 63.88009799999999672))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 317,
   "iri": "http://www.github.com/sparqlunicorn#c62d6ed4-30ab-402b-ba2e-c432aaa0d53b_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c62d6ed4-30ab-402b-ba2e-c432aaa0d53b_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02658100000000019 63.88014499999999884, 20.02657800000000066 63.88014499999999884, 20.0265759999999986 63.88014499999999884, 20.02657500000000113 63.88014400000000137, 20.0265759999999986 63.88014299999999679, 20.02657699999999963 63.88014100000000184, 20.02657800000000066 63.88013999999999726, 20.02658100000000019 63.88013999999999726, 20.02658299999999869 63.88014100000000184, 20.02658500000000075 63.88014199999999931, 20.02658800000000028 63.88014199999999931, 20.02658999999999878 63.88014299999999679, 20.02658900000000131 63.88014400000000137, 20.02658699999999925 63.88014499999999884, 20.02658500000000075 63.88014499999999884, 20.02658100000000019 63.88014499999999884))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 318,
   "iri": "http://www.github.com/sparqlunicorn#c7c46dd9-6977-4662-86fa-7bd465591b65_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "c7c46dd9-6977-4662-86fa-7bd465591b65_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02655499999999833 63.88020300000000162, 20.02655700000000039 63.88020199999999704, 20.02655999999999992 63.88020099999999957, 20.02656100000000094 63.88020099999999957, 20.02656100000000094 63.88020000000000209, 20.02655899999999889 63.88020000000000209, 20.02655800000000141 63.88019899999999751, 20.02655700000000039 63.88019800000000004, 20.02655599999999936 63.88019700000000256, 20.02655499999999833 63.88019700000000256, 20.02655299999999983 63.88019599999999798, 20.02655100000000132 63.88019599999999798, 20.02654899999999927 63.88019599999999798, 20.0265500000000003 63.88019700000000256, 20.0265500000000003 63.88019800000000004, 20.0265500000000003 63.88019899999999751, 20.02654899999999927 63.88020000000000209, 20.02654799999999824 63.88020000000000209, 20.02654599999999974 63.88020099999999957, 20.02654599999999974 63.88020199999999704, 20.02654700000000076 63.88020300000000162, 20.02654899999999927 63.88020300000000162, 20.0265500000000003 63.8802039999999991, 20.0265519999999988 63.8802039999999991, 20.02655299999999983 63.88020300000000162, 20.02655499999999833 63.8802039999999991, 20.02655499999999833 63.88020300000000162))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 319,
   "iri": "http://www.github.com/sparqlunicorn#cbe5d6de-a929-4641-9d9b-9b9b2498eeb3_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cbe5d6de-a929-4641-9d9b-9b9b2498eeb3_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02641600000000111 63.88016199999999856, 20.02641399999999905 63.88016199999999856, 20.02641200000000055 63.88016199999999856, 20.02641099999999952 63.88016199999999856, 20.02641099999999952 63.88016300000000314, 20.02641200000000055 63.88016300000000314, 20.02641300000000157 63.88016400000000061, 20.02641399999999905 63.88016400000000061, 20.02641600000000111 63.88016400000000061, 20.02641699999999858 63.88016400000000061, 20.02641799999999961 63.88016300000000314, 20.02641600000000111 63.88016199999999856))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 320,
   "iri": "http://www.github.com/sparqlunicorn#cc01dfc5-6d56-472f-9045-d22f22b2ca3a_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cc01dfc5-6d56-472f-9045-d22f22b2ca3a_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02643300000000082 63.88016600000000267, 20.02643399999999829 63.88016700000000014, 20.02643300000000082 63.88016700000000014, 20.02643199999999979 63.88016799999999762, 20.02643300000000082 63.8801690000000022, 20.02643199999999979 63.88016999999999967, 20.02643000000000129 63.88016999999999967, 20.02642799999999923 63.8801690000000022, 20.02642700000000175 63.8801690000000022, 20.0264249999999997 63.8801690000000022, 20.0264230000000012 63.8801690000000022, 20.02642099999999914 63.8801690000000022, 20.02642000000000166 63.88016799999999762, 20.02641900000000064 63.88016799999999762, 20.02641900000000064 63.88016700000000014, 20.02641900000000064 63.88016600000000267, 20.02641900000000064 63.88016499999999809, 20.02641799999999961 63.88016600000000267, 20.02641600000000111 63.88016700000000014, 20.02641500000000008 63.88016700000000014, 20.02641399999999905 63.88016799999999762, 20.02641300000000157 63.88016700000000014, 20.02641399999999905 63.88016600000000267, 20.02641399999999905 63.88016600000000267, 20.02641300000000157 63.88016499999999809, 20.02641200000000055 63.88016400000000061, 20.02641399999999905 63.88016400000000061, 20.02641600000000111 63.88016400000000061, 20.02641699999999858 63.88016400000000061, 20.02641799999999961 63.88016300000000314, 20.02641699999999858 63.88016199999999856, 20.02641699999999858 63.88016100000000108, 20.02641600000000111 63.88016100000000108, 20.02641399999999905 63.8801599999999965, 20.02641300000000157 63.8801599999999965, 20.02641500000000008 63.88015899999999903, 20.02641699999999858 63.8801599999999965, 20.02641799999999961 63.8801599999999965, 20.02642000000000166 63.8801599999999965, 20.02642099999999914 63.88015899999999903, 20.02642099999999914 63.88015899999999903, 20.02642099999999914 63.88015800000000155, 20.02642099999999914 63.88015699999999697, 20.02642200000000017 63.88015699999999697, 20.02642200000000017 63.88015500000000202, 20.0264230000000012 63.88015500000000202, 20.0264230000000012 63.88015599999999949, 20.0264230000000012 63.88015599999999949, 20.0264230000000012 63.88015699999999697, 20.0264230000000012 63.88015800000000155, 20.02642399999999867 63.88015899999999903, 20.02642399999999867 63.8801599999999965, 20.0264249999999997 63.88016100000000108, 20.02642700000000175 63.88016100000000108, 20.02642799999999923 63.88016100000000108, 20.02643000000000129 63.88016100000000108, 20.02643199999999979 63.88016199999999856, 20.02643300000000082 63.88016199999999856, 20.02643499999999932 63.88016199999999856, 20.02643600000000035 63.88016300000000314, 20.02643700000000138 63.88016400000000061, 20.02643700000000138 63.88016400000000061, 20.02643600000000035 63.88016499999999809, 20.02643499999999932 63.88016600000000267, 20.02643300000000082 63.88016600000000267))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 321,
   "iri": "http://www.github.com/sparqlunicorn#cc774e18-df41-45a3-976b-bbbbc25ecff1_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cc774e18-df41-45a3-976b-bbbbc25ecff1_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02641200000000055 63.88017500000000126, 20.02640999999999849 63.88017500000000126, 20.02640900000000101 63.88017399999999668, 20.02640799999999999 63.88017399999999668, 20.02640699999999896 63.88017299999999921, 20.02640699999999896 63.88017200000000173, 20.02640900000000101 63.88017099999999715, 20.02640999999999849 63.88017099999999715, 20.02641200000000055 63.88017200000000173, 20.02641300000000157 63.88017299999999921, 20.02641300000000157 63.88017299999999921, 20.02641200000000055 63.88017500000000126))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 322,
   "iri": "http://www.github.com/sparqlunicorn#cdab6a0b-7238-4f14-894e-b5fe7bb763d9_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cdab6a0b-7238-4f14-894e-b5fe7bb763d9_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02651600000000087 63.88015899999999903, 20.02651600000000087 63.8801599999999965, 20.02651600000000087 63.8801599999999965, 20.02651499999999984 63.88016100000000108, 20.02651300000000134 63.88016100000000108, 20.02651099999999929 63.88016100000000108, 20.02650900000000078 63.88016100000000108, 20.02650699999999873 63.88016199999999856, 20.02650500000000022 63.88016199999999856, 20.02650500000000022 63.88016300000000314, 20.02650500000000022 63.88016400000000061, 20.02650600000000125 63.88016499999999809, 20.02650500000000022 63.88016499999999809, 20.02650500000000022 63.88016600000000267, 20.02650300000000172 63.88016700000000014, 20.02650099999999966 63.88016700000000014, 20.02649999999999864 63.88016700000000014, 20.02649800000000013 63.88016700000000014, 20.02649600000000163 63.88016700000000014, 20.02649399999999957 63.88016700000000014, 20.02649200000000107 63.88016700000000014, 20.02649100000000004 63.88016799999999762, 20.02648900000000154 63.88016799999999762, 20.02648800000000051 63.8801690000000022, 20.02648599999999846 63.8801690000000022, 20.02648399999999995 63.8801690000000022, 20.02648200000000145 63.8801690000000022, 20.02647999999999939 63.88016799999999762, 20.02647899999999836 63.88016700000000014, 20.02647800000000089 63.88016700000000014, 20.02647800000000089 63.88016600000000267, 20.02647800000000089 63.88016499999999809, 20.02647800000000089 63.88016400000000061, 20.02647699999999986 63.88016300000000314, 20.02647699999999986 63.88016199999999856, 20.02647699999999986 63.88016100000000108, 20.02647800000000089 63.8801599999999965, 20.02647899999999836 63.8801599999999965, 20.02647999999999939 63.88015899999999903, 20.02647999999999939 63.88015800000000155, 20.02648100000000042 63.88015699999999697, 20.02648100000000042 63.88015599999999949, 20.02648100000000042 63.88015599999999949, 20.02647999999999939 63.88015500000000202, 20.02647899999999836 63.88015399999999744, 20.02647999999999939 63.88015299999999996, 20.02648200000000145 63.88015299999999996, 20.02648500000000098 63.88015399999999744, 20.02648599999999846 63.88015399999999744, 20.02648800000000051 63.88015399999999744, 20.02648999999999901 63.88015500000000202, 20.02649200000000107 63.88015500000000202, 20.02649399999999957 63.88015500000000202, 20.02649600000000163 63.88015399999999744, 20.02649900000000116 63.88015399999999744, 20.02650200000000069 63.88015399999999744, 20.02650399999999919 63.88015399999999744, 20.02650500000000022 63.88015399999999744, 20.02650699999999873 63.88015500000000202, 20.02650799999999975 63.88015500000000202, 20.02650999999999826 63.88015500000000202, 20.02651600000000087 63.88015899999999903))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 323,
   "iri": "http://www.github.com/sparqlunicorn#ce36306d-ab71-49f0-aed2-6cea0b2cf1d7_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ce36306d-ab71-49f0-aed2-6cea0b2cf1d7_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02656899999999851 63.88016300000000314, 20.02656999999999954 63.88016400000000061, 20.02656899999999851 63.88016499999999809, 20.02656700000000001 63.88016499999999809, 20.02656599999999898 63.88016300000000314, 20.02656599999999898 63.88016199999999856, 20.02656599999999898 63.88016199999999856, 20.02656800000000104 63.88016100000000108, 20.02656899999999851 63.88016199999999856, 20.02656899999999851 63.88016300000000314))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 324,
   "iri": "http://www.github.com/sparqlunicorn#cfd8197a-ab1b-41e3-9c44-30bb2d1827ac_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "cfd8197a-ab1b-41e3-9c44-30bb2d1827ac_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02651300000000134 63.8802170000000018, 20.02651200000000031 63.8802170000000018, 20.02651099999999929 63.88021799999999928, 20.02650900000000078 63.88021799999999928, 20.02650699999999873 63.8802170000000018, 20.02650600000000125 63.8802170000000018, 20.02650399999999919 63.88021599999999722, 20.02650399999999919 63.88021499999999975, 20.02650300000000172 63.88021400000000227, 20.02650399999999919 63.88021400000000227, 20.02650600000000125 63.88021299999999769, 20.02650699999999873 63.88021299999999769, 20.02650900000000078 63.88021400000000227, 20.02651200000000031 63.88021400000000227, 20.02651300000000134 63.88021499999999975, 20.02651300000000134 63.8802170000000018))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 325,
   "iri": "http://www.github.com/sparqlunicorn#d04e1b9c-9c7e-4e90-86a1-9c1e367de3e4_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d04e1b9c-9c7e-4e90-86a1-9c1e367de3e4_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02652600000000049 63.88014900000000296, 20.02652600000000049 63.88015000000000043, 20.02652499999999947 63.88015000000000043, 20.02652300000000096 63.88015000000000043, 20.02652199999999993 63.88014900000000296, 20.02652099999999891 63.88014799999999838, 20.02652199999999993 63.8801470000000009, 20.02652399999999844 63.8801470000000009, 20.02652600000000049 63.8801470000000009, 20.02652700000000152 63.88014799999999838, 20.02652600000000049 63.88014900000000296))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 326,
   "iri": "http://www.github.com/sparqlunicorn#d1248c32-d156-418a-a10f-104d770ca6fd_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d1248c32-d156-418a-a10f-104d770ca6fd_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02653600000000012 63.88017200000000173, 20.02653700000000114 63.88017200000000173, 20.02653899999999965 63.88017099999999715, 20.02654000000000067 63.88017099999999715, 20.0265410000000017 63.88017200000000173, 20.0265410000000017 63.88017200000000173, 20.02655499999999833 63.88017099999999715, 20.02655400000000085 63.88017099999999715, 20.02655400000000085 63.88016999999999967, 20.02655299999999983 63.88016999999999967, 20.02655299999999983 63.8801690000000022, 20.02655299999999983 63.88016799999999762, 20.02655400000000085 63.88016799999999762, 20.02655599999999936 63.88016700000000014, 20.02655700000000039 63.88016799999999762, 20.02655800000000141 63.8801690000000022, 20.02655899999999889 63.88016999999999967, 20.02655899999999889 63.88016999999999967, 20.02655800000000141 63.88017099999999715, 20.02657999999999916 63.88016999999999967, 20.02658100000000019 63.8801690000000022, 20.02658200000000122 63.88016799999999762, 20.02658299999999869 63.88016799999999762, 20.02658399999999972 63.88016700000000014, 20.02658500000000075 63.88016600000000267, 20.02658500000000075 63.88016499999999809, 20.02658500000000075 63.88016400000000061, 20.02658600000000177 63.88016400000000061, 20.02658699999999925 63.88016300000000314, 20.02658900000000131 63.88016300000000314, 20.02659099999999981 63.88016199999999856, 20.02659200000000084 63.88016199999999856, 20.02659399999999934 63.88016199999999856, 20.0265960000000014 63.88016199999999856, 20.0265979999999999 63.88016199999999856, 20.02659900000000093 63.88016199999999856, 20.02660099999999943 63.88016199999999856, 20.02660200000000046 63.88016300000000314, 20.02660399999999896 63.88016300000000314, 20.02660499999999999 63.88016400000000061, 20.02660699999999849 63.88016400000000061, 20.02660799999999952 63.88016499999999809, 20.02660900000000055 63.88016600000000267, 20.02660699999999849 63.88016700000000014, 20.02660699999999849 63.88016799999999762, 20.02660600000000102 63.88016799999999762, 20.02660600000000102 63.8801690000000022, 20.02661499999999961 63.8801690000000022, 20.02664800000000156 63.88016600000000267, 20.02665299999999959 63.88015500000000202, 20.026644000000001 63.88015599999999949, 20.02664199999999894 63.88015699999999697, 20.02664100000000147 63.88015699999999697, 20.02663899999999941 63.88015800000000155, 20.02663700000000091 63.88015800000000155, 20.02663599999999988 63.88015800000000155, 20.02663499999999885 63.88015699999999697, 20.02661399999999858 63.88015899999999903, 20.02658399999999972 63.88016100000000108, 20.02656899999999851 63.88016199999999856, 20.02656899999999851 63.88016199999999856, 20.02656899999999851 63.88016300000000314, 20.02656999999999954 63.88016400000000061, 20.02656899999999851 63.88016499999999809, 20.02656700000000001 63.88016499999999809, 20.02656599999999898 63.88016300000000314, 20.02656599999999898 63.88016199999999856, 20.02656599999999898 63.88016199999999856, 20.02656100000000094 63.88016199999999856, 20.02656100000000094 63.88016300000000314, 20.02655899999999889 63.88016300000000314, 20.02655800000000141 63.88016199999999856, 20.0265410000000017 63.88016300000000314, 20.02651499999999984 63.88015800000000155, 20.02651600000000087 63.88015899999999903, 20.02651600000000087 63.8801599999999965, 20.02651600000000087 63.8801599999999965, 20.02651499999999984 63.88016100000000108, 20.02651300000000134 63.88016100000000108, 20.02651099999999929 63.88016100000000108, 20.02650900000000078 63.88016100000000108, 20.02650699999999873 63.88016199999999856, 20.02650500000000022 63.88016199999999856, 20.02650500000000022 63.88016300000000314, 20.02650500000000022 63.88016400000000061, 20.02650600000000125 63.88016499999999809, 20.02650500000000022 63.88016499999999809, 20.02650500000000022 63.88016499999999809, 20.02653600000000012 63.88017200000000173),(20.02663000000000082 63.88015899999999903, 20.02663199999999932 63.88015899999999903, 20.02663300000000035 63.88015899999999903, 20.02663099999999829 63.88016100000000108, 20.02662899999999979 63.88016100000000108, 20.02662700000000129 63.8801599999999965, 20.02662600000000026 63.8801599999999965, 20.02662600000000026 63.88015899999999903, 20.02662700000000129 63.88015800000000155, 20.02662799999999876 63.88015800000000155, 20.02663000000000082 63.88015899999999903),(20.02662400000000176 63.88016300000000314, 20.02662499999999923 63.88016300000000314, 20.02662600000000026 63.88016400000000061, 20.02662499999999923 63.88016600000000267, 20.02662300000000073 63.88016600000000267, 20.0266219999999997 63.88016600000000267, 20.0266200000000012 63.88016499999999809, 20.02661900000000017 63.88016499999999809, 20.02661799999999914 63.88016400000000061, 20.02661700000000167 63.88016400000000061, 20.02661799999999914 63.88016300000000314, 20.0266200000000012 63.88016300000000314, 20.0266219999999997 63.88016300000000314, 20.02662400000000176 63.88016300000000314),(20.02657200000000159 63.88016600000000267, 20.0265740000000001 63.88016600000000267, 20.02657500000000113 63.88016600000000267, 20.0265759999999986 63.88016700000000014, 20.02657299999999907 63.88016799999999762, 20.02657100000000057 63.88016799999999762, 20.02656899999999851 63.88016799999999762, 20.02656800000000104 63.88016700000000014, 20.02656800000000104 63.88016600000000267, 20.02656899999999851 63.88016600000000267, 20.02657100000000057 63.88016600000000267, 20.02657200000000159 63.88016600000000267))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 327,
   "iri": "http://www.github.com/sparqlunicorn#d2e36d44-1ea1-4205-8920-c97cdab3b3aa_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d2e36d44-1ea1-4205-8920-c97cdab3b3aa_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02660600000000102 63.88018900000000144, 20.02660499999999999 63.88018999999999892, 20.02660399999999896 63.8801910000000035, 20.02660200000000046 63.8801910000000035, 20.0265999999999984 63.8801910000000035, 20.0265979999999999 63.8801910000000035, 20.02659699999999887 63.88018999999999892, 20.0265960000000014 63.88018999999999892, 20.02659500000000037 63.88018900000000144, 20.02659500000000037 63.88018799999999686, 20.02659500000000037 63.88018699999999939, 20.0265960000000014 63.88018699999999939, 20.02659699999999887 63.88018600000000191, 20.0265979999999999 63.88018499999999733, 20.02659900000000093 63.88018499999999733, 20.02660099999999943 63.88018499999999733, 20.02660300000000149 63.88018499999999733, 20.02660499999999999 63.88018499999999733, 20.02660499999999999 63.88018600000000191, 20.02660600000000102 63.88018699999999939, 20.02660600000000102 63.88018699999999939, 20.02660600000000102 63.88018900000000144))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 328,
   "iri": "http://www.github.com/sparqlunicorn#d39b0a02-169d-40a8-897d-7c7a5eee497d_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d39b0a02-169d-40a8-897d-7c7a5eee497d_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02663099999999829 63.88016100000000108, 20.02662899999999979 63.88016100000000108, 20.02662700000000129 63.8801599999999965, 20.02662600000000026 63.8801599999999965, 20.02662600000000026 63.88015899999999903, 20.02662700000000129 63.88015800000000155, 20.02662799999999876 63.88015800000000155, 20.02663000000000082 63.88015899999999903, 20.02663199999999932 63.88015899999999903, 20.02663300000000035 63.88015899999999903, 20.02663099999999829 63.88016100000000108))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 329,
   "iri": "http://www.github.com/sparqlunicorn#d46e1360-2fe2-43a6-80fc-892d3d2881c1_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d46e1360-2fe2-43a6-80fc-892d3d2881c1_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02670499999999976 63.88012400000000213, 20.02670300000000125 63.88012299999999755, 20.02670399999999873 63.88012200000000007, 20.02670399999999873 63.8801210000000026, 20.02670300000000125 63.88011999999999802, 20.02670499999999976 63.88011999999999802, 20.02670699999999826 63.88011999999999802, 20.02670900000000032 63.8801210000000026, 20.02671000000000134 63.88012200000000007, 20.02671000000000134 63.88012299999999755, 20.02670799999999929 63.88012299999999755, 20.02670499999999976 63.88012400000000213))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 330,
   "iri": "http://www.github.com/sparqlunicorn#d5710f70-63c7-4107-ac87-3fad0dca5830_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "d5710f70-63c7-4107-ac87-3fad0dca5830_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02671199999999985 63.88012899999999661, 20.02671000000000134 63.88012899999999661, 20.02670799999999929 63.88012799999999913, 20.02670799999999929 63.88012700000000166, 20.02671000000000134 63.88012599999999708, 20.02671199999999985 63.88012599999999708, 20.02671499999999938 63.88012599999999708, 20.02671600000000041 63.88012700000000166, 20.02671499999999938 63.88012799999999913, 20.02671199999999985 63.88012899999999661))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 331,
   "iri": "http://www.github.com/sparqlunicorn#dc5ba2e0-7975-466e-930f-a5469030df40_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "dc5ba2e0-7975-466e-930f-a5469030df40_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02668999999999855 63.8801119999999969, 20.02668800000000005 63.8801119999999969, 20.02668699999999902 63.88011099999999942, 20.02668699999999902 63.88011000000000195, 20.02668900000000107 63.88010899999999737, 20.02669099999999958 63.88011000000000195, 20.0266920000000006 63.88011000000000195, 20.02669300000000163 63.88011099999999942, 20.02668999999999855 63.8801119999999969))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 332,
   "iri": "http://www.github.com/sparqlunicorn#dca0e312-48bb-4ff0-9316-fa71cdda0c9c_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "dca0e312-48bb-4ff0-9316-fa71cdda0c9c_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02667100000000033 63.88011800000000306, 20.02666899999999828 63.88011699999999848, 20.0266680000000008 63.88011600000000101, 20.02666899999999828 63.88011500000000353, 20.02667100000000033 63.88011399999999895, 20.02667299999999884 63.88011500000000353, 20.02667500000000089 63.88011500000000353, 20.02667599999999837 63.88011600000000101, 20.02667500000000089 63.88011699999999848, 20.02667299999999884 63.88011800000000306, 20.02667100000000033 63.88011800000000306))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 333,
   "iri": "http://www.github.com/sparqlunicorn#ddc25136-83aa-463c-9460-c718847292e0_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ddc25136-83aa-463c-9460-c718847292e0_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02669699999999864 63.88011699999999848, 20.02669500000000014 63.88011699999999848, 20.02669300000000163 63.88011699999999848, 20.02669300000000163 63.88011600000000101, 20.0266920000000006 63.88011500000000353, 20.02669399999999911 63.88011399999999895, 20.02669600000000116 63.88011399999999895, 20.02669799999999967 63.88011500000000353, 20.02669699999999864 63.88011699999999848))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 334,
   "iri": "http://www.github.com/sparqlunicorn#de109b58-0791-4eb7-9fff-d536f15297af_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "de109b58-0791-4eb7-9fff-d536f15297af_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02636899999999898 63.88018900000000144, 20.02637 63.88018999999999892, 20.02637100000000103 63.8801910000000035, 20.02637400000000056 63.8801910000000035, 20.02637400000000056 63.88019200000000097, 20.02637299999999954 63.88019299999999845, 20.02637100000000103 63.88019299999999845, 20.02637 63.88019299999999845, 20.02636700000000047 63.88019400000000303, 20.02636499999999842 63.88019400000000303, 20.02636400000000094 63.8801950000000005, 20.02636199999999889 63.8801950000000005, 20.02636100000000141 63.88019599999999798, 20.02636299999999991 63.88019599999999798, 20.02636499999999842 63.88019599999999798, 20.02636700000000047 63.8801950000000005, 20.0263680000000015 63.8801950000000005, 20.02637 63.8801950000000005, 20.02637299999999954 63.88019400000000303, 20.02637500000000159 63.88019400000000303, 20.02637800000000112 63.88019299999999845, 20.0263789999999986 63.88019400000000303, 20.02638100000000065 63.88019400000000303, 20.02638200000000168 63.8801950000000005, 20.02638299999999916 63.8801950000000005, 20.02638500000000121 63.88019599999999798, 20.02638699999999972 63.88019700000000256, 20.02638800000000074 63.88019599999999798, 20.02638800000000074 63.8801950000000005, 20.02638900000000177 63.88019400000000303, 20.02639100000000028 63.8801950000000005, 20.0263920000000013 63.8801950000000005, 20.02639299999999878 63.88019400000000303, 20.02639299999999878 63.88019299999999845, 20.0263920000000013 63.88019200000000097, 20.02639100000000028 63.88019200000000097, 20.02638900000000177 63.8801910000000035, 20.02638800000000074 63.8801910000000035, 20.02638699999999972 63.88018999999999892, 20.02638800000000074 63.88018900000000144, 20.02638900000000177 63.88018799999999686, 20.02638900000000177 63.88018699999999939, 20.02638800000000074 63.88018600000000191, 20.02638699999999972 63.88018699999999939, 20.02638599999999869 63.88018799999999686, 20.02638400000000019 63.88018799999999686, 20.02638200000000168 63.88018699999999939, 20.02638100000000065 63.88018699999999939, 20.0263789999999986 63.88018600000000191, 20.02637700000000009 63.88018600000000191, 20.02637500000000159 63.88018499999999733, 20.02637400000000056 63.88018499999999733, 20.02637199999999851 63.88018600000000191, 20.02637299999999954 63.88018699999999939, 20.02637400000000056 63.88018799999999686, 20.02637199999999851 63.88018799999999686, 20.02637 63.88018799999999686, 20.02636899999999898 63.88018799999999686, 20.02636899999999898 63.88018900000000144))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 335,
   "iri": "http://www.github.com/sparqlunicorn#e1a4e1ed-5021-4210-80a0-248b4c59ba2b_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e1a4e1ed-5021-4210-80a0-248b4c59ba2b_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02667599999999837 63.88012200000000007, 20.02667500000000089 63.8801210000000026, 20.0266769999999994 63.88011999999999802, 20.02667900000000145 63.88011999999999802, 20.02668099999999995 63.8801210000000026, 20.02667599999999837 63.88012200000000007))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 336,
   "iri": "http://www.github.com/sparqlunicorn#e2bb5213-40ec-467b-ab58-dfd191d67b15_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e2bb5213-40ec-467b-ab58-dfd191d67b15_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02635400000000132 63.88019299999999845, 20.02635300000000029 63.88019299999999845, 20.02635099999999824 63.88019299999999845, 20.02635000000000076 63.88019200000000097, 20.02634799999999871 63.88019200000000097, 20.02634700000000123 63.8801910000000035, 20.02634700000000123 63.8801910000000035, 20.02635000000000076 63.88018999999999892, 20.02635300000000029 63.88018999999999892, 20.02635400000000132 63.8801910000000035, 20.02635599999999982 63.8801910000000035, 20.02635700000000085 63.88019200000000097, 20.02635799999999833 63.88019200000000097, 20.02635799999999833 63.88019299999999845, 20.02635400000000132 63.88019299999999845))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 337,
   "iri": "http://www.github.com/sparqlunicorn#e46dfffe-e0b5-4b6b-8545-7f7133231fcd_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e46dfffe-e0b5-4b6b-8545-7f7133231fcd_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02662499999999923 63.88016600000000267, 20.02662300000000073 63.88016600000000267, 20.0266219999999997 63.88016600000000267, 20.0266200000000012 63.88016499999999809, 20.02661900000000017 63.88016499999999809, 20.02661799999999914 63.88016400000000061, 20.02661700000000167 63.88016400000000061, 20.02661799999999914 63.88016300000000314, 20.0266200000000012 63.88016300000000314, 20.0266219999999997 63.88016300000000314, 20.02662400000000176 63.88016300000000314, 20.02662499999999923 63.88016300000000314, 20.02662600000000026 63.88016400000000061, 20.02662499999999923 63.88016600000000267))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 338,
   "iri": "http://www.github.com/sparqlunicorn#e4f0d99c-176b-4354-872f-84ea358ac1d1_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e4f0d99c-176b-4354-872f-84ea358ac1d1_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02652300000000096 63.88015599999999949, 20.02652099999999891 63.88015500000000202, 20.0265190000000004 63.88015500000000202, 20.02651799999999938 63.88015399999999744, 20.0265190000000004 63.88015399999999744, 20.02652099999999891 63.88015299999999996, 20.02652199999999993 63.88015299999999996, 20.02652399999999844 63.88015399999999744, 20.02652399999999844 63.88015399999999744, 20.02652399999999844 63.88015500000000202, 20.02652300000000096 63.88015599999999949))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 339,
   "iri": "http://www.github.com/sparqlunicorn#e537eb8d-e10d-4cfa-88d8-f7e4e74e5a66_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e537eb8d-e10d-4cfa-88d8-f7e4e74e5a66_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02636700000000047 63.88013000000000119, 20.02636599999999945 63.88013000000000119, 20.02636400000000094 63.88013099999999866, 20.02636199999999889 63.88013000000000119, 20.02636100000000141 63.88012899999999661, 20.02636199999999889 63.88012799999999913, 20.02636199999999889 63.88012799999999913, 20.02636400000000094 63.88012700000000166, 20.02636599999999945 63.88012700000000166, 20.02636700000000047 63.88012799999999913, 20.02636700000000047 63.88013000000000119))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 340,
   "iri": "http://www.github.com/sparqlunicorn#e6b91a0a-28db-4f3c-bbe7-3191b69ece51_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e6b91a0a-28db-4f3c-bbe7-3191b69ece51_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02641799999999961 63.88011800000000306, 20.02641699999999858 63.88011800000000306, 20.02641600000000111 63.88011800000000306, 20.02641500000000008 63.88011800000000306, 20.02641399999999905 63.88011699999999848, 20.02641399999999905 63.88011699999999848, 20.02641399999999905 63.88011699999999848, 20.02641500000000008 63.88011600000000101, 20.02641600000000111 63.88011600000000101, 20.02641699999999858 63.88011600000000101, 20.02641799999999961 63.88011699999999848, 20.02641799999999961 63.88011699999999848, 20.02641799999999961 63.88011800000000306))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 341,
   "iri": "http://www.github.com/sparqlunicorn#e80677e6-20b7-4e3b-85f3-26eabae3fe58_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e80677e6-20b7-4e3b-85f3-26eabae3fe58_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02640200000000092 63.88014799999999838, 20.02640399999999943 63.88014900000000296, 20.02640500000000046 63.88014900000000296, 20.02640500000000046 63.88015000000000043, 20.02640500000000046 63.88015099999999791, 20.0264029999999984 63.88015099999999791, 20.0264009999999999 63.88015099999999791, 20.02639900000000139 63.88015099999999791, 20.02639699999999934 63.88015099999999791, 20.02639500000000083 63.88015099999999791, 20.02639299999999878 63.88015000000000043, 20.02639100000000028 63.88015000000000043, 20.02638900000000177 63.88015000000000043, 20.02638699999999972 63.88015000000000043, 20.02638500000000121 63.88015099999999791, 20.02638400000000019 63.88015000000000043, 20.02638200000000168 63.88015000000000043, 20.02638100000000065 63.88015000000000043, 20.0263789999999986 63.88014900000000296, 20.02637700000000009 63.88014900000000296, 20.02637599999999907 63.88014900000000296, 20.02637400000000056 63.88014799999999838, 20.02637199999999851 63.88014799999999838, 20.02637100000000103 63.8801470000000009, 20.02636899999999898 63.8801470000000009, 20.02636899999999898 63.88014600000000343, 20.02636899999999898 63.88014499999999884, 20.02636899999999898 63.88014400000000137, 20.02637 63.88014299999999679, 20.02637100000000103 63.88014299999999679, 20.02637100000000103 63.88014199999999931, 20.02637199999999851 63.88014100000000184, 20.02637199999999851 63.88013999999999726, 20.02637299999999954 63.88013899999999978, 20.02637299999999954 63.88013800000000231, 20.02637400000000056 63.88013699999999773, 20.02637599999999907 63.88013699999999773, 20.02637700000000009 63.88013600000000025, 20.0263789999999986 63.88013600000000025, 20.02638100000000065 63.88013600000000025, 20.02638200000000168 63.88013600000000025, 20.02638400000000019 63.88013699999999773, 20.02638500000000121 63.88013699999999773, 20.02638699999999972 63.88013699999999773, 20.02638900000000177 63.88013699999999773, 20.02639100000000028 63.88013699999999773, 20.0263920000000013 63.88013800000000231, 20.02639399999999981 63.88013800000000231, 20.02639399999999981 63.88013899999999978, 20.02639299999999878 63.88013999999999726, 20.02639299999999878 63.88014100000000184, 20.0263920000000013 63.88014199999999931, 20.02639299999999878 63.88014299999999679, 20.02639399999999981 63.88014299999999679, 20.02639500000000083 63.88014400000000137, 20.02639599999999831 63.88014499999999884, 20.02639599999999831 63.88014499999999884, 20.02639500000000083 63.88014600000000343, 20.02639500000000083 63.8801470000000009, 20.02639599999999831 63.8801470000000009, 20.02639800000000037 63.88014799999999838, 20.02639900000000139 63.88014799999999838, 20.0264009999999999 63.88014900000000296, 20.02640200000000092 63.88014799999999838))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 342,
   "iri": "http://www.github.com/sparqlunicorn#e9b6f78c-acb3-44a8-a83d-5230ac8adfb8_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "e9b6f78c-acb3-44a8-a83d-5230ac8adfb8_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02668200000000098 63.88013200000000325, 20.02667999999999893 63.88013200000000325, 20.02667999999999893 63.88013099999999866, 20.02668200000000098 63.88013000000000119, 20.02668399999999949 63.88012899999999661, 20.02668600000000154 63.88013000000000119, 20.02668500000000051 63.88013099999999866, 20.02668399999999949 63.88013200000000325, 20.02668200000000098 63.88013200000000325))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 343,
   "iri": "http://www.github.com/sparqlunicorn#ea530a2d-219a-4b12-a8b4-4cf7ca09b6b1_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ea530a2d-219a-4b12-a8b4-4cf7ca09b6b1_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02647999999999939 63.8801910000000035, 20.02648200000000145 63.8801910000000035, 20.02648399999999995 63.8801910000000035, 20.02648500000000098 63.8801910000000035, 20.02648699999999948 63.88019200000000097, 20.02648699999999948 63.88019299999999845, 20.02648599999999846 63.88019299999999845, 20.02648299999999892 63.88019400000000303, 20.02647999999999939 63.88019400000000303, 20.02647800000000089 63.88019400000000303, 20.02647899999999836 63.8801950000000005, 20.02648200000000145 63.88019599999999798, 20.02648399999999995 63.88019599999999798, 20.02648500000000098 63.88019599999999798, 20.02648500000000098 63.88019700000000256, 20.02648599999999846 63.88019800000000004, 20.02648800000000051 63.88019800000000004, 20.02648900000000154 63.88019800000000004, 20.02649100000000004 63.88019800000000004, 20.02649299999999855 63.88019899999999751, 20.0264950000000006 63.88019800000000004, 20.02649600000000163 63.88019800000000004, 20.0264969999999991 63.88019800000000004, 20.02649800000000013 63.88019700000000256, 20.02649900000000116 63.88019599999999798, 20.02649900000000116 63.8801950000000005, 20.02649999999999864 63.8801950000000005, 20.02650200000000069 63.88019599999999798, 20.02650300000000172 63.88019599999999798, 20.02650500000000022 63.88019700000000256, 20.02650600000000125 63.88019700000000256, 20.02650799999999975 63.88019800000000004, 20.02650900000000078 63.88019800000000004, 20.02651099999999929 63.88019800000000004, 20.02651300000000134 63.88019800000000004, 20.02651399999999882 63.88019800000000004, 20.02651600000000087 63.88019800000000004, 20.02651699999999835 63.88019599999999798, 20.02651799999999938 63.88019599999999798, 20.02652000000000143 63.88019599999999798, 20.02652099999999891 63.88019599999999798, 20.02652199999999993 63.88019700000000256, 20.02652300000000096 63.88019800000000004, 20.02652399999999844 63.88019800000000004, 20.02652600000000049 63.88019800000000004, 20.02652600000000049 63.88019700000000256, 20.02652499999999947 63.88019599999999798, 20.02652300000000096 63.8801950000000005, 20.02652199999999993 63.8801950000000005, 20.02652099999999891 63.88019400000000303, 20.02652000000000143 63.88019299999999845, 20.02652199999999993 63.88019299999999845, 20.02652300000000096 63.88019200000000097, 20.02652199999999993 63.8801910000000035, 20.02652000000000143 63.8801910000000035, 20.02651799999999938 63.8801910000000035, 20.02651600000000087 63.88018999999999892, 20.02651499999999984 63.88018999999999892, 20.02651399999999882 63.88018900000000144, 20.02651200000000031 63.88018900000000144, 20.02650999999999826 63.88018900000000144, 20.02650900000000078 63.88018900000000144, 20.02650699999999873 63.88018900000000144, 20.02650500000000022 63.88018900000000144, 20.02650300000000172 63.88018900000000144, 20.02650200000000069 63.88018999999999892, 20.02649999999999864 63.8801910000000035, 20.02649900000000116 63.8801910000000035, 20.0264969999999991 63.88019200000000097, 20.0264950000000006 63.88019200000000097, 20.02649299999999855 63.88019200000000097, 20.02649200000000107 63.8801910000000035, 20.02648999999999901 63.8801910000000035, 20.02648800000000051 63.88018999999999892, 20.02648599999999846 63.88018999999999892, 20.02648500000000098 63.88018999999999892, 20.02648299999999892 63.88018999999999892, 20.02648100000000042 63.88018999999999892, 20.02647899999999836 63.88018999999999892, 20.02647999999999939 63.8801910000000035))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 344,
   "iri": "http://www.github.com/sparqlunicorn#ebd26bae-6b1e-419b-ab53-a52e011f6c81_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ebd26bae-6b1e-419b-ab53-a52e011f6c81_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02636599999999945 63.88018799999999686, 20.02636599999999945 63.88018900000000144, 20.02636700000000047 63.88018999999999892, 20.02636599999999945 63.88018999999999892, 20.02636499999999842 63.88018999999999892, 20.02636299999999991 63.88018999999999892, 20.02636299999999991 63.88018900000000144, 20.02636299999999991 63.88018799999999686, 20.02636499999999842 63.88018799999999686, 20.02636599999999945 63.88018799999999686))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 345,
   "iri": "http://www.github.com/sparqlunicorn#ec69643d-e636-443f-95a0-bb55b9614841_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "ec69643d-e636-443f-95a0-bb55b9614841_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02671300000000087 63.88012400000000213, 20.02671000000000134 63.88012400000000213, 20.02671000000000134 63.88012299999999755, 20.02671000000000134 63.88012200000000007, 20.02671099999999882 63.8801210000000026, 20.02671399999999835 63.8801210000000026, 20.02671600000000041 63.8801210000000026, 20.02671700000000143 63.88012200000000007, 20.02671600000000041 63.88012299999999755, 20.02671300000000087 63.88012400000000213))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 346,
   "iri": "http://www.github.com/sparqlunicorn#eec807e9-47d0-4801-a3f8-017c818a99e7_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "eec807e9-47d0-4801-a3f8-017c818a99e7_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02640600000000148 63.88013600000000025, 20.02640600000000148 63.88013699999999773, 20.02640500000000046 63.88013699999999773, 20.0264029999999984 63.88013699999999773, 20.02640200000000092 63.88013699999999773, 20.0264009999999999 63.88013600000000025, 20.02639999999999887 63.88013500000000278, 20.02639999999999887 63.88013500000000278, 20.02639999999999887 63.8801339999999982, 20.0264029999999984 63.88013300000000072, 20.02640500000000046 63.88013300000000072, 20.02640600000000148 63.8801339999999982, 20.02640699999999896 63.8801339999999982, 20.02640600000000148 63.88013600000000025))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 347,
   "iri": "http://www.github.com/sparqlunicorn#f148606b-a850-4d16-a627-606fb8ee5577_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "f148606b-a850-4d16-a627-606fb8ee5577_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.0265740000000001 63.88012200000000007, 20.02657100000000057 63.8801210000000026, 20.02656999999999954 63.88011999999999802, 20.02656899999999851 63.88011900000000054, 20.02656899999999851 63.88011800000000306, 20.02657100000000057 63.88011699999999848, 20.02657299999999907 63.88011699999999848, 20.0265759999999986 63.88011699999999848, 20.02657800000000066 63.88011800000000306, 20.02657900000000168 63.88011900000000054, 20.02657900000000168 63.88011999999999802, 20.02657699999999963 63.8801210000000026, 20.0265740000000001 63.88012200000000007))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 348,
   "iri": "http://www.github.com/sparqlunicorn#f4c616a4-3188-45f4-ad66-878498003c20_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "f4c616a4-3188-45f4-ad66-878498003c20_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02655800000000141 63.8801690000000022, 20.02655899999999889 63.88016999999999967, 20.02655899999999889 63.88016999999999967, 20.02655800000000141 63.88017099999999715, 20.02655599999999936 63.88017099999999715, 20.02655400000000085 63.88017099999999715, 20.02655400000000085 63.88016999999999967, 20.02655299999999983 63.88016999999999967, 20.02655299999999983 63.8801690000000022, 20.02655299999999983 63.88016799999999762, 20.02655400000000085 63.88016799999999762, 20.02655599999999936 63.88016700000000014, 20.02655700000000039 63.88016799999999762, 20.02655800000000141 63.8801690000000022))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 349,
   "iri": "http://www.github.com/sparqlunicorn#f533c183-22fb-43cf-9bd1-265caaa661a0_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "f533c183-22fb-43cf-9bd1-265caaa661a0_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02668600000000154 63.88010599999999783, 20.02668399999999949 63.88010599999999783, 20.02668600000000154 63.88010500000000036, 20.02668699999999902 63.88010599999999783, 20.02668600000000154 63.88010599999999783))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 350,
   "iri": "http://www.github.com/sparqlunicorn#fab26445-cb25-492a-8d8a-47f31706a753_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fab26445-cb25-492a-8d8a-47f31706a753_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02646000000000015 63.88014199999999931, 20.02646000000000015 63.88014100000000184, 20.02645899999999912 63.88013999999999726, 20.02646100000000118 63.88013999999999726, 20.02646299999999968 63.88013999999999726, 20.02646400000000071 63.88013899999999978, 20.02646199999999865 63.88013899999999978, 20.02646100000000118 63.88013800000000231, 20.02645899999999912 63.88013800000000231, 20.02645700000000062 63.88013699999999773, 20.02645700000000062 63.88013600000000025, 20.02645700000000062 63.88013500000000278, 20.02645599999999959 63.88013500000000278, 20.02645400000000109 63.88013500000000278, 20.02645300000000006 63.8801339999999982, 20.02645300000000006 63.88013300000000072, 20.02645100000000156 63.88013300000000072, 20.0264489999999995 63.88013300000000072, 20.026447000000001 63.8801339999999982, 20.026447000000001 63.88013500000000278, 20.02644599999999997 63.88013500000000278, 20.02644400000000147 63.88013600000000025, 20.02644199999999941 63.88013600000000025, 20.02644400000000147 63.88013699999999773, 20.02644499999999894 63.88013699999999773, 20.02644599999999997 63.88013800000000231, 20.02644599999999997 63.88013899999999978, 20.02644499999999894 63.88013999999999726, 20.02644300000000044 63.88013999999999726, 20.02644199999999941 63.88014100000000184, 20.02644000000000091 63.88014100000000184, 20.02643899999999988 63.88014100000000184, 20.02643700000000138 63.88014199999999931, 20.02643499999999932 63.88014199999999931, 20.02643600000000035 63.88014299999999679, 20.02643799999999885 63.88014299999999679, 20.02644000000000091 63.88014299999999679, 20.02644099999999838 63.88014299999999679, 20.02644099999999838 63.88014400000000137, 20.02644099999999838 63.88014499999999884, 20.02644300000000044 63.88014400000000137, 20.02644400000000147 63.88014400000000137, 20.02644599999999997 63.88014299999999679, 20.0264489999999995 63.88014299999999679, 20.02645000000000053 63.88014299999999679, 20.02645199999999903 63.88014400000000137, 20.02645300000000006 63.88014299999999679, 20.02645499999999856 63.88014299999999679, 20.02645700000000062 63.88014299999999679, 20.02645899999999912 63.88014299999999679, 20.02646000000000015 63.88014299999999679, 20.02646000000000015 63.88014199999999931))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 351,
   "iri": "http://www.github.com/sparqlunicorn#fd82485d-f6e8-4413-9120-c739f0cc1e82_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fd82485d-f6e8-4413-9120-c739f0cc1e82_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02509999999999835 63.87915900000000136, 20.02517100000000028 63.87916100000000341, 20.02516400000000019 63.87913400000000053, 20.02513099999999824 63.87911700000000081, 20.02510699999999844 63.87913100000000099, 20.02509600000000134 63.87913700000000006, 20.02509600000000134 63.87913799999999753, 20.02508500000000069 63.87914500000000118, 20.02508600000000172 63.87915300000000229, 20.02509999999999835 63.87915900000000136))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 352,
   "iri": "http://www.github.com/sparqlunicorn#fd8fe6ba-e13a-4ef3-9047-626fc45be9e2_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fd8fe6ba-e13a-4ef3-9047-626fc45be9e2_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02659099999999981 63.88012299999999755, 20.02658999999999878 63.88012200000000007, 20.02658900000000131 63.8801210000000026, 20.02658600000000177 63.8801210000000026, 20.02658200000000122 63.8801210000000026, 20.02658100000000019 63.88012200000000007, 20.02658200000000122 63.88012299999999755, 20.02658399999999972 63.88012400000000213, 20.02658500000000075 63.88012400000000213, 20.02658699999999925 63.88012400000000213, 20.02658999999999878 63.88012400000000213, 20.02658999999999878 63.88012400000000213, 20.02659099999999981 63.88012299999999755))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 353,
   "iri": "http://www.github.com/sparqlunicorn#fdf099f7-869f-499e-80c3-00c91f0a4d35_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fdf099f7-869f-499e-80c3-00c91f0a4d35_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "POLYGON((20.02660699999999849 63.88016700000000014, 20.02660699999999849 63.88016799999999762, 20.02660600000000102 63.88016799999999762, 20.02660600000000102 63.8801690000000022, 20.02660600000000102 63.88016999999999967, 20.02660499999999999 63.88017099999999715, 20.02660399999999896 63.88017099999999715, 20.02660200000000046 63.88017200000000173, 20.0265999999999984 63.88017200000000173, 20.0265979999999999 63.88017299999999921, 20.0265960000000014 63.88017299999999921, 20.02659399999999934 63.88017299999999921, 20.02659299999999831 63.88017399999999668, 20.02659200000000084 63.88017500000000126, 20.02658999999999878 63.88017500000000126, 20.02658900000000131 63.88017399999999668, 20.02658800000000028 63.88017399999999668, 20.02658699999999925 63.88017299999999921, 20.02658600000000177 63.88017299999999921, 20.02658500000000075 63.88017200000000173, 20.02658399999999972 63.88017200000000173, 20.02658200000000122 63.88017099999999715, 20.02658100000000019 63.88017099999999715, 20.02657999999999916 63.88016999999999967, 20.02658100000000019 63.8801690000000022, 20.02658200000000122 63.88016799999999762, 20.02658299999999869 63.88016799999999762, 20.02658399999999972 63.88016700000000014, 20.02658500000000075 63.88016600000000267, 20.02658500000000075 63.88016499999999809, 20.02658500000000075 63.88016400000000061, 20.02658600000000177 63.88016400000000061, 20.02658699999999925 63.88016300000000314, 20.02658900000000131 63.88016300000000314, 20.02659099999999981 63.88016199999999856, 20.02659200000000084 63.88016199999999856, 20.02659399999999934 63.88016199999999856, 20.0265960000000014 63.88016199999999856, 20.0265979999999999 63.88016199999999856, 20.02659900000000093 63.88016199999999856, 20.02660099999999943 63.88016199999999856, 20.02660200000000046 63.88016300000000314, 20.02660399999999896 63.88016300000000314, 20.02660499999999999 63.88016400000000061, 20.02660699999999849 63.88016400000000061, 20.02660799999999952 63.88016499999999809, 20.02660900000000055 63.88016600000000267, 20.02660699999999849 63.88016700000000014))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 354,
   "iri": "http://www.github.com/sparqlunicorn#fec6c570-b8d5-49be-aa15-8be41afd1aa3_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "fec6c570-b8d5-49be-aa15-8be41afd1aa3_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "MultiPolygon (((20.02643000000000129 63.88015500000000202, 20.02643099999999876 63.88015399999999744, 20.02643300000000082 63.88015399999999744, 20.02643399999999829 63.88015500000000202, 20.02646100000000118 63.88015800000000155, 20.02646199999999865 63.88015800000000155, 20.02646400000000071 63.88015800000000155, 20.02646599999999921 63.88015800000000155, 20.02646800000000127 63.88015800000000155, 20.02646899999999874 63.88015800000000155, 20.02647800000000089 63.8801599999999965, 20.02647899999999836 63.8801599999999965, 20.02647999999999939 63.88015899999999903, 20.02647999999999939 63.88015800000000155, 20.02648100000000042 63.88015699999999697, 20.02648100000000042 63.88015599999999949, 20.02647999999999939 63.88015500000000202, 20.02647899999999836 63.88015399999999744, 20.02647999999999939 63.88015299999999996, 20.02647899999999836 63.88015299999999996, 20.02647699999999986 63.88015200000000249, 20.02646599999999921 63.88015099999999791, 20.02639399999999981 63.88013999999999726, 20.02639299999999878 63.88013999999999726, 20.02639299999999878 63.88014100000000184, 20.0263920000000013 63.88014199999999931, 20.02639299999999878 63.88014299999999679, 20.02639399999999981 63.88014299999999679, 20.02639500000000083 63.88014400000000137, 20.02639599999999831 63.88014499999999884, 20.02639500000000083 63.88014600000000343, 20.02639500000000083 63.8801470000000009, 20.02639599999999831 63.8801470000000009, 20.02639800000000037 63.88014799999999838, 20.02639900000000139 63.88014799999999838, 20.0264009999999999 63.88014900000000296, 20.02640200000000092 63.88014799999999838, 20.02640399999999943 63.88014900000000296, 20.02640500000000046 63.88014900000000296, 20.02640500000000046 63.88015000000000043, 20.02640500000000046 63.88015099999999791, 20.02641200000000055 63.88015299999999996, 20.02643000000000129 63.88015500000000202)),((20.02648999999999901 63.88015500000000202, 20.02649200000000107 63.88015500000000202, 20.02648800000000051 63.88015399999999744, 20.02648999999999901 63.88015500000000202)))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 355,
   "iri": "http://www.github.com/sparqlunicorn#72d83c05-1969-4b24-a507-eb1450bffea4_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "72d83c05-1969-4b24-a507-eb1450bffea4_geom"
   },
   "annotations": {
    "http://www.opengis.net/ont/geosparql#asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#asWKT",
      "language": "undefined",
      "value": "MultiPolygon (((20.02686399999999978 63.88012799999999913, 20.02688099999999949 63.88011500000000353, 20.02688799999999958 63.88010200000000083, 20.02686900000000136 63.8800990000000013, 20.02682000000000073 63.8801119999999969, 20.02676999999999907 63.88013500000000278, 20.02673599999999965 63.88014799999999838, 20.02665299999999959 63.88015500000000202, 20.02664800000000156 63.88016600000000267, 20.02680900000000008 63.88014400000000137, 20.02686399999999978 63.88012799999999913)),((20.02664100000000147 63.88016600000000267, 20.02664000000000044 63.88016700000000014, 20.02664800000000156 63.88016600000000267, 20.02664100000000147 63.88016600000000267)))",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 356,
   "iri": "http://www.github.com/sparqlunicorn#8e91ce6c-6177-45e0-80f4-477fd6e14587_geom",
   "baseIRI": "http://www.github.com/sparqlunicorn",
   "instances": 0,
   "label": {
    "IRI-based": "8e91ce6c-6177-45e0-80f4-477fd6e14587_geom"
   },
   "annotations": {},
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 357,
   "iri": "http://www.opengis.net/def/crs/EPSG/0/4326_cs",
   "baseIRI": "http://www.opengis.net/def/crs/EPSG/0",
   "instances": 0,
   "label": "EPSG:4326 CS: ellipsoidal",
   "annotations": {
    "http://www.opengis.net/ont/crs/asProjJSON": [
     {
      "identifier": "http://www.opengis.net/ont/crs/asProjJSON",
      "language": "undefined",
      "value": "{'$schema':'https://proj.org/schemas/v0.7/projjson.schema.json','type':'CoordinateSystem','subtype':'ellipsoidal','axis':[{'name':'Geodetic latitude','abbreviation':'Lat','direction':'north','unit':'degree'},{'name':'Geodetic longitude','abbreviation':'Lon','direction':'east','unit':'degree'}]}",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/asWKT": [
     {
      "identifier": "http://www.opengis.net/ont/crs/asWKT",
      "language": "undefined",
      "value": "CS[ellipsoidal,2],AXIS['geodetic latitude (Lat)',north,ORDER[1],ANGLEUNIT['degree',0.0174532925199433,ID['EPSG',9122]]],AXIS['geodetic longitude (Lon)',east,ORDER[2],ANGLEUNIT['degree',0.0174532925199433,ID['EPSG',9122]]]",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/axis": [
     {
      "identifier": "http://www.opengis.net/ont/crs/axis",
      "language": "undefined",
      "value": "http://www.opengis.net/ont/crs/cs/axis/Geodetic_longitude_degree_east",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 358,
   "iri": "http://www.opengis.net/def/crs/EPSG/0/4326_cs",
   "baseIRI": "http://www.opengis.net/def/crs/EPSG/0",
   "instances": 0,
   "label": "Geodetic latitude (degree)",
   "annotations": {
    "http://www.opengis.net/ont/crs/abbreviation": [
     {
      "identifier": "http://www.opengis.net/ont/crs/abbreviation",
      "language": "undefined",
      "value": "Lat",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/direction": [
     {
      "identifier": "http://www.opengis.net/ont/crs/direction",
      "language": "undefined",
      "value": "http://www.opengis.net/ont/crs/north",
      "type": "iri"
     }
    ],
    "http://www.opengis.net/ont/crs/unit": [
     {
      "identifier": "http://www.opengis.net/ont/crs/unit",
      "language": "undefined",
      "value": "http://www.ontology-of-units-of-measure.org/resource/om-2/degree",
      "type": "iri"
     }
    ],
    "http://www.opengis.net/ont/crs/unit_auth_code": [
     {
      "identifier": "http://www.opengis.net/ont/crs/unit_auth_code",
      "language": "undefined",
      "value": "EPSG",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/unit_code": [
     {
      "identifier": "http://www.opengis.net/ont/crs/unit_code",
      "language": "undefined",
      "value": "9122",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/unit_conversion_factor": [
     {
      "identifier": "http://www.opengis.net/ont/crs/unit_conversion_factor",
      "language": "undefined",
      "value": "0.01745329",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 359,
   "iri": "http://www.opengis.net/ont/crs/cs/axis/Geodetic_latitude_degree_north",
   "baseIRI": "http://www.opengis.net/ont/crs/cs/axis",
   "instances": 0,
   "label": "Geodetic longitude (degree)",
   "annotations": {
    "http://www.opengis.net/ont/crs/abbreviation": [
     {
      "identifier": "http://www.opengis.net/ont/crs/abbreviation",
      "language": "undefined",
      "value": "Lon",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/direction": [
     {
      "identifier": "http://www.opengis.net/ont/crs/direction",
      "language": "undefined",
      "value": "http://www.opengis.net/ont/crs/east",
      "type": "iri"
     }
    ],
    "http://www.opengis.net/ont/crs/unit": [
     {
      "identifier": "http://www.opengis.net/ont/crs/unit",
      "language": "undefined",
      "value": "http://www.ontology-of-units-of-measure.org/resource/om-2/degree",
      "type": "iri"
     }
    ],
    "http://www.opengis.net/ont/crs/unit_auth_code": [
     {
      "identifier": "http://www.opengis.net/ont/crs/unit_auth_code",
      "language": "undefined",
      "value": "EPSG",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/unit_code": [
     {
      "identifier": "http://www.opengis.net/ont/crs/unit_code",
      "language": "undefined",
      "value": "9122",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/crs/unit_conversion_factor": [
     {
      "identifier": "http://www.opengis.net/ont/crs/unit_conversion_factor",
      "language": "undefined",
      "value": "0.01745329",
      "type": "label"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  },
  {
   "id": 360,
   "iri": "http://www.opengis.net/ont/crs/cs/axis/Geodetic_longitude_degree_east",
   "baseIRI": "http://www.opengis.net/ont/crs/cs/axis",
   "instances": 0,
   "label": {
    "IRI-based": "Geodetic_longitude_degree_east"
   },
   "annotations": {
    "http://www.github.com/sparqlunicorn#Name": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Name",
      "language": "undefined",
      "value": "K\u00f6tbullar",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Time_Period": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Time_Period",
      "language": "undefined",
      "value": "Minion",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#Trench": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#Trench",
      "language": "undefined",
      "value": "Ikea Land",
      "type": "label"
     }
    ],
    "http://www.github.com/sparqlunicorn#fid": [
     {
      "identifier": "http://www.github.com/sparqlunicorn#fid",
      "language": "undefined",
      "value": "98",
      "type": "label"
     }
    ],
    "http://www.opengis.net/ont/geosparql#hasGeometry": [
     {
      "identifier": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "language": "undefined",
      "value": "http://www.github.com/sparqlunicorn#0194d590-c58c-4c97-98f8-303ea8ffe32a_geom",
      "type": "iri"
     }
    ]
   },
   "range": [],
   "domain": [],
   "subProperties": [],
   "superProperties": []
  }
 ]
}