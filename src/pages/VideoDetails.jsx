import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getVideoById,
  getRelatedVideos,
} from "../services/youtube";
import VideoPlayer from "../components/VideoPlayer";
import RelatedVideos from "../components/RelatedVideos";
import LikeDislike from "../components/LikeDislike";
import Comments from "../components/Comments";

export default function VideoDetails() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([getVideoById(id), getRelatedVideos(id)]).then(
      ([videoData, related]) => {
        setVideo(videoData);
        setRelatedVideos(related);
        setLoading(false);
      }
    );
  }, [id]);

  if (loading) return <p style={{ padding: 16 }}>Loading video...</p>;
  if (!video) return <p style={{ padding: 16 }}>Video not found.</p>;

  return (
    <main style={{ maxWidth: 1000, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <VideoPlayer video={video} />
      <LikeDislike />
      <Comments />
      <RelatedVideos videos={relatedVideos} />
    </main>
  );
}
