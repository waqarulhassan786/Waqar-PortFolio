"use client";

import { useState } from "react";
import { experience } from "../../lib/content";
import { IconBriefcase } from "../Icons";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className="relative overflow-hidden border-t border-white/5 py-14">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Career"
          kickerIcon={<IconBriefcase />}
          title="Professional Experience"
          highlight="Experience"
          text="Roles where I shipped product and kept delivery moving."
          badge={
            <>
              2
              <br />
              roles
            </>
          }
          rail
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`block w-full text-left transition ${active === index ? "text-white" : "text-zinc-500 hover:text-zinc-200"}`}
                >
                  <p className="text-4xl font-black tracking-tight sm:text-5xl">{item.company}</p>
                  <p className="mt-1.5 text-sm">{item.role}</p>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em]">
                    {item.period} · {item.location}
                  </p>
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="border-l border-white/10 pl-5">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {job.current ? (
                  <p className="inline-flex rounded-full border border-emerald-400/30 px-3 py-1 text-[10px] uppercase tracking-widest text-emerald-300">
                    Present
                  </p>
                ) : null}
                <p className="inline-flex rounded-lg border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  {job.period}
                </p>
              </div>
              {job.bullets.map((bullet, index) => (
                <div key={bullet} className="mb-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{bullet}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
