import BlurFade from "../ui/blur-fade";
import { ProjectCard } from "../ProjectCard";
import type { Project, ProjectLink } from "@/sanity/types";
import { iconMap, type IconKey } from "@/lib/iconMap";

const BLUR_FADE_DELAY = 0.04;

const linkIconKeys: Record<ProjectLink["type"], IconKey> = {
  Website: "globe",
  Source: "source",
};

interface Props {
  projects: Project[];
  featureFirst?: boolean;
}

export function ProjectsGrid({ projects, featureFirst = true }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project, id) => {
        const featured = featureFirst && id === 0;
        const links = (project.links ?? []).map((link) => {
          const Icon = iconMap[linkIconKeys[link.type]];
          return {
            type: link.type,
            href: link.href,
            icon: <Icon className="size-3" />,
          };
        });

        return (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            className={featured ? "sm:col-span-2" : undefined}
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              tags={project.technologies ?? []}
              image={project.image ?? undefined}
              links={links}
              video={project.video}
              featured={featured}
            />
          </BlurFade>
        );
      })}
    </div>
  );
}
