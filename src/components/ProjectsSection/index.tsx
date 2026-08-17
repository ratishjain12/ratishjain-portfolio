import BlurFade from "../ui/blur-fade";
import { ProjectsGrid } from "./ProjectsGrid";
import { client } from "@/sanity/client";
import { projectsQuery } from "@/sanity/queries";
import type { Project } from "@/sanity/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;
const HOMEPAGE_PROJECTS_COUNT = 3;

const ProjectsSection = async () => {
  const projects = await client.fetch<Project[]>(
    projectsQuery,
    {},
    { next: { revalidate: 3600 } }
  );

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col gap-[30px]">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col justify-center space-y-4 ">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-[700] px-3 py-1 text-sm">
                My Projects
              </div>
              <h1 className=" text-xl sm:text-2xl md:text-4xl  font-black mb-4">
                <span className="text-violet-400">{`{ `}</span>
                Checkout my latest work
                <span className="text-violet-400">{` }`}</span>
              </h1>
              <p className="text-foreground max-w-2xl text-sm md:text-lg">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>

        <ProjectsGrid projects={projects.slice(0, HOMEPAGE_PROJECTS_COUNT)} />

        {projects.length > HOMEPAGE_PROJECTS_COUNT && (
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-violet-500/30 px-5 py-2.5 text-sm font-medium text-violet-300 transition-colors hover:bg-violet-500/10 hover:text-violet-200"
              >
                See all projects
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
};
export default ProjectsSection;
