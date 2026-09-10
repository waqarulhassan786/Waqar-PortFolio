import { navLinks, profile } from "../../lib/content";
import SocialLinks from "../SocialLinks";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr_auto] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-slate-400">{profile.headline}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="focus-ring hover:text-amber-300">
              {link.label}
            </a>
          ))}
        </div>
        <SocialLinks size="sm" />
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between px-4 text-xs text-slate-500 sm:px-6 lg:px-8">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <a href="#home" className="focus-ring rounded-full border border-white/10 px-3 py-2 hover:border-amber-400 hover:text-amber-300">
          Back to top
        </a>
      </div>
    </footer>
  );
}
