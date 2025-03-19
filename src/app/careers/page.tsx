import Container from "@/components/ui/Container";
import { fonts } from "@/config/fonts";
import { generateSEO } from "@/lib/seo";
import Culture from "@/sections/careers/Culture";
import Intro from "@/sections/careers/Intro";
import { Openings } from "@/sections/careers/Openings";

export const metadata = generateSEO({
  title: "Careers | SVIQ Solutions LLP",
  description:
    "Join us in building the future of IT and engineering solutions. Explore exciting opportunities at SVIQ and be part of a dynamic team.",
});

export default function Careers() {
  return (
    <main>
      <Intro />
      <Openings />
      <Culture />
    </main>
  );
}
