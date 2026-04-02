"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Our Pastor", href: "/about/our-pastor" },
      { label: "Our Vision & Mission", href: "/about/vision-and-mission" },
      { label: "Leadership Team", href: "/about/leadership-team" },
    ],
  },
  {
    label: "SERMONS",
    href: "/sermons",
    children: [
      { label: "Video Sermons", href: "/sermons/video" },
      { label: "Audio Sermons", href: "/sermons/audio" },
      { label: "Sermon Series", href: "/sermons/series" },
      { label: "Latest Sermon", href: "/sermons/latest" },
    ],
  },
  {
    label: "EVENTS",
    href: "/events",
    children: [
      { label: "Upcoming Events", href: "/events/upcoming" },
      { label: "Past Events", href: "/events/past" },
      { label: "Photo Gallery", href: "/events/photo-gallery" },
    ],
  },
  {
    label: "COMMUNITY OUTREACH",
    href: "/community-outreach",
    children: [
      { label: "Outreach Programs", href: "/community-outreach/programs" },
      { label: "Volunteer", href: "/community-outreach/volunteer" },
      { label: "Community Support", href: "/community-outreach/support" },
    ],
  },
  { label: "GIVING", href: "/giving", featured: true },
  {
    label: "RESOURCES",
    href: "/resources",
    children: [
      { label: "Bible Study Materials", href: "/resources/bible-study-materials" },
      { label: "Prayer Requests", href: "/resources/prayer-requests" },
      { label: "Downloads", href: "/resources/downloads" },
    ],
  },
  { label: "CONTACT US", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "Twitter", href: "https://twitter.com", icon: "x" },
  { label: "Instagram", href: "https://instagram.com", icon: "ig" },
  { label: "YouTube", href: "https://youtube.com", icon: "yt" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const isActiveGroup = (
    href: string,
    children?: Array<{ label: string; href: string }>,
  ) => isActiveLink(href) || children?.some((child) => isActiveLink(child.href));

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div
        className="hidden md:block"
        style={{ backgroundColor: "#1E4D9B", color: "#FFFFFF" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="font-medium tracking-[0.12em]">
            01382 223101 <span className="px-2 text-white/50">|</span> 07827
            922056
          </div>
          <Link
            href="/giving"
            className="rounded-full border px-4 py-1.5 text-[11px] font-bold tracking-[0.24em] transition hover:bg-white hover:text-[#1E4D9B]"
            style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
          >
            DONATE
          </Link>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white"
              style={{ backgroundColor: "#1E5C35" }}
            >
              R
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base font-extrabold text-slate-950 sm:text-lg">
                RCCG Livingspring
              </span>
              <span
                className="block truncate text-xs font-medium sm:text-sm"
                style={{ color: "#1E4D9B" }}
              >
                Church Dundee
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-9 min-w-9 items-center justify-center rounded-full border text-[11px] font-bold uppercase transition hover:-translate-y-0.5"
                style={{
                  borderColor: "#D0D5DD",
                  color: "#1E4D9B",
                }}
              >
                {item.icon}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold tracking-[0.18em] lg:hidden"
            style={{ borderColor: "#D0D5DD", color: "#1E4D9B" }}
          >
            <span>MENU</span>
            <span className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-4 transition ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
                style={{ backgroundColor: "#1E4D9B" }}
              />
              <span
                className={`h-0.5 w-4 transition ${isOpen ? "opacity-0" : ""}`}
                style={{ backgroundColor: "#1E4D9B" }}
              />
              <span
                className={`h-0.5 w-4 transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
                style={{ backgroundColor: "#1E4D9B" }}
              />
            </span>
          </button>
        </div>
      </div>

      <div className="hidden border-b border-slate-200 bg-white lg:block">
        <nav
          aria-label="Primary navigation"
          className="mx-auto grid max-w-7xl grid-cols-8 items-stretch gap-2 px-4 sm:px-6 lg:px-8"
        >
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="group relative flex items-center justify-center"
            >
              <Link
                href={link.href}
                className={`flex items-center justify-center gap-1.5 px-2 py-4 text-center text-[11px] font-semibold tracking-[0.16em] transition xl:text-xs ${
                  link.featured ? "rounded-full px-5 py-2.5 self-center" : ""
                }`}
                style={
                  link.featured
                    ? {
                        backgroundColor: "#FFFFFF",
                        color: "#0F1E35",
                        boxShadow: "0 8px 24px rgba(15, 30, 53, 0.12)",
                      }
                    : {
                        color: isActiveGroup(link.href, link.children)
                          ? "#1E4D9B"
                          : "#0F1E35",
                      }
                }
              >
                <span
                  className={`${link.featured ? "" : "relative inline-flex pb-1"} group-hover:text-[#1E5C35]`}
                  style={{
                    color: link.featured
                      ? "#0F1E35"
                      : isActiveGroup(link.href, link.children)
                        ? "#1E4D9B"
                        : undefined,
                  }}
                >
                  {link.label}
                  {!link.featured ? (
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                      style={{ backgroundColor: "#1E5C35" }}
                    />
                  ) : null}
                </span>
                {link.children ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      color: isActiveGroup(link.href, link.children)
                        ? "#1E4D9B"
                        : "#0F1E35",
                    }}
                  >
                    <path d="m5 7 5 5 5-5" />
                  </svg>
                ) : null}
              </Link>

              {link.children ? (
                <div className="pointer-events-none absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div
                    className="overflow-hidden rounded-2xl border py-2 shadow-[0_22px_44px_rgba(15,30,53,0.14)]"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#E4E7EC",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-center border-l-4 px-4 py-3 text-sm font-medium transition hover:bg-slate-50"
                        style={{
                          borderLeftColor: isActiveLink(child.href) ? "#1E5C35" : "transparent",
                          color: isActiveLink(child.href) ? "#1E4D9B" : "#0F1E35",
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>

      {isOpen ? (
        <div className="border-b border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div
              className="rounded-3xl px-4 py-4 text-white"
              style={{ backgroundColor: "#1E4D9B" }}
            >
              <div className="flex flex-col gap-3 text-sm">
                <p className="font-medium">01382 223101</p>
                <p className="font-medium">07827 922056</p>
                <Link
                  href="/giving"
                  onClick={() => setIsOpen(false)}
                  className="mt-1 inline-flex w-fit rounded-full border px-4 py-2 text-xs font-bold tracking-[0.22em]"
                  style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                >
                  DONATE
                </Link>
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="rounded-2xl border border-slate-100 px-2 py-2"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-bold tracking-[0.08em] transition hover:bg-slate-50 ${
                      link.featured ? "text-white" : ""
                    }`}
                    style={
                      link.featured
                        ? { backgroundColor: "#1E4D9B" }
                        : {
                            color: isActiveGroup(link.href, link.children)
                              ? "#1E4D9B"
                              : "#0F1E35",
                          }
                    }
                  >
                    <span>{link.label}</span>
                    {link.children ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 7 5 5 5-5" />
                      </svg>
                    ) : null}
                  </Link>

                  {link.children ? (
                    <div className="mt-1 grid gap-1 pb-1 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="border-l-4 px-3 py-2 text-sm transition hover:bg-slate-50"
                          style={{
                            borderLeftColor: isActiveLink(child.href)
                              ? "#1E5C35"
                              : "#DCE8E0",
                            color: isActiveLink(child.href) ? "#1E4D9B" : "#0F1E35",
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 min-w-10 items-center justify-center rounded-full border text-xs font-bold uppercase"
                  style={{ borderColor: "#D0D5DD", color: "#1E4D9B" }}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
