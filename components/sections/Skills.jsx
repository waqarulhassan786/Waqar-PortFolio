import { skillGroups } from "../../lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          kicker="Skills"
          title="Technologies I use in production work"
          text="The production stack from recent MERN and Next.js work, grouped by layer rather than invented scores."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <TiltCard className="glass h-full rounded-3xl p-7">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
