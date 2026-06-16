import type { Metadata } from "next";
import { HeroLanding } from "@/components/sections/HeroLanding";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoreServices } from "@/components/sections/CoreServices";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Values } from "@/components/sections/Values";
import { MeetTeam } from "@/components/sections/MeetTeam";
import { ConnectStrip } from "@/components/sections/ConnectStrip";
import { Reveal } from "@/components/lab/primitives";

export const metadata: Metadata = {
  title: "Pak Venture Point — AI-First Innovation Ecosystem from Islamabad",
  description:
    "Pak Venture Point (PVP) is an AI-first innovation ecosystem delivering software solutions, strategic consultancy, freelancing operations, and startup development services.",
};

export default function HomePage() {
  return (
    <>
      <HeroLanding />
      <StatsStrip />
      <Reveal><AboutSection /></Reveal>
      <Reveal><CoreServices /></Reveal>
      <Reveal><WhoWeServe /></Reveal>
      <Reveal><Values /></Reveal>
      <Reveal><MeetTeam /></Reveal>
      <Reveal><ConnectStrip /></Reveal>
    </>
  );
}
