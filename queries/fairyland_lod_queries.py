"""
FAIRyland SPARQL Queries - Complete Version with All Visualizations

This script demonstrates how to query the FAIRyland RDF dataset using Python and SPARQL.
Includes ALL visualizations for ALL queries + Summary Dashboard.

Dataset: ../lod/fairyland.ttl
Author: Florian Thiery
Context: CAA International 2025 - "Cultural Heritage in FAIRyland? How to LODify Geodata in QGIS"

Usage:
    python fairyland_lod_queries_complete.py

Requirements:
    pip install rdflib pandas matplotlib --break-system-packages
"""

import rdflib
from rdflib import Graph, Namespace
from rdflib.plugins.sparql import prepareQuery
import pandas as pd
import matplotlib.pyplot as plt
import os

# ============================================================================
# SETUP & CONFIGURATION
# ============================================================================


def load_fairyland_graph():
    """Load the FAIRyland RDF graph from local TTL file."""
    print("=" * 60)
    print("Loading FAIRyland Dataset")
    print("=" * 60)

    # Initialize graph
    g = Graph()

    # Get script directory and construct path to TTL file
    script_dir = os.path.dirname(os.path.abspath(__file__))
    ttl_path = os.path.normpath(os.path.join(script_dir, "..", "lod", "fairyland.ttl"))

    if not os.path.exists(ttl_path):
        # Try alternative path if running from different location
        ttl_path_alt = os.path.normpath(
            os.path.join(script_dir, "lod", "fairyland.ttl")
        )
        if os.path.exists(ttl_path_alt):
            ttl_path = ttl_path_alt
        else:
            raise FileNotFoundError(
                f"Could not find TTL file.\n"
                f"Tried: {ttl_path}\n"
                f"Also tried: {ttl_path_alt}\n"
                f"Current working directory: {os.getcwd()}\n"
                f"Script location: {script_dir}"
            )

    # Load from file
    print(f"Loading from: {ttl_path}")
    g.parse(ttl_path, format="turtle")

    print(f"✓ Loaded {len(g)} triples from FAIRyland")
    print()

    return g


def define_namespaces(g):
    """Define and bind namespaces used in FAIRyland."""
    FAIRYLAND = Namespace("https://github.com/Research-Squirrel-Engineers/FAIRyland/")
    SUNI = Namespace("http://www.github.com/sparqlunicorn#")
    GEO = Namespace("http://www.opengis.net/ont/geosparql#")

    # Bind to graph for cleaner output
    g.bind("fairyland", FAIRYLAND)
    g.bind("suni", SUNI)
    g.bind("geo", GEO)

    print("✓ Namespaces defined and bound")
    print()

    return FAIRYLAND, SUNI, GEO


# ============================================================================
# QUERY 1: FEATURE TYPE INVENTORY
# 🎯 DASHBOARD QUERY 1 - Top Left Panel
# ============================================================================


def query_feature_inventory(g):
    """
    Archaeological Question: What types of features were found in FAIRyland?

    Dashboard Position: Top-left panel (bar chart)
    """
    print("=" * 60)
    print("QUERY 1: Feature Type Inventory [DASHBOARD QUERY 1]")
    print("=" * 60)

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
    df = pd.DataFrame(results, columns=["type", "count"])
    df["type"] = df["type"].apply(lambda x: str(x).split("/")[-1])
    df["count"] = df["count"].astype(int)

    print("\nFeature Types Found:")
    print(df.to_string(index=False))
    print(f"\nTotal features: {df['count'].sum()}")
    print()

    return df


