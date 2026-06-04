import { Target, Eye, Compass, Award, type LucideIcon } from "lucide-react";
import { Marker } from "@/components/ui/Marker";
import { Reveal } from "@/components/ui/Reveal";

const principles: { icon: LucideIcon; label: string; body: string; tone: "navy" | "teal" | "coral" }[] = [
  { icon: Target, label: "Mission", body: "Empower through technology, strategy and innovation.", tone: "navy" },
  { icon: Eye, label: "Vision", body: "A leading innovation-driven enterprise, globally.", tone: "coral" },
  { icon: Compass, label: "Purpose", body: "Turn ideas into ventures, and ventures into value.", tone: "teal" },
  { icon: Award, label: "Commitment", body: "Quality, integrity, and sustainable growth.", tone: "navy" },
];

const toneFill: Record<string, string> = {
  navy: "bg-navy-tint text-navy",
  teal: "bg-teal-tint text-teal",
  coral: "bg-coral-tint text-coral-deep",
};

export function AboutSection() {
  return (
    <section id="about" className="border-b border-hairline py-20 md:py-28">
      <div className="container-content grid gap-12 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Reveal>
            <Marker section="01" label="Who we are" />
            <h2 className="text-display-lg mt-6 text-ink">
              Bridging technology &amp; <span className="emph">development.</span>
            </h2>
            <p className="text-body-lg mt-5 max-w-md text-ink-soft">
              A multidisciplinary venture studio from Islamabad — built to help businesses,
              startups, and institutions grow in a digital world.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.label} delay={i * 70}>
                  <div className="flex h-full items-start gap-4 rounded-lg border border-hairline bg-paper-raised p-5 transition-colors hover:border-navy-300">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${toneFill[p.tone]}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">
                        {p.label}
                      </p>
                      <p className="text-body-sm mt-1.5 font-medium text-ink">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
