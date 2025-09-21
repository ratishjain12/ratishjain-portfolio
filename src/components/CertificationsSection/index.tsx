import { DATA } from "@/data/resume";
import BlurFade from "../ui/blur-fade";
import { ResumeCard } from "../ResumeCard";

const BLUR_FADE_DELAY = 0.04;

const CertificationsSection = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-br from-orange-50/30 via-background to-orange-50/20 dark:from-background dark:via-background dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-black mb-6 md:mb-8 text-foreground">
            <span className="text-orange-500">{`{ `}</span>
            Certifications
            <span className="text-orange-500">{` }`}</span>
          </h1>
        </BlurFade>

        <div className="space-y-4 md:space-y-6">
          {DATA.certifications.map((cert, id) => (
            <BlurFade
              key={`${cert.title}-${id}`}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                logoUrl={cert.logoUrl}
                altText={cert.issuer}
                title={cert.title}
                subtitle={cert.issuer}
                href={cert.href}
                badges={[cert.credentialId]}
                period={cert.date}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
