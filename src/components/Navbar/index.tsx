"use client";
import { Dock, DockIcon } from "@/components/ui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { iconMap } from "@/lib/iconMap";
import { cn } from "@/lib/utils";
import type { SiteSettings } from "@/sanity/types";
import Link from "next/link";

interface NavbarProps {
  settings: SiteSettings;
}

export default function Navbar({ settings }: NavbarProps) {
  const navbarItems = settings.navbarItems ?? [];
  const socialLinks = (settings.socialLinks ?? []).filter(
    (social) => social.showInNavbar
  );

  return (
    <div className="pointer-events-none  fixed inset-x-0 bottom-12 z-30 mx-auto mb-4 flex h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock
        direction="middle"
        className="z-50 pointer-events-auto  mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] "
      >
        {navbarItems.map((item) => {
          const Icon = iconMap[item.iconKey];
          return (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 hover:bg-violet-500/10 hover:text-violet-300"
                    )}
                  >
                    <Icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          );
        })}
        <Separator orientation="vertical" className="h-full" />
        {socialLinks.map((social) => {
          const Icon = iconMap[social.iconKey];
          return (
            <DockIcon key={social.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 hover:bg-violet-500/10 hover:text-violet-300"
                    )}
                  >
                    <Icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          );
        })}
      </Dock>
    </div>
  );
}
