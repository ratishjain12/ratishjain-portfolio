import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ExperienceSection />
      <CertificationsSection />
      <BlogSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
