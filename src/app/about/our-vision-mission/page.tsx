import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Our Vision & Mission | RCCG Livingspring Church Dundee",
  description:
    "Explore the vision and mission of RCCG Livingspring Church Dundee and what guides our ministry.",
};

export default function VisionMissionPage() {
  return (
    <PlaceholderPage
      title="Our Vision & Mission"
      subtitle="The purpose, direction, and values shaping our ministry and service."
      description="This page will explain our mission, long-term vision, and the biblical values that shape how we worship, serve, and grow together."
      highlights={[
        "Clear statements of vision and mission",
        "Core values that guide church life and leadership",
        "Ministry priorities for worship, teaching, and outreach",
        "How members can live out the vision together",
      ]}
    />
  );
}
