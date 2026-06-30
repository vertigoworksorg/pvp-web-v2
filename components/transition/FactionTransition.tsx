"use client";

/* Theme-aware faction page transition.
   Mounted once in the root layout so it survives client navigations.
   Triggered by a window CustomEvent ("pvp:faction-go", { href, label, theme })
   that <FactionLink> (or an inline dispatch) fires.

   - theme "cinematic"  -> dark, glowing cover for Startup & Venture Development
   - theme "editorial"  -> bold orange/ink wipe for Consultancy & Advisory

   Respects prefers-reduced-motion: just navigates instantly. */

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Theme = "cinematic" | "editorial" | "vertigo";
type GoDetail = { href: string; label?: string; theme?: Theme };

// Every link to a faction route plays its themed transition — no per-link
// wiring needed. A global capture-phase click handler (below) catches them all.
const FACTION_ROUTES: Record<string, { theme: Theme; label: string }> = {
  "/services/innovative-startups": { theme: "cinematic", label: "Startup & Venture Development" },
  "/services/consultancy": { theme: "editorial", label: "Consultancy & Advisory" },
  "/services/digital-freelancing": { theme: "vertigo", label: "Freelancing Services" },
};
const stripSlash = (p: string) => (p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p);

const ENTER_MS = 620; // cover the screen, then navigate
const TOTAL_MS = 1500; // begin lifting the cover

const PARTICLES = Array.from({ length: 12 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12543.4321;
  return { left: 6 + (a - Math.floor(a)) * 88, delay: (b - Math.floor(b)) * 0.6, dur: 1.4 + (a - Math.floor(a)) * 1.2 };
});

export function FactionTransition() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [state, setState] = useState<{ active: boolean; label: string; theme: Theme }>({
    active: false,
    label: "",
    theme: "cinematic",
  });
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const run = useCallback(
    (detail: GoDetail) => {
      const href = detail.href;
      if (reduce) {
        router.push(href);
        return;
      }
      clearTimers();
      setState({ active: true, label: detail.label || "Pak Venture Point", theme: detail.theme || "cinematic" });
      timers.current.push(window.setTimeout(() => router.push(href), ENTER_MS));
      timers.current.push(window.setTimeout(() => setState((s) => ({ ...s, active: false })), TOTAL_MS));
    },
    [reduce, router]
  );

  useEffect(() => {
    // Explicit dispatches (e.g. the hero orbit, which must stay drag-aware).
    const handler = (e: Event) => run((e as CustomEvent<GoDetail>).detail);
    window.addEventListener("pvp:faction-go", handler as EventListener);

    // Global interceptor: ANY link to a faction route plays its transition.
    // Capture phase so it runs before next/link's own click handler.
    const onCapture = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const el = e.target as Element | null;
      const a = el?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      // The hero orbit manages its own clicks (drag-aware) — leave it alone.
      if (a.closest("[data-faction-manual]")) return;
      const target = a.getAttribute("target");
      if ((target && target !== "_self") || a.hasAttribute("download")) return;
      let url: URL;
      try {
        url = new URL(a.getAttribute("href") || "", window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      const path = stripSlash(url.pathname);
      const info = FACTION_ROUTES[path];
      if (!info) return;
      if (path === stripSlash(window.location.pathname)) return; // already here
      e.preventDefault();
      e.stopPropagation();
      run({ href: url.pathname, label: info.label, theme: info.theme });
    };
    document.addEventListener("click", onCapture, true);

    return () => {
      window.removeEventListener("pvp:faction-go", handler as EventListener);
      document.removeEventListener("click", onCapture, true);
      clearTimers();
    };
  }, [run]);

  return (
    <AnimatePresence>
      {state.active && state.theme === "cinematic" && <CinematicOverlay key="cin" label={state.label} />}
      {state.active && state.theme === "editorial" && <EditorialOverlay key="edi" label={state.label} />}
      {state.active && state.theme === "vertigo" && <VertigoOverlay key="vrt" label={state.label} />}
    </AnimatePresence>
  );
}

