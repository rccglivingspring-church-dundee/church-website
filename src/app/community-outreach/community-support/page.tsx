import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Community Support | RCCG Livingspring Church Dundee",
  description:
    "See community support services and care initiatives offered through RCCG Livingspring Church Dundee.",
};

export default function CommunitySupportPage() {
  return (
    <PlaceholderPage
      title="Community Support"
      subtitle="Practical help, encouragement, and care for people in different seasons of life."
      description="This page will describe the support the church offers or connects people to, especially for those looking for prayer, care, and practical assistance."
      highlights={[
        "Guidance on available support and care pathways",
        "Ways to request help or pastoral attention",
        "Information for families, individuals, and newcomers",
        "Useful contacts and community care signposting",
      ]}
    />
  );
}
