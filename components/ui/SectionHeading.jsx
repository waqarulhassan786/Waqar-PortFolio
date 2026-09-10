export default function SectionHeading({ kicker, kickerIcon, title, highlight, text, badge, rail }) {
  const parts = highlight && title.endsWith(highlight) ? [title.slice(0, -highlight.length), highlight] : [title, null];

  return (
    <div className={rail ? "mb-6" : "mb-7"}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          {kicker ? (
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              {kickerIcon}
              {kicker}
            </p>
          ) : null}
          <h2 className="max-w-3xl text-4xl font-medium tracking-tight text-white sm:text-5xl">
            {parts[0]}
            {parts[1] ? <span className="word-underline">{parts[1]}</span> : null}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          {text ? <p className="max-w-xs text-sm text-zinc-500">{text}</p> : null}
          {badge ? (
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-dashed border-white/25 text-center text-[10px] uppercase leading-tight tracking-widest text-zinc-400">
              {badge}
            </div>
          ) : null}
        </div>
      </div>
      {rail ? (
        <div className="relative mt-5 h-px bg-white/10">
          <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-zinc-500" />
        </div>
      ) : null}
    </div>
  );
}
