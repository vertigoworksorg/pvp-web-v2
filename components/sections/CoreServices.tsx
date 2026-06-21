"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Code2, Compass, Sparkles, Users, type LucideIcon } from "lucide-react";
import { asset } from "@/lib/utils";
import { FactionLink } from "@/components/transition/FactionLink";

// Each faction service carries its identity everywhere it appears, so users
// learn to expect it before clicking:
//   Venture     -> dark cinematic
//   Consultancy -> bold editorial
const VENTURE_HREF = "/services/innovative-startups";
const CONSULT_HREF = "/services/consultancy";

type Tone = "teal" | "orange";

type Service = {
  number: string;
  icon: LucideIcon;
  tone: Tone;
  title: string;
  blurb: string;
  capabilities: string[];
  image: string;
  href: string;
};

const services: Service[] = [
  {
    number: "01",
    icon: Code2,
    tone: "teal",
    title: "Software Development",
    blurb: "We build smart, scalable and secure digital solutions tailored to your business needs.",
    capabilities: ["Web Development", "Mobile Applications", "ERP & SaaS", "AI & Automation", "UI/UX Design", "Cloud & DevOps"],
    image: "/images/services/software.jpg",
    href: "/services/software-development",
  },
  {
    number: "02",
    icon: Users,
    tone: "orange",
    title: "Freelancing Services",
    blurb: "Access skilled talent and remote expertise to accelerate your projects and operations.",
    capabilities: ["Remote Development", "Digital Marketing", "Graphic Design", "Content Writing", "Technical Support", "Outsourced Ops"],
    image: "/images/services/freelancing.jpg",
    href: "/services/digital-freelancing",
  },
  {
    number: "03",
    icon: Compass,
    tone: "teal",
    title: "Consultancy & Advisory",
    blurb: "Strategic guidance and practical solutions to strengthen organizations and drive growth.",
    capabilities: ["Strategic Planning", "Org Development", "M&E & Research", "Proposal Development", "Business Consultancy", "Capacity Building"],
    image: "/images/services/consultancy.jpg",
    href: "/services/consultancy",
  },
  {
    number: "04",
    icon: Sparkles,
    tone: "orange",
    title: "Startup & Venture Development",
    blurb: "We incubate ideas, build ventures and connect founders with opportunities to scale globally.",
    capabilities: ["Startup Incubation", "Product Development", "Venture Building", "Investor Networking", "Acceleration", "Innovation Mgmt"],
    image: "/images/services/startup.jpg",
    href: "/services/innovative-startups",
  },
];

const AUTO_MS = 6000;

const tone = {
  teal: {
    text: "text-teal-900",
    bg: "bg-teal-900",
    ring: "ring-teal-900",
    chipBg: "bg-teal-50",
    chipText: "text-teal-900",
    tabActive: "border-teal-900 bg-teal-900 text-paper",
  },
  orange: {
    text: "text-orange-600",
    bg: "bg-orange-600",
    ring: "ring-orange-600",
    chipBg: "bg-orange-50",
    chipText: "text-orange-700",
    tabActive: "border-orange-600 bg-orange-600 text-paper",
  },
} as const;

