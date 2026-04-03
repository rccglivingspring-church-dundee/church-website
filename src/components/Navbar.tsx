"use client";

import Link from "next/link";
import Image from "next/image";
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
      { label: "Our Vision & Mission", href: "/about/our-vision-mission" },
      { label: "Leadership Team", href: "/about/leadership-team" },
    ],
  },
  {
    label: "SERMONS",
    href: "/sermons",
    children: [
      { label: "Video Sermons", href: "/sermons/video-sermons" },
      { label: "Audio Sermons", href: "/sermons/audio-sermons" },
      { label: "Sermon Series", href: "/sermons/sermon-series" },
      { label: "Latest Sermon", href: "/sermons/latest-sermon" },
    ],
  },
  {
    label: "EVENTS",
    href: "/events",
    children: [
      { label: "Upcoming Events", href: "/events/upcoming-events" },
      { label: "Past Events", href: "/events/past-events" },
      { label: "Photo Gallery", href: "/events/photo-gallery" },
    ],
  },
  {
    label: "COMMUNITY OUTREACH",
    href: "/community-outreach",
    children: [
      { label: "Outreach Programs", href: "/community-outreach/outreach-programs" },
      { label: "Volunteer", href: "/community-outreach/volunteer" },
      { label: "Community Support", href: "/community-outreach/community-support" },
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

const centreLinks = navLinks.filter((l) => !l.featured && l.label !== "CONTACT US");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = usePathname();

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const isActiveGroup = (
    href: string,
    children?: Array<{ label: string; href: string }>,
  ) => isActiveLink(href) || children?.some((child) => isActiveLink(child.href));

  const close = () => { setIsOpen(false); setOpenMobile(null); };

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "#ffffff", height: 80, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
    >
      {/* ── SINGLE BAR ── */}
      <div
        className="flex h-full items-center justify-between"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}
      >

        {/* LEFT: Logo + name */}
        <Link href="/" onClick={close} className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="RCCG Livingspring Church Dundee Logo"
            width={150}
            height={150}
            style={{ objectFit: "contain", flexShrink: 0, overflow: "visible" }}
          />
          <span className="hidden sm:block">
            <span
              className="block"
              style={{
                color: "#0F1E35",
                fontSize: 15,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                textShadow: "none",
              }}
            >
              RCCG Livingspring
            </span>
            <span
              className="block"
              style={{ color: "#64748B", fontSize: 10, fontStyle: "italic" }}
            >
              Church Dundee
            </span>
          </span>
        </Link>

        {/* CENTRE: Nav links — desktop */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center lg:flex"
          style={{ gap: 28 }}
        >
          {centreLinks.map((link) => (
            <div key={link.label} className="group relative flex items-center">
              <Link
                href={link.href}
                className="flex items-center gap-1 transition-opacity hover:opacity-75"
                style={{
                  color: isActiveGroup(link.href, link.children) ? "#1E4D9B" : "#0F1E35",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {link.label}
                {link.children ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    style={{ width: 12, height: 12, flexShrink: 0 }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 7 5 5 5-5" />
                  </svg>
                ) : null}
              </Link>

              {link.children ? (
                <div className="pointer-events-none absolute left-1/2 top-full z-30 w-60 -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div
                    className="overflow-hidden rounded-2xl border py-2 shadow-[0_22px_44px_rgba(0,0,0,0.3)]"
                    style={{ backgroundColor: "#1A2C45", borderColor: "#263952" }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-center border-l-4 px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-[#2E7D4F] hover:text-white"
                        style={{
                          borderLeftColor: isActiveLink(child.href) ? "#2E7D4F" : "transparent",
                          color: isActiveLink(child.href) ? "#4ADE80" : "#CBD5E1",
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

        {/* RIGHT: GIVING + CONTACT US — desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/giving"
            className="inline-flex items-center rounded-full text-white transition hover:opacity-90"
            style={{
              backgroundColor: "#2E7D4F",
              padding: "8px 20px",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            GIVING
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full transition hover:bg-[#1E4D9B] hover:text-white"
            style={{
              border: "2px solid #1E4D9B",
              color: "#1E4D9B",
              padding: "6px 20px",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((o) => !o)}
          className="flex flex-col items-center justify-center gap-1.5 lg:hidden"
          style={{ width: 40, height: 40 }}
        >
          <span
            className="block h-0.5 w-6 bg-[#0F1E35] transition-all duration-300"
            style={{ transform: isOpen ? "translateY(8px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-0.5 w-6 bg-[#0F1E35] transition-all duration-300"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-6 bg-[#0F1E35] transition-all duration-300"
            style={{ transform: isOpen ? "translateY(-8px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {isOpen ? (
        <div
          className="w-full lg:hidden"
          style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.08)" }}
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.featured ? (
                <div style={{ padding: "8px 16px" }}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="flex items-center justify-center rounded-full text-white transition hover:opacity-90"
                    style={{
                      backgroundColor: "#2E7D4F",
                      padding: "14px 24px",
                      fontSize: 14,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {link.label}
                  </Link>
                </div>
              ) : link.label === "CONTACT US" ? (
                <div style={{ padding: "8px 16px 16px" }}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="flex items-center justify-center rounded-full transition hover:bg-[#1E4D9B] hover:text-white"
                    style={{
                      border: "2px solid #1E4D9B",
                      color: "#1E4D9B",
                      padding: "12px 24px",
                      fontSize: 14,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {link.label}
                  </Link>
                </div>
              ) : link.children ? (
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobile(openMobile === link.label ? null : link.label)
                    }
                    className="flex w-full items-center justify-between"
                    style={{
                      padding: "16px 24px",
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                      color: isActiveGroup(link.href, link.children) ? "#1E4D9B" : "#0F1E35",
                      fontSize: 14,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      background: "none",
                    }}
                  >
                    <span>{link.label}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      style={{
                        width: 16,
                        height: 16,
                        flexShrink: 0,
                        transition: "transform 0.25s",
                        transform: openMobile === link.label ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 7 5 5 5-5" />
                    </svg>
                  </button>

                  {openMobile === link.label ? (
                    <div style={{ backgroundColor: "#F8FAFC" }}>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={close}
                          className="flex items-center transition hover:text-[#1E4D9B]"
                          style={{
                            padding: "12px 24px 12px 44px",
                            borderLeft: "3px solid #2E7D4F",
                            borderBottom: "1px solid rgba(0,0,0,0.06)",
                            color: isActiveLink(child.href) ? "#1E4D9B" : "#374151",
                            fontSize: 13,
                            fontWeight: 400,
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex w-full items-center transition hover:text-[#1E4D9B]"
                  style={{
                    padding: "16px 24px",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                    color: isActiveGroup(link.href, link.children) ? "#1E4D9B" : "#0F1E35",
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
