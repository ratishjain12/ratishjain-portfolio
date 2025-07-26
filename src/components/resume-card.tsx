"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  console.log(href);

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer transition-transform hover:scale-[1.02] duration-200"
      onClick={handleClick}
    >
      <Card className="flex flex-col sm:flex-row border border-orange-500/50 hover:border-orange-500 transition-colors duration-200 shadow-sm hover:shadow-md">
        <div className="flex justify-center sm:justify-start p-4 sm:p-6 sm:pr-0">
          <Avatar className="border size-12 sm:size-14 md:size-16 bg-muted-background dark:bg-foreground shadow-sm">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-1"
            />
            <AvatarFallback className="text-sm font-semibold">
              {altText[0]}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-grow flex flex-col group">
          <CardHeader className="pb-3 sm:pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-x-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-x-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold leading-none text-sm sm:text-base md:text-lg text-foreground">
                    {title}
                  </h3>
                  {description && (
                    <ChevronRightIcon
                      className={cn(
                        "size-4 text-muted-foreground transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-orange-500",
                        isExpanded ? "rotate-90 text-orange-500" : "rotate-0"
                      )}
                    />
                  )}
                </div>
                {badges && (
                  <span className="flex flex-wrap gap-1 sm:gap-2">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground sm:text-right font-medium">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-medium text-sm sm:text-base text-muted-foreground mt-1">
                {subtitle}
              </div>
            )}
          </CardHeader>

          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "px-6 pb-4 sm:pb-6",
                isExpanded && "border-t border-border/50"
              )}
            >
              <div className="text-sm mt-1 sm:text-base leading-relaxed text-muted-foreground">
                {description}
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
