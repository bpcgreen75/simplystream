import { brand } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BenefitCard } from "./BenefitCard";

export function Benefits() {
  const b = brand.benefits;
  return (
    <section id="features" aria-labelledby="features-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="features-heading"
          kicker={b.kicker}
          title={b.heading}
          description="Save money and clear the mental clutter of too many logins, renewals, and bills."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {b.items.map((item, i) => (
            <BenefitCard key={item.title} {...item} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
