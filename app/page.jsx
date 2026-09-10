import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import CustomCursor from "../components/layout/CustomCursor";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import FloatingControls from "../components/layout/FloatingControls";
import DevTerminal from "../components/terminal/DevTerminal";
import { TerminalProvider } from "../components/terminal/TerminalContext";

export default function Home() {
  return (
    <TerminalProvider>
      <div className="page-shell min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
      <FloatingControls />
      <DevTerminal />
    </TerminalProvider>
  );
}
