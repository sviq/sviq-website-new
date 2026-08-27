"use client";
import Container from "@/components/ui/Container";
import { fonts } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { motion } from "framer-motion";

export const Openings = () => {
  return (
    <section className="flex justify-center items-center py-6 md:py-10 lg:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2
            className={`${fonts.darkerGrotesque} w-full text-center font-extrabold leading-[0.82] tracking-[-0.04em] text-[clamp(3.25rem,16vw,11.5rem)] text-transparent bg-clip-text bg-cover bg-center bg-no-repeat select-none`}
            style={{
              backgroundImage: "url('/images/careers-fill.jpg')",
              WebkitTextFillColor: "transparent",
            }}
          >
            Careers
          </h2>

          <motion.div
            className="bg-softCyan px-8 py-12 md:px-16 md:py-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <p
                className={`${fonts.inter} text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-primary`}
              >
                Open roles
              </p>
              <p
                className={`${fonts.darkerGrotesque} text-4xl md:text-5xl font-bold text-primaryBlack leading-tight`}
              >
                No openings right now
              </p>
              <p
                className={`${fonts.inter} text-base md:text-lg text-[#110C3E] leading-relaxed`}
              >
                We are a small team building custom software, SaaS, and our
                product suite. When a seat opens, it will be listed here.
                If you still want to introduce yourself, write to{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-semibold underline underline-offset-4"
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className={`${fonts.inter} inline-flex items-center justify-center py-3 px-6 bg-primary text-white border border-primary hover:bg-white hover:text-primary transition duration-300 ease-in-out font-medium text-lg rounded-md`}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
