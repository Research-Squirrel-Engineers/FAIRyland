"""
FAIRyland SPARQL Dashboard Visualization
=========================================

This script creates a comprehensive summary dashboard from the FAIRyland RDF dataset.
It demonstrates SPARQL queries for archaeological data and generates publication-ready
visualizations.

The dashboard includes:
- Feature type inventory (filtered and cleaned)
- Stratigraphic sequence distribution (log scale)
- Spatial distribution by excavation trench
- Preservation state analysis (Kötbullar)

Dataset: ../lod/fairyland.ttl
Author: Florian Thiery, Research Squirrel Engineers
License: CC-BY 4.0
Project: https://github.com/Research-Squirrel-Engineers/FAIRyland

Requirements:
    pip install rdflib pandas matplotlib --break-system-packages

Usage:
    python fairyland_dashboard.py

Output:
    - fairyland_summary_dashboard.jpg (high-resolution visualization)
    - dashboard_queries.md (SPARQL query documentation)
"""

import rdflib
from rdflib import Graph, Namespace
import pandas as pd
import matplotlib.pyplot as plt
import os

# ============================================================================
# SPARQL QUERIES
# ============================================================================

DASHBOARD_QUERIES = {
    "query1_feature_inventory": {
        "title": "Feature Type Inventory",
        "description": "Count archaeological features by type",
        "sparql": """PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>

SELECT ?type (COUNT(?feature) AS ?count)
WHERE {
  ?feature a ?type .
  FILTER(STRSTARTS(STR(?type), "https://github.com/Research-Squirrel-Engineers/FAIRyland/"))
}
GROUP BY ?type
ORDER BY DESC(?count)""",
    },
    "query2_koetbullar": {
        "title": "Kötbullar Preservation Analysis",
        "description": "Analyze preservation state of archaeological features",
        "sparql": """PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?condition (COUNT(?koetbullar) AS ?count)
WHERE {
  ?koetbullar a fairyland:Koetbullar .
  OPTIONAL { ?koetbullar suni:Condition ?condition }
}
GROUP BY ?condition
ORDER BY DESC(?count)""",
    },
    "query3_stratigraphy": {
        "title": "Stratigraphic Distribution",
        "description": "Distribution of features across time periods",
        "sparql": """PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?period (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Time_Period ?period .
}
GROUP BY ?period
ORDER BY ?period""",
    },
    "query4_trench": {
        "title": "Spatial Distribution",
        "description": "Feature counts by excavation trench",
        "sparql": """PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?trench (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Trench ?trench .
}
GROUP BY ?trench
ORDER BY DESC(?count)""",
    },
}

# ============================================================================
# DATA LOADING
# ============================================================================


def load_fairyland_graph():
    """
    Load the FAIRyland RDF dataset from Turtle format.

    Returns:
        rdflib.Graph: Loaded RDF graph

    Raises:
        FileNotFoundError: If fairyland.ttl cannot be found
    """
    print("=" * 70)
    print("FAIRyland Dashboard Visualization".center(70))
    print("=" * 70)
    print()

    g = Graph()
    script_dir = os.path.dirname(os.path.abspath(__file__))
    ttl_path = os.path.normpath(os.path.join(script_dir, "..", "lod", "fairyland.ttl"))

    if not os.path.exists(ttl_path):
        ttl_path_alt = os.path.normpath(
            os.path.join(script_dir, "lod", "fairyland.ttl")
        )
        if os.path.exists(ttl_path_alt):
            ttl_path = ttl_path_alt
        else:
            raise FileNotFoundError(
                "Could not find fairyland.ttl in expected locations"
            )

    print(f"Loading: {ttl_path}")
    g.parse(ttl_path, format="turtle")
    print(f"✓ Loaded {len(g)} triples\n")

    return g


# ============================================================================
# QUERY EXECUTION
# ============================================================================


