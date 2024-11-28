"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import PulsatingButton from "../ui/pulsating-button";
import { useRouter } from "next/navigation";

const services = [
  {
    id: "1",
    title: "FULLSTACK DEV",
    description:
      "End-to-end web application development using modern technologies like React, Node.js, and cloud services. Building scalable, responsive, and performant applications that deliver exceptional user experiences.",
  },
  {
    id: "2",
    title: "UI/UX",
    description:
      "Creating intuitive and engaging user interfaces with a focus on user experience. From wireframes to final designs, ensuring your digital products are both beautiful and functional.",
  },
  {
    id: "3",
    title: "WEB3",
    description:
      "Blockchain development and Web3 integration services. Smart contracts, DApps, and cryptocurrency solutions built with security and scalability in mind.",
  },
  {
    id: "4",
    title: "AI & AUTOMATION",
    description:
      "Leveraging artificial intelligence and automation to streamline business processes. Custom AI solutions, chatbots, and automated workflows that drive efficiency.",
  },
];

export default function ServicesSection() {
  const router = useRouter();
  return (
    <section className=" bg-background dark:text-white">
      <div className=" mx-auto py-20">
        <h1 className="container-main text-xl text-center sm:text-4xl md:text-5xl  font-black mb-10">
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
              <AccordionContent className="bg-orange-400/60 dark:bg-orange-500/10 px-6 md:px-8 py-6 text-base md:text-lg">
                <div className="pl-10  space-y-4">
                  <p>{service.description}</p>
                  <PulsatingButton
                    onClick={() =>
                      router.push("https://calendly.com/ratishjain6/30min")
                    }
                    color="bg-gradient-to-r from-orange-400 to-orange-500"
                    className="dark:text-white "
                  >
                    Book a Call
                  </PulsatingButton>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
