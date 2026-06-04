"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus, Code2, Compass, Sparkles, Users, type LucideIcon } from "lucide-react";
import { Marker } from "@/components/ui/Marker";
import { Reveal } from "@/components/ui/Reveal";

type Service = {
  number: string;
  icon: LucideIcon;
  tone: "navy" | "teal" | "coral";
  title: string;
  oneLine: string;
  capabilities: string[];
  href: string;
};

const services: Service[] = [
  {
    number: "01",
    icon: Code2,
    tone: "navy",
    title: "Software Development",
    oneLine: "Smart, scalable, AI-enabled systems — web, mobile, cloud.",
    capabilities: ["Web & mobile apps", "ERP & SaaS platforms", "AI & automation", "UI/UX & cloud"],
    href: "/services/software-development",
  },
  {
    number: "02",
    icon: Users,
    tone: "teal",
    title: "Freelancing Services",
    oneLine: "A vetted remote bench, sized to the brief.",
    capabilities: ["Remote development", "Design & content", "Digital marketing", "Outsourced ops"],
    href: "/services/digital-freelancing",
  },
  {
    number: "03",
    icon: Compass,
    tone: "coral",
    title: "Consultancy & Advisory",
    oneLine: "Strategy and systems that strengthen organizations.",
    capabilities: ["Strategic planning", "Org development", "M&E & research", "Capacity building"],
    href: "/services/consultancy",
  },
  {
    number: "04",
    icon: Sparkles,
    tone: "navy",
    title: "Startup & Ventures",
    oneLine: "Incubation, product, and capital for new ventures.",
    capabilities: ["Incubation", "Product build", "Investor network", "Acceleration"],
    href: "/services/innovative-startups",
  },
];

const toneFill: Record<Service["tone"], string> = {
  navy: "bg-navy text-paper",
  teal: "bg-teal text-paper",
  coral: "bg-coral text-paper",
};

const toneText: Record<Service["tone"], string> = {
  navy: "text-navy",
  teal: "text-teal",
  coral: "text-coral-deep",
};

export function CoreServices() {
  return (
    <section id="services" className="border-b border-hairline py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <Marker section="02" label="What we do" />
          <h2 className="text-display-lg mt-6 max-w-[18ch] text-ink">
            Four practices, <span className="emph">one team.</span>
          </h2>
          <p className="text-body-lg mt-4 max-w-xl text-ink-soft">
            Start with one. Grow into the others. Same named owner throughout.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-hairline bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:border-navy-300 md:p-7">
      <div className="flex items-start justify-between">
        <span className={`flex h-14 w-14 items-center justify-center rounded-md ${toneFill[service.tone]}`}>
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="font-mono text-xs tracking-[0.1em] text-ink-mute">§02.{service.number}</span>
      </div>

      <h3 className="text-display-md mt-6 text-ink">{service.title}</h3>
      <p className="text-body mt-2 text-ink-soft">{service.oneLine}</p>

      {/* Capabilities — collapsed by default, revealed on demand */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-1.5 self-start font-mono text-[11px] uppercase tracking-[0.08em] text-ink-mute transition-colors hover:text-teal"
      >
        <Plus
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        />
        {open ? "Hide capabilities" : "Capabilities"}
      </button>

      <div
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 overflow-hidden">
          {service.capabilities.map((c) => (
            <li key={c} className="flex items-center gap-2.5 py-1.5 text-body-sm text-ink-soft">
              <span className={`h-1.5 w-1.5 rounded-full ${toneFill[service.tone]}`} aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={service.href}
        className={`mt-auto inline-flex items-center gap-1.5 pt-6 font-mono text-[11px] uppercase tracking-[0.08em] ${toneText[service.tone]}`}
      >
        Learn more
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
