'use client';

import Container from '@/components/ui/Container';
import type { Variants } from 'framer-motion';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Hammer, PenTool, Rocket, Search, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const processSteps = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'Deep-dive workshops to understand your business, challenges, and goals. We map processes and identify opportunities.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description:
      'Collaborative design sessions to create user-centric solutions with detailed specifications and architectural blueprints.',
  },
  {
    icon: Hammer,
    title: 'Build',
    description:
      'Agile development with continuous feedback loops. Regular demos ensure alignment and rapid iteration.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description:
      'Seamless deployment with comprehensive testing, user training, and change management support for smooth adoption.',
  },
  {
    icon: TrendingUp,
    title: 'Optimize',
    description:
      'Continuous monitoring, performance optimization, and enhancement based on real-world usage and feedback.',
  },
];

export default function DeliveryProcess() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstIconRef = useRef<HTMLDivElement | null>(null);
  const lastIconRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const [lineStyle, setLineStyle] = useState({});

  useEffect(() => {
    if (!firstIconRef.current || !lastIconRef.current || !containerRef.current) return;

    const firstRect = firstIconRef.current.getBoundingClientRect();
    const lastRect = lastIconRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const startX = firstRect.left + firstRect.width / 2 - containerRect.left;

    const endX = lastRect.left + lastRect.width / 2 - containerRect.left;

    setLineStyle({
      left: `${startX}px`,
      width: `${endX - startX}px`,
    });
  }, [isInView]);

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } satisfies Variants;

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
      scale: shouldReduceMotion ? 1 : 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
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
        damping: 15,
      },
    },
  } satisfies Variants;

  const lineVariants = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.5,
      },
    },
  } satisfies Variants;

  return (
    <section
      id="delivery-process"
      className="py-12 md:py-10 lg:py-20 min-w-full flex items-center justify-center relative overflow-hidden"
    >
      <Container>
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
            How We Deliver Value
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

        {/* Process Steps */}
        <div ref={containerRef} className="relative z-10">
          {/* Connection Line - Desktop */}
          <motion.div
            className="absolute top-12 h-1 bg-gradient-to-r from-[#463deb]/20 via-[#463deb] to-[#463deb]/20 "
            // style={lineStyle}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={lineVariants}
            style={{ ...lineStyle, originX: 0 }}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-6"
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={staggerContainer}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="text-center group relative"
                  whileHover={{ y: shouldReduceMotion ? 0 : -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Icon Container */}
                  <motion.div
                    ref={
                      index === 0
                        ? firstIconRef
                        : index === processSteps.length - 1
                          ? lastIconRef
                          : null
                    }
                    variants={iconVariants}
                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#463deb] transition-all duration-300 relative overflow-hidden"
                  >
                    <Icon className="w-10 h-10 text-[#463deb] relative z-10" strokeWidth={2} />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#463deb] transition-colors duration-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {step.title}
                  </motion.h3>
                  {/* <motion.p
                  
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-[#463deb]/5 rounded-2xl -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
