"use client";

/* Landing hero — "Refined Motion" direction.
   Keeps the brand teal/orange + real copy and the three existing CTAs, but the
   orbit is now a living, counter-rotating diagram and the copy scroll-reveals.
   Respects prefers-reduced-motion (handled inside the shared primitives). */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useTransform, animate, type Variants } from "framer-motion";
import { Code2, Compass, Sparkles, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, Magnetic, WordReveal } from "@/components/lab/primitives";
import { asset } from "@/lib/utils";

/* Deterministic "random" so SSR and client markup match (no hydration drift,
   and no Math.random which is unavailable in some build sandboxes). */
const PARTICLES = Array.from({ length: 14 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12543.4321;
  const r1 = a - Math.floor(a);
  const r2 = b - Math.floor(b);
  return {
    left: 4 + r1 * 92, // %
    size: 3 + Math.round(r2 * 5), // px
    delay: r1 * 6, // s
    duration: 9 + r2 * 9, // s
    teal: i % 3 === 0,
  };
});

/* Floating spark particles rising through the hero for depth. */
function Particles({ reduce }: { reduce: boolean | null }) {
  if (reduce) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute bottom-0 rounded-full ${p.teal ? "bg-teal-700/30" : "bg-orange-500/30"}`}
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: [-20, -480], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

const orbitNodes = [
  { label: "Software Development", icon: Code2, angle: -90, tone: "teal", href: "/services/software-development" },
  { label: "Consultancy & Advisory", icon: Compass, angle: 0, tone: "orange", href: "/services/consultancy" },
  { label: "Startup & Venture Development", icon: Sparkles, angle: 90, tone: "teal", href: "/services/innovative-startups" },
  { label: "Freelancing Services", icon: Users, angle: 180, tone: "orange", href: "/services/digital-freelancing" },
] as const;

/* Drag-to-spin orbit.
   Rotation is a single MotionValue driven by an rAF loop for auto-spin. On
   pointer-down we capture the angle to the center and follow the cursor; on
   release we apply the fling velocity as momentum, then auto-spin resumes.
   Each node counter-rotates by -rotation so labels stay upright at all times. */
function OrbitRing({ reduce }: { reduce: boolean | null }) {
  const ringRef = useRef<HTMLDivElement>(null);
  const rotation = useMotionValue(0);
  const counter = useTransform(rotation, (r) => -r);

  // drag bookkeeping
  const drag = useRef({ active: false, startPointer: 0, startRot: 0, lastAngle: 0, lastT: 0, vel: 0, moved: false });
  // whether auto-spin is currently allowed (paused while dragging / momentum)
  const autoRef = useRef(!reduce);

  // angle (deg) of a pointer event relative to the ring center
  function pointerAngle(e: PointerEvent | React.PointerEvent) {
    const el = ringRef.current;
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    return (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI;
  }

  // auto-spin rAF loop (anti-clockwise ≈ -360deg / 50s)
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let prev = 0;
    const DEG_PER_MS = -360 / 50000;
    const tick = (t: number) => {
      if (prev && autoRef.current && !drag.current.active) {
        rotation.set(rotation.get() + (t - prev) * DEG_PER_MS);
      }
      prev = t;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, rotation]);

  function onPointerDown(e: React.PointerEvent) {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    const a = pointerAngle(e);
    drag.current = { active: true, startPointer: a, startRot: rotation.get(), lastAngle: a, lastT: performance.now(), vel: 0, moved: false };
    autoRef.current = false;
  }

  function onPointerMove(e: React.PointerEvent) {
    const d = drag.current;
    if (!d.active) return;
    const a = pointerAngle(e);
    let delta = a - d.lastAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const now = performance.now();
    const dt = now - d.lastT || 16;
    d.vel = delta / dt; // deg per ms
    d.lastAngle = a;
    d.lastT = now;
    if (Math.abs(a - d.startPointer) > 2) d.moved = true;
    rotation.set(rotation.get() + delta);
  }

  function endDrag() {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    // momentum: fling proportional to release velocity, decaying out
    const fling = Math.max(-220, Math.min(220, d.vel * 220));
    animate(rotation, rotation.get() + fling, {
      type: "decay",
      power: 0.5,
      timeConstant: 350,
      onComplete: () => { autoRef.current = !reduce; },
    });
    // safety: resume auto-spin shortly even if decay is tiny
    window.setTimeout(() => { autoRef.current = !reduce; }, 600);
  }

  return (
    <motion.div
      ref={ringRef}
      data-faction-manual
      className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing"
      style={{ rotate: rotation }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      {orbitNodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const left = `${50 + Math.cos(rad) * 42}%`;
        const top = `${50 + Math.sin(rad) * 42}%`;
        const isTeal = node.tone === "teal";
        const Icon = node.icon;
        return (
          <motion.div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left, top, rotate: counter }}
          >
            <Link
              href={node.href}
              aria-label={node.label}
              draggable={false}
              onClick={(e) => {
                // A drag shouldn't fire a navigation.
                if (drag.current.moved) { e.preventDefault(); return; }
                // Faction nodes enter via their themed page transition.
                const theme =
                  node.href === "/services/innovative-startups"
                    ? "cinematic"
                    : node.href === "/services/consultancy"
                    ? "editorial"
                    : node.href === "/services/digital-freelancing"
                    ? "vertigo"
                    : null;
                if (theme && !reduce) {
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                  e.preventDefault();
                  window.dispatchEvent(
                    new CustomEvent("pvp:faction-go", { detail: { href: node.href, label: node.label, theme } })
                  );
                }
              }}
              className="group flex flex-col items-center rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            >
              <motion.span
                className={`flex h-11 w-11 items-center justify-center rounded-full text-paper shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16 md:h-20 md:w-20 ${
                  isTeal ? "bg-teal-900" : "bg-orange-600"
                }`}
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon className="h-5 w-5 sm:h-7 sm:w-7 md:h-9 md:w-9" strokeWidth={1.75} aria-hidden="true" />
              </motion.span>
              <span className="mt-1.5 max-w-[72px] select-none text-center text-[10px] font-semibold leading-tight text-ink group-hover:text-teal-900 sm:mt-2 sm:max-w-[110px] sm:text-xs md:max-w-[140px] md:text-sm">
                {node.label}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function HeroLanding() {
  const reduce = useReducedMotion();

  // One-time intro orchestration on first paint.
  const introContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const introItem: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-paper-warm via-paper to-mist">
      {/* dot grid */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-50">
        <defs>
          <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#1a5b64" fillOpacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* drifting gradient blobs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-50 blur-[2px]"
        style={{ background: "radial-gradient(circle, rgba(253,226,207,0.95) 0%, transparent 70%)" }}
        animate={reduce ? undefined : { x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-[320px] w-[320px] rounded-full opacity-30 blur-[2px]"
        style={{ background: "radial-gradient(circle, rgba(194,218,220,0.8) 0%, transparent 70%)" }}
        animate={reduce ? undefined : { x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full opacity-30 blur-[2px]"
        style={{ background: "radial-gradient(circle, rgba(253,226,207,0.7) 0%, transparent 70%)" }}
        animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* rising spark particles */}
      <Particles reduce={reduce} />

      <div className="container-content relative grid items-center gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-24">
        {/* Left — copy (one-time intro stagger) */}
        <motion.div className="md:col-span-6" variants={introContainer} initial="hidden" animate="show">
          <motion.span
            variants={introItem}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-900/15 bg-paper/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal-900 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-600" />
            </span>
            AI-First Innovation Ecosystem
          </motion.span>

          <motion.h1 variants={introItem} className="text-display-xl text-ink">
            <WordReveal text="Building the Future Through Technology," delay={0.2} />{" "}
            <WordReveal
              text="Innovation & Venture Development"
              delay={0.55}
              highlight="Innovation & Venture Development"
              highlightClassName="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-[hero-sheen_5s_linear_infinite]"
            />
          </motion.h1>

          <motion.div variants={introItem} className="mt-8 inline-block">
            <motion.span
              className="block h-1 rounded-full bg-orange-600"
              initial={reduce ? { width: "4rem" } : { width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          <motion.p variants={introItem} className="text-body mt-8 max-w-lg text-ink-muted md:text-[1.0625rem]">
            Pak Venture Point (PVP) is an AI-first innovation ecosystem delivering software
            solutions, strategic consultancy, freelancing operations, and startup development
            services designed for sustainable growth and digital transformation.
          </motion.p>

          <motion.div
            variants={introItem}
            className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
              <Magnetic strength={0.25}>
                <Button href="/services" size="lg" variant="primary" className="w-full justify-center sm:w-auto">
                  Explore Services
                </Button>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Button href="/contact?topic=partner" size="lg" variant="outline" className="w-full justify-center sm:w-auto">
                  Partner With Us
                </Button>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Button href="/ventures" size="lg" variant="secondary" className="w-full justify-center sm:w-auto">
                  Launch Your Venture
                </Button>
              </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right — LIVING orbit with logo center (scales in on first paint) */}
        <motion.div
          className="md:col-span-6"
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[440px] md:max-w-[560px]">
            {/* aurora glow behind the orbit */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[8%] rounded-full opacity-60 blur-2xl"
              style={{ background: "conic-gradient(from 0deg, rgba(42,138,146,0.25), rgba(233,119,36,0.25), rgba(42,138,146,0.25))" }}
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            {/* rotating rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-teal-900/15"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[14%] rounded-full border-2 border-dashed border-orange-600/20"
              animate={reduce ? undefined : { rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />

            {/* center logo */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="relative h-24 w-24 rounded-full bg-paper p-3 shadow-[0_20px_60px_-20px_rgba(26,91,100,0.5)] ring-1 ring-teal-900/10 sm:h-40 sm:w-40 sm:p-4 md:h-52 md:w-52"
                animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={asset("/logo.png")} alt="PVP" fill className="object-contain p-2" priority />
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full ring-2 ring-orange-600/40"
                  animate={reduce ? undefined : { scale: [1, 1.5], opacity: [0.55, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                />
              </motion.div>
            </div>

            {/* Interactive: drag to spin. Nodes link to each service. */}
            <OrbitRing reduce={reduce} />

            {/* drag affordance hint */}
            <span className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 select-none text-[10px] font-medium uppercase tracking-wider text-ink-muted/70 sm:text-xs">
              Drag to spin
            </span>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-muted/60 md:flex"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
