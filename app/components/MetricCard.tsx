import type { ReactNode } from "react";

export function MetricCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string;
  detail?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/85 hover:shadow-lg hover:shadow-violet-500/12 dark:border-white/10 dark:bg-zinc-950/90 dark:hover:border-violet-500/40 dark:hover:shadow-violet-950/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
            {label}
          </p>
          <p className="mt-1 bg-gradient-to-r from-zinc-950 to-violet-900 bg-clip-text text-2xl font-semibold tracking-tight text-transparent dark:from-zinc-50 dark:to-purple-200">
            {value}
          </p>
        </div>
        {icon ? (
          <div className="rounded-xl border border-violet-200/70 bg-gradient-to-br from-violet-50 to-purple-50 p-2 text-violet-800 transition-transform duration-300 group-hover:scale-110 dark:border-violet-500/35 dark:from-violet-950/50 dark:to-purple-950/35 dark:text-purple-100">
            {icon}
          </div>
        ) : null}
      </div>
      {detail ? (
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {detail}
        </p>
      ) : null}
    </div>
  );
}

