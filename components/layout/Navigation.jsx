"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "../../lib/content";
import { IconClose, IconDownload, IconMenu } from "../Icons";
import Magnetic from "../ui/Magnetic";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = [...new Set(navLinks.map((link) => link.href.slice(1)))];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0.12, 0.35] }
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-[200] w-full transform-gpu">
      <div className="absolute inset-0 border-b border-white/8 bg-[#07090f]" />
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="focus-ring flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-950">
            WH
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">{profile.firstName}</span>
        </a>

        <div className="hidden items-center gap-4 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link focus-ring text-xs tracking-wide ${
                active === link.href ? "is-active text-amber-300" : "text-slate-300 hover:text-amber-300"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Magnetic>
            <a
              href={profile.resume}
              download
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              <IconDownload />
              Resume
            </a>
          </Magnetic>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-100 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-16 z-[70] min-h-[calc(100dvh-4rem)] border-t border-white/10 bg-[#07090f] px-4 py-5 xl:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5 hover:text-amber-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950"
                onClick={() => setOpen(false)}
              >
                <IconDownload />
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
