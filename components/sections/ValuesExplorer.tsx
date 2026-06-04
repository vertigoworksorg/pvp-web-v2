"use client";

import { useState } from "react";
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
  type LucideIcon,
} from "lucide-react";
import { Marker } from "@/components/ui/Marker";
import { Reveal } from "@/components/ui/Reveal";

type Value = { name: string; body: string; icon: LucideIcon };

const values: Value[] = [
  { name: "Innovation", icon: Lightbulb, body: "We embrace creativity and new ideas to solve real-world challenges." },
  { name: "Integrity", icon: ShieldCheck, body: "We act with honesty, transparency, and strong ethical standards." },
  { name: "Accountability", icon: Anchor, body: "We take ownership and stand behind every result we deliver." },
  { name: "Collaboration", icon: Users, body: "We believe partnership and teamwork create greater impact." },
  { name: "Excellence", icon: Award, body: "We commit to quality, craft, and continuous improvement." },
  { name: "Sustainability", icon: Leaf, body: "We build solutions that create long-term value for communities." },
  { name: "Entrepreneurship", icon: Rocket, body: "We back initiative, calculated risk, and the drive to build." },
  { name: "Professionalism", icon: Briefcase, body: "We hold the highest standard of conduct in everything we do." },
  { name: "Client Focus", icon: Smile, body: "Our clients are at the heart of our work. Their success is ours." },
  { name: "Creativity", icon: Palette, body: "We turn ideas into intelligent, practical, scalable solutions." },
];

export function ValuesExplorer() {
  const [active, setActive] = useState(0);
  const ActiveIcon = values[active].icon;

  return (
    <section id="values" className="border-b border-hairline bg-paper-raised py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <Marker section="03" label="What we hold to" />
          <h2 className="text-display-lg mt-6 max-w-[20ch] text-ink">
            Guided by values, <span className="emph">driven by purpose.</span>
          </h2>
          <p className="text-body-lg mt-4 max-w-xl text-ink-soft">
            Ten values shape how we work. Tap any one to read what it means in practice.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            {/* Icon selector — the "logos" */}
            <ul className="grid grid-cols-5 gap-3 md:col-span-7 md:grid-cols-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                const isActive = i === active;
                return (
                  <li key={v.name}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={isActive}
                      className={
                        "group flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-lg border p-2 transition-all duration-200 " +
                        (isActive
                          ? "border-navy bg-navy text-paper shadow-[0_12px_28px_-14px_rgba(10,35,66,0.7)]"
                          : "border-hairline bg-paper text-ink-soft hover:border-navy-300 hover:-translate-y-0.5")
                      }
                    >
                      <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} aria-hidden="true" />
                      <span className="text-center text-[10px] font-semibold leading-tight md:text-[11px]">
                        {v.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Detail — one at a time */}
            <div className="md:col-span-5">
              <div
                key={active}
                className="flex h-full flex-col justify-center rounded-lg border border-hairline bg-paper p-7 md:p-9 motion-safe:animate-[fadeUp_0.35s_ease]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-md bg-coral text-paper">
                  <ActiveIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="font-mono mt-6 text-[11px] uppercase tracking-[0.12em] text-ink-mute">
                  Value {String(active + 1).padStart(2, "0")} / 10
                </p>
                <h3 className="text-display-md mt-2 text-ink">{values[active].name}</h3>
                <p className="text-body-lg mt-3 text-ink-soft">{values[active].body}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* keyframes for the detail fade */}
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
