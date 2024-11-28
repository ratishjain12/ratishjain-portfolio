import { Badge } from "../ui/badge";
import BlurFade from "../ui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;
const SkillsSection = () => {
  return (
    <div className="container-main my-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h1 className=" text-2xl md:text-4xl  font-black mb-4">
            <span className="text-orange-500">{`{ `}</span>
            Skills
            <span className="text-orange-500">{` }`}</span>
          </h1>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge
                key={skill}
                className="bg-orange-500  hover:none cursor-default text-sm sm:text-md md:text-lg dark:text-white"
              >
                {skill}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillsSection;
