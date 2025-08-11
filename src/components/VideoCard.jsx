import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <article
      style={{
        width: "320px",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
        cursor: "pointer",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <Link to={`/video/${video.id}`} style={{ display: "block" }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          width="320"
          height="180"
          style={{ display: "block", width: "100%", objectFit: "cover" }}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/320x180?text=No+Thumbnail";
          }}
        />
      </Link>
      <div style={{ display: "flex", padding: 12, gap: 12 }}>
        <img
          src={video.channelAvatar}
          alt={`${video.channelTitle} avatar`}
          width="40"
          height="40"
          style={{ borderRadius: "50%", flexShrink: 0 }}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/40?text=Avatar";
          }}
        />
        <div style={{ flexGrow: 1 }}>
          <h4 style={{ margin: "0 0 6px 0", fontSize: "1rem", lineHeight: 1.2 }}>
            <Link to={`/video/${video.id}`} style={{ color: "#111" }}>
              {video.title}
            </Link>
          </h4>
          <p
            style={{
              margin: 0,
              fontSize: "0.875rem",
              color: "#555",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {video.channelTitle}
          </p>
          <p style={{ margin: 0, fontSize: "0.75rem", color: "#777" }}>
            {video.views} • {video.publishedAt}
          </p>
        </div>
      </div>
    </article>
  );
}
