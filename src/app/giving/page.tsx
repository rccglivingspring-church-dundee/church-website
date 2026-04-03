import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Giving | RCCG Livingspring Church Dundee",
  description:
    "Support the ministry of RCCG Livingspring Church Dundee through giving and generosity.",
};

export default function GivingPage() {
  return (
    <PlaceholderPage
      title="Giving"
      subtitle="Support the mission and ministry of the church through generous giving."
      description="This page will provide secure giving details, explain how offerings support ministry, and help people give with confidence and clarity."
      highlights={[
        "Information on online giving and church support",
        "A simple explanation of where giving makes an impact",
        "Options for one-time or regular contributions",
        "A clear message about generosity and stewardship",
      ]}
    />
  );
}
