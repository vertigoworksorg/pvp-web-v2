import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Code2, Compass, Sparkles, Users, type LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { ConnectStrip } from "@/components/sections/ConnectStrip";
import { VentureFaction } from "@/components/services/VentureFaction";
import { ConsultancyFaction } from "@/components/services/ConsultancyFaction";
import { FreelancingFaction } from "@/components/services/FreelancingFaction";
import { SoftwareFaction } from "@/components/services/SoftwareFaction";
import { FactionLink } from "@/components/transition/FactionLink";
import { serviceDetails, serviceOrder } from "@/lib/services";

// Next-service links into a faction page enter via its themed transition.
const FACTION_THEME: Record<string, "cinematic" | "editorial" | "vertigo" | "saas"> = {
  "innovative-startups": "cinematic",
  consultancy: "editorial",
  "digital-freelancing": "vertigo",
  "software-development": "saas",
};
const FACTION_LABEL: Record<string, string> = {
  "innovative-startups": "Startup & Venture Development",
  consultancy: "Consultancy & Advisory",
  "digital-freelancing": "Freelancing Services",
  "software-development": "Software Development",
};

const iconMap: Record<string, LucideIcon> = {
  Users,
  Code2,
  Compass,
  Sparkles,
};

export async function generateStaticParams() {
  return serviceOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) return {};
  return { title: service.title, description: service.tagline };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Users;
  const currentIdx = serviceOrder.indexOf(slug as (typeof serviceOrder)[number]);
  const next = serviceOrder[(currentIdx + 1) % serviceOrder.length];
  const nextService = serviceDetails[next];
  const nextRef = nextService ? { slug: nextService.slug, title: nextService.title } : undefined;

  // Faction-specific designs. Each core service can carry its own visual
  // identity while sharing the brand palette. Software/Freelancing keep the
  // standard layout until their factions are defined.
  if (slug === "innovative-startups") {
    return <VentureFaction service={service} next={nextRef} />;
  }
  if (slug === "consultancy") {
    return <ConsultancyFaction service={service} next={nextRef} />;
  }
  if (slug === "digital-freelancing") {
    return <FreelancingFaction service={service} next={nextRef} />;
  }
  if (slug === "software-development") {
    return <SoftwareFaction service={service} next={nextRef} />;
  }

  const isTeal = service.theme === "ocean" || service.theme === "earth";

  return (
    <>
      <PageHeader
        eyebrow="What we offer"
        title={service.title}
        sub={service.tagline}
      />

      <section className="bg-paper py-10 md:py-14">
        <div className="container-content grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <div
              className={`flex h-28 w-28 items-center justify-center rounded-3xl text-paper ${
                isTeal ? "bg-teal-900" : "bg-orange-600"
              }`}
            >
              <Icon className="h-14 w-14" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h2 className="text-display-md mt-6 text-ink">{service.tagline}</h2>
          </div>
          <p className="text-body-lg md:col-span-8 text-ink-muted">{service.hero}</p>
        </div>
      </section>

      <section className="bg-mist py-10 md:py-14">
        <div className="container-content">
          <p className="text-eyebrow text-orange-600">What we deliver</p>
          <h2 className="text-display-lg mt-3 text-ink">Core offerings.</h2>
          <span className="mt-5 inline-block h-1 w-12 rounded-full bg-orange-600" />

          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d, i) => (
              <li key={d.title} className="flex flex-col rounded-2xl bg-paper p-6 ring-1 ring-rule">
                <IconBadge
                  icon={Check}
                  tone={i % 2 === 0 ? "teal" : "orange"}
                  size="md"
                />
                <h3 className="font-display mt-5 text-lg font-bold text-ink">{d.title}</h3>
                <p className="text-body-sm mt-2 text-ink-muted">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-10 md:py-14">
        <div className="container-content grid gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="text-eyebrow text-orange-600">Who it&apos;s for</p>
            <h2 className="text-display-lg mt-3 text-ink">A fit for your team?</h2>
            <span className="mt-5 inline-block h-1 w-12 rounded-full bg-orange-600" />
          </div>
          <ul className="space-y-3 md:col-span-7">
            {service.audience.map((a, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-mist p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-900 text-paper">
                  <span className="text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <span className="text-body text-ink">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-10 md:py-14">
        <div className="container-content">
          <p className="text-eyebrow text-orange-600">Engagement models</p>
          <h2 className="text-display-lg mt-3 text-ink">How we structure the work.</h2>
          <span className="mt-5 inline-block h-1 w-12 rounded-full bg-orange-600" />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.engagement.map((e, i) => (
              <div key={e.name} className="flex flex-col rounded-2xl bg-paper p-6 ring-1 ring-rule">
                <span
                  className={`text-2xl font-bold ${
                    i % 2 === 0 ? "text-teal-900" : "text-orange-600"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-lg font-bold text-ink">{e.name}</h3>
                <p className="text-body-sm mt-3 text-ink-muted">{e.body}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mt-5 border-t border-rule pt-4">
                  Best for —{" "}
                  <span className="font-medium normal-case tracking-normal text-ink-muted">
                    {e.suited}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-teal-950 py-16 text-paper md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(233,119,36,0.7) 0%, transparent 70%)" }}
        />
        <div className="container-content relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
              Bring us the brief — <span className="text-orange-500">we&apos;ll bring the scope.</span>
            </h2>
            <p className="text-body-lg mt-3 max-w-2xl text-paper/80">
              30-minute discovery call. Written scope summary inside 48 hours. No obligation.
            </p>
          </div>
          <Button href="/contact" size="lg" variant="secondary">
            Start a conversation
          </Button>
        </div>
      </section>

      {nextService && (
        <section className="bg-paper py-10">
          <div className="container-content">
            {FACTION_THEME[nextService.slug] ? (
              <FactionLink
                href={`/services/${nextService.slug}`}
                theme={FACTION_THEME[nextService.slug]}
                label={FACTION_LABEL[nextService.slug]}
                className="group flex items-center justify-between gap-6"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Next service</p>
                  <p className="font-display mt-2 text-2xl font-bold text-ink group-hover:text-teal-900 md:text-3xl">
                    {nextService.title}
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-ink-muted group-hover:text-teal-900" />
              </FactionLink>
            ) : (
              <a href={`/services/${nextService.slug}`} className="group flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Next service</p>
                  <p className="font-display mt-2 text-2xl font-bold text-ink group-hover:text-teal-900 md:text-3xl">
                    {nextService.title}
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-ink-muted group-hover:text-teal-900" />
              </a>
            )}
          </div>
        </section>
      )}

      <ConnectStrip />
    </>
  );
}
