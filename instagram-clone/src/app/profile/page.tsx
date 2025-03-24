"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import Image from "next/image";
import LoadingSpinner from "@/components/LoadingSpinner";
import Sidebar from "@/components/Sidebar";
import { mockPosts } from "@/lib/auth-context";

export default function ProfilePage() {
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
        <p className="mt-4 text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="pl-[245px] pt-8 pb-8">
        <div className="max-w-[935px] mx-auto">
          {/* Profile header */}
          <div className="flex mb-10">
            {/* Profile picture */}
            <div className="mr-8 flex-shrink-0">
              <div className="w-36 h-36 rounded-full overflow-hidden border border-gray-200">
                <Image
                  src={user.profilePic}
                  alt={user.name}
                  width={144}
                  height={144}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Profile info */}
            <div className="flex-grow">
              <div className="flex items-center mb-4">
                <h2 className="text-xl mr-4">{user.handle}</h2>
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm font-semibold hover:bg-blue-600">
                  Edit profile
                </button>
                <button className="ml-2 bg-gray-200 text-black px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-300">
                  View archive
                </button>
                <button className="ml-2 text-gray-700">
                  <svg aria-label="Options" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                  </svg>
                </button>
              </div>

              {/* Stats */}
              <div className="flex space-x-8 mb-4">
                <div>
                  <span className="font-semibold">{user.posts}</span> posts
                </div>
                <div>
                  <span className="font-semibold">{user.followers}</span> followers
                </div>
                <div>
                  <span className="font-semibold">{user.following}</span> following
                </div>
              </div>

              {/* Bio */}
              <div className="text-sm">
                <div className="font-semibold">{user.name}</div>
                <p className="mt-1">
                  This is a demo Instagram profile. In a real app, this would be your bio.
                </p>
              </div>
            </div>
          </div>

          {/* Profile tabs */}
          <div className="border-t border-gray-200">
            <div className="flex justify-center">
              <button className="px-4 py-3 flex items-center text-xs font-semibold text-gray-800 uppercase border-t border-black">
                <svg aria-label="" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="12" role="img" viewBox="0 0 24 24" width="12">
                  <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect>
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
                </svg>
                <span className="ml-1">POSTS</span>
              </button>
              <button className="px-4 py-3 flex items-center text-xs font-semibold text-gray-500 uppercase">
                <svg aria-label="" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="12" role="img" viewBox="0 0 24 24" width="12">
                  <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                </svg>
                <span className="ml-1">SAVED</span>
              </button>
              <button className="px-4 py-3 flex items-center text-xs font-semibold text-gray-500 uppercase">
                <svg aria-label="" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="12" role="img" viewBox="0 0 24 24" width="12">
                  <path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                </svg>
                <span className="ml-1">TAGGED</span>
              </button>
            </div>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-3 gap-1 mt-1">
            {mockPosts.map((post) => (
              <div key={post.id} className="aspect-square relative cursor-pointer group">
                <Image
                  src={post.postImage}
                  alt="Post"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-4 transition-opacity">
                  <div className="flex items-center text-white font-semibold">
                    <svg aria-label="Like" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="24" role="img" viewBox="0 0 24 24" width="24">
                      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                    </svg>
                    <span className="ml-1">{post.likes}</span>
                  </div>
                  <div className="flex items-center text-white font-semibold">
                    <svg aria-label="Comment" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="24" role="img" viewBox="0 0 24 24" width="24">
                      <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="ml-1">{post.comments}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Add some placeholder posts */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={`placeholder-${index}`} className="aspect-square bg-gray-100"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
