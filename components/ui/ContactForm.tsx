"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  return (
    <form
      className="space-y-5 rounded-2xl bg-paper p-6 ring-1 ring-rule md:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        // v2 is UI only — no backend wired yet
      }}
    >
      <h2 className="text-display-md text-ink">Send a message</h2>
      <p className="text-body-sm text-ink-muted">
        We use this for first contact only. Once we&apos;re working together, we move to email and a shared doc.
      </p>

      <Field label="Name" id="name" placeholder="Your name" />
      <Field label="Email" id="email" placeholder="you@company.com" type="email" />
      <Field label="Company" id="company" placeholder="Optional" />
      <Field
        label="How can we help?"
        id="message"
        placeholder="A sentence or two on what you are trying to build, fix or scope."
        multiline
      />

      <Button size="lg" variant="primary" className="w-full justify-center md:w-auto">
        <span className="inline-flex items-center gap-2">
          <Send className="h-4 w-4" /> Send Message
        </span>
      </Button>
      <p className="text-xs text-ink-muted">No spam. No follow-up sequence.</p>
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  multiline = false,
}: {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
}) {
  const base =
    "block w-full rounded-lg border border-rule bg-mist px-4 py-3 text-body text-ink placeholder:text-ink-muted/60 transition-colors focus:border-teal-700 focus:bg-paper";
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-ink-muted">
        {label}
      </label>
      {multiline ? (
        <textarea id={id} rows={5} placeholder={placeholder} className={`${base} mt-2 resize-y`} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} className={`${base} mt-2`} />
      )}
    </div>
  );
}
