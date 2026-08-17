"use client";

import { CertificationCard } from "@/components/CertificationCard";
import { cn } from "@/lib/utils";
import type { Certification } from "@/sanity/types";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

interface Props {
  certifications: Certification[];
}

const ALL = "All";

export function CertificationTabs({ certifications }: Props) {
  const issuers = useMemo(
    () => Array.from(new Set(certifications.map((c) => c.issuer))),
    [certifications]
  );
  const tabs = [ALL, ...issuers];
  const [active, setActive] = useState<string>(ALL);

  const filtered =
    active === ALL
      ? certifications
      : certifications.filter((c) => c.issuer === active);

  return (
    <div>
      {issuers.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const count =
              tab === ALL
                ? certifications.length
                : certifications.filter((c) => c.issuer === tab).length;
            const isActive = tab === active;

            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className="relative rounded-full px-4 py-1.5 text-sm font-medium outline-none"
              >
                {isActive && (
                  <motion.span
                    layoutId="cert-tab-bg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    isActive
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab}{" "}
                  <span className="opacity-70 font-mono text-xs">
                    ({count})
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert) => (
            <motion.div
              key={cert.credentialId ?? cert.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <CertificationCard
                logoUrl={cert.logoUrl}
                title={cert.title}
                issuer={cert.issuer}
                href={cert.href}
                date={cert.date}
                credentialId={cert.credentialId}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
