"use client";

import { motion } from "framer-motion";
import { heroCode, profile, roles } from "../../lib/content";
import { IconArrow, IconGitHub, IconGmail, IconLinkedIn } from "../Icons";
import CodeWindow from "../ui/CodeWindow";
import TypedCode from "../ui/TypedCode";
import Typewriter from "../ui/Typewriter";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            <span className="rounded-full border border-white/10 px-3 py-1">3+ years experience</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Pakistan</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Open to work</span>
          </div>

          <div className="relative py-2">
            <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-gradient-to-b from-transparent via-zinc-500 to-transparent lg:block" />
            <p
              className="pointer-events-none absolute -top-5 left-0 hidden select-none text-[72px] font-black uppercase leading-none tracking-tighter text-white/10 lg:block lg:text-[90px]"
              aria-hidden="true"
            >
              Hello
            </p>
            <h1 className="relative mt-2 pl-0 text-4xl font-medium tracking-tight text-white sm:text-5xl lg:pl-4 lg:text-[3.2rem] lg:leading-tight">
              Hi, I&apos;m a
              <br />
              <Typewriter words={roles} />
            </h1>
            <div className="mt-4 flex items-center gap-3 pl-0 lg:pl-4">
              <span className="h-px max-w-[80px] flex-1 bg-gradient-to-r from-zinc-400 to-transparent" />
              <span className="h-1 w-1 rounded-full bg-zinc-400" />
            </div>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">{profile.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_0_20px_rgba(161,161,170,0.18)] transition hover:bg-zinc-200"
            >
              View My Work
              <IconArrow className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
            >
              View MY CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
            >
              <IconGitHub className="h-4 w-4" />
              GitHub Activity
            </a>
          </div>
          <div className="flex items-center gap-3 pt-2 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            <span>Connect</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn grid h-9 w-9 place-items-center rounded-full border border-white/10">
              <IconGitHub className="h-4 w-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn grid h-9 w-9 place-items-center rounded-full border border-white/10">
              <IconLinkedIn className="h-4 w-4" />
            </a>
            <a href={profile.gmail} target="_blank" rel="noopener noreferrer" aria-label="Email" className="icon-btn grid h-9 w-9 place-items-center rounded-full border border-white/10">
              <IconGmail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
          <CodeWindow title="profile.js" live chips={["React", "Node", "UI"]} footer="Lahore, PK">
            <TypedCode source={heroCode} />
          </CodeWindow>
        </motion.div>
      </div>
    </section>
  );
}
