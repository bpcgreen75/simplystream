/**
 * Illustrative example household, shared by the hero dashboard and the
 * Sample Savings section so the numbers always agree.
 * These are examples only, NOT live pricing data.
 */
import type { ProviderId } from "./providers";

export type PlanAction = "keep" | "bundle" | "pause";

export const samplePlan = {
  current: {
    services: ["netflix", "disney", "hulu", "max", "prime", "peacock", "appletv"] as ProviderId[],
    monthly: 148,
  },
  smarter: {
    services: [
      { id: "netflix", action: "keep" },
      { id: "disney", action: "bundle" },
      { id: "hulu", action: "bundle" },
      { id: "max", action: "bundle" },
      { id: "prime", action: "keep" },
    ] as { id: ProviderId; action: PlanAction }[],
    /** Services paused for now, not cancelled forever. */
    paused: ["peacock", "appletv"] as ProviderId[],
    monthly: 96,
  },
  insight: "We found 3 low-use subscriptions and 2 better bundle options.",
};

export const sampleMath = {
  currentAnnual: samplePlan.current.monthly * 12,
  smarterAnnual: samplePlan.smarter.monthly * 12,
  annualSavings: (samplePlan.current.monthly - samplePlan.smarter.monthly) * 12,
  percentLess: Math.round(
    ((samplePlan.current.monthly - samplePlan.smarter.monthly) / samplePlan.current.monthly) * 100,
  ),
};

export const formatUsd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
