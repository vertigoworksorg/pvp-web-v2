"use client";

/* CONSULTANCY & ADVISORY faction — "Bold Editorial / brutalist-lite", enriched.
   Flat, high-contrast magazine language: paper-warm/mist/ink/orange, oversized
   uppercase type, hard ruled grids, big index numerals, color-block spreads,
   dual marquee, leader-dot contents, ink stat spread, sectors tag-wall, ruled
   comparison table, flat idea->impact framework, oversized CTA. Surface rhythm
   alternates warm · orange · ink · warm · mist · ink · warm · mist · ink · orange · warm.
   All real content, honest count-ups, static-export + reduced-motion safe. */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";
import {
  Reveal, Magnetic, Stagger, StaggerItem, WordReveal, Marquee, Parallax, CountUp,
} from "@/components/lab/primitives";
import { FactionLink } from "@/components/transition/FactionLink";

// Real development sectors (from the "Development sector consultancy" deliverable).
const SECTORS: { t: string; v: 0 | 1 | 2; s: string }[] = [
  { t: "Climate change", v: 1, s: "text-lg" },
  { t: "Disaster risk reduction", v: 0, s: "text-base" },
  { t: "Education", v: 2, s: "text-sm" },
  { t: "Governance", v: 0, s: "text-base" },
  { t: "Human rights", v: 0, s: "text-lg" },
  { t: "Gender & inclusion", v: 1, s: "text-base" },
  { t: "Livelihoods", v: 0, s: "text-sm" },
  { t: "Community development", v: 2, s: "text-base" },
  { t: "Youth development", v: 0, s: "text-lg" },
  { t: "Social protection", v: 0, s: "text-sm" },
];

const FRAMEWORK = ["Diagnose", "Design", "Deliver", "Measure"];

/* Reusable editorial texture: faint column rules + a giant ghost numeral +
   a rotated vertical caption. Host section must be relative overflow-hidden and
   wrap real content in relative z-10. aria-hidden, no layout shift. */
function EditorialRules({ numeral, caption }: { numeral?: string; caption?: string }) {
  return (
    <div aria-hidden className="container-content pointer-events-none absolute inset-0">
      <div className="grid h-full grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="border-l border-ink/10 last:border-r" />
        ))}
      </div>
      {numeral && (
        <span className="absolute bottom-6 left-0 font-extrabold leading-none tabular-nums" style={{ opacity: 0.07, fontSize: "clamp(6rem,18vw,14rem)" }}>
          {numeral}
        </span>
      )}
      {caption && (
        <span className="absolute right-0 top-1/2 hidden origin-right -translate-y-1/2 rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-ink/25 md:block">
          {caption}
        </span>
      )}
    </div>
  );
}

const LEADER = {
  backgroundImage: "radial-gradient(currentColor 1px, transparent 1.5px)",
  backgroundSize: "6px 2px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "bottom",
  color: "rgba(11,42,48,0.4)",
} as const;

