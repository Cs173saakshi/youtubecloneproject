import React from "react";

export default function VideoPlayer({ video }) {
  if (!video) return null;

  // Extract YouTube video id from our mock video id (format: category-number)
  // Here we just use the thumbnail video url's video id instead
  // So let's extract video id from thumbnail URL for embed

  const urlParts = video.thumbnail.split("/vi/");
  let videoId = "";
  if (urlParts.length > 1) {
    videoId = urlParts[1].split("/")[0];
  }

  return (
    <div style={{ maxWidth: 800, margin: "20px auto" }}>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%", // 16:9 aspect ratio
          height: 0,
          overflow: "hidden",
          borderRadius: 12,
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>

      <h2>{video.title}</h2>
      <p style={{ fontWeight: "bold" }}>{video.channelTitle}</p>
      <p>{video.views} • {video.publishedAt}</p>
      <p style={{ marginTop: 16 }}>{video.description}</p>
    </div>
  );
}
