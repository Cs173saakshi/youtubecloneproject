import React from "react";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ videos }) {
  if (!videos.length) return null;

  return (
    <section style={{ maxWidth: 800, margin: "40px auto 20px", fontFamily: "Arial, sans-serif" }}>
      <h3>Related Videos</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
