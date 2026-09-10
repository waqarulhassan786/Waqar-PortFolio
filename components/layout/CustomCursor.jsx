"use client";

import { useEffect, useRef } from "react";

const hoverTargets = "a, button, input, textarea, select, [role='button'], [role='tab']";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    document.body.classList.add("has-custom-cursor");

    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!dot.current || !ring.current) return;
      dot.current.classList.add("is-on");
      ring.current.classList.add("is-on");
      dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const tick = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const setHover = (active) => {
      if (!ring.current) return;
      ring.current.style.width = active ? "56px" : "36px";
      ring.current.style.height = active ? "56px" : "36px";
    };

    const onOver = (e) => {
      if (e.target.closest(hoverTargets)) setHover(true);
    };
    const onOut = (e) => {
      if (e.target.closest(hoverTargets)) setHover(false);
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="custom-cursor hidden md:block" aria-hidden="true" />
      <div ref={ring} className="custom-cursor-ring hidden md:block" aria-hidden="true" />
    </>
  );
}
