import type { Metadata } from "next";
import { Sparkles, Cog, Rocket } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { ConnectStrip } from "@/components/sections/ConnectStrip";

export const metadata: Metadata = { title: "Ventures" };

const ventures = [
  {
    name: "ZipZo",
    tagline: "Creator intelligence, AI-native.",
    body: "AI-powered creator intelligence and ideation infrastructure designed for emerging-market content creators.",
    status: "In development",
    icon: Sparkles,
    tone: "orange" as const,
  },
  {
    name: "VertigoWorks",
    tagline: "Automation for the real economy.",
    body: "Automation and digital operations infrastructure for businesses and SMEs.",
    status: "Live",
    icon: Cog,
    tone: "teal" as const,
  },
];

export default function VenturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ventures & Initiatives"
        title="What we're"
        highlight="building."
        sub="A growing portfolio of innovation-driven ventures developed inside the PVP ecosystem."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="container-content grid gap-6 md:grid-cols-2">
          {ventures.map((v) => {
            const isTeal = v.tone === "teal";
            const Icon = v.icon;
            return (
              <article
                key={v.name}
                className="relative overflow-hidden rounded-3xl bg-paper p-8 ring-1 ring-rule md:p-10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full"
                  style={{
                    background: isTeal
                      ? "radial-gradient(circle, rgba(194,218,220,0.7) 0%, transparent 70%)"
                      : "radial-gradient(circle, rgba(253,226,207,0.85) 0%, transparent 70%)",
                  }}
                />
                <div className="relative flex items-center justify-between gap-4">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-paper ${
                      isTeal ? "bg-teal-900" : "bg-orange-600"
                    }`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      v.status === "Live"
                        ? "bg-teal-50 text-teal-900"
                        : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {v.status}
                  </span>
                </div>
                <h3
                  className={`relative mt-6 text-display-lg ${
                    isTeal ? "text-teal-900" : "text-orange-700"
                  }`}
                >
                  {v.name}
                </h3>
                <p className="text-body-lg relative mt-2 italic text-ink-muted">{v.tagline}</p>
                <p className="text-body relative mt-4 text-ink">{v.body}</p>
              </article>
            );
          })}
        </div>

        <div className="container-content mt-12 flex flex-col items-start gap-4 rounded-2xl bg-mist p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-900 text-paper">
              <Rocket className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-ink">Upcoming Ventures</p>
              <p className="text-body-sm text-ink-muted">
                PVP is actively developing future-focused digital products, AI systems, SaaS platforms, and innovation-driven startup ventures.
              </p>
            </div>
          </div>
          <Button href="/contact?topic=partner" size="md" variant="secondary">
            Partner With Us
          </Button>
        </div>
      </section>

      <ConnectStrip />
    </>
  );
}
