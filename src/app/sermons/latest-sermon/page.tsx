import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Latest Sermon | RCCG Livingspring Church Dundee",
  description:
    "Catch up with the latest sermon shared at RCCG Livingspring Church Dundee.",
};

export default function LatestSermonPage() {
  return (
    <PlaceholderPage
      title="Latest Sermon"
      subtitle="The newest message shared with our church family and online audience."
      description="This page will highlight the most recent sermon first, making it quick for visitors and members to stay current with weekly teaching."
      highlights={[
        "The newest sermon front and center",
        "Message summary and key scripture references",
        "Links to watch, listen, and share the sermon",
        "A simple path to browse older messages",
      ]}
    />
  );
}
