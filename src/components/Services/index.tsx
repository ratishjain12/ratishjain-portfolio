"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import PulsatingButton from "../ui/pulsating-button";
import Link from "next/link";

const services = [
  {
    id: "1",
    title: "CLOUD",
    description:
      "Cloud-native architecture and infrastructure solutions using AWS services. Building scalable, serverless applications with Lambda, API Gateway, DynamoDB, and SAM. Implementing secure, production-ready systems with containerization and microservices architecture.",
  },
  {
    id: "2",
    title: "FULLSTACK",
    description:
      "End-to-end web application development using modern technologies like Next.js, React, Node.js, and Python. Building scalable, responsive, and performant applications with GraphQL, Strapi CMS, and comprehensive testing frameworks.",
  },
  {
    id: "3",
    title: "AI & AUTOMATION",
    description:
      "Leveraging artificial intelligence and automation to streamline business processes. Custom AI solutions, chatbots, automated workflows, and AI-driven PoCs that evolve into production features. Implementing intelligent systems that drive efficiency and innovation.",
  },
  {
    id: "4",
    title: "CONSULTING",
    description:
      "Technical consulting and architecture guidance for startups and enterprises. Code reviews, performance optimization, security audits, and technology stack recommendations. Helping teams scale their development processes and adopt best practices.",
  },
  {
    id: "5",
    title: "NO-CODE WEBSITES",
    description:
      "Rapid website development using no-code and low-code platforms. Building professional websites, landing pages, and web applications without traditional coding. Fast deployment and easy maintenance for businesses looking to establish their online presence quickly.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto py-20">
        <h1 className="container-main text-xl text-center sm:text-4xl md:text-5xl font-black mb-10 text-foreground">
          <span className="text-orange-500">{`{ `}</span>
          CRAFT YOUR DIGITAL EDGE
          <span className="text-orange-500">{` }`}</span>
        </h1>

        <Accordion type="single" collapsible className="w-full">
          {services.map((service) => (
            <AccordionItem
              key={service.id}
              value={service.id}
              className="group border-none"
            >
              <AccordionTrigger className="flex items-center gap-4 p-6 md:p-8 bg-gradient-to-r from-orange-400 to-orange-500 hover:no-underline hover:brightness-110 transition-all data-[state=open]:bg-orange-600">
                <div className="flex gap-3">
                  <span className="text-2xl md:text-4xl font-black opacity-50 shrink-0">
                    {service.id}.
                  </span>
                  <span className="text-2xl md:text-4xl text-white font-black tracking-tight text-left">
                    {service.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-orange-50 dark:bg-orange-500/10 px-6 md:px-8 py-6 text-base md:text-lg text-foreground">
                <div className="pl-10 space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <Link
                    href="https://calendly.com/ratishjain6/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PulsatingButton
                      color="bg-gradient-to-r from-orange-400 to-orange-500"
                      className="text-white"
                    >
                      Book a Call
                    </PulsatingButton>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
