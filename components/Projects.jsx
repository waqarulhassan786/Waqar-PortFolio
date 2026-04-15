"use client";
import { useState } from 'react';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "MERN E-commerce Platform",
      description: "A powerful online store built with MongoDB, Express, React, and Node.js.",
      icon: "🛒",
      gradient: "from-slate-900 to-slate-700",
      technologies: ["React", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Project Management App",
      description: "A MERN-powered dashboard for tasks, teams, and realtime workflow.",
      icon: "📋",
      gradient: "from-amber-500 to-orange-500",
      technologies: ["Express", "MongoDB", "React"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Developer Portfolio",
      description: "A polished portfolio site with professional branding and responsive UX.",
      icon: "🎨",
      image: "/Portfolio image.png",
      gradient: "from-slate-700 to-slate-500",
      technologies: ["Next.js", "Tailwind", "MERN"],
      liveDemo: "https://waqar-port-folio-736k.vercel.app/",
      github: "https://github.com/waqarulhassan786"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization.",
      icon: "📊",
      gradient: "from-blue-600 to-purple-600",
      technologies: ["React", "Chart.js", "Node.js"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Weather Application",
      description: "Real-time weather app with location-based forecasts and interactive maps.",
      icon: "🌤️",
      gradient: "from-cyan-500 to-blue-500",
      technologies: ["React", "API", "Geolocation"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Task Management Tool",
      description: "Collaborative task management with drag-and-drop functionality.",
      icon: "✅",
      gradient: "from-green-600 to-emerald-600",
      technologies: ["React", "DnD", "LocalStorage"],
      liveDemo: "#",
      github: "#"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-slate-950 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden hover:-translate-y-1 hover:shadow-amber-500/20 transition-transform duration-300">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white text-4xl">{project.icon}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-amber-400/10 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveDemo} className="text-amber-300 hover:text-amber-200">Live Demo</a>
                  <a href={project.github} className="text-slate-400 hover:text-slate-200">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center px-8 py-3 bg-slate-950 text-white rounded-full hover:bg-slate-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll ? 'See Less' : 'See More Projects'}
              <svg
                className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}