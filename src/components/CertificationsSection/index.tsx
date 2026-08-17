import BlurFade from "../ui/blur-fade";
import { CertificationTabs } from "./CertificationTabs";
import { client } from "@/sanity/client";
import { certificationsQuery } from "@/sanity/queries";
import type { Certification } from "@/sanity/types";

const BLUR_FADE_DELAY = 0.04;

const CertificationsSection = async () => {
  const certifications = await client.fetch<Certification[]>(
    certificationsQuery,
    {},
    { next: { revalidate: 3600 } }
  );

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-violet-500/[0.03] to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-black mb-6 md:mb-8 text-foreground">
            <span className="text-violet-400">{`{ `}</span>
            Certifications
            <span className="text-violet-400">{` }`}</span>
          </h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <CertificationTabs certifications={certifications} />
        </BlurFade>
      </div>
    </section>
  );
};

export default CertificationsSection;
