"use client";

/* DESIGN-LAB demo E — "Freelancing System" (VertigoWorks × mHealth)
   Combines both design systems: VertigoWorks tokens (voltage/coral/acid) +
   the mHealth display face (Bricolage Grotesque) + mHealth's kinetic
   build-map components (hard-shadow fact tiles, tier cards, day-node
   timeline). Scoped under `.vwf` so it stays self-contained. */

import { Code2, Megaphone, LifeBuoy } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./primitives";

function Vortex({ size = 64, spin = false, scheme = "brand" }: { size?: number; spin?: boolean; scheme?: "brand" | "reverse" | "acid" }) {
  const a = scheme === "reverse" || scheme === "acid" ? "#fff" : "#1F3BFF";
  const b = scheme === "acid" ? "#E6FF3D" : "#FF4324";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" className={spin ? "vwf-spin" : ""} style={{ transformOrigin: "50% 50%" }}>
      <g fill="none" strokeWidth={3.4} strokeLinecap="round">
        <circle cx="50" cy="50" r="46" stroke={a} />
        <circle cx="54" cy="46" r="35" stroke={b} />
        <circle cx="58" cy="43" r="24" stroke={a} />
        <circle cx="61" cy="41" r="13" stroke={b} />
        <circle cx="63" cy="39" r="4.5" fill="#E6FF3D" stroke="none" />
      </g>
    </svg>
  );
}

const facts = [
  { n: "48h", c: "v", l: "Shortlist turnaround" },
  { n: "3", c: "c", l: "Vetted picks per brief" },
  { n: "100%", c: "v", l: "Scope-locked work" },
  { n: "0", c: "c", l: "Gig-lottery risk" },
];

const adds = [
  { ix: "01", icon: Code2, title: "Remote development", body: "Web, technical assignments and outsourced engineering by vetted remote professionals." },
  { ix: "02", icon: Megaphone, title: "Marketing & design", body: "Digital marketing, graphic design, content writing and brand support — sized to the brief." },
  { ix: "03", icon: LifeBuoy, title: "Support & operations", body: "Technical support, operations and proposal-writing support for ongoing or one-off needs." },
];

const tiers = [
  { kind: "client", badge: "Project", title: "Project-based", sub: "fixed scope", body: "Fixed scope, fixed price, one accountable lead." },
  { kind: "backend", badge: "Retainer", title: "Fractional bench", sub: "monthly", body: "Pre-vetted talent on a recurring retainer — fixed hours per practice area." },
  { kind: "db", badge: "Placement", title: "Talent placement", sub: "fee on hire", body: "We source, vet and place. You contract directly." },
];

const days = [
  { d: "Day 1", focus: "Brief", b: "Scope & success metrics" },
  { d: "Day 2", focus: "Shortlist", b: "3 vetted picks", m: true },
  { d: "Day 3", focus: "Pick", b: "You choose" },
  { d: "Day 4", focus: "Kickoff", b: "Onboard & plan" },
  { d: "Day 5", focus: "Sprint", b: "Build in the open" },
  { d: "Day 6", focus: "Review", b: "Demo & adjust", m: true },
  { d: "Day 7", focus: "Ship", b: "Deliver against scope" },
];

