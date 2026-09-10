import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import ScrollProgress from "../../components/layout/ScrollProgress";
import CustomCursor from "../../components/layout/CustomCursor";
import FloatingControls from "../../components/layout/FloatingControls";
import DevTerminal from "../../components/terminal/DevTerminal";
import { TerminalProvider } from "../../components/terminal/TerminalContext";
import ProjectsArchive from "../../components/sections/ProjectsArchive";
import { profile } from "../../lib/content";

export const metadata = {
  title: "Projects",
  description: `All projects by ${profile.name} — shipped MERN products, backend systems, and concept builds.`,
};

export default function ProjectsPage() {
  return (
    <TerminalProvider>
      <div className="page-shell min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        <main>
          <ProjectsArchive />
        </main>
        <Footer />
      </div>
      <FloatingControls />
      <DevTerminal />
    </TerminalProvider>
  );
}
