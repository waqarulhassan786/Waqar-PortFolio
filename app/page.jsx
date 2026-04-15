"use client";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SmoothScroll from "../components/SmoothScroll";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SmoothScroll />
      <Navigation />

      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Who I Am</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I'm a MERN stack developer delivering clean, scalable web applications with a strong focus on UI polish
                and backend architecture. I build professional digital products that feel fast, modern, and reliable.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                My expertise spans React frontend development and Node.js/Express backend systems backed by MongoDB.
                I enjoy solving real business problems with full-stack solutions and shipping production-ready applications.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">2+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">15+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Mission</h4>
                <p className="text-gray-600">To create innovative web solutions that make a difference</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">🚀 Vision</h4>
                <p className="text-gray-600">Building the future of web development, one project at a time</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">💡 Philosophy</h4>
                <p className="text-gray-600">Clean code, great UX, and continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl shadow-black/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">MERN Stack Developer</h3>
                  <p className="text-amber-400 font-medium">Freelance</p>
                </div>
                <div className="text-slate-400 mt-2 md:mt-0">2022 - Present</div>
              </div>
              <ul className="text-slate-300 space-y-2">
                <li>• Built end-to-end MERN applications with React, Node.js, Express, and MongoDB.</li>
                <li>• Designed responsive dashboards, admin panels, and customer-facing interfaces.</li>
                <li>• Implemented REST APIs, authentication, and database models for production apps.</li>
                <li>• Delivered reliable, scalable solutions for client-focused web products.</li>
              </ul>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl shadow-black/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Web Developer Intern</h3>
                  <p className="text-amber-400 font-medium">Local Tech Company</p>
                </div>
                <div className="text-slate-400 mt-2 md:mt-0">2021 - 2022</div>
              </div>
              <ul className="text-slate-300 space-y-2">
                <li>• Developed modern web interfaces using HTML, CSS, JavaScript, and React.</li>
                <li>• Learned professional workflows for version control, testing, and deployment.</li>
                <li>• Supported backend integration with APIs and database-driven features.</li>
                <li>• Worked closely with teams to build user-centric responsive designs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      {/* Education Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl shadow-black/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-slate-950 text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Bachelor's in Software Engineering</h3>
                  <p className="text-amber-300"><a href="https://www.iub.edu.pk/">The Islamia University Bahawalpur</a></p>
                </div>
              </div>
              <p className="text-slate-400">2022 - 2026</p>
              <p className="text-slate-400 mt-2">Graduated with honors, focusing on web technologies and software development.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl shadow-black/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-slate-950 text-xl">📚</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Web Development Certification</h3>
                  <p className="text-amber-300"><a href="https://codesthinker.com/"  >Codes Thinker</a></p>
                </div>
              </div>
              <p className="text-slate-400">2023 - 2024</p>
              <p className="text-slate-400 mt-2">Comprehensive course covering modern web development technologies and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-100 pb-9 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="border-t border-slate-800 pt-6">
              <p className="text-slate-500">&copy; 2024 Waqar ul Hassan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
