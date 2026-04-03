import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Downloads | RCCG Livingspring Church Dundee",
  description:
    "Download church resources, documents, and ministry materials from RCCG Livingspring Church Dundee.",
};

export default function DownloadsPage() {
  return (
    <PlaceholderPage
      title="Downloads"
      subtitle="Useful files, ministry documents, and resources available to take with you."
      description="This page will provide downloadable resources such as announcements, guides, event materials, and ministry documents."
      highlights={[
        "Sermon notes, event flyers, and ministry handouts",
        "Member resources and helpful church documents",
        "Printable materials for groups and families",
        "Organised downloads that are easy to find and reuse",
      ]}
    />
  );
}
