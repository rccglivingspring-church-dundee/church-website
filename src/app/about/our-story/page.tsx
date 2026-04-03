import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Our Story | RCCG Livingspring Church Dundee",
  description:
    "Read the story of how RCCG Livingspring Church Dundee began and how God has led the church over time.",
};

export default function OurStoryPage() {
  return (
    <PlaceholderPage
      title="Our Story"
      subtitle="A look at how the church began, grew, and continues to serve with faith."
      description="This page will tell the story of our beginnings, key milestones, and the journey God has taken us on as a church family."
      highlights={[
        "Founding moments and early church milestones",
        "Stories of growth, faith, and community impact",
        "Photos and memories from important seasons",
        "A timeline of how the ministry has developed",
      ]}
    />
  );
}
