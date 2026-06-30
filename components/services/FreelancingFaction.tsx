"use client";

/* FREELANCING SERVICES faction — "VertigoWorks" design system.
   A distinct kinetic identity: voltage-blue / hyper-coral / acid palette,
   Bricolage Grotesque + Sora + Hanken Grotesk + Space Mono type, the vortex mark,
   and hard offset-shadow components. All styling is scoped under `.vw-root`
   so it never leaks into the PVP teal/orange brand. Content is the real
   serviceDetails["digital-freelancing"]. */

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";
import { Reveal, Stagger, StaggerItem, Marquee } from "@/components/lab/primitives";

function Vortex({ size = 64, spin = false, scheme = "brand" }: { size?: number; spin?: boolean; scheme?: "brand" | "reverse" | "acid" }) {
  const a = scheme === "reverse" || scheme === "acid" ? "#fff" : "var(--voltage)";
  const b = scheme === "acid" ? "var(--acid)" : "var(--coral)";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" className={spin ? "vw-spin" : ""} style={{ transformOrigin: "50% 50%" }}>
      <g fill="none" strokeWidth={3.4} strokeLinecap="round">
        <circle cx="50" cy="50" r="46" stroke={a} />
        <circle cx="54" cy="46" r="35" stroke={b} />
        <circle cx="58" cy="43" r="24" stroke={a} />
        <circle cx="61" cy="41" r="13" stroke={b} />
        <circle cx="63" cy="39" r="4.5" fill="var(--acid)" stroke="none" />
      </g>
    </svg>
  );
}

