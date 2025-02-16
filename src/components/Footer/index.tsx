"use client";
import Link from "next/link";
import PulsatingButton from "../ui/pulsating-button";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="w-full">
      {/* Footer Content */}
      <div className="bg-[#FDF6EC] dark:bg-[#2A2A2A] py-8 pb-32 container-main text-gray-800 dark:text-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
            {/* Left Side - Name/Brand */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#FF6B00]">
                RATISH JAIN
              </h3>
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
