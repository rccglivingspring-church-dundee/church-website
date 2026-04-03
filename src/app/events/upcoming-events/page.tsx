import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Upcoming Events | RCCG Livingspring Church Dundee",
  description:
    "Find upcoming church events and special gatherings at RCCG Livingspring Church Dundee.",
};

export default function UpcomingEventsPage() {
  return (
    <PlaceholderPage
      title="Upcoming Events"
      subtitle="Plan ahead for worship gatherings, celebrations, and church activities."
      description="This page will list upcoming events with dates, times, locations, and helpful information for everyone planning to attend."
      highlights={[
        "Event calendar with upcoming dates and times",
        "Special services, conferences, and church programs",
        "Registration or RSVP information where needed",
        "Helpful details for first-time visitors attending events",
      ]}
    />
  );
}
