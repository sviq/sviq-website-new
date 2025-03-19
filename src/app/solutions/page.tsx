import PageIntro from "@/components/PageIntro";
import { generateSEO } from "@/lib/seo";
import Industries from "@/sections/solutions/Industries";
import Process from "@/sections/solutions/Process";
import OurSolutions from "@/sections/solutions/Solutions";

export const metadata = generateSEO({
  title: "Our Solutions | SVIQ Solutions LLP",
  description:
    "We deliver cutting-edge IT solutions designed to enhance efficiency, growth, and digital transformation, ensuring your business stays ahead.",
});

export default function Solutions() {
  return (
    <main>
      <PageIntro
        pageName="Our Solutions"
        title="Innovative Solutions Tailored for Your Success."
        description="We deliver cutting-edge IT solutions designed to enhance efficiency, growth, and\ndigital transformation, ensuring your business stays ahead."
      />
      <Process />
      <OurSolutions />
      <Industries />
    </main>
  );
}
