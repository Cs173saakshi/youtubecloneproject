import React, { useState } from "react";

const dummyComments = [
  {
    id: 1,
    user: "User1",
    text: "Great video! Learned a lot.",
  },
  {
    id: 2,
    user: "User2",
    text: "Thanks for sharing!",
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
      { id: Date.now(), user: "You", text: newComment.trim() },
    ]);
    setNewComment("");
  };

  return (
    <section className="comments" aria-label="Video comments">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit} aria-label="Add a comment">
        <textarea
          aria-label="Write a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="3"
          placeholder="Add a public comment..."
          required
        />
        <button type="submit" disabled={!newComment.trim()}>
          Comment
        </button>
      </form>

      <ul>
        {comments.map(({ id, user, text }) => (
          <li key={id}>
            <strong>{user}</strong>: {text}
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
          margin-bottom: 12px;
        }
        form {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }
        textarea {
          resize: vertical;
          font-family: inherit;
          font-size: 1rem;
          padding: 8px;
          border-radius: 6px;
          border: 1px solid #ccc;
          outline-offset: 2px;
          min-height: 60px;
        }
        textarea:focus {
          border-color: #cc0000;
        }
        button {
          margin-top: 8px;
          align-self: flex-end;
          background-color: #cc0000;
          color: white;
          border: none;
          padding: 8px 14px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:disabled {
          background-color: #ddd;
          cursor: not-allowed;
        }
        button:hover:not(:disabled) {
          background-color: #b30000;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 12px;
          font-size: 0.95rem;
          line-height: 1.3;
        }
      `}</style>
    </section>
  );
}
