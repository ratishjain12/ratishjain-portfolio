import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
