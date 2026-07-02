"use client";

/* SOFTWARE DEVELOPMENT faction — "Shahan Naqvi v2" clean-SaaS design system,
   fully built out: interactive + animated, richly filled (no empty whitespace).
   Electric blue (#1B5AFF) + soft indigo (#6457E8), Fraunces + DM Sans.
   Sections: hero (cursor glow, word-reveal, live shipping card) → tech marquee →
   stats → deliverables → product-UI showcase → delivery pipeline → architecture
   diagram → capabilities matrix → who it's for → engagement → FAQ → CTA.
   Pure SVG/CSS visuals (static-export safe), reduced-motion safe, honest (no
   fabricated clients/logos/metrics). Scoped under `.sn-root`. */

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { Globe, Smartphone, Cloud, Cpu, Palette, LifeBuoy, ArrowUpRight, ArrowRight, Check, Plus, type LucideIcon } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";
import { Reveal, Stagger, StaggerItem, Magnetic, Tilt, CountUp, WordReveal, Marquee } from "@/components/lab/primitives";

const DELIV_ICONS: LucideIcon[] = [Globe, Smartphone, Cloud, Cpu, Palette, LifeBuoy];
const TECH = ["Next.js", "React", "Flutter", "Node.js", "ERP & SaaS", "AI / LLM", "Cloud"];
const MARQUEE_TECH = ["Next.js", "React", "TypeScript", "Node.js", "Flutter", "AI / LLM", "Cloud", "ERP & SaaS", "UI / UX", "Automation"];
const CARD_TONE = ["default", "blue", "indigo", "blend"] as const;

const PIPELINE = [
  { n: "01", title: "Discover", body: "Map the problem, users and metrics." },
  { n: "02", title: "Design", body: "Architecture & experience, prototyped." },
  { n: "03", title: "Build", body: "Ship in tight, measurable increments." },
  { n: "04", title: "Scale", body: "Optimize, automate and grow." },
];

const ARCH_TIERS = [
  { over: "Layer 01", title: "Client apps", sub: "What people touch", accent: "var(--blue)", chips: [["Web", "Next.js / React"], ["Mobile", "Flutter"], ["Admin", "Dashboards"]] },
  { over: "Layer 02", title: "API & services", sub: "The typed contract", accent: "var(--indigo)", chips: [["REST / RPC", "Type-safe"], ["Auth", "Sessions / JWT"], ["Jobs", "Queues / cron"], ["AI / LLM", "Agents"]] },
  { over: "Layer 03", title: "Cloud & data", sub: "Where it lives", accent: "var(--blue)", chips: [["Postgres", "Primary store"], ["Storage", "Files / blobs"], ["CDN", "Edge cache"]] },
] as const;

const MATRIX: { icon: LucideIcon; area: string; blurb: string; tags: string[] }[] = [
  { icon: Globe, area: "Web apps & sites", blurb: "Fast, accessible product surfaces.", tags: ["Next.js", "React", "SSR / static", "Design systems", "SEO-ready"] },
  { icon: Smartphone, area: "Mobile apps", blurb: "One codebase, iOS + Android.", tags: ["Flutter", "Cross-platform", "Offline-first", "Push"] },
  { icon: Cloud, area: "ERP · SaaS · Cloud", blurb: "Multi-tenant platforms that scale.", tags: ["Multi-tenant", "Billing & roles", "APIs", "CI/CD"] },
  { icon: Cpu, area: "AI & automation", blurb: "LLMs and workflows that do real work.", tags: ["LLM integration", "RAG", "Workflow automation", "Pipelines"] },
  { icon: Palette, area: "UI / UX design", blurb: "Interfaces designed, not decorated.", tags: ["Product design", "Prototyping", "Design systems", "Accessibility"] },
  { icon: LifeBuoy, area: "Support & maintenance", blurb: "We stay after go-live.", tags: ["30-day window", "Monitoring", "Iteration", "Feature work"] },
];

const FAQ: { q: string; a: string }[] = [
  { q: "How do you scope a project before we commit?", a: "We start with a 30-minute discovery call, then return a written scope summary within 48 hours — goals, core features, a phased build plan and an honest estimate range. Nothing is locked until you've read it and agreed. For larger builds we run a short discovery sprint so the estimate is grounded in real architecture rather than guesswork." },
  { q: "What are typical timelines?", a: "It depends entirely on scope, so we won't quote a fixed number here. We ship in tight, measurable increments rather than one big-bang delivery — you'll see working software early and often. A focused MVP moves faster than a full ERP rollout; the scope summary sets a realistic milestone plan for your project." },
  { q: "What stack do you build on, and can we influence it?", a: "We're TypeScript-first: Next.js and React on the web, Flutter for mobile, Node.js on the back end, plus cloud and AI/LLM integration where it earns its place. We choose tools that fit your problem and your team's ability to maintain them — if you have an existing stack or preference, we work with it rather than forcing a rewrite." },
  { q: "Who owns the code and how does handover work?", a: "You do. On delivery you receive the full source in your own repository, documentation, and a walkthrough for your team. There's no lock-in and no proprietary black box — everything is built to be read, extended and maintained by other engineers, including your own." },
  { q: "What happens after launch?", a: "Every build includes a 30-day support window for fixes and adjustments after go-live. Beyond that we offer ongoing support and maintenance engagements — monitoring, iteration and new features — but it's optional. If you'd rather run it in-house, the handover is designed to make that clean." },
];

function Crosshair({ className, color = "#1B5AFF" }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" style={{ opacity: 0.3 }}>
      <line x1="10" y1="2" x2="10" y2="18" stroke={color} strokeWidth="1" />
      <line x1="2" y1="10" x2="18" y2="10" stroke={color} strokeWidth="1" />
    </svg>
  );
}

