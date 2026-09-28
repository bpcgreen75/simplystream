import Link from "next/link";
import { brand } from "@/config/brand";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { HeaderShell } from "./HeaderShell";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <HeaderShell>
      <div className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-20 lg:px-10">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {site.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md text-[0.95rem] font-medium text-text/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={site.signupHref} icon="arrow-right">
              {brand.nav.cta}
            </ButtonLink>
          </div>
          <MobileNav links={site.nav} cta={{ label: brand.nav.cta, href: site.signupHref }} />
        </div>
      </div>
    </HeaderShell>
  );
}
