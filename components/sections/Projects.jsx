"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { projectFilters, projects } from "../../lib/content";
import ProjectMock from "../projects/ProjectMock";
import { IconExternal } from "../Icons";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const visible = useMemo(
    () => projects.filter((project) => project.categories.includes(filter)),
    [filter]
  );

  useEffect(() => {
    if (!active) return;
    function onKey(event) {
      if (event.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active]);

  return (
    <section id="projects" className="relative z-10 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Work"
          title="Selected products and concept demos"
          text="Live products from the CV first. Concept work is labeled Demo Project and is not client delivery."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={`focus-ring rounded-full px-4 py-2 text-sm transition ${
                filter === item
                  ? "bg-amber-400 text-slate-950"
                  : "border border-white/10 text-slate-300 hover:border-amber-400/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
              >
                <TiltCard className="glass group h-full overflow-hidden rounded-3xl">
                  <ProjectMock project={project} />
                  <div className="flex min-h-[240px] flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-amber-300">{project.role}</p>
                      {project.demo ? (
                        <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] uppercase tracking-wide text-slate-400">
                          Demo / Concept
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                    {project.product ? <p className="mt-1 text-sm text-slate-500">{project.product}</p> : null}
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200"
                        >
                          Live demo <IconExternal />
                        </a>
                      ) : null}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-white"
                        >
                          GitHub
                        </a>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => setActive(project)}
                        className="text-slate-300 hover:text-amber-300"
                        aria-haspopup="dialog"
                      >
                        Case study
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-title"
              className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-3xl border border-white/10 bg-[#101526] p-6 shadow-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              {active.demo ? <p className="text-xs uppercase tracking-widest text-slate-400">Demo / Concept Project</p> : null}
              <h3 id="case-title" className="mt-2 text-2xl font-semibold text-white">
                {active.title}
              </h3>
              <p className="mt-1 text-sm text-amber-300">{active.role}</p>
              <p className="mt-4 text-slate-300">{active.caseStudy}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {active.liveUrl ? (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950"
                  >
                    Open live site
                  </a>
                ) : null}
                {active.githubUrl ? (
                  <a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white"
                  >
                    GitHub
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white"
                >
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
