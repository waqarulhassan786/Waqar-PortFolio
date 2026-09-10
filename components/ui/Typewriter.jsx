"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words, className = "" }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] || "");
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const boot = setTimeout(() => setStarted(true), 1600);
    return () => clearTimeout(boot);
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    const word = words[index];
    const delay = deleting ? 40 : 70;
    const pause = word === text && !deleting ? 1400 : 0;

    const timer = setTimeout(() => {
      if (pause) {
        setDeleting(true);
        return;
      }
      if (deleting) {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (!next) {
          setDeleting(false);
          setIndex((value) => (value + 1) % words.length);
        }
        return;
      }
      setText(word.slice(0, text.length + 1));
    }, pause || delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, started]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.08em] bg-white" />
    </span>
  );
}
