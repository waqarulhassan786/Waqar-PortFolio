export default function SectionHeading({ kicker, title, text, center = false }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="kicker text-[11px] font-semibold uppercase text-amber-400/90">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className={`mt-4 h-px w-16 bg-amber-400/80 ${center ? "mx-auto" : ""}`} />
      {text ? <p className="mt-4 text-slate-400">{text}</p> : null}
    </div>
  );
}
