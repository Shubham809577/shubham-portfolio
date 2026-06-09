"use client";

import type { ReactNode } from "react";
import type { SectionId } from "../data/sections";

export function SectionLink({
  sectionId,
  className = "",
  children,
}: {
  sectionId: SectionId;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`#${sectionId}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {children}
    </a>
  );
}
