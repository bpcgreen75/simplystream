/** Illustrative 6-month rotation plan for the Streaming Calendar preview. */
import type { ProviderId } from "./providers";

export type CalendarState = "on" | "pause";

export const calendarMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] as const;
export const calendarMonthsLong = ["January", "February", "March", "April", "May", "June"] as const;

export const calendarRows: { provider: ProviderId; note: string; states: CalendarState[] }[] = [
  { provider: "netflix", note: "Everyday favorite", states: ["on", "on", "on", "on", "on", "on"] },
  { provider: "disney", note: "Kids' pick", states: ["on", "on", "on", "on", "on", "on"] },
  { provider: "max", note: "Finish the series, then pause", states: ["on", "on", "pause", "pause", "on", "on"] },
  { provider: "peacock", note: "Back for the spring season", states: ["pause", "pause", "pause", "on", "on", "pause"] },
  { provider: "paramount", note: "Football playoffs", states: ["on", "on", "pause", "pause", "pause", "pause"] },
  { provider: "appletv", note: "New season in May", states: ["pause", "pause", "pause", "pause", "on", "on"] },
];
