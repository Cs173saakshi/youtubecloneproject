import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import VideoList from "../components/VideoList";
import { getVideosByCategory } from "../services/youtube";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getVideosByCategory(selectedCategory).then((data) => {
      setVideos(data);
      setLoading(false);
    });
  }, [selectedCategory]);

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 52px)" }}>
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <main style={{ flexGrow: 1, overflowY: "auto" }}>
        <h2 style={{ margin: 16 }}>{selectedCategory} Videos</h2>
        {loading ? (
          <p style={{ padding: 16 }}>Loading videos...</p>
        ) : (
          <VideoList videos={videos} />
        )}
      </main>
    </div>
  );
}
