"use client";

/* DIRECTION D — Hybrid: dark/light rhythm (MAX)
   Dark cinematic hero + floating glass stats -> light services -> dark feature
   band -> light process -> light testimonial -> dark glowing CTA.
   Wow moments with readable body. */

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2, Compass, Sparkles, Users, ArrowRight, ArrowUpRight, Quote, Zap, Globe, ShieldCheck,
} from "lucide-react";
import {
  CountUp, Magnetic, Reveal, Spotlight, Stagger, StaggerItem, WordReveal, FloatBadge, Parallax,
} from "./primitives";

const services = [
  { icon: Code2, title: "Software Development", blurb: "Smart, scalable, secure digital products.", tone: "teal" },
  { icon: Users, title: "Freelancing Services", blurb: "Vetted remote talent on demand.", tone: "orange" },
  { icon: Compass, title: "Consultancy & Advisory", blurb: "Strategy that compounds into growth.", tone: "teal" },
  { icon: Sparkles, title: "Venture Development", blurb: "We incubate, build and scale ideas.", tone: "orange" },
];

const pillars = [
  { icon: Zap, title: "AI-first", text: "Automation baked into every build." },
  { icon: Globe, title: "Global delivery", text: "Teams that ship across time zones." },
  { icon: ShieldCheck, title: "Enterprise-grade", text: "Security and reliability by default." },
];

const steps = [
  { n: "01", title: "Discover", text: "Map the problem, market and metrics." },
  { n: "02", title: "Design", text: "Architecture and experience, prototyped." },
  { n: "03", title: "Build", text: "Ship in tight, measurable increments." },
  { n: "04", title: "Scale", text: "Optimize, automate and grow." },
];

const stats = [
  { to: 120, suffix: "+", label: "Projects shipped" },
  { to: 45, suffix: "+", label: "Ventures backed" },
  { to: 30, suffix: "+", label: "Expert team" },
  { to: 98, suffix: "%", label: "Client retention" },
];

export function DemoHybrid() {
  const reduce = useReducedMotion();
  return (
    <div className="text-ink">
      {/* ===== DARK HERO ===== */}
      <Spotlight className="relative overflow-hidden bg-[#07110f] text-white" color="rgba(233,119,36,0.18)" size={560}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle,rgba(42,138,146,0.4),transparent 65%)" }}
            animate={reduce ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle,rgba(233,119,36,0.35),transparent 65%)" }}
            animate={reduce ? undefined : { x: [0, -40, 0], y: [0, -20, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at 30% 30%,black,transparent 70%)",
            }}
          />
        </div>

        <div className="container-content relative grid items-center gap-12 py-24 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
                AI-First Innovation Ecosystem
              </span>
            </Reveal>
            <h1 className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <WordReveal text="Building the future through" />{" "}
              <WordReveal
                text="technology & venture"
                delay={0.25}
                highlight="technology venture"
                highlightClassName="bg-gradient-to-r from-teal-300 to-orange-300 bg-clip-text text-transparent"
              />
            </h1>
            <Reveal delay={0.5}>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                Software, consultancy, freelancing and startup development — engineered for
                sustainable growth.
              </p>
            </Reveal>
            <Reveal delay={0.65}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Magnetic>
                  <a className="group inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-[0_0_40px_-8px_rgba(233,119,36,0.9)] transition-shadow hover:shadow-[0_0_60px_-6px_rgba(233,119,36,1)]">
                    Explore Services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold backdrop-blur transition-colors hover:bg-white/10">
                    Partner With Us
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* floating glass stats */}
          <div className="md:col-span-5">
            <Reveal delay={0.3}>
              <FloatBadge amount={10}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((s) => (
                      <div key={s.label}>
                        <div className="bg-gradient-to-r from-teal-200 to-orange-200 bg-clip-text text-4xl font-extrabold text-transparent">
                          <CountUp to={s.to} suffix={s.suffix} />
                        </div>
                        <p className="mt-1 text-xs uppercase tracking-wide text-white/50">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FloatBadge>
            </Reveal>
          </div>
        </div>
      </Spotlight>

      {/* ===== LIGHT — services ===== */}
      <section className="bg-paper-warm py-24">
        <div className="container-content">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">What we do</p>
            <h2 className="text-display-lg mt-3">Core Services</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
            {services.map((s) => {
              const Icon = s.icon;
              const isTeal = s.tone === "teal";
              return (
                <StaggerItem key={s.title}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group h-full rounded-2xl border border-rule bg-paper p-6 shadow-[0_20px_40px_-30px_rgba(11,42,48,0.4)]"
                  >
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-paper ${isTeal ? "bg-teal-900" : "bg-orange-600"}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{s.blurb}</p>
                    <ArrowUpRight className="mt-5 h-5 w-5 text-ink-muted/50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-600" />
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== DARK FEATURE BAND (pillars) ===== */}
      <section className="relative overflow-hidden bg-[#07110f] py-24 text-white">
        <Parallax distance={50} className="pointer-events-none absolute right-0 top-0">
          <div className="h-80 w-80 rounded-full opacity-50 blur-3xl" style={{ background: "radial-gradient(circle,rgba(42,138,146,0.4),transparent 65%)" }} />
        </Parallax>
        <div className="container-content relative">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Why PVP</p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Built different</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/15 text-teal-200 ring-1 ring-teal-300/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/55">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LIGHT — process ===== */}
      <section className="bg-paper py-24">
        <div className="container-content">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">How we work</p>
            <h2 className="text-display-lg mt-3">From idea to scale</h2>
          </Reveal>
          <div className="relative mt-14">
            <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-teal-900/30 via-rule to-orange-600/30 md:block" />
            <div className="grid gap-10 md:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.12}>
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-teal-900 text-lg font-extrabold text-paper shadow-lg">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIGHT — testimonial ===== */}
      <section className="bg-mist py-20">
        <div className="container-content">
          <Reveal>
            <div className="rounded-3xl border border-rule bg-paper p-10 shadow-[0_30px_60px_-40px_rgba(11,42,48,0.4)] md:p-14">
              <Quote className="h-10 w-10 text-orange-600/60" />
              <p className="mt-6 max-w-3xl text-2xl font-medium leading-snug md:text-3xl">
                “PVP helped us think like a venture. We shipped in weeks, not quarters.”
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-900 font-bold text-paper">A</span>
                <div>
                  <p className="font-semibold">Aisha Khan</p>
                  <p className="text-sm text-ink-muted">Founder, NorthStar Labs</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== DARK GLOWING CTA ===== */}
      <section className="relative overflow-hidden bg-teal-950 py-28 text-white">
        <Parallax distance={60} className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: "radial-gradient(circle,rgba(233,119,36,0.3),transparent 60%)" }} />
        </Parallax>
        <div className="container-content relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-4xl font-extrabold md:text-6xl">
              Ready to build the future together?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Magnetic>
              <a className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-9 py-4 font-bold text-white shadow-[0_0_50px_-10px_rgba(233,119,36,1)] transition-transform hover:scale-105">
                Start a project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