/* ---------- Dark cinematic (Startup & Venture Development) ---------- */
function CinematicOverlay({ label }: { label: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#07110f] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="pointer-events-none absolute h-[120vmax] w-[120vmax] rounded-full opacity-50 blur-3xl"
        style={{ background: "conic-gradient(from 0deg, rgba(42,138,146,0.3), rgba(233,119,36,0.3), rgba(42,138,146,0.3))" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage: "radial-gradient(ellipse at center,black,transparent 70%)",
        }}
      />
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute bottom-0 h-1 w-1 rounded-full ${i % 2 ? "bg-orange-400/70" : "bg-teal-300/70"}`}
          style={{ left: `${p.left}%` }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-10, -window_h()], opacity: [0, 1, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      <div className="relative flex flex-col items-center">
        <motion.span
          className="absolute h-28 w-28 rounded-full border border-teal-300/40"
          initial={{ scale: 0.4, opacity: 0.8 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          className="absolute h-28 w-28 rounded-full border border-orange-300/40"
          initial={{ scale: 0.4, opacity: 0.8 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 1.4, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/30 to-orange-400/20 ring-1 ring-white/15 backdrop-blur"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="bg-gradient-to-r from-teal-200 to-orange-200 bg-clip-text text-3xl font-extrabold text-transparent">
            PVP
          </span>
        </motion.div>
        <motion.p
          className="mt-7 bg-gradient-to-r from-teal-300 via-teal-200 to-orange-300 bg-[length:200%_auto] bg-clip-text text-center text-xl font-extrabold tracking-tight text-transparent animate-[hero-sheen_3s_linear_infinite] md:text-2xl"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {label}
        </motion.p>
        <div className="mt-5 h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-teal-300 to-orange-300"
            initial={{ x: "-110%" }}
            animate={{ x: "230%" }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Bold editorial (Consultancy & Advisory) ---------- */
function EditorialOverlay({ label }: { label: string }) {
  const ease = [0.76, 0, 0.24, 1] as const;
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-orange-600 text-paper"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease }}
    >
      {/* hard ink leading edge */}
      <div className="absolute inset-x-0 top-0 h-3 bg-ink" />
      {/* ruled vertical grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 mx-auto max-w-[1280px] px-8">
        <div className="grid h-full grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-l border-paper/15 last:border-r" />
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-[1100px] px-6">
        <motion.div
          className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
        >
          <span className="bg-ink px-2 py-1 text-paper">PVP</span>
          <span>What we offer</span>
        </motion.div>

        {/* big clip-reveal label */}
        <h2 className="text-[clamp(2.25rem,7vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
          {label.split(" ").map((w, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden py-[0.08em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.07, ease }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* drawn ink rule */}
        <motion.span
          className="mt-7 block h-1 origin-left bg-ink"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        />
      </div>
    </motion.div>
  );
}

/* ---------- VertigoWorks kinetic (Freelancing Services) ---------- */
function VertigoOverlay({ label }: { label: string }) {
  const ease = [0.76, 0, 0.24, 1] as const;
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "#1F3BFF", color: "#F6F2EA" }}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease }}
    >
      {/* hard coral leading edge */}
      <div className="absolute inset-x-0 top-0 h-3" style={{ background: "#FF4324" }} />
      {/* spinning vortex */}
      <motion.svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute h-[120vmin] w-[120vmin] opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      >
        <g fill="none" strokeWidth={2} strokeLinecap="round">
          <circle cx="50" cy="50" r="46" stroke="#fff" />
          <circle cx="54" cy="46" r="35" stroke="#FF4324" />
          <circle cx="58" cy="43" r="24" stroke="#fff" />
          <circle cx="61" cy="41" r="13" stroke="#E6FF3D" />
        </g>
      </motion.svg>

      <div className="relative px-6 text-center">
        <motion.p
          className="text-xs font-bold uppercase"
          style={{ fontFamily: "var(--font-space-mono), monospace", letterSpacing: "0.22em", color: "#E6FF3D" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
        >
          Entering · Freelancing Studio
        </motion.p>
        <h2
          className="mt-4"
          style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem,7vw,5.5rem)", lineHeight: 0.92, letterSpacing: "-0.035em" }}
        >
          {label.split(" ").map((w, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden py-[0.08em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.07, ease }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h2>
      </div>
    </motion.div>
  );
}

function window_h() {
  if (typeof window === "undefined") return 800;
  return window.innerHeight + 40;
}
