import { brand } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { EarlyAccessForm } from "./EarlyAccessForm";

export function FinalCTA() {
  const c = brand.finalCta;
  return (
    <section id="get-started" aria-labelledby="cta-heading" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-surface-muted),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h2
            id="cta-heading"
            className="text-4xl font-extrabold tracking-tight text-balance text-text sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
          >
            {c.heading}
          </h2>
          <p className="mt-5 text-xl text-muted">{c.subheading}</p>
          <p className="mt-3 text-[0.95rem] text-muted">
            Join early access. It&apos;s free, and there&apos;s no credit card involved.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl">
          <EarlyAccessForm />
        </div>
      </Container>
    </section>
  );
}
