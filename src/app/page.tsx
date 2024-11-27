import { DotHeroSection } from "@/components/DotHeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/Services";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <DotHeroSection />
      <ServicesSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
