"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { education, experience, profile, projects } from "../../lib/content";
import { useTerminal } from "./TerminalContext";

const quick = ["help", "exit", "matrix"];

export default function DevTerminal() {
  const { open, close } = useTerminal();
  const [lines, setLines] = useState(welcome);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [cursor, setCursor] = useState(-1);
  const [matrix, setMatrix] = useState(false);
  const inputRef = useRef(null);
  const logRef = useRef(null);

  const commands = useMemo(() => buildCommands({ close, setMatrix }), [close]);

  useEffect(() => {
    if (!open) return;
    setLines(welcome);
    setValue("");
    setMatrix(false);
    const timer = setTimeout(() => inputRef.current?.focus(), 80);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      if (matrix) setMatrix(false);
      else close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, matrix]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [lines]);

  function run(raw) {
    const input = raw.trim();
    if (!input) return;
    const [name, ...rest] = input.split(/\s+/);
    const key = name.toLowerCase();
    const output = commands[key]
      ? commands[key](rest.join(" "))
      : [`command not found: ${name}`, "Type 'help' for available commands"];
    setHistory((items) => [...items, input]);
    setCursor(-1);
    if (key === "clear") {
      setLines([]);
      setValue("");
      return;
    }
    setLines((items) => [...items, { kind: "cmd", text: input }, ...output.map((text) => ({ kind: "out", text }))]);
    setValue("");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9990] grid place-items-center bg-black/75 p-6" role="dialog" aria-modal="true" aria-label="Developer terminal">
      {matrix ? <MatrixRain onClose={() => setMatrix(false)} /> : null}
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#16171a] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <button type="button" className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-label="Close Developer Terminal" onClick={close} />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <p className="font-mono text-[11px] text-zinc-400">_ waqar@portfolio:~ (zsh)</p>
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div ref={logRef} className="h-[min(58vh,420px)] overflow-auto px-5 py-4 font-mono text-[13px] leading-6">
          {lines.map((line, index) => (
            <p key={`${line.text}-${index}`} className={line.kind === "cmd" ? "text-emerald-300" : "text-zinc-300"}>
              {line.kind === "cmd" ? `$ ${line.text}` : line.text}
            </p>
          ))}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              run(value);
            }}
            className="mt-2 flex items-center gap-2 text-emerald-300"
          >
            <span>$</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "ArrowUp") {
                  event.preventDefault();
                  if (!history.length) return;
                  const next = cursor < 0 ? history.length - 1 : Math.max(0, cursor - 1);
                  setCursor(next);
                  setValue(history[next]);
                }
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  if (cursor < 0) return;
                  const next = cursor + 1;
                  if (next >= history.length) {
                    setCursor(-1);
                    setValue("");
                  } else {
                    setCursor(next);
                    setValue(history[next]);
                  }
                }
              }}
              placeholder="Type to start ..."
              aria-label="Type to start ..."
              className="w-full bg-transparent text-zinc-100 outline-none placeholder:text-zinc-500"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
        <div className="flex flex-wrap gap-2 border-t border-white/8 px-4 py-3">
          {quick.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => run(item)}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-zinc-300 hover:border-white/25 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const welcome = [
  { kind: "out", text: "→ Welcome to Waqar's Portfolio Terminal v1.0" },
  { kind: "out", text: "→ Type 'help' for available commands" },
];

function buildCommands({ close, setMatrix }) {
  const shipped = projects.filter((item) => !item.demo);
  return {
    help: () => [
      "Available commands",
      "  help          list commands",
      "  about         who I am",
      "  projects      shipped work",
      "  experience    roles from the CV",
      "  skills        production stack",
      "  education     degree",
      "  contact       email and links",
      "  github        open GitHub",
      "  cv            open resume",
      "  whoami        name",
      "  matrix        visual easter egg",
      "  clear         clear the screen",
      "  exit          close terminal",
    ],
    about: () => [
      `${profile.name} — ${profile.role}`,
      profile.headline,
      "3+ years full-stack, MERN + Next.js + TypeScript, Agile delivery.",
      profile.location,
    ],
    projects: () => shipped.map((item) => `${item.title}${item.product ? ` / ${item.product}` : ""} — ${item.role}${item.liveUrl ? ` — ${item.liveUrl}` : ""}`),
    experience: () => experience.map((item) => `${item.role} @ ${item.company} (${item.period})`),
    skills: () => ["React.js · Next.js · TypeScript", "Node.js · Express.js · MongoDB · JWT", "Git · GitHub · Postman · Jira / Trello"],
    education: () => [`${education.degree}, CGPA ${education.cgpa}`, `${education.school} · ${education.location}`],
    contact: () => [profile.email, profile.phone, profile.linkedin, profile.github],
    github: () => {
      window.open(profile.github, "_blank", "noopener,noreferrer");
      return [`opening ${profile.github}`];
    },
    cv: () => {
      window.open(profile.resume, "_blank", "noopener,noreferrer");
      return ["opening resume PDF"];
    },
    resume: () => {
      window.open(profile.resume, "_blank", "noopener,noreferrer");
      return ["opening resume PDF"];
    },
    whoami: () => [profile.name],
    ls: () => ["about  projects  experience  skills  education  contact  cv"],
    matrix: () => {
      setMatrix(true);
      return ["entering matrix — press Esc or click to exit"];
    },
    clear: () => [],
    exit: () => {
      close();
      return ["closing session"];
    },
    q: () => {
      close();
      return ["closing session"];
    },
  };
}

function MatrixRain({ onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame = 0;
    const glyphs = "01<>/[]{}WaqarMERN#$";
    const font = 16;
    let cols = 0;
    let drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / font);
      drops = Array.from({ length: cols }, () => Math.random() * canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.fillStyle = "rgba(12, 12, 13, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#4ade80";
      ctx.font = `${font}px ui-monospace, monospace`;
      drops.forEach((y, i) => {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)];
        ctx.fillText(char, i * font, y);
        drops[i] = y > canvas.height && Math.random() > 0.975 ? 0 : y + font;
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-layer" onClick={onClose} aria-label="Close matrix" />;
}
