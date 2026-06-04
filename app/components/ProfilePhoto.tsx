"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { profile } from "../data/profile";

type PhotoContextValue = {
  hideFromName: () => void;
  showFromName: (el: HTMLElement) => void;
  togglePinFromName: (el: HTMLElement) => void;
};

const PhotoContext = createContext<PhotoContextValue | null>(null);

const CARD_W = 168;

export function ProfilePhotoProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [position, setPosition] = useState({ top: 88, left: 24 });
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  const placeNearName = useCallback((el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const top = rect.bottom + 10;
    let left = rect.left;
    const maxLeft = window.innerWidth - CARD_W - 12;
    left = Math.max(12, Math.min(left, maxLeft));
    setPosition({ top, left });
  }, []);

  const showFromName = useCallback(
    (el: HTMLElement) => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      setHiddenByScroll(false);
      placeNearName(el);
      setVisible(true);
    },
    [placeNearName],
  );

  const hideFromName = useCallback(() => {
    if (pinned) return;
    leaveTimer.current = setTimeout(() => setVisible(false), 160);
  }, [pinned]);

  const togglePinFromName = useCallback(
    (el: HTMLElement) => {
      setHiddenByScroll(false);
      placeNearName(el);
      setPinned((p) => {
        const next = !p;
        setVisible(next);
        return next;
      });
    },
    [placeNearName],
  );

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current + 4 && y > 48) {
        setHiddenByScroll(true);
        setVisible(false);
        setPinned(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showCard = visible && !hiddenByScroll;

  return (
    <PhotoContext.Provider
      value={{ hideFromName, showFromName, togglePinFromName }}
    >
      {children}
      <div
        className={[
          "profile-photo-float pointer-events-none fixed z-[90]",
          showCard ? "profile-photo-float--visible" : "profile-photo-float--hidden",
        ].join(" ")}
        style={{ top: position.top, left: position.left, width: CARD_W }}
        aria-hidden={!showCard}
      >
        <div className="profile-photo-glass pointer-events-auto relative p-3">
          {pinned ? (
            <button
              type="button"
              onClick={() => {
                setPinned(false);
                setVisible(false);
              }}
              className="absolute -right-1 -top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-[color:var(--card)] text-sm text-white/80 hover:text-[color:var(--accent)]"
              aria-label="Close photo"
            >
              ×
            </button>
          ) : null}
          <div className="profile-photo-circle relative mx-auto h-[7.5rem] w-[7.5rem] overflow-hidden sm:h-32 sm:w-32">
            <Image
              src={profile.photoSrc}
              alt={`${profile.name} headshot`}
              fill
              sizes="128px"
              className="object-cover object-[50%_22%] scale-[1.35]"
              priority
            />
          </div>
        </div>
      </div>
    </PhotoContext.Provider>
  );
}

function useNamePhotoHandlers(ref: React.RefObject<HTMLElement | null>) {
  const ctx = useContext(PhotoContext);

  return {
    onMouseEnter: () => {
      if (ref.current && ctx) ctx.showFromName(ref.current);
    },
    onMouseLeave: () => ctx?.hideFromName(),
    onClick: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (ref.current && ctx) ctx.togglePinFromName(ref.current);
    },
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (ref.current && ctx) ctx.togglePinFromName(ref.current);
      }
    },
    role: "button" as const,
    tabIndex: 0,
    "aria-label": `View photo of ${profile.name}`,
  };
}

/** Hover/click handlers apply only to this name text — nowhere else. */
export function ProfileNameLabel({
  className = "",
  as = "span",
}: {
  className?: string;
  as?: "span" | "h1";
}) {
  const ref = useRef<HTMLElement>(null);
  const ctx = useContext(PhotoContext);
  const handlers = useNamePhotoHandlers(ref);

  if (!ctx) {
    return as === "h1" ? (
      <h1 className={className}>{profile.name}</h1>
    ) : (
      <span className={className}>{profile.name}</span>
    );
  }

  if (as === "h1") {
    return (
      <h1 ref={ref as React.RefObject<HTMLHeadingElement>} className={className} {...handlers}>
        {profile.name}
      </h1>
    );
  }

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className} {...handlers}>
      {profile.name}
    </span>
  );
}
