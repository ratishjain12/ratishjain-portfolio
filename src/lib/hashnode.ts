import { XMLParser } from "fast-xml-parser";

const RSS_URL = `https://${process.env.HASHNODE_PUBLICATION_HOST || "blog.ratishfolio.com"}/rss.xml`;
const WORDS_PER_MINUTE = 200;

export interface HashnodeTag {
  name: string;
  slug: string;
}

export interface HashnodePostSummary {
  title: string;
  brief: string;
  slug: string;
  coverImage: { url: string } | null;
  publishedAt: string;
  readTimeInMinutes: number;
  tags: HashnodeTag[];
}

export interface HashnodePost extends HashnodePostSummary {
  contentHtml: string;
}

interface RssItem {
  title: string;
  description: string;
  link: string;
  category?: string | string[];
  pubDate: string;
  enclosure?: { "@_url"?: string };
  "content:encoded"?: string;
}

function slugify(link: string): string {
  return link.replace(/\/$/, "").split("/").pop() ?? link;
}

function toTags(category: RssItem["category"]): HashnodeTag[] {
  const names = Array.isArray(category) ? category : category ? [category] : [];
  return names.map((name) => ({ name, slug: slugify(name.toLowerCase().replace(/\s+/g, "-")) }));
}

function estimateReadTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

async function fetchFeed(): Promise<RssItem[]> {
  const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch RSS feed: ${res.status}`);
  }
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false });
  const parsed = parser.parse(xml);
  const items = parsed?.rss?.channel?.item ?? [];
  return Array.isArray(items) ? items : [items];
}

function toSummary(item: RssItem): HashnodePostSummary {
  const content = item["content:encoded"] ?? "";
  return {
    title: item.title,
    brief: item.description,
    slug: slugify(item.link),
    coverImage: item.enclosure?.["@_url"] ? { url: item.enclosure["@_url"] } : null,
    publishedAt: item.pubDate,
    readTimeInMinutes: estimateReadTime(content),
    tags: toTags(item.category),
  };
}

export async function getPosts(): Promise<HashnodePostSummary[]> {
  const items = await fetchFeed();
  return items.map(toSummary);
}

export async function getPostBySlug(slug: string): Promise<HashnodePost | null> {
  const items = await fetchFeed();
  const item = items.find((entry) => slugify(entry.link) === slug);
  if (!item) return null;

  return {
    ...toSummary(item),
    contentHtml: item["content:encoded"] ?? "",
  };
}
