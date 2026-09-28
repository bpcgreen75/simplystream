"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Props = {
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
};

/** Hamburger menu shown below the `lg` breakpoint. Escape closes and returns focus. */
export function MobileNav({ links, cta }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="grid size-11 place-items-center rounded-full border border-border bg-surface text-text hover:bg-surface-muted"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? "close" : "menu"} size={22} />
      </button>

      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-surface shadow-float"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 pb-6 pt-2 sm:px-8">
          <ul className="divide-y divide-border">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-4 text-lg font-semibold text-text"
                  onClick={() => close(false)}
                >
                  {link.label}
                  <Icon name="arrow-right" size={18} className="text-muted" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={cta.href}
            className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary text-base font-semibold text-on-primary hover:bg-primary-hover"
            onClick={() => close(false)}
          >
            {cta.label}
            <Icon name="arrow-right" size={18} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
