import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Tell us what you have",
    body: "Select the services your household currently pays for.",
  },
  {
    title: "Tell us what you watch",
    body: "Choose the shows, movies, sports, and channels that matter.",
  },
  {
    title: "Get your optimized plan",
    body: "See what to keep, cut, bundle, pause, or reactivate.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="how-heading"
          kicker="How it works"
          title="A simpler way to manage streaming."
          description="Three short steps. No spreadsheets, no guesswork."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-3xl border border-border bg-background p-7 sm:p-8"
            >
              <span
                className="grid size-12 place-items-center rounded-2xl bg-primary text-lg font-extrabold text-on-primary"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-text">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-[1.02rem] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
