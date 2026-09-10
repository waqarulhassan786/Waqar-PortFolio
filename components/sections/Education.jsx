"use client";

import { useState } from "react";
import { education, languages } from "../../lib/content";
import { IconChevron, IconGrad } from "../Icons";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Education() {
  const [open, setOpen] = useState(true);

  return (
    <section id="education" className="relative overflow-hidden border-t border-white/5 py-14">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Education"
          kickerIcon={<IconGrad />}
          title="Education & Qualifications"
          highlight="Qualifications"
          text="Academic foundation behind the engineering work."
          badge={
            <>
              1
              <br />
              degree
            </>
          }
          rail
        />
        <Reveal>
          <article className="rounded-3xl border border-white/10 bg-[#111113]">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-8"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="min-w-0">
                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">{education.degree}</h3>
                <span className="mt-2 block text-sm text-zinc-400">
                  {education.school}
                  <span className="mx-2 text-zinc-600">•</span>
                  {education.location}
                </span>
                <span className="mt-3 flex flex-wrap gap-1.5 md:hidden">
                  <span className="inline-flex rounded-md border border-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                    CGPA {education.cgpa}
                  </span>
                </span>
              </span>
              <span className="flex shrink-0 items-start gap-3">
                <span className="hidden flex-col items-end gap-2 md:flex">
                  <span className="inline-flex rounded-lg border border-white/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-zinc-400">
                    CGPA {education.cgpa}
                  </span>
                </span>
                <IconChevron className={`mt-1 h-5 w-5 text-zinc-500 transition ${open ? "rotate-180" : ""}`} />
              </span>
            </button>
            {open ? (
              <div className="border-t border-white/8 px-6 pb-6 sm:px-8 sm:pb-8">
                <ul className="mt-5 space-y-3">
                  {education.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={education.schoolUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm text-zinc-400 hover:text-white">
                  Visit university site
                </a>
                <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-zinc-500">Languages</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {languages.map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm">
                      <span className="text-white">{item.name}</span>
                      <span className="text-zinc-500">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        </Reveal>
      </div>
    </section>
  );
}
