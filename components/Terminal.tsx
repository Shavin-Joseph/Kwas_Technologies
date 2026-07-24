"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type LineType = "cmd" | "out" | "ok";

const LINES: { text: string; type: LineType }[] = [
  { text: "$ curl -sL kwas.tech/install | sh", type: "cmd" },
  { text: "Resolving kwas.tech… done", type: "out" },
  { text: "Fetching latest release… v2.4.1", type: "out" },
  { text: "Verifying signature… ok", type: "ok" },
  { text: "Installing 3 packages… done", type: "out" },
  { text: "✓ Ready. No ads, no trackers, no nonsense.", type: "ok" },
];

const LINE_COLOR: Record<LineType, string> = {
  cmd: "text-fg",
  out: "text-muted",
  ok: "text-signal",
};

export function Terminal() {
  const reduced = useReducedMotion();
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const done = reduced || lineIdx >= LINES.length;

  useEffect(() => {
    if (reduced || lineIdx >= LINES.length) return;
    const current = LINES[lineIdx].text;

    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 16 + Math.random() * 20);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 240);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx, reduced]);

  const visibleLines = reduced
    ? LINES
    : LINES.slice(0, lineIdx).concat(
        lineIdx < LINES.length ? [{ ...LINES[lineIdx], text: LINES[lineIdx].text.slice(0, charIdx) }] : []
      );

  return (
    <div className="glass overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E0574A]" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal" />
        <span className="ml-3 font-mono text-xs text-faint">install.sh</span>
      </div>
      <div className="min-h-[220px] px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {visibleLines.map((l, i) => (
          <div key={i} className={LINE_COLOR[l.type]}>
            {l.text}
            {!done && i === visibleLines.length - 1 && (
              <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-amber align-middle" />
            )}
          </div>
        ))}
        {done && (
          <span className="mt-1 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-amber align-middle" />
        )}
      </div>
    </div>
  );
}
