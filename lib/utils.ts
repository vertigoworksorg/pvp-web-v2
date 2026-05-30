import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Pak Venture Point",
  shortName: "PVP",
  tagline: "Bridging the Gap between Technology and Development",
  description:
    "Pak Venture Point (PVP) is an AI-first innovation ecosystem delivering software solutions, strategic consultancy, freelancing operations, and startup development services designed for sustainable growth and digital transformation.",
  city: "Islamabad",
  country: "Pakistan",
  email: "company@pvp.com.pk",
  phone: "",
} as const;
