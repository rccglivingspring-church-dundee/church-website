import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Community Outreach | RCCG Livingspring Church Dundee",
  description:
    "Learn how RCCG Livingspring Church Dundee serves the local community through outreach and support.",
};

export default function CommunityOutreachPage() {
  return (
    <PlaceholderPage
      title="Community Outreach"
      subtitle="Serving Dundee with compassion, practical help, and the love of Christ."
      description="This page will highlight how the church reaches beyond its walls to support individuals, families, and the wider community."
      highlights={[
        "An overview of outreach projects and partnerships",
        "Volunteer opportunities for members and supporters",
        "Stories of practical care and community impact",
        "Ways to receive or refer support where needed",
      ]}
    />
  );
}
