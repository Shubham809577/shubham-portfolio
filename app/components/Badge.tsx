import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-violet-200/80 bg-gradient-to-b from-white to-violet-50/50 px-3 py-1 text-sm text-zinc-800 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-violet-300/90 dark:border-violet-500/30 dark:from-zinc-950 dark:to-violet-950/35 dark:text-zinc-200 dark:hover:border-violet-400/45">
      {children}
    </span>
  );
}

