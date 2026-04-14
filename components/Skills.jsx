export default function Skills() {
  const skills = [
    { name: "HTML5", level: 95, icon: "H" },
    { name: "CSS3", level: 90, icon: "C" },
    { name: "JavaScript", level: 90, icon: "JS" },
    { name: "React", level: 90, icon: "⚛" },
    { name: "Node.js", level: 85, icon: "N" },
    { name: "MongoDB", level: 80, icon: "M" },
  ];

  return (
    <section id="skills" className="py-20 bg-[#08172f] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
            Core technologies and frameworks I work with daily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="group bg-[#0c2346]/50 p-6 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-slate-400">
                      {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>
                </div>
                <span className="text-lg font-bold text-slate-300">{skill.level}%</span>
              </div>

              <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-slate-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional technologies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Express.js", "Next.js", "Tailwind CSS", "Git", "REST APIs", "TypeScript"
            ].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-slate-800/30 text-slate-400 rounded-md text-sm border border-slate-700/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}