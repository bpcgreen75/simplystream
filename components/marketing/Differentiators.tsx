/**
 * "Why this is different."
 *
 * PRODUCT PRINCIPLE (must carry into the optimizer):
 * Future affiliate or referral revenue must NEVER influence optimizer ranking
 * or recommendations. Rankings are computed from household value and cost only.
 * If affiliate links are ever added, they must be disclosed and applied only
 * AFTER ranking, never as an input to it.
 */
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";

const points: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Household-first",
    body: "Recommendations are based on what your household actually wants to watch.",
    icon: "home",
  },
  {
    title: "Cost-aware",
    body: "Plans, bundles, and subscription timing are compared together, not one at a time.",
    icon: "wallet",
  },
  {
    title: "Independent recommendations",
    body: "Your value comes first. We'll always explain why we recommend something.",
    icon: "shield",
  },
];

export function Differentiators() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-inverse py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="about-heading"
          kicker="Why this is different"
          title="Built for your household, not for the services."
          description="This isn't a cancellation tool. It's a plan that adapts: keep, pause, switch tiers, bundle, or come back when it's worth it."
          inverse
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {points.map((p) => (
            <li key={p.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-accent">
                <Icon name={p.icon} size={24} />
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-white">{p.title}</h3>
              <p className="mt-2 text-[1.02rem] leading-relaxed text-white/80">{p.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
