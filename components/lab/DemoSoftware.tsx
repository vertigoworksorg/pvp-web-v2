"use client";

/* DESIGN-LAB demo F — "Software / Clean SaaS" (Shahan Naqvi v2)
   Electric blue + soft indigo, Fraunces + DM Sans, dot-grid hero, vertical
   blue left-bar with indigo dot, crosshairs, pill buttons/tags, translucent
   cards, progress bars. Scoped under `.snf`. */

import { Globe, Smartphone, Cloud, Cpu } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./primitives";

function Crosshair({ className, color = "#1B5AFF" }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" style={{ opacity: 0.3 }}>
      <line x1="10" y1="2" x2="10" y2="18" stroke={color} strokeWidth="1" />
      <line x1="2" y1="10" x2="18" y2="10" stroke={color} strokeWidth="1" />
    </svg>
  );
}

const cards = [
  { icon: Globe, title: "Web applications", body: "Dashboards and product web apps on modern stacks.", tone: "default" },
  { icon: Smartphone, title: "Mobile apps", body: "Native-equivalent iOS & Android builds.", tone: "blue" },
  { icon: Cloud, title: "ERP, SaaS & cloud", body: "Designed for the real scale of the business.", tone: "indigo" },
  { icon: Cpu, title: "AI & automation", body: "LLM-powered workflows that compress hours.", tone: "blend" },
];

const tags = ["Next.js", "React", "Flutter", "Node.js", "ERP & SaaS", "AI / LLM"];

