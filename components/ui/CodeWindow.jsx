export default function CodeWindow({ title, kicker, live, chips, children, footer }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111113] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <div className="relative flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="pointer-events-none absolute inset-x-16 flex items-center justify-center text-[10px] uppercase tracking-[0.22em] text-zinc-500">
          {title}
        </div>
        {live ? (
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
            <span className="live-dot" />
            Live
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{kicker || ""}</span>
        )}
      </div>
      <div className={`overflow-x-auto px-4 pb-5 pt-2 sm:px-5 ${live ? "min-h-[280px] sm:min-h-[320px]" : ""}`}>
        {children}
      </div>
      {chips || footer ? (
        <div className="flex items-center justify-between border-t border-white/8 px-4 py-3">
          <div className="flex flex-wrap gap-2">
            {chips?.map((chip) => (
              <span
                key={chip}
                className="rounded border border-white/10 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-zinc-400"
              >
                {chip}
              </span>
            ))}
          </div>
          {footer ? <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{footer}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
