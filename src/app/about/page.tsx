import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "About Us | RCCG Livingspring Church Dundee",
  description:
    "Learn more about RCCG Livingspring Church Dundee, our journey, and the heart behind our ministry.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About Us"
      subtitle="Discover the story, calling, and people behind RCCG Livingspring Church Dundee."
      description="This page will introduce our church family, share what we believe, and help visitors understand the heart of our ministry in Dundee."
      highlights={[
        "An overview of our church history and growth",
        "What we believe and how we serve our community",
        "Helpful links to our story, pastor, mission, and leadership",
        "A simple guide for first-time visitors and new members",
      ]}
    />
  );
}
