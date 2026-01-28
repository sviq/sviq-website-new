"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { OutlinedButton } from "@/components/ui/OutlinedButton";
import OutlinedChip from "@/components/ui/OutlinedChip";
import SubText from "@/components/ui/SubText";
import type { Variants } from 'framer-motion';


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  } satisfies Variants;

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  } satisfies Variants;


  const whyUs = [
    {
      icon: "/images/CustomITSolutions.svg",
      text: "Custom IT Solutions",
      subText: "Tailored services for businesses of all sizes.",
    },
    {
      icon: "/images/SkilledTeam.svg",
      text: "Skilled Team",
      subText: "Experts in turning your vision into reality.",
    },
    {
      icon: "/images/ClientCentric.svg",
      text: "Client-Centric",
      subText: "Your success is our priority.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-softCyan flex items-center min-h-screen justify-center py-14 lg:py-24"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-0"
        >
          {/* Left Side Content */}
          <div className="col-span-1 lg:col-span-2 space-y-12">
            <motion.div variants={fadeInUp} className="max-w-md">
              <Heading>You bring the vision, we bring the spark</Heading>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-8 lg:max-w-[80%]"
            >
              <SubText>
                At SVIQ Solutions LLP, we believe the size of your vision
                outweighs the size of your organization. Whether you're a
                mid-sized business, a powerhouse enterprise, or somewhere in
                between, you deserve cutting-edge IT solutions designed to
                empower growth and innovation.
              </SubText>
              <SubText>
                Founded in 2021 to bridge the gap between generic services and
                tailored excellence, we've quickly become a trusted partner for
                businesses across industries. Backed by a passionate team of web
                designers, developers, marketers, and project managers, we
                transform bold ideas into reality with precision and creativity.{" "}
                <span className="font-bold">
                  Discover how we can elevate your vision
                </span>
              </SubText>
              <motion.div variants={fadeInUp}>
                <OutlinedButton href="/contact" color="primaryBlack">
                  <span className="font-bold">Connect</span> - Learn more
                </OutlinedButton>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Why Us Chips */}
          <motion.div
            variants={staggerContainer}
            className="space-y-6 col-span-1 flex flex-col justify-center items-center"
          >
            {whyUs.map((item, index) => (
              <motion.div className="w-full" key={index} variants={fadeInUp}>
                <OutlinedChip {...item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
