"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fonts } from "@/config/fonts";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
              In our approach to business at SVIQ, we're not just building
              cutting-edge IT and engineering solutions; we're building a
              community of innovators, problem-solvers, and collaborators. As a
              start-up, we thrive on fresh ideas, agility, and a passion for
              excellence. Joining our team means being part of a dynamic
              environment where your contributions make a real impact.
            </p>
            <p>
              We believe in fostering a culture of growth, creativity, and
              inclusivity. Whether you're a seasoned professional or just
              starting your career, SVIQ offers opportunities to learn, grow,
              and shape your journey. With us, you'll work on exciting projects,
              tackle challenging problems, and collaborate with a talented team
              dedicated to making a difference - all under the able direction of
              industry stalwarts as your mentors.
            </p>
            <p>
              Ready to be part of a start-up that values innovation,
              collaboration, and your unique potential? Explore our
              opportunities and take the first step towards an inspiring career
              at SVIQ.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Intro;
