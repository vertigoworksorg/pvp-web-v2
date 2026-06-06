import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { IconBadge } from "@/components/ui/IconBadge";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHeader variant="send"
        eyebrow="Get in touch"
        title="Tell us what you're"
        highlight="trying to do."
        sub="A clear scope or a vague idea — both are fine. We will reply within one business day with a written next step."
      />

      <section className="relative bg-paper py-20 md:py-28">
        <div className="container-content grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <ul className="space-y-4">
              <ContactCard
                icon={<IconBadge icon={Mail} tone="teal" size="md" />}
                title="Email Us"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactCard
                icon={<IconBadge icon={MapPin} tone="orange" size="md" />}
                title="Visit Us"
                value={siteConfig.address}
              />
              <ContactCard
                icon={<IconBadge icon={Clock} tone="teal" size="md" />}
                title="Response Time"
                value="Within 1 business day"
              />
            </ul>

            <div className="mt-8 rounded-2xl bg-teal-950 p-6 text-paper">
              <p className="font-display text-xl font-bold">
                Let&apos;s build the future <span className="text-orange-500">together.</span>
              </p>
              <p className="text-body-sm mt-2 text-paper/75">
                Whether you are a startup, business, organization, investor or institution — PVP is
                ready to help you innovate, scale, and grow.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl bg-paper p-5 ring-1 ring-rule transition-colors hover:ring-teal-900">
      {icon}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{title}</p>
        <p className="text-body mt-1 text-ink">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href}>{inner}</a> : inner}</li>;
}
