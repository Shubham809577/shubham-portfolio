import type { ReactNode } from "react";
import { IconExternalLink } from "./Icons";

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 h-full w-px bg-[color:var(--accent)]/30" />
      <div className="space-y-6">{children}</div>
    </div>
  );
}

export function TimelineItem({
  side = "left",
  title,
  subtitle,
  companyUrl,
  dates,
  children,
}: {
  side?: "left" | "right";
  title: string;
  subtitle: string;
  companyUrl?: string;
  dates: string;
  children: ReactNode;
}) {
  return (
    <div className="relative grid gap-4 md:grid-cols-2">
      <div className={side === "left" ? "" : "md:order-2"} />
      <div className={side === "left" ? "" : "md:order-1"} />

      <div className="absolute left-4 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[color:var(--accent)] shadow-[0_0_0_4px_rgba(78,205,196,0.08)]" />

      <article
        className={[
          "surface surface-hover rounded-2xl p-5 md:p-6",
          side === "left" ? "md:col-start-1 md:ml-10" : "md:col-start-2 md:mr-10",
        ].join(" ")}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="hover-word text-lg font-semibold tracking-tight">{title}</h3>
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="company-link group/company mt-1 inline-flex max-w-full flex-nowrap items-center gap-1.5 whitespace-nowrap text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
              >
                <span>{subtitle}</span>
                <IconExternalLink className="shrink-0 opacity-50 transition-all group-hover/company:opacity-100 group-hover/company:text-[color:var(--accent)]" />
              </a>
            ) : (
              <p className="hover-word--alt mt-1 text-sm text-[color:var(--muted)]">
                {subtitle}
              </p>
            )}
          </div>
          <p className="font-mono text-xs text-[color:var(--muted2)]">{dates}</p>
        </div>
        <div className="mt-4">{children}</div>
      </article>
    </div>
  );
}