def visualize_feature_inventory(df, out_dir):
    """Create visualizations for feature inventory."""
    # 1. Basic bar chart (JPG)
    plt.figure(figsize=(10, 6))
    plt.bar(df["type"], df["count"], color="#66c2a5", edgecolor="black", linewidth=1.5)
    plt.xlabel("Feature Type", fontsize=12)
    plt.ylabel("Count", fontsize=12)
    plt.title(
        "FAIRyland Archaeological Feature Inventory", fontsize=14, fontweight="bold"
    )
    plt.xticks(rotation=45, ha="right")
    plt.grid(axis="y", alpha=0.3)
    plt.tight_layout()
    plt.savefig(
        os.path.join(out_dir, "fairyland_feature_inventory.jpg"),
        dpi=300,
        format="jpg",
        bbox_inches="tight",
    )
    print(f"✓ Saved: fairyland_feature_inventory.jpg")
    plt.close()

    # 2. Enhanced version with bar + pie (JPG)
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 7))

    # Left: Bar chart
    colors_bar = plt.cm.Set3(range(len(df)))
    bars = ax1.bar(
        df["type"], df["count"], color=colors_bar, edgecolor="black", linewidth=1.5
    )
    ax1.set_xlabel("Feature Type", fontsize=12, fontweight="bold")
    ax1.set_ylabel("Count", fontsize=12, fontweight="bold")
    ax1.set_title("Feature Type Inventory (Absolute)", fontsize=13, fontweight="bold")
    plt.setp(ax1.xaxis.get_majorticklabels(), rotation=45, ha="right")
    ax1.grid(axis="y", alpha=0.3, linestyle="--")

    for bar in bars:
        height = bar.get_height()
        ax1.text(
            bar.get_x() + bar.get_width() / 2.0,
            height + 2,
            f"{int(height)}",
            ha="center",
            va="bottom",
            fontweight="bold",
            fontsize=10,
        )

    # Right: Pie chart
    colors_pie = plt.cm.Set3(range(len(df)))
    wedges, texts, autotexts = ax2.pie(
        df["count"],
        labels=df["type"],
        autopct="%1.1f%%",
        colors=colors_pie,
        startangle=90,
        textprops={"fontsize": 10, "weight": "bold"},
    )
    ax2.set_title(
        "Feature Type Distribution (Relative)", fontsize=13, fontweight="bold"
    )

    for autotext in autotexts:
        autotext.set_color("white")
        autotext.set_fontweight("bold")

    fig.suptitle("FAIRyland Feature Inventory Overview", fontsize=16, fontweight="bold")
    plt.tight_layout()
    plt.savefig(
        os.path.join(out_dir, "fairyland_feature_inventory_enhanced.jpg"),
        dpi=300,
        format="jpg",
    )
    print(f"✓ Saved: fairyland_feature_inventory_enhanced.jpg")
    plt.close()

    # 3. Horizontal comparison (JPG)
    df_sorted = df.sort_values("count", ascending=True)
    plt.figure(figsize=(12, 7))
    colors_comp = plt.cm.viridis(range(len(df_sorted)))
    bars = plt.barh(
        df_sorted["type"],
        df_sorted["count"],
        color=colors_comp,
        edgecolor="black",
        linewidth=1.5,
    )
    plt.xlabel("Count (n)", fontsize=13, fontweight="bold")
    plt.ylabel("Feature Type", fontsize=13, fontweight="bold")
    plt.title("FAIRyland Feature Type Distribution", fontsize=15, fontweight="bold")
    plt.grid(axis="x", alpha=0.3, linestyle="--")

    for bar, row in zip(bars, df_sorted.itertuples()):
        plt.text(
            row.count + 2,
            bar.get_y() + bar.get_height() / 2,
            f"{row.count}",
            va="center",
            fontweight="bold",
            fontsize=11,
        )

    total = df_sorted["count"].sum()
    plt.text(
        0.98,
        0.02,
        f"Total Features: {total}",
        transform=plt.gca().transAxes,
        fontsize=12,
        fontweight="bold",
        bbox=dict(boxstyle="round", facecolor="wheat", alpha=0.5),
        ha="right",
    )

    plt.tight_layout()
    plt.savefig(
        os.path.join(out_dir, "fairyland_types_comparison.jpg"), dpi=300, format="jpg"
    )
    print(f"✓ Saved: fairyland_types_comparison.jpg")
    plt.close()


# ============================================================================
# QUERY 2: KÖTBULLAR CONDITION ANALYSIS
# 🎯 DASHBOARD QUERY 2 - Bottom Right Panel
# ============================================================================


def query_koetbullar_condition(g):
    """
    Archaeological Question: What is the preservation state of the Kötbullar?

    Dashboard Position: Bottom-right panel (pie chart)
    """
    print("=" * 60)
    print("QUERY 2: Kötbullar Condition Analysis [DASHBOARD QUERY 2]")
    print("=" * 60)

    query = """
    PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>
    PREFIX suni: <http://www.github.com/sparqlunicorn#>

    SELECT ?condition (COUNT(?koetbullar) AS ?count)
    WHERE {
      ?koetbullar a fairyland:Koetbullar .
      OPTIONAL { ?koetbullar suni:Condition ?condition }
    }
    GROUP BY ?condition
    ORDER BY DESC(?count)
    """

    results = g.query(query)
    df = pd.DataFrame(results, columns=["condition", "count"])
    df["condition"] = df["condition"].apply(lambda x: str(x) if x else "intact")
    df["count"] = df["count"].astype(int)

    print("\nKötbullar Preservation State:")
    print(df.to_string(index=False))
    print(f"\nTotal Kötbullar: {df['count'].sum()}")
    print()

    return df


