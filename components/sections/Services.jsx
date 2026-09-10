"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { protocols } from "../../lib/content";
import { IconBars, IconGear, IconGlobe, IconNodes, IconSpark, IconStack, IconWindow } from "../Icons";
import SectionHeading from "../ui/SectionHeading";

const icons = {
  stack: IconStack,
  window: IconWindow,
  globe: IconGlobe,
  gear: IconGear,
};

const landings = [
  { top: "62%", left: "8%", rotate: -12 },
  { top: "48%", left: "38%", rotate: 9 },
  { top: "72%", left: "28%", rotate: -6 },
  { top: "54%", left: "62%", rotate: 14 },
  { top: "78%", left: "58%", rotate: -10 },
  { top: "42%", left: "16%", rotate: 5 },
];

function ProtocolGlyph({ name, className }) {
  const Icon = icons[name] || IconStack;
  return <Icon className={className} />;
}

function FallingTech({ tags, resetKey }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, [resetKey]);

  return (
    <div className="protocol-cloud">
      {ready
        ? tags.map((tag, index) => {
            const land = landings[index % landings.length];
            return (
              <motion.span
                key={`${resetKey}-${tag}-${index}`}
                className="protocol-chip"
                initial={{
                  top: "-22%",
                  left: land.left,
                  opacity: 0,
                  rotate: land.rotate * 0.15,
                  scale: 0.92,
                }}
                animate={{
                  top: land.top,
                  left: land.left,
                  opacity: 1,
                  rotate: land.rotate,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.26,
                  top: { type: "spring", stiffness: 120, damping: 14, mass: 0.9 },
                  rotate: { type: "spring", stiffness: 90, damping: 12, delay: index * 0.26 },
                  opacity: { duration: 0.25, delay: index * 0.26 },
                  scale: { type: "spring", stiffness: 160, damping: 16, delay: index * 0.26 },
                }}
              >
                {tag}
              </motion.span>
            );
          })
        : null}
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const current = protocols[active];
  const rest = protocols.map((item, index) => ({ item, index })).filter((entry) => entry.index !== active);

  return (
    <section id="services" className="relative overflow-hidden border-t border-white/5 py-14">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Services"
          kickerIcon={<IconSpark />}
          title="What I Build"
          highlight="Build"
          text="Pick a focus area to see the capabilities and tools behind it."
          badge={
            <>
              4
              <br />
              areas
            </>
          }
          rail
        />

        <div className="protocol-deck">
          <article className="protocol-active">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-5">
                <div className="grid w-14 shrink-0 place-items-center">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-200">
                    <ProtocolGlyph name={current.icon} className="h-5 w-5" />
                  </span>
                  <span className="mt-2 font-mono text-[10px] tracking-[0.18em] text-zinc-500">{current.id}</span>
                </div>
                <div className="max-w-xl">
                  <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    <span className="h-px w-4 bg-zinc-600" />
                    Selected
                  </p>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">{current.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">{current.text}</p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-zinc-300">
                <span className="live-dot" />
                Live
              </span>
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="protocol-panel">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    <IconBars />
                    Key capabilities
                  </p>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    {current.modules.length} modules
                  </span>
                </div>
                <ol className="space-y-2">
                  {current.modules.map((module, moduleIndex) => (
                    <li key={module} className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0e0e10] px-3 py-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-white/10 font-mono text-[10px] text-zinc-500">
                        {String(moduleIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-zinc-300">{module}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid gap-3">
                <div className="protocol-panel !min-h-0 overflow-hidden p-0">
                  <p className="flex items-center gap-2 border-b border-white/8 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    <IconNodes />
                    Tech core
                  </p>
                  <FallingTech tags={current.tech} resetKey={active} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {current.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/8 bg-black/35 px-3 py-4 text-center"
                    >
                      <p className="text-lg font-medium tracking-tight text-white">{stat.value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="protocol-rail">
            {rest.map(({ item, index }) => (
              <button
                key={item.id}
                type="button"
                className="protocol-idle"
                onClick={() => setActive(index)}
                aria-label={`Expand ${item.title}`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300">
                  <ProtocolGlyph name={item.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-zinc-500">{item.id}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
