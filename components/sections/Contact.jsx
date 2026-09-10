"use client";

import { useState } from "react";
import { profile } from "../../lib/content";
import { IconGitHub, IconGmail, IconLinkedIn, IconPin, IconWhatsApp } from "../Icons";
import SocialLinks from "../SocialLinks";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const initial = { name: "", email: "", subject: "", message: "" };

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [note, setNote] = useState("");

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!isEmail(form.email)) next.email = "Enter a valid email.";
    if (!form.subject.trim()) next.subject = "Subject is required.";
    if (form.message.trim().length < 12) next.message = "Message should be at least 12 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) {
      setStatus("error");
      setNote("Please fix the highlighted fields.");
      return;
    }

    setStatus("loading");
    setNote("");
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus("success");
        setNote("Message sent.");
        setForm(initial);
        return;
      }

      const subject = encodeURIComponent(form.subject);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
      window.open(`${profile.gmail}&su=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
      setStatus("success");
      setNote("Gmail should open with your message. If it doesn't, email me directly.");
    } catch {
      setStatus("error");
      setNote("Something went wrong. Email me directly instead.");
    }
  }

  const details = [
    { label: "Email", value: profile.email, href: profile.gmail, icon: IconGmail },
    { label: "LinkedIn", value: "waqar-ul-hassan786", href: profile.linkedin, icon: IconLinkedIn },
    { label: "GitHub", value: "waqarulhassan786", href: profile.github, icon: IconGitHub },
    { label: "WhatsApp", value: profile.phone, href: profile.whatsapp, icon: IconWhatsApp },
    { label: "Location", value: profile.location, href: null, icon: IconPin },
  ];

  return (
    <section id="contact" className="relative z-10 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Contact" title="Let’s talk about a role or a build" />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-xl text-slate-300">
              For full-stack MERN work, frontend delivery, or coordination between clients and engineering teams.
            </p>
            <SocialLinks showLabels className="mt-8" />
            <div className="mt-8 space-y-3">
              {details.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-amber-400/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-sm text-slate-400">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={handleSubmit} className="glass space-y-4 rounded-3xl p-6 md:p-8" noValidate>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">Name</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-[#101526] px-4 py-3 text-slate-100 outline-none ring-amber-400/20 focus:border-amber-400 focus:ring-2"
                  aria-invalid={!!errors.name}
                />
                {errors.name ? <span className="mt-1 block text-xs text-rose-300">{errors.name}</span> : null}
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-[#101526] px-4 py-3 text-slate-100 outline-none ring-amber-400/20 focus:border-amber-400 focus:ring-2"
                  aria-invalid={!!errors.email}
                />
                {errors.email ? <span className="mt-1 block text-xs text-rose-300">{errors.email}</span> : null}
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">Subject</span>
                <input
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-[#101526] px-4 py-3 text-slate-100 outline-none ring-amber-400/20 focus:border-amber-400 focus:ring-2"
                  aria-invalid={!!errors.subject}
                />
                {errors.subject ? <span className="mt-1 block text-xs text-rose-300">{errors.subject}</span> : null}
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#101526] px-4 py-3 text-slate-100 outline-none ring-amber-400/20 focus:border-amber-400 focus:ring-2"
                  aria-invalid={!!errors.message}
                />
                {errors.message ? <span className="mt-1 block text-xs text-rose-300">{errors.message}</span> : null}
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
              {note ? (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${status === "error" ? "text-rose-300" : "text-emerald-300"}`}
                >
                  {note}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
