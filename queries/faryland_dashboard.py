"""
FAIRyland Dashboard for CAA Poster
===================================

This script creates ONLY the Summary Dashboard visualization and exports
the 4 essential SPARQL queries used in the dashboard.

Perfect for poster presentations!

Dataset: ../lod/fairyland.ttl
Author: Florian Thiery
Context: CAA International 2025 - "Cultural Heritage in FAIRyland? How to LODify Geodata in QGIS"

Usage:
    python fairyland_poster_dashboard.py

Output:
    - fairyland_summary_dashboard.jpg (high-res for poster)
    - dashboard_queries.md (formatted queries for poster text)
"""

import rdflib
from rdflib import Graph, Namespace
import pandas as pd
import matplotlib.pyplot as plt
import os

# ============================================================================
# CONFIGURATION
# ============================================================================

DASHBOARD_QUERIES = {
    "query1_feature_inventory": {
        "title": "Feature Type Inventory",
        "position": "Top-Left Panel",
        "sparql": """PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>

SELECT ?type (COUNT(?feature) AS ?count)
WHERE {
  ?feature a ?type .
  FILTER(STRSTARTS(STR(?type), "https://github.com/Research-Squirrel-Engineers/FAIRyland/"))
}
GROUP BY ?type
ORDER BY DESC(?count)""",
        "description": "What types of features were found in FAIRyland?",
    },
    "query2_koetbullar": {
        "title": "Kötbullar Preservation State",
        "position": "Bottom-Right Panel",
        "sparql": """PREFIX fairyland: <https://github.com/Research-Squirrel-Engineers/FAIRyland/>
PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?condition (COUNT(?koetbullar) AS ?count)
WHERE {
  ?koetbullar a fairyland:Koetbullar .
  OPTIONAL { ?koetbullar suni:Condition ?condition }
}
GROUP BY ?condition
ORDER BY DESC(?count)""",
        "description": "What is the preservation state of petrified kangaroo droppings?",
    },
    "query3_stratigraphy": {
        "title": "Stratigraphic Sequence",
        "position": "Top-Right Panel",
        "sparql": """PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?period (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Time_Period ?period .
}
GROUP BY ?period
ORDER BY ?period""",
        "description": "How are features distributed across Minion Period phases?",
    },
    "query4_trench": {
        "title": "Spatial Distribution",
        "position": "Bottom-Left Panel",
        "sparql": """PREFIX suni: <http://www.github.com/sparqlunicorn#>

SELECT ?trench (COUNT(?feature) AS ?count)
WHERE {
  ?feature suni:Trench ?trench .
}
GROUP BY ?trench
ORDER BY DESC(?count)""",
        "description": "Which excavation trenches yielded the most finds?",
    },
}

# ============================================================================
# LOAD DATA
# ============================================================================


def load_fairyland_graph():
    """Load the FAIRyland RDF graph."""
    print("=" * 70)
    print("FAIRyland Dashboard Generator for CAA Poster".center(70))
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
            raise FileNotFoundError(f"Could not find fairyland.ttl")

    print(f"Loading: {ttl_path}")
    g.parse(ttl_path, format="turtle")
    print(f"✓ Loaded {len(g)} triples\n")

    return g


# ============================================================================
# EXECUTE DASHBOARD QUERIES
# ============================================================================


def execute_dashboard_queries(g):
    """Execute the 4 dashboard queries and return results."""
    print("Executing Dashboard Queries...")
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
    print("→ Query 2: Kötbullar Preservation")
    df2 = pd.DataFrame(
        g.query(DASHBOARD_QUERIES["query2_koetbullar"]["sparql"]),
        columns=["condition", "count"],
    )
    df2["condition"] = df2["condition"].apply(lambda x: str(x) if x else "intact")
    df2["count"] = df2["count"].astype(int)
    results["koetbullar"] = df2
    print(f"  Total Kötbullar: {df2['count'].sum()}")

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
# CREATE SUMMARY DASHBOARD
# ============================================================================


