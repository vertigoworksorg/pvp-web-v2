import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoreServices } from "@/components/sections/CoreServices";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { ValuesExplorer } from "@/components/sections/ValuesExplorer";
import { MeetTeam } from "@/components/sections/MeetTeam";
import { ConnectStrip } from "@/components/sections/ConnectStrip";

export const metadata: Metadata = {
  title: "Pak Venture Point — AI-First Innovation Ecosystem from Islamabad",
  description:
    "Pak Venture Point (PVP) is an AI-first innovation ecosystem delivering software solutions, strategic consultancy, freelancing operations, and startup development services.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutSection />
      <CoreServices />
      <WhoWeServe />
      <ValuesExplorer />
      <MeetTeam />
      <ConnectStrip />
    </>
  );
}
