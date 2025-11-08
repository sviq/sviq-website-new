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
      emoji: "⏱",
      title: "Flexible working time",
      description:
        "Set your own hours and work where you are most productive while staying aligned on outcomes.",
    },
    {
      emoji: "🏡",
      title: "Remote-friendly team",
      description:
        "Collaborate async-first with teammates spread across time zones and stay connected through daily standups.",
    },
    {
      emoji: "🎉",
      title: "Quarterly offsites",
      description:
        "Gather in person several times a year to plan the roadmap, align priorities, and celebrate milestones together.",
    },
    {
      emoji: "🚀",
      title: "Startup pace",
      description:
        "Own big problems end-to-end, ship to customers weekly, and learn faster than you thought possible.",
    },
    {
      emoji: "💡",
      title: "Learning stipend",
      description:
        "Access a dedicated budget for books, courses, and conferences that keep your skills sharp.",
    },
    {
      emoji: "🤝",
      title: "Direct mentorship",
      description:
        "Partner closely with the founding team, get feedback quickly, and help shape how we build and work together.",
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