def create_poster_dashboard(results, out_dir):
    """Create high-resolution dashboard for poster."""
    print("Creating High-Resolution Dashboard for Poster...")
    print("-" * 70)

    fig = plt.figure(figsize=(20, 12))  # Extra large for poster
    gs = fig.add_gridspec(2, 2, hspace=0.35, wspace=0.3)

    # Top left: Feature inventory
    ax1 = fig.add_subplot(gs[0, 0])
    colors1 = plt.cm.Pastel1(range(len(results["inventory"])))
    bars1 = ax1.bar(
        results["inventory"]["type"],
        results["inventory"]["count"],
        color=colors1,
        edgecolor="black",
        linewidth=1.5,
    )
    ax1.set_title("Feature Type Inventory", fontsize=15, fontweight="bold", pad=10)
    ax1.set_ylabel("Count", fontweight="bold", fontsize=13)
    plt.setp(ax1.xaxis.get_majorticklabels(), rotation=45, ha="right", fontsize=11)
    ax1.grid(axis="y", alpha=0.3, linestyle="--")

    # Top right: Stratigraphy
    ax2 = fig.add_subplot(gs[0, 1])
    colors2 = plt.cm.Pastel2(range(len(results["stratigraphy"])))
    bars2 = ax2.barh(
        results["stratigraphy"]["period"],
        results["stratigraphy"]["count"],
        color=colors2,
        edgecolor="black",
        linewidth=1.5,
    )
    ax2.set_title("Stratigraphic Sequence", fontsize=15, fontweight="bold", pad=10)
    ax2.set_xlabel("Number of Features", fontweight="bold", fontsize=13)
    ax2.grid(axis="x", alpha=0.3, linestyle="--")

    # Bottom left: Trench distribution
    ax3 = fig.add_subplot(gs[1, 0])
    colors3 = ["#8dd3c7", "#fb8072"]
    bars3 = ax3.bar(
        results["trench"]["trench"],
        results["trench"]["count"],
        color=colors3,
        edgecolor="black",
        linewidth=1.5,
    )
    ax3.set_title(
        "Spatial Distribution by Trench", fontsize=15, fontweight="bold", pad=10
    )
    ax3.set_ylabel("Number of Features", fontweight="bold", fontsize=13)
    ax3.grid(axis="y", alpha=0.3, linestyle="--")

    # Add value labels
    for bar in bars3:
        height = bar.get_height()
        ax3.text(
            bar.get_x() + bar.get_width() / 2.0,
            height + 2,
            f"{int(height)}",
            ha="center",
            va="bottom",
            fontweight="bold",
            fontsize=12,
        )

    # Bottom right: Kötbullar condition
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

    # Overall title
    fig.suptitle(
        "FAIRyland Archaeological Dataset - Summary Dashboard",
        fontsize=20,
        fontweight="bold",
        y=0.98,
    )

    # Save high-resolution version
    output_path = os.path.join(out_dir, "fairyland_summary_dashboard.jpg")
    plt.savefig(output_path, dpi=300, format="jpg", bbox_inches="tight")
    print(f"✓ Saved: {output_path}")
    plt.close()


# ============================================================================
# EXPORT QUERIES AS MARKDOWN
# ============================================================================


def export_queries_markdown(out_dir):
    """Export dashboard queries as formatted markdown for poster."""
    print("Exporting SPARQL Queries for Poster...")
    print("-" * 70)

    md_content = """# FAIRyland Dashboard SPARQL Queries

**For CAA International 2025 Poster**

These four SPARQL queries power the Summary Dashboard visualization.

---

"""

    for i, (key, query_info) in enumerate(DASHBOARD_QUERIES.items(), 1):
        md_content += f"""## Query {i}: {query_info['title']}

**Dashboard Position:** {query_info['position']}  
**Question:** {query_info['description']}

```sparql
{query_info['sparql']}
```

**Result:** This query generates the data for the {query_info['position'].lower()} of the dashboard.

---

"""

    md_content += """## How to Use These Queries

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
"""

    output_path = os.path.join(out_dir, "dashboard_queries.md")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(md_content)

    print(f"✓ Saved: {output_path}")


# ============================================================================
# MAIN
# ============================================================================


def main():
    # Setup
    script_dir = os.path.dirname(os.path.abspath(__file__))
    out_dir = os.path.join(script_dir, "out")
    os.makedirs(out_dir, exist_ok=True)

    # Load data
    g = load_fairyland_graph()

    # Execute queries
    results = execute_dashboard_queries(g)

    # Create dashboard
    create_poster_dashboard(results, out_dir)

    # Export query documentation
    export_queries_markdown(out_dir)

    print()
    print("=" * 70)
    print("✓ Poster Dashboard Creation Complete!".center(70))
    print("=" * 70)
    print()
    print("Created files:")
    print(f"  → fairyland_summary_dashboard.jpg  (high-res for poster)")
    print(f"  → dashboard_queries.md             (formatted queries)")
    print()
    print(f"Output directory: {out_dir}")
    print()


if __name__ == "__main__":
    main()
