import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Volunteer | RCCG Livingspring Church Dundee",
  description:
    "Find volunteer opportunities and ways to serve through RCCG Livingspring Church Dundee.",
};

export default function VolunteerPage() {
  return (
    <PlaceholderPage
      title="Volunteer"
      subtitle="Use your time, gifts, and energy to make a difference in church and community life."
      description="This page will help people discover where they can volunteer, what support is needed, and how to get involved in meaningful service."
      highlights={[
        "Volunteer roles across church and outreach teams",
        "Information on skills, availability, and next steps",
        "Team opportunities for events and regular ministry",
        "Simple contact details for joining the volunteer network",
      ]}
    />
  );
}