/* Reusable decorative background layer — kills empty whitespace. */
function SectionTexture({
  variant = "plain",
  blobs = true,
  crosshairs = true,
  squares = true,
  reduce = false,
}: {
  variant?: "plain" | "blue" | "indigo" | "blend" | "soft";
  blobs?: boolean;
  crosshairs?: boolean;
  squares?: boolean;
  reduce?: boolean | null;
}) {
  const V = {
    plain: { a: "#1B5AFF", b: "#6457E8", dot: "#1B5AFF12" },
    blue: { a: "#1B5AFF", b: "#1B5AFF", dot: "#1B5AFF16" },
    indigo: { a: "#6457E8", b: "#6457E8", dot: "#6457E816" },
    blend: { a: "#1B5AFF", b: "#6457E8", dot: "#6457E812" },
    soft: { a: "#1B5AFF", b: "#6457E8", dot: "#1B5AFF0E" },
  }[variant];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle,${V.dot} 1.2px,transparent 1.2px)`,
          backgroundSize: "28px 28px",
          WebkitMaskImage: "linear-gradient(180deg,#000 0%,#0006 45%,#0003 65%,transparent 100%)",
          maskImage: "linear-gradient(180deg,#000 0%,#0006 45%,#0003 65%,transparent 100%)",
        }}
      />
      {blobs && (
        <>
          <motion.div className="absolute -right-24 -top-28 h-[380px] w-[380px] rounded-full" style={{ background: `radial-gradient(circle,${V.a}14,transparent 68%)` }} animate={reduce ? undefined : { x: [0, -26, 0], y: [0, 22, 0] }} transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -left-24 bottom-[-120px] h-[320px] w-[320px] rounded-full" style={{ background: `radial-gradient(circle,${V.b}12,transparent 70%)` }} animate={reduce ? undefined : { x: [0, 28, 0], y: [0, -18, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
        </>
      )}
      {crosshairs && (
        <>
          <Crosshair className="absolute left-6 top-6 hidden md:block" />
          <Crosshair className="absolute right-6 bottom-6 hidden md:block" color="#6457E8" />
        </>
      )}
      {squares && (
        <>
          <motion.span className="absolute left-[14%] top-[22%] hidden h-2 w-2 rounded-[3px] md:block" style={{ background: V.a, opacity: 0.28 }} animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.span className="absolute right-[18%] top-[42%] hidden h-1.5 w-1.5 rounded-[2px] md:block" style={{ background: V.b, opacity: 0.26 }} animate={reduce ? undefined : { y: [0, 9, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} />
        </>
      )}
    </div>
  );
}

function TechGlyph({ i }: { i: number }) {
  const c = i % 2 ? "var(--indigo)" : "var(--blue)";
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shrink-0">
      <circle cx="7" cy="7" r="3.4" fill="none" stroke={c} strokeWidth="1.4" />
      <circle cx="7" cy="7" r="1.1" fill={c} />
    </svg>
  );
}

function MarqueeRow({ items, reverse, reduce }: { items: string[]; reverse?: boolean; reduce?: boolean | null }) {
  const pills = items.map((t, i) => (
    <span key={`${t}-${i}`} className={"sn-mq-pill " + (i % 2 ? "sn-tag-i" : "sn-tag-b")}>
      <TechGlyph i={i} />
      {t}
    </span>
  ));
  if (reduce) return <div className="flex flex-wrap justify-center gap-3 px-4">{pills}</div>;
  return (
    <Marquee speed={reverse ? 46 : 40} reverse={reverse}>
      <div className="flex shrink-0 items-center gap-3">{pills}</div>
    </Marquee>
  );
}

/* Live delivery-status card for the hero. */
function ShippingCard({ reduce }: { reduce: boolean | null }) {
  const stages = ["Discovery & scope", "Design & architecture", "Build & ship"];
  return (
    <div className="relative rounded-2xl border border-[#E2E6EF] bg-white/80 p-6 shadow-[0_30px_60px_-40px_rgba(13,17,54,.4)] backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-70" />}
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
        </span>
        <p className="sn-over" style={{ color: "var(--blue)" }}>Currently shipping</p>
      </div>
      <p className="sn-disp mt-2 text-xl font-semibold text-[#0D1136]">Scoped. Shipped. Maintained.</p>
      <div className="mt-5 space-y-2.5">
        {stages.map((s, i) => (
          <motion.div key={s} className="flex items-center gap-2.5 text-[13px]" initial={reduce ? false : { opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}>
            <span className="flex h-4 w-4 items-center justify-center rounded-full" style={{ background: i < 2 ? "var(--blue)" : "var(--indigo)" }}>
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={4} />
            </span>
            <span style={{ color: "var(--g600)" }}>{s}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 h-[6px] w-full overflow-hidden rounded-full" style={{ background: "var(--g200)" }}>
        <motion.div className="relative h-full rounded-full" style={{ background: "linear-gradient(90deg,#1B5AFF,#6457E8)" }} initial={reduce ? false : { width: "0%" }} whileInView={{ width: "78%" }} viewport={{ once: true }} transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          <span className="absolute right-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white" style={{ background: "var(--indigo)" }} />
        </motion.div>
      </div>
      <p className="mt-2 text-[11px]" style={{ color: "var(--g400)" }}>30-day support window included with every build</p>
    </div>
  );
}

/* Illustrative product UI — a browser frame + dashboard. Not a real product. */
function ProductMockup({ reduce }: { reduce: boolean | null }) {
  const nav = ["Overview", "Projects", "Pipeline", "Reports", "Settings"];
  const kpis = [
    { k: "Active builds", to: 12, suffix: "", t: "+3" },
    { k: "Deploys / wk", to: 48, suffix: "", t: "+18%" },
    { k: "Uptime", to: 99, suffix: ".9%", t: "SLA" },
  ];
  const rows = [
    { av: "AX", name: "Atlas ERP", tone: "var(--blue)", env: "Production", status: "rn", label: "Live", pct: 1 },
    { av: "NV", name: "Nova Mobile", tone: "var(--indigo)", env: "Staging", status: "rn", label: "Shipping", pct: 0.66 },
    { av: "QD", name: "Quanta Dashboard", tone: "var(--blue-dark)", env: "Preview", status: "wt", label: "In review", pct: 0.4 },
  ];
  const linePts = "0,84 40,72 80,78 120,52 160,58 200,34 240,40 280,20 312,14";
  const areaPath = "M0,84 L40,72 L80,78 L120,52 L160,58 L200,34 L240,40 L280,20 L312,14 L312,120 L0,120 Z";
  const bars = [46, 62, 40, 74, 55, 88, 70, 96];
  return (
    <motion.div className="sn-mock" animate={reduce ? undefined : { y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
      <div className="sn-mock-bar">
        <div className="sn-dots">
          <i style={{ background: "var(--g300)" }} />
          <i style={{ background: "var(--blue-mid)" }} />
          <i style={{ background: "var(--blue)" }} />
        </div>
        <div className="sn-url">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flex: "none" }}>
            <rect x="4" y="10" width="16" height="11" rx="2" stroke="var(--g400)" strokeWidth="2" />
            <path d="M8 10V7a4 4 0 018 0v3" stroke="var(--g400)" strokeWidth="2" />
          </svg>
          <span>app.yourplatform.io/overview</span>
        </div>
        <span className="sn-badge rn" style={{ fontSize: "9.5px" }}>Live</span>
      </div>
      <div className="sn-app">
        <aside className="sn-side" aria-hidden>
          <div className="sn-side-logo">
            <span className="sn-ico" style={{ width: 26, height: 26, borderRadius: 8 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M4 7l8-4 8 4-8 4-8-4z" fill="#fff" opacity=".95" />
                <path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
              </svg>
            </span>
            <b>Console</b>
          </div>
          {nav.map((n, i) => (
            <div key={n} className={"sn-nav" + (i === 0 ? " on" : "")}>
              <span className="d" />
              {n}
            </div>
          ))}
        </aside>
        <div className="sn-main">
          <div className="sn-topline">
            <h4>Delivery overview</h4>
            <span className="sn-chipbtn">This week</span>
          </div>
          <div className="sn-kpis">
            {kpis.map((kp) => (
              <div className="sn-kpi" key={kp.k}>
                <div className="k">{kp.k}</div>
                <div className="v"><CountUp to={kp.to} suffix={kp.suffix} duration={1.4} /></div>
                <div className="t">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2 8l3-3 2 2 3-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {kp.t}
                </div>
              </div>
            ))}
          </div>
          <div className="sn-charts">
            <div className="sn-panel">
              <div className="ph">
                <b>Throughput</b>
                <div className="sn-legend"><i className="lg-b">Shipped</i><i className="lg-i">Planned</i></div>
              </div>
              <svg viewBox="0 0 320 120" width="100%" height="auto" aria-hidden style={{ display: "block" }}>
                <defs>
                  <linearGradient id="snArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1B5AFF" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#1B5AFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="snStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1B5AFF" />
                    <stop offset="100%" stopColor="#6457E8" />
                  </linearGradient>
                </defs>
                {[24, 52, 80].map((y) => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="var(--g100)" strokeWidth="1" />)}
                <motion.path d={areaPath} fill="url(#snArea)" initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} />
                <motion.polyline points={linePts} fill="none" stroke="url(#snStroke)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} />
                <motion.circle cx="312" cy="14" r="4" fill="#6457E8" stroke="#fff" strokeWidth="2" initial={reduce ? false : { opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.3 }} />
              </svg>
            </div>
            <div className="sn-panel">
              <div className="ph"><b>Velocity</b></div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 92, padding: "6px 2px 0" }}>
                {bars.map((h, i) => (
                  <motion.div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "4px 4px 2px 2px", transformOrigin: "bottom", background: i % 2 ? "var(--indigo)" : "var(--blue)", opacity: i % 2 ? 0.85 : 1 }} initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }} />
                ))}
              </div>
            </div>
          </div>
          <div className="sn-tbl">
            <div className="sn-trow">
              <div>Project</div>
              <div className="col hide-sm">Environment</div>
              <div className="col">Progress</div>
              <div>Status</div>
            </div>
            {rows.map((r) => (
              <div className="sn-trow" key={r.name}>
                <div className="who"><span className="av" style={{ background: r.tone }}>{r.av}</span><span>{r.name}</span></div>
                <div className="col hide-sm">{r.env}</div>
                <div className="col">
                  <div style={{ height: 5, borderRadius: 999, background: "var(--g200)", overflow: "hidden" }}>
                    <motion.div style={{ height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#1B5AFF,#6457E8)", transformOrigin: "left" }} initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: r.pct }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} />
                  </div>
                </div>
                <div><span className={"sn-badge " + r.status}>{r.label}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sn-floatstat">
        <svg className="ring" viewBox="0 0 36 36" aria-hidden>
          <circle cx="18" cy="18" r="15" fill="none" stroke="var(--g200)" strokeWidth="4" />
          <motion.circle cx="18" cy="18" r="15" fill="none" stroke="var(--blue)" strokeWidth="4" strokeLinecap="round" transform="rotate(-90 18 18)" style={{ strokeDasharray: 94.2, strokeDashoffset: reduce ? 94.2 * (1 - 0.87) : undefined }} initial={reduce ? false : { strokeDashoffset: 94.2 }} whileInView={{ strokeDashoffset: 94.2 * (1 - 0.87) }} viewport={{ once: true }} transition={{ duration: 1.3, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} />
        </svg>
        <div>
          <div className="n"><CountUp to={87} suffix="%" duration={1.5} /></div>
          <div className="l">On-time delivery</div>
        </div>
      </div>
    </motion.div>
  );
}

/* Vertical animated connector between stacked architecture tiers. */
function ArchConnector({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="sn-arch-conn" aria-hidden>
      <span className="sn-arch-conn-line" />
      {!reduce && (
        <motion.span className="sn-arch-conn-dot" initial={{ top: "-8%", opacity: 0 }} animate={{ top: ["-8%", "108%"], opacity: [0, 1, 1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.7, ease: "easeInOut" }} />
      )}
    </div>
  );
}

function ArchDiagram({ reduce }: { reduce: boolean | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  return (
    <div ref={ref} className="mt-10">
      {ARCH_TIERS.map((t, ti) => (
        <div key={t.title}>
          <Reveal delay={ti * 0.15} y={26}>
            <Tilt max={4} className="sn-arch-card">
              <span className="sn-arch-card-bar" style={{ background: t.accent }} />
              <div className="sn-arch-card-head">
                <div>
                  <p className="sn-over" style={{ color: t.accent }}>{t.over}</p>
                  <h3 className="sn-disp sn-arch-card-title">{t.title}</h3>
                  <p className="sn-arch-card-sub">{t.sub}</p>
                </div>
                <span className="sn-arch-glyph" style={{ color: t.accent }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M4 12l8 4 8-4M4 16.5l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.55" />
                  </svg>
                </span>
              </div>
              <div className="sn-arch-chips">
                {t.chips.map(([label, d], ci) => (
                  <motion.span key={label} className="sn-arch-chip" initial={reduce ? false : { opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : reduce ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.3 + ti * 0.15 + ci * 0.06, ease: [0.22, 1, 0.36, 1] }}>
                    <span className="sn-arch-chip-dot" style={{ background: t.accent }} />
                    <span className="sn-arch-chip-label">{label}</span>
                    <span className="sn-arch-chip-desc">{d}</span>
                  </motion.span>
                ))}
              </div>
            </Tilt>
          </Reveal>
          {ti < ARCH_TIERS.length - 1 && <ArchConnector reduce={reduce} />}
        </div>
      ))}
    </div>
  );
}

function FaqRow({ item, index, open, onToggle, reduce }: { item: { q: string; a: string }; index: number; open: boolean; onToggle: () => void; reduce: boolean | null }) {
  const accent = index % 2 ? "var(--indigo)" : "var(--blue)";
  return (
    <div className={"sn-faq" + (open ? " is-open" : "")}>
      <button type="button" onClick={onToggle} aria-expanded={open} className="sn-faq-q">
        <span className="sn-faq-idx" style={{ color: accent }}>{String(index + 1).padStart(2, "0")}</span>
        <span className="sn-faq-qt">{item.q}</span>
        <motion.span aria-hidden className="sn-faq-plus" style={{ borderColor: open ? accent : "var(--g200)", color: open ? "#fff" : accent, background: open ? accent : "#fff" }} animate={reduce ? undefined : { rotate: open ? 135 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <Plus className="h-4 w-4" strokeWidth={2.4} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" className="sn-faq-body" initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <div className="sn-faq-inner">
              <span className="sn-faq-rail" style={{ background: `linear-gradient(180deg,${accent},transparent)` }} />
              <p>{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SoftwareFaction({
  service,
  next,
}: {
  service: ServiceDetail;
  next?: { slug: string; title: string };
}) {
  const reduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number>(0);

  const heroRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const glow = useTransform(
    [mx, my] as [MotionValue<number>, MotionValue<number>],
    ([x, y]: number[]) => `radial-gradient(460px circle at ${x}px ${y}px, rgba(27,90,255,0.10), transparent 70%)`
  );
  function onHeroMove(e: React.MouseEvent) {
    if (reduce || !heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  return (
    <div className="sn-root">
      <style>{`
        .sn-root{
          --blue:#1B5AFF;--blue-light:#EEF3FF;--blue-mid:#ADCBFF;--blue-dark:#0A3CC7;--blue-900:#031855;
          --indigo:#6457E8;--indigo-light:#EEF0FF;--indigo-mid:#C0BAFF;--indigo-dark:#4C3DD4;--indigo-800:#3427A8;
          --g50:#FAFBFD;--g100:#F0F2F7;--g200:#E2E6EF;--g300:#CBD2E0;--g400:#9AA3BC;--g500:#6B7594;--g600:#4A5174;--g800:#1A1F3C;--g900:#0D1136;
          --snd:var(--font-fraunces),serif; --snb:var(--font-dm-sans),sans-serif;
          background:var(--g100); color:var(--g900); font-family:var(--snb); line-height:1.7;
        }
        .sn-root ::selection{background:var(--blue-light);color:var(--blue-dark)}
        .sn-wrap{max-width:1180px;margin:0 auto;padding-inline:clamp(1rem,4vw,2.5rem)}
        .sn-disp{font-family:var(--snd)}
        .sn-over{font-family:var(--snb);font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--blue)}
        .sn-vbar{width:4px;background:var(--blue);border-radius:2px}
        .sn-vdot{width:9px;height:9px;background:var(--indigo);border-radius:50%}
        .sn-sec{padding:72px 0;border-top:1.5px solid var(--g200)}
        .sn-sechead h2{font-family:var(--snd);font-weight:600;font-size:clamp(1.6rem,3.4vw,2.4rem);letter-spacing:-.01em;line-height:1.1;color:var(--g900)}
        .sn-sechead .s{font-family:var(--snb);font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--g400)}
        .sn-btn{font-family:var(--snb);font-weight:500;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;border-radius:999px;font-size:15px;padding:12px 24px;text-decoration:none;transition:transform .15s,box-shadow .15s,background .15s}
        .sn-btn-pri{background:var(--blue);color:#fff;box-shadow:0 8px 20px -8px rgba(27,90,255,.6)}
        .sn-btn-pri:hover{box-shadow:0 16px 32px -10px rgba(27,90,255,.8)}
        .sn-btn-ghost{background:#fff;color:var(--g800);border:1.5px solid var(--g200)}
        .sn-btn-ghost:hover{border-color:var(--blue);color:var(--blue)}
        .sn-tag{font-size:11px;font-weight:600;padding:4px 12px;border-radius:999px;display:inline-flex;align-items:center;gap:5px;transition:transform .15s}
        .sn-tag:hover{transform:translateY(-2px)}
        .sn-tag-b{background:var(--blue-light);color:var(--blue-dark);border:1px solid var(--blue-mid)}
        .sn-tag-i{background:var(--indigo-light);color:var(--indigo-dark);border:1px solid var(--indigo-mid)}
        .sn-card{background:#fff;border:1px solid var(--g200);border-radius:16px;padding:22px;height:100%;transition:box-shadow .2s,border-color .2s}
        .sn-card:hover{box-shadow:0 26px 50px -30px rgba(27,90,255,.5);border-color:var(--blue-mid)}
        .sn-card.blue{background:var(--blue-light);border-color:#D6E4FF}
        .sn-card.indigo{background:var(--indigo-light);border-color:var(--indigo-mid)}
        .sn-card.blend{background:linear-gradient(135deg,#EEF3FF 0%,#EEF0FF 100%);border-color:#D0CBFF}
        .sn-ico{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:var(--blue);color:#fff}
        .sn-grad{background:linear-gradient(90deg,var(--blue),var(--indigo));background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent}
        .sn-grad-anim{animation:sn-sheen 6s linear infinite}
        @keyframes sn-sheen{to{background-position:200% center}}

        /* tech marquee */
        .sn-mq{border-top:1.5px solid var(--g200);border-bottom:1.5px solid var(--g200)}
        .sn-mq-pill{font-family:var(--snb);font-size:12.5px;font-weight:600;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;padding:8px 16px;border-radius:999px;user-select:none}
        .sn-mq-mask{-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}

        /* product mockup */
        .sn-mock{position:relative;border-radius:16px;overflow:hidden;background:#fff;border:1px solid var(--g200);box-shadow:0 40px 90px -50px rgba(13,17,54,.55),0 2px 6px -2px rgba(13,17,54,.08)}
        .sn-mock-bar{display:flex;align-items:center;gap:14px;padding:11px 16px;border-bottom:1px solid var(--g200);background:linear-gradient(180deg,#fff,var(--g50))}
        .sn-dots{display:flex;gap:7px} .sn-dots i{width:11px;height:11px;border-radius:50%}
        .sn-url{flex:1;display:flex;align-items:center;gap:8px;height:28px;padding:0 12px;border-radius:999px;background:var(--g100);border:1px solid var(--g200);font-size:11.5px;color:var(--g500);min-width:0}
        .sn-url span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .sn-app{display:grid;grid-template-columns:170px 1fr;min-height:390px}
        .sn-side{border-right:1px solid var(--g200);background:var(--g50);padding:16px 12px;display:flex;flex-direction:column;gap:5px}
        .sn-side-logo{display:flex;align-items:center;gap:8px;padding:2px 6px 12px} .sn-side-logo b{font-family:var(--snd);font-size:14px;font-weight:600;color:var(--g900)}
        .sn-nav{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:9px;font-size:12.5px;color:var(--g500);font-weight:500}
        .sn-nav.on{background:var(--blue-light);color:var(--blue-dark);font-weight:600}
        .sn-nav .d{width:15px;height:15px;border-radius:4px;background:var(--g300);flex:none} .sn-nav.on .d{background:var(--blue)}
        .sn-main{padding:18px 20px;display:flex;flex-direction:column;gap:16px;min-width:0}
        .sn-topline{display:flex;align-items:center;justify-content:space-between;gap:12px} .sn-topline h4{font-family:var(--snd);font-size:16px;font-weight:600;color:var(--g900);margin:0}
        .sn-chipbtn{font-size:11px;font-weight:600;padding:5px 12px;border-radius:999px;background:var(--blue);color:#fff}
        .sn-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}
        .sn-kpi{border:1px solid var(--g200);border-radius:11px;padding:12px 13px;background:#fff}
        .sn-kpi .k{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--g400)}
        .sn-kpi .v{font-family:var(--snd);font-size:22px;font-weight:600;color:var(--g900);margin-top:3px;line-height:1}
        .sn-kpi .t{display:inline-flex;align-items:center;gap:3px;margin-top:6px;font-size:10.5px;font-weight:700;color:#10B981}
        .sn-charts{display:grid;grid-template-columns:1.5fr 1fr;gap:11px}
        .sn-panel{border:1px solid var(--g200);border-radius:11px;padding:14px 14px 8px;background:#fff;position:relative}
        .sn-panel .ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px} .sn-panel .ph b{font-size:12px;font-weight:600;color:var(--g600)}
        .sn-legend{display:flex;gap:12px} .sn-legend i{display:inline-flex;align-items:center;gap:5px;font-size:10.5px;color:var(--g400)}
        .sn-legend i::before{content:"";width:8px;height:8px;border-radius:2px} .sn-legend .lg-b::before{background:var(--blue)} .sn-legend .lg-i::before{background:var(--indigo)}
        .sn-tbl{border:1px solid var(--g200);border-radius:11px;overflow:hidden}
        .sn-trow{display:grid;grid-template-columns:1.6fr 1fr .9fr auto;gap:10px;align-items:center;padding:9px 13px;font-size:11.5px;border-top:1px solid var(--g200)}
        .sn-trow:first-child{border-top:none;background:var(--g50);color:var(--g400);font-weight:700;font-size:10px;letter-spacing:.06em;text-transform:uppercase}
        .sn-trow .who{display:flex;align-items:center;gap:8px;color:var(--g800);font-weight:600;min-width:0}
        .sn-trow .who .av{width:22px;height:22px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700}
        .sn-trow .who span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .sn-badge{justify-self:start;font-size:9.5px;font-weight:700;padding:2px 9px;border-radius:999px}
        .sn-badge.rn{background:var(--blue-light);color:var(--blue-dark)} .sn-badge.wt{background:var(--indigo-light);color:var(--indigo-dark)}
        .sn-trow .col{color:var(--g500)}
        .sn-floatstat{position:absolute;bottom:-18px;left:-16px;z-index:20;background:#fff;border:1px solid var(--g200);border-radius:13px;padding:11px 14px;box-shadow:0 24px 44px -26px rgba(27,90,255,.55);display:flex;align-items:center;gap:11px}
        .sn-floatstat .ring{width:34px;height:34px;flex:none}
        .sn-floatstat .n{font-family:var(--snd);font-size:17px;font-weight:600;color:var(--g900);line-height:1}
        .sn-floatstat .l{font-size:9.5px;color:var(--g400);margin-top:2px}
        @media(max-width:640px){.sn-app{grid-template-columns:1fr}.sn-side{display:none}.sn-kpis{grid-template-columns:1fr 1fr}.sn-floatstat{position:static;margin-top:14px;left:0;bottom:0}.sn-trow{grid-template-columns:1.4fr .9fr auto}.sn-trow .col.hide-sm{display:none}}
        @media(max-width:520px){.sn-charts{grid-template-columns:1fr}}

        /* architecture */
        .sn-arch-card{position:relative;overflow:hidden;background:rgba(255,255,255,.86);backdrop-filter:blur(6px);border:1px solid var(--g200);border-radius:16px;padding:20px 22px 22px;box-shadow:0 1px 0 #fff inset,0 8px 30px -18px #1B5AFF33;transition:box-shadow .3s,border-color .3s}
        .sn-arch-card:hover{border-color:var(--blue-mid);box-shadow:0 1px 0 #fff inset,0 16px 44px -20px #1B5AFF55}
        .sn-arch-card-bar{position:absolute;left:0;top:14px;bottom:14px;width:3px;border-radius:3px;opacity:.9}
        .sn-arch-card-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
        .sn-arch-card-title{margin-top:2px;font-size:20px;font-weight:500;color:var(--g900);line-height:1.15}
        .sn-arch-card-sub{margin-top:3px;font-size:12.5px;color:var(--g500)}
        .sn-arch-glyph{flex:none;display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--blue-light);box-shadow:inset 0 0 0 1px #1B5AFF1a}
        .sn-arch-chips{margin-top:16px;display:flex;flex-wrap:wrap;gap:8px}
        .sn-arch-chip{display:inline-flex;align-items:center;gap:8px;padding:7px 12px 7px 10px;border-radius:999px;background:#fff;border:1px solid var(--g200);box-shadow:0 1px 2px #0d113608;transition:transform .2s,border-color .2s,box-shadow .2s}
        .sn-arch-chip:hover{transform:translateY(-1px);border-color:var(--blue-mid);box-shadow:0 6px 16px -10px #1B5AFF66}
        .sn-arch-chip-dot{width:7px;height:7px;border-radius:50%;flex:none}
        .sn-arch-chip-label{font-size:13px;font-weight:600;color:var(--g900)}
        .sn-arch-chip-desc{font-size:11.5px;color:var(--g400);padding-left:7px;border-left:1px solid var(--g200)}
        .sn-arch-conn{position:relative;height:34px;display:flex;justify-content:center}
        .sn-arch-conn-line{width:2px;height:100%;background:repeating-linear-gradient(180deg,var(--blue),var(--blue) 4px,transparent 4px,transparent 12px);opacity:.45}
        .sn-arch-conn-dot{position:absolute;left:50%;margin-left:-4px;width:8px;height:8px;border-radius:50%;background:var(--blue);box-shadow:0 0 0 4px #1B5AFF22}

        /* capabilities matrix */
        .sn-matrix{display:grid;gap:16px;grid-template-columns:repeat(3,1fr)}
        @media(max-width:900px){.sn-matrix{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.sn-matrix{grid-template-columns:1fr}}
        .sn-cap{position:relative;overflow:hidden;display:flex;flex-direction:column;gap:14px}
        .sn-cap-no{position:absolute;top:14px;right:16px;font-family:var(--snd);font-size:26px;font-weight:600;opacity:.16;line-height:1}
        .sn-cap-head{display:flex;align-items:flex-start;gap:12px}
        .sn-cap-title{font-size:16px;font-weight:600;color:var(--g900);line-height:1.2}
        .sn-cap-blurb{margin-top:3px;font-size:12.5px;color:var(--g500)}
        .sn-cap-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:auto;padding-top:14px;border-top:1px dashed var(--g200)}

        /* faq */
        .sn-faq-list{display:flex;flex-direction:column;gap:12px}
        .sn-faq{background:#fff;border:1px solid var(--g200);border-radius:16px;overflow:hidden;transition:border-color .2s,box-shadow .2s}
        .sn-faq.is-open{border-color:var(--blue-mid);box-shadow:0 26px 50px -34px rgba(27,90,255,.5)}
        .sn-faq-q{width:100%;display:flex;align-items:center;gap:14px;padding:20px 22px;background:none;border:none;cursor:pointer;text-align:left}
        .sn-faq-idx{font-family:var(--snd);font-size:14px;font-weight:600;flex-shrink:0;width:24px}
        .sn-faq-qt{flex:1;font-family:var(--snd);font-size:clamp(15px,1.6vw,17px);font-weight:500;color:var(--g900);line-height:1.3}
        .sn-faq-plus{flex-shrink:0;width:32px;height:32px;border-radius:999px;border:1.5px solid var(--g200);display:flex;align-items:center;justify-content:center;transition:background .25s,border-color .25s,color .25s}
        .sn-faq-body{overflow:hidden}
        .sn-faq-inner{display:flex;gap:14px;padding:0 22px 22px 22px}
        .sn-faq-rail{flex-shrink:0;width:3px;border-radius:2px;align-self:stretch;margin-left:2px}
        .sn-faq-inner p{font-size:14px;line-height:1.75;color:var(--g600);max-width:62ch}
        @media(max-width:600px){.sn-faq-inner{padding-left:22px}.sn-faq-idx{display:none}}

        @media(max-width:860px){ .sn-hero-grid{grid-template-columns:1fr !important} }
      `}</style>

      {/* ===== HERO ===== */}
      <header ref={heroRef} onMouseMove={onHeroMove} className="relative overflow-hidden bg-white">
        <div aria-hidden className="sn-grad-anim absolute inset-x-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg,#1B5AFF,#6457E8,#1B5AFF)", backgroundSize: "200% auto" }} />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle,#1B5AFF14 1.2px,transparent 1.2px)", backgroundSize: "28px 28px" }} />
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />
        <motion.div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-[340px] w-[340px] rounded-full" style={{ background: "radial-gradient(circle,#1B5AFF12,transparent 70%)" }} animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 24, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div aria-hidden className="pointer-events-none absolute -left-10 bottom-[-80px] h-[280px] w-[280px] rounded-full" style={{ background: "radial-gradient(circle,#6457E812,transparent 70%)" }} animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
        <Crosshair className="absolute right-10 top-10 hidden md:block" color="#6457E8" />
        <Crosshair className="absolute left-8 bottom-10 hidden md:block" />

        <div className="sn-wrap sn-hero-grid relative grid items-center gap-12 py-24 md:grid-cols-[1.15fr_.85fr] md:py-32">
          <div className="flex gap-5">
            <div className="hidden flex-col items-center gap-2 pt-2 sm:flex">
              <motion.span className="sn-vdot" initial={reduce ? false : { scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 0.1 }} />
              <motion.span className="sn-vbar" initial={reduce ? false : { height: 0 }} animate={{ height: 54 }} transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} />
            </div>
            <div>
              <Reveal><p className="sn-over">What we offer · {service.number} · Software Development</p></Reveal>
              <h1 className="sn-disp mt-4 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.04] text-[#0D1136]">
                <WordReveal text="Software," />{" "}
                <WordReveal text="built to last." delay={0.28} highlight="built to last." highlightClassName="sn-grad sn-grad-anim" />
              </h1>
              <Reveal delay={0.2}><p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed" style={{ color: "var(--g500)" }}>{service.hero}</p></Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Magnetic strength={0.3}><Link href="/contact?topic=software" className="sn-btn sn-btn-pri" style={{ color: "#fff" }}>Start a project <ArrowUpRight className="h-4 w-4" /></Link></Magnetic>
                  <Magnetic strength={0.25}><a href="#stack" className="sn-btn sn-btn-ghost">See the stack</a></Magnetic>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div id="stack" className="mt-7 flex flex-wrap gap-2">
                  {TECH.map((t, i) => <span key={t} className={"sn-tag " + (i % 2 ? "sn-tag-i" : "sn-tag-b")}>{t}</span>)}
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.25}><ShippingCard reduce={reduce} /></Reveal>
        </div>
      </header>

      {/* ===== TECH MARQUEE ===== */}
      <section className="sn-mq relative overflow-hidden" style={{ background: "var(--g50)" }}>
        <div className="sn-wrap relative z-10 flex items-center justify-center gap-3 pb-6 pt-10 text-center">
          <span className="sn-vdot" />
          <p className="sn-over">The stack we build on</p>
          <span className="sn-vdot" />
        </div>
        <div className="sn-mq-mask relative z-10 flex flex-col gap-4 pb-11">
          <MarqueeRow items={MARQUEE_TECH} reduce={reduce} />
          <MarqueeRow items={[...MARQUEE_TECH].reverse()} reverse reduce={reduce} />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative overflow-hidden bg-white">
        <SectionTexture variant="blue" blobs={false} reduce={reduce} />
        <div className="sn-wrap relative z-10 grid grid-cols-2 gap-6 border-t border-[#E2E6EF] py-12 md:grid-cols-4">
          {[
            { to: service.deliverables.length, suffix: "", label: "Practice areas" },
            { to: service.engagement.length, suffix: "", label: "Engagement models" },
            { to: 30, suffix: "-day", label: "Support window" },
            { to: 100, suffix: "%", label: "TypeScript-first" },
          ].map((st, i) => (
            <Reveal key={st.label} delay={i * 0.08}>
              <div className="flex gap-3">
                <span className="mt-1 h-9 w-1 rounded" style={{ background: i % 2 ? "var(--indigo)" : "var(--blue)" }} />
                <div>
                  <div className="sn-disp text-3xl font-semibold text-[#0D1136] md:text-4xl"><CountUp to={st.to} suffix={st.suffix} /></div>
                  <p className="mt-1 text-[12.5px]" style={{ color: "var(--g500)" }}>{st.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== DELIVERABLES (A) ===== */}
      <section className="sn-sec relative overflow-hidden bg-white">
        <SectionTexture variant="soft" crosshairs={false} reduce={reduce} />
        <div className="sn-wrap relative z-10">
          <Reveal><div className="sn-sechead mb-8 flex items-baseline gap-3"><span className="s">A</span><h2>What we deliver</h2></div></Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d, i) => {
              const Icon = DELIV_ICONS[i % DELIV_ICONS.length];
              const tone = CARD_TONE[i % CARD_TONE.length];
              return (
                <StaggerItem key={d.title}>
                  <Tilt max={7} className={"sn-card " + tone}>
                    <span className="sn-ico" style={{ background: i % 2 ? "var(--indigo)" : "var(--blue)" }}><Icon className="h-5 w-5" strokeWidth={1.9} /></span>
                    <h3 className="sn-disp mt-4 text-lg font-medium text-[#0D1136]">{d.title}</h3>
                    <p className="mt-2 text-[13.5px]" style={{ color: "var(--g600)" }}>{d.body}</p>
                  </Tilt>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== WHAT WE BUILD — product-UI showcase ===== */}
      <section className="sn-sec relative overflow-hidden" style={{ background: "linear-gradient(135deg,#EEF3FF 0%,#EEF0FF 100%)" }}>
        <SectionTexture variant="blend" reduce={reduce} />
        <div className="sn-wrap sn-hero-grid relative z-10 grid items-center gap-12 md:grid-cols-[.82fr_1.18fr]">
          <div className="flex gap-5">
            <div className="hidden flex-col items-center gap-2 pt-2 sm:flex">
              <span className="sn-vdot" />
              <motion.span className="sn-vbar" initial={reduce ? false : { height: 0 }} whileInView={{ height: 54 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} />
            </div>
            <div>
              <Reveal><p className="sn-over">What we build</p></Reveal>
              <Reveal delay={0.1}><h2 className="sn-disp mt-3 text-[clamp(1.7rem,3.6vw,2.5rem)] font-semibold leading-[1.08] text-[#0D1136]">Dashboards, platforms &amp; tools your team <span className="sn-grad sn-grad-anim">actually uses.</span></h2></Reveal>
              <Reveal delay={0.2}><p className="mt-4 max-w-[46ch] text-[14.5px] leading-relaxed" style={{ color: "var(--g500)" }}>From internal ERP consoles to customer-facing SaaS, we design and build real, data-driven interfaces — fast, typed, and made to scale.</p></Reveal>
              <Reveal delay={0.3}>
                <ul className="mt-6 space-y-2.5">
                  {["Real-time dashboards & analytics", "Admin & operations consoles", "Multi-tenant SaaS platforms"].map((f, i) => (
                    <li key={f} className="flex items-center gap-2.5 text-[13.5px]" style={{ color: "var(--g600)" }}>
                      <span className="flex h-4 w-4 items-center justify-center rounded-full" style={{ background: i % 2 ? "var(--indigo)" : "var(--blue)" }}><Check className="h-2.5 w-2.5 text-white" strokeWidth={4} /></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.4}><p className="mt-6 text-[11px] italic" style={{ color: "var(--g400)" }}>Illustrative interface — representative of the UI patterns we build.</p></Reveal>
            </div>
          </div>
          <Reveal delay={0.15}><Tilt max={5} className="relative"><ProductMockup reduce={reduce} /></Tilt></Reveal>
        </div>
      </section>

      {/* ===== HOW WE SHIP — pipeline (B) ===== */}
      <section className="sn-sec relative overflow-hidden" style={{ background: "var(--g50)" }}>
        <SectionTexture variant="soft" squares={false} reduce={reduce} />
        <div className="sn-wrap relative z-10">
          <Reveal><div className="sn-sechead mb-10 flex items-baseline gap-3"><span className="s">B</span><h2>How we ship</h2></div></Reveal>
          <div className="relative">
            <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-[2px] bg-[#E2E6EF] md:block" />
            <motion.div aria-hidden className="absolute left-0 top-6 hidden h-[2px] origin-left md:block" style={{ background: "linear-gradient(90deg,#1B5AFF,#6457E8)", width: "100%" }} initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
            <div className="grid gap-8 md:grid-cols-4">
              {PIPELINE.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.15}>
                  <div className="relative">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1B5AFF] bg-white text-sm font-semibold text-[#1B5AFF]" style={{ fontFamily: "var(--snd)" }}>{p.n}</span>
                    <h3 className="sn-disp mt-4 text-lg font-medium text-[#0D1136]">{p.title}</h3>
                    <p className="mt-1.5 text-[13px]" style={{ color: "var(--g500)" }}>{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARCHITECTURE (C) ===== */}
      <section className="sn-sec relative overflow-hidden bg-white">
        <SectionTexture variant="plain" reduce={reduce} />
        <div className="sn-wrap relative z-10">
          <Reveal>
            <p className="sn-over">System design</p>
            <div className="sn-sechead mt-1 flex items-baseline gap-3"><span className="s">C</span><h2>How it fits together</h2></div>
            <p className="mt-3 max-w-xl text-[14.5px]" style={{ color: "var(--g500)" }}>A typed contract from client to cloud — the same shape whether we ship a marketing site, a mobile app, or a multi-tenant SaaS platform.</p>
          </Reveal>
          <ArchDiagram reduce={reduce} />
        </div>
      </section>

      {/* ===== CAPABILITIES MATRIX (D) ===== */}
      <section className="sn-sec relative overflow-hidden" style={{ background: "var(--g50)" }}>
        <SectionTexture variant="blend" crosshairs={false} reduce={reduce} />
        <div className="sn-wrap relative z-10">
          <Reveal><div className="sn-sechead mb-3 flex items-baseline gap-3"><span className="s">D</span><h2>What we can actually do</h2></div></Reveal>
          <Reveal delay={0.1}><p className="mb-9 max-w-[54ch] text-[14.5px]" style={{ color: "var(--g500)" }}>Six delivery areas, mapped to the concrete capabilities inside each. Illustrative of our stack — scope is always tailored to your project.</p></Reveal>
          <Stagger className="sn-matrix">
            {MATRIX.map((m, i) => {
              const Icon = m.icon;
              const accent = i % 2 ? "var(--indigo)" : "var(--blue)";
              return (
                <StaggerItem key={m.area}>
                  <Tilt max={6} className="sn-cap sn-card">
                    <span className="sn-cap-no" style={{ color: accent }}>0{i + 1}</span>
                    <div className="sn-cap-head">
                      <span className="sn-ico" style={{ background: accent }}><Icon className="h-5 w-5" strokeWidth={1.9} /></span>
                      <div>
                        <h3 className="sn-disp sn-cap-title">{m.area}</h3>
                        <p className="sn-cap-blurb">{m.blurb}</p>
                      </div>
                    </div>
                    <div className="sn-cap-tags">
                      {m.tags.map((t, j) => <span key={t} className={"sn-tag " + ((i + j) % 2 ? "sn-tag-i" : "sn-tag-b")}>{t}</span>)}
                    </div>
                  </Tilt>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== WHO IT'S FOR (E) ===== */}
      <section className="sn-sec relative overflow-hidden bg-white">
        <SectionTexture variant="soft" blobs={false} reduce={reduce} />
        <div className="sn-wrap relative z-10">
          <Reveal><div className="sn-sechead mb-8 flex items-baseline gap-3"><span className="s">E</span><h2>Who it&apos;s for</h2></div></Reveal>
          <Stagger className="grid gap-4 md:grid-cols-2">
            {service.audience.map((a, i) => (
              <StaggerItem key={i}>
                <div className="sn-card flex items-start gap-4">
                  <span className="sn-tag sn-tag-b shrink-0" style={{ fontFamily: "var(--snd)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[14.5px]" style={{ color: "var(--g600)" }}>{a}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== ENGAGEMENT (F) ===== */}
      <section className="sn-sec relative overflow-hidden" style={{ background: "var(--g50)" }}>
        <SectionTexture variant="indigo" reduce={reduce} />
        <div className="sn-wrap relative z-10">
          <Reveal><div className="sn-sechead mb-8 flex items-baseline gap-3"><span className="s">F</span><h2>How we structure the work</h2></div></Reveal>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {service.engagement.map((e, i) => (
              <StaggerItem key={e.name}>
                <Tilt max={6} className="sn-card">
                  <p className="sn-over" style={{ color: i % 2 ? "var(--indigo)" : "var(--blue)" }}>Model {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="sn-disp mt-1.5 text-xl font-medium text-[#0D1136]">{e.name}</h3>
                  <p className="mt-3 text-[13.5px]" style={{ color: "var(--g600)" }}>{e.body}</p>
                  <p className="mt-5 border-t pt-4 text-[12px]" style={{ borderColor: "var(--g200)", color: "var(--g500)" }}>
                    <span className="font-bold uppercase tracking-wider" style={{ color: i % 2 ? "var(--indigo-dark)" : "var(--blue-dark)" }}>Best for</span> — {e.suited}
                  </p>
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== FAQ (G) ===== */}
      <section className="sn-sec relative overflow-hidden bg-white">
        <SectionTexture variant="plain" crosshairs={false} reduce={reduce} />
        <div className="sn-wrap relative z-10 grid gap-12 md:grid-cols-[.9fr_1.6fr]">
          <div className="md:sticky md:top-24 md:self-start">
            <Reveal><div className="sn-sechead mb-4 flex items-baseline gap-3"><span className="s">G</span><h2>Questions,<br />answered.</h2></div></Reveal>
            <Reveal delay={0.1}><p className="max-w-[34ch] text-[14px]" style={{ color: "var(--g500)" }}>The honest version — scope, timelines, stack, ownership and what happens after launch.</p></Reveal>
            <Reveal delay={0.2}>
              <Magnetic strength={0.25}>
                <Link href="/contact?topic=software" className="sn-btn sn-btn-ghost mt-6">Still curious? Ask us <ArrowUpRight className="h-4 w-4" /></Link>
              </Magnetic>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="sn-faq-list">
              {FAQ.map((item, i) => (
                <FaqRow key={item.q} item={item} index={i} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} reduce={reduce} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="sn-sec relative overflow-hidden" style={{ background: "linear-gradient(135deg,#EEF3FF 0%,#EEF0FF 100%)" }}>
        <Crosshair className="absolute right-12 top-10 hidden md:block" color="#6457E8" />
        <div className="sn-wrap relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            <div className="hidden flex-col items-center gap-2 pt-1 sm:flex">
              <span className="sn-vdot" />
              <motion.span className="sn-vbar" initial={reduce ? false : { height: 0 }} whileInView={{ height: 64 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} />
            </div>
            <div>
              <p className="sn-over">Let&apos;s build</p>
              <h2 className="sn-disp mt-2 max-w-[20ch] text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.05] text-[#0D1136]">Bring us the brief — <span className="sn-grad sn-grad-anim">we&apos;ll bring the scope.</span></h2>
              <p className="mt-3 max-w-[44ch] text-[14px]" style={{ color: "var(--g500)" }}>30-minute discovery call. Written scope summary inside 48 hours. No obligation.</p>
            </div>
          </div>
          <Magnetic strength={0.3}><Link href="/contact?topic=software" className="sn-btn sn-btn-pri shrink-0" style={{ color: "#fff" }}>Start a conversation <ArrowRight className="h-4 w-4" /></Link></Magnetic>
        </div>
      </section>

      {/* ===== NEXT SERVICE ===== */}
      {next && (
        <section className="sn-sec bg-white">
          <div className="sn-wrap">
            <Link href={`/services/${next.slug}`} className="group flex items-center justify-between gap-6">
              <div>
                <p className="sn-over" style={{ color: "var(--g400)" }}>Next service</p>
                <p className="sn-disp mt-2 text-2xl font-medium text-[#0D1136] transition-colors group-hover:text-[#1B5AFF] md:text-3xl">{next.title}</p>
              </div>
              <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-1" style={{ color: "var(--blue)" }} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
