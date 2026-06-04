import Link from "next/link";
import { Mail, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";
import { OrbitMark } from "@/components/ui/OrbitMark";
import { siteConfig } from "@/lib/utils";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ventures", label: "Ventures" },
  { href: "/investors", label: "Investors" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-paper">
      {/* faint dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* CTA band */}
      <div className="relative border-b border-paper/10">
        <div className="container-content flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center md:py-16">
          <h2 className="text-display-lg max-w-xl text-paper">
            Let&apos;s build something <span className="emph paper">accountable.</span>
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-coral px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-coral-deep"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="container-content relative grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-16">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <OrbitMark className="h-9 w-9" tone="paper" />
            <span className="font-display text-xl font-bold tracking-tight text-paper">
              Pak Venture Point
            </span>
          </div>
          <p className="text-body-sm mt-5 max-w-sm text-paper/65">
            An AI-first innovation ecosystem — software, consultancy, freelancing, and ventures,
            built from {siteConfig.city}.
          </p>
          <p className="font-mono mt-6 text-[11px] uppercase tracking-[0.14em] text-paper/40">
            Bridging Tech &amp; Development
          </p>
        </div>

        {/* Navigate */}
        <div className="md:col-span-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-teal-bright">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body-sm text-paper/75 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div className="md:col-span-4">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-teal-bright">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-3 text-body-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral" aria-hidden="true" />
              <span className="text-paper/75">{siteConfig.city}, {siteConfig.country}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-coral" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="text-paper/75 transition-colors hover:text-paper">
                {siteConfig.email}
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <li key={i}>
                <a
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-paper/10 text-paper transition-colors hover:bg-teal"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <div className="container-content flex flex-col items-start justify-between gap-2 py-6 md:h-14 md:flex-row md:items-center md:py-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-paper/45">
            © {new Date().getFullYear()} Pak Venture Point · Islamabad, PK
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-paper/45">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
