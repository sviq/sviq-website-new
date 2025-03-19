"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";
import toast from "react-hot-toast";

interface AboutProps {
  name: string;
  about: string[];
  features: string[];
  brochure: string;
}

export const About: React.FC<AboutProps> = ({
  name,
  about,
  features,
  brochure,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-200px 0px" });

  const handleSubmit = async () => {
    if (!email.trim()) return;
    const toastId = toast.loading("Please wait...");

    try {
      const res = await fetch("/api/save-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, productName: name }),
      });

      if (!res.ok)
        return toast.error("Oops! Something went wrong.", { id: toastId });

      toast.success("You're all set! 🎉", { id: toastId });
      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      toast.error("Oops! Something went wrong.", { id: toastId });
      console.error("Failed to save email:", error);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center pt-4 pb-12 lg:pt-8 lg:pb-24"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0"
        >
          {/* Left Section */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <Heading>{name}</Heading>
            <ul className="list-disc pl-8 space-y-2">
              {about.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className={`${fonts.inter} text-sm md:text-base md:leading-[34px]`}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={fadeInUp}
            className="h-full flex justify-center lg:justify-end items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="w-full max-w-lg bg-primary rounded-2xl md:rounded-3xl p-9 lg:p-14 space-y-8"
            >
              <p
                className={`${fonts.bricolageGrotesque} text-white font-semibold text-2xl lg:text-3xl`}
              >
                Product functionality
              </p>
              <div>
                {features.map((feature, index) => (
                  <motion.p
                    key={index}
                    variants={fadeInUp}
                    className={`${fonts.inter} text-white py-4 text-base ${
                      index !== features.length - 1 &&
                      "border-b border-white/40"
                    }`}
                  >
                    {feature}
                  </motion.p>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className={`${fonts.inter} text-lg bg-white text-black py-4 px-7 rounded-md font-medium hover:bg-primary hover:text-white border border-white transition-colors duration-300 ease-in-out`}
              >
                Download Brochure
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-[95%] md:max-w-sm lg:max-w-md w-full text-center relative space-y-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✖
              </button>

              {!isSubmitted ? (
                <>
                  <h2
                    className={`${fonts.poppins} text-primaryBlack text-xl font-semibold`}
                  >
                    Get Instant Access to the Brochure
                  </h2>
                  <p className={`${fonts.inter} text-gray-600 text-sm`}>
                    Enter your email below to receive the download link.
                  </p>

                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/80 text-sm"
                  />

                  <div className="flex gap-4">
                    <button
                      onClick={handleSubmit}
                      className="bg-primary text-white px-4 py-2 rounded-md w-full disabled:opacity-50 transition-transform active:scale-95 hover:bg-primary/90"
                      disabled={!email.trim()}
                    >
                      Get Brochure
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-500 px-4 py-2 w-full hover:text-gray-700 transition-colors"
                    >
                      Maybe Later
                    </button>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`${fonts.poppins} text-green-600 font-medium space-y-6`}
                >
                  <p>You're all set! 🎉 Click below to access the brochure:</p>
                  <a
                    href={brochure}
                    target="_blank"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                  >
                    Download Now
                  </a>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
