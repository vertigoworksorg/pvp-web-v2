import type { Metadata, Viewport } from "next";
import "./globals.css";
import { plusJakarta } from "@/lib/fonts";
import { cn, siteConfig } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — AI-First Innovation Ecosystem`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // Favicon is served via the app/icon.svg file convention.
};

export const viewport: Viewport = {
  themeColor: "#1A5B64",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(plusJakarta.variable)}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
