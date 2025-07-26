import BlurFade from "../ui/blur-fade";
import PulsatingButton from "@/components/ui/pulsating-button";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function DotHeroSection() {
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
      <div className=" mt-4 relative container-main pt-[90px] md:pt-0 flex flex-col md:flex-row  w-full items-center justify-between gap-6 overflow-hidden rounded-lg   ">
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
              Building scalable cloud-native applications with modern
              technologies. From serverless APIs to AI-driven solutions, I
              deliver production-ready systems.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="https://calendly.com/ratishjain6/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PulsatingButton
                color="bg-gradient-to-r from-orange-400 to-orange-500"
                className="dark:text-white"
              >
                Book a Call
              </PulsatingButton>
            </Link>
          </div>
        </BlurFade>

        <div className="w-[70%] md:w-[50%] lg:w-[40%]">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={400}
            height={400}
            priority
            quality={100}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
