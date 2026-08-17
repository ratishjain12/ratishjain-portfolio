import BlurFade from "@/components/ui/blur-fade";
import { BlogCard } from "@/components/BlogCard";
import { getPosts } from "@/lib/hashnode";

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col gap-[30px]">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-[700] px-3 py-1 text-sm">
                My Blog
              </div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-black mb-4">
                <span className="text-violet-400">{`{ `}</span>
                Blog
                <span className="text-violet-400">{` }`}</span>
              </h1>
              <p className="text-foreground max-w-2xl text-sm md:text-lg">
                Thoughts on cloud, AI, and software engineering.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {posts.map((post, id) => (
            <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <BlogCard post={post} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
