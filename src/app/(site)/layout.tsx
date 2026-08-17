import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/client";
import { siteSettingsQuery } from "@/sanity/queries";
import { emptySiteSettings, type SiteSettings } from "@/sanity/types";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch<SiteSettings | null>(
    siteSettingsQuery,
    {},
    { next: { revalidate: 3600 } }
  );

  if (!settings?.profileImageUrl) return {};

  return { openGraph: { images: [settings.profileImageUrl] } };
}

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch<SiteSettings | null>(
    siteSettingsQuery,
    {},
    { next: { revalidate: 3600 } }
  ) ?? emptySiteSettings;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-12%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        </div>
        {children}
        <Navbar settings={settings} />
      </TooltipProvider>
    </ThemeProvider>
  );
}
