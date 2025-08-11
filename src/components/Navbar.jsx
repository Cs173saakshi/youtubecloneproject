import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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
        backgroundColor: "#1a73e8",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "white",
          textDecoration: "none",
        }}
        aria-label="StreamSphere Home"
      >
        <img
          src="/logo.svg"
          alt="StreamSphere Logo"
          style={{ width: 100, height: 40, objectFit: "contain" }}
        />
      </Link>

      <form onSubmit={handleSubmit} style={{ flexGrow: 1, display: "flex" }}>
        <input
          type="search"
          placeholder="Search videos"
          aria-label="Search videos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "4px 0 0 4px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />
        <button
          type="submit"
          aria-label="Search"
          style={{
            padding: "8px 16px",
            backgroundColor: "#1565c0",
            border: "none",
            borderRadius: "0 4px 4px 0",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🔍
        </button>
      </form>
    </nav>
  );
}
