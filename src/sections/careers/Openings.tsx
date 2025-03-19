"use client";
import Container from "@/components/ui/Container";
import { fonts } from "@/config/fonts";
import { AllOpenings } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Openings = () => {
  return (
    <section className="flex justify-center items-center py-12 md:py-14 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          <motion.img
            src="/images/careers.png"
            className="w-full h-auto object-cover"
            alt="Careers"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.div
            className="flex flex-col space-y-3 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className={`${fonts.inter} text-base lg:text-lg`}>
              See our open positions
            </p>
            <p className="text-2xl">👇</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-10 bg-softCyan"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {AllOpenings.map((opening, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <p
                    className={`${fonts.inter} font-bold text-lg text-[#110C3E]`}
                  >
                    {opening.role}
                  </p>
                  <p className={`${fonts.inter} text-lg text-[#110C3E]`}>
                    {opening.position}
                  </p>
                  <p className={`${fonts.inter} text-lg text-[#110C3E]`}>
                    {opening.salary}
                  </p>
                </div>
                <div>
                  <Link href={`/careers/${opening.jobId}`}>
                    <span
                      className={`${fonts.inter} font-medium text-lg flex items-center space-x-2`}
                    >
                      <span>Apply Now</span> <ArrowRight size={22} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
