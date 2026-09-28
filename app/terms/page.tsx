import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="To be confirmed">
      <p>
        These are placeholder terms for {brand.name}&apos;s pre-launch website. Final terms will be published before
        the product launches.
      </p>
      <section>
        <h2>Informational only</h2>
        <p>
          Examples and savings figures on this site are illustrations. Actual results depend on your subscriptions,
          preferences, available plans, and promotions.
        </p>
      </section>
      <section>
        <h2>Trademarks</h2>
        <p>
          Streaming service names are trademarks of their respective owners. {brand.name} is independent and not
          affiliated with or endorsed by any streaming service.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Email <a className="font-semibold text-primary underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
