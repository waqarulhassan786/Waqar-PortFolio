import Image from "next/image";
import { education, languages, profile, stats } from "../../lib/content";
import CountUp from "../ui/CountUp";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";

export default function About() {
  return (
    <section id="about" className="relative z-10 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="About" title="Engineer first, delivery-minded in practice" />
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-300">
            <div className="mb-2 flex items-center gap-4">
              <Image
                src={profile.photo}
                alt={`${profile.name}, software engineer`}
                width={88}
                height={88}
                className="h-20 w-20 rounded-2xl object-cover ring-2 ring-amber-400/40"
              />
              <div>
                <p className="font-semibold text-white">{profile.name}</p>
                <p className="text-sm text-slate-400">{profile.location}</p>
              </div>
            </div>
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <article className="glass rounded-2xl p-5">
                <p className="text-sm text-amber-300">Education</p>
                <h3 className="mt-2 font-semibold text-white">{education.degree}</h3>
                <a href={education.schoolUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-slate-400 hover:text-amber-300">
                  {education.school}
                </a>
                <p className="mt-3 text-sm text-slate-500">CGPA {education.cgpa}</p>
              </article>
              <article className="glass rounded-2xl p-5">
                <p className="text-sm text-amber-300">Languages</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {languages.map((item) => (
                    <li key={item.name} className="flex justify-between gap-3">
                      <span>{item.name}</span>
                      <span className="text-slate-500">{item.level}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <TiltCard className="glass rounded-2xl px-6 py-6">
                  <CountUp value={stat.value} suffix={stat.suffix} className="text-3xl font-semibold text-amber-300" />
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
