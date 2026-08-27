"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";
import { Products } from "@/constants";
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
      emoji: "💻",
      title: "Custom software",
      description:
        "Web, mobile, and SaaS for clients who need software designed around how they actually work — not a template.",
    },
    {
      emoji: "📦",
      title: "Products we ship",
      description:
        "Client work sits next to our own suite: Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and eBMR.",
    },
    {
      emoji: "🧩",
      title: "Both kinds of work",
      description:
        "A client build one week, a product feature the next. Same people, same standards.",
    },
    {
      emoji: "🤝",
      title: "Small team, real access",
      description:
        "You sit close to the people talking to customers and shipping the product. Feedback is direct.",
    },
    {
      emoji: "🚀",
      title: "Brief to production",
      description:
        "You see work go live — a client build or a product feature — not a ticket that stops at a handoff.",
    },
    {
      emoji: "🌱",
      title: "Learn on live work",
      description:
        "Growth comes from shipping real software with a small team, not from a training programme on the side.",
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
          <Heading>Client work and products. Same desk.</Heading>
          <p className={`${fonts.inter} text-base md:text-lg text-[#110C3E]`}>
            We take on custom builds and we run our own SaaS. You will not be
            parked on one or the other.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {Products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className={`${fonts.inter} text-sm md:text-base px-4 py-2 rounded-full border border-[#110C3E]/15 bg-white text-[#110C3E] hover:border-primary hover:text-primary transition-colors`}
            >
              {product.shortName}
            </Link>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culture.map((item) => (
            <CultureCard
              key={item.title}
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
