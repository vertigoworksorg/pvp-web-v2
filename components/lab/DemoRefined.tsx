"use client";

/* DIRECTION C — Refined motion-rich, current light identity (MAX)
   Same teal/orange palette. Living counter-rotating orbit hero, scroll reveals,
   magnetic buttons, parallax feature band, hover-lift cards, animated process,
   testimonial, count-up stats, gradient CTA. Same brand, fully alive. */

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2, Compass, Sparkles, Users, ArrowRight, Check, Quote, Zap, Globe, ShieldCheck,
} from "lucide-react";
import {
  CountUp, Magnetic, Reveal, Stagger, StaggerItem, Parallax, FloatBadge,
} from "./primitives";

const orbitNodes = [
  { label: "Software", icon: Code2, angle: -90, tone: "teal" },
  { label: "Consultancy", icon: Compass, angle: 0, tone: "orange" },
  { label: "Ventures", icon: Sparkles, angle: 90, tone: "teal" },
  { label: "Freelancing", icon: Users, angle: 180, tone: "orange" },
] as const;

const services = [
  { icon: Code2, title: "Software Development", caps: ["Web & Mobile", "ERP & SaaS", "AI & Automation"], tone: "teal" },
  { icon: Users, title: "Freelancing Services", caps: ["Remote Dev", "Design", "Marketing"], tone: "orange" },
  { icon: Compass, title: "Consultancy", caps: ["Strategy", "Org Dev", "Research"], tone: "teal" },
  { icon: Sparkles, title: "Venture Development", caps: ["Incubation", "Acceleration", "Investor Net"], tone: "orange" },
];

const pillars = [
  { icon: Zap, title: "AI-first", text: "Automation in every build." },
  { icon: Globe, title: "Global delivery", text: "Teams across time zones." },
  { icon: ShieldCheck, title: "Enterprise-grade", text: "Secure and reliable by default." },
];

const steps = [
  { n: "01", title: "Discover", text: "We map the problem, market and metrics." },
  { n: "02", title: "Design", text: "Architecture and experience, prototyped fast." },
  { n: "03", title: "Build", text: "Ship in tight, measurable increments." },
  { n: "04", title: "Scale", text: "Optimize, automate and grow." },
];

const stats = [
  { to: 120, suffix: "+", label: "Projects shipped" },
  { to: 45, suffix: "+", label: "Ventures backed" },
  { to: 30, suffix: "+", label: "Expert team" },
  { to: 98, suffix: "%", label: "Client retention" },
];

