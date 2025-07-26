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
      badges: ["JUNIOR SDE"],
      location: "Surat, Gujarat India",
      title: "Software Development Engineer",
      logoUrl: "/devx_logo.jpeg",
      start: "August 2024",
      end: "November 2024",
      description:
        "Led development of full-stack projects with minimal supervision, delivering both internal tools and client-facing solutions. Built serverless APIs and data pipelines using AWS SAM, Lambda, DynamoDB, Python, and Node.js. Developed secure, production-ready systems for enterprise clients, including automated verification workflows. Created AI-driven PoCs for D2C brands, some of which evolved into live features. Worked with Next.js, GraphQL, and Strapi to build scalable, responsive frontend.",
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
    },
    // {
    //   title: "Hyper Chat",
    //   href: "https://hyper-chat-rag.vercel.app/",
    //   dates: "Jan 2025 - Jan 2025",
    //   description:
    //     "Turn Any Webpage Into a Conversation—Ask, Explore, and Discover Instantly!",
    //   technologies: ["Next.js", "Upstash", "Typescript", "Redis"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://hyper-chat-rag.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/ratishjain12/HyperChat",
    //       icon: <Github className="size-3" />,
    //     },
    //   ],
    //   image:
    //     "https://res.cloudinary.com/ratishjaininc/image/upload/v1739095538/samples/people/117shots_so_bet9ke.png",
    // },
  ],
} as const;
