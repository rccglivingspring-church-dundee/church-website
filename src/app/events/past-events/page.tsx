import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Past Events | RCCG Livingspring Church Dundee",
  description:
    "Look back on past events, services, and ministry highlights from RCCG Livingspring Church Dundee.",
};

export default function PastEventsPage() {
  return (
    <PlaceholderPage
      title="Past Events"
      subtitle="A record of memorable gatherings, celebrations, and ministry highlights."
      description="This page will help the church preserve and share moments from past events, services, and special ministry activities."
      highlights={[
        "Highlights from previous events and programs",
        "Short recaps and milestone moments",
        "A record of church celebrations and outreach efforts",
        "Links to related photos, videos, or testimonies",
      ]}
    />
  );
}
