export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-amber-400">Waqar</div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-200 hover:text-amber-300 transition-colors">Home</a>
            <a href="#about" className="text-slate-200 hover:text-amber-300 transition-colors">About</a>
            <a href="#skills" className="text-slate-200 hover:text-amber-300 transition-colors">Skills</a>
            <a href="#experience" className="text-slate-200 hover:text-amber-300 transition-colors">Experience</a>
            <a href="#projects" className="text-slate-200 hover:text-amber-300 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-200 hover:text-amber-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}