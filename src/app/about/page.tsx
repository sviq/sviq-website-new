import PageIntro from "@/components/PageIntro";
import Container from "@/components/ui/Container";
import { generateSEO } from "@/lib/seo";
import Expertise from "@/sections/about/Expertise";
import Story from "@/sections/about/Story";
import Team from "@/sections/about/Team";
import Vision from "@/sections/about/Vision";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = generateSEO({
  title: "About Us | SVIQ Solutions LLP",
  description:
    "At SVIQ, we prioritize a client-centric, collaborative approach. Our expert team delivers tailored, strategic solutions, ensuring effectiveness and sustainability while bringing complex visions to life.",
});

export default function About() {
  return (
    <main>
      <PageIntro
        pageName="About Us"
        title="SVIQ: Strategic Solutions, Seamless Execution"
        description="At SVIQ, we prioritize a client-centric, collaborative approach. Our expert team delivers tailored, strategic solutions, ensuring effectiveness and sustainability while bringing complex visions to life."
      />
      <section className="flex justify-center items-center py-8">
        <Container>
          <div className=" relative w-full h-[400px]">
            <Image src={"/images/AboutBanner.png"} alt="Banner" fill />
          </div>
        </Container>
      </section>
      <Story />
      <Expertise />
      <Vision />
      <Team />
    </main>
  );
}
