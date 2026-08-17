// One-time migration of the old hardcoded resume.tsx/HeroSection content into Sanity.
// Run with: node --env-file=.env.local scripts/seed-sanity.mjs
//
// Requires a SANITY_API_TOKEN (Editor permissions) in .env.local — create one at
// https://www.sanity.io/manage under your project > API > Tokens. Do not commit it;
// .env.local is already gitignored.

import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId) throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
if (!token) {
  throw new Error(
    "Missing SANITY_API_TOKEN. Create an Editor token at sanity.io/manage and add it to .env.local"
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function uploadImage(relativePath) {
  const filePath = path.join(publicDir, relativePath);
  const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
    filename: path.basename(filePath),
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function main() {
  console.log("Uploading images...");
  const profileImage = await uploadImage("profile.jpg");
  const devxLogo = await uploadImage("devx_logo.jpeg");
  const solutionsArchitectLogo = await uploadImage("certifications/solutions-architect.png");
  const cloudPractitionerLogo = await uploadImage("certifications/cloud-practitioner.png");
  const aiPractitionerLogo = await uploadImage("certifications/ai-practitioner.png");

  console.log("Writing siteSettings...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    heroName: "Ratish Jain",
    heroTagline: "Software Engineer & Freelancer",
    heroBio:
      "Building scalable cloud-native applications with modern technologies. From serverless APIs to AI-driven solutions, I deliver production-ready systems.",
    profileImage,
    bookingUrl: "https://cal.com/ratish-jain/30min",
    bookingLabel: "Book a Call",
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
    contactEmail: "ratishjain6@gmail.com",
    contactTel: "+123456789",
    socialLinks: [
      {
        _key: "github",
        name: "GitHub",
        url: "https://dub.sh/w1rC9iN",
        iconKey: "github",
        showInNavbar: true,
      },
      {
        _key: "linkedin",
        name: "LinkedIn",
        url: "https://dub.sh/4rFABdL",
        iconKey: "linkedin",
        showInNavbar: true,
      },
      {
        _key: "x",
        name: "X",
        url: "https://dub.sh/7eXL8zj",
        iconKey: "x",
        showInNavbar: true,
      },
    ],
    navbarItems: [{ _key: "home", href: "/", iconKey: "home", label: "Home" }],
  });

  console.log("Writing work experience...");
  await client.createOrReplace({
    _id: "work-devx-sde1",
    _type: "workExperience",
    company: "devx",
    href: "https://devxcommerce.com/",
    badges: ["SDE-1"],
    location: "Surat, Gujarat India",
    title: "Software Development Engineer",
    logo: devxLogo,
    start: "November 2024",
    end: "Present",
    description:
      "Built scalable, production-ready systems for both D2C brands and enterprise clients. My work focused on full-stack development with a strong emphasis on backend & cloud technologies. Designed and implemented cloud-native architectures using AWS services such as SAM, Lambda, API Gateway, and DynamoDB. I also contributed to AI-integrated features, internal tooling, and continuously improved development practices around testing, deployment automation, and observability.",
    order: 1,
  });
  await client.createOrReplace({
    _id: "work-devx-junior-sde",
    _type: "workExperience",
    company: "devx",
    href: "https://devxcommerce.com/",
    badges: ["Junior SDE"],
    location: "Surat, Gujarat India",
    title: "Software Development Engineer",
    logo: devxLogo,
    start: "August 2024",
    end: "November 2024",
    description:
      "Led development of full-stack projects with minimal supervision, delivering both internal tools and client-facing solutions. Built serverless APIs and data pipelines using AWS SAM, Lambda, DynamoDB, Python, and Node.js. Developed secure, production-ready systems for enterprise clients, including automated verification workflows. Created AI-driven PoCs for D2C brands, some of which evolved into live features. Worked with Next.js, GraphQL, and Strapi to build scalable, responsive frontend.",
    order: 2,
  });

  console.log("Writing certifications...");
  await client.createOrReplace({
    _id: "cert-aws-saa",
    _type: "certification",
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/36c01ea7-149c-481a-915b-c9e86db40934/public_url",
    logo: solutionsArchitectLogo,
    date: "November 2025",
    credentialId: "AWS-SAA-C03",
    description:
      "ability to build secure and robust solutions using architectural design principles based on customer requirements. ",
    order: 1,
  });
  await client.createOrReplace({
    _id: "cert-aws-clf",
    _type: "certification",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/c2bd98f0-a8ac-4359-b309-f0fe8cb28bc1/public_url",
    logo: cloudPractitionerLogo,
    date: "March 2025",
    credentialId: "AWS-CLF-C02",
    description:
      "Validates foundational understanding of AWS Cloud concepts, services, and security. Able to identify essential AWS services necessary to set up AWS-focused projects.",
    order: 2,
  });
  await client.createOrReplace({
    _id: "cert-aws-aif",
    _type: "certification",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/85fa2592-f065-437e-9c4d-3b1d83391947/public_url",
    logo: aiPractitionerLogo,
    date: "August 2025",
    credentialId: "AWS-AIF-C01",
    description:
      "Determine the correct types of AI/ML technologies to apply to specific use cases and know how to use AI, ML, and generative AI technologies responsibly.",
    order: 3,
  });

  console.log("Writing projects...");
  const projects = [
    {
      _id: "project-stellar-crypto",
      title: "Stellar Crypto",
      href: "https://stellar-crypto.vercel.app/",
      description: "Responsive Landing Page created for a crypto trading platform.",
      technologies: ["React", "TailwindCSS", "TypeScript", "Framer Motion"],
      links: [
        { _key: "website", type: "Website", href: "https://stellar-crypto.ratishfolio.com/" },
        { _key: "source", type: "Source", href: "https://github.com/ratishjain12/stellar-crypto" },
      ],
      video: "https://res.cloudinary.com/ratishjaininc/video/upload/v1763794154/stellar-crypto_xgwqjt.mp4",
      order: 1,
    },
    {
      _id: "project-solar-tech",
      title: "Solar Tech",
      href: "https://solar-tech.ratishfolio.com/",
      description: "Responsive Landing Page created for a solar technology company.",
      technologies: ["React", "TailwindCSS", "TypeScript", "Framer Motion"],
      links: [
        { _key: "website", type: "Website", href: "https://solar-tech.ratishfolio.com/" },
        { _key: "source", type: "Source", href: "https://github.com/ratishjain12/solar-tech-frontend" },
      ],
      video: "https://res.cloudinary.com/ratishjaininc/video/upload/v1763794121/solar-tech_grcetb.mp4",
      order: 2,
    },
    {
      _id: "project-appgen",
      title: "Appgen",
      href: "https://www.appgen-cli.com/",
      description:
        "A fast, flexible CLI tool to scaffold modern web app projects (Next.js, React, Express, Flask, and more) with optional TypeScript and Tailwind support, perfect for rapid prototyping and consistent project setup",
      technologies: ["Python", "Rich", "Typer"],
      links: [
        { _key: "website", type: "Website", href: "https://www.appgen-cli.com/" },
        { _key: "source", type: "Source", href: "https://github.com/ratishjain12/appgen" },
      ],
      image: "https://res.cloudinary.com/ratishjaininc/image/upload/v1757696349/appgen-ss_v4fldm.png",
      video: "https://res.cloudinary.com/ratishjaininc/video/upload/v1757696514/appgen-1755346121329_plroew.mp4",
      order: 3,
    },
    {
      _id: "project-leetcode-helper",
      title: "LeetCode Helper",
      href: "https://github.com/ratishjain12/lc-helper",
      description:
        "lc-helper is a browser extension designed to streamline and enhance the LeetCode problem-solving experience. It adds useful helper features and UI improvements to make practicing coding puzzles more efficient and user-friendly.",
      technologies: ["Javascript", "Gemini"],
      links: [{ _key: "source", type: "Source", href: "https://github.com/ratishjain12/lc-helper" }],
      image: "https://res.cloudinary.com/ratishjaininc/image/upload/v1757696349/appgen-ss_v4fldm.png",
      video: "https://res.cloudinary.com/ratishjaininc/video/upload/v1757697142/leetcode-helper-1755431637398_orc79n.mp4",
      order: 4,
    },
    {
      _id: "project-notely-ai",
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
        { _key: "website", type: "Website", href: "https://www.notely-ai.ratishfolio.com/" },
        { _key: "source", type: "Source", href: "https://github.com/ratishjain12/Notely.ai" },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1732793719/samples/people/notely.ai_gnat8v.png",
      order: 5,
    },
    {
      _id: "project-coldmail-io",
      title: "Coldmail.io",
      href: "https://coldmail-io.vercel.app/",
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
        { _key: "website", type: "Website", href: "https://coldmail-io.vercel.app/" },
        { _key: "source", type: "Source", href: "https://github.com/ratishjain12/coldmail.io" },
      ],
      image: "https://res.cloudinary.com/ratishjaininc/image/upload/v1732793719/samples/people/coldmail_ivzkkf.png",
      order: 6,
    },
  ];

  for (const project of projects) {
    await client.createOrReplace({ _type: "project", ...project });
  }

  console.log("Done. Open /studio to review.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
