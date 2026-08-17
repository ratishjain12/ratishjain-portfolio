import BlurFade from "../ui/blur-fade";
import PulsatingButton from "@/components/ui/pulsating-button";
import IconCloud from "@/components/ui/icon-cloud";
import { client } from "@/sanity/client";
import { siteSettingsQuery } from "@/sanity/queries";
import { emptySiteSettings, type SiteSettings } from "@/sanity/types";
import { skillsToIconSlugs } from "@/lib/skillIcons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default async function HeroSection() {
  const settings = (await client.fetch<SiteSettings | null>(
    siteSettingsQuery,
    {},
    { next: { revalidate: 3600 } }
  )) ?? emptySiteSettings;

  const iconSlugs = skillsToIconSlugs(settings.skills ?? []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16 md:py-24 lg:py-32">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="flex-1">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1 font-mono text-xs text-violet-300">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-violet-400" />
              </span>
              Available for work
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY + 0.05}>
            <h1 className="mt-6 whitespace-pre-wrap text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
              {settings.heroName}
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY + 0.1}>
            <p className="mt-3 whitespace-pre-wrap text-xl md:text-2xl tracking-tight font-light text-muted-foreground">
              {settings.heroTagline}
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY + 0.15}>
            <p className="mt-5 max-w-xl whitespace-pre-wrap font-light text-muted-foreground">
              {settings.heroBio}
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY + 0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {settings.bookingUrl && (
                <Link
                  href={settings.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PulsatingButton pulseColor="#8b5cf6">
                    {settings.bookingLabel}
                  </PulsatingButton>
                </Link>
              )}
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-violet-500/30 hover:bg-violet-500/10"
              >
                View my work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </BlurFade>
        </div>

        {iconSlugs.length > 0 && (
          <BlurFade
            delay={BLUR_FADE_DELAY + 0.1}
            className="relative hidden shrink-0 md:block md:w-[260px]"
          >
            <div className="relative mx-auto size-[260px]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-violet-500/10 blur-2xl" />
              <IconCloud iconSlugs={iconSlugs} />
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
