import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Audio Sermons | RCCG Livingspring Church Dundee",
  description:
    "Listen to audio sermons and message recordings from RCCG Livingspring Church Dundee.",
};

export default function AudioSermonsPage() {
  return (
    <PlaceholderPage
      title="Audio Sermons"
      subtitle="Listen on the go to encouraging teaching and Bible-based messages."
      description="This page will host audio sermon recordings for members and visitors who want a simple way to listen during the week."
      highlights={[
        "Streamable message audio from recent services",
        "Download-friendly sermon recordings",
        "Organised playlists by topic or date",
        "Practical teaching for personal devotion and study",
      ]}
    />
  );
}
