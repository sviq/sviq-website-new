'use client';

import Container from '@/components/ui/Container';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { Variants } from 'framer-motion';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const WORDS = [
    'Modern Enterprises',
    'Regulated Industries',
    'Manufacturing Leaders',
    'Pharma Innovators',
    'Digital-First Organizations',
  ];

  function useTypewriter(words: string[], typingSpeed = 40, pauseTime = 1400) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
      if (index >= words.length) setIndex(0);

      if (subIndex === words[index].length + 1 && !deleting) {
        setTimeout(() => setDeleting(true), pauseTime);
        return;
      }

      if (subIndex === 0 && deleting) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timeout = setTimeout(
        () => {
          setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
        },
        deleting ? typingSpeed / 2 : typingSpeed
      );

      return () => clearTimeout(timeout);
    }, [subIndex, index, deleting]);

    // Cursor blink
    useEffect(() => {
      const blinkTimeout = setInterval(() => setBlink((v) => !v), 500);
      return () => clearInterval(blinkTimeout);
    }, []);

    return {
      text: words[index].substring(0, subIndex),
      blink,
    };
  }

  const { text: typedText, blink } = useTypewriter(WORDS);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // ✅ tuple is valid
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  return (
    <Container>
      <section className="relative py-10 md:py-20 bg-white overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-16 items-center relative z-10"
        >
          {/* Left Content */}
          <div className="">
            {/* <motion.div variants={itemVariants} className="inline-block">
              <span className="text-white font-semibold text-sm tracking-wide uppercase bg-primary px-4 py-2 rounded-full">
                About Us
              </span>
            </motion.div> */}

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-[5.5rem] font-bold leading-tight text-gray-900"
            >
              Building Intelligent Digital Foundations for <br />
              <span className="text-primary inline-flex items-center">
                {typedText}
                <span
                  className={`inline-block w-[2px] h-[1em] bg-primary transition-opacity ${
                    blink ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-lg lg:text-xl lg:max-w-4xl mt-4 text-justify text-gray-600 leading-relaxed"
            >
              We are a technology-driven digital solutions partner, empowering manufacturing,
              pharma, and chemical enterprises with transformational digital capabilities that drive
              measurable business outcomes.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-row items-start gap-4 pt-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-3 py-2 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:shadow-lg transition-shadow"
              >
                Talk to Our Experts
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary border-2 border-primary px-3 py-2 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-primary hover:text-white transition-colors"
              >
                Request a Demo
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            className="hidden lg:block relative group will-change-transform"
          >
            {/* GPU-friendly glow */}
            {/* <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-purple-500/20 to-indigo-500/20 rounded-[2rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" /> */}

            {/* Tilted Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-3xl transform rotate-3 opacity-10" />

            {/* Floating subtle animation */}
            {/* <motion.div className="relative">
              <img
                className="relative w-full h-96 rounded-2xl object-cover will-change-transform"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/25e20e93d3-cf1ba75a504c4ee5c27d.png"
                alt="Modern enterprise technology visualization"
              />
            </motion.div> */}
          </motion.div>
        </motion.div>
      </section>
    </Container>
  );
}
