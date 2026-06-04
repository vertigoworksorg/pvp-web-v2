import Image from "next/image";
import { Code2, Compass, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { asset } from "@/lib/utils";

const orbitNodes = [
  { label: "Software Development", icon: Code2, angle: -90, tone: "teal" },
  { label: "Consultancy & Advisory", icon: Compass, angle: 0, tone: "orange" },
  { label: "Startup & Venture Development", icon: Sparkles, angle: 90, tone: "teal" },
  { label: "Freelancing Services", icon: Users, angle: 180, tone: "orange" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-paper-warm via-paper to-mist">
      {/* dot grid */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-50">
        <defs>
          <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#1a5b64" fillOpacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(253,226,207,0.95) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-[320px] w-[320px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(194,218,220,0.8) 0%, transparent 70%)" }}
      />

      <div className="container-content relative grid items-center gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-24">
        {/* Left — copy */}
        <div className="md:col-span-6">
          <h1 className="text-display-xl text-ink">
            Building the Future Through Technology,{" "}
            <span className="text-orange-600">Innovation &amp; Venture Development</span>
          </h1>

          <div className="mt-8 inline-block">
            <span className="block h-1 w-16 rounded-full bg-orange-600" />
          </div>

          <p className="text-body mt-8 max-w-lg text-ink-muted md:text-[1.0625rem]">
            Pak Venture Point (PVP) is an AI-first innovation ecosystem delivering software
            solutions, strategic consultancy, freelancing operations, and startup development
            services designed for sustainable growth and digital transformation.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/services" size="lg" variant="primary">
              Explore Services
            </Button>
            <Button href="/contact?topic=partner" size="lg" variant="outline">
              Partner With Us
            </Button>
            <Button href="/ventures" size="lg" variant="secondary">
              Launch Your Venture
            </Button>
          </div>
        </div>

        {/* Right — orbit diagram with logo center */}
        <div className="md:col-span-6">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-teal-900/15" />
            {/* mid ring */}
            <div className="absolute inset-[14%] rounded-full border-2 border-dashed border-orange-600/20" />

            {/* connector lines */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {[-90, 0, 90, 180].map((a, i) => {
                const rad = (a * Math.PI) / 180;
                const x2 = 50 + Math.cos(rad) * 42;
                const y2 = 50 + Math.sin(rad) * 42;
                return (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={x2}
                    y2={y2}
                    stroke="#1a5b64"
                    strokeOpacity="0.18"
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                  />
                );
              })}
            </svg>

            {/* center logo */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-44 w-44 rounded-full bg-paper p-4 shadow-[0_20px_60px_-20px_rgba(26,91,100,0.5)] ring-1 ring-teal-900/10 md:h-52 md:w-52">
                <Image
                  src={asset("/logo.png")}
                  alt="PVP"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>

            {/* orbit nodes */}
            {orbitNodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180;
              const left = `${50 + Math.cos(rad) * 42}%`;
              const top = `${50 + Math.sin(rad) * 42}%`;
              const isTeal = node.tone === "teal";
              const Icon = node.icon;
              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left, top }}
                >
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-full text-paper shadow-lg md:h-20 md:w-20 ${
                        isTeal ? "bg-teal-900" : "bg-orange-600"
                      }`}
                    >
                      <Icon className="h-7 w-7 md:h-9 md:w-9" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="mt-2 max-w-[110px] text-center text-xs font-semibold leading-tight text-ink md:max-w-[140px] md:text-sm">
                      {node.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