def visualize_koetbullar_condition(df, out_dir):
    """Create pie chart of Kötbullar condition."""
    plt.figure(figsize=(8, 8))
    colors = ["#8dd3c7", "#fb8072"]
    plt.pie(
        df["count"],
        labels=df["condition"],
        autopct="%1.1f%%",
        colors=colors,
        startangle=90,
        textprops={"fontsize": 12},
    )
    plt.title("Kötbullar Preservation State", fontsize=14, fontweight="bold")
    plt.tight_layout()
    plt.savefig(
        os.path.join(out_dir, "fairyland_koetbullar_condition.jpg"),
        dpi=300,
        format="jpg",
        bbox_inches="tight",
    )
    print(f"✓ Saved: fairyland_koetbullar_condition.jpg")
    plt.close()


# ============================================================================
# QUERY 3: STRATIGRAPHIC DISTRIBUTION
# 🎯 DASHBOARD QUERY 3 - Top Right Panel
# ============================================================================


def query_stratigraphy(g):
    """
    Archaeological Question: How are features distributed across time periods?

    Dashboard Position: Top-right panel (horizontal bar chart)
    """
    print("=" * 60)
    print("QUERY 3: Stratigraphic Distribution [DASHBOARD QUERY 3]")
    print("=" * 60)

    query = """
    PREFIX suni: <http://www.github.com/sparqlunicorn#>

    SELECT ?period (COUNT(?feature) AS ?count)
    WHERE {
      ?feature suni:Time_Period ?period .
    }
    GROUP BY ?period
    ORDER BY ?period
    """

    results = g.query(query)
    df = pd.DataFrame(results, columns=["period", "count"])
    df["count"] = df["count"].astype(int)

    print("\nStratigraphic Sequence:")
    print(df.to_string(index=False))
    print(f"\nTotal features: {df['count'].sum()}")
    print()

    return df


def visualize_stratigraphy(df, out_dir):
    """Create horizontal bar chart of stratigraphic distribution."""
    plt.figure(figsize=(10, 6))
    plt.barh(
        df["period"], df["count"], color="#fdb462", edgecolor="black", linewidth=1.5
    )
    plt.xlabel("Number of Features", fontsize=12)
    plt.ylabel("Time Period", fontsize=12)
    plt.title("FAIRyland Stratigraphic Sequence", fontsize=14, fontweight="bold")
    plt.grid(axis="x", alpha=0.3)
    plt.tight_layout()
    plt.savefig(
        os.path.join(out_dir, "fairyland_stratigraphy.jpg"),
        dpi=300,
        format="jpg",
        bbox_inches="tight",
    )
    print(f"✓ Saved: fairyland_stratigraphy.jpg")
    plt.close()


# ============================================================================
# QUERY 4: SPATIAL DISTRIBUTION BY TRENCH
# 🎯 DASHBOARD QUERY 4 - Bottom Left Panel
# ============================================================================


def query_trench_distribution(g):
    """
    Archaeological Question: Which trenches/areas yielded the most finds?

    Dashboard Position: Bottom-left panel (bar chart)
    """
    print("=" * 60)
    print("QUERY 4: Spatial Distribution by Trench [DASHBOARD QUERY 4]")
    print("=" * 60)

    query = """
    PREFIX suni: <http://www.github.com/sparqlunicorn#>

    SELECT ?trench (COUNT(?feature) AS ?count)
    WHERE {
      ?feature suni:Trench ?trench .
    }
    GROUP BY ?trench
    ORDER BY DESC(?count)
    """

    results = g.query(query)
    df = pd.DataFrame(results, columns=["trench", "count"])
    df["count"] = df["count"].astype(int)

    print("\nTrench Productivity:")
    print(df.to_string(index=False))
    print(f"\nTotal features: {df['count'].sum()}")
    print()

    return df


