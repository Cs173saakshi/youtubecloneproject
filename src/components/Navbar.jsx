import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <nav
      style={{
        background: darkMode
          ? "linear-gradient(90deg, #1e1e1e, #2c3e50)"
          : "linear-gradient(90deg, #1a73e8, #42a5f5)",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
        }}
        aria-label="StreamSphere Home"
      >
        <span
          style={{
            fontSize: "1.8rem",
            fontWeight: "900",
            fontFamily: "'Pacifico', cursive",
            letterSpacing: "1.2px",
            color: darkMode ? "#FFD700" : "#fff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          Stream<span style={{ color: "#FFD700" }}>Sphere</span>
        </span>
      </Link>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        style={{
          flexGrow: 1,
          display: "flex",
          margin: "0 20px",
          maxWidth: "500px",
        }}
      >
        <input
          type="search"
          placeholder="🔍 Search videos..."
          aria-label="Search videos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: "25px 0 0 25px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            background: darkMode ? "#333" : "#fff",
            color: darkMode ? "#f5f5f5" : "#222",
            boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1)",
          }}
        />
        <button
          type="submit"
          aria-label="Search"
          style={{
            padding: "0 20px",
            backgroundColor: darkMode ? "#FFD700" : "#1565c0",
            border: "none",
            borderRadius: "0 25px 25px 0",
            color: darkMode ? "#222" : "white",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background 0.3s ease",
          }}
        >
          🔎
        </button>
      </form>

      <button
        onClick={toggleDarkMode}
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          borderRadius: "25px",
          border: "none",
          cursor: "pointer",
          background: darkMode ? "#f1c40f" : "#333",
          color: darkMode ? "#222" : "#fff",
          fontWeight: "600",
          fontSize: "0.9rem",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}
