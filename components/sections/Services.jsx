import { services } from "../../lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";

export default function Services() {
  return (
    <section id="services" className="relative z-10 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Services"
          title="What I can take on"
          text="Engagements I can take based on shipped MERN, frontend, and technical coordination work."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <TiltCard className="glass h-full rounded-3xl p-6">
                <p className="text-xs text-amber-300">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
