"use client";

import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // v2 is UI only — no backend yet
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@company.com"
          className="h-12 w-full rounded-lg bg-paper px-4 text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <Button type="submit" variant="secondary" size="md" className="shrink-0">
          Subscribe
        </Button>
      </div>
      <p className="mt-3 text-xs text-paper/55">
        We&apos;ll never share your email. Unsubscribe in one click.
      </p>
    </form>
  );
}
