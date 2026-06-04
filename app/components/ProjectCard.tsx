import Link from "next/link";
import type { PortfolioProject } from "../data/portfolioProjects";
import { Badge } from "./Badge";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const { title, description, tags, href, featured, isPlaceholder } = project;

  const shell =
    "group relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg";

  const featuredRing =
    featured && !isPlaceholder
      ? "border-violet-200/85 bg-gradient-to-br from-white via-white to-violet-50/65 dark:border-violet-500/30 dark:from-zinc-950 dark:via-zinc-950 dark:to-violet-950/45"
      : "";

  const defaultShell =
    !isPlaceholder && !featured
      ? "border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950"
      : "";

  const placeholderShell =
    isPlaceholder
      ? "border-2 border-dashed border-violet-300/55 bg-violet-50/40 dark:border-violet-500/40 dark:bg-violet-950/25"
      : "";

  const content = (
    <>
      {!isPlaceholder ? (
        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-purple-300/30 to-violet-500/22 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-purple-400/18 dark:to-violet-500/16" />
      ) : null}

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-violet-950 dark:text-zinc-50 dark:group-hover:text-violet-100">
            {title}
          </h3>
          {isPlaceholder ? (
            <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-500/22 dark:text-violet-200">
              Add later
            </span>
          ) : null}
          {featured && !isPlaceholder ? (
            <span className="rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
              Featured
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
          {description}
        </p>
        {tags.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        ) : null}
        {href && !isPlaceholder ? (
          <p className="mt-4 text-sm font-medium text-violet-600 transition-colors group-hover:text-purple-600 dark:text-violet-400 dark:group-hover:text-purple-300">
            View project →
          </p>
        ) : null}
      </div>
    </>
  );

  if (href && !isPlaceholder) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${shell} ${featuredRing || defaultShell} block focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 dark:focus-visible:ring-violet-500/50`}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      className={`${shell} ${placeholderShell || featuredRing || defaultShell}`}
    >
      {content}
    </article>
  );
}