def visualize_trench_distribution(df, out_dir):
    """Create bar chart of trench distribution."""
    plt.figure(figsize=(10, 6))
    colors = ["#8dd3c7", "#fb8072"]
    bars = plt.bar(
        df["trench"], df["count"], color=colors, edgecolor="black", linewidth=1.5
    )
    plt.xlabel("Trench / Excavation Area", fontsize=13, fontweight="bold")
    plt.ylabel("Number of Features", fontsize=13, fontweight="bold")
    plt.title(
        "Spatial Distribution: Features by Trench", fontsize=15, fontweight="bold"
    )
    plt.grid(axis="y", alpha=0.3, linestyle="--")

    for bar, v in zip(bars, df["count"]):
        plt.text(
            bar.get_x() + bar.get_width() / 2,
            v + 2,
            str(v),
            ha="center",
            va="bottom",
            fontweight="bold",
            fontsize=12,
        )

    plt.tight_layout()
    plt.savefig(
        os.path.join(out_dir, "fairyland_trench_distribution.jpg"),
        dpi=300,
        format="jpg",
    )
    print(f"✓ Saved: fairyland_trench_distribution.jpg")
    plt.close()


# ============================================================================
# QUERY 5: MINION CATALOG
# ============================================================================


def query_minion_catalog(g):
    """Archaeological Question: Get a detailed catalog of all Minions found."""
    print("=" * 60)
    print("QUERY 5: Minion Catalog")
    print("=" * 60)

    query = """
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
    """

    results = g.query(query)
    df = pd.DataFrame(results, columns=["name", "condition", "period", "trench"])
    df["condition"] = df["condition"].apply(lambda x: str(x) if x else "unknown")

    print("\nMinion Finds:")
    print(df.to_string(index=False))
    print(f"\nTotal Minions: {len(df)}")
    print()

    return df


def visualize_minion_catalog(df, out_dir):
    """Create table visualization of minion catalog."""
    fig, ax = plt.subplots(figsize=(14, max(10, len(df) * 0.6)))
    ax.axis("tight")
    ax.axis("off")

    table_data = df.values
    col_labels = ["Name", "Condition", "Period", "Trench"]

    table = ax.table(
        cellText=table_data,
        colLabels=col_labels,
        cellLoc="center",
        loc="center",
        colColours=["#fdb462"] * len(col_labels),
    )

    table.auto_set_font_size(False)
    table.set_fontsize(10)
    table.scale(1, 2.5)

    # Style header
    for i in range(len(col_labels)):
        table[(0, i)].set_facecolor("#fdb462")
        table[(0, i)].set_text_props(weight="bold", color="white", size=11)

    # Alternate row colors
    for i in range(1, len(df) + 1):
        for j in range(len(col_labels)):
            if i % 2 == 0:
                table[(i, j)].set_facecolor("#fff4e6")

    plt.title(
        f"Minion Catalog - Complete Find List (n={len(df)})",
        fontsize=16,
        fontweight="bold",
        pad=20,
    )
    plt.tight_layout()
    plt.savefig(
        os.path.join(out_dir, "fairyland_minion_catalog.jpg"), dpi=300, format="jpg"
    )
    print(f"✓ Saved: fairyland_minion_catalog.jpg")
    plt.close()


# ============================================================================
# QUERY 6: FEATURE CO-OCCURRENCE
# ============================================================================


def query_feature_cooccurrence(g):
    """Archaeological Question: Which feature types co-occur in the same trenches?"""
    print("=" * 60)
    print("QUERY 6: Feature Co-occurrence Analysis")
    print("=" * 60)

    query = """
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
    """

    results = g.query(query)
    df = pd.DataFrame(results, columns=["trench", "feature_types"])

    print("\nFeature Co-occurrence by Trench:")
    print(df.to_string(index=False))
    print()

    return df


def visualize_feature_cooccurrence(df, out_dir):
    """Create visualization of feature co-occurrence."""
    df_viz = df.copy()
    df_viz["type_count"] = df_viz["feature_types"].apply(lambda x: len(x.split(", ")))

    plt.figure(figsize=(10, 6))
    colors = ["#66c2a5", "#fc8d62"]
    bars = plt.barh(
        df_viz["trench"],
        df_viz["type_count"],
        color=colors,
        edgecolor="black",
        linewidth=1.5,
    )
    plt.xlabel("Number of Different Feature Types", fontsize=13, fontweight="bold")
    plt.ylabel("Trench", fontsize=13, fontweight="bold")
    plt.title(
        "Archaeological Diversity: Feature Types per Trench",
        fontsize=15,
        fontweight="bold",
    )
    plt.grid(axis="x", alpha=0.3, linestyle="--")

    for bar, count in zip(bars, df_viz["type_count"]):
        plt.text(
            count + 0.15,
            bar.get_y() + bar.get_height() / 2,
            str(count),
            va="center",
            fontweight="bold",
            fontsize=12,
        )

    plt.tight_layout()
    plt.savefig(
        os.path.join(out_dir, "fairyland_feature_cooccurrence.jpg"),
        dpi=300,
        format="jpg",
    )
    print(f"✓ Saved: fairyland_feature_cooccurrence.jpg")
    plt.close()


