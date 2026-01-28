'use client';

import Container from '@/components/ui/Container';
import type { Variants } from 'framer-motion';
import { motion, useReducedMotion } from 'framer-motion';

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  } satisfies Variants;

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  } satisfies Variants;

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.96 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  } satisfies Variants;

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="md:col-span-7 space-y-8">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                About SVIQ Solutions
              </h2>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="h-1 bg-primary mb-6 lg:mb-8"
              />
            </motion.div>

            <div className="space-y-5 lg:space-y-6 text-base text-justify lg:text-lg text-gray-700 leading-relaxed">
              <motion.p variants={fadeUp} className="border-l-4 border-primary pl-4 lg:pl-6 py-2">
                SVIQ Solutions LLP is a technology-driven digital solutions company founded by
                seasoned industry leaders with deep domain expertise and strategic vision. We
                specialize in empowering manufacturing, pharmaceutical, and chemical enterprises to
                achieve digital transformation through intelligent, scalable, and compliant
                technology solutions.
              </motion.p>

              <motion.p variants={fadeUp}>
                Our team combines <strong className="text-primary">techno-functional DNA</strong>{' '}
                with global enterprise experience, enabling us to bridge the gap between business
                strategy and technical execution. We don't just build software—we architect digital
                foundations that drive operational excellence, regulatory compliance, and
                sustainable growth.
              </motion.p>

              <motion.p variants={fadeUp}>
                With a proven track record of delivering mission-critical solutions for regulated
                industries, SVIQ stands as a trusted partner committed to innovation, quality, and
                long-term value creation. Our approach is rooted in understanding your unique
                challenges and co-creating solutions that transform complexity into competitive
                advantage.
              </motion.p>
            </div>

            {/* Stats */}
            {/* <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-4 lg:pt-6"
            >
              {[
                { value: '15+', label: 'Years Combined Experience' },
                { value: '50+', label: 'Enterprise Projects' },
                { value: '3', label: 'Core Industries' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={statHover}
                  whileHover="hover"
                  className="text-center p-5 lg:p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow will-change-transform"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1 lg:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div> */}
          </div>

          {/* Right Image */}
          <motion.div
            variants={imageReveal}
            className="md:col-span-5 relative group will-change-transform"
          >
            {/* Float animation */}
            <motion.div className="relative">
              <img
                className="w-full h-auto rounded-2xl object-cover will-change-transform"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/54e809a2bd-7e59471ef759f1e107e2.png"
                alt="Professional business team collaborating in modern office"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
