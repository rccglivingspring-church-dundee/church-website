import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Bible Study Materials | RCCG Livingspring Church Dundee",
  description:
    "Find Bible study materials and discipleship resources from RCCG Livingspring Church Dundee.",
};

export default function BibleStudyMaterialsPage() {
  return (
    <PlaceholderPage
      title="Bible Study Materials"
      subtitle="Study helps and discipleship tools for personal and group growth."
      description="This page will offer Bible study guides, discussion notes, and teaching materials to support deeper understanding of Scripture."
      highlights={[
        "Downloadable study guides and lesson notes",
        "Resources for small groups and personal devotion",
        "Scripture-based discussion prompts and themes",
        "Helpful materials for ongoing discipleship",
      ]}
    />
  );
}
