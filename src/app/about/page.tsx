import PageIntro from "@/components/PageIntro";
import { generateSEO } from "@/lib/seo";
import AboutBanner from "@/sections/about/AboutBanner";
import Expertise from "@/sections/about/Expertise";
import Story from "@/sections/about/Story";
import Vision from "@/sections/about/Vision";
import { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "About Us | SVIQ Solutions LLP",
  description:
    "Web applications, SaaS, mobile apps, business websites, hosting, and products from SVIQ Solutions LLP: Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and eBMR.",
});

export default function About() {
  return (
    <main>
      <PageIntro
        pageName="About Us"
        title="SVIQ: Strategic Solutions, Seamless Execution"
        description="Web applications, SaaS, mobile apps, business websites, and hosting — plus our own products: Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and eBMR."
      />
      <AboutBanner />
      <Story />
      <Expertise />
      <Vision />
    </main>
  );
}
