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
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    stroke: false,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    path: "M4 4l16 16M4 20L20 4",
    stroke: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    stroke: false,
  },
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
      <div className="border-b border-slate-200" style={{ backgroundColor: "#1E4D9B" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white"
              style={{ backgroundColor: "#1E5C35" }}
            >
              R
            </span>
            <span className="min-w-0">
              <span
                className="block truncate text-base sm:text-lg"
                style={{
                  color: "white",
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                  textShadow: "1px 1px 0px #0a1f3d, 2px 2px 0px #0a1f3d, 3px 3px 0px rgba(0,0,0,0.2), 0px 0px 20px rgba(30,77,155,0.4)",
                }}
              >
                RCCG Livingspring
              </span>
              <span
                className="block truncate text-xs sm:text-sm"
                style={{
                  color: "#D8F3E2",
                  fontWeight: 600,
                  textShadow: "1px 1px 0px #0d3320, 2px 2px 0px rgba(0,0,0,0.2), 0px 0px 15px rgba(30,92,53,0.5)",
                }}
              >
                Church Dundee
              </span>
            </span>
          </Link>

          <div className="hidden items-center lg:flex" style={{ gap: 10 }}>
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex shrink-0 items-center justify-center rounded-full border-white/40 text-white transition-all duration-200 hover:border-white hover:bg-white/[0.15]"
                style={{
                  width: 38,
                  height: 38,
                  border: "1.5px solid rgba(255,255,255,0.4)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={item.stroke ? "none" : "currentColor"}
                  stroke={item.stroke ? "currentColor" : "none"}
                  strokeWidth={item.stroke ? 2 : 0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={item.path} />
                </svg>
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold tracking-[0.18em] lg:hidden"
            style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
          >
            <span>MENU</span>
            <span className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-4 transition ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
              <span
                className={`h-0.5 w-4 transition ${isOpen ? "opacity-0" : ""}`}
                style={{ backgroundColor: "#FFFFFF" }}
              />
              <span
                className={`h-0.5 w-4 transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
                style={{ backgroundColor: "#FFFFFF" }}
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
                className={`flex items-center justify-center gap-1.5 px-2 py-4 text-center text-[11px] font-bold tracking-[0.16em] transition xl:text-xs ${
                  link.featured
                    ? "self-center rounded-full px-5 py-2 hover:!bg-[#267A45]"
                    : link.label === "CONTACT US"
                      ? "self-center rounded-full px-5 py-2 font-bold hover:!bg-[#2558B0]"
                      : ""
                }`}
                style={
                  link.featured
                    ? {
                        backgroundColor: "#1E5C35",
                        color: "#FFFFFF",
                      }
                    : link.label === "CONTACT US"
                      ? {
                          backgroundColor: "#1E4D9B",
                          color: "#FFFFFF",
                          border: "none",
                          outline: "none",
                        }
                      : {
                          color: isActiveGroup(link.href, link.children)
                            ? "#1E4D9B"
                            : "#0F1E35",
                        }
                }
              >
                <span
                  className={`${link.featured || link.label === "CONTACT US" ? "" : "relative inline-flex pb-1"} ${
                    link.label === "CONTACT US" ? "" : "group-hover:text-[#1E5C35]"
                  }`}
                  style={{
                    color:
                      link.featured || link.label === "CONTACT US"
                        ? "#FFFFFF"
                        : isActiveGroup(link.href, link.children)
                          ? "#1E4D9B"
                          : undefined,
                  }}
                >
                  {link.label}
                  {!link.featured && link.label !== "CONTACT US" ? (
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
                        className="flex items-center border-l-4 px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-[#1E5C35] hover:text-white"
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
                    className={`flex min-h-[44px] items-center justify-between rounded-2xl px-3 py-3 text-sm font-bold tracking-[0.08em] transition ${
                      link.featured
                        ? "text-white hover:!bg-[#267A45]"
                        : link.label === "CONTACT US"
                          ? "text-white hover:!bg-[#2558B0]"
                          : "hover:bg-slate-50"
                    }`}
                    style={
                      link.featured
                        ? { backgroundColor: "#1E5C35" }
                        : link.label === "CONTACT US"
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

            <div className="mt-5 flex flex-wrap" style={{ gap: 10 }}>
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex shrink-0 items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    width: 38,
                    height: 38,
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    color: "#FFFFFF",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={item.stroke ? "none" : "currentColor"}
                    stroke={item.stroke ? "currentColor" : "none"}
                    strokeWidth={item.stroke ? 2 : 0}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
