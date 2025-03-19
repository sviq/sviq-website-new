"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";
import { AllOpenings } from "@/constants";
import { Apply } from "@/sections/careers/Apply";

type Tabs = "details" | "responsibilities" | "requirements";

export default function Position() {
  const [selectedTab, setSelectedTab] = useState<Tabs>("details");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const router = useRouter();
  const { jobId } = useParams();
  const opening = AllOpenings.find((job) => job.jobId === jobId);

  const tabRefs = {
    details: useRef<HTMLButtonElement>(null),
    responsibilities: useRef<HTMLButtonElement>(null),
    requirements: useRef<HTMLButtonElement>(null),
  };

  useEffect(() => {
    if (!opening) router.push("/not-found");
  }, [opening, router]);

  useEffect(() => {
    const ref = tabRefs[selectedTab].current;
    if (ref) {
      setUnderlineStyle({
        left: ref.offsetLeft,
        width: ref.offsetWidth,
      });
    }
  }, [selectedTab]);

  if (!opening) return null;

  return (
    <main>
      <section className="flex justify-center items-center py-10 md:py-14 lg:py-20">
        <Container>
          <div className="space-y-12">
            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p
                  className={`${fonts.inter} uppercase text-sm font-bold text-primary`}
                >
                  CAREER AT SVIQ
                </p>
                <Heading>{opening.role}</Heading>
              </div>
              <div className="h-full bg-[#FFE0C7] p-7 lg:p-12 space-y-6 rounded-lg shadow-md">
                <p
                  className={`${fonts.inter} text-[#110C3E] font-bold text-lg`}
                >
                  Job Description
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#110C3E]">
                  {opening.jobDescription.map((item, index) => (
                    <li key={index} className={`${fonts.inter} text-base`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-softCyan rounded-lg p-6">
              <div className="relative flex gap-6 justify-start md:justify-center overflow-x-auto whitespace-nowrap px-4 scrollbar-hide">
                {(
                  ["details", "responsibilities", "requirements"] as Tabs[]
                ).map((tab) => (
                  <button
                    key={tab}
                    ref={tabRefs[tab]}
                    onClick={() => setSelectedTab(tab)}
                    className={`relative text-lg font-bold px-4 py-2 transition-all ${
                      selectedTab === tab ? "text-primary" : "text-[#110C3E]"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}

                {/* Animated Underline */}
                <motion.div
                  className="absolute bottom-0 h-1 bg-primary rounded-full"
                  animate={{
                    left: underlineStyle.left,
                    width: underlineStyle.width,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </div>

              {/* Tab Content Section */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="p-6"
                >
                  <ul className="list-disc pl-5 space-y-3">
                    {opening[selectedTab].map((item: string, index: number) => (
                      <li
                        key={index}
                        className={`${fonts.inter} text-base text-[#110C3E]`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>
      <Apply jobId={opening.jobId} />
    </main>
  );
}
