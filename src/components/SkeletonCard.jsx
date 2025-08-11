import React from "react";

export default function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="thumbnail-skeleton" />
      <div className="info-skeleton">
        <div className="avatar-skeleton" />
        <div className="text-skeleton">
          <div className="line short" />
          <div className="line" />
          <div className="line extra-short" />
        </div>
      </div>

      <style jsx>{`
        .skeleton-card {
          width: 320px;
          border-radius: 12px;
          background: #eee;
          animation: pulse 1.5s infinite ease-in-out;
        }
        .thumbnail-skeleton {
          width: 100%;
          height: 180px;
          background: #ddd;
          border-radius: 12px 12px 0 0;
        }
        .info-skeleton {
          display: flex;
          padding: 12px;
          gap: 12px;
          align-items: center;
        }
        .avatar-skeleton {
          width: 40px;
          height: 40px;
          background: #ddd;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .text-skeleton {
          flex-grow: 1;
        }
        .line {
          height: 12px;
          background: #ddd;
          margin: 8px 0;
          border-radius: 4px;
        }
        .line.short {
          width: 50%;
        }
        .line.extra-short {
          width: 30%;
        }
        @keyframes pulse {
          0% {
            background-color: #eee;
          }
          50% {
            background-color: #ddd;
          }
          100% {
            background-color: #eee;
          }
        }
      `}</style>
    </div>
  );
}
