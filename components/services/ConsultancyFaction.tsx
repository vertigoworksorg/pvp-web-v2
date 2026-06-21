"use client";

/* CONSULTANCY & ADVISORY faction — "Bold Editorial / brutalist-lite"
   Full service page from real serviceDetails: light canvas, oversized type,
   hard ruled grid, big index numbers, color-block deliverable rows, audience
   grid, engagement ticker, oversized CTA. Swiss/magazine, opinionated. */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";
import {
  Reveal, Magnetic, Stagger, StaggerItem, WordReveal, Marquee, Parallax,
} from "@/components/lab/primitives";
import { FactionLink } from "@/components/transition/FactionLink";

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
                <Link
                  href="/contact?topic=consultancy"
                  className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-base font-bold uppercase tracking-wide text-paper transition-colors hover:bg-orange-600"
                >
                  Book a consultation
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="border-b-2 border-ink bg-orange-600 py-4 text-paper">
        <Marquee speed={26}>
          {["Strategy", "Proposals & Grants", "Research", "M&E", "Capacity Building", "Org Development"].map((t) => (
            <span key={t} className="flex items-center gap-8 text-3xl font-extrabold uppercase">
              {t} <span>/</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ===== DELIVERABLES (rows) ===== */}
      <section className="container-content py-20">
        <Reveal>
          <div className="flex items-baseline justify-between border-b-2 border-ink pb-4">
            <h2 className="text-4xl font-extrabold uppercase md:text-6xl">What we deliver</h2>
            <span className="text-sm font-bold uppercase tracking-widest text-ink-muted">
              ({String(service.deliverables.length).padStart(2, "0")})
            </span>
          </div>
        </Reveal>

        <Stagger>
          {service.deliverables.map((d, i) => (
            <StaggerItem key={d.title}>
              <div className="group grid grid-cols-12 items-baseline gap-4 border-b border-ink/15 py-7 transition-colors hover:bg-ink hover:text-paper">
                <span className="col-span-2 text-2xl font-extrabold tabular-nums md:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 text-xl font-extrabold uppercase md:col-span-4 md:text-2xl">{d.title}</h3>
                <p className="col-span-12 text-sm text-ink-muted group-hover:text-paper/70 md:col-span-5 md:text-base">{d.body}</p>
                <ArrowUpRight className="col-span-12 h-6 w-6 md:col-span-1 md:ml-auto md:transition-transform md:group-hover:translate-x-1 md:group-hover:-translate-y-1" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ===== AUDIENCE (grid blocks) ===== */}
      <section className="border-y-2 border-ink">
        <div className="container-content py-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">(Who we serve)</p>
            <h2 className="mt-3 text-4xl font-extrabold uppercase md:text-5xl">Built for the field</h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-2 gap-px bg-ink/15 md:grid-cols-3" gap={0.05}>
            {service.audience.map((a) => (
              <StaggerItem key={a}>
                <div className="flex h-full items-center bg-paper-warm p-6 text-sm font-bold uppercase transition-colors hover:bg-orange-600 hover:text-paper md:text-base">
                  {a}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== PULL QUOTE (parallax) ===== */}
      <section className="overflow-hidden border-b-2 border-ink bg-ink py-24 text-paper">
        <div className="container-content">
          <Parallax distance={40}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">(Our approach)</p>
            <p className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
              “{service.tagline}”
            </p>
          </Parallax>
        </div>
      </section>

      {/* ===== ENGAGEMENT TICKER ===== */}
      <section className="container-content py-20">
        <Reveal>
          <h2 className="border-b-2 border-ink pb-4 text-4xl font-extrabold uppercase md:text-6xl">
            How we structure the work
          </h2>
        </Reveal>
        <Stagger className="mt-2">
          {service.engagement.map((e, i) => (
            <StaggerItem key={e.name}>
              <div className="group grid grid-cols-12 items-baseline gap-4 border-b border-ink/15 py-7">
                <span className="col-span-2 text-5xl font-extrabold tabular-nums text-ink/20 transition-colors group-hover:text-orange-600 md:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="text-2xl font-extrabold uppercase md:text-3xl">{e.name}</h3>
                  <p className="mt-1 text-ink-muted">{e.body}</p>
                </div>
                <p className="col-span-12 col-start-3 text-xs font-bold uppercase tracking-wider text-orange-600 md:col-span-5 md:col-start-auto">
                  Best for —{" "}
                  <span className="font-medium normal-case tracking-normal text-ink-muted">{e.suited}</span>
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ===== OVERSIZED CTA ===== */}
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
          <p className="mx-auto mt-6 max-w-xl text-paper/80">
            30-minute discovery call. Written scope summary inside 48 hours. No obligation.
          </p>
          <Magnetic>
            <Link
              href="/contact?topic=consultancy"
              className="group mt-10 inline-flex items-center gap-3 bg-ink px-10 py-5 text-lg font-bold uppercase tracking-wide text-paper transition-transform hover:scale-105"
            >
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
              // Next is the Venture faction — enter via the cinematic transition.
              <FactionLink
                href={`/services/${next.slug}`}
                label="Startup & Venture Development"
                theme="cinematic"
                className="group flex items-center justify-between gap-6 border-t-2 border-ink pt-8"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Next service</p>
                  <p className="mt-2 text-2xl font-extrabold uppercase transition-colors group-hover:text-orange-600 md:text-3xl">
                    {next.title}
                  </p>
                </div>
                <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-1" />
              </FactionLink>
            ) : (
              <Link href={`/services/${next.slug}`} className="group flex items-center justify-between gap-6 border-t-2 border-ink pt-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Next service</p>
                  <p className="mt-2 text-2xl font-extrabold uppercase transition-colors group-hover:text-orange-600 md:text-3xl">
                    {next.title}
                  </p>
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
