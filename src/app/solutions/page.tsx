import PageIntro from "@/components/PageIntro";
import { generateSEO } from "@/lib/seo";
import Industries from "@/sections/solutions/Industries";
import Process from "@/sections/solutions/Process";
import OurSolutions from "@/sections/solutions/Solutions";

export const metadata = generateSEO({
  title: "Our Solutions | SVIQ Solutions LLP",
  description:
    "Web applications, SaaS, mobile apps, business websites, and hosting — plus products: Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and eBMR.",
});

export default function Solutions() {
  return (
    <main>
      <PageIntro
        pageName="Our Solutions"
        title="Web apps, SaaS, mobile, websites, and hosting."
        description="We build the software your business runs on — and we can host it. Ready products sit next to this work: Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and eBMR."
      />
      <Process />
      <OurSolutions />
      <Industries />
    </main>
  );
}
