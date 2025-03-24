"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { mockSuggestions } from "@/lib/auth-context";

export default function Suggestions() {
  const { user } = useAuth();
  const [suggestions, setSuggestions] = useState(mockSuggestions);
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);

  const handleFollow = (id: number) => {
    if (followedUsers.includes(id)) {
      setFollowedUsers(followedUsers.filter(userId => userId !== id));
    } else {
      setFollowedUsers([...followedUsers, id]);
    }
  };

  return (
    <div className="w-full md:w-[320px] pt-6">
      {/* User info */}
      {user && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={user.profilePic}
                alt={user.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="ml-3">
              <Link href="/profile" className="text-sm font-semibold">
                {user.handle}
              </Link>
              <p className="text-sm text-gray-500">{user.name}</p>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-500">
            Switch
          </button>
        </div>
      )}

      {/* Suggestions header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-500">Suggested for you</span>
        <button className="text-xs font-semibold">See All</button>
      </div>

      {/* Suggestion list */}
      <div className="space-y-3">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={suggestion.image}
                  alt={suggestion.username}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="ml-3">
                <Link href="#" className="text-sm font-semibold">
                  {suggestion.username}
                </Link>
                <p className="text-xs text-gray-500">{suggestion.name}</p>
              </div>
            </div>
            <button
              className={`text-xs font-semibold ${followedUsers.includes(suggestion.id) ? 'text-black' : 'text-blue-500'}`}
              onClick={() => handleFollow(suggestion.id)}
            >
              {followedUsers.includes(suggestion.id) ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>

      {/* Footer links */}
      <div className="mt-6 text-xs text-gray-400">
        <div className="flex flex-wrap">
          <Link href="#" className="mr-2 hover:underline">About</Link>
          <span className="mr-2">•</span>
          <Link href="#" className="mr-2 hover:underline">Help</Link>
          <span className="mr-2">•</span>
          <Link href="#" className="mr-2 hover:underline">Press</Link>
          <span className="mr-2">•</span>
          <Link href="#" className="mr-2 hover:underline">API</Link>
          <span className="mr-2">•</span>
          <Link href="#" className="mr-2 hover:underline">Jobs</Link>
          <span className="mr-2">•</span>
          <Link href="#" className="mr-2 hover:underline">Privacy</Link>
          <span className="mr-2">•</span>
          <Link href="#" className="mr-2 hover:underline">Terms</Link>
          <span className="mr-2">•</span>
          <Link href="#" className="mr-2 hover:underline">Locations</Link>
          <span className="mr-2">•</span>
          <Link href="#" className="mr-2 hover:underline">Language</Link>
        </div>
        <p className="mt-4">© 2025 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
}
