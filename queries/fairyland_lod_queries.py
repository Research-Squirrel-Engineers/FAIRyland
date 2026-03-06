"""
FAIRyland SPARQL Queries - Python Script

This script demonstrates how to query the FAIRyland RDF dataset using Python and SPARQL.

Dataset: ../lod/fairyland.ttl
Author: Florian Thiery
Context: CAA International 2025 - "Cultural Heritage in FAIRyland? How to LODify Geodata in QGIS"

Usage:
    python fairyland_queries.py

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
# ============================================================================


def query_feature_inventory(g):
    """
    Archaeological Question: What types of features were found in FAIRyland?
    """
    print("=" * 60)
    print("QUERY 1: Feature Type Inventory")
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

    # Convert to DataFrame
    df = pd.DataFrame(results, columns=["type", "count"])
    df["type"] = df["type"].apply(lambda x: str(x).split("/")[-1])
    df["count"] = df["count"].astype(int)

    print("\nFeature Types Found:")
    print(df.to_string(index=False))
    print(f"\nTotal features: {df['count'].sum()}")
    print()

    return df


def visualize_feature_inventory(df, out_dir):
    """Create bar chart of feature type distribution."""
    plt.figure(figsize=(10, 6))
    plt.bar(df["type"], df["count"], color="#66c2a5")
    plt.xlabel("Feature Type", fontsize=12)
    plt.ylabel("Count", fontsize=12)
    plt.title(
        "FAIRyland Archaeological Feature Inventory", fontsize=14, fontweight="bold"
    )
    plt.xticks(rotation=45, ha="right")
    plt.grid(axis="y", alpha=0.3)
    plt.tight_layout()
    filepath = os.path.join(out_dir, "fairyland_feature_inventory.png")
    plt.savefig(filepath, dpi=300)
    print(f"✓ Saved: {filepath}")
    plt.close()


# ============================================================================
# QUERY 2: KÖTBULLAR CONDITION ANALYSIS
# ============================================================================


def query_koetbullar_condition(g):
    """
    Archaeological Question: What is the preservation state of the Kötbullar?
    """
    print("=" * 60)
    print("QUERY 2: Kötbullar Condition Analysis")
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

    # Convert to DataFrame
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
    filepath = os.path.join(out_dir, "fairyland_koetbullar_condition.png")
    plt.savefig(filepath, dpi=300)
    print(f"✓ Saved: {filepath}")
    plt.close()


# ============================================================================
# QUERY 3: STRATIGRAPHIC DISTRIBUTION
# ============================================================================


def query_stratigraphy(g):
    """
    Archaeological Question: How are features distributed across time periods?
    """
    print("=" * 60)
    print("QUERY 3: Stratigraphic Distribution")
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

    # Convert to DataFrame
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
    plt.barh(df["period"], df["count"], color="#fdb462")
    plt.xlabel("Number of Features", fontsize=12)
    plt.ylabel("Time Period", fontsize=12)
    plt.title("FAIRyland Stratigraphic Sequence", fontsize=14, fontweight="bold")
    plt.grid(axis="x", alpha=0.3)
    plt.tight_layout()
    filepath = os.path.join(out_dir, "fairyland_stratigraphy.png")
    plt.savefig(filepath, dpi=300)
    print(f"✓ Saved: {filepath}")
    plt.close()


# ============================================================================
# QUERY 4: SPATIAL DISTRIBUTION BY TRENCH
# ============================================================================


def query_trench_distribution(g):
    """
    Archaeological Question: Which trenches/areas yielded the most finds?
    """
    print("=" * 60)
    print("QUERY 4: Spatial Distribution by Trench")
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

    # Convert to DataFrame
    df = pd.DataFrame(results, columns=["trench", "count"])
    df["count"] = df["count"].astype(int)

    print("\nTrench Productivity:")
    print(df.to_string(index=False))
    print(f"\nTotal features: {df['count'].sum()}")
    print()

    return df


# ============================================================================
# QUERY 5: MINION CATALOG
# ============================================================================


def query_minion_catalog(g):
    """
    Archaeological Question: Get a detailed catalog of all Minions found.
    """
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

    # Convert to DataFrame
    df = pd.DataFrame(results, columns=["name", "condition", "period", "trench"])
    df["condition"] = df["condition"].apply(lambda x: str(x) if x else "unknown")

    print("\nMinion Finds:")
    print(df.to_string(index=False))
    print(f"\nTotal Minions: {len(df)}")
    print()

    return df


# ============================================================================
# QUERY 6: FEATURE CO-OCCURRENCE
# ============================================================================


def query_feature_cooccurrence(g):
    """
    Archaeological Question: Which feature types co-occur in the same trenches?
    """
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

    # Convert to DataFrame
    df = pd.DataFrame(results, columns=["trench", "feature_types"])

    print("\nFeature Co-occurrence by Trench:")
    print(df.to_string(index=False))
    print()

    return df


# ============================================================================
# QUERY 7: GEOMETRY COUNT
# ============================================================================


def query_geometry_count(g):
    """
    Technical Question: How many features have geometry data?
    """
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
    print("║" + "  FAIRyland SPARQL Queries - Python Edition".center(58) + "║")
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

    # Create visualizations
    print("=" * 60)
    print("Creating Visualizations")
    print("=" * 60)
    visualize_feature_inventory(df_inventory, out_dir)
    visualize_koetbullar_condition(df_koetbullar, out_dir)
    visualize_stratigraphy(df_stratigraphy, out_dir)
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

    print("✓ All queries completed successfully!")
    print()


if __name__ == "__main__":
    main()
