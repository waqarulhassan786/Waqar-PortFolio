import { specializations } from "../../lib/content";
import { IconPerson } from "../Icons";
import CodeWindow from "../ui/CodeWindow";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function ProfileCode() {
  return (
    <pre className="font-mono text-[12px] leading-7 sm:text-[13.5px]">
      <span className="code-kw">const</span> <span className="code-fn">developer</span>
      {" = {\n"}
      {"  nickName: "}
      <span className="text-orange-400">'Waqar'</span>
      {",\n  fullName: "}
      <span className="text-orange-400">'Waqar ul Hassan'</span>
      {",\n  role: "}
      <span className="text-orange-400">'Full-Stack Developer'</span>
      {",\n  location: "}
      <span className="text-orange-400">'Pakistan'</span>
      {",\n  experience: "}
      <span className="text-orange-400">'3+ years'</span>
      {",\n  tools: "}
      <span className="text-orange-400">['Cursor', 'Claude', 'Copilot']</span>
      {",\n  email: "}
      <span className="text-orange-400">'waqarulhassan3484@gmail.com'</span>
      {",\n  availability: "}
      <span className="text-orange-400">'Open to opportunities'</span>
      {",\n};"}
    </pre>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/5 py-14">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="About me"
          kickerIcon={<IconPerson />}
          title="Building Digital Solutions"
          highlight="Solutions"
          text="Full-stack engineer crafting MERN products and keeping delivery on schedule."
          badge={
            <>
              3+
              <br />
              years
            </>
          }
          rail
        />

        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <CodeWindow title="developer.js">
              <ProfileCode />
            </CodeWindow>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="text-4xl font-medium tracking-tight text-white">
              My <span className="word-underline">Story</span>
            </h3>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-zinc-400 sm:text-base">
              <p>
                I'm a <span className="font-medium text-white">developer</span> with over{" "}
                <span className="font-medium text-white">3 years</span> of hands-on experience delivering full-stack web
                applications, now focused on project management as well as the build.
              </p>
              <p>
                I work across the <span className="font-medium text-white">frontend and backend</span>, so I get to build
                what people see and the logic that makes it work — including authentication, REST APIs, and MongoDB
                data.
              </p>
              <p>
                Most of my work uses <span className="font-medium text-white">React, Next.js, and Node.js</span>. I like
                taking a client requirement, breaking it into tasks, and shipping something the team can stand behind.
              </p>
              <p>
                I also build with AI tooling day to day —{" "}
                <span className="font-medium text-white">Cursor</span>,{" "}
                <span className="font-medium text-white">Claude</span>, and{" "}
                <span className="font-medium text-white">GitHub Copilot</span> — to move faster on features, refactors,
                and debugging while keeping full ownership of the code.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-center text-2xl font-medium text-white">What I focus on</h3>
          <div className="mx-auto mb-5 h-0.5 w-12 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {specializations.map((item) => (
              <article key={item.title} className="spec-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#111113] p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{item.kicker}</p>
                <h4 className="mt-2 text-sm font-semibold tracking-wide text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
