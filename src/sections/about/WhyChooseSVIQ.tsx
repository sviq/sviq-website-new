'use client';

import Container from '@/components/ui/Container';
import type { Variants } from 'framer-motion';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { BarChart3, CheckCircle2, Handshake, Shield, TrendingUp, Zap } from 'lucide-react';
import { useRef } from 'react';

const capabilities = [
  {
    icon: CheckCircle2,
    title: 'Domain-Driven Expertise',
    description:
      'Deep understanding of manufacturing, pharma, and chemical industries. We speak your language and understand your regulatory, operational, and compliance challenges.',
  },
  {
    icon: Zap,
    title: 'Techno-Functional Strength',
    description:
      "Our team bridges business and technology seamlessly. We don't just code—we architect solutions that align with your strategic objectives and operational workflows.",
  },
  {
    icon: Shield,
    title: 'Compliance by Design',
    description:
      'Built-in audit trails, data integrity, role-based access, and regulatory adherence. We design for compliance from day one, not as an afterthought.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable & Future-Ready',
    description:
      'Our solutions grow with your business. Cloud-native architectures, modular design, and technology choices that ensure long-term flexibility and scalability.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description:
      'Data-driven decision-making through advanced analytics, Power BI integrations, and AI-powered insights that transform raw data into strategic intelligence.',
  },
  {
    icon: Handshake,
    title: 'Trusted Delivery Partner',
    description:
      'Transparent communication, predictable timelines, and quality-first execution. We measure success by your outcomes, not just project completion.',
  },
];

export default function WhyChooseSVIQ() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } satisfies Variants;

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -20,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  } satisfies Variants;

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    show: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  } satisfies Variants;

  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  } satisfies Variants;

  return (
    <section id="why-choose-sviq" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background decoration */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#463deb]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#463deb]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="relative z-10"
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Why Choose Us?
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mb-12 lg:mb-16 relative"
          ></motion.div>
        </motion.div>

        {/* Bullet List */}
        <motion.div
          ref={containerRef}
          className="relative z-10"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 gap-y-8">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 group relative"
                  whileHover={{ x: shouldReduceMotion ? 0 : 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {/* Connection line */}
                  {index < capabilities.length - 1 && (
                    <motion.div
                      className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-[#463deb]/30 to-transparent"
                      variants={lineVariants}
                      style={{ originX: 0.5, originY: 0 }}
                    />
                  )}

                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1 relative z-10">
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#463deb] to-[#6b63ff] flex items-center justify-center  duration-300 relative overflow-hidden"
                    >
                      <Icon className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#463deb] transition-colors duration-200"
                      whileHover={{ x: shouldReduceMotion ? 0 : 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>

                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-[#463deb]/[0.02] rounded-xl -mx-4 -my-2 px-4 py-2 -z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Animated floating particles */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#463deb]/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
