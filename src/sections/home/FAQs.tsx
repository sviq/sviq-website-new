"use client";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you cover end-to-end custom software development?",
    answer:
      "Yes. From the brief through design, build, test, and launch. That includes web applications, SaaS, mobile apps, business websites, and hosting. We work across industries — not only manufacturing plants.",
  },
  {
    question: "Do you also sell ready SaaS products?",
    answer:
      "Yes. Alongside custom work we ship Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and eBMR. You can take one product or several under Optiva. Audit management is not listed on this site at present.",
  },
  {
    question: "How much does it cost to develop custom software?",
    answer:
      "The cost of developing custom software varies greatly depending on the complexity of the project. We offer a consultation to discuss your project and provide a detailed quote.",
  },
  {
    question: "Do you provide support after software development is complete?",
    answer:
      "Yes. We offer support services including bug fixes, feature enhancements, and ongoing maintenance. We can also help you scale the software as the business grows.",
  },
  {
    question: "Where is SVIQ based?",
    answer:
      "Vadodara, Gujarat. Write to contact@sviq.co.in or call +91 95740 20156.",
  },
];

function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-[#FFF5ED] flex justify-center items-center min-h-screen py-14 lg:py-24">
      <Container className="space-y-16">
        <div className="space-y-1 lg:max-w-4xl">
          <p className={`${fonts.inter} text-sm md:text-base font-medium`}>
            In case you're wondering...
          </p>
          <Heading>Answers for easy understanding</Heading>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <motion.div
              onClick={() => toggleFAQ(index)}
              key={index}
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: 1,
                backgroundColor: activeIndex === index ? "#ffffff" : "#FFF5ED",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" as const }}
              className="p-6 md:p-10 rounded-3xl w-full cursor-pointer"
            >
              <motion.div className="flex justify-between items-center">
                <p
                  className={`${fonts.inter} font-medium text-xl text-primaryBlack`}
                >
                  {faq.question}
                </p>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" as const }}
                  className="text-primaryBlack"
                >
                  <ChevronDown size={28} />
                </motion.span>
              </motion.div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" as const }}
                    className="overflow-hidden md:max-w-[80%]"
                  >
                    <p
                      className={`${fonts.inter} text-base mt-4 text-primaryBlack`}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQs;
