import Link from "next/link";
import { ArrowRight, Check, Code2, Compass, Sparkles, Users, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Service = {
  number: string;
  icon: LucideIcon;
  tone: "teal" | "orange";
  title: string;
  blurb: string;
  bullets: string[];
  href: string;
};

const services: Service[] = [
  {
    number: "01",
    icon: Code2,
    tone: "teal",
    title: "SOFTWARE DEVELOPMENT",
    blurb: "We build smart, scalable and secure digital solutions tailored to your business needs.",
    bullets: [
      "Web Development",
      "Mobile Applications",
      "ERP & SaaS Solutions",
      "AI & Automation Tools",
      "UI/UX Design",
      "Cloud Systems & Maintenance",
    ],
    href: "/services/software-development",
  },
  {
    number: "02",
    icon: Users,
    tone: "orange",
    title: "FREELANCING SERVICES",
    blurb: "Access skilled talent and remote expertise to accelerate your projects and operations.",
    bullets: [
      "Remote Development",
      "Digital Marketing",
      "Graphic Design",
      "Content Writing",
      "Technical Support",
      "Outsourced Operations",
    ],
    href: "/services/digital-freelancing",
  },
  {
    number: "03",
    icon: Compass,
    tone: "teal",
    title: "CONSULTANCY & ADVISORY",
    blurb: "Strategic guidance and practical solutions to strengthen organizations and drive growth.",
    bullets: [
      "Strategic Planning",
      "Organizational Development",
      "M&E and Research",
      "Policy & Proposal Development",
      "Business Consultancy",
      "Capacity Building & Training",
    ],
    href: "/services/consultancy",
  },
  {
    number: "04",
    icon: Sparkles,
    tone: "orange",
    title: "STARTUP & VENTURE DEVELOPMENT",
    blurb: "We incubate ideas, build ventures and connect founders with opportunities to scale globally.",
    bullets: [
      "Startup Incubation",
      "Product Development",
      "Venture Building",
      "Investor Networking",
      "Business Acceleration",
      "Innovation Management",
    ],
    href: "/services/innovative-startups",
  },
];

export function CoreServices() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 md:py-28">
      {/* dot pattern */}
      <svg aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-50">
        <defs>
          <pattern id="cs-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#e97724" fillOpacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cs-dots)" />
      </svg>

      <div className="container-content relative">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-eyebrow text-orange-600">What We Do</p>
            <h2 className="text-display-2xl mt-3 text-ink">
              CORE <span className="text-orange-600">SERVICES</span>
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="block h-1 w-12 rounded-full bg-teal-900" />
              <span className="block h-2 w-2 rounded-full bg-orange-600" />
              <p className="text-sm font-semibold uppercase tracking-wider text-ink">
                Integrated Solutions. Sustainable Growth.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="border-l-4 border-teal-900 pl-4">
              <h3 className="font-display text-xl font-bold leading-tight text-ink md:text-2xl">
                One Ecosystem. Multiple Solutions. Infinite Possibilities.
              </h3>
              <p className="text-body-sm mt-3 text-ink-muted">
                PVP offers integrated services across technology, freelancing, consultancy and venture
                development — empowering businesses, startups and organizations to innovate, scale and succeed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isTeal = service.tone === "teal";
            return (
              <article
                key={service.title}
                className="group relative flex flex-col rounded-2xl bg-paper p-6 shadow-[0_10px_30px_-20px_rgba(11,42,48,0.2)] ring-1 ring-rule transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(11,42,48,0.3)]"
              >
                <span
                  className={`absolute left-6 top-6 text-2xl font-bold ${
                    isTeal ? "text-teal-900" : "text-orange-600"
                  }`}
                >
                  {service.number}
                </span>

                <div className="flex justify-center">
                  <div
                    className={`flex h-28 w-28 items-center justify-center rounded-full text-paper ring-8 ${
                      isTeal ? "bg-teal-900 ring-teal-50" : "bg-orange-600 ring-orange-50"
                    }`}
                  >
                    <Icon className="h-12 w-12" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </div>

                <h3 className={`mt-6 text-center text-sm font-bold tracking-wide ${
                  isTeal ? "text-teal-900" : "text-orange-600"
                }`}>
                  {service.title}
                </h3>

                <p className="text-body-sm mt-3 text-center text-ink-muted">{service.blurb}</p>

                <ul className="mt-6 space-y-2 border-t border-rule pt-5">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[0.8125rem] text-ink">
                      <span
                        className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          isTeal ? "bg-teal-900" : "bg-orange-600"
                        }`}
                      >
                        <Check className="h-2.5 w-2.5 text-paper" strokeWidth={3.5} aria-hidden="true" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-bold ${
                    isTeal ? "text-teal-900" : "text-orange-600"
                  }`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          <Button href="/services" size="lg" variant="primary">
            Explore All Services
          </Button>
          <span className="font-display italic text-ink-muted">Let&apos;s build the future together!</span>
        </div>
      </div>
    </section>
  );
}
