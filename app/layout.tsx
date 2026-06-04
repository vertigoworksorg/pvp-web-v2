import type { Metadata, Viewport } from "next";
import "./globals.css";
import { bricolage, instrumentSerif, hanken, plexMono } from "@/lib/fonts";
import { asset, cn, siteConfig } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — AI-First Innovation Ecosystem`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: asset("/logo.png"),
    apple: asset("/logo.png"),
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2342",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        bricolage.variable,
        instrumentSerif.variable,
        hanken.variable,
        plexMono.variable,
      )}
    >
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
