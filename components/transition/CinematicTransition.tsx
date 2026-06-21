"use client";

/* Dark-cinematic page transition.
   Mounted once in the root layout so it persists across client navigations.
   Triggered by a window CustomEvent ("pvp:cinematic-go", { href, label }) that
   <CinematicLink> dispatches. It covers the screen with the Venture/Startup
   faction look, navigates, then lifts to reveal the dark page underneath —
   so arriving on /services/innovative-startups feels anticipated.

   Respects prefers-reduced-motion: when set, it just navigates instantly. */

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type GoDetail = { href: string; label?: string };

const ENTER_MS = 620; // cover the screen, then navigate
const TOTAL_MS = 1500; // begin lifting the cover

const PARTICLES = Array.from({ length: 12 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12543.4321;
  return { left: 6 + (a - Math.floor(a)) * 88, delay: (b - Math.floor(b)) * 0.6, dur: 1.4 + (a - Math.floor(a)) * 1.2 };
});

export function CinematicTransition() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [state, setState] = useState<{ active: boolean; label: string }>({ active: false, label: "" });
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
      setState({ active: true, label: detail.label || "Venture Development" });
      timers.current.push(window.setTimeout(() => router.push(href), ENTER_MS));
      timers.current.push(window.setTimeout(() => setState((s) => ({ ...s, active: false })), TOTAL_MS));
    },
    [reduce, router]
  );

  useEffect(() => {
    const handler = (e: Event) => run((e as CustomEvent<GoDetail>).detail);
    window.addEventListener("pvp:cinematic-go", handler as EventListener);
    return () => {
      window.removeEventListener("pvp:cinematic-go", handler as EventListener);
      clearTimers();
    };
  }, [run]);

  return (
    <AnimatePresence>
      {state.active && (
        <motion.div
          key="cinematic"
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#07110f] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* aurora */}
          <motion.div
            className="pointer-events-none absolute h-[120vmax] w-[120vmax] rounded-full opacity-50 blur-3xl"
            style={{ background: "conic-gradient(from 0deg, rgba(42,138,146,0.3), rgba(233,119,36,0.3), rgba(42,138,146,0.3))" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          {/* grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
              backgroundSize: "54px 54px",
              maskImage: "radial-gradient(ellipse at center,black,transparent 70%)",
            }}
          />
          {/* rising sparks */}
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

          {/* center */}
          <div className="relative flex flex-col items-center">
            {/* expanding rings */}
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
            {/* mark */}
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
              {state.label}
            </motion.p>

            {/* progress shimmer */}
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
      )}
    </AnimatePresence>
  );
}

// Guard SSR / very-early calls.
function window_h() {
  if (typeof window === "undefined") return 800;
  return window.innerHeight + 40;
}