def execute_dashboard_queries(g):
    """
    Execute all dashboard SPARQL queries and return results.

    Args:
        g (rdflib.Graph): RDF graph to query

    Returns:
        dict: Dictionary containing DataFrames for each query result
    """
    print("Executing SPARQL Queries...")
    print("-" * 70)

    results = {}

    # Query 1: Feature Inventory
    print("→ Query 1: Feature Type Inventory")
    df1 = pd.DataFrame(
        g.query(DASHBOARD_QUERIES["query1_feature_inventory"]["sparql"]),
        columns=["type", "count"],
    )
    df1["type"] = df1["type"].apply(lambda x: str(x).split("/")[-1])
    df1["count"] = df1["count"].astype(int)
    results["inventory"] = df1
    print(f"  Found {len(df1)} feature types")

    # Query 2: Kötbullar Condition
    print("→ Query 2: Preservation Analysis")
    df2 = pd.DataFrame(
        g.query(DASHBOARD_QUERIES["query2_koetbullar"]["sparql"]),
        columns=["condition", "count"],
    )
    df2["condition"] = df2["condition"].apply(lambda x: str(x) if x else "intact")
    df2["count"] = df2["count"].astype(int)
    results["koetbullar"] = df2
    print(f"  Total features analyzed: {df2['count'].sum()}")

    # Query 3: Stratigraphy
    print("→ Query 3: Stratigraphic Distribution")
    df3 = pd.DataFrame(
        g.query(DASHBOARD_QUERIES["query3_stratigraphy"]["sparql"]),
        columns=["period", "count"],
    )
    df3["count"] = df3["count"].astype(int)
    results["stratigraphy"] = df3
    print(f"  Found {len(df3)} time periods")

    # Query 4: Trench Distribution
    print("→ Query 4: Spatial Distribution")
    df4 = pd.DataFrame(
        g.query(DASHBOARD_QUERIES["query4_trench"]["sparql"]),
        columns=["trench", "count"],
    )
    df4["count"] = df4["count"].astype(int)
    results["trench"] = df4
    print(f"  Found {len(df4)} trenches")

    print()
    return results


# ============================================================================
# VISUALIZATION
# ============================================================================


