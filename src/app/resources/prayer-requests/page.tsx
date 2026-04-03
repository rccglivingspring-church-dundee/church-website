import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Prayer Requests | RCCG Livingspring Church Dundee",
  description:
    "Share prayer requests and receive prayer support from RCCG Livingspring Church Dundee.",
};

export default function PrayerRequestsPage() {
  return (
    <PlaceholderPage
      title="Prayer Requests"
      subtitle="A place to share your prayer needs and let the church stand with you."
      description="This page will help people submit prayer requests, understand how the church prays with care, and access spiritual support."
      highlights={[
        "A prayer request form for personal needs",
        "Guidance on confidential and pastoral prayer support",
        "Encouragement resources for waiting and faith",
        "Clear next steps for urgent spiritual care",
      ]}
    />
  );
}
