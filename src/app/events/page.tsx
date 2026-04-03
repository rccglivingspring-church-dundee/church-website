import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Events | RCCG Livingspring Church Dundee",
  description:
    "See church events, special gatherings, and ministry activities at RCCG Livingspring Church Dundee.",
};

export default function EventsPage() {
  return (
    <PlaceholderPage
      title="Events"
      subtitle="Stay connected with upcoming gatherings, church activities, and special moments."
      description="This page will help people discover upcoming services and special events, while also looking back at memorable church activities."
      highlights={[
        "Upcoming gatherings and special services",
        "Featured church activities and ministry events",
        "Easy links to event details and schedules",
        "Access to past events and gallery moments",
      ]}
    />
  );
}
