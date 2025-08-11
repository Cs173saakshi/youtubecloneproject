import React, { useState } from "react";

export default function LikeDislike() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(true);
    setLiked(false);
  };

  return (
    <div className="like-dislike">
      <button
        aria-pressed={liked}
        onClick={handleLike}
        aria-label="Like video"
        className={liked ? "active" : ""}
      >
        👍
      </button>
      <button
        aria-pressed={disliked}
        onClick={handleDislike}
        aria-label="Dislike video"
        className={disliked ? "active" : ""}
      >
        👎
      </button>

      <style jsx>{`
        .like-dislike {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }
        button {
          font-size: 1.8rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
          color: #555;
        }
        button.active {
          color: #cc0000;
        }
        button:focus {
          outline: 2px solid #cc0000;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
