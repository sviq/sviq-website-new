"use client";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";

interface ProcessCardProps {
  title: string;
  content: string;
  image: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProcessCard: FC<ProcessCardProps> = ({
  image,
  title,
  content,
  index,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="flex justify-center min-h-[190px] h-full w-full space-x-5 bg-white p-5 rounded-3xl shadow-lg"
    >
      <div className="min-w-14 h-14 flex justify-center items-center border border-[#FFA155] rounded-full shrink-0 mt-1">
        <img src={image} alt={title} className="w-7 h-7 object-contain" />
      </div>
      <div className="flex flex-col flex-grow justify-between py-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className={`${fonts.inter} text-2xl font-bold text-black`}>
              {title}
            </p>
            <p
              className={`${fonts.darkerGrotesque} text-2xl font-bold text-[#333333]/80`}
            >
              0{index}
            </p>
          </div>
          <div className="md:max-w-[90%]">
            <p className={`${fonts.inter} text-base text-black`}>{content}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Process = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px 0px" });

  const processes = [
    {
      title: "Discover",
      content:
        "We analyze your business needs to craft the perfect IT strategy for success.",
      image: "/images/process/discover.svg",
    },
    {
      title: "Designing",
      content:
        "Our creative team builds user-friendly, visually appealing designs for a seamless experience.",
      image: "/images/process/designing.svg",
    },
    {
      title: "Development",
      content:
        "We develop robust, scalable solutions using the latest technologies.",
      image: "/images/process/development.svg",
    },
    {
      title: "Testing",
      content:
        "Rigorous quality checks ensure a bug-free, high-performance final product.",
      image: "/images/process/testing.svg",
    },
    {
      title: "Deployment",
      content:
      "We launch the work — and we can host it, so you are not left finding a server on day one.",
      image: "/images/process/deployment.svg",
    },
    {
      title: "Maintenance",
      content:
        "Ongoing support & updates keep your system secure and up to date.",
      image: "/images/process/maintenance.svg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFF5ED] flex justify-center items-center py-24"
    >
      <Container>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="max-w-4xl space-y-5"
        >
          <motion.p className={`${fonts.inter} text-sm md:text-base font-bold`}>
            Our Process
          </motion.p>
          <motion.div variants={cardVariants}>
            <Heading>
              The process we are working With Our client Worldwide
            </Heading>
          </motion.div>
          <motion.p
            variants={cardVariants}
            className={`${fonts.inter} text-base text-black md:max-w-[70%]`}
          >
            We ensure a seamless, efficient workflow from concept to completion,
            delivering high-quality IT solutions tailored to your needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10"
        >
          {processes.map((process, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative w-full"
            >
              <ProcessCard {...process} index={index + 1} />

              {/* Connecting lines remain unchanged */}
              {index < processes.length - 1 && index !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-7 w-7 border-t-2 border-dashed border-black"></div>
              )}
              {index < processes.length - 1 && index % 2 !== 1 && (
                <div className="hidden md:block lg:hidden absolute top-1/2 -right-7 w-7 border-t-2 border-dashed border-black"></div>
              )}
              {index < processes.length - 1 && (
                <div className="md:hidden absolute left-1/2 -bottom-7 h-7 border-l-2 border-dashed border-black transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;
