"use client";

/* SOFTWARE DEVELOPMENT faction — "Shahan Naqvi v2" clean-SaaS design system.
   Light premium look: electric blue (#1B5AFF) + soft indigo (#6457E8),
   Fraunces (serif display) + DM Sans (body), dot-grid hero, vertical blue
   left-bar with an indigo dot, crosshair accents, pill buttons/tags, progress
   bars and translucent cards. Scoped under `.sn-root`. Real content from
   serviceDetails["software-development"]. */

import Link from "next/link";
import { Globe, Smartphone, Cloud, Cpu, Palette, LifeBuoy, ArrowUpRight, ArrowRight, type LucideIcon } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";
import { Reveal, Stagger, StaggerItem } from "@/components/lab/primitives";

const DELIV_ICONS: LucideIcon[] = [Globe, Smartphone, Cloud, Cpu, Palette, LifeBuoy];
const TECH = ["Next.js", "React", "Flutter", "Node.js", "ERP & SaaS", "AI / LLM", "Cloud"];

// Soft alternating card tints, on-system.
const CARD_TONE = ["default", "blue", "indigo", "blend"] as const;

function Crosshair({ className, color = "#1B5AFF" }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" style={{ opacity: 0.3 }}>
      <line x1="10" y1="2" x2="10" y2="18" stroke={color} strokeWidth="1" />
      <line x1="2" y1="10" x2="18" y2="10" stroke={color} strokeWidth="1" />
    </svg>
  );
}

