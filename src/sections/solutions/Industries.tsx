"use client";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";

interface IndustryCardProps {
  name: string;
  content: string;
  image: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const IndustryCard: FC<IndustryCardProps> = ({ name, content, image }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="flex w-full h-full space-x-10 bg-softCyan border-[#29B473] border-2 py-8 px-6 lg:px-8 lg:py-20 rounded-3xl relative overflow-hidden"
    >
      <div className="md:max-w-[340px] space-y-4">
        <p className={`${fonts.darkerGrotesque} text-2xl font-bold`}>{name}</p>
        <p
          className={`${fonts.inter} text-sm md:text-base lg:text-base leading-relaxed`}
        >
          {content}
        </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={image} alt={name} className="size-40 lg:size-[245px]" />
      </div>
    </motion.div>
  );
};

const Industries = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px 0px" });

  const industries = [
    {
      name: "Logistic & Transportation",
      content:
        "In the fast-paced world of logistics and transportation, efficiency, accuracy, and real-time visibility are critical.",
      image: "/images/industries/logistic.svg",
    },
    {
      name: "Finance & Insurance Market",
      content:
        "In the ever-evolving finance and insurance sector, security, compliance, and data-driven decision-making are paramount.",
      image: "/images/industries/finance.svg",
    },
    {
      name: "Banking & Capital Market",
      content:
        "The banking and capital markets industry is rapidly evolving, demanding secure, efficient, and technology-driven solutions.",
      image: "/images/industries/banking.svg",
    },
    {
      name: "Energy & Resource Industry",
      content:
        "The energy and resource industry is undergoing a digital transformation, requiring smart, sustainable, and efficient solutions.",
      image: "/images/industries/energy.svg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-softCyan flex justify-center items-center py-20 lg:py-24"
    >
      <Container>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={cardVariants}>
            <Heading>Major Industries We Served</Heading>
          </motion.div>
          <motion.p
            variants={cardVariants}
            className={`${fonts.inter} text-lg max-w-4xl mt-4`}
          >
            We provide innovative and scalable technology solutions across
            diverse industries, helping businesses optimize operations, enhance
            efficiency, and drive growth.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12"
        >
          {industries.map((industry, index) => (
            <motion.div
              className="w-full h-full"
              key={index}
              variants={cardVariants}
            >
              <IndustryCard {...industry} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Industries;
