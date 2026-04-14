export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-[#0b1b34] via-[#081b3b] to-[#0c2346] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="inline-flex items-center rounded-full bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300 shadow-sm shadow-amber-500/20">
                MERN Stack Developer
              </p>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-none">
                Hi, I&apos;m{" "}
                <span className="text-amber-300">Waqar ul Hassan</span>
              </h1>
            </div>

            <h2 className="text-2xl lg:text-3xl text-slate-100">
              Building modern web applications with React, Node.js, Express,
              and MongoDB.
            </h2>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              I create polished full-stack experiences with elegant UI,
              reliable architecture, and high-performance web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-amber-400/20 bg-[#07182f]/90 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-300"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE (PREMIUM 🔥) */}
          <div className="relative mx-auto w-full max-w-md group">

            {/* Glow Background */}
            {/* <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-r from-amber-400/20 via-sky-400/10 to-indigo-800 opacity-20 blur-3xl group-hover:opacity-55 transition duration-700"></div> */}

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#07182f]/90">

              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/waqar.jpg"
                  alt="Waqar ul Hassan"
                  className="h-[420px] w-full object-cover"/>

                {/* Badge */}
                <div className="absolute top-4 right-4 rounded-full bg-slate-950/70 px-4 py-2 text-sm text-amber-200 shadow-lg shadow-black/40">
                  <span className="font-semibold">Available</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}