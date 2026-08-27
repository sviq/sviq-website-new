import { generateSEO } from "@/lib/seo";
import Culture from "@/sections/careers/Culture";
import Intro from "@/sections/careers/Intro";
import { Openings } from "@/sections/careers/Openings";

export const metadata = generateSEO({
  title: "Careers | SVIQ Solutions LLP",
  description:
    "Careers at SVIQ Solutions LLP. Custom software, SaaS, and a product suite. No open roles right now — write to us.",
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
