"use client";

import { usePathname } from "next/navigation";
import { IconGmail, IconOutdent } from "../Icons";
import { useTerminal } from "../terminal/TerminalContext";

export default function FloatingControls() {
  const { toggle, open } = useTerminal();
  const pathname = usePathname();
  const contactHref = pathname === "/projects" ? "/#contact" : "#contact";

  return (
    <>
      <div className="fixed bottom-6 left-6 z-[60]">
        <button
          type="button"
          aria-label={open ? "Close Developer Terminal" : "Open Developer Terminal"}
          onClick={toggle}
          className={`dock-btn grid h-14 w-14 place-items-center rounded-full ${open ? "text-white" : "text-zinc-300 hover:text-white"}`}
        >
          <IconOutdent className="h-4 w-4" />
        </button>
      </div>
      <a
        href={contactHref}
        aria-label="Let's Connect"
        className="dock-btn fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full text-zinc-300 hover:text-white"
      >
        <IconGmail className="h-5 w-5" />
      </a>
    </>
  );
}
