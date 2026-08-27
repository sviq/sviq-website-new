"use client";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SolutionCard: FC<SolutionCardProps> = ({ title, description, image }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="flex w-full space-x-10 bg-[#F9F9FF] border-[#ABD1FC] border-2 p-8 lg:p-12 rounded-3xl"
    >
      <img src={image} alt={title} className="size-[86px] mt-2" />
      <div className="md:max-w-[360px] space-y-4">
        <p className={`${fonts.darkerGrotesque} text-2xl font-bold`}>{title}</p>
        <p
          className={`${fonts.inter} text-sm md:text-base lg:text-base leading-relaxed`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Solutions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px 0px" });

  const solutions = [
    {
      title: "Web applications",
      description:
        "Browser-based tools for the way your team actually works — dashboards, workflows, and internal systems, built to your process.",
      image: "/images/solutions/web-based-applications.svg",
    },
    {
      title: "SaaS applications",
      description:
        "A product your customers log into — accounts, roles, and a codebase that can grow with you.",
      image: "/images/solutions/custom-software-development.svg",
    },
    {
      title: "Mobile app development",
      description:
        "Mobile apps for field teams and customers, tied to the same system as the web product.",
      image: "/images/solutions/mobile-apps.svg",
    },
    {
      title: "Business websites",
      description:
        "Sites for the company: clear pages, contact, and the story you want a buyer to see. Built to load well and stay easy to update.",
      image: "/images/solutions/jot-form-development.svg",
    },
    {
      title: "Hosting",
      description:
        "We host the applications and sites we build, so launch is not the last time you hear from us.",
      image: "/images/solutions/online-collaboration-platforms.svg",
    },
    {
      title: "Business analytics on Power BI",
      description:
        "Reports and dashboards on Power BI so the numbers you already have are readable — not another spreadsheet dump.",
      image: "/images/solutions/business-analytics.svg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center py-20 lg:py-24"
    >
      <Container>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={cardVariants}>
            <Heading>What we build</Heading>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 mt-12 md:mt-16 gap-10"
        >
          {solutions.map((solution, index) => (
            <motion.div
              className={"w-full"}
              key={index}
              variants={cardVariants}
            >
              <SolutionCard {...solution} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Solutions;
