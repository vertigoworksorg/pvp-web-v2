"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Lightbulb,
  ShieldCheck,
  Anchor,
  Users,
  Award,
  Leaf,
  Rocket,
  Briefcase,
  Smile,
  Palette,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { asset } from "@/lib/utils";

type Value = { name: string; body: string; icon: LucideIcon; tone: "teal" | "orange" };

const values: Value[] = [
  { name: "Innovation", icon: Lightbulb, tone: "teal", body: "We embrace creativity and new ideas to solve real-world challenges." },
  { name: "Integrity", icon: ShieldCheck, tone: "orange", body: "We act with honesty, transparency, and strong ethical standards." },
  { name: "Accountability", icon: Anchor, tone: "teal", body: "We take ownership and stand behind every result we deliver." },
  { name: "Collaboration", icon: Users, tone: "orange", body: "Teamwork and partnership create greater, lasting impact." },
  { name: "Excellence", icon: Award, tone: "teal", body: "We commit to quality, craft, and continuous improvement." },
  { name: "Sustainability", icon: Leaf, tone: "orange", body: "We build solutions that create long-term value for communities." },
  { name: "Entrepreneurship", icon: Rocket, tone: "teal", body: "We back initiative, calculated risk, and the drive to build." },
  { name: "Professionalism", icon: Briefcase, tone: "orange", body: "We hold the highest standard of conduct in everything we do." },
  { name: "Client Focus", icon: Smile, tone: "teal", body: "Our clients are at the heart of our work. Their success is ours." },
  { name: "Creativity", icon: Palette, tone: "orange", body: "We turn ideas into intelligent, practical, scalable solutions." },
];

const pins = [
  { icon: Lightbulb, label: "INNOVATE", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", tone: "teal" },
  { icon: Handshake, label: "COLLABORATE", pos: "top-1/2 right-0 -translate-y-1/2 translate-x-1/2", tone: "orange" },
  { icon: Award, label: "GROW", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", tone: "orange" },
  { icon: Rocket, label: "IMPACT", pos: "top-1/2 left-0 -translate-y-1/2 -translate-x-1/2", tone: "teal" },
] as const;

const AUTO_MS = 3600;

export function Values() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    timer.current = setInterval(() => setActive((a) => (a + 1) % values.length), AUTO_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const current = values[active];
  const ActiveIcon = current.icon;
  const loop = [...values, ...values]; // doubled for seamless marquee

  return (
    <section id="values" className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div className="container-content relative">
        {/* Top: animated orbit + heading */}
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[420px]">
              <div className="absolute inset-[8%] rounded-full border-2 border-dashed border-teal-900/20 motion-safe:animate-[spin_36s_linear_infinite]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-36 w-36 overflow-hidden rounded-full bg-paper p-3 shadow-[0_20px_50px_-20px_rgba(26,91,100,0.5)] ring-1 ring-teal-900/10">
                  <Image src={asset("/logo.png")} alt="PVP" fill className="object-contain p-1" />
                </div>
              </div>
              {pins.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.label} className={`absolute ${p.pos}`}>
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex h-14 w-14 items-center justify-center rounded-full text-paper shadow-lg ${
                          p.tone === "teal" ? "bg-teal-900" : "bg-orange-600"
                        }`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span
                        className={`mt-1.5 text-[10px] font-bold tracking-wider ${
                          p.tone === "teal" ? "text-teal-900" : "text-orange-600"
                        }`}
                      >
                        {p.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-eyebrow text-orange-600">Our Values &amp; Philosophy</p>
            <h2 className="text-display-xl mt-3 text-ink">
              Guided by values.
              <br /> Driven by <span className="text-orange-600">purpose.</span>
            </h2>
            <span className="mt-6 inline-block h-1 w-16 rounded-full bg-orange-600" />
            <p className="text-body-lg mt-6 max-w-xl text-ink-muted">
              Ten values shape our culture and decisions. Watch them rotate — or tap any to read it.
            </p>

            {/* Spotlight — one value at a time */}
            <div
              className="mt-8 overflow-hidden rounded-2xl border border-rule bg-paper p-6 md:p-7"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div key={active} className="flex items-start gap-5 motion-safe:animate-[slideIn_0.4s_cubic-bezier(0.4,0,0.2,1)]">
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-paper ${
                    current.tone === "teal" ? "bg-teal-900" : "bg-orange-600"
                  }`}
                >
                  <ActiveIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3
                      className={`font-display text-xl font-bold md:text-2xl ${
                        current.tone === "teal" ? "text-teal-900" : "text-orange-600"
                      }`}
                    >
                      {current.name}
                    </h3>
                    <span className="font-mono text-[11px] text-ink-muted">
                      {String(active + 1).padStart(2, "0")}/10
                    </span>
                  </div>
                  <p className="text-body mt-1.5 text-ink-muted">{current.body}</p>
                </div>
              </div>
              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-rule/60">
                <div
                  key={`bar-${active}-${paused}`}
                  className={`h-full ${current.tone === "teal" ? "bg-teal-900" : "bg-orange-600"} ${
                    paused ? "w-full" : "motion-safe:animate-[grow_3.6s_linear]"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sliding marquee of value chips */}
        <div
          className="group relative mt-14 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-mist to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-mist to-transparent" />

          <ul className="marquee-track flex w-max gap-3">
            {loop.map((v, i) => {
              const Icon = v.icon;
              const idx = i % values.length;
              const isActive = idx === active;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={v.name}
                    className={
                      "flex items-center gap-2.5 rounded-full border px-4 py-2.5 transition-colors " +
                      (isActive
                        ? v.tone === "teal"
                          ? "border-teal-900 bg-teal-900 text-paper"
                          : "border-orange-600 bg-orange-600 text-paper"
                        : "border-rule bg-paper text-ink-muted hover:border-teal-900 hover:text-teal-900")
                    }
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    <span className="text-sm font-semibold">{v.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg) } }
        @keyframes slideIn { from { opacity:0; transform:translateX(20px) } to { opacity:1; transform:none } }
        @keyframes grow { from { width:0% } to { width:100% } }
        @keyframes marquee { from { transform:translateX(0) } to { transform:translateX(-50%) } }
        .marquee-track { animation: marquee 32s linear infinite; }
        .group:hover .marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; flex-wrap: wrap; width: 100%; }
        }
      `}</style>
    </section>
  );
}
