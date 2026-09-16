"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";
import { Clients } from "@/constants";

const WorkedFor = () => {
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
      className="bg-softCyan flex justify-center items-center py-14 lg:py-24"
    >
      <Container className="space-y-16">
        <motion.div variants={fadeInUp} className="space-y-3 lg:max-w-4xl">
          <p className={`${fonts.inter} text-sm md:text-base font-medium`}>
            We've worked for
          </p>
          <Heading>
            Companies that needed software designed around how they actually
            work
          </Heading>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-center">
          {Clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="w-full flex items-center justify-center"
              variants={cardAnimation}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-24 lg:h-28 w-auto max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default WorkedFor;