export function DemoRefined() {
  const reduce = useReducedMotion();
  return (
    <div className="bg-gradient-to-b from-paper-warm via-paper to-mist text-ink">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(26,91,100,0.12) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <FloatBadge className="pointer-events-none absolute -right-10 top-24 hidden md:block" amount={14}>
          <div className="h-40 w-40 rounded-full opacity-60 blur-2xl" style={{ background: "radial-gradient(circle,rgba(253,226,207,0.95),transparent 70%)" }} />
        </FloatBadge>
        <div className="container-content relative grid items-center gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
                AI-First Innovation Ecosystem
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-display-xl mt-4 text-ink">
                Building the Future Through Technology,{" "}
                <span className="text-orange-600">Innovation &amp; Venture Development</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body mt-7 max-w-lg text-ink-muted">
                Software solutions, strategic consultancy, freelancing operations and startup
                development — designed for sustainable growth and digital transformation.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Magnetic>
                  <a className="group inline-flex items-center gap-2 rounded-lg bg-teal-900 px-6 py-3.5 font-semibold text-paper shadow-[0_8px_20px_-8px_rgba(26,91,100,0.55)] transition-all hover:bg-teal-700">
                    Explore Services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a className="inline-flex items-center gap-2 rounded-lg border-2 border-teal-900 px-6 py-3.5 font-semibold text-teal-900 transition-colors hover:bg-teal-900 hover:text-paper">
                    Partner With Us
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* LIVING orbit */}
          <div className="md:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[440px] md:max-w-[520px]">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-teal-900/15"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[14%] rounded-full border-2 border-dashed border-orange-600/25"
                animate={reduce ? undefined : { rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="relative flex h-24 w-24 items-center justify-center rounded-full bg-paper shadow-[0_20px_60px_-20px_rgba(26,91,100,0.5)] ring-1 ring-teal-900/10 sm:h-36 sm:w-36 md:h-44 md:w-44"
                  animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="bg-gradient-to-br from-teal-900 to-teal-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl">
                    PVP
                  </span>
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full ring-2 ring-orange-600/40"
                    animate={reduce ? undefined : { scale: [1, 1.5], opacity: [0.6, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                  />
                </motion.div>
              </div>
              <motion.div
                className="absolute inset-0"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                {orbitNodes.map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const left = `${50 + Math.cos(rad) * 42}%`;
                  const top = `${50 + Math.sin(rad) * 42}%`;
                  const isTeal = node.tone === "teal";
                  const Icon = node.icon;
                  return (
                    <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left, top }}>
                      <motion.div
                        className="flex flex-col items-center"
                        animate={reduce ? undefined : { rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                      >
                        <motion.span
                          className={`flex h-12 w-12 items-center justify-center rounded-full text-paper shadow-lg sm:h-16 sm:w-16 ${isTeal ? "bg-teal-900" : "bg-orange-600"}`}
                          whileHover={{ scale: 1.12 }}
                          animate={reduce ? undefined : { y: [0, -6, 0] }}
                          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.75} />
                        </motion.span>
                        <span className="mt-2 text-center text-[11px] font-semibold text-ink sm:text-sm">
                          {node.label}
                        </span>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="bg-paper py-16">
        <div className="container-content grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="flex gap-4 rounded-2xl border border-rule bg-mist/50 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{p.text}</p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-mist py-20">
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
                    className="h-full rounded-2xl border border-rule bg-paper p-6 shadow-[0_20px_40px_-30px_rgba(11,42,48,0.4)]"
                  >
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-paper ${isTeal ? "bg-teal-900" : "bg-orange-600"}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {s.caps.map((c) => (
                        <li key={c} className="flex items-center gap-2 text-sm text-ink-muted">
                          <Check className={`h-4 w-4 ${isTeal ? "text-teal-700" : "text-orange-600"}`} strokeWidth={3} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== PROCESS (parallax accents) ===== */}
      <section className="relative overflow-hidden py-24">
        <Parallax distance={50} className="pointer-events-none absolute -left-20 top-10">
          <div className="h-64 w-64 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle,rgba(194,218,220,0.9),transparent 70%)" }} />
        </Parallax>
        <div className="container-content relative">
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

      {/* ===== TESTIMONIAL ===== */}
      <section className="bg-paper py-20">
        <div className="container-content">
          <Reveal>
            <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-rule bg-mist/40 p-10 shadow-[0_30px_60px_-40px_rgba(11,42,48,0.4)] md:p-14">
              <Quote className="h-10 w-10 text-orange-600/60" />
              <p className="mt-6 max-w-3xl text-2xl font-medium leading-snug text-ink md:text-3xl">
                “PVP didn&apos;t just build our platform — they helped us think like a venture. We
                shipped in weeks, not quarters.”
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-900 font-bold text-paper">A</span>
                <div>
                  <p className="font-semibold">Aisha Khan</p>
                  <p className="text-sm text-ink-muted">Founder, NorthStar Labs</p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20">
        <div className="container-content grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <div className="bg-gradient-to-br from-teal-900 to-teal-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-ink-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-teal-950 py-24 text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
        <div className="container-content relative text-center">
          <Reveal>
            <h2 className="text-display-lg">Let&apos;s build the future together.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Magnetic>
              <a className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-bold text-paper shadow-[0_0_40px_-10px_rgba(233,119,36,0.9)] transition-transform hover:scale-105">
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
