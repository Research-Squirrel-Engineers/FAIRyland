#!/usr/bin/env python3
"""
FAIRyland Spatial Visualization
================================

This script creates a comprehensive spatial visualization of the FAIRyland
archaeological dataset by combining RDF/Linked Data with geospatial analysis.

The visualization includes:
- Archaeological features (color-coded by type)
- Street network (highlighted infrastructure)
- Special features (craters)
- OpenStreetMap basemap for geographic context

Dataset: ../lod/fairyland.ttl
Author: Florian Thiery, Research Squirrel Engineers
License: CC-BY 4.0
Project: https://github.com/Research-Squirrel-Engineers/FAIRyland

Requirements:
    pip install rdflib pandas geopandas contextily shapely matplotlib --break-system-packages

Usage:
    python fairyland_map.py

Output:
    - fairyland_poster_map.jpg (high-resolution spatial visualization)

Technical Details:
    - CRS: EPSG:4326 (WGS84) → EPSG:3857 (Web Mercator)
    - Basemap: OpenStreetMap via contextily
    - Resolution: 300 DPI
"""

import os
import sys
from rdflib import Graph, Namespace
import pandas as pd
import geopandas as gpd
from shapely import wkt
from shapely.geometry import Point
import matplotlib.pyplot as plt
import contextily as ctx
from matplotlib.patches import Patch
from matplotlib.lines import Line2D

# ============================================================================
# CONFIGURATION
# ============================================================================

# RDF Namespaces
FAIRYLAND = Namespace("https://github.com/Research-Squirrel-Engineers/FAIRyland/")
SUNI = Namespace("http://www.github.com/sparqlunicorn#")
GEO = Namespace("http://www.opengis.net/ont/geosparql#")

# File paths
script_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(script_dir)
ttl_path = os.path.join(parent_dir, "lod", "fairyland.ttl")
out_dir = os.path.join(script_dir, "out")

# Create output directory
os.makedirs(out_dir, exist_ok=True)

# ============================================================================
# DATA LOADING
# ============================================================================

print("=" * 70)
print("FAIRyland Spatial Visualization".center(70))
print("=" * 70)
print()

print("Loading RDF dataset...")
g = Graph()
g.parse(ttl_path, format="turtle")
print(f"✓ Loaded {len(g)} triples")
print()

# ============================================================================
# SPARQL QUERIES FOR SPATIAL DATA
# ============================================================================

print("Querying spatial features...")

# Query 1: Street Network
street_query = """
PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>
PREFIX suni: <http://www.github.com/sparqlunicorn#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>

SELECT DISTINCT ?feature ?name ?wkt WHERE {
    ?feature a fairyland:Street .
    OPTIONAL { ?feature suni:Name ?name }
    OPTIONAL { 
        ?feature geo:hasGeometry ?geom .
        ?geom geo:asWKT ?wkt 
    }
}
"""

streets = []
for row in g.query(street_query):
    if row.wkt:
        streets.append(
            {
                "feature": str(row.feature),
                "name": str(row.name) if row.name else "Street",
                "wkt": str(row.wkt),
            }
        )

print(f"  → Streets: {len(streets)}")

# Query 2: Crater Features
crater_query = """
PREFIX suni: <http://www.github.com/sparqlunicorn#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>

SELECT DISTINCT ?feature ?name ?wkt WHERE {
    ?feature suni:Name ?name .
    FILTER(REGEX(?name, "crater", "i"))
    OPTIONAL { 
        ?feature geo:hasGeometry ?geom .
        ?geom geo:asWKT ?wkt 
    }
}
"""

craters = []
for row in g.query(crater_query):
    if row.wkt:
        craters.append(
            {"feature": str(row.feature), "name": str(row.name), "wkt": str(row.wkt)}
        )

print(f"  → Craters: {len(craters)}")

