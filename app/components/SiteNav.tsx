"use client";

import Link from "next/link";
import { Container } from "./Container";
import { navSections } from "../data/sections";
import { useActiveSection } from "./ActiveSection";
import { ProfileNameLabel } from "./ProfilePhoto";
import { profile } from "../data/profile";

export function SiteNav() {
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-black/60 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="nav-brand inline-flex items-center gap-2">
            <Link href="#top" className="nav-brand__dot-link" aria-label="Back to top">
              <span className="nav-brand__dot" aria-hidden />
            </Link>
            <ProfileNameLabel className="cursor-pointer font-mono text-sm font-semibold tracking-tight text-white/90 transition-colors hover:text-[color:var(--accent)]" />
          </div>

          <nav aria-label="Primary">
            <ul className="hidden items-center gap-0.5 sm:flex">
              {navSections.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={[
                        "nav-link group relative inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
                        isActive ? "nav-link--active" : "text-white/65",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span
                        className={[
                          "nav-link__dot rounded-full transition-all duration-200",
                          isActive
                            ? "nav-link__dot--active"
                            : "scale-75 opacity-40 group-hover:scale-100 group-hover:opacity-100",
                        ].join(" ")}
                        aria-hidden
                      />
                      <span className="nav-link__text transition-colors duration-200 group-hover:text-[color:var(--accent)]">
                        {item.label}
                      </span>
                      <span className="nav-link__line" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="#contact"
              className="nav-cta inline-flex items-center justify-center gap-2 rounded-md border border-[color:var(--border)] px-4 py-2 text-sm font-medium text-white/80 transition-all duration-200 sm:hidden"
            >
              <span className="nav-link__dot nav-link__dot--active scale-75" aria-hidden />
              Contact
            </Link>
          </nav>
        </div>
      </Container>
      <div className="nav-progress-track h-px w-full bg-[color:var(--border)]">
        <div
          className="nav-progress-fill h-px bg-[color:var(--accent)] transition-all duration-500 ease-out"
          style={{
            width: active
              ? `${((navSections.findIndex((s) => s.id === active) + 1) / navSections.length) * 100}%`
              : "0%",
          }}
        />
      </div>
    </header>
  );
}
