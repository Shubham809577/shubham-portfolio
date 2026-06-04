import { Badge } from "./Badge";

export function ExperienceCard({
  role,
  company,
  location,
  dates,
  bullets,
  tags = [],
}: {
  role: string;
  company: string;
  location?: string;
  dates: string;
  bullets: string[];
  tags?: string[];
}) {
  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200/90 hover:shadow-lg hover:shadow-violet-500/12 dark:border-white/10 dark:bg-zinc-950/90 dark:hover:border-violet-500/35 dark:hover:shadow-violet-950/40">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {role}
        </h3>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          <span className="font-medium">{company}</span>
          {location ? <span className="text-zinc-500"> · {location}</span> : null}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{dates}</p>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {tags.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      ) : null}
    </article>
  );
}

