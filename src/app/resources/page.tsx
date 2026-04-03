import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Resources | RCCG Livingspring Church Dundee",
  description:
    "Access church resources, study materials, prayer support, and downloads from RCCG Livingspring Church Dundee.",
};

export default function ResourcesPage() {
  return (
    <PlaceholderPage
      title="Resources"
      subtitle="Helpful tools for spiritual growth, study, prayer, and everyday faith."
      description="This page will gather key resources for members and visitors, making it easier to find study materials, prayer support, and useful downloads."
      highlights={[
        "Bible study materials and learning guides",
        "Prayer request support and response pathways",
        "Downloadable church resources and documents",
        "A central hub for practical faith-building tools",
      ]}
    />
  );
}