def create_dashboard(results, out_dir):
    """
    Create comprehensive 2x2 dashboard visualization.

    Features:
    - Filtered feature inventory (excludes metadata types)
    - Logarithmic scale for stratigraphic data (handles wide value ranges)
    - Explicit axis positioning to avoid matplotlib label conflicts
    - High-resolution output (300 DPI)

    Args:
        results (dict): Query results from execute_dashboard_queries()
        out_dir (str): Output directory path
    """
    print("Creating Dashboard Visualization...")
    print("-" * 70)

    fig = plt.figure(figsize=(20, 12))
    gs = fig.add_gridspec(2, 2, hspace=0.35, wspace=0.3)

    # ========================================================================
    # Panel 1: Feature Type Inventory
    # ========================================================================
    ax1 = fig.add_subplot(gs[0, 0])

    # Filter out metadata types (TimePeriod, Trench) - keep only actual features
    df_filtered = results["inventory"][
        ~results["inventory"]["type"].isin(["TimePeriod", "Trench"])
    ]

    colors1 = plt.cm.Pastel1(range(len(df_filtered)))
    bars1 = ax1.bar(
        df_filtered["type"],
        df_filtered["count"],
        color=colors1,
        edgecolor="black",
        linewidth=1.5,
    )
    ax1.set_title("Feature Type Inventory", fontsize=15, fontweight="bold", pad=10)
    ax1.set_ylabel("Count", fontweight="bold", fontsize=13)
    plt.setp(ax1.xaxis.get_majorticklabels(), rotation=45, ha="right", fontsize=11)
    ax1.grid(axis="y", alpha=0.3, linestyle="--")

    # ========================================================================
    # Panel 2: Stratigraphic Sequence (with logarithmic scale)
    # ========================================================================
    ax2 = fig.add_subplot(gs[0, 1])

    # Sort by count for better readability
    df_strat_sorted = results["stratigraphy"].sort_values("count", ascending=True)
    colors2 = plt.cm.Set3(range(len(df_strat_sorted)))

    # Use explicit y-positions to avoid matplotlib label artifacts
    y_positions = range(len(df_strat_sorted))
    bars2 = ax2.barh(
        y_positions,
        df_strat_sorted["count"],
        color=colors2,
        edgecolor="black",
        linewidth=1.5,
    )

    # Set labels explicitly
    ax2.set_yticks(y_positions)
    ax2.set_yticklabels(df_strat_sorted["period"], fontsize=12)

    ax2.set_title("Stratigraphic Sequence", fontsize=15, fontweight="bold", pad=10)
    ax2.set_xlabel("Number of Features (log scale)", fontweight="bold", fontsize=13)

    # Logarithmic scale for wide value ranges (1 to 164)
    ax2.set_xscale("log")
    ax2.grid(axis="x", alpha=0.3, linestyle="--", which="both")

    # ========================================================================
    # Panel 3: Spatial Distribution by Trench
    # ========================================================================
    ax3 = fig.add_subplot(gs[1, 0])

    colors3 = ["#8dd3c7", "#fb8072"]

    # Use explicit x-positions to avoid matplotlib label artifacts
    x_positions = range(len(results["trench"]))
    bars3 = ax3.bar(
        x_positions,
        results["trench"]["count"],
        color=colors3,
        edgecolor="black",
        linewidth=1.5,
    )

    # Set labels explicitly
    ax3.set_xticks(x_positions)
    ax3.set_xticklabels(results["trench"]["trench"], fontsize=12)

    ax3.set_title(
        "Spatial Distribution by Trench", fontsize=15, fontweight="bold", pad=10
    )
    ax3.set_ylabel("Count", fontweight="bold", fontsize=13)
    ax3.grid(axis="y", alpha=0.3, linestyle="--")

    # ========================================================================
    # Panel 4: Preservation State (Pie Chart)
    # ========================================================================
    ax4 = fig.add_subplot(gs[1, 1])

    colors4 = ["#8dd3c7", "#fb8072"]
    wedges4, texts4, autotexts4 = ax4.pie(
        results["koetbullar"]["count"],
        labels=results["koetbullar"]["condition"],
        autopct="%1.1f%%",
        colors=colors4,
        startangle=90,
        textprops={"fontsize": 13, "weight": "bold"},
    )
    ax4.set_title(
        "Kötbullar Preservation State", fontsize=15, fontweight="bold", pad=10
    )

    for autotext in autotexts4:
        autotext.set_color("white")
        autotext.set_fontweight("bold")
        autotext.set_fontsize(12)

    # ========================================================================
    # Save
    # ========================================================================
    fig.suptitle(
        "FAIRyland Archaeological Dataset - Summary Dashboard",
        fontsize=20,
        fontweight="bold",
        y=0.98,
    )

    output_path = os.path.join(out_dir, "fairyland_summary_dashboard.jpg")
    plt.savefig(output_path, dpi=300, format="jpg", bbox_inches="tight")
    print(f"✓ Saved: {output_path}")
    plt.close()


# ============================================================================
# DOCUMENTATION EXPORT
# ============================================================================


def export_query_documentation(out_dir):
    """
    Export SPARQL queries as formatted markdown documentation.

    Args:
        out_dir (str): Output directory path
    """
    print("Exporting Query Documentation...")
    print("-" * 70)

    md_content = """# FAIRyland Dashboard SPARQL Queries

This document contains the SPARQL queries used to generate the dashboard visualization.

"""

    for i, (key, query_info) in enumerate(DASHBOARD_QUERIES.items(), 1):
        md_content += f"""## Query {i}: {query_info['title']}

**Description:** {query_info['description']}

```sparql
{query_info['sparql']}
```

---

"""

    output_path = os.path.join(out_dir, "dashboard_queries.md")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(md_content)

    print(f"✓ Saved: {output_path}")


# ============================================================================
# MAIN EXECUTION
# ============================================================================


def main():
    """Main execution function."""
    # Setup output directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    out_dir = os.path.join(script_dir, "out")
    os.makedirs(out_dir, exist_ok=True)

    # Load RDF data
    g = load_fairyland_graph()

    # Execute SPARQL queries
    results = execute_dashboard_queries(g)

    # Create visualization
    create_dashboard(results, out_dir)

    # Export documentation
    export_query_documentation(out_dir)

    # Summary
    print()
    print("=" * 70)
    print("✓ Dashboard Generation Complete".center(70))
    print("=" * 70)
    print()
    print("Output files:")
    print(f"  → fairyland_summary_dashboard.jpg  (300 DPI visualization)")
    print(f"  → dashboard_queries.md             (SPARQL documentation)")
    print()
    print(f"Directory: {out_dir}")
    print()


if __name__ == "__main__":
    main()