export function DemoFreelancing() {
  return (
    <div className="vwf">
      <style>{`
        .vwf{
          --voltage:#1F3BFF; --coral:#FF4324; --acid:#E6FF3D;
          --ink:#14141B; --paper:#F6F2EA; --mist:#E4DED2; --slate:#6A6A78;
          --disp:var(--font-bricolage),sans-serif; --metric:var(--font-sora),sans-serif;
          --body:var(--font-hanken),sans-serif; --mono:var(--font-space-mono),monospace;
          background:var(--paper); color:var(--ink); font-family:var(--body); line-height:1.5;
        }
        .vwf ::selection{background:var(--acid);color:var(--ink)}
        .vwf-wrap{max-width:1180px;margin:0 auto;padding:0 clamp(1rem,4vw,2rem)}
        .vwf-kick{font-family:var(--mono);font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--coral)}
        .vwf h1,.vwf h2,.vwf h3{font-family:var(--disp)}
        .vwf-sec{padding:64px 0;border-top:1.5px solid var(--mist)}
        .vwf-sechead{display:flex;align-items:baseline;gap:13px;margin-bottom:26px}
        .vwf-sechead .s{font-family:var(--mono);font-size:.78rem;color:var(--coral)}
        .vwf-sechead h2{font-weight:800;font-size:clamp(1.4rem,3.4vw,2.1rem);letter-spacing:-.02em;line-height:1}
        .vwf-h1{font-weight:800;line-height:.92;letter-spacing:-.035em;font-size:clamp(2.6rem,7.5vw,5.2rem)}
        .vwf-h1 .lo{color:var(--voltage)} .vwf-h1 .wo{-webkit-text-stroke:2px var(--ink);color:transparent}
        .vwf-btn{font-family:var(--body);font-weight:700;font-size:.95rem;cursor:pointer;padding:13px 24px;border-radius:2px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;border:none;transition:transform .15s,box-shadow .15s}
        .vwf-btn-pri{background:var(--voltage);color:#fff;box-shadow:4px 4px 0 var(--ink)}
        .vwf-btn-pri:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--ink)}
        .vwf-btn-gh{background:transparent;color:var(--ink);border:2px solid var(--ink);padding:11px 22px}
        .vwf-btn-gh:hover{background:var(--ink);color:var(--paper)}
        .vwf-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}
        .vwf-fact{border:1.6px solid var(--ink);border-radius:8px;padding:15px 16px;background:#fff;box-shadow:4px 4px 0 var(--ink)}
        .vwf-fact .n{font-family:var(--metric);font-weight:800;font-size:1.9rem;letter-spacing:-.03em;line-height:1}
        .vwf-fact .n.v{color:var(--voltage)} .vwf-fact .n.c{color:var(--coral)}
        .vwf-fact .l{font-family:var(--mono);font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:var(--slate);margin-top:8px}
        .vwf-adds{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .vwf-add{border:1.5px solid var(--mist);border-radius:9px;padding:22px;background:#fff;transition:transform .15s,box-shadow .15s;height:100%}
        .vwf-add:hover{transform:translate(-3px,-3px);box-shadow:6px 6px 0 var(--ink)}
        .vwf-add .ix{width:34px;height:34px;border-radius:7px;background:var(--ink);color:var(--acid);font-family:var(--metric);font-weight:800;display:flex;align-items:center;justify-content:center;box-shadow:3px 3px 0 var(--coral);margin-bottom:14px}
        .vwf-add h3{font-weight:700;font-size:1.08rem;letter-spacing:-.01em;margin-bottom:5px}
        .vwf-add p{font-size:.9rem;color:#3a3a44}
        .vwf-arch{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .vwf-tier{border-radius:10px;padding:20px;border:1.6px solid var(--ink)}
        .vwf-tier.client{background:#fff;box-shadow:5px 5px 0 var(--voltage)}
        .vwf-tier.backend{background:var(--ink);color:var(--paper);box-shadow:6px 6px 0 var(--coral)}
        .vwf-tier.db{background:#fff;box-shadow:5px 5px 0 var(--ink)}
        .vwf-tier .thead{display:flex;align-items:center;gap:10px;margin-bottom:12px}
        .vwf-tier .badge{font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;padding:4px 9px;border-radius:99px;font-weight:700}
        .vwf-tier.client .badge{background:var(--voltage);color:#fff}
        .vwf-tier.backend .badge{background:var(--acid);color:var(--ink)}
        .vwf-tier.db .badge{background:var(--ink);color:var(--paper)}
        .vwf-tier .ttitle{font-weight:700;font-size:1.05rem;letter-spacing:-.01em}
        .vwf-tier .tsub{font-family:var(--mono);font-size:.66rem;color:var(--slate);margin-left:auto}
        .vwf-tl{position:relative;margin-top:8px}
        .vwf-rail{position:absolute;left:0;right:0;top:46px;height:2.5px;background:var(--mist)}
        .vwf-days{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;position:relative}
        .vwf-day{display:flex;flex-direction:column;align-items:center;text-align:center}
        .vwf-day .gate{height:24px;font-family:var(--mono);font-size:.58rem;letter-spacing:.06em;font-weight:700;color:var(--coral)}
        .vwf-day .node{width:38px;height:38px;border-radius:50%;background:#fff;border:2.4px solid var(--ink);font-family:var(--metric);font-weight:800;font-size:.8rem;display:flex;align-items:center;justify-content:center;z-index:2;position:relative}
        .vwf-day.m .node{background:var(--coral);color:#fff;border-color:var(--coral);box-shadow:0 0 0 4px rgba(255,67,36,.18)}
        .vwf-day .dl{font-family:var(--mono);font-size:.56rem;color:var(--slate);margin:8px 0 4px;letter-spacing:.04em}
        .vwf-day .fc{font-size:.72rem;line-height:1.3;color:#33333d}
        .vwf-day .fc b{color:var(--ink);font-weight:700}
        @keyframes vwf-spin{to{transform:rotate(360deg)}}
        .vwf-spin{animation:vwf-spin 26s linear infinite}
        @media (prefers-reduced-motion: reduce){ .vwf-spin{animation:none} }
        @media(max-width:820px){ .vwf-facts{grid-template-columns:repeat(2,1fr)} .vwf-adds,.vwf-arch{grid-template-columns:1fr} .vwf-days{grid-template-columns:repeat(2,1fr);gap:18px} .vwf-rail{display:none} }
      `}</style>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="vwf-wrap relative grid items-center gap-10 py-24 md:grid-cols-[1.2fr_.8fr] md:py-28">
          <div>
            <Reveal><p className="vwf-kick">Freelancing System · VertigoWorks × mHealth</p></Reveal>
            <Reveal delay={0.08}>
              <h1 className="vwf-h1 mt-5">
                Vetted <span className="lo">talent</span>,<br />
                <span className="wo">on demand.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[34ch] text-lg">A structured freelancing ecosystem — vetted benches, clear scope, kinetic delivery.</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a className="vwf-btn vwf-btn-pri" style={{ color: "#fff" }} href="#">Hire talent →</a>
                <a className="vwf-btn vwf-btn-gh" href="#map">See the map</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="flex justify-center">
            <div style={{ filter: "drop-shadow(8px 12px 0 rgba(20,20,27,.12))" }}><Vortex size={300} spin /></div>
          </Reveal>
        </div>
      </header>

      {/* FACTS */}
      <section className="vwf-sec" style={{ borderTop: "none" }}>
        <div className="vwf-wrap">
          <Stagger className="vwf-facts">
            {facts.map((f) => (
              <StaggerItem key={f.l}>
                <div className="vwf-fact">
                  <div className={"n " + f.c}>{f.n}</div>
                  <div className="l">{f.l}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="vwf-sec">
        <div className="vwf-wrap">
          <Reveal><div className="vwf-sechead"><span className="s">A</span><h2>What we deliver</h2></div></Reveal>
          <Stagger className="vwf-adds">
            {adds.map((a) => {
              const Icon = a.icon;
              return (
                <StaggerItem key={a.title}>
                  <div className="vwf-add">
                    <div className="ix">{a.ix}</div>
                    <h3 className="flex items-center gap-2"><Icon className="h-4 w-4" />{a.title}</h3>
                    <p>{a.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ENGAGEMENT TIERS */}
      <section className="vwf-sec">
        <div className="vwf-wrap">
          <Reveal><div className="vwf-sechead"><span className="s">B</span><h2>How we work</h2></div></Reveal>
          <Stagger className="vwf-arch">
            {tiers.map((t) => (
              <StaggerItem key={t.title}>
                <div className={"vwf-tier " + t.kind}>
                  <div className="thead">
                    <span className="badge">{t.badge}</span>
                    <span className="ttitle">{t.title}</span>
                    <span className="tsub">{t.sub}</span>
                  </div>
                  <p style={{ fontSize: ".9rem", color: t.kind === "backend" ? "rgba(246,242,234,.8)" : "#3a3a44" }}>{t.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BUILD MAP TIMELINE */}
      <section id="map" className="vwf-sec">
        <div className="vwf-wrap">
          <Reveal><div className="vwf-sechead"><span className="s">C</span><h2>The engagement map</h2></div></Reveal>
          <Reveal delay={0.1}>
            <div className="vwf-tl">
              <div className="vwf-rail" />
              <div className="vwf-days">
                {days.map((d, i) => (
                  <div key={i} className={"vwf-day" + (d.m ? " m" : "")}>
                    <span className="gate">{d.m ? "◆ gate" : ""}</span>
                    <span className="node">{i + 1}</span>
                    <span className="dl">{d.d}</span>
                    <span className="fc"><b>{d.focus}</b><br />{d.b}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="vwf-sec" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="vwf-wrap" style={{ position: "relative" }}>
          <div className="vwf-spin" aria-hidden="true" style={{ position: "absolute", right: -20, top: -20, opacity: 0.5 }}>
            <Vortex size={140} scheme="reverse" />
          </div>
          <Reveal>
            <p className="vwf-kick" style={{ color: "var(--acid)" }}>Let&apos;s move</p>
            <h2 className="mt-3 max-w-[18ch]" style={{ fontWeight: 800, fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "-.03em", lineHeight: 1 }}>
              Bring the brief. We bring the bench.
            </h2>
            <a className="vwf-btn vwf-btn-pri mt-8" style={{ color: "#fff", background: "var(--coral)", boxShadow: "4px 4px 0 var(--voltage)" }} href="#">Start a brief →</a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
