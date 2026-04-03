import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    stroke: false,
  },
  {
    label: "X (Twitter)",
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

const serviceTimes = [
  { day: "Sunday", time: "10:30 AM" },
  { day: "Tuesday", time: "6:30 PM" },
  { day: "Thursday", time: "6:30 PM" },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Find Us", href: "/find-us" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#10233F", margin: 0, padding: 0 }}>
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <div className="grid gap-8 text-center lg:grid-cols-3 lg:text-left">
          <div>
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <Image
                src="/logo.png"
                alt="RCCG Livingspring Church Dundee Logo"
                width={70}
                height={70}
                className="h-[55px] w-[55px] sm:h-[70px] sm:w-[70px]"
                style={{
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
              <div>
                <p className="font-extrabold text-white">RCCG Livingspring Church Dundee</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Worship. Community. Transformation.
                </p>
              </div>
            </div>
            <p
              className="mt-4 text-xs leading-6"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              A welcoming church in Dundee helping people grow in faith, find community,
              and experience the love of Jesus.
            </p>
          </div>

          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Quick Links
            </h3>
            <div className="mt-3 flex flex-col gap-0.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center justify-center py-1 text-xs transition hover:text-white lg:justify-start"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Service Times
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              {serviceTimes.map((service) => (
                <p
                  key={service.day}
                  className="py-1 text-sm"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {service.day}: {service.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-4 border-t pt-5 text-xs sm:flex-row sm:justify-between"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <p>© {new Date().getFullYear()} RCCG Livingspring Church Dundee. All rights reserved.</p>
          <div style={{ display: "flex", gap: 8 }}>
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.15]"
                style={{
                  width: 36,
                  height: 36,
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#FFFFFF",
                }}
              >
                <svg
                  width="15"
                  height="15"
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
    </footer>
  );
}
