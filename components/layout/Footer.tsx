import Link from "next/link";
import { brand } from "@/config/brand";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  const legal = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: `mailto:${site.contactEmail}` },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
              Independent help for simpler, smarter household streaming.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Footer">
              <h2 className="text-sm font-bold text-text">Product</h2>
              <ul className="mt-4 space-y-3">
                {site.nav.slice(0, 3).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="rounded text-[0.95rem] text-muted hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company">
              <h2 className="text-sm font-bold text-text">Company</h2>
              <ul className="mt-4 space-y-3">
                {legal.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="rounded text-[0.95rem] text-muted hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>Service names are trademarks of their respective owners. Not affiliated with any streaming service.</p>
        </div>
      </Container>
    </footer>
  );
}
