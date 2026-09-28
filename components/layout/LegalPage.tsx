import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/** Shared layout for Privacy / Terms placeholder pages. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <p className="inline-flex rounded-full bg-warning-soft px-3 py-1 text-sm font-semibold text-warning">
        Placeholder: not final legal text
      </p>
      <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-text sm:text-5xl">{title}</h1>
      <p className="mt-3 text-muted">Last updated: {updated}</p>
      <div className="mt-10 space-y-8 text-[1.05rem] leading-relaxed text-muted [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text [&_h2+p]:mt-2">
        {children}
      </div>
    </Container>
  );
}
