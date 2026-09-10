import { footerLinks, profile } from "../../lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <a href="/#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold">
            WH
          </span>
          <span>
            <span className="block text-sm font-medium text-white">{profile.name}</span>
            <span className="block text-xs text-zinc-500">Software Engineer</span>
          </span>
        </a>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4 text-sm text-zinc-500">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href={profile.gmail} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between px-4 text-xs text-zinc-600 sm:px-6 lg:px-8">
        <p>© 2026 {profile.name} — All rights reserved</p>
        <p>Designed & Built with experience</p>
      </div>
    </footer>
  );
}
