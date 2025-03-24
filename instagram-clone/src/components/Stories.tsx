"use client";

import Image from "next/image";
import { useState } from "react";
import { mockStories } from "@/lib/auth-context";

export default function Stories() {
  const [stories, setStories] = useState(mockStories);

  const viewStory = (id: number) => {
    setStories(
      stories.map(story =>
        story.id === id ? { ...story, viewed: true } : story
      )
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 overflow-x-auto">
      <div className="flex space-x-4">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center cursor-pointer" onClick={() => viewStory(story.id)}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${story.viewed ? 'bg-gray-200' : 'bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] p-[2px]'}`}>
              <div className="bg-white p-[2px] rounded-full">
                <Image
                  src={story.image}
                  alt={story.username}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs mt-1 truncate w-16 text-center">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