export function CoreServices() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Restart the interval on every slide change (manual or auto) so the JS timer
  // stays in phase with the keyed CSS progress bar; `cycle` re-syncs after the
  // tab returns to the foreground.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    timer.current = setInterval(() => setActive((a) => (a + 1) % services.length), AUTO_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, active, cycle]);

  // Mobile browsers throttle setInterval and freeze CSS animations while the
  // page is backgrounded/locked; on return, re-sync so the bar and timer don't
  // sit stuck at full.
  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === "visible") setCycle((c) => c + 1);
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  const s = services[active];
  const t = tone[s.tone];
  const ActiveIcon = s.icon;
  const isVenture = s.href === VENTURE_HREF;
  const isConsult = s.href === CONSULT_HREF;

  return (
    <section id="services" className="relative overflow-hidden bg-mist py-10 md:py-14">
      {/* dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(26,91,100,0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container-content relative">
        {/* Heading */}
        <div className="grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-eyebrow text-orange-600">What We Do</p>
            <h2 className="text-display-2xl mt-3 text-ink">
              CORE <span className="text-orange-600">SERVICES</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <div className="border-l-4 border-teal-900 pl-4">
              <h3 className="font-display text-lg font-bold leading-tight text-ink md:text-xl">
                One ecosystem. Multiple solutions.
              </h3>
              <p className="text-body-sm mt-2 text-ink-muted">
                Integrated services across technology, freelancing, consultancy and venture
                development — built to help you innovate, scale and succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Tab selector */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isActive = i === active;
            const tt = tone[svc.tone];
            const venture = svc.href === VENTURE_HREF;
            const consult = svc.href === CONSULT_HREF;
            // Each faction tab signals its identity when active: a dark glowing
            // pill (venture) or a hard ink block (consultancy / editorial).
            const activeClass = venture
              ? "border-teal-300/40 bg-[#07110f] text-white shadow-[0_10px_40px_-10px_rgba(42,138,146,0.7)]"
              : consult
              ? "rounded-md border-ink bg-ink text-paper shadow-[4px_4px_0_0_#e97724]"
              : tt.tabActive + " shadow-lg";
            const iconActiveClass = venture
              ? "bg-gradient-to-br from-teal-400/30 to-orange-400/20 text-teal-200 ring-1 ring-white/15"
              : consult
              ? "rounded-md bg-orange-600 text-paper"
              : "bg-paper/15 text-paper";
            return (
              <button
                key={svc.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={
                  "flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 " +
                  (isActive
                    ? activeClass
                    : "border-rule bg-paper text-ink hover:-translate-y-0.5 hover:border-teal-700")
                }
              >
                <span
                  className={
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg " +
                    (isActive ? iconActiveClass : `${tt.chipBg} ${tt.chipText}`)
                  }
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold">{svc.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Showcase */}
        <div
          className={
            "mt-6 overflow-hidden transition-colors duration-500 " +
            (isVenture
              ? "rounded-3xl border border-white/10 bg-[#07110f] shadow-[0_50px_120px_-40px_rgba(42,138,146,0.55)]"
              : isConsult
              ? "rounded-none border-2 border-ink bg-paper-warm shadow-[8px_8px_0_0_#0b2a30]"
              : "rounded-3xl border border-rule bg-paper shadow-[0_40px_80px_-40px_rgba(11,42,48,0.3)]")
          }
          onMouseEnter={() => {
            // Hover-pause only on devices with a real pointer. On touch, a tap
            // fires mouseenter with no reliable mouseleave, which would otherwise
            // strand paused=true and freeze the carousel permanently.
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) setPaused(true);
          }}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[460px]">
              {services.map((svc, i) => (
                <Image
                  key={svc.image}
                  src={asset(svc.image)}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={
                    "object-cover transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] " +
                    (i === active ? "scale-100 opacity-100" : "scale-105 opacity-0")
                  }
                  priority={i === 0}
                />
              ))}
              {/* tint + overlay badge — per-faction treatment */}
              <div
                aria-hidden="true"
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: isVenture
                    ? "linear-gradient(180deg, rgba(7,17,15,0.45) 0%, rgba(7,17,15,0.88) 100%)"
                    : isConsult
                    ? "linear-gradient(180deg, rgba(11,42,48,0.25) 0%, rgba(11,42,48,0.7) 100%)"
                    : "linear-gradient(180deg, rgba(7,24,46,0.15) 0%, rgba(7,24,46,0.55) 100%)",
                }}
              />
              {isVenture && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full opacity-70 blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(42,138,146,0.55), transparent 65%)" }}
                />
              )}
              {isConsult && (
                // hard orange editorial block accent
                <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-orange-600" />
              )}
              <div className="absolute left-5 top-5 flex items-center gap-3">
                <span
                  className={
                    "flex h-12 w-12 items-center justify-center text-paper shadow-lg " +
                    (isConsult ? "rounded-none bg-ink" : `rounded-xl ${t.bg}`)
                  }
                >
                  <ActiveIcon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="font-display text-5xl font-extrabold text-paper/90">{s.number}</span>
              </div>
              <div className="absolute inset-x-5 bottom-5">
                <h3 className={"font-display text-2xl font-bold text-paper md:text-3xl " + (isConsult ? "uppercase tracking-tight" : "")}>
                  {s.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div key={active} className="flex flex-col justify-center p-8 md:p-12 motion-safe:animate-[fadeUp_0.4s_ease]">
              <p className={"text-body-lg " + (isVenture ? "text-white" : isConsult ? "text-ink" : "text-ink")}>{s.blurb}</p>

              <p
                className={
                  "mt-8 text-[11px] uppercase tracking-[0.12em] " +
                  (isVenture ? "font-mono text-teal-200/70" : isConsult ? "font-bold text-ink" : "font-mono text-ink-muted")
                }
              >
                What&apos;s included
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
                {s.capabilities.map((c) => (
                  <li key={c} className={"flex items-center gap-2.5 text-body-sm " + (isVenture ? "text-white/80" : "text-ink")}>
                    <span
                      className={
                        "flex h-5 w-5 shrink-0 items-center justify-center " +
                        (isVenture
                          ? "rounded-full bg-gradient-to-br from-teal-400 to-orange-400"
                          : isConsult
                          ? "rounded-none bg-ink"
                          : "rounded-full " + t.bg)
                      }
                    >
                      <Check className={"h-3 w-3 " + (isVenture ? "text-[#07110f]" : "text-paper")} strokeWidth={3.5} aria-hidden="true" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              {isVenture ? (
                <FactionLink
                  href={s.href}
                  label="Startup & Venture Development"
                  theme="cinematic"
                  className="group mt-8 inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-teal-400 to-teal-300 px-6 py-3 font-semibold text-[#07110f] shadow-[0_0_40px_-8px_rgba(42,138,146,0.9)] transition-shadow hover:shadow-[0_0_60px_-6px_rgba(42,138,146,1)]"
                >
                  Enter the venture studio
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </FactionLink>
              ) : isConsult ? (
                <FactionLink
                  href={s.href}
                  label="Consultancy & Advisory"
                  theme="editorial"
                  className="group mt-8 inline-flex items-center gap-2 self-start bg-ink px-6 py-3 font-bold uppercase tracking-wide text-paper transition-colors hover:bg-orange-600"
                >
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </FactionLink>
              ) : (
                <Link
                  href={s.href}
                  className={`group mt-8 inline-flex items-center gap-2 self-start rounded-sm px-5 py-3 font-semibold text-paper transition-colors ${t.bg} hover:opacity-90`}
                >
                  Explore {s.title.split(" ")[0]}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>

          {/* progress bar */}
          <div className={"h-1 w-full " + (isVenture ? "bg-white/10" : isConsult ? "bg-ink/15" : "bg-rule/60")}>
            <div
              key={`bar-${active}-${cycle}`}
              className={
                "h-full w-full origin-left motion-safe:animate-[grow_linear] " +
                (isVenture ? "bg-gradient-to-r from-teal-300 to-orange-300" : isConsult ? "bg-ink" : t.bg)
              }
              style={{ animationDuration: `${AUTO_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-sm bg-teal-900 px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-teal-950"
          >
            Explore all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <span className="text-lg italic text-ink-muted">Let&apos;s build the future together.</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px) } to { opacity:1; transform:none } }
        @keyframes grow { from { transform: scaleX(0) } to { transform: scaleX(1) } }
      `}</style>
    </section>
  );
}
