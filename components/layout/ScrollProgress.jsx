"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function update() {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(height > 0 ? (window.scrollY / height) * 100 : 0);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} aria-hidden="true" />;
}
