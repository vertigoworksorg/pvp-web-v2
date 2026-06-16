import type { Metadata } from "next";
import { DesignLab } from "@/components/lab/DesignLab";

export const metadata: Metadata = {
  title: "Design Lab",
  description: "Internal: compare candidate art directions for the PVP website.",
  robots: { index: false, follow: false },
};

export default function DesignLabPage() {
  return <DesignLab />;
}
