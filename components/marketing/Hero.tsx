import { brand } from "@/config/brand";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { TrustPoints } from "@/components/ui/TrustPoints";
import { HeroBackdrop } from "./HeroBackdrop";
import { StreamingDashboardMockup } from "./StreamingDashboardMockup";

function HeroBody() {
  const { body, bodyEmphasis } = brand.hero;
  if (!bodyEmphasis || !body.includes(bodyEmphasis)) return <>{body}</>;
  const [before, after] = body.split(bodyEmphasis);
  return (
    <>
      {before}
      <strong className="font-semibold text-text">{bodyEmphasis}</strong>
      {after}
    </>
  );
}

export function Hero() {
  const h = brand.hero;
  const highlightClass = h.highlightStyle === "gradient" ? "text-brand-gradient" : "text-primary";

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-primary/10 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 pb-16 pt-8 sm:pt-12 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:pb-24 lg:pt-14 xl:gap-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">{h.kicker}</p>
          <h1
            id="hero-heading"
            className="mt-5 text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.035em] text-text sm:text-6xl xl:text-[3.3rem]"
          >
            {h.headline.lead}{" "}
            <span className={`${highlightClass} ${h.highlightOnNewLine ? "block" : ""} pb-1`}>
              {h.headline.highlight}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            <HeroBody />
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ButtonLink href={site.signupHref} size="lg" icon="arrow-right" fullWidthMobile>
              {h.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={site.exampleHref}
              size="lg"
              variant="secondary"
              fullWidthMobile
              leadingIcon={
                <span className="grid size-8 place-items-center rounded-full border border-border bg-surface-muted text-primary">
                  <Icon name="play" size={14} />
                </span>
              }
              className="pl-3"
            >
              {h.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-8">
            <TrustPoints items={h.trustPoints} />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl px-2 pb-2 pt-[34%] sm:px-8 sm:pb-8 sm:pt-[30%] xl:max-w-none xl:px-6 xl:pt-[40%]">
          <HeroBackdrop />
          <div className="relative">
            <StreamingDashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
