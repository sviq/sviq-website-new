"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { OutlinedButton } from "@/components/ui/OutlinedButton";
import { fonts } from "@/config/fonts";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of section is visible
      className="bg-primary flex justify-center items-center min-h-[85vh]  lg:min-h-[95vh] lg:py-12"
    >
      <Container className=" space-y-12">
        <motion.h1
          variants={fadeInUp}
          className={`${fonts.darkerGrotesque} text-white text-5xl md:text-6xl lg:text-[150px]  lg:leading-[117px]`}
        >
          Delivering Software Solutions That Powers Business Excellence
        </motion.h1>

        <motion.div variants={fadeInUp} className="max-w-2xl">
          <p className={`${fonts.inter} text-white text-xl md:text-2xl`}>
            From web applications and SaaS to mobile apps, business websites,
            and hosting — plus a product suite: Optiva, SafeTrack, Horizon,
            VizTrack, LogiTrack, DocuTrack, and eBMR.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          <OutlinedButton color="white" href="/solutions">
            Discover our Solutions
          </OutlinedButton>
          <OutlinedButton color="white" href="/products">
            See our products
          </OutlinedButton>
        </motion.div>
      </Container>
    </motion.section>
  );
}
