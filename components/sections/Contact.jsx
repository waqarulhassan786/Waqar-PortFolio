"use client";

import { useState } from "react";
import { profile } from "../../lib/content";
import { IconCheck, IconCopy, IconGitHub, IconGmail, IconLinkedIn } from "../Icons";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const ORBIT = 128;

const nodes = [
  { id: "email", label: "Email", hint: "Drop a message", value: profile.email, href: profile.gmail, icon: IconGmail, angle: -90 },
  { id: "linkedin", label: "LinkedIn", hint: "Professional network", value: "waqar-ul-hassan786", href: profile.linkedin, icon: IconLinkedIn, angle: 0 },
  { id: "github", label: "GitHub", hint: "Source & projects", value: "waqarulhassan786", href: profile.github, icon: IconGitHub, angle: 90 },
  { id: "schedule", label: "Schedule", hint: "Book a call via Email", value: "Available now", href: profile.gmail, icon: IconGmail, angle: 180 },
];

export default function Contact() {
  const [active, setActive] = useState("email");
  const [copied, setCopied] = useState(false);
  const current = nodes.find((item) => item.id === active) || nodes[0];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.open(profile.gmail, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 py-14">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Contact"
          kickerIcon={<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
          title="Ready to Collaborate?"
          highlight="Collaborate?"
          text="Open to projects, partnerships, and conversations."
          badge={
            <>
              Open
              <br />
              now
            </>
          }
          rail
        />

        <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="contact-orbit relative mx-auto h-[320px] w-[320px]">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-dashed border-white/12"
                style={{ width: ORBIT * 2, height: ORBIT * 2, transform: "translate(-50%, -50%)" }}
              />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
              <div className="absolute left-1/2 top-1/2 z-10 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#111113] text-lg font-semibold">
                WH
              </div>
              {nodes.map((item) => {
                const Icon = item.icon;
                const hot = item.id === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`absolute left-1/2 top-1/2 z-10 grid h-14 w-14 place-items-center rounded-full border ${hot ? "border-white bg-white text-zinc-950" : "border-white/15 bg-[#111113] text-zinc-300"}`}
                    style={{ transform: `translate(-50%, -50%) rotate(${item.angle}deg) translate(${ORBIT}px) rotate(${-item.angle}deg)` }}
                    onMouseEnter={() => setActive(item.id)}
                    onFocus={() => setActive(item.id)}
                    onClick={() => setActive(item.id)}
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
            <h3 className="mt-6 text-center text-lg text-white">Pick a way to reach me</h3>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-2">
              {nodes.map((item) => {
                const Icon = item.icon;
                const hot = item.id === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left ${hot ? "border-white/25 bg-white/5" : "border-white/8 hover:border-white/20"}`}
                    onMouseEnter={() => setActive(item.id)}
                    onClick={() => setActive(item.id)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm text-white">{item.label}</span>
                        <span className="block text-xs text-zinc-500">{item.hint}</span>
                      </span>
                    </span>
                    <span className="hidden text-xs text-zinc-500 sm:block">{item.value}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5"
              >
                {copied ? <IconCheck /> : <IconCopy />}
                {copied ? "Copied" : "Copy email"}
              </button>
              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950"
              >
                {current.id === "schedule" ? "Book" : "Open"} {current.label}
              </a>
            </div>

            <a
              href={profile.gmail}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-between rounded-3xl border border-white/10 bg-[#111113] px-5 py-5 hover:border-white/20"
            >
              <span>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-zinc-500">Next step</span>
                <span className="mt-2 block text-xl text-white">Schedule a Call</span>
                <span className="mt-1 block text-sm text-zinc-500">Available now</span>
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950">Book</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
