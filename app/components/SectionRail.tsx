"use client";

import { useCallback, useEffect, useState } from "react";
import { navSections } from "../data/sections";
import type { SectionId } from "../data/sections";
import { useActiveSection } from "./ActiveSection";

type DotPos = { id: SectionId; label: string; y: number };

export function SectionRail() {
  const active = useActiveSection();
  const [dots, setDots] = useState<DotPos[]>([]);

  const updatePositions = useCallback(() => {
    const next: DotPos[] = [];
    for (const item of navSections) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const y = rect.top + rect.height / 2;
      next.push({ id: item.id, label: item.label, y });
    }
    setDots(next);
  }, []);

  useEffect(() => {
    updatePositions();
    window.addEventListener("scroll", updatePositions, { passive: true });
    window.addEventListener("resize", updatePositions);
    return () => {
      window.removeEventListener("scroll", updatePositions);
      window.removeEventListener("resize", updatePositions);
    };
  }, [updatePositions]);

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const spine =
    dots.length >= 2
      ? { top: dots[0]!.y, height: dots[dots.length - 1]!.y - dots[0]!.y }
      : null;

  return (
    <nav
      aria-label="Section navigation"
      className="section-rail-dots pointer-events-none fixed right-3 z-30 hidden xl:block"
      style={{ top: 0, bottom: 0, width: 48 }}
    >
      {spine ? (
        <div
          className="section-rail-dots__spine"
          style={{
            top: spine.top,
            height: spine.height,
          }}
          aria-hidden
        />
      ) : null}

      {dots.map((dot) => {
        const isActive = active === dot.id;
        return (
          <button
            key={dot.id}
            type="button"
            onClick={() => scrollTo(dot.id)}
            className={[
              "section-rail-dots__dot pointer-events-auto",
              isActive ? "section-rail-dots__dot--active" : "",
            ].join(" ")}
            style={{ top: dot.y }}
            aria-label={`Go to ${dot.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span className="sr-only">{dot.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
