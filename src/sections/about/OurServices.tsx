'use client';

import Container from '@/components/ui/Container';
import type { Variants } from 'framer-motion';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { BarChart3, Bot, Globe, Layers, RefreshCcw, Search } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: Layers,
    title: 'Bespoke Applications',
    description:
      'Tailor-made software that fits your business perfectly—enhancing productivity, control, and scalability.',
  },
  {
    icon: Globe,
    title: 'High-Performance Business Websites',
    description:
      'Conversion-driven websites that strengthen your brand, attract customers, and support business growth.',
  },
  {
    icon: RefreshCcw,
    title: 'Digital Transformation',
    description:
      'Transform manual and legacy processes into streamlined, automated, and data-driven operations.',
  },
  {
    icon: BarChart3,
    title: 'Power BI & Business Analytics',
    description:
      'Real-time dashboards and insights that empower leadership to make faster, smarter decisions.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description:
      'Smart automation and AI-powered solutions that reduce effort, improve accuracy, and boost efficiency.',
  },
  {
    icon: Search,
    title: 'SEO & Social Media Marketing',
    description:
      'Targeted digital strategies that increase online visibility, generate leads, and build brand authority.',
  },
];

export default function OurServices() {
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
    hidden: { scale: 0, rotate: -180 },
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
    hidden: { scaleY: 0, opacity: 0 },
    show: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  } satisfies Variants;

  return (
    <section
      id="our-services"
      className="py-20 min-w-full flex items-center justify-center bg-white relative overflow-hidden"
    >
      {/* Animated background decoration */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#463deb]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#463deb]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
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
          <motion.h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Our Services
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mb-6 lg:mb-8"
          />

          <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed mb-12">
            At SVIQ Solutions LLP, our digital services are designed to help organizations grow
            faster, operate smarter, and stay ahead in a competitive digital landscape. We deliver
            result-focused solutions that drive visibility, efficiency, and measurable ROI.
          </motion.p>
        </motion.div>

        {/* Services List */}
        <motion.div
          ref={containerRef}
          className="relative z-10"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 gap-y-8">
            {services.map((item, index) => {
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
                  {index < services.length - 1 && (
                    <motion.div
                      className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-[#463deb]/30 to-transparent"
                      variants={lineVariants}
                      style={{ originY: 0 }}
                    />
                  )}

                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1 relative z-10">
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#463deb] to-[#6b63ff] flex items-center justify-center relative overflow-hidden"
                    >
                      <Icon className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#463deb] transition-colors"
                      whileHover={{ x: shouldReduceMotion ? 0 : 4 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </motion.p>
                  </motion.div>

                  {/* Hover background */}
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
      </Container>
    </section>
  );
}
