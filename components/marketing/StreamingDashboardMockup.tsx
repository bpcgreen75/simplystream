/**
 * A real HTML/CSS mock of the future product dashboard (not an image).
 * Numbers come from data/sample-plan.ts so they match the Savings section.
 */
import { brand } from "@/config/brand";
import { getProvider } from "@/data/providers";
import { samplePlan, sampleMath, formatUsd, type PlanAction } from "@/data/sample-plan";
import { MetricCard } from "@/components/ui/MetricCard";
import { ProviderTile } from "@/components/ui/ProviderTile";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LogoMark } from "@/components/ui/Logo";

const actionStyles: Record<PlanAction, { label: string; icon: IconName; className: string }> = {
  keep: { label: "Keep", icon: "check", className: "bg-success-soft text-success" },
  bundle: { label: "Bundle", icon: "layers", className: "bg-primary/10 text-primary" },
  pause: { label: "Pause", icon: "pause", className: "bg-warning-soft text-warning" },
};

export function ActionChip({ action }: { action: PlanAction }) {
  const a = actionStyles[action];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 sm:px-2 text-xs font-semibold ${a.className}`}>
      <Icon name={a.icon} size={12} strokeWidth={2.75} className="hidden sm:block" />
      {a.label}
    </span>
  );
}

export function StreamingDashboardMockup() {
  const { current, smarter, insight } = samplePlan;
  const d = brand.dashboard;

  return (
    <figure
      aria-label={`Example ${brand.name} plan: ${formatUsd(current.monthly)} a month today, ${formatUsd(smarter.monthly)} a month with a smarter plan, saving ${formatUsd(sampleMath.annualSavings)} a year.`}
      className="relative w-full rounded-[1.75rem] border border-white/70 bg-surface/95 p-3.5 shadow-float backdrop-blur-sm sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <LogoMark size={28} />
          <p className="text-lg font-bold tracking-tight text-text sm:text-xl">{d.title}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
          <span className="size-2 rounded-full bg-success" aria-hidden="true" />
          {d.badge}
        </span>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        <MetricCard
          label={d.currentLabel}
          value={formatUsd(current.monthly)}
          sub={`across ${current.services.length} subscriptions`}
        />
        <MetricCard
          label={d.optimizedLabel}
          value={formatUsd(smarter.monthly)}
          sub={`across ${smarter.services.length} subscriptions`}
        />
        <MetricCard
          label={d.savingsLabel}
          value={formatUsd(sampleMath.annualSavings)}
          suffix="/yr"
          tone="success"
          sub={`That's ${sampleMath.percentLess}% less`}
          className="col-span-2 bg-success-soft/40 sm:col-span-1"
        />
      </dl>

      <ul className="mt-3 grid grid-cols-5 gap-0.5 rounded-2xl border border-border bg-surface px-1 py-4 sm:gap-2 sm:px-3" aria-label="Recommended services">
        {smarter.services.map(({ id, action }) => (
          <li key={id} className="flex flex-col items-center gap-2">
            <ProviderTile provider={getProvider(id)} size="lg" />
            <ActionChip action={action} />
          </li>
        ))}
      </ul>

      <p className="mt-4 flex items-start gap-2.5 rounded-2xl bg-success-soft px-4 py-3 text-[0.9rem] font-medium leading-snug text-text">
        <Icon name="sparkles" size={18} className="mt-0.5 shrink-0 text-success" />
        {insight}
      </p>
    </figure>
  );
}
