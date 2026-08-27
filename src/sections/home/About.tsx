"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { OutlinedButton } from "@/components/ui/OutlinedButton";
import OutlinedChip from "@/components/ui/OutlinedChip";
import SubText from "@/components/ui/SubText";

export default function About() {
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

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const whyUs = [
    {
      icon: "/images/CustomITSolutions.svg",
      text: "Web, mobile & SaaS",
      subText: "Applications built around how your team works.",
    },
    {
      icon: "/images/ClientCentric.svg",
      text: "Websites & hosting",
      subText: "Business sites, and we host what we build.",
    },
    {
      icon: "/images/SkilledTeam.svg",
      text: "SaaS products",
      subText:
        "Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, eBMR.",
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
                outweighs the size of your organization. Whether you are a
                mid-sized business, an enterprise, or somewhere in between, you
                deserve software that fits — a web app, a SaaS product, a
                mobile app, or a business website.
              </SubText>
              <SubText>
                We also host what we build. And we ship our own products:
                Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and
                eBMR.{" "}
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
