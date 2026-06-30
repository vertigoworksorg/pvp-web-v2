import { Plus_Jakarta_Sans, Bricolage_Grotesque, Sora, Hanken_Grotesk, Space_Mono, Fraunces, DM_Sans } from "next/font/google";

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

/* Shahan Naqvi v2 fonts for the Software Development faction (clean SaaS):
   Fraunces (serif display) + DM Sans (body). preload:true so they load
   eagerly with the page. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});
