"use client";

/* SOFTWARE DEVELOPMENT faction — "Shahan Naqvi v2" clean-SaaS design system,
   elevated: interactive + animated while staying on-brand.
   Electric blue (#1B5AFF) + soft indigo (#6457E8), Fraunces + DM Sans,
   dot-grid hero with a cursor-reactive glow, word-reveal headline, an animated
   "shipping" status card, count-up metrics, 3D-tilt cards, an animated delivery
   pipeline, magnetic CTAs. Scoped under `.sn-root`. Real serviceDetails. */

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { Globe, Smartphone, Cloud, Cpu, Palette, LifeBuoy, ArrowUpRight, ArrowRight, Check, type LucideIcon } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";
import { Reveal, Stagger, StaggerItem, Magnetic, Tilt, CountUp, WordReveal } from "@/components/lab/primitives";

const DELIV_ICONS: LucideIcon[] = [Globe, Smartphone, Cloud, Cpu, Palette, LifeBuoy];
const TECH = ["Next.js", "React", "Flutter", "Node.js", "ERP & SaaS", "AI / LLM", "Cloud"];
const CARD_TONE = ["default", "blue", "indigo", "blend"] as const;

const PIPELINE = [
  { n: "01", title: "Discover", body: "Map the problem, users and metrics." },
  { n: "02", title: "Design", body: "Architecture & experience, prototyped." },
  { n: "03", title: "Build", body: "Ship in tight, measurable increments." },
  { n: "04", title: "Scale", body: "Optimize, automate and grow." },
];

function Crosshair({ className, color = "#1B5AFF" }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" style={{ opacity: 0.3 }}>
      <line x1="10" y1="2" x2="10" y2="18" stroke={color} strokeWidth="1" />
      <line x1="2" y1="10" x2="18" y2="10" stroke={color} strokeWidth="1" />
    </svg>
  );
}

