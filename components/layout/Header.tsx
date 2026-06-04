"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OrbitMark } from "@/components/ui/OrbitMark";
import { siteConfig } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ventures", label: "Ventures" },
  { href: "/investors", label: "Investors" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function Wordmark({ size = "default" }: { size?: "default" | "sm" }) {
  return (
    <span className="flex items-center gap-2.5">
      <OrbitMark className={size === "sm" ? "h-7 w-7" : "h-9 w-9"} />
      <span className="leading-none">
        <span
          className={
            size === "sm"
              ? "font-display text-base font-bold tracking-tight text-ink"
              : "font-display text-[1.0625rem] font-bold tracking-tight text-ink"
          }
        >
          Pak Venture Point
        </span>
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-hairline bg-paper/82 backdrop-blur-md">
        <div className="container-content flex h-16 items-center justify-between md:h-[68px]">
          <Link href="/" aria-label={`${siteConfig.name} — home`}>
            <Wordmark />
          </Link>

          {/* Desktop nav — mono labels */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    "font-mono text-[11px] uppercase tracking-[0.08em] transition-colors " +
                    (active ? "text-teal" : "text-ink-soft hover:text-teal")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm" variant="primary" withArrow>
              Let&apos;s Connect
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center text-navy lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden">
          <div className="container-content flex h-16 items-center justify-between border-b border-hairline">
            <Wordmark size="sm" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center text-navy"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="container-content flex-1 py-6" aria-label="Mobile primary">
            <ul className="divide-y divide-hairline">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={
                        "flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-tight " +
                        (active ? "text-coral-deep" : "text-ink")
                      }
                    >
                      {item.label}
                      <span className="font-mono text-[11px] text-ink-mute">
                        {String(navItems.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="container-content border-t border-hairline py-5">
            <Button href="/contact" size="lg" variant="coral" className="w-full" withArrow>
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
