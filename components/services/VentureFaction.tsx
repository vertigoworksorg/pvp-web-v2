"use client";

/* VENTURE DEVELOPMENT faction — "Dark Cinematic"
   Full service page rendered from real serviceDetails content:
   glowing dark canvas, spotlight cursor, animated mesh, bento deliverables
   with 3D tilt, audience list, engagement-model timeline, glowing CTA. */

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";
import {
  Reveal, Magnetic, Spotlight, Tilt, WordReveal, Marquee, FloatBadge, Parallax,
} from "@/components/lab/primitives";

export function VentureFaction({
  service,
  next,
}: {
  service: ServiceDetail;
  next?: { slug: string; title: string };
}) {
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

        <div className="container-content relative py-24 md:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-orange-400" />
              {service.number} · What we offer
            </span>
          </Reveal>
          <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tight md:text-7xl">
            <WordReveal
              text={service.title}
              highlight="Startups Venture Development"
              highlightClassName="bg-gradient-to-r from-teal-300 via-teal-200 to-orange-300 bg-clip-text text-transparent"
            />
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-7 max-w-2xl text-xl font-medium text-teal-100/90">{service.tagline}</p>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="mt-5 max-w-2xl text-lg text-white/55">{service.hero}</p>
          </Reveal>
          <Reveal delay={0.65}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link
                  href="/contact?topic=venture"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-300 px-7 py-3.5 font-semibold text-[#07110f] shadow-[0_0_40px_-8px_rgba(42,138,146,0.9)] transition-shadow hover:shadow-[0_0_60px_-6px_rgba(42,138,146,1)]"
                >
                  Pitch your venture
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link
                  href="/ventures"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  See our ventures
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </Spotlight>

      {/* ===== MARQUEE ===== */}
      <div className="border-y border-white/10 py-5">
        <Marquee speed={30}>
          {["Incubation", "Venture Building", "Investor Networking", "Acceleration", "Innovation"].map((t) => (
            <span key={t} className="flex items-center gap-8 text-2xl font-bold text-white/25">
              {t} <span className="text-orange-500">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ===== DELIVERABLES (bento) ===== */}
      <section className="container-content py-24">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">What we deliver</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Core offerings</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {service.deliverables.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <Tilt glare max={8} className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-colors hover:border-teal-300/40">
                <span className="font-display text-5xl font-extrabold text-white/10 transition-colors group-hover:text-orange-400/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold">{d.title}</h3>
                <p className="mt-2 text-sm text-white/55">{d.body}</p>
                <ArrowUpRight className="absolute right-7 top-7 h-5 w-5 text-white/25 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-400" />
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== AUDIENCE ===== */}
      <section className="border-y border-white/10 bg-white/[0.02] py-24">
        <div className="container-content grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Who it&apos;s for</p>
              <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">A fit for your venture?</h2>
            </Reveal>
          </div>
          <ul className="space-y-4 md:col-span-7">
            {service.audience.map((a, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <li className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-colors hover:border-teal-300/30">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/30 to-orange-400/20 text-sm font-bold text-teal-200 ring-1 ring-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/75">{a}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== ENGAGEMENT TIMELINE ===== */}
      <section className="container-content py-24">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Engagement models</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">How we structure the work</h2>
        </Reveal>
        <div className="relative mt-14">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-teal-300/40 via-white/15 to-orange-300/40 md:block" />
          <div className="grid gap-10 md:grid-cols-3">
            {service.engagement.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.12}>
                <Tilt max={6} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#07110f] text-lg font-extrabold text-teal-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{e.name}</h3>
                  <p className="mt-2 text-sm text-white/55">{e.body}</p>
                  <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4 text-xs">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400" strokeWidth={3} />
                    <span className="text-white/50">
                      <span className="font-bold uppercase tracking-wider text-orange-400">Best for</span> — {e.suited}
                    </span>
                  </p>
                </Tilt>
              </Reveal>
            ))}
          </div>
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
            Bring us the idea — <span className="bg-gradient-to-r from-teal-300 to-orange-300 bg-clip-text text-transparent">we&apos;ll build the venture.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/55">
            30-minute discovery call. Written scope summary inside 48 hours. No obligation.
          </p>
          <Magnetic>
            <Link
              href="/contact?topic=venture"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-orange-400 px-9 py-4 font-bold text-[#07110f] shadow-[0_0_50px_-10px_rgba(42,138,146,1)] transition-transform hover:scale-105"
            >
              Start a conversation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </div>
      </section>

      {/* ===== NEXT SERVICE ===== */}
      {next && (
        <section className="border-t border-white/10 py-12">
          <div className="container-content">
            <Link href={`/services/${next.slug}`} className="group flex items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-orange-400">Next service</p>
                <p className="mt-2 text-2xl font-bold transition-colors group-hover:text-teal-200 md:text-3xl">{next.title}</p>
              </div>
              <ArrowRight className="h-6 w-6 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-teal-200" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
