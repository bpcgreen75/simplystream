import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Benefits } from "@/components/marketing/Benefits";
import { SavingsComparison } from "@/components/marketing/SavingsComparison";
import { StreamingCalendarPreview } from "@/components/marketing/StreamingCalendarPreview";
import { Differentiators } from "@/components/marketing/Differentiators";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <SavingsComparison />
      <StreamingCalendarPreview />
      <Differentiators />
      <FinalCTA />
    </>
  );
}
