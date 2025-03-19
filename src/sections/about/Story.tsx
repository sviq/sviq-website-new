"use client";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import SubText from "@/components/ui/SubText";
import { fonts } from "@/config/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Story = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="flex justify-center items-center py-16 lg:py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0"
        >
          {/* Left section text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p
              className={`${fonts.inter} text-black font-bold text-sm md:text-base`}
            >
              Our Story
            </p>
            <div className="space-y-8">
              <Heading>Your Trusted Partner in Business Innovation.</Heading>
              <div className="space-y-4">
                <SubText>
                  It is our firm belief that every business deserves access to
                  top-notch technology solutions of the day for not just
                  competitive edge but also a promising growth and sustainable
                  future. Recognizing a need for personalized, high-quality IT
                  services, SVIQ was founded in 2021 to help businesses succeed
                  in an increasingly digital world. Since then, we've grown into
                  a trusted IT partner for companies of all sizes from start-ups
                  to large enterprises, across a wide range of industries.
                </SubText>
                <SubText>
                  What sets us apart is our slew of solutions built by an adept
                  team of skilled and passionate professionals. With expertise
                  spanning various technology fields, we create solutions that
                  are not only innovative but also easy to use and built to
                  adapt effortlessly to meet the unique needs of each client. By
                  combining technical excellence with a creative approach and
                  in-depth domain knowledge in business functional areas, we
                  deliver solutions that increase efficiency and drive growth.
                </SubText>
                <SubText>
                  Collaboration is at the heart of everything we do at SVIQ. We
                  work closely with our clients to understand their challenges
                  and goals, ensuring that every solution we deliver is
                  practical, effective, and built to last. With a consultative
                  angle, we recommend approaches in line with proven industry
                  best practices to ensure the highest rate of user adoption as
                  well as business outcomes.
                </SubText>
              </div>
              <div className="space-y-4">
                <SubText>
                  Our leadership team provides strategic guidance, while our
                  experts handle the execution with precision, turning even the
                  most complex ideas into reality.
                </SubText>
                <SubText>
                  Whether it's designing a strong online presence, refining
                  digital marketing strategies, or implementing advanced
                  software solutions, we're here to help our clients succeed
                  every step of the way.
                </SubText>
                <SubText>
                  Partner with SVIQ Solutions, and you'll gain a dedicated ally
                  focused on helping your business thrive in today's fast-paced
                  digital landscape.
                </SubText>
              </div>
            </div>
          </motion.div>
          {/* Right section image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="h-full flex justify-center"
          >
            <div className="relative w-full lg:w-[75%] h-[470px]">
              <Image src={"/images/story.png"} fill alt="Story" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Story;
