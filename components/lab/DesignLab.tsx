"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollProgress } from "./primitives";
import { DemoCinematic } from "./DemoCinematic";
import { DemoEditorial } from "./DemoEditorial";
import { DemoRefined } from "./DemoRefined";
import { DemoHybrid } from "./DemoHybrid";
import { DemoFreelancing } from "./DemoFreelancing";

const tabs = [
  { key: "cinematic", label: "A · Dark Cinematic", hint: "Near-black, glowing, spotlight cursor", accent: "from-teal-400 to-orange-400", Comp: DemoCinematic },
  { key: "editorial", label: "B · Bold Editorial", hint: "Oversized type, grid lines, color blocks", accent: "from-orange-500 to-orange-600", Comp: DemoEditorial },
  { key: "refined", label: "C · Refined Motion", hint: "Current palette, living orbit", accent: "from-teal-700 to-teal-500", Comp: DemoRefined },
  { key: "hybrid", label: "D · Hybrid", hint: "Dark hero + light body", accent: "from-teal-500 to-orange-500", Comp: DemoHybrid },
  { key: "freelancing", label: "E · Freelancing (VW × mHealth)", hint: "Voltage/coral, Bricolage, build-map", accent: "from-[#1F3BFF] to-[#FF4324]", Comp: DemoFreelancing },
] as const;

export function DesignLab() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("cinematic");
  const current = tabs.find((t) => t.key === active)!;
  const Comp = current.Comp;

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Scroll progress bar (accent per direction) */}
      <ScrollProgress
        className={`fixed inset-x-0 top-0 z-[60] h-1 bg-gradient-to-r ${current.accent}`}
      />

      {/* Switcher */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <span className="rounded bg-orange-600 px-2 py-0.5 text-xs">DESIGN LAB</span>
            <span className="text-white/50">Pick a direction — nothing live changes yet</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                title={t.hint}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  active === t.key
                    ? "bg-white text-neutral-950"
                    : "border border-white/20 text-white/70 hover:bg-white/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Demo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Comp />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
