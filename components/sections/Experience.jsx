import { experience } from "../../lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Experience"
          title="Professional timeline"
          text="Two engineering roles spanning MERN delivery, APIs, and client-facing execution."
        />
        <div className="relative space-y-8 border-l border-amber-400/25 pl-6 md:pl-8">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 90}>
              <TiltCard className="glass relative rounded-3xl p-6 md:p-8">
                <span className="absolute -left-[1.9rem] top-8 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_16px_rgba(212,160,23,0.8)] md:-left-[2.4rem]" />
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-1 text-amber-300">
                      {job.company} — {job.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <span>{job.period}</span>
                    {job.current ? <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs text-amber-300">Current</span> : null}
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5 text-slate-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
