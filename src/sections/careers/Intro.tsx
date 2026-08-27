"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fonts } from "@/config/fonts";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

function Intro() {
  return (
    <section className="flex justify-center items-center py-10 md:py-14 lg:py-24">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <motion.div variants={fadeInUp}>
            <p
              className={`${fonts.inter} text-[#110C3E] font-semibold md:font-bold text-xs md:text-sm uppercase`}
            >
              CAREER AT SVIQ
            </p>
            <h1
              className={`${fonts.darkerGrotesque} text-[#110C3E] text-6xl md:text-6xl lg:text-[102px] lg:leading-[90px]`}
            >
              We hire people who are always passionate about what they do.
            </h1>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className={`${fonts.inter} text-[#110C3E] text-sm md:text-base space-y-3`}
          >
            <p>
              In our approach to business at SVIQ, we&apos;re not just shipping
              software; we&apos;re building a community of problem-solvers and
              collaborators. As a start-up we thrive on fresh
              ideas, agility, and a passion for excellence. Joining our team
              means being part of a small environment where your contributions
              make a real impact.
            </p>
            <p>
              We believe in fostering a culture of growth, creativity, and
              inclusivity. Whether you&apos;re a seasoned professional or just
              starting your career, you&apos;ll work on custom software and on
              products we ship — Optiva, SafeTrack, Horizon, VizTrack,
              LogiTrack, DocuTrack, and eBMR — with mentors who have spent
              decades in industry.
            </p>
            <p>
              No open roles right now. If SVIQ still sounds like the place you
              want to build, write to us — we read every note.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Intro;
