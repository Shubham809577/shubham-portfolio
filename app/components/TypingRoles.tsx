"use client";

import { useEffect, useMemo, useState } from "react";

type Phase = "typing" | "holding" | "deleting";

export function TypingRoles({
  roles,
  className = "",
}: {
  roles: string[];
  className?: string;
}) {
  const safeRoles = useMemo(() => roles.filter(Boolean), [roles]);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (!safeRoles.length) return;

    const full = safeRoles[index % safeRoles.length]!;

    const tick = () => {
      if (phase === "typing") {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setPhase("holding");
        return;
      }
      if (phase === "holding") {
        setPhase("deleting");
        return;
      }
      // deleting
      const next = full.slice(0, Math.max(0, text.length - 1));
      setText(next);
      if (!next) {
        setIndex((v) => v + 1);
        setPhase("typing");
      }
    };

    const delay =
      phase === "typing" ? 55 : phase === "deleting" ? 28 : 1100;
    const t = window.setTimeout(tick, delay);
    return () => window.clearTimeout(t);
  }, [safeRoles, index, phase, text]);

  return (
    <span className={className}>
      <span className="font-mono text-[color:var(--accent)]">{text}</span>
      <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-[color:var(--accent)] opacity-80 motion-safe:animate-pulse" />
    </span>
  );
}

