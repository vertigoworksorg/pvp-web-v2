"use client";

/* A Link that plays a faction-themed page transition before navigating.
   Use it for links into a faction page (Venture = "cinematic",
   Consultancy = "editorial") so the arrival is anticipated. Falls back to a
   normal link for modified/middle clicks; reduced-motion is handled by the
   overlay (it navigates instantly). */

import Link from "next/link";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

type Theme = "cinematic" | "editorial" | "vertigo";

type Props = {
  href: string;
  label?: string;
  theme?: Theme;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "onClick">;

export function FactionLink({ href, label, theme = "cinematic", children, className, ...rest }: Props) {
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("pvp:faction-go", { detail: { href, label, theme } }));
  }
  return (
    <Link href={href} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
