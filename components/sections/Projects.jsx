"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "../../lib/content";
import { IconExternal, IconLayers } from "../Icons";
import SectionHeading from "../ui/SectionHeading";

function statusLabel(project) {
  if (project.demo) return "Concept";
  if (project.liveUrl) return "Deployed";
  return "Built";
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);

  const go = (next) => setIndex((next + projects.length) % projects.length);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(null);
      if (open) return;
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (event.key === "ArrowLeft") go(index - 1);
      if (event.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, open]);

  useEffect(() => {
    if (paused || open) return undefined;
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % projects.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [paused, open]);

  return (
    <section id="projects" className="relative overflow-hidden border-t border-white/5 py-14">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Selected work"
          kickerIcon={<IconLayers />}
          title="Featured Projects"
          highlight="Projects"
          text="A few products and concepts from recent work. Demo pieces are labeled."
          badge={
            <>
              {projects.length}
              <br />
              projects
            </>
          }
          rail
        />

        <div
          className="relative mx-auto w-full max-w-[640px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(event) => {
            startX.current = event.changedTouches[0].clientX;
            setPaused(true);
          }}
          onTouchEnd={(event) => {
            const delta = event.changedTouches[0].clientX - startX.current;
            if (delta > 50) go(index - 1);
            if (delta < -50) go(index + 1);
            setPaused(false);
          }}
        >
          <div className="invisible aspect-[16/10] w-full" aria-hidden="true" />
          <div className="coverflow absolute inset-0">
          {projects.map((project, i) => {
            const offset = i - index;
            const wrapped =
              offset > projects.length / 2
                ? offset - projects.length
                : offset < -projects.length / 2
                  ? offset + projects.length
                  : offset;
            const far = Math.abs(wrapped) > 1;
            const side = wrapped === 0 ? "is-center" : wrapped < 0 ? "is-left" : "is-right";
            return (
              <article key={project.id} className={`cover-card ${side} ${far ? "is-far" : ""}`}>
                <button
                  type="button"
                  className="block w-full text-left"
                  onClick={() => (wrapped === 0 ? setOpen(project) : go(i))}
                  aria-label={wrapped === 0 ? `${project.title} case study` : `Show ${project.title}`}
                >
                  <div className="cover-visual">
                    <img src={project.cover} alt="" />
                    <div className="cover-shade" />
                    {wrapped === 0 ? (
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {statusLabel(project)}
                      </span>
                    ) : (
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/55">{String(i + 1).padStart(2, "0")}</p>
                        <h3 className="mt-1 text-lg font-medium text-white">{project.title}</h3>
                      </div>
                    )}
                  </div>
                </button>
              </article>
            );
          })}

          <button
            type="button"
            aria-label="Previous project"
            onClick={() => go(index - 1)}
            className="absolute left-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#0c0c0d]/85 text-lg text-white backdrop-blur-sm md:-left-3"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => go(index + 1)}
            className="absolute right-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#0c0c0d]/85 text-lg text-white backdrop-blur-sm md:-right-3"
          >
            ›
          </button>
          </div>
        </div>

        <div className="mt-1 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{statusLabel(projects[index])}</p>
          <h3 className="mt-1.5 text-2xl font-medium text-white">{projects[index].title}</h3>
          {projects[index].product ? (
            <p className="mt-1 text-sm text-zinc-500">{projects[index].product}</p>
          ) : null}
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">{projects[index].description}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            {projects[index].tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-950"
              onClick={() => setOpen(projects[index])}
            >
              Case Study
            </button>
            {projects[index].liveUrl ? (
              <a
                href={projects[index].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-3.5 py-2.5 text-sm text-white hover:bg-white/5"
              >
                Live Project <IconExternal className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {projects.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full ${i === index ? "w-6 bg-white" : "w-2 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
          <a
            href="/projects"
            className="text-sm text-zinc-400 underline decoration-white/20 underline-offset-4 hover:text-white"
          >
            Explore All Work
          </a>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[220] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#111113] p-6"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              {open.demo ? <p className="text-xs uppercase tracking-widest text-zinc-500">Demo / Concept Project</p> : null}
              <h3 className="mt-2 text-2xl font-medium text-white">{open.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{open.role}</p>
              <p className="mt-4 text-zinc-300">{open.caseStudy}</p>
              <div className="mt-6 flex gap-3">
                {open.liveUrl ? (
                  <a
                    href={open.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950"
                  >
                    Open live site <IconExternal className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                <button type="button" onClick={() => setOpen(null)} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
