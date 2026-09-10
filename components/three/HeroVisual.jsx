"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-[2rem] bg-[#101526]" />,
});

export default function HeroVisual() {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    setMode(reduce || small ? "css" : "3d");
  }, []);

  if (mode !== "3d") {
    return (
      <div className="relative h-full min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101526]" aria-hidden="true">
        <div className="absolute inset-10 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-3xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-sky-400/10" />
        <div className="absolute right-10 top-12 h-16 w-16 rotate-45 border border-sky-300/30" />
        <div className="absolute bottom-14 left-10 h-10 w-10 rounded-full border border-white/20" />
      </div>
    );
  }

  return (
    <div
      className="h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0f1a] md:h-[420px]"
      aria-hidden="true"
    >
      <Scene />
    </div>
  );
}
