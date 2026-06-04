/**
 * Fixed decorative layer — sits behind all content (layout z-index).
 */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {/* Soft spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-15%,rgba(167,139,250,0.45),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(139,92,246,0.28),transparent_58%)]" />

      {/* Aurora orbs */}
      <div className="animate-orb-1 absolute -left-[20%] top-[-10%] h-[min(85vw,780px)] w-[min(85vw,780px)] rounded-full bg-gradient-to-br from-violet-400/35 via-fuchsia-300/25 to-purple-300/20 blur-[100px] dark:from-violet-600/30 dark:via-fuchsia-500/15 dark:to-purple-600/15" />
      <div className="animate-orb-2 absolute -right-[15%] top-[25%] h-[min(70vw,560px)] w-[min(70vw,560px)] rounded-full bg-gradient-to-bl from-purple-400/30 via-violet-300/20 to-transparent blur-[90px] dark:from-purple-500/22 dark:via-violet-600/12" />
      <div className="animate-orb-3 absolute bottom-[-20%] left-[15%] h-[min(90vw,640px)] w-[min(90vw,640px)] rounded-full bg-gradient-to-tr from-fuchsia-300/25 via-violet-400/20 to-purple-300/18 blur-[110px] dark:from-fuchsia-600/18 dark:via-violet-700/12 dark:to-purple-950/25" />

      {/* Analytics-style grid */}
      <div
        className="absolute inset-0 opacity-[0.45] mix-blend-multiply dark:opacity-[0.28] dark:mix-blend-soft-light"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Diagonal sheen */}
      <div className="animate-sheen absolute -left-1/2 top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-[0.12] mix-blend-overlay dark:via-white/[0.07] dark:opacity-40 dark:mix-blend-soft-light" />

      {/* Grain */}
      <div className="noise-layer absolute inset-0 opacity-[0.4] dark:opacity-[0.22]" />

      {/* Edge vignette + readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_90%_at_50%_45%,transparent_0%,var(--background)_88%)] dark:bg-[radial-gradient(ellipse_100%_95%_at_50%_50%,transparent_25%,var(--background)_92%)]" />
    </div>
  );
}
