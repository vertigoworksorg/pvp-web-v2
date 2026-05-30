import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { MeetTeam } from "@/components/sections/MeetTeam";
import { ConnectStrip } from "@/components/sections/ConnectStrip";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Leadership"
        title="The people"
        highlight="behind PVP."
        sub="Every engagement at PVP is owned by a named lead from this team. Strategy, delivery, finance, and growth all sit with people you can call by name."
      />
      <MeetTeam />
      <ConnectStrip />
    </>
  );
}
