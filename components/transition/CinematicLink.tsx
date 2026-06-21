"use client";

/* A Link that plays the dark-cinematic page transition before navigating.
   Use it for links into the Venture/Startup faction page so the arrival is
   anticipated. Falls back to a normal link for modified/middle clicks and
   when prefers-reduced-motion is set (handled by the overlay). */

import Link from "next/link";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

type Props = {
  href: string;
  label?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "onClick">;

export function CinematicLink({ href, label, children, className, ...rest }: Props) {
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    // Let new-tab / modified / non-primary clicks behave normally.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("pvp:cinematic-go", { detail: { href, label } }));
  }
  return (
    <Link href={href} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
