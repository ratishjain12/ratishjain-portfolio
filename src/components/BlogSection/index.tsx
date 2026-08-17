import BlurFade from "../ui/blur-fade";
import { BlogCard } from "@/components/BlogCard";
import { getPosts } from "@/lib/hashnode";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;
const LATEST_POSTS_COUNT = 3;

const BlogSection = async () => {
  const posts = (await getPosts()).slice(0, LATEST_POSTS_COUNT);

  if (posts.length === 0) return null;

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col gap-[30px]">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-[700] px-3 py-1 text-sm">
              From the Blog
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-black mb-4">
              <span className="text-violet-400">{`{ `}</span>
              Recent writing
              <span className="text-violet-400">{` }`}</span>
            </h1>
            <p className="text-foreground max-w-2xl text-sm md:text-lg">
              I write about cloud architecture, AI engineering, and the
              occasional deep dive when something breaks in an interesting
              way.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {posts.map((post, id) => (
            <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
              <BlogCard post={post} />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="flex justify-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-violet-500/30 px-5 py-2.5 text-sm font-medium text-violet-300 transition-colors hover:bg-violet-500/10 hover:text-violet-200"
            >
              See all articles
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default BlogSection;
