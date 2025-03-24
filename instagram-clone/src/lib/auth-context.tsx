"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define mock user data for demo purposes
const mockUsers = [
  {
    username: "user@example.com",
    password: "password",
    name: "Ayan Manna",
    handle: "ayan.manna.90834",
    profilePic: "https://ext.same-assets.com/155034637/3742142161.png",
    following: 125,
    followers: 354,
    posts: 42
  },
  {
    username: "test",
    password: "test123",
    name: "Test Account",
    handle: "test_account",
    profilePic: "https://ext.same-assets.com/155034637/3742142161.png",
    following: 87,
    followers: 109,
    posts: 15
  },
];

// Mock stories data
export const mockStories = [
  { id: 1, username: "itzmountain", image: "https://i.pravatar.cc/150?img=1", viewed: false },
  { id: 2, username: "bristi_official", image: "https://i.pravatar.cc/150?img=2", viewed: false },
  { id: 3, username: "aoudumb", image: "https://i.pravatar.cc/150?img=3", viewed: false },
  { id: 4, username: "aniket_chakra", image: "https://i.pravatar.cc/150?img=4", viewed: false },
  { id: 5, username: "adi_x_999", image: "https://i.pravatar.cc/150?img=5", viewed: false },
  { id: 6, username: "__suma__", image: "https://i.pravatar.cc/150?img=6", viewed: false },
  { id: 7, username: "the_star_girl", image: "https://i.pravatar.cc/150?img=7", viewed: false },
  { id: 8, username: "_nexus_og", image: "https://i.pravatar.cc/150?img=8", viewed: false }
];

// Mock suggested accounts
export const mockSuggestions = [
  { id: 1, username: "attasantanu747", name: "Suggested for you", image: "https://i.pravatar.cc/150?img=9" },
  { id: 2, username: "laxmi.chakraborty9", name: "Followed by itz_siddhartha_59", image: "https://i.pravatar.cc/150?img=10" },
  { id: 3, username: "ritam_official_10k", name: "Following rikta__official", image: "https://i.pravatar.cc/150?img=11" },
  { id: 4, username: "soumyadeepkarmakar05", name: "Followed by nar_derek + 4 more", image: "https://i.pravatar.cc/150?img=12" },
  { id: 5, username: "avijitpan6724", name: "Followed by aniketdas_70 + 1 more", image: "https://i.pravatar.cc/150?img=13" }
];

// Mock posts data
export const mockPosts = [
  {
    id: 1,
    username: "closetthreads.07",
    userImage: "https://i.pravatar.cc/150?img=14",
    postImage: "https://i.pravatar.cc/800?img=14",
    caption: "Starting 199/- COMMENT \"LINK\"",
    likes: 1254,
    comments: 78,
    timeAgo: "20h"
  },
  {
    id: 2,
    username: "__suma__",
    userImage: "https://i.pravatar.cc/150?img=6",
    postImage: "https://i.pravatar.cc/800?img=15",
    caption: "Weekend vibes #travel #adventure",
    likes: 845,
    comments: 32,
    timeAgo: "2h"
  },
  {
    id: 3,
    username: "adi_x_999",
    userImage: "https://i.pravatar.cc/150?img=5",
    postImage: "https://i.pravatar.cc/800?img=16",
    caption: "New collection drop! 🔥",
    likes: 2107,
    comments: 155,
    timeAgo: "1d"
  }
];

// Define the shape of our user object
interface User {
  username: string;
  name: string;
  handle: string;
  profilePic: string;
  following: number;
  followers: number;
  posts: number;
}

// Define the shape of our auth context
interface AuthContextType {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component that will wrap our app
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("instagram_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Find user in our mock database
    const foundUser = mockUsers.find(
      user => user.username === username && user.password === password
    );

    if (foundUser) {
      // Create a user object without the password
      const userToStore = {
        username: foundUser.username,
        name: foundUser.name,
        handle: foundUser.handle,
        profilePic: foundUser.profilePic,
        following: foundUser.following,
        followers: foundUser.followers,
        posts: foundUser.posts
      };

      // Store in localStorage and state
      localStorage.setItem("instagram_user", JSON.stringify(userToStore));
      setUser(userToStore);
      setIsLoading(false);
      return true;
    } else {
      setError("Sorry, your password was incorrect. Please double-check your password.");
      setIsLoading(false);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("instagram_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, error, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
