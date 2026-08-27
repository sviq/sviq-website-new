"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fonts } from "@/config/fonts";

const AboutBanner = () => {
  return (
    <section className="flex justify-center items-center pb-8 md:pb-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden"
        >
          <Image
            src="/images/about-banner.jpg"
            alt=""
            fill
            quality={100}
            priority
            sizes="(max-width: 1360px) 100vw, 1360px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navyBlue/70 via-navyBlue/20 to-transparent" />
          <div className="absolute inset-0 flex items-end p-6 md:p-10 lg:p-14">
            <p
              className={`${fonts.darkerGrotesque} text-white text-3xl md:text-5xl lg:text-[56px] leading-none max-w-2xl`}
            >
              Custom work. Products we ship. Hosting included.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutBanner;