export function FreelancingFaction({
  service,
  next,
}: {
  service: ServiceDetail;
  next?: { slug: string; title: string };
}) {
  const marquee = ["Remote Development", "Digital Marketing", "Graphic Design", "Content Writing", "Technical Support", "Outsourced Ops"];

  return (
    <div className="vw-root">
      <style>{`
        .vw-root{
          --voltage:#1F3BFF; --coral:#FF4324; --acid:#E6FF3D;
          --vwink:#14141B; --vwpaper:#F6F2EA; --vwmist:#E4DED2; --vwslate:#6A6A78;
          --vwdisplay:var(--font-bricolage),sans-serif; --vwmetric:var(--font-sora),sans-serif;
          --vwbody:var(--font-hanken),sans-serif; --vwmono:var(--font-space-mono),monospace;
          background:var(--vwpaper); color:var(--vwink); font-family:var(--vwbody); line-height:1.5;
        }
        .vw-root ::selection{background:var(--acid);color:var(--vwink)}
        .vw-wrap{max-width:1180px;margin:0 auto;padding:0 clamp(1rem,4vw,2rem)}
        .vw-kicker{font-family:var(--vwmono);font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--vwslate)}
        .vw-sec{padding:84px 0;border-top:1.5px solid var(--vwmist)}
        .vw-sechead{display:flex;align-items:baseline;gap:16px;margin-bottom:44px}
        .vw-sechead h2{font-family:var(--vwdisplay);font-weight:800;font-size:clamp(1.6rem,4vw,2.6rem);letter-spacing:-.02em;line-height:1}
        .vw-sechead .num{font-family:var(--vwmono);font-size:.8rem;color:var(--coral)}
        .vw-btn{font-family:var(--vwbody);font-weight:700;font-size:.95rem;cursor:pointer;padding:13px 24px;border-radius:2px;transition:transform .15s ease, box-shadow .15s ease, background .15s ease;text-decoration:none;display:inline-flex;align-items:center;gap:8px;border:none}
        .vw-btn-primary{background:var(--voltage);color:#fff;box-shadow:4px 4px 0 var(--vwink)}
        .vw-btn-primary:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--vwink)}
        .vw-btn-coral{background:var(--coral);color:#fff;box-shadow:4px 4px 0 var(--vwink)}
        .vw-btn-coral:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--vwink)}
        .vw-btn-ghost{background:transparent;color:var(--vwink);border:2px solid var(--vwink);padding:11px 22px}
        .vw-btn-ghost:hover{background:var(--vwink);color:var(--vwpaper)}
        .vw-panel{border:1.5px solid var(--vwmist);border-radius:8px;padding:28px;background:#fff;transition:transform .15s ease, box-shadow .15s ease, border-color .15s ease;height:100%}
        .vw-panel:hover{transform:translate(-3px,-3px);box-shadow:8px 8px 0 var(--voltage);border-color:var(--vwink)}
        .vw-pcard{background:var(--vwink);color:var(--vwpaper);border-radius:10px;padding:28px;position:relative;overflow:hidden;height:100%}
        .vw-pcard .vw-plan{font-family:var(--vwmono);font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--acid)}
        .vw-pcard ul{list-style:none;margin:14px 0 0;display:flex;flex-direction:column;gap:9px}
        .vw-pcard li{font-size:.92rem;display:flex;gap:9px;align-items:flex-start}
        .vw-pcard li::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--acid);flex:none;margin-top:7px}
        .vw-badge{font-family:var(--vwmono);font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;padding:6px 12px;border-radius:99px;font-weight:700;border:1.5px solid var(--vwink);display:inline-block}
        .vw-h1{font-family:var(--vwdisplay);font-weight:800;line-height:.92;letter-spacing:-.035em;font-size:clamp(2.6rem,7.5vw,5.5rem)}
        .vw-h1 .lo{color:var(--voltage)}
        .vw-h1 .wo{-webkit-text-stroke:2px var(--vwink);color:transparent}
        @keyframes vw-spin{to{transform:rotate(360deg)}}
        .vw-spin{animation:vw-spin 26s linear infinite}
        @media (prefers-reduced-motion: reduce){ .vw-spin{animation:none} }
      `}</style>

      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full blur-2xl" style={{ background: "radial-gradient(circle,rgba(31,59,255,.18),transparent 70%)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full blur-2xl" style={{ background: "radial-gradient(circle,rgba(255,67,36,.16),transparent 70%)" }} />
        <div className="vw-wrap relative grid items-center gap-10 py-28 md:grid-cols-[1.2fr_.8fr] md:py-40">
          <div>
            <Reveal>
              <p className="vw-kicker">What we offer · {service.number} · Freelancing Services</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="vw-h1 mt-5">
                Vetted <span className="lo">talent</span>,<br />
                <span className="wo">on demand.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[32ch] text-lg" style={{ color: "var(--vwink)" }}>{service.tagline}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link href="/contact?topic=freelancing" className="vw-btn vw-btn-primary" style={{ color: "#fff" }}>
                  Hire talent <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="#how" className="vw-btn vw-btn-ghost">How it works</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="flex justify-center">
            <div style={{ filter: "drop-shadow(8px 12px 0 rgba(20,20,27,.12))" }}>
              <Vortex size={320} spin scheme="brand" />
            </div>
          </Reveal>
        </div>
      </header>

      {/* ===== MARQUEE ===== */}
      <div style={{ borderTop: "1.5px solid var(--vwink)", borderBottom: "1.5px solid var(--vwink)", background: "var(--voltage)", color: "#fff" }}>
        <Marquee speed={26} className="py-3.5">
          {marquee.map((t) => (
            <span key={t} className="flex items-center gap-8" style={{ fontFamily: "var(--vwdisplay)", fontWeight: 800, fontSize: "1.6rem", textTransform: "uppercase", letterSpacing: "-.01em" }}>
              {t} <span style={{ color: "var(--acid)" }}>✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ===== DELIVERABLES ===== */}
      <section className="vw-sec" style={{ borderTop: "none" }}>
        <div className="vw-wrap">
          <Reveal>
            <div className="vw-sechead"><span className="num">A</span><h2>What we deliver</h2></div>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2">
            {service.deliverables.map((d, i) => (
              <StaggerItem key={d.title}>
                <div className="vw-panel">
                  <div className="flex items-center justify-between">
                    <span style={{ fontFamily: "var(--vwmetric)", fontWeight: 800, fontSize: "2rem", letterSpacing: "-.03em", color: "var(--voltage)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Vortex size={34} />
                  </div>
                  <h3 className="mt-4" style={{ fontFamily: "var(--vwdisplay)", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-.01em" }}>{d.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--vwslate)" }}>{d.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== AUDIENCE ===== */}
      <section className="vw-sec">
        <div className="vw-wrap">
          <Reveal>
            <div className="vw-sechead"><span className="num">B</span><h2>Who it&apos;s for</h2></div>
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {service.audience.map((aud, i) => (
              <StaggerItem key={i}>
                <div className="vw-panel" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span className="vw-badge" style={{ alignSelf: "flex-start", background: i % 2 ? "var(--coral)" : "var(--voltage)", color: "#fff", border: "none" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontFamily: "var(--vwdisplay)", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.25 }}>{aud}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== ENGAGEMENT ===== */}
      <section id="how" className="vw-sec">
        <div className="vw-wrap">
          <Reveal>
            <div className="vw-sechead"><span className="num">C</span><h2>How we work</h2></div>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {service.engagement.map((e, i) => (
              <StaggerItem key={e.name}>
                <div className="vw-pcard">
                  {i === 0 && <div className="vw-spin" style={{ position: "absolute", right: -44, top: -44, opacity: 0.45 }}><Vortex size={170} scheme="acid" /></div>}
                  <div className="vw-plan">Model {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-1.5" style={{ fontFamily: "var(--vwdisplay)", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-.02em", position: "relative", zIndex: 2 }}>{e.name}</h3>
                  <p className="mt-3 text-sm" style={{ color: "rgba(246,242,234,.75)", position: "relative", zIndex: 2 }}>{e.body}</p>
                  <ul>
                    <li style={{ color: "rgba(246,242,234,.9)" }}>
                      <span><span style={{ fontFamily: "var(--vwmono)", fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--acid)" }}>Best for</span> — {e.suited}</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="vw-sec" style={{ background: "var(--vwink)", color: "var(--vwpaper)", borderTop: "1.5px solid var(--vwink)" }}>
        <div className="vw-wrap" style={{ position: "relative" }}>
          <div className="vw-spin" aria-hidden="true" style={{ position: "absolute", right: -30, top: -30, opacity: 0.5 }}>
            <Vortex size={150} scheme="reverse" />
          </div>
          <Reveal>
            <p className="vw-kicker" style={{ color: "var(--acid)" }}>Let&apos;s move</p>
            <h2 className="mt-3 max-w-[18ch]" style={{ fontFamily: "var(--vwdisplay)", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.4rem)", letterSpacing: "-.03em", lineHeight: 1 }}>
              Bring the brief. We bring the bench.
            </h2>
            <p className="mt-4 max-w-[44ch]" style={{ color: "rgba(246,242,234,.7)" }}>
              30-minute discovery call. A curated 3-person shortlist with sample work and rates inside 48 hours. No obligation.
            </p>
            <Link href="/contact?topic=freelancing" className="vw-btn vw-btn-coral mt-8" style={{ color: "#fff", boxShadow: "4px 4px 0 var(--voltage)" }}>
              Start a brief <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== NEXT SERVICE ===== */}
      {next && (
        <section className="vw-sec">
          <div className="vw-wrap">
            <Link href={`/services/${next.slug}`} className="group flex items-center justify-between gap-6">
              <div>
                <p className="vw-kicker">Next service</p>
                <p className="mt-2 transition-colors" style={{ fontFamily: "var(--vwdisplay)", fontWeight: 800, fontSize: "clamp(1.4rem,4vw,2.2rem)", letterSpacing: "-.02em" }}>
                  {next.title}
                </p>
              </div>
              <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-1" style={{ color: "var(--voltage)" }} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
