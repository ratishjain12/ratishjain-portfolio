import { Icons } from "@/components/Icons";
import { Github, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
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
      company: "Devx Commerce",
      href: "https://devxcommerce.com/",
      badges: [],
      location: "Surat, Gujarat India",
      title: "Software Development Engineer",
      logoUrl: "/devx_logo.jpeg",
      start: "August 2024",
      end: "Present",
      description:
        "Led development of enterprise-scale applications, architecting an end-to-end serverless solution using AWS services (ECS, DynamoDB, Lambda) and Docker containerization with Python, and building full-stack e-commerce platforms for D2C brands. Engineered modern web solutions using Next.js, Tailwind CSS, and Strapi CMS, while implementing secure user authentication through AWS Cognito. Demonstrated expertise in cloud-native development and container orchestration, delivering scalable and high-performance applications that serve thousands of daily users.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
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
        "Next Auth",
        "TailwindCSS",
        "PhonePe Payment",
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
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1732793719/coldmail_ivzkkf.png",
    },
    {
      title: "Notely.ai",
      href: "https://notely-ai.vercel.app/",
      dates: "November 2024",
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
          href: "https://notely-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/Notely.ai",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1732793719/notely.ai_gnat8v.png",
    },
    {
      title: "Career AI",
      href: "https://career-ai-project.vercel.app/",
      dates: "July 2024 - October 2024",
      description:
        "From resume creation to interview simulation, we've got you covered",
      technologies: [
        "Next.js",
        "Typescript",
        "Strapi",
        "AWS S3",
        "AWS Bedrock",
        "AWS Lambda",
        "Tensorflow",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://career-ai-project.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/resume-parser-frontend",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1732795339/career-ai_sq5fts.png",
    },
  ],
} as const;
