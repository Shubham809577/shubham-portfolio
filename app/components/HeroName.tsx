"use client";

import { profile } from "../data/profile";
import { ProfileNameLabel } from "./ProfilePhoto";
import { TypingRoles } from "./TypingRoles";

export function HeroName() {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/60 hover-word hover-word--alt">
        {profile.location}
      </p>

      <div className="mt-4">
        <ProfileNameLabel
          as="h1"
          className="inline-block cursor-pointer text-4xl font-semibold tracking-tight text-white transition-colors hover:text-[color:var(--accent)] sm:text-6xl"
        />
        <p className="mt-2 font-mono text-xs text-white/40">
          Hover or click name for photo
        </p>
      </div>

      <p className="mt-4 text-lg text-white/75">
        <TypingRoles roles={[...profile.headlineRoles]} />
      </p>
    </>
  );
}
