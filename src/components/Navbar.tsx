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
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: "#0F1E35" }}>

      {/* ── TOP BAR (logo + hamburger on mobile, full nav on desktop) ── */}
      <div
        className="flex w-full items-center justify-between"
        style={{ height: 70, padding: "0 24px" }}
      >
        {/* Logo + church name */}
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={close}>
          <Image
            src="/logo.png"
            alt="RCCG Livingspring Church Dundee Logo"
            width={55}
            height={55}
            style={{ objectFit: "contain", flexShrink: 0 }}
          />
          <span>
            <span
              className="block"
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textShadow: "1px 1px 0px #000, 2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              RCCG Livingspring
            </span>
            <span
              className="block"
              style={{ color: "#9CA3AF", fontSize: 10, fontWeight: 400, fontStyle: "italic" }}
            >
              Church Dundee
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center lg:flex"
          style={{ gap: 24 }}
        >
          {navLinks.map((link) => (
            <div key={link.label} className="group relative flex items-center">
              {link.featured ? (
                <Link
                  href={link.href}
                  className="inline-flex items-center rounded-full text-white transition hover:opacity-90"
                  style={{
                    backgroundColor: "#2E7D4F",
                    padding: "8px 20px",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 transition hover:opacity-75"
                    style={{
                      color: isActiveGroup(link.href, link.children) ? "#2E7D4F" : "white",
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
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
                    <div className="pointer-events-none absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div
                        className="overflow-hidden rounded-2xl border py-2 shadow-[0_22px_44px_rgba(0,0,0,0.35)]"
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
                </>
              )}
            </div>
          ))}
        </nav>

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
            className="block h-0.5 w-6 bg-white transition-all duration-300"
            style={{ transform: isOpen ? "translateY(8px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-0.5 w-6 bg-white transition-all duration-300"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-6 bg-white transition-all duration-300"
            style={{ transform: isOpen ? "translateY(-8px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* ── MOBILE FULL MENU ── */}
      {isOpen ? (
        <div
          className="w-full lg:hidden"
          style={{ backgroundColor: "#0F1E35", borderTop: "1px solid rgba(255,255,255,0.08)" }}
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
                      borderBottom: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </div>
              ) : link.label === "CONTACT US" ? (
                <div style={{ padding: "8px 16px" }}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="flex items-center justify-center rounded-full text-white transition hover:opacity-90"
                    style={{
                      backgroundColor: "#1E4D9B",
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
              ) : link.children ? (
                <div>
                  {/* Accordion header */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobile(openMobile === link.label ? null : link.label)
                    }
                    className="flex w-full items-center justify-between"
                    style={{
                      padding: "16px 24px",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      color: isActiveGroup(link.href, link.children) ? "#4ADE80" : "white",
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

                  {/* Submenu */}
                  {openMobile === link.label ? (
                    <div style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={close}
                          className="flex items-center transition hover:text-white"
                          style={{
                            padding: "12px 24px 12px 44px",
                            borderLeft: "3px solid #2E7D4F",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            color: isActiveLink(child.href) ? "#4ADE80" : "#CBD5E1",
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
                /* Plain link (HOME) */
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex w-full items-center transition hover:text-green-400"
                  style={{
                    padding: "16px 24px",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    color: isActiveGroup(link.href, link.children) ? "#4ADE80" : "white",
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
