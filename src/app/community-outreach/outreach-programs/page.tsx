import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Outreach Programs | RCCG Livingspring Church Dundee",
  description:
    "Explore outreach programs and community initiatives from RCCG Livingspring Church Dundee.",
};

export default function OutreachProgramsPage() {
  return (
    <PlaceholderPage
      title="Outreach Programs"
      subtitle="Programs and initiatives designed to bring help, hope, and support."
      description="This page will showcase the church's outreach programs, their goals, and how people can participate or benefit from them."
      highlights={[
        "Details on active outreach initiatives",
        "Who each program serves and how it helps",
        "Participation information for volunteers and partners",
        "Snapshots of community impact and future plans",
      ]}
    />
  );
}
