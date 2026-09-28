/**
 * BRAND CONFIGURATION
 * ------------------------------------------------------------------
 * The single source of truth for every brand-specific string, colour,
 * and asset on the site. Components never hard-code a brand name,
 * headline, CTA label, or hex colour; they read from `brand` below.
 *
 * To switch brands, change ACTIVE_BRAND. You can also override it without
 * a code change by setting the NEXT_PUBLIC_BRAND environment variable
 * (useful for a Netlify preview of the other brand).
 *
 * Once a final name is chosen, delete the other entry in `brands`
 * and hard-set ACTIVE_BRAND.
 */

import type { IconName } from "@/components/ui/Icon";

export type BrandId = "simplystream" | "streamright";

/** ← Change this one line to switch the entire site. */
export const ACTIVE_BRAND: BrandId = "simplystream";

export type BrandColors = {
  /** Main action colour: buttons, links, key highlights. */
  primary: string;
  primaryHover: string;
  /** Text colour placed on top of `primary`. */
  onPrimary: string;
  /** Supporting brand colour (gradients, secondary highlights). */
  secondary: string;
  /** Small decorative accents. */
  accent: string;
  /** Page background (warm neutral). */
  background: string;
  /** Card / panel background. */
  surface: string;
  /** Subtle tinted surface for alternating sections. */
  surfaceMuted: string;
  /** Headings and body copy. */
  text: string;
  /** Secondary copy. Must stay >= 4.5:1 contrast on `background`. */
  muted: string;
  /** Dark band background (Differentiators section). */
  inverse: string;
  success: string;
  successSoft: string;
  warning: string;
  warningSoft: string;
  border: string;
};

export type Brand = {
  id: BrandId;
  name: string;
  /** Wordmark split into styled parts, e.g. "Simply" + "Stream". */
  wordmark: { text: string; tone: "text" | "primary" }[];
  /** Two colours used by the geometric logo mark. */
  logoMark: { variant: "layered" | "split"; from: string; to: string };
  favicon: string;
  ogImage: string;
  meta: { title: string; description: string };
  nav: { cta: string };
  hero: {
    kicker: string;
    headline: { lead: string; highlight: string };
    /** Put the highlighted phrase on its own line (SimplyStream) or inline (StreamRight). */
    highlightOnNewLine: boolean;
    highlightStyle: "gradient" | "solid";
    body: string;
    /** Word(s) in `body` to bold, usually the brand name. */
    bodyEmphasis?: string;
    primaryCta: string;
    secondaryCta: string;
    trustPoints: string[];
  };
  dashboard: {
    title: string;
    badge: string;
    currentLabel: string;
    optimizedLabel: string;
    savingsLabel: string;
  };
  benefits: {
    kicker: string;
    heading: string;
    items: { title: string; body: string; icon: IconName }[];
  };
  finalCta: { heading: string; subheading: string };
  colors: BrandColors;
};

