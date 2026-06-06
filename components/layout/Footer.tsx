import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { asset, siteConfig } from "@/lib/utils";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ventures", label: "Ventures" },
  { href: "/investors", label: "Investors" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-950 text-paper">
      {/* decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(233,119,36,0.7) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -bottom-40 h-[420px] w-[420px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(42,138,146,0.7) 0%, transparent 70%)",
        }}
      />

      <div className="container-content relative flex flex-col gap-14 py-16 md:flex-row md:items-center md:justify-between md:gap-8 md:py-20">
        {/* Brand — left, centered block */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={asset("/logo-footer.png")}
            alt="Pak Venture Point"
            width={401}
            height={372}
            className="h-40 w-auto object-contain md:h-48"
          />
          <p className="text-body-sm mt-4 max-w-xs text-paper/70">
            Empowering businesses and communities through innovative technology, strategic
            partnerships and sustainable growth.
          </p>
          <ul className="mt-6 flex items-center gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <li key={i}>
                <a
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-paper/10 text-paper transition-colors hover:bg-orange-600"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Two columns — grouped tight, right side */}
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-24">
          {/* Quick links */}
          <div>
            <h3 className="text-eyebrow text-orange-500">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-paper/85 transition-colors hover:text-orange-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:max-w-[15rem]">
            <h3 className="text-eyebrow text-orange-500">Contact</h3>
            <ul className="mt-5 space-y-3 text-body-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-paper/85">{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="break-all text-paper/85 transition-colors hover:text-orange-500">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <div className="container-content flex flex-col items-start justify-between gap-3 py-6 md:h-16 md:flex-row md:items-center md:py-0">
          <p className="text-body-sm text-paper/60">
            © {new Date().getFullYear()} Pak Venture Point (PVP) — Bridging the Gap between Technology and Development.
          </p>
          <p className="text-body-sm text-paper/50">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
