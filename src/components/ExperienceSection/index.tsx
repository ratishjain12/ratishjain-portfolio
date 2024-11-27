import { DATA } from "@/data/resume";
import BlurFade from "../ui/blur-fade";
import { ResumeCard } from "../resume-card";

const BLUR_FADE_DELAY = 0.04;

const ExperienceSection = () => {
  return (
    <div className="flex container-main max-w-3xl  min-h-0 flex-col gap-y-3  pb-10">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h1 className=" text-2xl md:text-4xl  font-black mb-4">
          <span className="text-orange-500">{`{ `}</span>
          Work Experience
          <span className="text-orange-500">{` }`}</span>
        </h1>
      </BlurFade>
      {DATA.work.map((work, id) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
          <ResumeCard
            key={work.company}
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        </BlurFade>
      ))}
    </div>
  );
};
export default ExperienceSection;
