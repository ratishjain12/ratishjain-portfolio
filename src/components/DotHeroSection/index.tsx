"use client";
import IconCloud from "../ui/icon-cloud";
import BlurFade from "../ui/blur-fade";
import PulsatingButton from "@/components/ui/pulsating-button";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <div>
      <div className="relative bg-orange-400 p-1 flex items-center overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {Array(50)
            .fill(0)
            .map((item, index) => {
              return (
                <span key={index} className="mx-1 text-black font-[800]">
                  . <span>PRODUCT</span> . <span>PROGRAMMING </span> .{" "}
                  <span>PROFESSIONAL</span>
                </span>
              );
            })}
        </div>
      </div>
      <div className="relative container-main pt-[90px] md:pt-0 flex flex-col md:flex-row  w-full items-center justify-between overflow-hidden rounded-lg   ">
        <BlurFade delay={BLUR_FADE_DELAY} className=" relative">
          <div className="flex flex-col gap-[10px]">
            <p className=" whitespace-pre-wrap  text-3xl sm:text-4xl lg:text-6xl tracking-tight font-[800] dark:text-white">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 px-2 rounded-lg text-white">
                Ratish Jain
              </span>
            </p>
            <p className="whitespace-pre-wrap  text-xl md:text-2xl lg:text-3xl tracking-tighter font-light text-black dark:text-white">
              Software Engineer & Freelancer
            </p>
            <p className="whitespace-pre-wrap max-w-[360px] lg:max-w-[540px]  font-light text-black dark:text-white">
              From UI/UX mockups to full-stack development, I ensure seamless
              user experiences.
            </p>
          </div>
          <div className="mt-4">
            <PulsatingButton
              onClick={() =>
                router.push("https://calendly.com/ratishjain6/30min")
              }
              color="bg-gradient-to-r from-orange-400 to-orange-500"
              className="dark:text-white "
            >
              Book a Call
            </PulsatingButton>
          </div>
        </BlurFade>

        <div className="w-[70%] md:w-[50%] lg:w-[40%]">
          <IconCloud iconSlugs={slugs} />
        </div>

        {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(350px_circle_at_top,white,transparent)] md:[mask-image:radial-gradient(600px_circle_at_left,white,transparent)] lg:[mask-image:radial-gradient(1000px_circle_at_left,white,transparent)]"
        )}
      /> */}
      </div>
    </div>
  );
}
