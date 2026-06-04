import {
  Bricolage_Grotesque,
  Instrument_Serif,
  Hanken_Grotesk,
  IBM_Plex_Mono,
} from "next/font/google";

// Display — headlines, statements, nav, key UI
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
  preload: true,
});

// Accent — emphasis phrases inside headlines, pull-quotes
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
  preload: true,
});

// Body — paragraphs, labels, buttons, forms
export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
  preload: true,
});

// Mono — section markers, eyebrows, meta, numbering
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});