/* Hero card that reads as a live delivery pipeline — the branded "shipping" moment. */
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
          <motion.div
            key={s}
            className="flex items-center gap-2.5 text-[13px]"
            initial={reduce ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full" style={{ background: i < 2 ? "var(--blue)" : "var(--indigo)" }}>
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={4} />
            </span>
            <span style={{ color: "var(--g600)" }}>{s}</span>
          </motion.div>
        ))}
      </div>

      {/* animated progress */}
      <div className="mt-5 h-[6px] w-full overflow-hidden rounded-full" style={{ background: "var(--g200)" }}>
        <motion.div
          className="relative h-full rounded-full"
          style={{ background: "linear-gradient(90deg,#1B5AFF,#6457E8)" }}
          initial={reduce ? false : { width: "0%" }}
          whileInView={{ width: "78%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="absolute right-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white" style={{ background: "var(--indigo)" }} />
        </motion.div>
      </div>
      <p className="mt-2 text-[11px]" style={{ color: "var(--g400)" }}>30-day support window included with every build</p>
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

  // cursor-reactive glow over the hero dot-grid
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
        @media(max-width:860px){ .sn-hero-grid{grid-template-columns:1fr !important} }
      `}</style>

      {/* ===== HERO ===== */}
      <header ref={heroRef} onMouseMove={onHeroMove} className="relative overflow-hidden bg-white">
        {/* top gradient hairline (animated sheen) */}
        <div aria-hidden className="sn-grad-anim absolute inset-x-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg,#1B5AFF,#6457E8,#1B5AFF)", backgroundSize: "200% auto" }} />
        {/* dot grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle,#1B5AFF14 1.2px,transparent 1.2px)", backgroundSize: "28px 28px" }} />
        {/* cursor-reactive glow */}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />
        {/* drifting blobs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-[340px] w-[340px] rounded-full"
          style={{ background: "radial-gradient(circle,#1B5AFF12,transparent 70%)" }}
          animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 24, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-10 bottom-[-80px] h-[280px] w-[280px] rounded-full"
          style={{ background: "radial-gradient(circle,#6457E812,transparent 70%)" }}
          animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <Crosshair className="absolute right-10 top-10 hidden md:block" color="#6457E8" />
        <Crosshair className="absolute left-8 bottom-10 hidden md:block" />
        {/* floating squares */}
        <motion.span aria-hidden className="absolute right-[22%] top-[24%] hidden h-2 w-2 rounded-[3px] md:block" style={{ background: "#6457E8", opacity: 0.35 }} animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.span aria-hidden className="absolute left-[12%] top-[64%] hidden h-1.5 w-1.5 rounded-[2px] md:block" style={{ background: "#1B5AFF", opacity: 0.3 }} animate={reduce ? undefined : { y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

        <div className="sn-wrap sn-hero-grid relative grid items-center gap-12 py-24 md:grid-cols-[1.15fr_.85fr] md:py-32">
          <div className="flex gap-5">
            {/* vertical bar + indigo dot (draws in) */}
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
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed" style={{ color: "var(--g500)" }}>{service.hero}</p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Magnetic strength={0.3}>
                    <Link href="/contact?topic=software" className="sn-btn sn-btn-pri" style={{ color: "#fff" }}>
                      Start a project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Magnetic>
                  <Magnetic strength={0.25}>
                    <a href="#stack" className="sn-btn sn-btn-ghost">See the stack</a>
                  </Magnetic>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div id="stack" className="mt-7 flex flex-wrap gap-2">
                  {TECH.map((t, i) => (
                    <span key={t} className={"sn-tag " + (i % 2 ? "sn-tag-i" : "sn-tag-b")}>{t}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.25}>
            <ShippingCard reduce={reduce} />
          </Reveal>
        </div>
      </header>

      {/* ===== STATS (count-up, real numbers) ===== */}
      <section className="bg-white">
        <div className="sn-wrap grid grid-cols-2 gap-6 border-t border-[#E2E6EF] py-12 md:grid-cols-4">
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
                  <div className="sn-disp text-3xl font-semibold text-[#0D1136] md:text-4xl">
                    <CountUp to={st.to} suffix={st.suffix} />
                  </div>
                  <p className="mt-1 text-[12.5px]" style={{ color: "var(--g500)" }}>{st.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== DELIVERABLES (3D tilt cards) ===== */}
      <section className="sn-sec bg-white">
        <div className="sn-wrap">
          <Reveal>
            <div className="sn-sechead mb-8 flex items-baseline gap-3"><span className="s">A</span><h2>What we deliver</h2></div>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d, i) => {
              const Icon = DELIV_ICONS[i % DELIV_ICONS.length];
              const tone = CARD_TONE[i % CARD_TONE.length];
              return (
                <StaggerItem key={d.title}>
                  <Tilt max={7} className={"sn-card " + tone}>
                    <span className="sn-ico" style={{ background: i % 2 ? "var(--indigo)" : "var(--blue)" }}>
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <h3 className="sn-disp mt-4 text-lg font-medium text-[#0D1136]">{d.title}</h3>
                    <p className="mt-2 text-[13.5px]" style={{ color: "var(--g600)" }}>{d.body}</p>
                  </Tilt>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== PIPELINE (animated delivery timeline) ===== */}
      <section className="sn-sec relative overflow-hidden" style={{ background: "var(--g50)" }}>
        <div className="sn-wrap">
          <Reveal>
            <div className="sn-sechead mb-10 flex items-baseline gap-3"><span className="s">B</span><h2>How we ship</h2></div>
          </Reveal>
          <div className="relative">
            {/* rail */}
            <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-[2px] bg-[#E2E6EF] md:block" />
            <motion.div
              aria-hidden
              className="absolute left-0 top-6 hidden h-[2px] origin-left md:block"
              style={{ background: "linear-gradient(90deg,#1B5AFF,#6457E8)", width: "100%" }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="grid gap-8 md:grid-cols-4">
              {PIPELINE.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.15}>
                  <div className="relative">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1B5AFF] bg-white text-sm font-semibold text-[#1B5AFF]" style={{ fontFamily: "var(--snd)" }}>
                      {p.n}
                    </span>
                    <h3 className="sn-disp mt-4 text-lg font-medium text-[#0D1136]">{p.title}</h3>
                    <p className="mt-1.5 text-[13px]" style={{ color: "var(--g500)" }}>{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== AUDIENCE ===== */}
      <section className="sn-sec bg-white">
        <div className="sn-wrap">
          <Reveal>
            <div className="sn-sechead mb-8 flex items-baseline gap-3"><span className="s">C</span><h2>Who it&apos;s for</h2></div>
          </Reveal>
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

      {/* ===== ENGAGEMENT ===== */}
      <section className="sn-sec" style={{ background: "var(--g50)" }}>
        <div className="sn-wrap">
          <Reveal>
            <div className="sn-sechead mb-8 flex items-baseline gap-3"><span className="s">D</span><h2>How we structure the work</h2></div>
          </Reveal>
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
              <h2 className="sn-disp mt-2 max-w-[20ch] text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.05] text-[#0D1136]">
                Bring us the brief — <span className="sn-grad sn-grad-anim">we&apos;ll bring the scope.</span>
              </h2>
              <p className="mt-3 max-w-[44ch] text-[14px]" style={{ color: "var(--g500)" }}>
                30-minute discovery call. Written scope summary inside 48 hours. No obligation.
              </p>
            </div>
          </div>
          <Magnetic strength={0.3}>
            <Link href="/contact?topic=software" className="sn-btn sn-btn-pri shrink-0" style={{ color: "#fff" }}>
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>
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
