"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { asset, siteConfig } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/ventures", label: "Ventures" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

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
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} — home`}>
            <Image src={asset("/logo.png")} alt="" width={56} height={56} className="h-12 w-12 object-contain md:h-14 md:w-14" priority />
            <div className="leading-tight">
              <p className="font-display text-lg font-bold text-teal-900 md:text-xl">
                Pak Venture <span className="text-orange-600">Point</span>
              </p>
              <p className="text-[10px] font-medium tracking-wider text-ink-muted">
                BRIDGING TECH &amp; DEVELOPMENT
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  i === 0
                    ? "relative rounded-md px-3 py-2 text-[0.9375rem] font-semibold text-orange-600 after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-orange-600 after:content-['']"
                    : "rounded-md px-3 py-2 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-teal-50 hover:text-teal-900"
                }
              >
                {item.label}
              </Link>
            ))}
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
            <div className="flex items-center gap-2">
              <Image src={asset("/logo.png")} alt="" width={40} height={40} className="object-contain" />
              <span className="font-display text-lg font-bold text-teal-900">
                Pak Venture <span className="text-orange-600">Point</span>
              </span>
            </div>
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
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-lg font-semibold text-ink hover:bg-teal-50 hover:text-teal-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
