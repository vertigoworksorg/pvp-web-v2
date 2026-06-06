import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Asset path helper.
 *
 * Next.js's <Image> with `unoptimized: true` (required for GitHub Pages
 * static export) does NOT auto-prefix src with basePath. So we prepend
 * NEXT_PUBLIC_BASE_PATH ourselves for every static asset (logos, photos).
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export const siteConfig = {
  name: "Pak Venture Point",
  shortName: "PVP",
  tagline: "Bridging the Gap between Technology and Development",
  description:
    "Pak Venture Point (PVP) is an AI-first innovation ecosystem delivering software solutions, strategic consultancy, freelancing operations, and startup development services designed for sustainable growth and digital transformation.",
  city: "Islamabad",
  country: "Pakistan",
  address: "02, Sunset Street, Greens Avenue, Park Road, Islamabad, Pakistan.",
  email: "info@pvp.com.pk",
  phone: "",
} as const;
