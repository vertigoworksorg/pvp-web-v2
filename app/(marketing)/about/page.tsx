import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { Values } from "@/components/sections/Values";
import { ConnectStrip } from "@/components/sections/ConnectStrip";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="A multidisciplinary innovation"
        highlight="enterprise."
        sub="Pak Venture Point (PVP) integrates technology, consultancy, freelancing, entrepreneurship, and venture development into one scalable ecosystem — built from Islamabad."
      />
      <AboutSection />
      <Values />
      <ConnectStrip />
    </>
  );
}
