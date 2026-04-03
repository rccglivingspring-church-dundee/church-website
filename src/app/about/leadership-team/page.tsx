import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Leadership Team | RCCG Livingspring Church Dundee",
  description:
    "Get to know the leadership team serving RCCG Livingspring Church Dundee.",
};

export default function LeadershipTeamPage() {
  return (
    <PlaceholderPage
      title="Leadership Team"
      subtitle="Meet the leaders serving across ministry, care, and church administration."
      description="This page will introduce the leadership team and highlight the people helping guide ministry, support members, and organise church life."
      highlights={[
        "Profiles of ministry leaders and coordinators",
        "Responsibilities across church departments",
        "Support contacts for different ministry areas",
        "A snapshot of the team's shared commitment to service",
      ]}
    />
  );
}
