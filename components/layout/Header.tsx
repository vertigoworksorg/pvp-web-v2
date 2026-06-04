"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { asset, siteConfig } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/ventures", label: "Ventures" },
  { href: "/investors", label: "Investors" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

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
      <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
        <div className="container-content flex h-20 items-center justify-between md:h-24">
          {/* Full lockup (transparent PNG includes wordmark + tagline) */}
          <Link href="/" aria-label={`${siteConfig.name} — home`} className="flex items-center">
            <Image
              src={asset("/logo-full.png")}
              alt={siteConfig.name}
              width={3007}
              height={1248}
              priority
              className="h-12 w-auto object-contain md:h-16"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "relative rounded-md px-3 py-2 text-[0.9375rem] font-semibold text-orange-600 after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-orange-600 after:content-['']"
                      : "rounded-md px-3 py-2 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-teal-50 hover:text-teal-900"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="md" variant="primary">
              Let&apos;s Connect
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center text-teal-900 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden">
          <div className="container-content flex h-20 items-center justify-between border-b border-rule">
            <Image
              src={asset("/logo-full.png")}
              alt={siteConfig.name}
              width={3007}
              height={1248}
              className="h-11 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center text-teal-900"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="container-content flex-1 py-8" aria-label="Mobile primary">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "block rounded-lg bg-teal-50 px-4 py-3 text-lg font-semibold text-orange-600"
                          : "block rounded-lg px-4 py-3 text-lg font-semibold text-ink hover:bg-teal-50 hover:text-teal-900"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="container-content border-t border-rule py-6">
            <Button href="/contact" size="lg" variant="primary" className="w-full">
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