export function DemoSoftware() {
  return (
    <div className="snf">
      <style>{`
        .snf{
          --blue:#1B5AFF;--blue-light:#EEF3FF;--blue-mid:#ADCBFF;--blue-dark:#0A3CC7;
          --indigo:#6457E8;--indigo-light:#EEF0FF;--indigo-mid:#C0BAFF;--indigo-dark:#4C3DD4;
          --g100:#F0F2F7;--g200:#E2E6EF;--g400:#9AA3BC;--g500:#6B7594;--g600:#4A5174;--g900:#0D1136;
          --snd:var(--font-fraunces),serif; --snb:var(--font-dm-sans),sans-serif;
          background:var(--g100); color:var(--g900); font-family:var(--snb); line-height:1.7;
        }
        .snf ::selection{background:var(--blue-light);color:var(--blue-dark)}
        .snf-wrap{max-width:1180px;margin:0 auto;padding-inline:clamp(1rem,4vw,2.5rem)}
        .snf-disp{font-family:var(--snd)}
        .snf-over{font-family:var(--snb);font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--blue)}
        .snf-sec{padding:64px 0;border-top:1.5px solid var(--g200)}
        .snf-sechead h2{font-family:var(--snd);font-weight:600;font-size:clamp(1.5rem,3.4vw,2.2rem);letter-spacing:-.01em;line-height:1.1}
        .snf-sechead .s{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--g400)}
        .snf-btn{font-family:var(--snb);font-weight:500;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;border-radius:999px;font-size:15px;padding:12px 24px;text-decoration:none;transition:transform .15s,box-shadow .15s}
        .snf-btn-pri{background:var(--blue);color:#fff;box-shadow:0 8px 20px -8px rgba(27,90,255,.6)}
        .snf-btn-pri:hover{transform:translateY(-2px)}
        .snf-btn-gh{background:#fff;color:var(--g900);border:1.5px solid var(--g200)}
        .snf-tag{font-size:11px;font-weight:600;padding:4px 12px;border-radius:999px}
        .snf-tag-b{background:var(--blue-light);color:var(--blue-dark);border:1px solid var(--blue-mid)}
        .snf-tag-i{background:var(--indigo-light);color:var(--indigo-dark);border:1px solid var(--indigo-mid)}
        .snf-card{background:#fff;border:1px solid var(--g200);border-radius:16px;padding:22px;height:100%;transition:transform .15s,box-shadow .15s,border-color .15s}
        .snf-card:hover{transform:translateY(-4px);box-shadow:0 22px 40px -28px rgba(13,17,54,.35);border-color:var(--blue-mid)}
        .snf-card.blue{background:var(--blue-light);border-color:#D6E4FF}
        .snf-card.indigo{background:var(--indigo-light);border-color:var(--indigo-mid)}
        .snf-card.blend{background:linear-gradient(135deg,#EEF3FF,#EEF0FF);border-color:#D0CBFF}
        .snf-ico{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:var(--blue);color:#fff}
        .snf-grad{background:linear-gradient(90deg,var(--blue),var(--indigo));-webkit-background-clip:text;background-clip:text;color:transparent}
        .snf-vbar{width:4px;height:54px;background:var(--blue);border-radius:2px}
        .snf-vdot{width:9px;height:9px;background:var(--indigo);border-radius:50%}
        @media(max-width:860px){ .snf-hero{grid-template-columns:1fr !important} }
      `}</style>

      {/* HERO */}
      <header className="relative overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg,#1B5AFF,#6457E8)" }} />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle,#1B5AFF14 1.2px,transparent 1.2px)", backgroundSize: "28px 28px" }} />
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-[340px] w-[340px] rounded-full" style={{ background: "radial-gradient(circle,#1B5AFF10,transparent 70%)" }} />
        <Crosshair className="absolute right-10 top-10 hidden md:block" color="#6457E8" />
        <div className="snf-wrap snf-hero relative grid items-center gap-12 py-24 md:grid-cols-[1.15fr_.85fr] md:py-28">
          <div className="flex gap-5">
            <div className="hidden flex-col items-center gap-2 pt-2 sm:flex">
              <span className="snf-vdot" /><span className="snf-vbar" />
            </div>
            <div>
              <Reveal><p className="snf-over">Software System · Shahan Naqvi v2</p></Reveal>
              <Reveal delay={0.08}>
                <h1 className="snf-disp mt-4 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.04]">
                  Software, <span className="snf-grad">built to last.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}><p className="mt-5 max-w-[52ch] text-[15px]" style={{ color: "var(--g500)" }}>Modern, scalable digital solutions — written to be maintained.</p></Reveal>
              <Reveal delay={0.24}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="snf-btn snf-btn-pri" style={{ color: "#fff" }} href="#">Start a project ↗</a>
                  <a className="snf-btn snf-btn-gh" href="#stack">See the stack</a>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div id="stack" className="mt-7 flex flex-wrap gap-2">
                  {tags.map((t, i) => <span key={t} className={"snf-tag " + (i % 2 ? "snf-tag-i" : "snf-tag-b")}>{t}</span>)}
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-[#E2E6EF] bg-white/75 p-6 shadow-[0_30px_60px_-40px_rgba(13,17,54,.4)] backdrop-blur">
              <p className="snf-over">How we ship</p>
              <p className="snf-disp mt-2 text-xl font-semibold">Scoped. Shipped. Maintained.</p>
              <div className="mt-5 h-[5px] w-full rounded-full" style={{ background: "var(--g200)" }}>
                <div className="relative h-full rounded-full" style={{ width: "68%", background: "var(--blue)" }}>
                  <span className="absolute right-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 translate-x-1/2 rounded-full" style={{ background: "var(--indigo)" }} />
                </div>
              </div>
              <p className="mt-2 text-[11px]" style={{ color: "var(--g400)" }}>30-day support window included</p>
            </div>
          </Reveal>
        </div>
      </header>

      {/* CARDS */}
      <section className="snf-sec bg-white">
        <div className="snf-wrap">
          <Reveal><div className="snf-sechead mb-8 flex items-baseline gap-3"><span className="s">A</span><h2>What we deliver</h2></div></Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.title}>
                  <div className={"snf-card " + c.tone}>
                    <span className="snf-ico" style={{ background: i % 2 ? "var(--indigo)" : "var(--blue)" }}><Icon className="h-5 w-5" strokeWidth={1.9} /></span>
                    <h3 className="snf-disp mt-4 text-lg font-medium">{c.title}</h3>
                    <p className="mt-2 text-[13.5px]" style={{ color: "var(--g600)" }}>{c.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="snf-sec relative overflow-hidden" style={{ background: "linear-gradient(135deg,#EEF3FF,#EEF0FF)" }}>
        <Crosshair className="absolute right-12 top-10 hidden md:block" color="#6457E8" />
        <div className="snf-wrap flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            <div className="hidden flex-col items-center gap-2 pt-1 sm:flex"><span className="snf-vdot" /><span className="snf-vbar" style={{ height: 64 }} /></div>
            <div>
              <p className="snf-over">Let&apos;s build</p>
              <h2 className="snf-disp mt-2 max-w-[20ch] text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.05]">Bring us the brief — <span className="snf-grad">we&apos;ll bring the scope.</span></h2>
            </div>
          </div>
          <a className="snf-btn snf-btn-pri shrink-0" style={{ color: "#fff" }} href="#">Start a conversation →</a>
        </div>
      </section>
    </div>
  );
}
