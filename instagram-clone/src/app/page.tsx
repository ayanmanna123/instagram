"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";
import { useAuth } from "@/lib/auth-context";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  // If user is already logged in, redirect to feed
  useEffect(() => {
    if (user && !isLoading) {
      router.push("/feed");
    }
  }, [user, isLoading, router]);

  // If authentication is still loading or user is logged in, show a loading state
  if (isLoading || user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <LoadingSpinner size="large" />
        <p className="mt-4 text-gray-500">Loading Instagram...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex flex-grow flex-col md:flex-row items-center justify-center py-6 px-4 md:px-8 gap-8">
        <div className="hidden md:block relative w-[380px] h-[580px]">
          <Image
            src="https://ext.same-assets.com/155034637/1153679314.png"
            alt="Instagram on mobile"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col items-center max-w-[350px] w-full">
          <LoginForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
