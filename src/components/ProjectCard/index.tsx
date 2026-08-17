import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video: string | null;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  video,
  links,
  className,
  featured,
}: Props) {
  const media = video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className={cn(
        "pointer-events-none w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105",
        featured ? "aspect-[16/9]" : "aspect-[4/3]"
      )} // needed because random black line at bottom of video
    />
  ) : (
    image && (
      <Image
        src={image}
        alt={title}
        width={800}
        height={450}
        className={cn(
          "w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105",
          featured ? "aspect-[16/9]" : "aspect-[4/3]"
        )}
      />
    )
  );

  const linkBadges = links && links.length > 0 && (
    <div className="flex flex-row flex-wrap items-center gap-1.5">
      {links.map((l, idx) => (
        <Link href={l.href} key={idx} target="_blank">
          <Badge className="flex gap-2 px-2 py-1 bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-[10px]">
            {l.icon}
          </Badge>
        </Link>
      ))}
    </div>
  );

  const tagBadges = tags && tags.length > 0 && (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <Badge className="px-1.5 py-0 text-[10px]" variant="secondary" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );

  if (featured) {
    return (
      <Card className="group flex flex-col overflow-hidden border bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ease-out hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10">
        <Link href={href || "#"} className={cn("block cursor-pointer overflow-hidden", className)}>
          {media}
        </Link>
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5">
            <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
            {tagBadges}
          </div>
          <div className="shrink-0 sm:pl-4">{linkBadges}</div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="group flex h-full flex-col overflow-hidden border bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ease-out hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10">
      <Link href={href || "#"} className={cn("block cursor-pointer overflow-hidden", className)}>
        {media}
      </Link>
      <CardHeader className="px-4 pt-4">
        <div className="space-y-1.5">
          <CardTitle className="text-base">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-3 px-4 pb-4 pt-1">
        {tagBadges}
        {linkBadges}
      </CardContent>
    </Card>
  );
}
