import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-violet-500/50 dark:focus-visible:ring-offset-zinc-950";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const className =
    variant === "primary"
      ? `${base} bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-md shadow-violet-500/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/25 active:translate-y-0 dark:shadow-violet-900/40`
      : `${base} border border-violet-200/90 bg-white/80 text-zinc-900 backdrop-blur-sm hover:-translate-y-0.5 hover:border-violet-300 hover:bg-white dark:border-violet-500/35 dark:bg-zinc-950/80 dark:text-zinc-50 dark:hover:border-purple-400/45 dark:hover:bg-zinc-900/90`;

  return (
    <Link
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

