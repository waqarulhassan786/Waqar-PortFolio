"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { beyondLinks, navLinks, profile } from "../../lib/content";
import { IconChevron, IconClose, IconMenu } from "../Icons";
import { useTerminal } from "../terminal/TerminalContext";

function resolveHref(href, onProjectsPage) {
  if (href.startsWith("http") || href.startsWith("/")) return href;
  if (onProjectsPage) return `/${href}`;
  return href;
}

export default function Navigation() {
  const pathname = usePathname();
  const onProjectsPage = pathname === "/projects";
  const { open: terminalOpen, toggle } = useTerminal();
  const [open, setOpen] = useState(false);
  const [beyond, setBeyond] = useState(false);
  const [active, setActive] = useState(onProjectsPage ? "/projects" : "#about");
  const beyondRef = useRef(null);

  useEffect(() => {
    if (onProjectsPage) {
      setActive("/projects");
      return undefined;
    }

    const ids = ["home", ...navLinks.map((link) => link.href.slice(1)), "services", "contact"];
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
  }, [onProjectsPage]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onClick = (event) => {
      if (!beyondRef.current?.contains(event.target)) setBeyond(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setBeyond(false);
    };
    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const homeHref = onProjectsPage ? "/" : "#home";
  const contactHref = onProjectsPage ? "/#contact" : "#contact";

  return (
    <header className="fixed top-0 z-[200] w-full">
      <div className="absolute inset-0 bg-[#0c0c0d]" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={homeHref} className="focus-ring flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold">
            WH
          </span>
          <span className="hidden text-sm sm:block">
            <span className="font-semibold">Waqar</span> <span className="text-zinc-500">ul Hassan</span>
          </span>
        </Link>

        <nav className="nav-pill hidden items-center gap-1 rounded-full px-2 py-1 xl:flex">
          {navLinks.map((link) => {
            const href = link.href === "#projects" ? "/projects" : resolveHref(link.href, onProjectsPage);
            const isActive = link.href === "#projects" ? onProjectsPage : active === link.href;
            return (
              <Link
                key={link.href}
                href={href}
                className={`rounded-full px-3 py-1.5 text-xs ${
                  isActive ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="relative" ref={beyondRef}>
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs ${
                beyond ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"
              }`}
              aria-expanded={beyond}
              aria-haspopup="true"
              onClick={() => setBeyond((value) => !value)}
            >
              Beyond
              <IconChevron className={`h-3 w-3 transition ${beyond ? "rotate-180" : ""}`} />
            </button>
            {beyond ? (
              <div className="absolute right-0 top-[calc(100%+10px)] w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#111113] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                {beyondLinks.map((item) => {
                  const href = resolveHref(item.href, onProjectsPage);
                  return (
                    <a
                      key={item.label}
                      href={href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                      onClick={() => setBeyond(false)}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-600">{item.hint}</span>
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-300 hover:text-white sm:inline-flex"
            aria-pressed={terminalOpen}
            aria-label={terminalOpen ? "Close Developer Terminal" : "Open Developer Terminal"}
            onClick={toggle}
          >
            <span className="font-mono text-[11px]">{">_"}</span>
            Dev Mode
            <span className={`dev-switch ${terminalOpen ? "is-on" : ""}`} />
          </button>
          <a
            href={contactHref}
            className="hidden rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-zinc-950 sm:inline-flex"
          >
            Let's Connect
          </a>
          <button
            type="button"
            className="focus-ring inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-zinc-100 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0c0c0d] px-4 py-5 xl:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const href = link.href === "#projects" ? "/projects" : resolveHref(link.href, onProjectsPage);
              return (
                <Link
                  key={link.href}
                  href={href}
                  className="rounded-lg px-3 py-3 text-zinc-200 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            {beyondLinks.map((item) => (
              <a
                key={item.label}
                href={resolveHref(item.href, onProjectsPage)}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="rounded-lg px-3 py-3 text-zinc-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              className="rounded-lg px-3 py-3 text-left text-zinc-200 hover:bg-white/5"
              onClick={() => {
                setOpen(false);
                toggle();
              }}
            >
              Dev Mode
            </button>
            <a
              href={contactHref}
              className="rounded-lg px-3 py-3 text-zinc-200 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              Let's Connect
            </a>
            <a
              href={profile.resume}
              download
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-zinc-950"
              onClick={() => setOpen(false)}
            >
              View My CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
