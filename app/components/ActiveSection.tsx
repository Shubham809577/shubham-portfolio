"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SectionId } from "../data/sections";

const ActiveSectionContext = createContext<SectionId | null>(null);

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}

function pickActiveSection(sectionIds: readonly SectionId[]) {
  const marker = window.innerHeight * 0.33;
  let current: SectionId = sectionIds[0]!;

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top;
    if (top <= marker) current = id;
  }

  return current;
}

export function ActiveSectionProvider({
  sectionIds,
  children,
}: {
  sectionIds: readonly SectionId[];
  children: ReactNode;
}) {
  const [active, setActive] = useState<SectionId>(sectionIds[0]!);
  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds]);

  useEffect(() => {
    const update = () => setActive(pickActiveSection(sectionIds));
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [idsKey, sectionIds]);

  return (
    <ActiveSectionContext.Provider value={active}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
