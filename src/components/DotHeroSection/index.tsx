import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import IconCloud from "../ui/icon-cloud";
import BlurFade from "../ui/blur-fade";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const BLUR_FADE_DELAY = 0.04;

export function DotHeroSection() {
  return (
    <div className="relative container-main pt-[90px] md:pt-0 flex flex-col md:flex-row  w-full items-center justify-between overflow-hidden rounded-lg  bg-background ">
      <BlurFade delay={BLUR_FADE_DELAY} className=" relative z-10 ">
        <div className="flex flex-col gap-[10px]">
          <p className=" whitespace-pre-wrap text-center md:text-start  text-3xl sm:text-4xl lg:text-6xl tracking-tight font-[800] dark:text-white">
            Hi, I&apos;m{" "}
            <span className="bg-blue-500 px-2 rounded-lg text-white">
              Ratish Jain
            </span>
          </p>
          <p className="whitespace-pre-wrap text-center md:text-start  text-xl md:text-2xl lg:text-3xl tracking-tighter font-light text-black dark:text-white">
            Software Engineer & Freelancer
          </p>
          <p className="whitespace-pre-wrap max-w-[360px] lg:max-w-[540px] text-center md:text-start font-light text-black dark:text-white">
            From UI/UX mockups to full-stack development, I ensure seamless user
            experiences.
          </p>
        </div>
      </BlurFade>

      <div className="w-[70%] md:w-[50%] lg:w-[40%]">
        <IconCloud iconSlugs={slugs} />
      </div>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(350px_circle_at_top,white,transparent)] md:[mask-image:radial-gradient(600px_circle_at_left,white,transparent)] lg:[mask-image:radial-gradient(1000px_circle_at_left,white,transparent)]"
        )}
      />
    </div>
  );
}
