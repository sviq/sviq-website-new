"use client";
import { fonts } from "@/config/fonts";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import React from "react";

type GridItemProps = {
  title: string;
  content: React.ReactNode;
  bgColor: string;
};

const GridItem = ({ title, content, bgColor }: GridItemProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-10 md:p-20 flex flex-col justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="space-y-5">
        <p
          className={`${fonts.darkerGrotesque} text-black font-medium text-4xl md:text-6xl lg:text-[78px] leading-none`}
        >
          {title}
        </p>
        <div
          className={`${fonts.inter} text-sm md:text-base text-primaryBlack`}
        >
          {content}
        </div>
      </div>
    </motion.div>
  );
};

const Vision = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <GridItem
          title="Our Vision"
          content={
            <div className="space-y-4 max-w-xl">
              <p>
                To become a globally renowned and prestigious organization by
                achieving excellence in:
              </p>
              <ul className="list-disc pl-4">
                <li>Driving business process digitalization success</li>
                <li>Serving diverse industry verticals</li>
                <li>Delivering effective process automation solutions</li>
                <li>
                  Providing advanced collaboration platforms and managed
                  services
                </li>
              </ul>
            </div>
          }
          bgColor="#FFEBDB"
        />
        <GridItem
          title="Our Mission"
          content={
            <ul className="list-disc pl-4 max-w-xl">
              <li>
                To develop and deliver reliable technology platforms that drive
                process digitalization, automation, and optimization of
                organizational and management resources, ensuring exceptional
                outcomes across global industry verticals.
              </li>
              <li>
                To provide highly efficient managed services and skilled team
                resources, enabling businesses to maximize value and achieve
                operational excellence.
              </li>
            </ul>
          }
          bgColor="#FFF5ED"
        />
        <GridItem
          title="Our Values"
          content={
            <p className="max-w-xl">
              We hold ourselves to the highest values, emphasizing honesty,
              integrity, empathy, equal opportunity, camaraderie, collaboration,
              unity of purpose, and a commitment to delivering top-quality
              services, solutions and products.
            </p>
          }
          bgColor="#FFF5ED"
        />
        <GridItem
          title="Our Methodology"
          content={
            <p className="max-w-xl">
              We follow an Agile methodology to ensure flexibility,
              collaboration, and efficiency in delivering solutions. By breaking
              projects into iterative cycles, we prioritize continuous
              improvement and adaptability to meet evolving client needs. Our
              approach fosters close collaboration with stakeholders, enabling
              us to deliver high-quality results that align with business
              objectives while maintaining transparency and responsiveness
              throughout the process.
            </p>
          }
          bgColor="#FFEBDB"
        />
      </div>
    </section>
  );
};

export default Vision;