# Query 3: Archaeological Features
arch_query = """
PREFIX suni: <http://www.github.com/sparqlunicorn#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>

SELECT DISTINCT ?feature ?name ?trench ?period ?condition ?wkt WHERE {
    ?feature suni:Name ?name .
    OPTIONAL { ?feature suni:Trench ?trench }
    OPTIONAL { ?feature suni:Time_Period ?period }
    OPTIONAL { ?feature suni:Condition ?condition }
    OPTIONAL { 
        ?feature geo:hasGeometry ?geom .
        ?geom geo:asWKT ?wkt 
    }
    FILTER(?name != "Street")
}
"""

features = []
for row in g.query(arch_query):
    if row.wkt:
        wkt_str = str(row.wkt)
        if "POLYGON" in wkt_str.upper():
            try:
                # Convert polygon to centroid for point-based visualization
                geom = wkt.loads(wkt_str)
                centroid = geom.centroid
                features.append(
                    {
                        "feature": str(row.feature),
                        "name": str(row.name),
                        "type": str(row.name),
                        "trench": str(row.trench) if row.trench else "Unknown",
                        "period": str(row.period) if row.period else "Unknown",
                        "condition": str(row.condition) if row.condition else "Unknown",
                        "lon": centroid.x,
                        "lat": centroid.y,
                    }
                )
            except Exception as e:
                continue

print(f"  → Archaeological features: {len(features)}")
print()

# ============================================================================
# GEODATA PREPARATION
# ============================================================================

print("Creating GeoDataFrames...")

# Archaeological features (point data from polygon centroids)
df = pd.DataFrame(features)
geometry = [Point(xy) for xy in zip(df["lon"], df["lat"])]
gdf = gpd.GeoDataFrame(df, geometry=geometry, crs="EPSG:4326")
gdf_mercator = gdf.to_crs("EPSG:3857")  # Web Mercator for contextily

# Street network (line data)
street_gdf_mercator = None
if streets:
    street_geometries = []
    for s in streets:
        try:
            geom = wkt.loads(s["wkt"])
            street_geometries.append(geom)
        except:
            pass

    if street_geometries:
        street_gdf = gpd.GeoDataFrame(
            streets[: len(street_geometries)],
            geometry=street_geometries,
            crs="EPSG:4326",
        )
        street_gdf_mercator = street_gdf.to_crs("EPSG:3857")

# Crater features (point data from polygon centroids)
crater_gdf_mercator = None
if craters:
    crater_geometries = []
    crater_data = []
    for c in craters:
        try:
            geom = wkt.loads(c["wkt"])
            centroid = geom.centroid
            crater_geometries.append(Point(centroid.x, centroid.y))
            crater_data.append(c)
        except:
            pass

    if crater_geometries:
        crater_gdf = gpd.GeoDataFrame(
            crater_data[: len(crater_geometries)],
            geometry=crater_geometries,
            crs="EPSG:4326",
        )
        crater_gdf_mercator = crater_gdf.to_crs("EPSG:3857")

print("✓ GeoDataFrames created")
print()

# ============================================================================
# VISUALIZATION
# ============================================================================

print("Creating spatial visualization...")

# Figure setup (landscape orientation)
fig, ax = plt.subplots(figsize=(18, 12))

# Set map extent with padding
minx, miny, maxx, maxy = gdf_mercator.total_bounds
x_range = maxx - minx
y_range = maxy - miny
padding = 0.05
ax.set_xlim(minx - x_range * padding, maxx + x_range * padding)
ax.set_ylim(miny - y_range * padding, maxy + y_range * padding)

# Add OpenStreetMap basemap
ctx.add_basemap(
    ax,
    source=ctx.providers.OpenStreetMap.Mapnik,
    attribution_size=8,
    reset_extent=False,
    alpha=1.0,
)

# Layer 1: Street Network (with glow effect for visibility)
if street_gdf_mercator is not None and len(street_gdf_mercator) > 0:
    # Outer glow (white halo)
    street_gdf_mercator.plot(
        ax=ax, color="white", linewidth=7, linestyle="--", alpha=0.6, zorder=4
    )
    # Main street line
    street_gdf_mercator.plot(
        ax=ax, color="#FF1493", linewidth=5, linestyle="--", alpha=0.95, zorder=5
    )

