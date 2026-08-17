import type { IconKey } from "@/lib/iconMap";

export interface SocialLink {
  name: string;
  url: string;
  iconKey: IconKey;
  showInNavbar: boolean;
}

export interface NavbarItem {
  href: string;
  iconKey: IconKey;
  label: string;
}

export interface SiteSettings {
  heroName: string;
  heroTagline: string | null;
  heroBio: string | null;
  profileImageUrl: string | null;
  bookingUrl: string | null;
  bookingLabel: string | null;
  avatarUrl: string | null;
  skills: string[] | null;
  contactEmail: string | null;
  contactTel: string | null;
  socialLinks: SocialLink[] | null;
  navbarItems: NavbarItem[] | null;
}

// Used until the `siteSettings` singleton has been created in Sanity Studio.
export const emptySiteSettings: SiteSettings = {
  heroName: "",
  heroTagline: null,
  heroBio: null,
  profileImageUrl: null,
  bookingUrl: null,
  bookingLabel: null,
  avatarUrl: null,
  skills: null,
  contactEmail: null,
  contactTel: null,
  socialLinks: null,
  navbarItems: null,
};

export interface ProjectLink {
  type: "Website" | "Source";
  href: string;
}

export interface Project {
  title: string;
  href: string;
  description: string;
  technologies: string[] | null;
  links: ProjectLink[] | null;
  image: string | null;
  video: string | null;
}

export interface Certification {
  title: string;
  issuer: string;
  href: string | null;
  logoUrl: string;
  date: string | null;
  credentialId: string | null;
  description: string | null;
}

export interface WorkExperience {
  company: string;
  href: string | null;
  badges: string[] | null;
  location: string | null;
  title: string;
  logoUrl: string;
  start: string;
  end: string | null;
  description: string | null;
}
