import { profile } from "../../lib/content";
import { IconDownload } from "../Icons";
import Magnetic from "../ui/Magnetic";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Resume() {
  return (
    <section id="resume" className="relative z-10 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="glass flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-center">
          <SectionHeading
            kicker="Resume"
            title="Download the CV"
            text="PDF of the current CV — roles, dates, skills, and projects as submitted."
          />
          <Magnetic>
            <a
              href={profile.resume}
              download
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300"
            >
              <IconDownload />
              Download Resume
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
