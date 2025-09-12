"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Footer Content */}
      <div className="bg-[#FDF6EC] dark:bg-[#2A2A2A] pt-8 md:pt-12 lg:pt-16 pb-32 text-gray-800 dark:text-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
            {/* Left Side - Name/Brand */}
            <div className="space-y-4 text-center sm:text-left">
              <p className="text-sm max-w-md text-gray-600 dark:text-gray-400">
                "Crafting digital experiences with code, turning complex
                problems into elegant solutions, one pixel at a time."
              </p>
            </div>
          </div>
          <div className="mt-3 flex  justify-center sm:justify-start">
            <Link href={"https://devcon.hashnode.dev/"}>
              <div className="bg-black dark:bg-orange-500 sm:mx-0 text-white font-mono text-xl  px-3 py-2 rounded-lg">
                Read My Blogs
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
