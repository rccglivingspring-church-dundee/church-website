import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Our Pastor | RCCG Livingspring Church Dundee",
  description:
    "Meet the pastor of RCCG Livingspring Church Dundee and learn more about his calling and ministry.",
};

export default function OurPastorPage() {
  return (
    <PlaceholderPage
      title="Our Pastor"
      subtitle="Meet the shepherd leading the church with prayer, teaching, and compassion."
      description="This page will share our pastor's profile, ministry focus, and heart for leading people in worship, discipleship, and service."
      highlights={[
        "Pastoral biography and ministry journey",
        "A message of welcome to guests and members",
        "Vision for discipleship, prayer, and outreach",
        "Ways to connect with pastoral care and support",
      ]}
    />
  );
}