# ============================================================================
# QUERY 7: GEOMETRY COUNT
# ============================================================================


def query_geometry_count(g):
    """Technical Question: How many features have geometry data?"""
    print("=" * 60)
    print("QUERY 7: Geometry Data Availability")
    print("=" * 60)

    query = """
    PREFIX geo: <http://www.opengis.net/ont/geosparql#>

    SELECT (COUNT(?feature) AS ?features_with_geometry)
    WHERE {
      ?feature geo:hasGeometry ?geom .
    }
    """

    results = g.query(query)

    for row in results:
        print(f"\nFeatures with geometry data: {row[0]}")
    print()


# ============================================================================
# SUMMARY DASHBOARD
# ============================================================================


def create_summary_dashboard(
    df_inventory, df_stratigraphy, df_trench, df_koetbullar, out_dir
):
    """Create comprehensive summary dashboard."""
    print("=" * 60)
    print("Creating Summary Dashboard")
    print("=" * 60)

    fig = plt.figure(figsize=(18, 11))
    gs = fig.add_gridspec(2, 2, hspace=0.35, wspace=0.3)

    # Top left: Feature inventory
    ax1 = fig.add_subplot(gs[0, 0])
    colors1 = plt.cm.Pastel1(range(len(df_inventory)))
    bars1 = ax1.bar(
        df_inventory["type"],
        df_inventory["count"],
        color=colors1,
        edgecolor="black",
        linewidth=1,
    )
    ax1.set_title("Feature Type Inventory", fontsize=13, fontweight="bold")
    ax1.set_ylabel("Count", fontweight="bold", fontsize=11)
    plt.setp(ax1.xaxis.get_majorticklabels(), rotation=45, ha="right", fontsize=9)
    ax1.grid(axis="y", alpha=0.3)

    # Top right: Stratigraphy
    ax2 = fig.add_subplot(gs[0, 1])
    colors2 = plt.cm.Pastel2(range(len(df_stratigraphy)))
    bars2 = ax2.barh(
        df_stratigraphy["period"],
        df_stratigraphy["count"],
        color=colors2,
        edgecolor="black",
        linewidth=1,
    )
    ax2.set_title("Stratigraphic Sequence", fontsize=13, fontweight="bold")
    ax2.set_xlabel("Number of Features", fontweight="bold", fontsize=11)
    ax2.grid(axis="x", alpha=0.3)

    # Bottom left: Trench distribution
    ax3 = fig.add_subplot(gs[1, 0])
    colors3 = ["#8dd3c7", "#fb8072"]
    bars3 = ax3.bar(
        df_trench["trench"],
        df_trench["count"],
        color=colors3,
        edgecolor="black",
        linewidth=1,
    )
    ax3.set_title("Spatial Distribution by Trench", fontsize=13, fontweight="bold")
    ax3.set_ylabel("Number of Features", fontweight="bold", fontsize=11)
    ax3.grid(axis="y", alpha=0.3)

    # Bottom right: Kötbullar condition
    ax4 = fig.add_subplot(gs[1, 1])
    colors4 = ["#8dd3c7", "#fb8072"]
    wedges4, texts4, autotexts4 = ax4.pie(
        df_koetbullar["count"],
        labels=df_koetbullar["condition"],
        autopct="%1.1f%%",
        colors=colors4,
        startangle=90,
        textprops={"fontsize": 11, "weight": "bold"},
    )
    ax4.set_title("Kötbullar Preservation State", fontsize=13, fontweight="bold")

    for autotext in autotexts4:
        autotext.set_color("white")
        autotext.set_fontweight("bold")

    # Overall title
    fig.suptitle(
        "FAIRyland Archaeological Dataset - Summary Dashboard",
        fontsize=18,
        fontweight="bold",
    )

    plt.savefig(
        os.path.join(out_dir, "fairyland_summary_dashboard.jpg"), dpi=300, format="jpg"
    )
    print("✓ Created: fairyland_summary_dashboard.jpg")
    plt.close()


# ============================================================================
# EXPORT FUNCTIONS
# ============================================================================


