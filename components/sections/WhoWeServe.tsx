"use client";

import { useState } from "react";
import {
  Rocket,
  Briefcase,
  Heart,
  Landmark,
  GraduationCap,
  TrendingUp,
  Globe2,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { Marker } from "@/components/ui/Marker";
import { Reveal } from "@/components/ui/Reveal";

type Audience = { icon: LucideIcon; title: string; body: string };

const audiences: Audience[] = [
  { icon: Rocket, title: "Startups & Entrepreneurs", body: "From idea to scale — incubation, technology, and strategic guidance." },
  { icon: Briefcase, title: "Businesses & SMEs", body: "Optimize operations, digitize processes, and grow sustainably." },
  { icon: Heart, title: "NGOs & INGOs", body: "Consultancy, M&E, proposal development, and digital solutions for impact." },
  { icon: Landmark, title: "Government Institutions", body: "Policy, digital transformation, and capacity building for the public sector." },
  { icon: GraduationCap, title: "Educational Institutions", body: "E-learning systems, digital tools, and innovation programs." },
  { icon: TrendingUp, title: "Investors & Partners", body: "Opportunities to build value through innovation-driven ventures." },
  { icon: Globe2, title: "International Clients", body: "Reliable, scalable, future-ready solutions delivered worldwide." },
];

export function WhoWeServe() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="who-we-serve" className="border-b border-hairline py-20 md:py-28">
      <div className="container-content grid gap-12 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <Marker section="04" label="Who we serve" />
            <h2 className="text-display-lg mt-6 text-ink">
              Every sector, <span className="emph">one standard.</span>
            </h2>
            <p className="text-body-lg mt-4 max-w-sm text-ink-soft">
              We tailor the work to the partner. Tap a group to see how.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {audiences.map((a, i) => {
                const Icon = a.icon;
                const isOpen = open === i;
                return (
                  <li key={a.title}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:text-teal"
                    >
                      <span
                        className={
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-colors " +
                          (isOpen ? "bg-navy text-paper" : "bg-paper-raised text-navy")
                        }
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="flex-1 font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
                        {a.title}
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-ink-mute transition-transform duration-200 ${isOpen ? "rotate-45 text-teal" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="min-h-0 overflow-hidden pl-15 text-body text-ink-soft md:pl-[3.75rem]">
                        {a.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
