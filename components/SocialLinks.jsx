import { profile } from "../lib/content";
import { IconGitHub, IconGmail, IconLinkedIn, IconWhatsApp } from "./Icons";

const links = [
  { name: "LinkedIn", href: profile.linkedin, icon: IconLinkedIn },
  { name: "GitHub", href: profile.github, icon: IconGitHub },
  { name: "WhatsApp", href: profile.whatsapp, icon: IconWhatsApp },
  { name: "Gmail", href: profile.gmail, icon: IconGmail },
];

export default function SocialLinks({ size = "md", showLabels = false, className = "" }) {
  const box = size === "sm" ? "h-10 w-10" : size === "lg" ? "h-12 w-12" : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.name}`}
            title={item.name}
            className="group inline-flex flex-col items-center gap-2"
          >
            <span className={`icon-btn inline-flex ${box} items-center justify-center rounded-full border border-white/10 text-slate-200`}>
              <Icon className={icon} />
            </span>
            {showLabels ? (
              <span className="text-xs font-medium text-slate-400 group-hover:text-amber-300">{item.name}</span>
            ) : null}
          </a>
        );
      })}
    </div>
  );
}