def export_results(df_dict, out_dir):
    """Export all query results as CSV files."""
    print("=" * 60)
    print("Exporting Results")
    print("=" * 60)

    for name, df in df_dict.items():
        if df is not None and not df.empty:
            filename = f"fairyland_{name}.csv"
            filepath = os.path.join(out_dir, filename)
            df.to_csv(filepath, index=False)
            print(f"✓ Exported: {filepath}")

    print()


# ============================================================================
# SUMMARY STATISTICS
# ============================================================================


def print_summary(g, df_inventory, df_stratigraphy, df_trench):
    """Print overall summary statistics."""
    print("=" * 60)
    print("FAIRyland Dataset Summary")
    print("=" * 60)
    print(f"Total RDF triples:        {len(g)}")
    print(f"Total features:           {df_inventory['count'].sum()}")
    print(f"Feature types:            {len(df_inventory)}")
    print(f"Time periods:             {len(df_stratigraphy)}")
    print(f"Excavation trenches:      {len(df_trench)}")
    print()
    print(
        f"Most common feature:      {df_inventory.iloc[0]['type']} ({df_inventory.iloc[0]['count']} instances)"
    )
    print(
        f"Most productive trench:   {df_trench.iloc[0]['trench']} ({df_trench.iloc[0]['count']} features)"
    )
    print(
        f"Main occupation period:   {df_stratigraphy.iloc[0]['period']} ({df_stratigraphy.iloc[0]['count']} features)"
    )
    print("=" * 60)
    print()


# ============================================================================
# MAIN EXECUTION
# ============================================================================


def main():
    """Main execution function."""
    print("\n")
    print("╔" + "=" * 58 + "╗")
    print("║" + " " * 58 + "║")
    print("║" + "  FAIRyland SPARQL Queries - Complete Edition".center(58) + "║")
    print("║" + " " * 58 + "║")
    print("╚" + "=" * 58 + "╝")
    print()

    # Create output directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    out_dir = os.path.join(script_dir, "out")
    os.makedirs(out_dir, exist_ok=True)
    print(f"Output directory: {out_dir}\n")

    # Load graph
    g = load_fairyland_graph()
    FAIRYLAND, SUNI, GEO = define_namespaces(g)

    # Execute queries
    df_inventory = query_feature_inventory(g)
    df_koetbullar = query_koetbullar_condition(g)
    df_stratigraphy = query_stratigraphy(g)
    df_trench = query_trench_distribution(g)
    df_minions = query_minion_catalog(g)
    df_cooccurrence = query_feature_cooccurrence(g)
    query_geometry_count(g)

    # Create ALL visualizations
    print("=" * 60)
    print("Creating ALL Visualizations")
    print("=" * 60)

    visualize_feature_inventory(df_inventory, out_dir)
    visualize_koetbullar_condition(df_koetbullar, out_dir)
    visualize_stratigraphy(df_stratigraphy, out_dir)
    visualize_trench_distribution(df_trench, out_dir)
    visualize_minion_catalog(df_minions, out_dir)
    visualize_feature_cooccurrence(df_cooccurrence, out_dir)

    # Create Summary Dashboard (HIGHLIGHT!)
    create_summary_dashboard(
        df_inventory, df_stratigraphy, df_trench, df_koetbullar, out_dir
    )

    print()

    # Export results
    export_results(
        {
            "feature_inventory": df_inventory,
            "koetbullar_condition": df_koetbullar,
            "stratigraphy": df_stratigraphy,
            "trench_distribution": df_trench,
            "minion_catalog": df_minions,
            "feature_cooccurrence": df_cooccurrence,
        },
        out_dir,
    )

    # Print summary
    print_summary(g, df_inventory, df_stratigraphy, df_trench)

    print("=" * 60)
    print("✓ All queries and visualizations completed successfully!")
    print("=" * 60)
    print("\nCreated visualizations (all JPG):")
    print("  • fairyland_feature_inventory.jpg")
    print("  • fairyland_feature_inventory_enhanced.jpg")
    print("  • fairyland_types_comparison.jpg")
    print("  • fairyland_koetbullar_condition.jpg")
    print("  • fairyland_stratigraphy.jpg")
    print("  • fairyland_trench_distribution.jpg")
    print("  • fairyland_minion_catalog.jpg")
    print("  • fairyland_feature_cooccurrence.jpg")
    print("  ★ fairyland_summary_dashboard.jpg  ← PERFECT FOR POSTER!")
    print()


if __name__ == "__main__":
    main()
