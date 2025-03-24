"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import LoadingSpinner from "@/components/LoadingSpinner";
import Sidebar from "@/components/Sidebar";
import Stories from "@/components/Stories";
import Post from "@/components/Post";
import Suggestions from "@/components/Suggestions";
import { mockPosts } from "@/lib/auth-context";

export default function FeedPage() {
  const { user } = useAuth();
  const router = useRouter();

  // Check if user is logged in, if not redirect to login page
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  // If we're checking auth state or user is not logged in, don't render the page
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <LoadingSpinner size="large" />
        <p className="mt-4 text-gray-500">Loading feed...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="pl-[245px] pt-4 pb-8">
        <div className="max-w-[935px] mx-auto flex gap-6">
          {/* Feed */}
          <div className="w-full max-w-[615px]">
            {/* Stories */}
            <Stories />

            {/* Posts */}
            <div>
              {mockPosts.map((post) => (
                <Post
                  key={post.id}
                  username={post.username}
                  userImage={post.userImage}
                  postImage={post.postImage}
                  caption={post.caption}
                  likes={post.likes}
                  comments={post.comments}
                  timeAgo={post.timeAgo}
                />
              ))}
            </div>
          </div>

          {/* Sidebar (suggestions, etc.) - hidden on mobile */}
          <div className="hidden lg:block">
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
}
