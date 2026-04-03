import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Find Us | RCCG Livingspring Church Dundee",
  description:
    "Find the location of RCCG Livingspring Church Dundee and plan your visit.",
};

export default function FindUsPage() {
  return (
    <PlaceholderPage
      title="Find Us"
      subtitle="Plan your visit with location details, directions, and service information."
      description="This page will help visitors find the church easily with address details, maps, transport guidance, and helpful arrival information."
      highlights={[
        "Church address, map, and travel directions",
        "Parking and public transport guidance",
        "Helpful tips for first-time visitors and families",
        "Service times and arrival information in one place",
      ]}
    />
  );
}
