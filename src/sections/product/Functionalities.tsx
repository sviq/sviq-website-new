"use client";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { Functionality } from "@/constants";
import { FC, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fonts } from "@/config/fonts";
import { useRef } from "react";

interface FunctionalitiesProps {
  name: string;
  functionalities: Functionality[];
}

const Functionalities: FC<FunctionalitiesProps> = ({
  name,
  functionalities,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className="bg-[#EBEAFF] flex justify-center items-center py-10 md:py-14 lg:py-20"
    >
      <Container className="space-y-10">
        <Heading>Functionalities of SVIQ {name}</Heading>
        <div className="space-y-6">
          {functionalities.map((func, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                activeIndex === index ? "bg-white shadow-lg" : "bg-transparent"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="flex items-center justify-between p-8 cursor-pointer border-b border-[#cbcbcb]"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className={`${fonts.inter} lg:text-2xl font-medium`}>
                  {func.name}
                </h3>
                <motion.div
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" as const }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.25, delay: 0.05 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {func.image && (
                        <img
                          src={func.image}
                          alt={func.name}
                          className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg"
                          loading="lazy"
                        />
                      )}
                      <div className="space-y-4">
                        <p
                          className={`${fonts.inter} text-lg font-medium text-[#110C3E]`}
                        >
                          {func.description}
                        </p>
                        <div>
                          <p
                            className={`${fonts.inter} text-lg font-semibold text-[#110C3E]`}
                          >
                            Key Features
                          </p>
                          <ul className="list-disc list-inside space-y-1 mt-2 pl-3 text-sm text-[#110C3E]">
                            {func.key_features.map((feature, i) => (
                              <li key={i} className={`${fonts.inter}`}>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Functionalities;
