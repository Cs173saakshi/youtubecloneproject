import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VideoList from "../components/VideoList";
import { searchVideos } from "../services/youtube";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setVideos([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    searchVideos(query).then((data) => {
      setVideos(data);
      setLoading(false);
    });
  }, [query]);

  return (
    <main style={{ padding: 16, minHeight: "calc(100vh - 52px)" }}>
      <h2>Search results for: "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : videos.length ? (
        <VideoList videos={videos} />
      ) : (
        <p>No videos found.</p>
      )}
    </main>
  );
}
