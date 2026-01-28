// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/ui/Container";
// import { OutlinedButton } from "@/components/ui/OutlinedButton";
// import { fonts } from "@/config/fonts";
// import HomeBannerCards from "./HomeBannerCards";
// import HeroProductSlider from "@/components/ui/SlidingHero";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// export default function Hero() {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of section is visible
//       className="bg-primary flex justify-center items-center min-h-[85vh]  lg:min-h-[95vh] lg:py-12"
//     >
//       <Container className=" space-y-12">
//         <motion.h1
//           variants={fadeInUp}
//           className={`${fonts.darkerGrotesque} text-white text-5xl md:text-6xl lg:text-[150px]  lg:leading-[117px]`}
//         >
//           Delivering Software Solutions That Powers Business Excellence
//         </motion.h1>

//         {/* <HomeBannerCards ></HomeBannerCards> */}

//         <motion.div variants={fadeInUp} className="max-w-2xl">
//           <p className={`${fonts.inter} text-white text-xl md:text-2xl`}>
//             From MVP to fully custom-made web & mobile solutions, we can turn
//             your ideas into pixels
//           </p>
//         </motion.div>

//         <motion.div variants={fadeInUp}>
//           <OutlinedButton color="white" href="/solutions">
//             Discover our Solutions
//           </OutlinedButton>
//         </motion.div>
//       </Container>
//     </motion.section>
//   );
// }

'use client';

import EmbrDashboardMock from '@/components/mockDashboards/embrDashboardMock';
import VizTrackDashboardMock from '@/components/mockDashboards/vizTrackDashboardMock';
import Container from '@/components/ui/Container';
import { OutlinedButton } from '@/components/ui/OutlinedButton';
import { fonts } from '@/config/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import HeroSection from './HomeProductBanner';
import SafeTrackDashboardMock from '@/components/mockDashboards/SafeTrackDashboardMock';
import LogiTrackDashboardMock from '@/components/mockDashboards/LogiTrackDashboardMock';

const fadeVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

const heroSlides = [
  {
    title: 'Delivering Software Solutions That Powers Business Excellence',
    subtitle:
      'From MVP to fully custom-made web & mobile solutions, we can turn your ideas into pixels',
    cta: 'Discover our Solutions',
    link: '/solutions',
  },
  {
    render: () => <HeroSection dashboardMock={<VizTrackDashboardMock />} />,
  },
  {
    render: () => (
      <HeroSection
        badgeText="SVIQ eBMR"
        headline="Digital, Compliant"
        highlight="Batch Manufacturing"
        subheadline="SVIQ eBMR digitizes and streamlines manufacturing for chemical and pharmaceutical companies. With real-time data, complete batch traceability, and built-in compliance, it ensures data integrity, operational excellence, and consistent product quality."
        features={[
          { title: 'Real-time Batch Records', subtitle: 'Instant digital visibility' },
          { title: 'Complete Traceability', subtitle: 'End-to-end batch history' },
          { title: 'Built-in Compliance', subtitle: '21 CFR Part 11 ready' },
          { title: 'Data Integrity', subtitle: 'Audit-ready & validated' },
        ]}
        // onSiteNow={42}
        // todayVisits={320}
        // compliance={99}
        dashboardMock={<EmbrDashboardMock />}
        productSlug="batch-manufacturing-records"
      />
    ),
  },

  // SafeTrack
  {
    render: () => (
      <HeroSection
        badgeText="SVIQ SafeTrack"
        headline="Smarter, Safer"
        highlight="Workplace Safety"
        subheadline="SVIQ SafeTrack empowers organizations to manage safety, risk, and compliance with confidence. By streamlining workflows and ensuring regulatory adherence, it reduces risk and builds a safer, more sustainable workplace."
        features={[
          { title: 'Incident Management', subtitle: 'Report & resolve faster' },
          { title: 'Risk Assessments', subtitle: 'Proactive hazard control' },
          { title: 'Compliance Tracking', subtitle: 'Regulatory readiness' },
          { title: 'Safety Analytics', subtitle: 'Data-driven insights' },
        ]}
        dashboardMock={<SafeTrackDashboardMock />}
        productSlug="enviroment-health-safety"
      />
    ),
  },

  // LogiTrack
  {
    render: () => (
      <HeroSection
        badgeText="SVIQ LogiTrack"
        headline="Smarter, Faster"
        highlight="Logistics Visibility"
        subheadline="SVIQ LogiTrack simplifies and optimizes logistics and material movement with real-time tracking and complete visibility. It enhances control, improves efficiency, and ensures seamless coordination across operations."
        features={[
          { title: 'Real-time Tracking', subtitle: 'Live shipment visibility' },
          { title: 'Material Movement', subtitle: 'End-to-end control' },
          { title: 'Operational Efficiency', subtitle: 'Reduce delays & costs' },
          { title: 'Logistics Analytics', subtitle: 'Actionable performance data' },
        ]}
        dashboardMock={<LogiTrackDashboardMock />}
        productSlug="batch-manufacturing-records"
      />
    ),
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, isPaused]);

  const slide = heroSlides[index];

  return (
    <section
      className="bg-primary flex justify-center items-center relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* <Container className="space-y-12 relative bg-red-600"> */}
      <AnimatePresence mode="wait">
        <Container>
          <motion.div
            key={index}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-8 mt-8 mb-24 md:mb-24 lg:mb-16"
          >
            {slide.render ? (
              slide.render()
            ) : (
              <div className="space-y-8">
                <h1
                  className={`${fonts.darkerGrotesque} text-white text-6xl lg:text-[150px] lg:leading-[117px]`}
                >
                  {slide.title}
                </h1>

                <div className="max-w-2xl">
                  <p className={`${fonts.inter} text-white text-xl md:text-2xl`}>
                    {slide.subtitle}
                  </p>
                </div>

                {slide.cta && slide.link && (
                  <OutlinedButton color="white" href={slide.link}>
                    {slide.cta}
                  </OutlinedButton>
                )}
              </div>
            )}
          </motion.div>
        </Container>
      </AnimatePresence>

      {/* Desktop Arrows (lg+) */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 border border-white/40 rounded-full hover:bg-white/10 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 border border-white/40 rounded-full hover:bg-white/10 transition"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute hidden  bottom-6 left-1/2 -translate-x-1/2 lg:flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Mobile Pagination + Arrows (below lg) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 lg:hidden">
        {/* Prev */}
        <button
          onClick={prevSlide}
          className="text-white p-2 border border-white/40 rounded-full hover:bg-white/10 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="text-white p-2 border border-white/40 rounded-full hover:bg-white/10 transition"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
