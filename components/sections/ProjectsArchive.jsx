"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projectPageFilters, projects } from "../../lib/content";
import { IconArrow, IconExternal } from "../Icons";

function statusLabel(project) {
  if (project.demo) return "Concept";
  if (project.liveUrl) return "Live";
  return "Built";
}

export default function ProjectsArchive() {
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("grid");
  const [open, setOpen] = useState(null);

  const visible = useMemo(
    () => projects.filter((project) => project.categories.includes(filter)),
    [filter]
  );

  return (
    <section className="relative overflow-hidden border-t border-white/5 pb-20 pt-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#home"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-zinc-400 hover:border-white/25 hover:text-white"
        >
          <IconArrow className="h-3.5 w-3.5 rotate-180" />
          Back to home
        </Link>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                Full-stack
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                Product UI
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-medium tracking-tight text-white sm:text-5xl">
              All <span className="word-underline">Projects</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="max-w-xs text-sm text-zinc-500">
              Shipped products, backend work, and concept builds from my recent experience.
            </p>
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-dashed border-white/25 text-center text-[10px] uppercase leading-tight tracking-widest text-zinc-400">
              {projects.length}
              <br />
              projects
            </div>
          </div>
        </div>

        <div className="mt-5 h-px bg-white/10" />

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectPageFilters.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  className={`rounded-full border px-3 py-2 text-[11px] tracking-wide ${
                    active
                      ? "border-white/25 bg-white/10 text-white"
                      : "border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            {[
              { id: "grid", label: "Grid" },
              { id: "registry", label: "List" },
            ].map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setView(mode.id)}
                className={`rounded-full border px-3 py-2 text-[10px] uppercase tracking-[0.18em] ${
                  view === mode.id
                    ? "border-white/25 bg-white/10 text-white"
                    : "border-white/10 text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-zinc-600">
          Showing {visible.length} projects
        </p>

        {view === "grid" ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {visible.map((project) => (
              <button
                key={project.id}
                type="button"
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#111113] text-left transition hover:border-white/20"
                onClick={() => setOpen(project)}
              >
                <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3">
                  <p className="truncate text-[11px] text-zinc-400">{project.title}</p>
                  <p className="shrink-0 text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                    {statusLabel(project)}
                  </p>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0c0d]">
                  <img src={project.cover} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4 pt-16">
                    <h2 className="text-xl font-medium text-white">{project.title}</h2>
                    {project.product ? <p className="mt-0.5 text-sm text-zinc-400">{project.product}</p> : null}
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[#111113]">
            {visible.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className="flex w-full items-center gap-4 border-b border-white/8 px-4 py-4 text-left last:border-b-0 hover:bg-white/[0.03]"
                onClick={() => setOpen(project)}
              >
                <span className="text-[11px] text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                <img src={project.cover} alt="" className="h-12 w-16 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-sm text-white">{project.title}</h2>
                  <p className="truncate text-xs text-zinc-500">{project.role}</p>
                </div>
                <span className="hidden text-[10px] uppercase tracking-[0.14em] text-zinc-500 sm:inline">
                  {statusLabel(project)}
                </span>
              </button>
            ))}
          </div>
        )}
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
              className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#111113]"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={open.cover} alt="" className="h-44 w-full object-cover" />
              <div className="p-6">
                {open.demo ? <p className="text-xs uppercase tracking-widest text-zinc-500">Concept project</p> : null}
                <h3 className="mt-2 text-2xl font-medium text-white">{open.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{open.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">{open.caseStudy}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {open.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
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
                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
