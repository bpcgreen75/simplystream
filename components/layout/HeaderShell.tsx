"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Adds a subtle background, border, and shadow to the sticky header once the page scrolls. */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-200 border-b ${
        scrolled
          ? "border-border bg-background/90 shadow-[0_6px_20px_-12px_rgb(15_23_42/0.18)] backdrop-blur-md"
          : "border-transparent bg-background/0"
      }`}
    >
      {children}
    </header>
  );
}
