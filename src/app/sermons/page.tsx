import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Sermons | RCCG Livingspring Church Dundee",
  description:
    "Browse sermon content, message archives, and teaching resources from RCCG Livingspring Church Dundee.",
};

export default function SermonsPage() {
  return (
    <PlaceholderPage
      title="Sermons"
      subtitle="Listen, watch, and revisit messages that strengthen faith and everyday living."
      description="This page will become the main hub for sermons, helping visitors quickly access recent messages, themed series, and teaching archives."
      highlights={[
        "Featured video and audio messages",
        "Access to the latest sermon and recent teaching",
        "Organised sermon series for deeper study",
        "A growing archive of practical Bible teaching",
      ]}
    />
  );
}
