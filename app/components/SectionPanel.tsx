"use client";

import type { ReactNode } from "react";
import type { SectionId } from "../data/sections";
import { useActiveSection } from "./ActiveSection";

export function SectionPanel({
  id,
  children,
  className = "",
}: {
  id: SectionId;
  children: ReactNode;
  className?: string;
}) {
  const active = useActiveSection();
  const isActive = active === id;

  return (
    <section
      id={id}
      data-section={id}
      className={[
        "section-panel scroll-mt-24 py-14 sm:py-16",
        isActive ? "section-panel--active" : "",
        className,
      ].join(" ")}
    >
      <span className="section-panel__dot" aria-hidden />
      <span className="section-panel__connector" aria-hidden />
      {children}
    </section>
  );
}
