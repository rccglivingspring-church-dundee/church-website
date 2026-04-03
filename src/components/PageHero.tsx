"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type PageHeroProps = {
  title: string;
  subtitle: string;
};

const segmentLabels: Record<string, string> = {
  about: "About Us",
  "our-story": "Our Story",
  "our-pastor": "Our Pastor",
  "our-vision-mission": "Our Vision & Mission",
  "leadership-team": "Leadership Team",
  sermons: "Sermons",
  "video-sermons": "Video Sermons",
  "audio-sermons": "Audio Sermons",
  "sermon-series": "Sermon Series",
  "latest-sermon": "Latest Sermon",
  events: "Events",
  "upcoming-events": "Upcoming Events",
  "past-events": "Past Events",
  "photo-gallery": "Photo Gallery",
  "community-outreach": "Community Outreach",
  "outreach-programs": "Outreach Programs",
  volunteer: "Volunteer",
  "community-support": "Community Support",
  giving: "Giving",
  resources: "Resources",
  "bible-study-materials": "Bible Study Materials",
  "prayer-requests": "Prayer Requests",
  downloads: "Downloads",
  contact: "Contact Us",
  "find-us": "Find Us",
};

function formatSegment(segment: string) {
  return (
    segmentLabels[segment] ??
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => ({
      label: formatSegment(segment),
      href: `/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #163A74 0%, #1E4D9B 45%, #2D67C7 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(216,243,226,0.16),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-white/80"
        >
          {breadcrumbs.map((crumb, index) => {
            const isCurrent = index === breadcrumbs.length - 1;

            return (
              <span key={crumb.href} className="flex items-center gap-2">
                {isCurrent ? (
                  <span className="font-semibold text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                )}
                {!isCurrent ? <span aria-hidden="true">/</span> : null}
              </span>
            );
          })}
        </nav>

        <div className="mt-3 max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
