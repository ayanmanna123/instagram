"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
  username: string;
  userImage: string;
  postImage: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

export default function Post({ username, userImage, postImage, caption, likes, comments, timeAgo }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would add the comment to the database
    setComment("");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-4">
      {/* Post header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={userImage}
              alt={username}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <Link href="#" className="font-semibold text-sm">
            {username}
          </Link>
          <span className="text-gray-500 text-sm">• {timeAgo}</span>
        </div>
        <button>
          <svg aria-label="More options" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </button>
      </div>

      {/* Post image */}
      <div className="relative aspect-square">
        <Image
          src={postImage}
          fill
          alt="Post"
          className="object-cover"
        />
      </div>

      {/* Post actions */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <button onClick={toggleLike}>
              {isLiked ? (
                <svg aria-label="Unlike" color="rgb(255, 48, 64)" fill="rgb(255, 48, 64)" height="24" role="img" viewBox="0 0 48 48" width="24">
                  <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              ) : (
                <svg aria-label="Like" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                  <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                </svg>
              )}
            </button>
            <button onClick={() => setShowComments(!showComments)}>
              <svg aria-label="Comment" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
            <button>
              <svg aria-label="Share Post" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
              </svg>
            </button>
          </div>
          <button onClick={toggleSave}>
            {isSaved ? (
              <svg aria-label="Remove" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
              </svg>
            ) : (
              <svg aria-label="Save" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
              </svg>
            )}
          </button>
        </div>

        {/* Likes */}
        <div className="font-semibold text-sm mb-2">
          {likes.toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="text-sm mb-2">
          <Link href="#" className="font-semibold mr-1">
            {username}
          </Link>
          {caption}
        </div>

        {/* View comments */}
        {comments > 0 && !showComments && (
          <button
            className="text-gray-500 text-sm mb-2"
            onClick={() => setShowComments(true)}
          >
            View all {comments} comments
          </button>
        )}

        {/* Comments (would be populated from API in a real app) */}
        {showComments && (
          <div className="text-sm max-h-24 overflow-y-auto mb-2">
            <div className="mb-1">
              <Link href="#" className="font-semibold mr-1">
                user123
              </Link>
              Nice photo!
            </div>
            <div className="mb-1">
              <Link href="#" className="font-semibold mr-1">
                another_user
              </Link>
              Love it! 🔥
            </div>
          </div>
        )}

        {/* Add comment */}
        <form onSubmit={handleSubmitComment} className="flex items-center mt-3 border-t border-gray-200 pt-3">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-grow text-sm outline-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {comment.length > 0 && (
            <button
              type="submit"
              className="text-blue-500 font-semibold text-sm"
            >
              Post
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
