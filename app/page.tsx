import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Technologies } from "@/components/sections/Technologies";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo" className="flex-1">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Services />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
