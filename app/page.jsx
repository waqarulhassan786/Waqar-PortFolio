import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import CustomCursor from "../components/layout/CustomCursor";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import ProjectManagement from "../components/sections/ProjectManagement";
import Resume from "../components/sections/Resume";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="page-shell min-h-screen text-slate-100">
      <div className="noise" />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <ProjectManagement />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
