import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="To be confirmed">
      <p>
        This is a placeholder privacy policy for {brand.name}&apos;s pre-launch website. It will be replaced with a
        reviewed policy before the product launches.
      </p>
      <section>
        <h2>What we collect today</h2>
        <p>
          If you join early access, we collect the email address and (optionally) the first name you provide. We use
          it only to contact you about {brand.name}.
        </p>
      </section>
      <section>
        <h2>What we don&apos;t do</h2>
        <p>We do not sell your personal information. This website does not connect to any bank or streaming account.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions? Email <a className="font-semibold text-primary underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
