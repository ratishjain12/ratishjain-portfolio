import BlurFade from "../ui/blur-fade";
import PulsatingButton from "@/components/ui/pulsating-button";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8 md:py-12 lg:py-16">
      <div className="flex justify-between">
        <BlurFade delay={BLUR_FADE_DELAY} className="relative flex-1">
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
            <p className="whitespace-pre-wrap font-light text-black dark:text-white">
              Building scalable cloud-native applications with modern
              technologies. From serverless APIs to AI-driven solutions, I
              deliver production-ready systems.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="https://cal.com/ratish-jain/30min"
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
        <BlurFade
          delay={BLUR_FADE_DELAY + 0.1}
          className="relative hidden md:block"
        >
          <Image
            src="/profile.jpg"
            alt="profile"
            width={200}
            height={200}
            priority
            quality={100}
            className="rounded-md"
          />
        </BlurFade>
      </div>
    </div>
  );
}
