import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Video Sermons | RCCG Livingspring Church Dundee",
  description:
    "Watch video sermons and featured messages from RCCG Livingspring Church Dundee.",
};

export default function VideoSermonsPage() {
  return (
    <PlaceholderPage
      title="Video Sermons"
      subtitle="Watch church messages and teaching moments from recent services."
      description="This page will feature video sermons, livestream replays, and curated message content for anyone who wants to watch and reflect online."
      highlights={[
        "Embedded sermon videos and service replays",
        "Featured teachings for new visitors",
        "Message notes and scripture references",
        "Easy access to share sermons with others",
      ]}
    />
  );
}
