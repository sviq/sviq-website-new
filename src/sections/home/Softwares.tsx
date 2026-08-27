"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { fonts } from "@/config/fonts";
import { Products } from "@/constants";

const Softwares = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.2, duration: 0.4, ease: "easeOut" as const },
    }),
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white flex justify-center min-h-screen items-center py-14 lg:py-24"
    >
      <Container className="space-y-16">
        {/* Header */}
        <motion.div variants={fadeInUp} className="space-y-3 lg:max-w-4xl">
          <p className={`${fonts.inter} text-sm md:text-base font-medium`}>
            Our Softwares
          </p>
          <Heading>
            Building the foundation for your success with solutions that scale
          </Heading>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 lg:gap-8 place-items-center">
          {Products.map((software, index) => (
            <motion.div
              key={index}
              className="w-full"
              variants={cardAnimation}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <InteractiveCard
                name={software.name}
                description={software.description}
                href={software.href}
                bgColor={software.bgColor}
                textColor={software.textColor}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Softwares;
