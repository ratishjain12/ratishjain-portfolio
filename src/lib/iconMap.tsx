import { Icons } from "@/components/Icons";
import { Github, HomeIcon } from "lucide-react";

export const iconMap = {
  home: HomeIcon,
  github: Icons.github,
  linkedin: Icons.linkedin,
  x: Icons.x,
  globe: Icons.globe,
  source: Github,
} as const;

export type IconKey = keyof typeof iconMap;
