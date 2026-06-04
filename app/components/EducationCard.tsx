import Link from "next/link";

export function EducationCard({
  school,
  degree,
  meta,
  transcriptSrc,
}: {
  school: string;
  degree: string;
  meta: string;
  transcriptSrc: string;
}) {
  return (
    <Link
      href={transcriptSrc}
      target="_blank"
      rel="noopener noreferrer"
      className="edu-card surface surface-hover group relative block rounded-2xl p-6"
    >
      <span className="edu-card__tooltip" role="tooltip">
        View Transcript
      </span>
      <p className="edu-card__school inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors group-hover:text-[color:var(--accent)]">
        {school}
        <span className="text-[color:var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
          ↗
        </span>
      </p>
      <p className="mt-1 text-sm text-white/75">{degree}</p>
      <p className="mt-2 font-mono text-xs text-[color:var(--highlight)]">{meta}</p>
    </Link>
  );
}
