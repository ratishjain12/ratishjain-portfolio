import { Icons } from "@/components/Icons";
import { video } from "framer-motion/client";
import { Github, HomeIcon } from "lucide-react";

export const DATA = {
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "AWS",
    "C++",
    "Shopify",
    "Framer",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ratishjain6@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/w1rC9iN",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/4rFABdL",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/7eXL8zj",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "devx",
      href: "https://devxcommerce.com/",
      badges: ["SDE-1"],
      location: "Surat, Gujarat India",
      title: "Software Development Engineer",
      logoUrl: "/devx_logo.jpeg",
      start: "November 2024",
      end: "Present",
      description:
        "Built scalable, production-ready systems for both D2C brands and enterprise clients. My work focused on full-stack development with a strong emphasis on backend & cloud technologies. Designed and implemented cloud-native architectures using AWS services such as SAM, Lambda, API Gateway, and DynamoDB. I also contributed to AI-integrated features, internal tooling, and continuously improved development practices around testing, deployment automation, and observability.",
    },
    {
      company: "devx",
      href: "https://devxcommerce.com/",
      badges: ["Junior SDE"],
      location: "Surat, Gujarat India",
      title: "Software Development Engineer",
      logoUrl: "/devx_logo.jpeg",
      start: "August 2024",
      end: "November 2024",
      description:
        "Led development of full-stack projects with minimal supervision, delivering both internal tools and client-facing solutions. Built serverless APIs and data pipelines using AWS SAM, Lambda, DynamoDB, Python, and Node.js. Developed secure, production-ready systems for enterprise clients, including automated verification workflows. Created AI-driven PoCs for D2C brands, some of which evolved into live features. Worked with Next.js, GraphQL, and Strapi to build scalable, responsive frontend.",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      href: "https://www.credly.com/badges/36c01ea7-149c-481a-915b-c9e86db40934/public_url",
      logoUrl: "/certifications/solutions-architect.png",
      date: "November 2025",
      credentialId: "AWS-SAA-C03",
      description:
        "ability to build secure and robust solutions using architectural design principles based on customer requirements. ",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      href: "https://www.credly.com/badges/c2bd98f0-a8ac-4359-b309-f0fe8cb28bc1/public_url",
      logoUrl: "/certifications/cloud-practitioner.png",
      date: "March 2025",
      credentialId: "AWS-CLF-C02",
      description:
        "Validates foundational understanding of AWS Cloud concepts, services, and security. Able to identify essential AWS services necessary to set up AWS-focused projects.",
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      href: "https://www.credly.com/badges/85fa2592-f065-437e-9c4d-3b1d83391947/public_url",
      logoUrl: "/certifications/ai-practitioner.png",
      date: "August 2025",
      credentialId: "AWS-AIF-C01",
      description:
        "Determine the correct types of AI/ML technologies to apply to specific use cases and know how to use AI, ML, and generative AI technologies responsibly.",
    },
  ],
  projects: [
    {
      title: "Stellar Crypto",
      href: "https://stellar-crypto.vercel.app/",
      description:
        "Responsive Landing Page created for a crypto trading platform.",
      technologies: ["React", "TailwindCSS", "TypeScript", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://stellar-crypto.ratishfolio.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/stellar-crypto",
          icon: <Github className="size-3" />,
        },
      ],
      video:
        "https://res.cloudinary.com/ratishjaininc/video/upload/v1763794154/stellar-crypto_xgwqjt.mp4",
    },
    {
      title: "Solar Tech",
      href: "https://solar-tech.ratishfolio.com/",
      description:
        "Responsive Landing Page created for a solar technology company.",
      technologies: ["React", "TailwindCSS", "TypeScript", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://solar-tech.ratishfolio.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/solar-tech-frontend",
          icon: <Github className="size-3" />,
        },
      ],
      video:
        "https://res.cloudinary.com/ratishjaininc/video/upload/v1763794121/solar-tech_grcetb.mp4",
    },
    {
      title: "Appgen",
      href: "https://www.appgen-cli.com/",
      description:
        "A fast, flexible CLI tool to scaffold modern web app projects (Next.js, React, Express, Flask, and more) with optional TypeScript and Tailwind support, perfect for rapid prototyping and consistent project setup",
      technologies: ["Python", "Rich", "Typer"],
      links: [
        {
          type: "Website",
          href: "https://www.appgen-cli.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/appgen",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1757696349/appgen-ss_v4fldm.png",
      video:
        "https://res.cloudinary.com/ratishjaininc/video/upload/v1757696514/appgen-1755346121329_plroew.mp4",
    },
    {
      title: "LeetCode Helper",
      href: "https://github.com/ratishjain12/lc-helper",
      description:
        "lc-helper is a browser extension designed to streamline and enhance the LeetCode problem-solving experience. It adds useful helper features and UI improvements to make practicing coding puzzles more efficient and user-friendly.",
      technologies: ["Javascript", "Gemini"],
      links: [
        // {
        //   type: "Website",
        //   href: "https://www.appgen-cli.com/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/lc-helper",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1757696349/appgen-ss_v4fldm.png",
      video:
        "https://res.cloudinary.com/ratishjaininc/video/upload/v1757697142/leetcode-helper-1755431637398_orc79n.mp4",
    },
    {
      title: "Notely.ai",
      href: "https://notely-ai.vercel.app/",
      description:
        "Transform your PDFs into interactive knowledge. Ask questions, get instant answers, and unlock insights with Notely.ai.",
      technologies: [
        "Next.js",
        "Typescript",
        "Convex DB",
        "Langchain",
        "Clerk",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.notely-ai.ratishfolio.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/Notely.ai",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1732793719/samples/people/notely.ai_gnat8v.png",
      video: null,
    },
    {
      title: "Coldmail.io",
      href: "https://coldmail-io.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      description:
        "Generate highly personalized email templates for your cold outreach campaigns. Save, copy, and send your emails directly from our app, with options to edit and delete—all in one place.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongo DB",
        "Better Auth",
        "TailwindCSS",
        "Razorpay Payment",
        "Shadcn UI",
        "Groq AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://coldmail-io.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/coldmail.io",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1732793719/samples/people/coldmail_ivzkkf.png",
      video: null,
    },
  ],
} as const;
