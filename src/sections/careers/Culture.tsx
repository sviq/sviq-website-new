"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";
import { FC } from "react";

interface CultureCardProps {
  emoji: string;
  title: string;
  description: string;
}

const CultureCard: FC<CultureCardProps> = ({ emoji, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white px-6 py-8 space-y-3"
    >
      <div className="bg-[#FFD3AF]/50 w-12 h-12 flex justify-center items-center rounded-full">
        <p className="text-xl">{emoji}</p>
      </div>
      <div className="space-y-2">
        <p className={`${fonts.darkerGrotesque} text-2xl font-bold`}>{title}</p>
        <p className={`${fonts.inter} text-base`}>{description}</p>
      </div>
    </motion.div>
  );
};

const Culture = () => {
  const culture = [
    {
      emoji: "😷",
      title: "Covid-19 insurance",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      emoji: "⏱",
      title: "Flexible working time",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      emoji: "🏡",
      title: "Work from home",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      emoji: "🎉",
      title: "Annual retreats",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      emoji: "💰",
      title: "Learning stipend",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
      emoji: "💪",
      title: "Gym membership",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#FAFAFC] flex justify-center items-center py-12 md:py-14 lg:py-24"
    >
      <Container className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-5"
        >
          <p className={`${fonts.poppins} text-sm tracking-[3px]`}>
            OUR WORK & CULTURE
          </p>
          <Heading>
            Come and join a team of highly skilled professionals.
          </Heading>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culture.map((item, index) => (
            <CultureCard
              key={index}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Culture;
