import type { Metadata } from "next";
import { TrendingUp, Shield, Target, Users } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { ConnectStrip } from "@/components/sections/ConnectStrip";

export const metadata: Metadata = { title: "Investors" };

const benefits = [
  { icon: Target, title: "AI-First Portfolio", body: "Exposure to multiple innovation-driven ventures under the PVP umbrella." },
  { icon: Shield, title: "SAFE-based Structure", body: "Modern, simple, and aligned participation terms." },
  { icon: TrendingUp, title: "Sustainable Growth", body: "Lean operations and scalable products designed for compounding returns." },
  { icon: Users, title: "Operator-Led", body: "Capital backed by an active operating team — not passive money." },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHeader variant="chart"
        eyebrow="Invest in Innovation"
        title="A SAFE-based participation in"
        highlight="the next wave."
        sub="PVP is developing a SAFE-based Micro-Investor Participation Initiative designed to support AI-first startups and emerging digital ventures within the PVP ecosystem."
      />

      <section className="bg-mist py-10 md:py-14">
        <div className="container-content">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <li key={b.title} className="flex flex-col rounded-2xl bg-paper p-6 ring-1 ring-rule">
                <IconBadge icon={b.icon} tone={i % 2 === 0 ? "teal" : "orange"} size="lg" />
                <h3 className="font-display mt-5 text-lg font-bold text-ink">{b.title}</h3>
                <p className="text-body-sm mt-2 text-ink-muted">{b.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start gap-6 rounded-3xl bg-teal-950 p-8 text-paper md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <p className="font-display text-2xl font-bold leading-tight md:text-3xl">
                Ready to become a <span className="text-orange-500">strategic partner?</span>
              </p>
              <p className="text-body-sm mt-3 max-w-xl text-paper/75">
                Selected early participants gain exposure to multiple ventures under the PVP umbrella.
                Reach out and we&apos;ll share full investor materials.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="/contact?topic=partner" size="lg" variant="secondary">
                Become a Strategic Partner
              </Button>
              <Button href="/contact?topic=investor" size="lg" variant="onDark">
                Request Investor Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConnectStrip />
    </>
  );
}
