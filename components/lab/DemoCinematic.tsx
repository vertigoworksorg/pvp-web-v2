"use client";

/* DIRECTION A — Dark, premium & cinematic (MAX)
   Near-black ink canvas, glowing teal/orange, spotlight cursor, animated mesh,
   orbiting hero ring, bento grid, glass 3D tilt, marquee, process timeline,
   testimonial, count-up stats, glowing CTA. "Stripe x Linear x a16z". */

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2, Compass, Sparkles, Users, ArrowUpRight, ArrowRight, Quote, Zap, Globe, ShieldCheck,
} from "lucide-react";
import {
  CountUp, Magnetic, Reveal, Spotlight, Tilt, WordReveal, Marquee, FloatBadge, Parallax,
} from "./primitives";

const orbit = [
  { icon: Code2, angle: -90 },
  { icon: Compass, angle: 0 },
  { icon: Sparkles, angle: 90 },
  { icon: Users, angle: 180 },
];

const services = [
  { icon: Code2, title: "Software Development", blurb: "Smart, scalable, secure digital products.", span: "lg:col-span-2" },
  { icon: Users, title: "Freelancing Services", blurb: "Vetted remote talent on demand.", span: "" },
  { icon: Compass, title: "Consultancy & Advisory", blurb: "Strategy that compounds into growth.", span: "" },
  { icon: Sparkles, title: "Venture Development", blurb: "We incubate, build and scale ideas.", span: "lg:col-span-2" },
];

const pillars = [
  { icon: Zap, title: "AI-first", text: "Automation baked into every build." },
  { icon: Globe, title: "Global delivery", text: "Teams that ship across time zones." },
  { icon: ShieldCheck, title: "Enterprise-grade", text: "Security and reliability by default." },
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

export function DemoCinematic() {
  const reduce = useReducedMotion();
  return (
    <div className="bg-[#07110f] text-white">
      {/* ===== HERO ===== */}
      <Spotlight className="relative overflow-hidden" color="rgba(42,138,146,0.22)" size={640}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle,rgba(42,138,146,0.45),transparent 65%)" }}
            animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle,rgba(233,119,36,0.4),transparent 65%)" }}
            animate={reduce ? undefined : { x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center,black,transparent 75%)",
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
            <h1 className="mt-7 max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-tight md:text-7xl">
              <WordReveal text="Building the future through" />{" "}
              <WordReveal
                text="technology & venture"
                delay={0.25}
                highlight="technology venture"
                highlightClassName="bg-gradient-to-r from-teal-300 via-teal-200 to-orange-300 bg-clip-text text-transparent"
              />
            </h1>
            <Reveal delay={0.5}>
              <p className="mt-7 max-w-xl text-lg text-white/60">
                Software, consultancy, freelancing and startup development — engineered for
                sustainable growth and digital transformation.
              </p>
            </Reveal>
            <Reveal delay={0.65}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <a className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-300 px-7 py-3.5 font-semibold text-[#07110f] shadow-[0_0_40px_-8px_rgba(42,138,146,0.9)] transition-shadow hover:shadow-[0_0_60px_-6px_rgba(42,138,146,1)]">
                    Explore Services
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
                    Partner With Us
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* glowing orbit visual */}
          <div className="md:col-span-5">
            <Reveal delay={0.3}>
              <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/10"
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-[16%] rounded-full border border-teal-300/20"
                  animate={reduce ? undefined : { rotate: -360 }}
                  transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                />
                {/* glowing core */}
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/30 to-orange-400/20 ring-1 ring-white/15 backdrop-blur">
                  <span className="bg-gradient-to-r from-teal-200 to-orange-200 bg-clip-text text-3xl font-extrabold text-transparent">
                    PVP
                  </span>
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full ring-2 ring-teal-300/40"
                    animate={reduce ? undefined : { scale: [1, 1.6], opacity: [0.6, 0] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                  />
                </div>
                {/* orbiting nodes */}
                <motion.div
                  className="absolute inset-0"
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
                >
                  {orbit.map((o, i) => {
                    const rad = (o.angle * Math.PI) / 180;
                    const left = `${50 + Math.cos(rad) * 42}%`;
                    const top = `${50 + Math.sin(rad) * 42}%`;
                    const Icon = o.icon;
                    return (
                      <motion.div
                        key={i}
                        className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-teal-200 backdrop-blur"
                        style={{ left, top }}
                        animate={reduce ? undefined : { rotate: -360 }}
                        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </Spotlight>

      {/* ===== MARQUEE ===== */}
      <div className="border-y border-white/10 py-5">
        <Marquee speed={28}>
          {["Software", "Consultancy", "Freelancing", "Ventures", "AI Automation", "Cloud", "Strategy"].map((t) => (
            <span key={t} className="flex items-center gap-8 text-2xl font-bold text-white/30">
              {t} <span className="text-orange-500">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ===== SERVICES (bento) ===== */}
      <section className="container-content py-24">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">What we do</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Core Services</h2>
        </Reveal>
        <div className="mt-12 grid auto-rows-[200px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.08} className={s.span}>
                <Tilt glare className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-teal-300/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/30 to-orange-400/20 text-teal-200 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/55">{s.blurb}</p>
                  </div>
                  <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-white/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-400" />
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="border-y border-white/10 bg-white/[0.02] py-20">
        <div className="container-content grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-400/15 text-teal-200 ring-1 ring-teal-300/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/55">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===== PROCESS TIMELINE ===== */}
      <section className="container-content py-24">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">How we work</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">From idea to scale</h2>
        </Reveal>
        <div className="relative mt-14">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-teal-300/40 via-white/15 to-orange-300/40 md:block" />
          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <div className="relative">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#07110f] text-lg font-extrabold text-teal-200">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="container-content pb-24">
        <Reveal>
          <Tilt glare max={6} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-10 backdrop-blur md:p-16">
            <Quote className="h-10 w-10 text-orange-400/70" />
            <p className="mt-6 max-w-3xl text-2xl font-medium leading-snug md:text-3xl">
              “PVP didn&apos;t just build our platform — they helped us think like a venture. We
              shipped in weeks, not quarters.”
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-orange-400 font-bold text-[#07110f]">A</span>
              <div>
                <p className="font-semibold">Aisha Khan</p>
                <p className="text-sm text-white/50">Founder, NorthStar Labs</p>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-t border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent py-20">
        <div className="container-content grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <div className="bg-gradient-to-r from-teal-200 to-orange-200 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm uppercase tracking-wide text-white/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden py-28">
        <Parallax distance={60} className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle,rgba(42,138,146,0.35),transparent 60%)" }}
          />
        </Parallax>
        <div className="container-content relative text-center">
          <FloatBadge className="mx-auto mb-6 inline-flex">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-100">
              Let&apos;s build
            </span>
          </FloatBadge>
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold md:text-6xl">
            Ready to build the future together?
          </h2>
          <Magnetic>
            <a className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-orange-400 px-9 py-4 font-bold text-[#07110f] shadow-[0_0_50px_-10px_rgba(42,138,146,1)] transition-transform hover:scale-105">
              Start a project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
