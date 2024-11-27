import { DATA } from "@/data/resume";
import BlurFade from "../ui/blur-fade";
import { ProjectCard } from "../ProjectCard";

const BLUR_FADE_DELAY = 0.04;
const ProjectsSection = () => {
  return (
    <div className="container-main flex flex-col gap-[30px] py-[50px] lg:py-[73px]">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col justify-center space-y-4 ">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-500 text-white font-[700] px-3 py-1 text-sm">
              My Projects
            </div>
            <h1 className=" text-2xl md:text-4xl  font-black mb-4">
              <span className="text-orange-500">{`{ `}</span>
              Checkout my latest work
              <span className="text-orange-500">{` }`}</span>
            </h1>
            <p className="text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};
export default ProjectsSection;