# Layer 2: Crater Features (with glow effect)
if crater_gdf_mercator is not None and len(crater_gdf_mercator) > 0:
    # Glow effect
    crater_gdf_mercator.plot(
        ax=ax, color="orange", markersize=400, alpha=0.3, edgecolor="none", zorder=14
    )
    # Main crater marker
    crater_gdf_mercator.plot(
        ax=ax,
        color="#FF8C00",
        markersize=350,
        alpha=0.85,
        edgecolor="#FF4500",
        linewidth=3,
        zorder=15,
    )

# Layer 3: Archaeological Features (color-coded by type)
unique_types = gdf["type"].unique()
colors = plt.cm.Set3.colors[: len(unique_types)]
type_colors = {ftype: colors[idx] for idx, ftype in enumerate(unique_types)}

patches = []
for ftype, color in type_colors.items():
    type_data = gdf_mercator[gdf_mercator["type"] == ftype]
    if ftype.lower() == "crater":
        continue  # Already plotted as separate layer

    # Drop shadow (depth effect)
    type_data.plot(
        ax=ax, color="black", markersize=145, alpha=0.35, edgecolor="none", zorder=9
    )
    # Main feature marker
    type_data.plot(
        ax=ax,
        color=color,
        markersize=140,
        alpha=0.9,
        edgecolor="black",
        linewidth=1.8,
        zorder=10,
    )

    patches.append(
        Patch(
            facecolor=color,
            label=f"{ftype} (n={len(type_data)})",
            edgecolor="black",
            linewidth=0.5,
        )
    )

# Build legend
legend_elements = patches + [
    Line2D(
        [0],
        [0],
        color="#FF1493",
        linewidth=4,
        linestyle="--",
        label=f"Street (n={len(streets)})",
        alpha=0.95,
    ),
    Line2D(
        [0],
        [0],
        marker="o",
        color="w",
        label=f"Crater (n={len(craters)})",
        markerfacecolor="#FF8C00",
        markeredgecolor="#FF4500",
        markersize=13,
        alpha=0.85,
        markeredgewidth=2,
    ),
]

# Map styling
ax.set_axis_off()

# North arrow
ax.annotate(
    "N",
    xy=(0.97, 0.97),
    xytext=(0.97, 0.92),
    xycoords="axes fraction",
    fontsize=20,
    fontweight="bold",
    ha="center",
    va="bottom",
    arrowprops=dict(arrowstyle="->", lw=3.5, color="black"),
)

# Legend (positioned on map)
plt.legend(
    handles=legend_elements,
    title="Features & Context",
    title_fontsize=14,
    fontsize=12,
    loc="lower right",
    framealpha=0.97,
    edgecolor="black",
    fancybox=True,
    shadow=True,
    bbox_to_anchor=(0.98, 0.02),
)

# Save high-resolution output
output_path = os.path.join(out_dir, "fairyland_poster_map.jpg")
plt.savefig(output_path, dpi=300, format="jpg", bbox_inches="tight")
print(f"✓ Saved: {output_path}")
plt.close()

# ============================================================================
# SUMMARY
# ============================================================================

print()
print("=" * 70)
print("✓ Spatial Visualization Complete".center(70))
print("=" * 70)
print()
print("Output:")
print(f"  → {output_path}")
print()
print("Dataset statistics:")
print(f"  → Archaeological features: {len(gdf)} (color-coded by type)")
print(f"  → Street segments: {len(streets)}")
print(f"  → Crater features: {len(craters)}")
print()
print("Visualization details:")
print(f"  → Coordinate system: EPSG:4326 → EPSG:3857")
print(f"  → Basemap: OpenStreetMap")
print(f"  → Resolution: 300 DPI")
print()
