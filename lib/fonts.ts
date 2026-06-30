import { Plus_Jakarta_Sans, Bricolage_Grotesque, Sora, Hanken_Grotesk, Space_Mono } from "next/font/google";

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

/* VertigoWorks × mHealth fonts for the Freelancing faction (page + CoreServices
   slide + vertigo transition + design-lab demo). preload:true so they load
   eagerly with the page instead of flashing in after paint — matching how the
   default font loads on the other faction pages. */
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
  preload: true,
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
  preload: true,
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
  preload: true,
});
