import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { getProvider } from "@/data/providers";
import { samplePlan, sampleMath, formatUsd } from "@/data/sample-plan";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProviderTile } from "@/components/ui/ProviderTile";
import { Icon } from "@/components/ui/Icon";
import { ActionChip } from "./StreamingDashboardMockup";

function PlanCard({
  label,
  count,
  monthly,
  annual,
  highlight,
  children,
}: {
  label: string;
  count: number;
  monthly: number;
  annual: number;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <article
      className={`flex flex-col rounded-3xl border p-6 sm:p-8 ${
        highlight ? "border-primary/40 bg-surface shadow-float ring-1 ring-primary/20" : "border-border bg-surface"
      }`}
    >
      <h3 className={`text-sm font-bold uppercase tracking-[0.16em] ${highlight ? "text-primary" : "text-muted"}`}>
        {label}
      </h3>
      <dl className="mt-5 grid grid-cols-3 gap-3 border-b border-border pb-6">
        <div>
          <dt className="text-sm text-muted">Services</dt>
          <dd className="mt-1 text-2xl font-extrabold text-text sm:text-3xl">{count}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Monthly</dt>
          <dd className="mt-1 text-2xl font-extrabold text-text sm:text-3xl">{formatUsd(monthly)}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Yearly</dt>
          <dd className="mt-1 text-2xl font-extrabold text-text sm:text-3xl">{formatUsd(annual)}</dd>
        </div>
      </dl>
      <div className="mt-6">{children}</div>
    </article>
  );
}

export function SavingsComparison() {
  const { current, smarter } = samplePlan;

  return (
    <section id="savings" aria-labelledby="savings-heading" className="bg-surface-muted py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="savings-heading"
          kicker="Example plan"
          title="See what smarter streaming could look like."
          description="Same favorite shows. Fewer bills. Here's one example household."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <PlanCard
            label="Current plan"
            count={current.services.length}
            monthly={current.monthly}
            annual={sampleMath.currentAnnual}
          >
            <ul className="flex flex-wrap gap-3" aria-label="Current services">
              {current.services.map((id) => (
                <li key={id}>
                  <ProviderTile provider={getProvider(id)} size="md" />
                </li>
              ))}
            </ul>
          </PlanCard>

          <div className="flex items-center justify-center" aria-hidden="true">
            <span className="grid size-12 rotate-90 place-items-center rounded-full border border-border bg-surface text-primary shadow-card lg:rotate-0">
              <Icon name="arrow-right" size={22} />
            </span>
          </div>

          <PlanCard
            label="Smarter plan"
            count={smarter.services.length}
            monthly={smarter.monthly}
            annual={sampleMath.smarterAnnual}
            highlight
          >
            <ul className="flex flex-wrap gap-x-3 gap-y-4" aria-label="Services in the smarter plan">
              {smarter.services.map(({ id, action }) => (
                <li key={id} className="flex flex-col items-center gap-2">
                  <ProviderTile provider={getProvider(id)} size="md" />
                  <ActionChip action={action} />
                </li>
              ))}
              {smarter.paused.map((id) => (
                <li key={id} className="flex flex-col items-center gap-2">
                  <ProviderTile provider={getProvider(id)} size="md" dimmed />
                  <ActionChip action="pause" />
                </li>
              ))}
            </ul>
          </PlanCard>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-3xl bg-inverse px-6 py-7 text-center sm:px-10 md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Estimated savings</p>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {formatUsd(sampleMath.annualSavings)}
              <span className="text-xl font-semibold text-white/75">/year</span>
            </p>
          </div>
          <ButtonLink href={site.signupHref} variant="inverse" size="lg" icon="arrow-right" fullWidthMobile>
            Find My Savings
          </ButtonLink>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted">
          Example shown for illustration. Actual savings depend on subscriptions, household preferences,
          available plans, and promotions.
        </p>
      </Container>
    </section>
  );
}
