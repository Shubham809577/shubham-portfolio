import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-16">
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-wide text-violet-600 dark:text-purple-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="relative text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
          {title}
          <span
            className="mt-3 block h-1 w-16 max-w-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400 opacity-90"
            aria-hidden
          />
        </h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

