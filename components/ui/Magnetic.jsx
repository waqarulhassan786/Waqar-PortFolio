"use client";

export default function Magnetic({ children, className = "", strength = 10 }) {
  function onMove(e) {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const box = el.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  }

  function onLeave(e) {
    e.currentTarget.style.transform = "translate(0, 0)";
  }

  return (
    <span className={`inline-flex transition-transform duration-200 ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </span>
  );
}
