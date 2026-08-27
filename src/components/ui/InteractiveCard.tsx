"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fonts } from "@/config/fonts";
import Link from "next/link";
interface InteractiveCardProps {
  name: string;
  description: string;
  href: string;
  bgColor: string;
  textColor: string;
  size?: "small" | "large";
}

// Custom hook for media queries

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
    return undefined;
  }, [query]);

  return matches;
}

const InteractiveCard: FC<InteractiveCardProps> = ({
  name,
  description,
  href,
  bgColor,
  textColor,
  size = "small",
}) => {
  // Track if the card is in active state (for mobile)
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const getCardState = () => {
    if (isMobile) {
      return isActive ? "hover" : "initial";
    }
    return "initial";
  };

  return (
    <motion.div
      className={`relative w-full transform transition-all ease-out duration-300 rounded-3xl border-[4px] border-dashed overflow-hidden flex flex-col justify-between ${
        size === "small"
          ? "px-6 py-6 hover:py-4"
          : "px-14 py-8 hover:py-8 hover:px-8"
      }`}
      style={{
        height: size === "small" ? "256px" : "380px",
        scale: 1,
        backgroundColor: "#F7F6FF",
        color: bgColor,
        borderColor: bgColor,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      }}
      initial="initial"
      whileHover="hover"
      animate={getCardState()}
      variants={{
        initial: {
          backgroundColor: "#F7F6FF",
          color: bgColor,
          borderColor: bgColor,
        },
        hover: {
          backgroundColor: bgColor,
          color: "#FFFFFF",
          borderColor: bgColor,
          scale: 1.03,
          boxShadow: "0px 10px 24px rgba(13, 6, 58, 0.12)",
          transition: {
            duration: 0.3,
          },
        },
      }}
      // Handle mobile tap interactions
      onClick={() => {
        if (isMobile) {
          setIsActive(!isActive);
        }
      }}
    >
      <div
        className="h-full w-full"
        onClick={(e) => {
          if (isMobile && !isActive) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <Link href={href} className="block h-full">
          {/* Text Content */}
          <div
            className={`flex flex-col flex-grow ${
              size === "large" && "space-y-5"
            }`}
          >
            <motion.h3
              className={` ${
                size === "small"
                  ? fonts.bricolageGrotesque
                  : fonts.darkerGrotesque
              } font-semibold`}
              variants={{
                initial: {
                  fontSize: size === "small" ? "32px" : "76px",
                  lineHeight: size == "small" ? "42px" : "72px",
                  maxWidth: "100%",
                  y: "25%",
                  transition: {
                    duration: 0.3,
                  },
                },
                hover: {
                  y: "0%",
                  fontSize: size === "small" ? "24px" : "64px",
                  lineHeight: size == "small" ? "32px" : "62px",
                  maxWidth: "80%",
                  transition: {
                    duration: 0.3,
                  },
                },
              }}
            >
              {name}
            </motion.h3>

            <motion.p
              className={`${fonts.inter} font-medium mt-3 ${
                size === "small"
                  ? "text-sm max-w-2xl leading-[22px] "
                  : "text-lg max-w-3xl leading-loose"
              }`}
              variants={{
                initial: {
                  opacity: 0,
                  y: 15,
                  display: "none",
                },
                hover: {
                  opacity: 1,
                  y: 0,
                  display: "block",
                  transition: {
                    duration: 0.3,
                    delay: 0.2,
                  },
                },
              }}
            >
              {description}
            </motion.p>
          </div>

          {/* Arrow Icon */}
          <motion.div
            className="absolute bottom-5 right-5"
            variants={{
              initial: { rotate: 0 },
              hover: {
                rotate: -45,
                transition: {
                  duration: 0.3,
                  delay: 0.1,
                },
              },
            }}
          >
            <ArrowRight size={size === "small" ? 32 : 34} />
          </motion.div>
        </Link>
      </div>

      {/* Mobile indicator - optional visual cue that the card is tappable */}
      {isMobile && (
        <motion.div
          className="absolute bottom-5 left-5 text-xs font-medium"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isActive ? 0 : 0.7 }}
        >
          {isActive ? "" : "Tap to view"}
        </motion.div>
      )}
    </motion.div>
  );
};

export default InteractiveCard;