const brands: Record<BrandId, Brand> = {
  simplystream: {
    id: "simplystream",
    name: "SimplyStream",
    wordmark: [
      { text: "Simply", tone: "text" },
      { text: "Stream", tone: "primary" },
    ],
    logoMark: { variant: "layered", from: "#1D5BEA", to: "#14B8A6" },
    favicon: "/logos/simplystream-mark.svg",
    ogImage: "/images/og-simplystream.png",
    meta: {
      title: "SimplyStream | Simplify Your Streaming and Save",
      description:
        "SimplyStream helps households understand their streaming subscriptions, reduce unnecessary spending, and build a simpler streaming plan.",
    },
    nav: { cta: "Start Simplifying" },
    hero: {
      kicker: "Simplify your streaming life",
      headline: {
        lead: "Simplify your streaming.",
        highlight: "Save without the hassle.",
      },
      highlightOnNewLine: true,
      highlightStyle: "gradient",
      body: "SimplyStream helps your household organize subscriptions, cut waste, and keep the entertainment you actually use.",
      bodyEmphasis: "SimplyStream",
      primaryCta: "Simplify My Streaming",
      secondaryCta: "See Example Plan",
      trustPoints: ["Personalized for your household", "Takes 2 minutes", "Free to try"],
    },
    dashboard: {
      title: "Your Simplified Streaming Plan",
      badge: "Updated today",
      currentLabel: "Current monthly spend",
      optimizedLabel: "Simplified monthly plan",
      savingsLabel: "Savings",
    },
    benefits: {
      kicker: "Features",
      heading: "One calm view of everything you stream.",
      items: [
        {
          title: "See every subscription",
          body: "Get one organized view of your streaming services.",
          icon: "layers",
        },
        {
          title: "Filter out waste",
          body: "Identify services and plans you may not need.",
          icon: "filter",
        },
        {
          title: "Build a simple plan",
          body: "Get a personalized streaming strategy for your household.",
          icon: "sparkles",
        },
        {
          title: "Know when to switch",
          body: "Soon: see when to pause a service and when it's worth coming back.",
          icon: "calendar",
        },
      ],
    },
    finalCta: {
      heading: "Streaming should be simple.",
      subheading: "See what your household could save.",
    },
    colors: {
      primary: "#1D5BEA",
      primaryHover: "#1749C2",
      onPrimary: "#FFFFFF",
      secondary: "#087A6B",
      accent: "#14B8A6",
      background: "#FAFAF7",
      surface: "#FFFFFF",
      surfaceMuted: "#F2F5FB",
      text: "#0B1B3F",
      muted: "#4A5468",
      inverse: "#0B1B3F",
      success: "#0A7A5C",
      successSoft: "#E3F5EE",
      warning: "#9A5B06",
      warningSoft: "#FDF1DC",
      border: "#E3E7EF",
    },
  },

  streamright: {
    id: "streamright",
    name: "StreamRight",
    wordmark: [{ text: "StreamRight", tone: "text" }],
    logoMark: { variant: "split", from: "#0B7F5A", to: "#0A1633" },
    favicon: "/logos/streamright-mark.svg",
    ogImage: "/images/og-streamright.png",
    meta: {
      title: "StreamRight | Only Pay for the Streaming You Need",
      description:
        "StreamRight finds the right streaming plan at the right price for your household by comparing services, bundles, and what you actually watch.",
    },
    nav: { cta: "Get Started" },
    hero: {
      kicker: "Stream smarter. Spend brighter.",
      headline: { lead: "Only pay for what you", highlight: "actually watch." },
      highlightOnNewLine: false,
      highlightStyle: "solid",
      body: "StreamRight finds the right streaming plan at the right price for your household.",
      primaryCta: "Optimize My Streaming",
      secondaryCta: "View Example Plan",
      trustPoints: ["No credit card required", "Takes 2 minutes", "Independent advice"],
    },
    dashboard: {
      title: "Your Streaming Plan",
      badge: "Optimization suggestion",
      currentLabel: "Current monthly spend",
      optimizedLabel: "Optimized monthly spend",
      savingsLabel: "Savings",
    },
    benefits: {
      kicker: "Features",
      heading: "Everything you need to spend smarter.",
      items: [
        {
          title: "Compare bundles",
          body: "See plans, bundles, and add-ons from the major services side by side.",
          icon: "chart",
        },
        {
          title: "Cut unused services",
          body: "Find the subscriptions you're not watching and stop paying for them.",
          icon: "trash",
        },
        {
          title: "Choose the right plan",
          body: "Get a recommendation based on your household's actual watching habits.",
          icon: "target",
        },
        {
          title: "Know when to switch",
          body: "Soon: see when to pause a service and when it's worth coming back.",
          icon: "calendar",
        },
      ],
    },
    finalCta: {
      heading: "Your streaming plan should work for you.",
      subheading: "See what your household could save.",
    },
    colors: {
      primary: "#0B7F5A",
      primaryHover: "#096A4B",
      onPrimary: "#FFFFFF",
      secondary: "#0F766E",
      accent: "#22C38E",
      background: "#FAFAF7",
      surface: "#FFFFFF",
      surfaceMuted: "#F1F7F4",
      text: "#0A1633",
      muted: "#475467",
      inverse: "#0A1633",
      success: "#0A7A5C",
      successSoft: "#E3F5EE",
      warning: "#9A5B06",
      warningSoft: "#FDF1DC",
      border: "#E2E8E5",
    },
  },
};

function resolveBrandId(): BrandId {
  const fromEnv = process.env.NEXT_PUBLIC_BRAND?.toLowerCase().trim();
  if (fromEnv === "simplystream" || fromEnv === "streamright") return fromEnv;
  return ACTIVE_BRAND;
}

export const brand: Brand = brands[resolveBrandId()];

/** Converts the active palette into CSS custom properties (applied on <html>). */
export function brandCssVariables(colors: BrandColors = brand.colors): Record<string, string> {
  const toKebab = (s: string) => s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  return Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [`--brand-${toKebab(key)}`, value]),
  );
}
