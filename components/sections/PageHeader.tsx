import type { ReactNode } from "react";

type Variant = "ecosystem" | "skyline" | "team" | "launch" | "chart" | "posts" | "send";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  sub,
  variant = "ecosystem",
}: {
  eyebrow: string;
  title: ReactNode;
  highlight?: ReactNode;
  sub?: ReactNode;
  variant?: Variant;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-paper-warm via-paper to-mist py-14 md:py-20">
      {/* faint dot grid */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-40">
        <defs>
          <pattern id="ph-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#1a5b64" fillOpacity="0.14" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-dots)" />
      </svg>

      {/* purposeful art per page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] top-1/2 hidden h-[68%] w-[38%] -translate-y-1/2 lg:block"
      >
        <HeaderArt variant={variant} />
      </div>

      <div className="container-content relative">
        <p className="text-eyebrow text-orange-600">{eyebrow}</p>
        <h1 className="text-display-xl mt-4 max-w-3xl text-ink">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-orange-600">{highlight}</span>
            </>
          )}
        </h1>
        <span className="mt-5 block h-1 w-16 rounded-full bg-orange-600" />
        {sub && <p className="text-body-lg mt-6 max-w-2xl text-ink-muted">{sub}</p>}
      </div>
    </section>
  );
}

const TEAL = "#1a5b64";
const ORANGE = "#e97724";

function HeaderArt({ variant }: { variant: Variant }) {
  switch (variant) {
    case "skyline": return <ArtSkyline />;
    case "team": return <ArtTeam />;
    case "launch": return <ArtLaunch />;
    case "chart": return <ArtChart />;
    case "posts": return <ArtPosts />;
    case "send": return <ArtSend />;
    default: return <ArtEcosystem />;
  }
}

/* SERVICES — one ecosystem, solutions orbiting + data flowing to the core */
function ArtEcosystem() {
  const cx = 128, cy = 98;
  const nodes = [
    { x: 60, y: 42, c: ORANGE, ic: "code" },
    { x: 202, y: 50, c: TEAL, ic: "compass" },
    { x: 56, y: 156, c: TEAL, ic: "users" },
    { x: 200, y: 150, c: ORANGE, ic: "spark" },
  ] as const;
  return (
    <svg viewBox="0 0 240 196" className="h-full w-full">
      {/* connectors */}
      {nodes.map((n, i) => (
        <line key={`l${i}`} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke={TEAL} strokeOpacity="0.16" strokeWidth="1.5"
          strokeDasharray="500" style={{ animation: `ph-draw 1s ease-out ${i * 0.1}s both` }} />
      ))}
      {/* data pulses traveling node -> core, continuously */}
      {nodes.map((n, i) => (
        <circle key={`p${i}`} r="3.5" fill={n.c} opacity="0">
          <animateMotion dur="2.4s" begin={`${1 + i * 0.5}s`} repeatCount="indefinite"
            path={`M${n.x},${n.y} L${cx},${cy}`} />
          <animate attributeName="opacity" dur="2.4s" begin={`${1 + i * 0.5}s`} repeatCount="indefinite"
            values="0;1;1;0" keyTimes="0;0.1;0.85;1" />
        </circle>
      ))}
      {/* satellite nodes — gentle continuous beat */}
      {nodes.map((n, i) => (
        <g key={`n${i}`} className="motion-safe:animate-[ph-beat_3s_ease-in-out_infinite]"
          style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${i * 0.5}s` }}>
          <circle cx={n.x} cy={n.y} r="17" fill={n.c} fillOpacity="0.12" />
          <circle cx={n.x} cy={n.y} r="13" fill={n.c} />
          <NodeGlyph kind={n.ic} x={n.x} y={n.y} />
        </g>
      ))}
      {/* rotating dashed orbit around the core */}
      <circle cx={cx} cy={cy} r="40" fill="none" stroke={ORANGE} strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 7"
        className="motion-safe:animate-[spin_16s_linear_infinite]" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      {/* pulsing halo */}
      <circle cx={cx} cy={cy} r="30" fill={TEAL} fillOpacity="0.1"
        className="motion-safe:animate-[ph-beat_3.5s_ease-in-out_infinite]" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      {/* core */}
      <circle cx={cx} cy={cy} r="24" fill={TEAL} />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="#faf7f0" fontSize="13" fontWeight="700" fontFamily="system-ui">PVP</text>
    </svg>
  );
}

function NodeGlyph({ kind, x, y }: { kind: string; x: number; y: number }) {
  const s = "#faf7f0";
  if (kind === "code")
    return <path d={`M${x-5},${y-3} l-3,3 3,3 M${x+5},${y-3} l3,3 -3,3`} stroke={s} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
  if (kind === "compass")
    return <path d={`M${x},${y-5} l2.5,7 -7,-2.5 z`} fill={s} />;
  if (kind === "users")
    return <g fill={s}><circle cx={x} cy={y-2.5} r="2.6" /><path d={`M${x-4.5},${y+5} a4.5,4.5 0 0 1 9,0 z`} /></g>;
  return <path d={`M${x},${y-6} l1.6,4.4 4.4,1.6 -4.4,1.6 -1.6,4.4 -1.6,-4.4 -4.4,-1.6 4.4,-1.6 z`} fill={s} />;
}

/* ABOUT — Islamabad line-art skyline (built from here) */
function ArtSkyline() {
  const draw = (d: string, delay: number, stroke = TEAL, op = 0.4) => (
    <path d={d} fill="none" stroke={stroke} strokeOpacity={op} strokeWidth="2" strokeLinejoin="round"
      strokeDasharray="600" style={{ animation: `ph-draw 1.8s ease-out ${delay}s both` }} />
  );
  return (
    <svg viewBox="0 0 260 200" className="h-full w-full">
      {/* Margalla hills */}
      {draw("M0,120 C40,96 70,108 100,86 C130,66 160,96 200,78 C230,66 250,86 260,80", 0, TEAL, 0.25)}
      {/* Faisal Mosque: 4 minarets + tent dome */}
      {draw("M96,180 L96,96 M164,180 L164,96 M112,180 L112,104 M148,180 L148,104", 0.5, TEAL, 0.45)}
      {draw("M104,180 L130,120 L156,180", 0.8, ORANGE, 0.6)}
      {/* skyline buildings */}
      {draw("M10,180 L10,140 L40,140 L40,180 M48,180 L48,124 L72,124 L72,180", 1.0, TEAL, 0.35)}
      {draw("M188,180 L188,128 L214,128 L214,180 M222,180 L222,146 L246,146 L246,180", 1.0, TEAL, 0.35)}
      {/* ground line */}
      <line x1="0" y1="180" x2="260" y2="180" stroke={TEAL} strokeOpacity="0.3" strokeWidth="1.5" />
      {/* sun/moon */}
      <circle cx="210" cy="56" r="12" fill={ORANGE} fillOpacity="0.5" className="motion-safe:animate-[ph-beat_4s_ease-in-out_infinite]" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
    </svg>
  );
}

/* TEAM — fanned profile / ID cards */
function ArtTeam() {
  const ProfileCard = ({ x, y, rot, accent, delay }: { x:number;y:number;rot:number;accent:string;delay:number }) => (
    <g transform={`translate(${x},${y}) rotate(${rot})`}>
      <g className="motion-safe:animate-[ph-float_ease-in-out_infinite]"
        style={{ transformBox:"fill-box", transformOrigin:"center", animationDuration:`${5+delay}s`, animationDelay:`${delay*0.5}s` }}>
        <g style={{ animation:`ph-fade .6s ease ${delay*0.25}s both` }}>
          <rect x="-66" y="-46" width="132" height="92" rx="12" fill="#ffffff" stroke="#e0ddd1" />
          {/* avatar */}
          <circle cx="-38" cy="-12" r="20" fill={accent} fillOpacity="0.14" />
          <circle cx="-38" cy="-18" r="7" fill={accent} fillOpacity="0.85" />
          <path d="M-49,-1 a11,11 0 0 1 22,0 z" fill={accent} fillOpacity="0.85" />
          {/* name + role lines */}
          <rect x="-12" y="-22" width="62" height="9" rx="4.5" fill={TEAL} fillOpacity="0.4" />
          <rect x="-12" y="-7" width="44" height="7" rx="3.5" fill={ORANGE} fillOpacity="0.45" />
          {/* tag badges */}
          <rect x="-50" y="22" width="34" height="12" rx="6" fill={TEAL} fillOpacity="0.12" />
          <rect x="-12" y="22" width="44" height="12" rx="6" fill={accent} fillOpacity="0.12" />
        </g>
      </g>
    </g>
  );
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full">
      <ProfileCard x={150} y={130} rot={7} accent={TEAL} delay={1.4} />
      <ProfileCard x={128} y={104} rot={-3} accent={ORANGE} delay={0.7} />
      <ProfileCard x={108} y={74} rot={4} accent={TEAL} delay={0} />
    </svg>
  );
}

/* VENTURES — building blocks assembling into a structure */
function ArtLaunch() {
  // pyramid of blocks (we build up)
  const blocks = [
    { x: 48, y: 150, c: TEAL, d: 0 },
    { x: 98, y: 150, c: ORANGE, d: 0.15 },
    { x: 148, y: 150, c: TEAL, d: 0.3 },
    { x: 73, y: 116, c: ORANGE, d: 0.55 },
    { x: 123, y: 116, c: TEAL, d: 0.7 },
    { x: 98, y: 82, c: ORANGE, d: 0.95 },
  ];
  const Block = ({ x, y, c, d }: { x:number;y:number;c:string;d:number }) => (
    <g style={{ animation: `ph-grow .5s cubic-bezier(.34,1.4,.5,1) ${d}s both`, transformBox:"fill-box", transformOrigin:"bottom" }}>
      <rect x={x} y={y} width="44" height="30" rx="6" fill={c} fillOpacity="0.9" />
      <rect x={x} y={y} width="44" height="9" rx="6" fill="#ffffff" fillOpacity="0.22" />
    </g>
  );
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full">
      <g className="motion-safe:animate-[ph-float_6s_ease-in-out_infinite]" style={{ transformBox:"fill-box", transformOrigin:"center" }}>
        {blocks.map((b, i) => <Block key={i} {...b} />)}
        {/* next block being placed — dashed, pulsing */}
        <rect x="98" y="48" width="44" height="30" rx="6" fill="none" stroke={ORANGE} strokeOpacity="0.6" strokeWidth="2" strokeDasharray="5 5"
          className="motion-safe:animate-[ph-beat_2.4s_ease-in-out_infinite]" style={{ transformBox:"fill-box", transformOrigin:"center" }} />
      </g>
      <line x1="30" y1="182" x2="210" y2="182" stroke={TEAL} strokeOpacity="0.15" strokeWidth="1.5" />
    </svg>
  );
}

/* INVESTORS — growth chart (kept; it works) */
function ArtChart() {
  const bars = [38, 56, 44, 72, 60, 88];
  const pts: [number, number][] = [[30,150],[66,120],[102,128],[138,92],[174,104],[210,64]];
  return (
    <svg viewBox="0 0 240 180" className="h-full w-full">
      <line x1="10" y1="160" x2="230" y2="160" stroke={TEAL} strokeOpacity="0.15" strokeWidth="1.5" />
      {bars.map((h, i) => (
        <rect key={i} x={20 + i * 36} y={160 - h} width="20" height={h} rx="3"
          fill={i % 2 === 0 ? TEAL : ORANGE} fillOpacity="0.22"
          style={{ transformBox: "fill-box", transformOrigin: "bottom", animation: `ph-grow 1.1s cubic-bezier(.4,0,.2,1) ${i * 0.12}s both` }} />
      ))}
      <polyline points={pts.map(p=>p.join(",")).join(" ")} fill="none" stroke={ORANGE} strokeOpacity="0.55" strokeWidth="2.5"
        strokeDasharray="500" style={{ animation: "ph-draw 1.6s ease-out .4s both" }} />
      {pts.map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3.5" fill={ORANGE} fillOpacity="0.85" style={{ animation:`ph-grow .4s ease ${.6+i*0.12}s both` }} />
      ))}
    </svg>
  );
}

/* BLOG — stacked article cards */
function ArtPosts() {
  const Card = ({ x, y, accent, delay }: { x:number;y:number;accent:string;delay:number }) => (
    <g className="motion-safe:animate-[ph-float_ease-in-out_infinite]" style={{ transformBox:"fill-box", transformOrigin:"center", animationDuration:`${5+delay}s`, animationDelay:`${delay*0.4}s` }}>
      <g style={{ animation:`ph-fade .6s ease ${delay*0.2}s both` }}>
        <rect x={x} y={y} width="150" height="96" rx="10" fill="#ffffff" stroke="#e0ddd1" />
        <rect x={x} y={y} width="150" height="30" rx="10" fill={accent} fillOpacity="0.14" />
        <circle cx={x+18} cy={y+15} r="6" fill={accent} fillOpacity="0.8" />
        <rect x={x+30} y={y+11} width="60" height="7" rx="3.5" fill={TEAL} fillOpacity="0.35" />
        <rect x={x+16} y={y+46} width="118" height="6" rx="3" fill={TEAL} fillOpacity="0.18" />
        <rect x={x+16} y={y+60} width="100" height="6" rx="3" fill={TEAL} fillOpacity="0.18" />
        <rect x={x+16} y={y+74} width="70" height="6" rx="3" fill={ORANGE} fillOpacity="0.3" />
      </g>
    </g>
  );
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full">
      <Card x={60} y={70} accent={TEAL} delay={1.4} />
      <Card x={40} y={45} accent={ORANGE} delay={0.7} />
      <Card x={20} y={20} accent={TEAL} delay={0} />
    </svg>
  );
}

/* CONTACT — a conversation starting (chat bubbles) */
function ArtSend() {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full">
      {/* incoming bubble (left, teal) */}
      <g style={{ animation: "ph-fade .5s ease .3s both" }}>
        <path d="M20,52 h120 a14,14 0 0 1 14,14 v28 a14,14 0 0 1 -14,14 h-96 l-16,14 v-14 h-8 a14,14 0 0 1 -14,-14 v-28 a14,14 0 0 1 14,-14 z" fill={TEAL} fillOpacity="0.1" stroke={TEAL} strokeOpacity="0.25" strokeWidth="1.5" />
        <rect x="34" y="68" width="92" height="7" rx="3.5" fill={TEAL} fillOpacity="0.35" />
        <rect x="34" y="82" width="66" height="7" rx="3.5" fill={TEAL} fillOpacity="0.25" />
      </g>
      {/* outgoing bubble (right, orange) */}
      <g style={{ animation: "ph-fade .5s ease 1.1s both" }}>
        <path d="M104,120 h104 a14,14 0 0 1 14,14 v22 a14,14 0 0 1 -14,14 h-90 l-16,12 v-12 h2 a14,14 0 0 1 -14,-14 v-22 a14,14 0 0 1 14,-14 z" fill={ORANGE} fillOpacity="0.12" stroke={ORANGE} strokeOpacity="0.3" strokeWidth="1.5" />
        <rect x="118" y="136" width="80" height="7" rx="3.5" fill={ORANGE} fillOpacity="0.4" />
        <rect x="118" y="150" width="54" height="7" rx="3.5" fill={ORANGE} fillOpacity="0.3" />
      </g>
      {/* typing indicator — dots bounce continuously */}
      <g style={{ animation: "ph-fade .4s ease 1.9s both" }}>
        <rect x="20" y="150" width="56" height="30" rx="15" fill={TEAL} fillOpacity="0.1" stroke={TEAL} strokeOpacity="0.2" strokeWidth="1.5" />
        {[34, 48, 62].map((cx, i) => (
          <circle key={i} cx={cx} cy={165} r="4" fill={TEAL} fillOpacity="0.6"
            className="motion-safe:animate-[ph-bounce_1.2s_ease-in-out_infinite]"
            style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${i * 0.18}s` }} />
        ))}
      </g>
    </svg>
  );
}