export function SoftwareFaction({
  service,
  next,
}: {
  service: ServiceDetail;
  next?: { slug: string; title: string };
}) {
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
        .sn-vbar{width:4px;height:54px;background:var(--blue);border-radius:2px}
        .sn-vdot{width:9px;height:9px;background:var(--indigo);border-radius:50%}
        .sn-sec{padding:72px 0;border-top:1.5px solid var(--g200)}
        .sn-sechead h2{font-family:var(--snd);font-weight:600;font-size:clamp(1.6rem,3.4vw,2.4rem);letter-spacing:-.01em;line-height:1.1;color:var(--g900)}
        .sn-sechead .s{font-family:var(--snb);font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--g400)}
        .sn-btn{font-family:var(--snb);font-weight:500;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;border-radius:999px;font-size:15px;padding:12px 24px;text-decoration:none;transition:transform .15s,box-shadow .15s,background .15s}
        .sn-btn-pri{background:var(--blue);color:#fff;box-shadow:0 8px 20px -8px rgba(27,90,255,.6)}
        .sn-btn-pri:hover{transform:translateY(-2px);box-shadow:0 14px 28px -10px rgba(27,90,255,.7)}
        .sn-btn-ghost{background:#fff;color:var(--g800);border:1.5px solid var(--g200)}
        .sn-btn-ghost:hover{border-color:var(--blue);color:var(--blue)}
        .sn-tag{font-size:11px;font-weight:600;padding:4px 12px;border-radius:999px;display:inline-flex;align-items:center;gap:5px}
        .sn-tag-b{background:var(--blue-light);color:var(--blue-dark);border:1px solid var(--blue-mid)}
        .sn-tag-i{background:var(--indigo-light);color:var(--indigo-dark);border:1px solid var(--indigo-mid)}
        .sn-card{background:#fff;border:1px solid var(--g200);border-radius:16px;padding:22px;height:100%;transition:transform .15s,box-shadow .15s,border-color .15s}
        .sn-card:hover{transform:translateY(-4px);box-shadow:0 22px 40px -28px rgba(13,17,54,.35);border-color:var(--blue-mid)}
        .sn-card.blue{background:var(--blue-light);border-color:var(--blue-100,#D6E4FF)}
        .sn-card.indigo{background:var(--indigo-light);border-color:var(--indigo-mid)}
        .sn-card.blend{background:linear-gradient(135deg,#EEF3FF 0%,#EEF0FF 100%);border-color:#D0CBFF}
        .sn-ico{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:var(--blue);color:#fff}
        .sn-grad{background:linear-gradient(90deg,var(--blue),var(--indigo));-webkit-background-clip:text;background-clip:text;color:transparent}
        @media(max-width:860px){ .sn-hero-grid{grid-template-columns:1fr !important} }
      `}</style>

      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden bg-white">
        {/* top gradient hairline */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg,#1B5AFF,#6457E8)" }} />
        {/* dot grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle,#1B5AFF14 1.2px,transparent 1.2px)", backgroundSize: "28px 28px" }} />
        {/* blobs */}
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-[340px] w-[340px] rounded-full" style={{ background: "radial-gradient(circle,#1B5AFF10,transparent 70%)" }} />
        <div aria-hidden className="pointer-events-none absolute -left-10 bottom-[-80px] h-[280px] w-[280px] rounded-full" style={{ background: "radial-gradient(circle,#6457E810,transparent 70%)" }} />
        <Crosshair className="absolute right-10 top-10 hidden md:block" color="#6457E8" />
        <Crosshair className="absolute left-8 bottom-10 hidden md:block" />

        <div className="sn-wrap sn-hero-grid relative grid items-center gap-12 py-24 md:grid-cols-[1.15fr_.85fr] md:py-32">
          <div className="flex gap-5">
            {/* vertical bar + indigo dot */}
            <div className="hidden flex-col items-center gap-2 pt-2 sm:flex">
              <span className="sn-vdot" />
              <span className="sn-vbar" />
            </div>
            <div>
              <Reveal><p className="sn-over">What we offer · {service.number} · Software Development</p></Reveal>
              <Reveal delay={0.08}>
                <h1 className="sn-disp mt-4 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.04] text-[#0D1136]">
                  Software, <span className="sn-grad">built to last.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed" style={{ color: "var(--g500)" }}>{service.hero}</p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact?topic=software" className="sn-btn sn-btn-pri" style={{ color: "#fff" }}>
                    Start a project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a href="#stack" className="sn-btn sn-btn-ghost">See the stack</a>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div id="stack" className="mt-7 flex flex-wrap gap-2">
                  {TECH.map((t, i) => (
                    <span key={t} className={"sn-tag " + (i % 2 ? "sn-tag-i" : "sn-tag-b")}>{t}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* translucent "currently building" style card */}
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-[#E2E6EF] bg-white/75 p-6 shadow-[0_30px_60px_-40px_rgba(13,17,54,.4)] backdrop-blur">
              <p className="sn-over" style={{ color: "var(--blue)" }}>How we ship</p>
              <p className="sn-disp mt-2 text-xl font-semibold text-[#0D1136]">Scoped. Shipped. Maintained.</p>
              <p className="mt-2 text-[13px]" style={{ color: "var(--g500)" }}>{service.tagline}</p>
              {/* progress motif */}
              <div className="mt-5 h-[5px] w-full rounded-full" style={{ background: "var(--g200)" }}>
                <div className="relative h-full rounded-full" style={{ width: "68%", background: "var(--blue)" }}>
                  <span className="absolute right-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 translate-x-1/2 rounded-full" style={{ background: "var(--indigo)" }} />
                </div>
              </div>
              <p className="mt-2 text-[11px]" style={{ color: "var(--g400)" }}>30-day support window included with every build</p>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ===== DELIVERABLES ===== */}
      <section className="sn-sec bg-white">
        <div className="sn-wrap">
          <Reveal>
            <div className="sn-sechead mb-8 flex items-baseline gap-3">
              <span className="s">A</span>
              <h2>What we deliver</h2>
            </div>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d, i) => {
              const Icon = DELIV_ICONS[i % DELIV_ICONS.length];
              const tone = CARD_TONE[i % CARD_TONE.length];
              return (
                <StaggerItem key={d.title}>
                  <div className={"sn-card " + tone}>
                    <span className="sn-ico" style={{ background: i % 2 ? "var(--indigo)" : "var(--blue)" }}>
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <h3 className="sn-disp mt-4 text-lg font-medium text-[#0D1136]">{d.title}</h3>
                    <p className="mt-2 text-[13.5px]" style={{ color: "var(--g600)" }}>{d.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ===== AUDIENCE ===== */}
      <section className="sn-sec">
        <div className="sn-wrap">
          <Reveal>
            <div className="sn-sechead mb-8 flex items-baseline gap-3">
              <span className="s">B</span>
              <h2>Who it&apos;s for</h2>
            </div>
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
      <section className="sn-sec bg-white">
        <div className="sn-wrap">
          <Reveal>
            <div className="sn-sechead mb-8 flex items-baseline gap-3">
              <span className="s">C</span>
              <h2>How we structure the work</h2>
            </div>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {service.engagement.map((e, i) => (
              <StaggerItem key={e.name}>
                <div className="sn-card">
                  <p className="sn-over" style={{ color: i % 2 ? "var(--indigo)" : "var(--blue)" }}>Model {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="sn-disp mt-1.5 text-xl font-medium text-[#0D1136]">{e.name}</h3>
                  <p className="mt-3 text-[13.5px]" style={{ color: "var(--g600)" }}>{e.body}</p>
                  <p className="mt-5 border-t pt-4 text-[12px]" style={{ borderColor: "var(--g200)", color: "var(--g500)" }}>
                    <span className="font-bold uppercase tracking-wider" style={{ color: i % 2 ? "var(--indigo-dark)" : "var(--blue-dark)" }}>Best for</span> — {e.suited}
                  </p>
                </div>
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
              <span className="sn-vbar" style={{ height: 64 }} />
            </div>
            <div>
              <p className="sn-over">Let&apos;s build</p>
              <h2 className="sn-disp mt-2 max-w-[20ch] text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.05] text-[#0D1136]">
                Bring us the brief — <span className="sn-grad">we&apos;ll bring the scope.</span>
              </h2>
              <p className="mt-3 max-w-[44ch] text-[14px]" style={{ color: "var(--g500)" }}>
                30-minute discovery call. Written scope summary inside 48 hours. No obligation.
              </p>
            </div>
          </div>
          <Link href="/contact?topic=software" className="sn-btn sn-btn-pri shrink-0" style={{ color: "#fff" }}>
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
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
