import React from "react";
import VideoCard from "./VideoCard";

export default function VideoList({ videos }) {
  if (!videos.length)
    return <p style={{ padding: 16 }}>No videos to display.</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 24,
        padding: 16,
        justifyContent: "center",
      }}
    >
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
