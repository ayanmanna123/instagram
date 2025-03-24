import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Meta", href: "https://about.meta.com/" },
    { name: "About", href: "https://about.instagram.com/" },
    { name: "Blog", href: "https://about.instagram.com/blog/" },
    { name: "Jobs", href: "https://about.instagram.com/about-us/careers" },
    { name: "Help", href: "https://help.instagram.com/" },
    { name: "API", href: "https://developers.facebook.com/docs/instagram" },
    { name: "Privacy", href: "/legal/privacy/" },
    { name: "Consumer Health Privacy", href: "/legal/privacy/health_privacy_policy/" },
    { name: "Terms", href: "/legal/terms/" },
    { name: "Locations", href: "/explore/locations/" },
    { name: "Instagram Lite", href: "/web/lite/" },
    { name: "Threads", href: "https://www.threads.net/" },
    { name: "Contact Uploading & Non-Users", href: "https://www.facebook.com/help/instagram/261704639352628" },
    { name: "Meta Verified", href: "/accounts/meta_verified/?entrypoint=web_footer" }
  ];

  const languages = [
    "English", "Spanish", "Portuguese", "French", "German", "Italian", "Turkish", "Russian", "Japanese", "Korean"
  ];

  return (
    <footer className="mt-8 mb-6 mx-auto px-4 max-w-5xl text-xs text-gray-500">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="relative group">
          <button className="flex items-center hover:underline">
            English <span className="ml-1">▾</span>
          </button>

          {/* Hidden language selector dropdown - would be implemented with state in a real app */}
          <div className="hidden absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-md shadow-lg w-40 p-2 group-hover:hidden">
            {languages.map((language) => (
              <button key={language} className="block w-full text-left p-1 hover:bg-gray-100 rounded">
                {language}
              </button>
            ))}
          </div>
        </div>

        <span>© 2025 Instagram from Meta</span>
      </div>
    </footer>
  );
}