export function ConsultancyFaction({
  service,
  next,
}: {
  service: ServiceDetail;
  next?: { slug: string; title: string };
}) {
  return (
    <div className="bg-paper-warm text-ink">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div aria-hidden className="pointer-events-none absolute inset-0 mx-auto max-w-[1280px] px-8">
          <div className="grid h-full grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="border-l border-ink/10 last:border-r" />
            ))}
          </div>
        </div>

        <div className="container-content relative py-16 md:py-24">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="bg-ink px-2 py-1 text-paper">{service.number}</span>
              <span>Consultancy &amp; Advisory</span>
            </div>
          </Reveal>

          <h1 className="mt-8 text-[clamp(2.5rem,8vw,7rem)] font-extrabold uppercase leading-[0.92] tracking-tight">
            <WordReveal text="Ideas into" />
            <br />
            <WordReveal text="impact." delay={0.18} highlight="impact." highlightClassName="text-orange-600" />
          </h1>

          <div className="mt-10 grid items-end gap-8 md:grid-cols-12">
            <Reveal delay={0.3} className="md:col-span-7">
              <p className="max-w-2xl border-l-4 border-orange-600 pl-5 text-lg text-ink-muted">{service.hero}</p>
            </Reveal>
            <Reveal delay={0.4} className="md:col-span-5 md:justify-self-end">
              <Magnetic>
                <Link href="/contact?topic=consultancy" className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-base font-bold uppercase tracking-wide text-paper transition-colors hover:bg-orange-600">
                  Book a consultation
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        {/* masthead colophon strip */}
        <div className="border-t border-ink/15">
          <div className="container-content flex flex-wrap items-center gap-x-6 gap-y-1 py-4 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
            {["Service No. 03", "Advisory & Development", "Region — PAK", "Issue MMXXVI"].map((c, i) => (
              <span key={c} className="flex items-center gap-6">
                {i > 0 && <span aria-hidden className="text-ink/25">·</span>}
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARQUEE (orange) ===== */}
      <div className="border-b-2 border-ink bg-orange-600 py-4 text-paper">
        <Marquee speed={26}>
          {["Strategy", "Proposals & Grants", "Research", "M&E", "Capacity Building", "Org Development"].map((t) => (
            <span key={t} className="flex items-center gap-8 text-3xl font-extrabold uppercase">
              {t} <span>/</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ===== BY THE NUMBERS (ink) ===== */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="container-content py-16 md:py-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">(By the numbers)</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4">
            {[
              { n: service.deliverables.length, label: "Service lines" },
              { n: service.audience.length, label: "Who we serve" },
              { n: SECTORS.length, label: "Sectors covered" },
              { n: service.engagement.length, label: "Engagement models" },
            ].map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.1}
                className={"border-paper/15 px-6 py-6 " + (i % 2 === 1 ? "border-l " : "") + (i > 0 ? "md:border-l" : "md:border-l-0")}
              >
                <span className="block text-[clamp(3rem,10vw,7rem)] font-extrabold leading-none tabular-nums">
                  <CountUp to={s.n} prefix={s.n < 10 ? "0" : ""} />
                </span>
                <span className="mt-3 block text-xs font-bold uppercase tracking-widest text-paper/60">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDEX / CONTENTS (paper-warm) ===== */}
      <section className="border-b-2 border-ink bg-paper-warm">
        <div className="container-content py-14">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">(Contents)</p>
          </Reveal>
          <ul className="mt-6">
            {service.deliverables.map((d, idx) => (
              <li key={d.title} className="flex items-baseline gap-4 border-b border-ink/10 py-3 text-sm">
                <span className="w-8 shrink-0 font-extrabold tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                <span className="font-bold uppercase tracking-wide">{d.title}</span>
                <span aria-hidden className="h-4 flex-1 self-end" style={LEADER} />
                <span className="shrink-0 font-bold tabular-nums text-ink-muted">P.{String(idx + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== DELIVERABLES (mist + ruled rail) ===== */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-mist py-20">
        <EditorialRules numeral="01–07" caption="What we deliver" />
        <div className="container-content relative z-10">
          <Reveal>
            <div className="flex items-baseline justify-between border-b-2 border-ink pb-4">
              <h2 className="text-4xl font-extrabold uppercase md:text-6xl">What we deliver</h2>
              <span className="text-sm font-bold uppercase tracking-widest text-ink-muted">({String(service.deliverables.length).padStart(2, "0")})</span>
            </div>
          </Reveal>
          <Stagger>
            {service.deliverables.map((d, i) => {
              const isGateway = d.title.toLowerCase().includes("development sector");
              return (
                <StaggerItem key={d.title}>
                  <div className={"group grid grid-cols-12 items-baseline gap-4 py-7 transition-colors hover:bg-ink hover:text-paper " + (isGateway ? "border-b-2 border-ink" : "border-b border-ink/15")}>
                    <span className="col-span-2 text-2xl font-extrabold tabular-nums md:text-4xl">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="col-span-10 flex items-center gap-2 text-xl font-extrabold uppercase md:col-span-4 md:text-2xl">
                      {isGateway && <span aria-hidden className="text-orange-600 group-hover:text-orange-500">▸</span>}
                      {d.title}
                    </h3>
                    <p className="col-span-12 text-sm text-ink-muted group-hover:text-paper/70 md:col-span-5 md:text-base">{d.body}</p>
                    <ArrowUpRight className="col-span-12 h-6 w-6 md:col-span-1 md:ml-auto md:transition-transform md:group-hover:translate-x-1 md:group-hover:-translate-y-1" />
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== SECTORS TAG-WALL (ink) ===== */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="container-content py-16 md:py-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">(Development sectors we cover)</p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase md:text-5xl">Where the work lands</h2>
          </Reveal>
          <Stagger className="mt-10 flex flex-wrap gap-px" gap={0.03}>
            {SECTORS.map((c) => {
              const variant =
                c.v === 1
                  ? "bg-orange-600 text-paper hover:shadow-[6px_6px_0_0_#0b2a30]"
                  : c.v === 2
                  ? "bg-paper text-ink hover:shadow-[6px_6px_0_0_#e97724]"
                  : "border border-paper/20 hover:bg-orange-600 hover:shadow-[6px_6px_0_0_#e97724]";
              return (
                <StaggerItem key={c.t}>
                  <span className={`inline-block rounded-none px-4 py-2 font-bold uppercase transition-shadow ${c.s} ${variant}`}>{c.t}</span>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== AUDIENCE (paper-warm) ===== */}
      <section className="border-b-2 border-ink bg-paper-warm">
        <div className="container-content py-16">
          <Reveal>
            <div className="flex items-baseline gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600">(Who we serve)</p>
              <span className="text-xs font-bold uppercase tracking-widest text-ink-muted">({String(service.audience.length).padStart(2, "0")})</span>
            </div>
            <h2 className="mt-3 text-4xl font-extrabold uppercase md:text-5xl">Built for the field</h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-2 gap-px bg-ink/15 md:grid-cols-3" gap={0.05}>
            {service.audience.map((a) => (
              <StaggerItem key={a}>
                <div className="flex h-full items-center bg-paper-warm p-6 text-sm font-bold uppercase transition-colors hover:bg-orange-600 hover:text-paper md:text-base">{a}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== ENGAGEMENT COMPARISON TABLE (mist) ===== */}
      <section className="border-b-2 border-ink bg-mist py-20">
        <div className="container-content">
          <Reveal>
            <h2 className="border-b-2 border-ink pb-4 text-4xl font-extrabold uppercase md:text-6xl">How we structure the work</h2>
          </Reveal>
          {/* desktop table */}
          <div className="mt-8 hidden md:block">
            <div className="grid grid-cols-12 border-b-2 border-ink text-xs font-bold uppercase tracking-widest">
              <div className="col-span-3 py-3">Model</div>
              <div className="col-span-6 border-l border-ink/10 bg-orange-600 px-4 py-3 text-paper">What it is</div>
              <div className="col-span-3 border-l border-ink/10 py-3 pl-4">Best for</div>
            </div>
            {service.engagement.map((e) => (
              <Reveal key={e.name}>
                <div className="grid grid-cols-12 border-b border-ink/15">
                  <div className="col-span-3 py-6 pr-4 text-xl font-extrabold uppercase">{e.name}</div>
                  <div className="col-span-6 border-l border-ink/10 bg-orange-600/[0.06] px-4 py-6 text-sm text-ink-muted">{e.body}</div>
                  <div className="col-span-3 border-l border-ink/10 py-6 pl-4 text-sm text-ink-muted">{e.suited}</div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* mobile cards */}
          <div className="mt-6 space-y-4 md:hidden">
            {service.engagement.map((e) => {
              const rows: [string, string][] = [
                ["What it is", e.body],
                ["Best for", e.suited],
              ];
              return (
                <div key={e.name} className="border-2 border-ink bg-paper p-5 shadow-[6px_6px_0_0_#0b2a30]">
                  <h3 className="text-lg font-extrabold uppercase">{e.name}</h3>
                  <dl className="mt-3 space-y-2 text-sm">
                    {rows.map(([label, value]) => (
                      <div key={label} className="flex flex-col gap-1 border-t border-ink/10 pt-2">
                        <dt className="text-xs font-bold uppercase tracking-wide text-orange-600">{label}</dt>
                        <dd className="text-ink-muted">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== IMPACT FRAMEWORK + fused tagline (ink) ===== */}
      <section className="overflow-hidden border-b-2 border-ink bg-ink py-24 text-paper">
        <div className="container-content">
          <Parallax distance={40}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">(Our approach)</p>
            <p className="mt-6 max-w-4xl text-2xl font-extrabold leading-tight md:text-4xl">“{service.tagline}”</p>
          </Parallax>
          <div className="mt-14 flex flex-col items-stretch gap-6 md:flex-row md:items-center">
            {FRAMEWORK.map((step, i, arr) => (
              <div key={step} className="flex flex-1 flex-col items-center gap-6 md:flex-row">
                <div className={`w-full rounded-none border-2 border-paper px-6 py-5 text-center text-lg font-extrabold uppercase shadow-[8px_8px_0_0_#e97724] ${i === arr.length - 1 ? "bg-orange-600" : ""}`}>
                  <span className="block text-xs tabular-nums text-paper/50">0{i + 1}</span>
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <svg aria-hidden width="28" height="16" viewBox="0 0 28 16" className="shrink-0 rotate-90 md:rotate-0">
                    <line x1="0" y1="8" x2="22" y2="8" stroke="#f58a3d" strokeWidth="2" />
                    <polygon points="22,3 28,8 22,13" fill="#f58a3d" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OVERSIZED CTA (orange) ===== */}
      <section className="border-t-2 border-ink bg-orange-600 text-paper">
        <div className="container-content py-20 text-center">
          <motion.h2
            className="text-[clamp(2.25rem,7vw,6rem)] font-extrabold uppercase leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Bring us the brief.
          </motion.h2>
          <p className="mx-auto mt-6 max-w-xl text-paper/80">30-minute discovery call. Written scope summary inside 48 hours. No obligation.</p>
          <Magnetic>
            <Link href="/contact?topic=consultancy" className="group mt-10 inline-flex items-center gap-3 bg-ink px-10 py-5 text-lg font-bold uppercase tracking-wide text-paper transition-transform hover:scale-105">
              Start a conversation
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </div>
      </section>

      {/* ===== NEXT SERVICE ===== */}
      {next && (
        <section className="bg-paper-warm py-12">
          <div className="container-content">
            {next.slug === "innovative-startups" ? (
              <FactionLink href={`/services/${next.slug}`} label="Startup & Venture Development" theme="cinematic" className="group flex items-center justify-between gap-6 border-t-2 border-ink pt-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Next service</p>
                  <p className="mt-2 text-2xl font-extrabold uppercase transition-colors group-hover:text-orange-600 md:text-3xl">{next.title}</p>
                </div>
                <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-1" />
              </FactionLink>
            ) : (
              <Link href={`/services/${next.slug}`} className="group flex items-center justify-between gap-6 border-t-2 border-ink pt-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Next service</p>
                  <p className="mt-2 text-2xl font-extrabold uppercase transition-colors group-hover:text-orange-600 md:text-3xl">{next.title}</p>
                </div>
                <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
