import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Photo Gallery | RCCG Livingspring Church Dundee",
  description:
    "Browse event photos and ministry moments from RCCG Livingspring Church Dundee.",
};

export default function PhotoGalleryPage() {
  return (
    <PlaceholderPage
      title="Photo Gallery"
      subtitle="Moments from worship, fellowship, and church life captured in pictures."
      description="This page will become a visual gallery featuring photos from services, events, outreach, and other meaningful church moments."
      highlights={[
        "Photo collections from events and services",
        "Albums organised by date or ministry area",
        "Visual highlights of worship, fellowship, and outreach",
        "A warm first look at church life for new visitors",
      ]}
    />
  );
}
