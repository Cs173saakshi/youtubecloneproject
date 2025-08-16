import React, { useState } from "react";

const dummyComments = [
  {
    id: 1,
    user: "Sachin",
    text: "Great video! Learned a lot.",
    time: "2h ago",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    user: "Ram",
    text: "Thanks for sharing!",
    time: "1h ago",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
];

export default function Comments() {
  const [comments, setComments] = useState(dummyComments);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      {
        id: Date.now(),
        user: "You",
        text: newComment.trim(),
        time: "Just now",
        avatar: "https://i.pravatar.cc/40?img=5",
      },
    ]);
    setNewComment("");
  };

  return (
    <section className="comments" aria-label="Video comments">
      <h3>Comments ({comments.length})</h3>

      <form onSubmit={handleSubmit}>
        <textarea
          aria-label="Write a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="3"
          placeholder="Add a public comment..."
        />
        <button type="submit" disabled={!newComment.trim()}>
          Comment
        </button>
      </form>

      <ul>
        {comments.map(({ id, user, text, time, avatar }) => (
          <li key={id}>
            <img src={avatar} alt={user} />
            <div className="comment-body">
              <strong>{user}</strong> <span className="time">{time}</span>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .comments {
          max-width: 700px;
          margin-top: 24px;
          font-family: Arial, sans-serif;
        }
        h3 {
          margin-bottom: 16px;
        }
        form {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }
        textarea {
          resize: vertical;
          font-size: 1rem;
          padding: 8px;
          border-radius: 6px;
          border: 1px solid #ccc;
          min-height: 60px;
          margin-bottom: 8px;
        }
        button {
          align-self: flex-end;
          background-color: #cc0000;
          color: white;
          border: none;
          padding: 8px 14px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
        }
        button:disabled {
          background-color: #ddd;
          cursor: not-allowed;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 16px;
        }
        img {
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
        .comment-body {
          background: #f8f8f8;
          padding: 8px 12px;
          border-radius: 8px;
          flex: 1;
        }
        .comment-body strong {
          font-size: 0.95rem;
        }
        .comment-body .time {
          font-size: 0.8rem;
          color: gray;
          margin-left: 8px;
        }
        .comment-body p {
          margin: 4px 0 0;
        }
      `}</style>
    </section>
  );
}
