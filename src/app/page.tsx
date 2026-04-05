import { GradientMesh } from "@/components/effects/GradientMesh";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageLoader } from "@/components/layout/PageLoader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Freelance } from "@/components/sections/Freelance";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <GradientMesh />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Freelance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
