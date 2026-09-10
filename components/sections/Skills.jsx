"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { aiTools, techOrbit } from "../../lib/content";
import { IconOrbit } from "../Icons";
import SectionHeading from "../ui/SectionHeading";
import TechIcon from "../ui/TechIcons";

const RING_SIZE = ["34%", "56%", "76%"];
const SPEEDS = [0.034, -0.022, 0.014];

export default function Skills() {
  const [activeName, setActiveName] = useState(null);
  const frozen = Boolean(activeName);
  const frozenRef = useRef(false);
  const galaxyRef = useRef(null);
  const ringRefs = useRef([]);
  const angleRef = useRef([18, 52, 8]);
  const nodeRefs = useRef({});
  const [lines, setLines] = useState([]);

  frozenRef.current = frozen;

  const rings = useMemo(
    () => [0, 1, 2].map((ring) => techOrbit.filter((item) => item.ring === ring)),
    []
  );

  const current = techOrbit.find((item) => item.name === activeName) || null;
  const linked = current ? new Set(current.links) : new Set();

  useEffect(() => {
    let frame = 0;
    let last = performance.now();

    const apply = (angles) => {
      ringRefs.current.forEach((el, index) => {
        if (!el) return;
        el.style.transform = `translate(-50%, -50%) rotate(${angles[index]}deg)`;
        el.querySelectorAll(".galaxy-node-face").forEach((face) => {
          face.style.transform = `rotate(${-angles[index]}deg)`;
        });
      });
    };

    apply(angleRef.current);

    const tick = (now) => {
      const dt = Math.min(now - last, 48);
      last = now;
      if (!frozenRef.current) {
        angleRef.current = angleRef.current.map((angle, index) => angle + dt * SPEEDS[index]);
        apply(angleRef.current);
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useLayoutEffect(() => {
    if (!activeName || !galaxyRef.current) {
      setLines([]);
      return undefined;
    }

    const measure = () => {
      const wrap = galaxyRef.current?.getBoundingClientRect();
      const fromEl = nodeRefs.current[activeName];
      if (!wrap || !fromEl) return;
      const from = fromEl.getBoundingClientRect();
      const x1 = from.left + from.width / 2 - wrap.left;
      const y1 = from.top + from.height / 2 - wrap.top;
      const next = (current?.links || [])
        .map((name) => {
          const el = nodeRefs.current[name];
          if (!el) return null;
          const box = el.getBoundingClientRect();
          return {
            name,
            x1,
            y1,
            x2: box.left + box.width / 2 - wrap.left,
            y2: box.top + box.height / 2 - wrap.top,
          };
        })
        .filter(Boolean);
      setLines(next);
    };

    measure();
    const frame = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(frame);
  }, [activeName, current]);

  return (
    <section id="skills" className="relative border-t border-white/5 py-14">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Technologies"
          kickerIcon={<IconOrbit />}
          title="Tech Stack"
          highlight="Stack"
          text="Hover any node to explore how the tools connect."
          badge={
            <>
              {techOrbit.length}
              <br />
              tools
            </>
          }
          rail
        />
        <div
          className="mt-6 flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:gap-16"
          onMouseLeave={() => setActiveName(null)}
        >
          <div ref={galaxyRef} className="galaxy relative aspect-square w-full max-w-[500px] shrink-0">
            <div className="galaxy-radar" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              {lines.map((line) => (
                <line
                  key={line.name}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(250,250,250,0.28)"
                  strokeWidth="1"
                />
              ))}
            </svg>
            <div className="absolute left-1/2 top-1/2 z-10 grid h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#0c0c0d] text-sm font-semibold">
              WH
            </div>
            {rings.map((items, ring) => (
              <div
                key={ring}
                ref={(el) => {
                  ringRefs.current[ring] = el;
                }}
                className="galaxy-ring"
                style={{ width: RING_SIZE[ring], height: RING_SIZE[ring] }}
              >
                {items.map((item, index) => {
                  const angle = (index / items.length) * 360;
                  const isActive = item.name === activeName;
                  const isLink = linked.has(item.name);
                  return (
                    <div
                      key={item.name}
                      className="galaxy-slot"
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      <button
                        ref={(node) => {
                          nodeRefs.current[item.name] = node;
                        }}
                        type="button"
                        className={`galaxy-node ${isActive ? "is-active" : ""} ${isLink ? "is-link" : ""} ${activeName && !isActive && !isLink ? "is-dim" : ""}`}
                        style={{ "--a": `${angle}deg`, "--node": item.color }}
                        onMouseEnter={() => setActiveName(item.name)}
                        onFocus={() => setActiveName(item.name)}
                        onClick={() => setActiveName(item.name)}
                      >
                        <span className="galaxy-node-face">
                          <span className="galaxy-icon">
                            <TechIcon name={item.name} className="h-6 w-6" />
                          </span>
                          <span className="galaxy-label">{item.short}</span>
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="w-full max-w-[300px] shrink-0">
            {current ? (
              <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111113] p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-white/5" style={{ color: current.color }}>
                    <TechIcon name={current.name} className="h-8 w-8" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">{current.category}</p>
                    <h3 className="mt-1 text-2xl font-medium text-white">{current.name}</h3>
                    <p className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: current.color }} />
                      In my stack
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-t border-white/8 pt-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Connects with</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {current.links.map((name) => {
                      const linkedItem = techOrbit.find((item) => item.name === name);
                      if (!linkedItem) return null;
                      return (
                        <button
                          key={name}
                          type="button"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:border-white/25"
                          onMouseEnter={() => setActiveName(name)}
                        >
                          <TechIcon name={name} className="h-3.5 w-3.5" />
                          {linkedItem.short}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </article>
            ) : (
              <article className="rounded-2xl border border-white/10 bg-[#111113] p-6">
                <h3 className="text-xl text-white">Hover a technology</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  The rings keep moving until you pick a node. Related tools from my stack light up next.
                </p>
              </article>
            )}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-center text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            AI tools I use
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {aiTools.map((tool) => (
              <article key={tool.name} className="rounded-2xl border border-white/10 bg-[#111113] p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <TechIcon name={tool.name} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{tool.name}</h3>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">{tool.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tool.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
