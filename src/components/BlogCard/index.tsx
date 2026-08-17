import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { HashnodePostSummary } from "@/lib/hashnode";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: HashnodePostSummary;
}

export function BlogCard({ post }: Props) {
  return (
    <Card className="group flex flex-col overflow-hidden border bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ease-out h-full hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10">
      {post.coverImage && (
        <Link
          href={`/blog/${post.slug}`}
          className="relative block aspect-video cursor-pointer overflow-hidden"
        >
          <Image
            src={post.coverImage.url}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover object-center brightness-[0.85] transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />
        </Link>
      )}
      <CardHeader className="px-4 pt-4">
        <div className="space-y-1.5">
          <Link href={`/blog/${post.slug}`}>
            <CardTitle className="text-base hover:text-violet-400 transition-colors">
              {post.title}
            </CardTitle>
          </Link>
          <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {post.brief}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-2 px-4 pb-4 pt-1">
        <p className="font-mono text-[10px] text-muted-foreground">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          · {post.readTimeInMinutes} min read
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge
                className="px-1.5 py-0 text-[10px]"
                variant="secondary"
                key={tag.slug}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
