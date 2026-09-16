import About from "@/sections/home/About";
import FAQs from "@/sections/home/FAQs";
import Hero from "@/sections/home/Hero";
import Softwares from "@/sections/home/Softwares";
import WorkedFor from "@/sections/home/WorkedFor";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Softwares />
      <WorkedFor />
      <FAQs />
    </main>
  );
}
