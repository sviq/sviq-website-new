"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import { fonts } from "@/config/fonts";

interface PageIntroProps {
  pageName: string;
  title: string;
  description?: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const PageIntro: FC<PageIntroProps> = ({ pageName, title, description }) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="bg-white flex justify-center items-center py-20"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          className="max-w-5xl space-y-5"
        >
          <motion.p
            variants={itemVariants}
            className={`${fonts.inter} text-sm md:text-base font-bold uppercase`}
          >
            {pageName}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className={`${fonts.darkerGrotesque} text-5xl lg:text-8xl`}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={itemVariants}
              className={`${fonts.inter} text-sm md:text-base`}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default PageIntro;
