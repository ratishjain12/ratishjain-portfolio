import BlurFade from "@/components/ui/blur-fade";
import { ProjectsGrid } from "@/components/ProjectsSection/ProjectsGrid";
import { client } from "@/sanity/client";
import { projectsQuery } from "@/sanity/queries";
import type { Project } from "@/sanity/types";

const BLUR_FADE_DELAY = 0.04;

export default async function ProjectsPage() {
  const projects = await client.fetch<Project[]>(
    projectsQuery,
    {},
    { next: { revalidate: 3600 } }
  );

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col gap-[30px]">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-[700] px-3 py-1 text-sm">
              My Projects
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-black mb-4">
              <span className="text-violet-400">{`{ `}</span>
              All Projects
              <span className="text-violet-400">{` }`}</span>
            </h1>
            <p className="text-foreground max-w-2xl text-sm md:text-lg">
              Everything I&apos;ve shipped, from quick landing pages to
              full-stack products.
            </p>
          </div>
        </BlurFade>

        <ProjectsGrid projects={projects} featureFirst={false} />
      </div>
    </section>
  );
}
