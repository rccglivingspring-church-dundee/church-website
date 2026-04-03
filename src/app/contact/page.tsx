import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact Us | RCCG Livingspring Church Dundee",
  description:
    "Contact RCCG Livingspring Church Dundee for questions, support, or visitor information.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact Us"
      subtitle="Reach out to our church team for questions, support, and next steps."
      description="This page will make it easy to contact the church for enquiries, pastoral care, prayer, and information about visiting or getting involved."
      highlights={[
        "Simple contact form and key phone details",
        "Support for visitors, members, and families",
        "Ways to ask questions about church life and ministry",
        "Clear links to location details and prayer support",
      ]}
    />
  );
}
