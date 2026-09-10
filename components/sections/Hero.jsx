"use client";

import { motion } from "framer-motion";
import { profile } from "../../lib/content";
import { IconArrow, IconDownload } from "../Icons";
import SocialLinks from "../SocialLinks";
import Magnetic from "../ui/Magnetic";
import HeroVisual from "../three/HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="relative z-10 overflow-hidden pt-16">
      <div className="grid-bg" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="space-y-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for roles & freelance
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-200 sm:text-xl">{profile.headline}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">{profile.tagline}</p>
            <p className="mt-3 text-sm text-slate-500">{profile.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Magnetic>
              <a
                href="#projects"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                View work
                <IconArrow />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resume}
                download
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <IconDownload />
                Download CV
              </a>
            </Magnetic>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }}>
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.7 }}>
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
