import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CoreServices } from "@/components/sections/CoreServices";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { ConnectStrip } from "@/components/sections/ConnectStrip";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader variant="ecosystem"
        eyebrow="Our Operational Pillars"
        title="One Ecosystem."
        highlight="Multiple Solutions."
        sub="PVP offers integrated services across technology, freelancing, consultancy and venture development — empowering businesses, startups and organizations to innovate, scale and succeed."
      />
      <CoreServices />
      <WhoWeServe />
      <ConnectStrip />
    </>
  );
}
