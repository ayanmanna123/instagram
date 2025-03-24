"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await login(username, password);

    if (success) {
      // Redirect to the feed page after successful login
      router.push("/feed");
    }
  };

  return (
    <div className="w-full">
      <div className="border border-gray-200 bg-white p-8 mb-3 w-full">
        <div className="flex justify-center mb-8">
          <h1 className="text-5xl font-semibold instagram-logo">Instagram</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Phone number, username, or email"
            className="text-sm p-2 bg-gray-50 border border-gray-200 rounded-sm h-10"
            disabled={isLoading}
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="text-sm p-2 bg-gray-50 border border-gray-200 rounded-sm h-10"
            disabled={isLoading}
          />

          {error && (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          )}

          <Button
            type="submit"
            disabled={!username || !password || isLoading}
            className={`mt-2 font-semibold text-white rounded-lg h-8 ${
              isLoading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <LoadingSpinner size="small" />
                <span className="ml-2">Logging in...</span>
              </span>
            ) : (
              "Log in"
            )}
          </Button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="mx-2 text-gray-500 text-sm font-semibold">OR</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Link href="#" className="flex items-center text-[#385185] font-semibold text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16" height="16" className="mr-2">
              <path fill="#3F51B5" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
              <path fill="#FFFFFF" d="M29.368 24H26v12h-5V24h-3v-4h3v-2.41c.002-3.508 1.459-5.59 5.592-5.59H30v4h-2.287C26.104 16 26 16.6 26 17.723V20h4L29.368 24z" />
            </svg>
            Log in with Facebook
          </Link>

          <Link href="/accounts/password/reset/" className="text-xs text-[#385185]">
            Forgot password?
          </Link>
        </div>
      </div>

      <div className="border border-gray-200 bg-white p-4 w-full flex flex-col items-center text-sm">
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/accounts/emailsignup/" className="text-[#0095f6] font-semibold">
            Sign up
          </Link>
        </p>
      </div>

      <div className="mt-4 w-full text-center">
        <p className="text-sm">Get the app.</p>
        <div className="flex justify-center space-x-2 mt-4">
          <Link href="https://apps.apple.com/app/instagram/id389801252?ct=igweb.unifiedHome.badge&mt=8&pt=428156&vt=lo">
            <Image
              src="https://ext.same-assets.com/155034637/1294075298.png"
              alt="Download on the App Store"
              width={136}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D28596E28-6BB2-435C-A99B-B9DDB8A83405%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
            <Image
              src="https://ext.same-assets.com/155034637/3590352490.png"
              alt="Get it on Google Play"
              width={136}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Demo credentials notice */}
      <div className="text-xs text-gray-500 text-center mt-4 p-2 bg-yellow-50 border border-yellow-100 rounded">
        <p>Demo credentials:</p>
        <p className="font-mono">Username: user@example.com</p>
        <p className="font-mono">Password: password</p>
        <p className="font-mono mt-1">Username: test</p>
        <p className="font-mono">Password: test123</p>
      </div>
    </div>
  );
}
