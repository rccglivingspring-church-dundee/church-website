import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Sermon Series | RCCG Livingspring Church Dundee",
  description:
    "Explore sermon series and themed teaching collections from RCCG Livingspring Church Dundee.",
};

export default function SermonSeriesPage() {
  return (
    <PlaceholderPage
      title="Sermon Series"
      subtitle="Follow message collections designed for deeper, connected learning."
      description="This page will group sermons into series so visitors can follow multi-week teachings around specific biblical themes or life topics."
      highlights={[
        "Current and past themed sermon collections",
        "Series overviews with key scriptures and goals",
        "A clear path to continue each message journey",
        "Helpful structure for group study and review",
      ]}
    />
  );
}
