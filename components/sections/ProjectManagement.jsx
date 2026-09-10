import { projectManagementSkills } from "../../lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const deliveryLoop = [
  { step: "01", title: "Gather", text: "Requirements and scope" },
  { step: "02", title: "Plan", text: "Sprints, tasks, estimates" },
  { step: "03", title: "Coordinate", text: "Clients and engineering" },
  { step: "04", title: "Assure", text: "QA, risk, and issues" },
  { step: "05", title: "Report", text: "Progress and documentation" },
];

export default function ProjectManagement() {
  return (
    <section id="project-management" className="relative z-10 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Project management"
          title="Bridging requirements and engineering"
          text="The MERN background is used to estimate scope, flag risk, and talk credibly with both clients and developers."
        />

        <Reveal>
          <div className="mb-8 grid gap-3 sm:grid-cols-5">
            {deliveryLoop.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-amber-400/20 bg-gradient-to-b from-amber-400/10 to-transparent px-4 py-5 text-center"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-amber-300">{item.step}</p>
                <p className="mt-2 font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-[2rem] border border-sky-400/15 bg-gradient-to-br from-sky-400/8 via-transparent to-amber-400/8 p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {projectManagementSkills.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#07090f]/70 px-4 py-3 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-amber-400/40 hover:text-amber-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
