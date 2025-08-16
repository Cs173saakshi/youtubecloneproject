
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const categories = ["All", "Trending", "Gaming", "Music", "Technology"];

export default function Sidebar({ selectedCategory, onSelectCategory }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <aside
      style={{
        minWidth: 180,
        borderRight: darkMode ? "1px solid #444" : "1px solid #ccc",
        padding: "16px",
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: darkMode ? "#121212" : "#f9f9f9",
        color: darkMode ? "#eee" : "#222",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      <h3
        style={{
          marginBottom: 16,
          fontSize: "1.2rem",
          borderBottom: darkMode ? "1px solid #333" : "1px solid #ddd",
          paddingBottom: 8,
          fontWeight: "700",
          color: darkMode ? "#f1f1f1" : "#111",
        }}
      >
        Categories
      </h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {categories.map((cat) => (
          <li key={cat} style={{ marginBottom: 12 }}>
            <button
              onClick={() => onSelectCategory(cat)}
              style={{
                backgroundColor:
                  cat === selectedCategory
                    ? "#cc0000"
                    : darkMode
                    ? "#1e1e1e"
                    : "transparent",
                color:
                  cat === selectedCategory
                    ? "#fff"
                    : darkMode
                    ? "#ddd"
                    : "#222",
                border: "none",
                padding: "10px 14px",
                borderRadius: 8,
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
                fontWeight: cat === selectedCategory ? "bold" : "500",
                transition: "all 0.2s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  cat === selectedCategory
                    ? "#b00000"
                    : darkMode
                    ? "#2a2a2a"
                    : "#f1f1f1")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  cat === selectedCategory
                    ? "#cc0000"
                    : darkMode
                    ? "#1e1e1e"
                    : "transparent")
              }
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
