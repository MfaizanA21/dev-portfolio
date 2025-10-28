import { projectsData } from "@/utils/data/projects-data";
import AboutSection from "./components/homepage/about";
import Projects from "./components/homepage/project";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";
import Service from "./components/homepage/service";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects projects={projectsData} />
      <Service />
      <ContactSection />
    </div>
  )
};