import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Showcase from "@/components/sections/Showcase";
import Contact from "@/components/sections/Contact";
import ScrollReveal from "@/components/utils/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Showcase />
      <Contact />
      <ScrollReveal />
    </>
  );
}
