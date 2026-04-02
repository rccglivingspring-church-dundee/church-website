"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERMONS", href: "/sermons" },
  { label: "EVENTS", href: "/events" },
  { label: "COMMUNITY OUTREACH", href: "/community-outreach" },
  { label: "GIVING", href: "/giving" },
  { label: "RESOURCES", href: "/resources" },
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
          className="mx-auto grid max-w-7xl grid-cols-8 items-center px-4 sm:px-6 lg:px-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex justify-center px-2 py-4 text-center text-[11px] font-bold tracking-[0.16em] text-[#1A2A44] transition xl:text-xs"
            >
              <span className="relative inline-flex pb-1">
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                  style={{ backgroundColor: "#1E5C35" }}
                />
              </span>
            </Link>
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
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold tracking-[0.08em] text-[#1A2A44] transition hover:bg-slate-50"
                >
                  {link.label}
                </Link>
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
