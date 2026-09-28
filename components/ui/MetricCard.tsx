import type { ReactNode } from "react";

type Props = {
  label: string;
  value: string;
  suffix?: string;
  sub?: ReactNode;
  tone?: "default" | "success";
  className?: string;
};

export function MetricCard({ label, value, suffix, sub, tone = "default", className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-3.5 sm:p-4 ${className}`}>
      <dt className="text-[0.8rem] font-medium leading-snug text-muted">{label}</dt>
      <dd className="mt-1.5">
        <span
          className={`text-2xl font-extrabold tracking-tight sm:text-[1.75rem] ${tone === "success" ? "text-success" : "text-text"}`}
        >
          {value}
        </span>
        {suffix ? <span className="ml-0.5 text-sm font-semibold text-muted">{suffix}</span> : null}
        {sub ? <span className="mt-1 block text-[0.8rem] text-muted">{sub}</span> : null}
      </dd>
    </div>
  );
}
