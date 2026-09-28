"use client";

/**
 * Early-access / interest form, submitted with NETLIFY FORMS (no backend).
 *
 * How it works with Next.js on Netlify:
 *  - Netlify detects forms by scanning static HTML at deploy time. React-rendered
 *    forms aren't visible to that scan, so the form is ALSO declared in
 *    /public/__forms.html (hidden). Keep the field names in both files in sync.
 *  - This component POSTs url-encoded data to "/__forms.html", which Netlify intercepts.
 *  - Submissions appear in Netlify → Site → Forms → "early-access".
 *
 * Locally (`npm run dev`) there is no Netlify form handler, so submissions
 * are simulated to let you test the UI states.
 */

import { useId, useState, type FormEvent } from "react";
import { brand } from "@/config/brand";
import { EARLY_ACCESS_FORM_NAME } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EarlyAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [emailError, setEmailError] = useState<string | null>(null);
  const id = useId();
  const ids = { name: `${id}-name`, email: `${id}-email`, emailErr: `${id}-email-err`, hint: `${id}-hint` };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();

    if (!EMAIL_RE.test(email)) {
      setEmailError(email ? "Please enter a valid email address." : "Please enter your email address.");
      form.querySelector<HTMLInputElement>('input[name="email"]')?.focus();
      return;
    }
    setEmailError(null);
    setStatus("submitting");

    try {
      if (process.env.NODE_ENV === "development") {
        await new Promise((r) => setTimeout(r, 600));
      } else {
        const body = new URLSearchParams(data as unknown as Record<string, string>).toString();
        const res = await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });
        if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl bg-surface p-8 text-center shadow-float">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-success-soft text-success">
          <Icon name="check" size={28} strokeWidth={3} />
        </span>
        <p className="mt-5 text-2xl font-bold tracking-tight text-text">You&apos;re on the list.</p>
        <p className="mt-2 text-muted">
          Thanks for your interest in {brand.name}. We&apos;ll email you when early access opens.
        </p>
      </div>
    );
  }

  return (
    <form
      name={EARLY_ACCESS_FORM_NAME}
      method="POST"
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl bg-surface p-6 text-left shadow-float sm:p-8"
      aria-describedby={ids.hint}
    >
      {/* Netlify needs these hidden fields. */}
      <input type="hidden" name="form-name" value={EARLY_ACCESS_FORM_NAME} />
      <input type="hidden" name="brand" value={brand.id} />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <p className="text-xl font-bold tracking-tight text-text">Get early access</p>
      <p id={ids.hint} className="mt-1 text-[0.95rem] text-muted">
        We&apos;re opening to a small group of households first. No spam, unsubscribe anytime.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={ids.name} className="text-sm font-semibold text-text">
            First name <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id={ids.name}
            name="first-name"
            type="text"
            autoComplete="given-name"
            className="mt-1.5 h-12 w-full rounded-xl border border-border bg-background px-4 text-base text-text placeholder:text-muted/70 focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor={ids.email} className="text-sm font-semibold text-text">
            Email <span className="font-normal text-muted">(required)</span>
          </label>
          <input
            id={ids.email}
            name="email"
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError ? ids.emailErr : undefined}
            onChange={() => emailError && setEmailError(null)}
            className={`mt-1.5 h-12 w-full rounded-xl border bg-background px-4 text-base text-text placeholder:text-muted/70 focus:border-primary ${
              emailError ? "border-red-600" : "border-border"
            }`}
          />
          {emailError ? (
            <p id={ids.emailErr} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-700">
              <Icon name="info" size={15} />
              {emailError}
            </p>
          ) : null}
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          Something went wrong and we couldn&apos;t save your details. Please try again in a moment.
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        icon="arrow-right"
        className="mt-6 w-full"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Find My Savings"}
      </Button>
    </form>
  );
}
