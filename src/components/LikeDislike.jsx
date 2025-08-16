import React, { useState } from "react";

export default function LikeDislike() {
  const [likes, setLikes] = useState(120); 
  const [dislikes, setDislikes] = useState(5); 
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
      if (disliked) {
        setDisliked(false);
        setDislikes(dislikes - 1);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikes(dislikes - 1);
    } else {
      setDisliked(true);
      setDislikes(dislikes + 1);
      if (liked) {
        setLiked(false);
        setLikes(likes - 1);
      }
    }
  };

  return (
    <div className="like-dislike">
      <button
        aria-pressed={liked}
        onClick={handleLike}
        className={liked ? "active" : ""}
      >
        <span className="emoji">👍</span>
        <span className="count">{likes}</span>
      </button>

      <button
        aria-pressed={disliked}
        onClick={handleDislike}
        className={disliked ? "active" : ""}
      >
        <span className="emoji">👎</span>
        <span className="count">{dislikes}</span>
      </button>

      <style jsx>{`
        .like-dislike {
          display: flex;
          gap: 20px;
          margin-top: 16px;
          align-items: center;
        }
        button {
          font-size: 1.2rem;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          color: #555;
          transition: transform 0.2s ease;
        }
        button:hover {
          transform: scale(1.1);
        }
        .emoji {
          transition: color 0.3s ease;
        }
        .count {
          color: #000; /* keep numbers always visible */
        }
        button.active .emoji {
          color: #cc0000; /* only emoji turns red */
        }
        button:focus {
          outline: 2px solid #cc0000;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
