import { Badge } from "@/components/ui/badge";
import { getPostBySlug, getPosts } from "@/lib/hashnode";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col gap-6">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
            {post.title}
          </h1>
          <p className="font-mono text-sm text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            · {post.readTimeInMinutes} min read
          </p>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <Badge variant="secondary" key={tag.slug}>
                  {tag.name}
                </Badge>
              ))}
            </div>
          )}
        </div>
        {post.coverImage && (
          <Image
            src={post.coverImage.url}
            alt={post.title}
            width={1000}
            height={520}
            className="w-full rounded-lg object-cover"
            priority
          />
        )}
        <div
          className="prose max-w-full dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
