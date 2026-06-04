"use client";

import type { ReactNode } from "react";
import { sectionIds } from "../data/sections";
import { ActiveSectionProvider } from "./ActiveSection";
import { SectionRail } from "./SectionRail";
import { ProfilePhotoProvider } from "./ProfilePhoto";
import { SiteNav } from "./SiteNav";

export function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <ActiveSectionProvider sectionIds={sectionIds}>
      <ProfilePhotoProvider>
        <SiteNav />
        <SectionRail />
        {children}
      </ProfilePhotoProvider>
    </ActiveSectionProvider>
  );
}
