/**
 * Site-wide, brand-independent settings.
 * No production URL is hard-coded: it comes from environment variables.
 */

function resolveSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL || // set this once you have a custom domain
    process.env.URL || // Netlify: primary site URL (production)
    process.env.DEPLOY_PRIME_URL || // Netlify: deploy-preview / branch URL
    "http://localhost:3000";
  return url.replace(/\/$/, "");
}

export const site = {
  url: resolveSiteUrl(),
  /** Search engines are blocked unless explicitly allowed (pre-launch default). */
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  contactEmail: "hello@example.com", // placeholder until a domain is chosen
  nav: [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Savings", href: "/#savings" },
    { label: "About", href: "/#about" },
  ],
  /** Anchor for every "get started" style CTA. */
  signupHref: "/#get-started",
  exampleHref: "/#savings",
};

export const EARLY_ACCESS_FORM_NAME = "early-access";
