"use client";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface MemberProps {
  image: string;
  name: string;
  role: string;
  content: ReactNode;
}

const MemberInfo = ({ image, name, role, content }: MemberProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <div className="relative w-full h-[400px] lg:h-[400px]">
        <Image src={image} alt={name} fill quality={100} />
      </div>
      <div className="lg:col-span-2 space-y-5 lg:max-w-[90%]">
        <p className={`${fonts.inter} text-2xl text-primaryBlack font-medium`}>
          {name}
        </p>
        <p className={`${fonts.inter} text-[#0D063A] text-sm`}>{role}</p>
        <div className={`${fonts.inter} text-base text-[#0D063A]`}>
          {content}
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section className="flex justify-center items-center py-12 lg:py-24">
      <Container className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="space-y-2 max-w-3xl"
        >
          <p className={`${fonts.inter} text-sm md:text-base font-bold`}>
            MEET OUR TEAM
          </p>
          <Heading>Meet the Experts Behind Our Success</Heading>
        </motion.div>
        <div className="space-y-16">
          <MemberInfo
            image="https://picsum.photos/500"
            name="Suntosh Mankodi"
            role="Co-Founder and Principal Solutions Consultant"
            content={
              <div className="space-y-5">
                <p>
                  A techno-functional leader over three decades in various
                  multinational conglomerates in the conceptualization, design
                  and delivery of innovative, scalable technology solutions that
                  drive business transformation through digitalization and
                  automation, he specializes in leveraging information
                  technology to the business advantage of organizations of any
                  size.
                </p>
                <p>
                  As a strategic advisor and solution architect to SVIQs
                  clients, he helps organizations streamline operations, enhance
                  efficiency, and leverage cutting-edge technologies. He also
                  oversees management of quality and compliance for SVIQs
                  solutions. Always upbeat about solving complex challenges, he
                  ensures customer success by collaborating closely with
                  stakeholders to design and implement solutions that align best
                  with business goals of organizations.
                </p>
              </div>
            }
          />
          <MemberInfo
            image="https://picsum.photos/500"
            name="Abhishek Dave"
            role="Co-Founder and Head - Business Development"
            content={
              <div className="space-y-5">
                <p>
                  He is passionate about solving customer challenges through
                  innovative technology, helping businesses grow, scale, and
                  thrive. A business leader with a dozen years' involved
                  experience across product marketing and strategy, he works
                  with a steadfast, customer-centric approach. He is adept at
                  identifying high-impact software solutions that maximize value
                  and revenue for the organizations he consults. His keen
                  understanding of business requirements helps him grasp
                  customers' pain points and align the right resources from SVIQ
                  to facilitate speedy and informed decisions.
                </p>
                <p>
                  He also enjoys bridging technical and executive conversations,
                  and inspiring action with clear, motivating narratives.
                  Personally, he is committed to continuous learning and
                  high-quality decision-making, especially under pressure.
                </p>
              </div>
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Team;
