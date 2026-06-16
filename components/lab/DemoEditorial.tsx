"use client";

/* DIRECTION B — Bold editorial / brutalist-lite (MAX)
   Light canvas, oversized type, hard ruled grid, big index numbers,
   color-block panels, dual marquees, manifesto block, big pull-quote,
   process ticker, oversized CTA. Swiss/magazine, opinionated. */

import { motion } from "framer-motion";
import { Code2, Compass, Sparkles, Users, ArrowUpRight, ArrowRight } from "lucide-react";
import {
  CountUp, Magnetic, Reveal, Stagger, StaggerItem, WordReveal, Marquee, Parallax,
} from "./primitives";

const services = [
  { n: "01", icon: Code2, title: "Software Development", blurb: "Smart, scalable, secure digital products.", tone: "teal" },
  { n: "02", icon: Users, title: "Freelancing Services", blurb: "Vetted remote talent on demand.", tone: "orange" },
  { n: "03", icon: Compass, title: "Consultancy & Advisory", blurb: "Strategy that compounds into growth.", tone: "teal" },
  { n: "04", icon: Sparkles, title: "Venture Development", blurb: "We incubate, build and scale ideas.", tone: "orange" },
];

const stats = [
  { to: 120, suffix: "+", label: "Projects shipped" },
  { to: 45, suffix: "+", label: "Ventures backed" },
  { to: 30, suffix: "+", label: "Expert team" },
  { to: 98, suffix: "%", label: "Client retention" },
];

const steps = [
  { n: "01", title: "Discover", text: "Map the problem, market and metrics." },
  { n: "02", title: "Design", text: "Architecture and experience, prototyped." },
  { n: "03", title: "Build", text: "Ship in tight, measurable increments." },
  { n: "04", title: "Scale", text: "Optimize, automate and grow." },
];

export function DemoEditorial() {
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
              <span className="bg-ink px-2 py-1 text-paper">PVP</span>
              <span>AI-First Innovation Ecosystem</span>
            </div>
          </Reveal>

          <h1 className="mt-8 text-[clamp(2.75rem,9vw,8rem)] font-extrabold uppercase leading-[0.92] tracking-tight">
            <WordReveal text="Build the" />
            <br />
            <WordReveal text="future." delay={0.18} highlight="future." highlightClassName="text-orange-600" />
          </h1>

          <div className="mt-10 grid items-end gap-8 md:grid-cols-12">
            <Reveal delay={0.3} className="md:col-span-7">
              <p className="max-w-xl border-l-4 border-orange-600 pl-5 text-lg text-ink-muted">
                Software, consultancy, freelancing and startup development — engineered for
                sustainable growth and digital transformation.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="md:col-span-5 md:justify-self-end">
              <Magnetic>
                <a className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-base font-bold uppercase tracking-wide text-paper transition-colors hover:bg-orange-600">
                  Explore Services
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* hero stat strip */}
          <div className="mt-14 grid grid-cols-2 border-t-2 border-ink md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={0.5 + i * 0.08}
                className={`px-2 py-5 ${i !== 0 ? "md:border-l border-ink/15" : ""} ${i === 2 ? "border-l border-ink/15 md:border-l" : ""} ${i % 2 === 1 ? "border-l border-ink/15 md:border-l" : ""}`}
              >
                <div className="text-3xl font-extrabold tabular-nums md:text-4xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-ink-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="border-b-2 border-ink bg-orange-600 py-4 text-paper">
        <Marquee speed={24}>
          {["Software", "Consultancy", "Freelancing", "Ventures", "AI Automation", "Strategy"].map((t) => (
            <span key={t} className="flex items-center gap-8 text-3xl font-extrabold uppercase">
              {t} <span>/</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ===== MANIFESTO ===== */}
      <section className="border-b-2 border-ink">
        <div className="container-content grid gap-0 md:grid-cols-2">
          <Reveal className="border-ink/15 py-16 md:border-r md:pr-12">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">(Manifesto)</p>
            <p className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl">
              We don&apos;t just build software. We build <span className="text-orange-600">ventures</span>,
              partnerships and momentum.
            </p>
          </Reveal>
          <div className="flex flex-col justify-center gap-6 py-16 md:pl-12">
            {["AI-first by default", "Global delivery, local accountability", "Ship weekly, not quarterly"].map((t, i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="flex items-center gap-4 border-b border-ink/15 pb-5">
                  <span className="text-2xl font-extrabold tabular-nums text-ink-muted">0{i + 1}</span>
                  <span className="text-lg font-bold uppercase">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="container-content py-20">
        <Reveal>
          <div className="flex items-baseline justify-between border-b-2 border-ink pb-4">
            <h2 className="text-4xl font-extrabold uppercase md:text-6xl">Core Services</h2>
            <span className="text-sm font-bold uppercase tracking-widest text-ink-muted">(04)</span>
          </div>
        </Reveal>

        <Stagger>
          {services.map((s) => {
            const Icon = s.icon;
            const isTeal = s.tone === "teal";
            return (
              <StaggerItem key={s.title}>
                <div className="group grid grid-cols-12 items-center gap-4 border-b border-ink/15 py-7 transition-colors hover:bg-ink hover:text-paper">
                  <span className="col-span-2 text-2xl font-extrabold tabular-nums md:text-4xl">{s.n}</span>
                  <span className={`col-span-2 flex h-12 w-12 items-center justify-center ${isTeal ? "bg-teal-900" : "bg-orange-600"} text-paper md:h-14 md:w-14`}>
                    <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} />
                  </span>
                  <h3 className="col-span-8 text-xl font-extrabold uppercase md:col-span-5 md:text-3xl">{s.title}</h3>
                  <p className="col-span-10 col-start-3 text-sm text-ink-muted group-hover:text-paper/70 md:col-span-2 md:col-start-auto md:text-base">{s.blurb}</p>
                  <ArrowUpRight className="col-span-1 ml-auto h-7 w-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ===== PULL QUOTE (parallax) ===== */}
      <section className="overflow-hidden border-y-2 border-ink bg-ink py-24 text-paper">
        <div className="container-content">
          <Parallax distance={40}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">(Client)</p>
            <p className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
              “PVP helped us think like a venture. We shipped in weeks, not quarters.”
            </p>
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-paper/60">
              Aisha Khan — Founder, NorthStar Labs
            </p>
          </Parallax>
        </div>
      </section>

      {/* ===== PROCESS TICKER ===== */}
      <section className="container-content py-20">
        <Reveal>
          <h2 className="border-b-2 border-ink pb-4 text-4xl font-extrabold uppercase md:text-6xl">How we work</h2>
        </Reveal>
        <Stagger className="mt-2">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group flex items-baseline gap-6 border-b border-ink/15 py-6">
                <span className="text-5xl font-extrabold tabular-nums text-ink/20 transition-colors group-hover:text-orange-600 md:text-7xl">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold uppercase md:text-3xl">{s.title}</h3>
                  <p className="mt-1 text-ink-muted">{s.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ===== OVERSIZED CTA ===== */}
      <section className="border-t-2 border-ink bg-orange-600 text-paper">
        <div className="container-content py-20 text-center">
          <motion.h2
            className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold uppercase leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Let&apos;s build.
          </motion.h2>
          <Magnetic>
            <a className="group mt-10 inline-flex items-center gap-3 bg-ink px-10 py-5 text-lg font-bold uppercase tracking-wide text-paper transition-transform hover:scale-105">
              Start a project
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
