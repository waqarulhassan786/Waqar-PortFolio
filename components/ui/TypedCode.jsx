"use client";

import { useEffect, useState } from "react";

export default function TypedCode({ source, speed = 32 }) {
  const [count, setCount] = useState(0);
  const typed = source.slice(0, count);
  const typedLines = typed.split("\n");
  const done = count >= source.length;

  useEffect(() => {
    if (done) {
      const restart = setTimeout(() => setCount(0), 2400);
      return () => clearTimeout(restart);
    }
    const pause = source[count] === "\n" ? speed * 8 : speed;
    const timer = setTimeout(() => setCount((value) => value + 1), pause);
    return () => clearTimeout(timer);
  }, [count, done, source, speed]);

  return (
    <div className="font-mono text-[12px] leading-7 sm:text-[13px]">
      {typedLines.map((visible, index) => {
        const active = index === typedLines.length - 1;
        return (
          <div key={index} className={`grid grid-cols-[2.25rem_1fr] ${active ? "code-line-active" : ""}`}>
            <span className="select-none pr-3 text-right text-[11px] text-zinc-600">{index + 1}</span>
            <span className="min-w-0 whitespace-pre">
              {tokenize(visible).map((token, tokenIndex) => (
                <span key={`${index}-${tokenIndex}`} className={token.className}>
                  {token.text}
                </span>
              ))}
              {active ? <span className="code-caret" /> : null}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function tokenize(source) {
  let work = source;
  let dangling = "";
  if ((source.match(/'/g) || []).length % 2 === 1) {
    const index = source.lastIndexOf("'");
    work = source.slice(0, index);
    dangling = source.slice(index);
  }
  const pattern =
    /(\/\/[^\n]*|'(?:\\'|[^'])*'|"(?:\\"|[^"])*"|`(?:\\`|[^`])*`|\b(?:const|async|function|await|return)\b|\b\d+\b)/g;
  const tokens = [];
  let last = 0;
  let match = pattern.exec(work);
  while (match) {
    if (match.index > last) tokens.push({ text: work.slice(last, match.index), className: "text-zinc-200" });
    const value = match[0];
    let className = "text-zinc-200";
    if (value.startsWith("//")) className = "code-cm";
    else if (/^['"`]/.test(value)) className = "code-str";
    else if (/^(async|function|const|await|return)$/.test(value)) className = "code-kw";
    else if (/^\d+$/.test(value)) className = "code-num";
    else className = "code-fn";
    tokens.push({ text: value, className });
    last = match.index + value.length;
    match = pattern.exec(work);
  }
  if (last < work.length) tokens.push({ text: work.slice(last), className: "text-zinc-200" });
  if (dangling) tokens.push({ text: dangling, className: "code-str" });
  return tokens;
}
