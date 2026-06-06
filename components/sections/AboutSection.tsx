import Image from "next/image";
import { Target, Eye, Compass, Award, MapPin, type LucideIcon } from "lucide-react";
import { asset } from "@/lib/utils";

type Pillar = { icon: LucideIcon; label: string; body: string; tone: "teal" | "orange" };

const pillars: Pillar[] = [
  { icon: Target, label: "Our Mission", body: "Empower through technology, strategy and innovation.", tone: "teal" },
  { icon: Eye, label: "Our Vision", body: "Become a leading innovation-driven enterprise, globally.", tone: "orange" },
  { icon: Compass, label: "Our Purpose", body: "Turn ideas into ventures, and ventures into value.", tone: "teal" },
  { icon: Award, label: "Our Commitment", body: "Quality, integrity, and sustainable growth.", tone: "orange" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-10 md:py-14">
      <div className="container-content relative grid items-center gap-12 md:grid-cols-12 md:gap-14">
        {/* Image */}
        <div className="md:col-span-5">
          <div className="relative">
            {/* accent frame */}
            <div aria-hidden="true" className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-orange-500" />
            <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-teal-900" />
            <div className="relative overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(11,42,48,0.35)]">
              <Image
                src={asset("/images/about.jpg")}
                alt="The PVP team collaborating"
                width={1100}
                height={733}
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 55%, rgba(7,24,46,0.45) 100%)" }}
              />
              {/* location chip */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-paper/95 px-3 py-1.5 shadow-md backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-orange-600" aria-hidden="true" />
                <span className="text-xs font-bold text-teal-900">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="md:col-span-7">
          <p className="text-eyebrow text-orange-600">About PVP</p>
          <h2 className="text-display-xl mt-3 text-ink">
            Empowering innovation.
            <br className="hidden sm:block" /> Building the <span className="text-orange-600">future.</span>
          </h2>
          <span className="mt-5 inline-block h-1 w-16 rounded-full bg-orange-600" />

          <p className="text-body mt-6 max-w-2xl text-ink-muted md:text-[1.0625rem]">
            Pak Venture Point (PVP) is a multidisciplinary innovation and technology enterprise based
            in Islamabad — integrating technology, consultancy, freelancing, and venture development
            into one scalable ecosystem that helps businesses, startups, and institutions grow.
          </p>

          {/* Pillars — clean 2x2, room to breathe */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p) => {
              const Icon = p.icon;
              const isTeal = p.tone === "teal";
              return (
                <div
                  key={p.label}
                  className="group flex items-start gap-4 rounded-2xl border border-rule bg-paper p-5 transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:shadow-[0_16px_40px_-24px_rgba(11,42,48,0.4)]"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-paper ${
                      isTeal ? "bg-teal-900" : "bg-orange-600"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className={`font-display text-base font-bold ${isTeal ? "text-teal-900" : "text-orange-600"}`}>
                      {p.label}
                    </p>
                    <p className="text-body-sm mt-1 text-ink-muted">{p.body}</p>
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
