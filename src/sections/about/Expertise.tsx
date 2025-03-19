"use client";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import OutlinedChip from "@/components/ui/OutlinedChip";
import SubText from "@/components/ui/SubText";
import { fonts } from "@/config/fonts";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Expertise = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const whyUs = [
    {
      icon: "/images/CustomITSolutions.svg",
      text: "On Time Delivery",
      subText:
        "We ensure timely project completion with efficient workflows and a commitment to deadlines, keeping your business ahead.",
    },
    {
      icon: "/images/SkilledTeam.svg",
      text: "Best Quality",
      subText:
        "Our top-tier IT solutions prioritize performance, security, and user experience, delivering excellence every time.",
    },
    {
      icon: "/images/ClientCentric.svg",
      text: "Support Assist",
      subText:
        "Get 24/7 expert support for troubleshooting, updates, and guidance to keep your IT systems running smoothly.",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-softCyan flex items-center justify-center py-14 lg:py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-0"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="col-span-1 lg:col-span-2 space-y-6"
          >
            <p className={`${fonts.inter} text-sm md:text-base font-bold`}>
              Our Expertise
            </p>
            <Heading>Driving Innovation & Excellence</Heading>
            <div className="space-y-2 lg:max-w-[80%]">
              <SubText>
                At SVIQ Solutions LLP, our success is powered by a team of
                highly skilled professionals with deep expertise in web
                development, digital marketing, software solutions, and project
                management.
              </SubText>
              <SubText>
                Our experts bring creativity, technical prowess, and a
                commitment to excellence to every project, ensuring tailored,
                results-driven solutions that help businesses thrive. With
                strategic insights and cutting-edge technology, we turn visions
                into reality.
              </SubText>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="space-y-6 col-span-1 flex flex-col justify-center items-center"
          >
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <OutlinedChip {...item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Expertise;
