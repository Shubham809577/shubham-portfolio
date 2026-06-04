export function RadarChart({
  labels = ["SQL", "BI", "Data Eng", "ML/Stats", "Storytelling"],
  values = [0.9, 0.85, 0.78, 0.72, 0.82],
}: {
  labels?: string[];
  values?: number[];
}) {
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const r = 86;
  const levels = 4;

  const n = Math.min(labels.length, values.length);
  const angleStep = (Math.PI * 2) / n;

  const point = (i: number, radius: number) => {
    const a = -Math.PI / 2 + i * angleStep;
    return [cx + Math.cos(a) * radius, cy + Math.sin(a) * radius] as const;
  };

  const polygon = (scale: number) => {
    const pts = Array.from({ length: n }, (_, i) => point(i, r * scale));
    return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  };

  const dataPts = Array.from({ length: n }, (_, i) =>
    point(i, r * Math.max(0, Math.min(1, values[i]!))),
  );
  const dataPoly = dataPts
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");

  return (
    <div className="surface rounded-2xl p-5">
      <div className="flex items-baseline justify-between">
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--muted2)]">
          Core competencies
        </p>
        <p className="font-mono text-xs text-[color:var(--muted2)]">Radar</p>
      </div>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="mt-4 block w-full"
        aria-label="Core competency radar chart"
      >
        {/* rings */}
        {Array.from({ length: levels }, (_, i) => {
          const s = (i + 1) / levels;
          return (
            <polygon
              key={s}
              points={polygon(s)}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          );
        })}

        {/* axes */}
        {Array.from({ length: n }, (_, i) => {
          const [x, y] = point(i, r);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          );
        })}

        {/* data */}
        <polygon
          points={dataPoly}
          fill="color-mix(in srgb, var(--accent) 22%, transparent)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />

        {dataPts.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.2"
            fill="var(--accent)"
            opacity="0.9"
          />
        ))}

        {/* labels */}
        {Array.from({ length: n }, (_, i) => {
          const [x, y] = point(i, r + 22);
          return (
            <text
              key={labels[i]}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fill="rgba(255,255,255,0.72)"
              className="font-mono"
            >
              {labels[i]}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

