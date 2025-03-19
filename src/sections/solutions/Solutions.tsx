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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
      title: "Custom Software Development",
      description:
        "We craft custom software solutions designed to meet your unique business needs. Our expert team utilizes the latest technologies to develop scalable, secure, and high-performance applications.",
      image: "/images/solutions/custom-software-development.svg",
    },
    {
      title: "Business Analytics on Power BI",
      description:
        "Unlock the full potential of your data with our Business Analytics solutions on Power BI. We transform raw data into actionable insights, enabling smarter decision-making and enhanced business performance.",
      image: "/images/solutions/business-analytics.svg",
    },
    {
      title: "Web-based Applications",
      description:
        "We create secure, scalable, and high-performance web-based applications tailored to your business needs. Leveraging the latest technologies, we deliver responsive solutions that enhance user experience, optimize operations, and drive efficiency.",
      image: "/images/solutions/web-based-applications.svg",
    },
    {
      title: "Mobile Apps",
      description:
        "We craft custom software solutions designed to meet your unique business needs. Our expert team utilizes the latest technologies to develop scalable, secure, and high-performance applications.",
      image: "/images/solutions/mobile-apps.svg",
    },
    {
      title: "Online Collaboration Platforms",
      description:
        "We craft custom software solutions designed to meet your unique business needs. Our expert team utilizes the latest technologies to develop scalable, secure, and high-performance applications.",
      image: "/images/solutions/online-collaboration-platforms.svg",
    },
    {
      title: "IOT",
      description:
        "We craft custom software solutions designed to meet your unique business needs. Our expert team utilizes the latest technologies to develop scalable, secure, and high-performance applications.",
      image: "/images/solutions/iot.svg",
    },
    {
      title: "JOT Form Development",
      description:
        "We craft custom software solutions designed to meet your unique business needs. Our expert team utilizes the latest technologies to develop scalable, secure, and high-performance applications.",
      image: "/images/solutions/jot-form-development.svg",
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
            <Heading>Smart Solutions We Provide</Heading>
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
