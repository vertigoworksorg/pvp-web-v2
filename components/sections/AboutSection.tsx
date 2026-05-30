import Image from "next/image";
import { Target, Eye, Compass, Award, Layers, Cpu, Globe2, Handshake } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { asset } from "@/lib/utils";

const pillars = [
  { icon: Target, label: "Our Mission", body: "To empower through technology, strategy and innovation.", tone: "teal" as const },
  { icon: Eye, label: "Our Vision", body: "To be a leading innovation-driven enterprise globally.", tone: "orange" as const },
  { icon: Compass, label: "Our Purpose", body: "Creating impact. Building ventures. Transforming ideas into value.", tone: "teal" as const },
  { icon: Award, label: "Our Commitment", body: "Quality, integrity, innovation and sustainable growth.", tone: "orange" as const },
];

const subCards = [
  { icon: Layers, title: "Multi-disciplinary Expertise" },
  { icon: Cpu, title: "Innovation at the Core" },
  { icon: Globe2, title: "Local Roots Global Vision" },
  { icon: Handshake, title: "Partners in Your Growth" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-20 md:py-28">
      {/* decorative arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 hidden h-full w-1/2 lg:block"
        style={{
          background:
            "radial-gradient(50% 50% at 30% 50%, rgba(231,241,242,0.8) 0%, transparent 60%)",
        }}
      />
      <div className="container-content relative grid items-start gap-12 md:grid-cols-12 md:gap-12">
        {/* Left — podium illustration */}
        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            {/* mountain silhouette */}
            <svg aria-hidden="true" viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="mountain-fade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a5b64" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1a5b64" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,250 L80,150 L140,200 L200,120 L260,180 L320,140 L400,210 L400,260 L0,260 Z" fill="url(#mountain-fade)" />
              {/* minaret outlines */}
              <line x1="80" y1="150" x2="80" y2="240" stroke="#1a5b64" strokeOpacity="0.2" strokeWidth="1" />
              <circle cx="80" cy="148" r="3" fill="#1a5b64" fillOpacity="0.25" />
            </svg>

            {/* orbiting feature icons */}
            <FeaturePin position="top-[12%] left-1/2 -translate-x-1/2" icon={Cpu} tone="teal" label="TECHNOLOGY" sub="Building intelligent digital solutions" />
            <FeaturePin position="top-1/2 right-[2%] -translate-y-1/2" icon={Layers} tone="orange" label="VENTURE DEVELOPMENT" sub="Incubating ideas and building scalable ventures" />
            <FeaturePin position="bottom-[8%] left-1/2 -translate-x-1/2" icon={Award} tone="teal" label="INNOVATION" sub="Driving impact through creativity and automation" />
            <FeaturePin position="top-1/2 left-[2%] -translate-y-1/2" icon={Handshake} tone="orange" label="FREELANCING" sub="Empowering talent. Delivering value globally" />

            {/* pedestal + logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-40 w-40 rounded-full bg-paper p-4 shadow-[0_30px_60px_-20px_rgba(26,91,100,0.6)] ring-1 ring-teal-900/10">
                <Image src={asset("/logo.png")} alt="" fill className="object-contain p-2" />
              </div>
              {/* pedestal shadow */}
              <div className="absolute -bottom-4 left-1/2 h-4 w-44 -translate-x-1/2 rounded-full bg-teal-900/15 blur-md" />
            </div>
          </div>
        </div>

        {/* Right — about copy */}
        <div className="md:col-span-7">
          <p className="text-eyebrow text-orange-600">About PVP</p>
          <h2 className="text-display-xl mt-4 text-ink">
            Empowering Innovation. <br />
            Building the <span className="text-orange-600">Future.</span>
          </h2>
          <span className="mt-6 block h-1 w-16 rounded-full bg-orange-600" />

          <p className="text-body mt-8 max-w-2xl text-ink-muted md:text-[1.0625rem]">
            Pak Venture Point (PVP) is a multidisciplinary innovation and technology enterprise
            based in Islamabad, Pakistan. We integrate technology, consultancy, freelancing,
            entrepreneurship, and venture development to create practical, scalable and
            future-oriented solutions.
          </p>
          <p className="text-body mt-4 max-w-2xl text-ink-muted md:text-[1.0625rem]">
            Our ecosystem is designed to bridge the gap between technology, innovation and market
            opportunities — empowering businesses, startups, organizations and entrepreneurs to
            grow, transform and lead in a digital world.
          </p>

          {/* 4 pillar cards */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.label} className="rounded-xl border border-rule bg-paper p-5">
                <IconBadge icon={p.icon} tone={p.tone} size="md" />
                <p className={`mt-4 text-sm font-bold ${p.tone === "teal" ? "text-teal-900" : "text-orange-600"}`}>
                  {p.label}
                </p>
                <p className="text-body-sm mt-2 text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom sub-cards */}
      <div className="container-content relative mt-16">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-rule bg-mist p-6 md:grid-cols-4 md:p-8">
          {subCards.map((c, i) => (
            <div key={c.title} className="flex items-center gap-3">
              <IconBadge
                icon={c.icon}
                tone={i % 2 === 0 ? "teal" : "orange"}
                size="md"
              />
              <span className="text-sm font-bold text-ink md:text-[0.9375rem]">{c.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturePin({
  position,
  icon: Icon,
  tone,
  label,
  sub,
}: {
  position: string;
  icon: import("lucide-react").LucideIcon;
  tone: "teal" | "orange";
  label: string;
  sub: string;
}) {
  const isTeal = tone === "teal";
  return (
    <div className={`absolute ${position}`}>
      <div className="flex flex-col items-center">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full text-paper shadow-lg ${
            isTeal ? "bg-teal-900" : "bg-orange-600"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span
          className={`mt-1 text-[10px] font-bold tracking-wider ${
            isTeal ? "text-teal-900" : "text-orange-600"
          }`}
        >
          {label}
        </span>
        <span className="max-w-[110px] text-center text-[10px] leading-tight text-ink-muted">
          {sub}
        </span>
      </div>
    </div>
  );
}
