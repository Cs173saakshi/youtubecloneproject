import React from "react";

const categories = ["All", "Trending", "Gaming", "Music", "Technology"];

export default function Sidebar({ selectedCategory, onSelectCategory }) {
  return (
    <aside
      style={{
        minWidth: 160,
        borderRight: "1px solid #ccc",
        padding: "12px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3>Categories</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {categories.map((cat) => (
          <li key={cat} style={{ marginBottom: 12 }}>
            <button
              onClick={() => onSelectCategory(cat)}
              style={{
                backgroundColor: cat === selectedCategory ? "#cc0000" : "transparent",
                color: cat === selectedCategory ? "#fff" : "#222",
                border: "none",
                padding: "8px 12px",
                borderRadius: 6,
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
                fontWeight: cat === selectedCategory ? "bold" : "normal",
              }}
              aria-current={cat === selectedCategory ? "true" : undefined}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
