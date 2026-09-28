import { getProvider } from "@/data/providers";
import { calendarMonths, calendarMonthsLong, calendarRows, type CalendarState } from "@/data/calendar";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProviderTile } from "@/components/ui/ProviderTile";
import { Icon } from "@/components/ui/Icon";

function StateCell({ state }: { state: CalendarState }) {
  // State is conveyed by icon + text + pattern, not colour alone.
  return state === "on" ? (
    <span className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-success-soft text-sm font-semibold text-success">
      <Icon name="check" size={15} strokeWidth={3} />
      On
    </span>
  ) : (
    <span className="bg-hatch flex h-10 items-center justify-center gap-1.5 rounded-xl border border-dashed border-border text-sm font-semibold text-muted">
      <Icon name="pause" size={15} strokeWidth={3} />
      Pause
    </span>
  );
}

export function StreamingCalendarPreview() {
  const activePerMonth = calendarMonths.map((_, m) => calendarRows.filter((r) => r.states[m] === "on").length);

  return (
    <section id="calendar" aria-labelledby="calendar-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              id="calendar-heading"
              kicker="Coming soon · Streaming calendar"
              title="Your streaming needs change. Your plan should too."
              description="See when to keep a service, when to pause it, and when it may be worth coming back."
              align="left"
            />
            <ul className="mt-8 space-y-3 text-[1.02rem] text-muted">
              {[
                "Pause between seasons instead of paying all year",
                "Come back for the shows and games you care about",
                "Never cancel something you'll want next month",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon name="check" size={14} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 rounded-3xl border border-border bg-surface p-4 shadow-card sm:p-6">
            <p className="text-sm text-muted">
              Example six-month plan for one household.{" "}
              <span className="md:hidden">Scroll sideways to see all six months.</span>
            </p>
            {/* Intentional horizontal scroll on small screens. */}
            <div
              className="-mx-1 mt-2 overflow-x-auto px-1 pb-2"
              tabIndex={0}
              role="region"
              aria-label="Example six-month streaming calendar (scrollable)"
            >
              <table className="w-full min-w-[640px] border-separate border-spacing-x-1.5 border-spacing-y-2 text-left">
                <caption className="sr-only">
                  Example six-month plan for one household. Each service is either on or paused each month.
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="sticky left-0 z-10 w-48 bg-surface pb-1 text-sm font-semibold text-muted">
                      Service
                    </th>
                    {calendarMonths.map((m, i) => (
                      <th key={m} scope="col" className="pb-1 text-center text-sm font-semibold text-muted">
                        <abbr title={calendarMonthsLong[i]} className="no-underline">
                          {m}
                        </abbr>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {calendarRows.map((row) => {
                    const p = getProvider(row.provider);
                    return (
                      <tr key={row.provider}>
                        <th scope="row" className="sticky left-0 z-10 bg-surface pr-2 font-normal">
                          <div className="flex items-center gap-3">
                            <ProviderTile provider={p} size="sm" />
                            <div>
                              <span className="block text-[0.95rem] font-semibold text-text">{p.name}</span>
                              <span className="block text-xs text-muted">{row.note}</span>
                            </div>
                          </div>
                        </th>
                        {row.states.map((s, i) => (
                          <td key={i}>
                            <StateCell state={s} />
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" className="sticky left-0 z-10 bg-surface pt-2 text-sm font-semibold text-text">
                      Active services
                    </th>
                    {activePerMonth.map((n, i) => (
                      <td key={i} className="pt-2 text-center text-sm font-bold text-text">
                        {n}
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
