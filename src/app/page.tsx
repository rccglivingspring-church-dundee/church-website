import Link from "next/link";

const serviceTimes = [
  {
    day: "Sunday",
    time: "10:30 AM",
    detail: "Sunday Celebration Service",
  },
  {
    day: "Tuesday",
    time: "6:30 PM",
    detail: "Midweek Bible Study",
  },
  {
    day: "Thursday",
    time: "6:30 PM",
    detail: "Digging Deep",
  },
];

const quickLinks = [
  {
    title: "Watch Sermons",
    description: "Catch up on recent messages and practical Bible teaching.",
    href: "/sermons",
    icon: "PLAY",
  },
  {
    title: "Give Online",
    description: "Support the ministry securely and help us serve our city.",
    href: "/give",
    icon: "GIVE",
  },
  {
    title: "Events",
    description: "See upcoming gatherings, church activities, and special services.",
    href: "/events",
    icon: "DATE",
  },
  {
    title: "Prayer Request",
    description: "Share your prayer needs and let our team stand with you.",
    href: "/contact",
    icon: "HOPE",
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Find Us", href: "/find-us" },
  { label: "Contact", href: "/contact" },
];

const serviceCardTheme: Record<
  string,
  { gradient: string; accent: string; glow: string }
> = {
  Sunday: {
    gradient: "linear-gradient(135deg, #1E4D9B 0%, #0D2347 100%)",
    accent: "#F5C518",
    glow: "0 18px 40px rgba(30,77,155,0.38)",
  },
  Tuesday: {
    gradient: "linear-gradient(135deg, #1E5C35 0%, #0D3320 100%)",
    accent: "#D8F3E2",
    glow: "0 18px 40px rgba(30,92,53,0.36)",
  },
  Thursday: {
    gradient: "linear-gradient(135deg, #1E4D9B 0%, #1E5C35 100%)",
    accent: "#93C5FD",
    glow: "0 18px 40px rgba(23,86,101,0.36)",
  },
};

const quickLinkCardTheme: Record<string, { gradient: string; glow: string; glowHover: string }> = {
  "Watch Sermons": {
    gradient: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
    glow: "0 20px 40px rgba(124,58,237,0.4)",
    glowHover: "0 32px 56px rgba(124,58,237,0.6)",
  },
  "Give Online": {
    gradient: "linear-gradient(135deg, #EA580C 0%, #DC2626 100%)",
    glow: "0 20px 40px rgba(234,88,12,0.4)",
    glowHover: "0 32px 56px rgba(234,88,12,0.6)",
  },
  Events: {
    gradient: "linear-gradient(135deg, #0891B2 0%, #0E7490 100%)",
    glow: "0 20px 40px rgba(8,145,178,0.4)",
    glowHover: "0 32px 56px rgba(8,145,178,0.6)",
  },
  "Prayer Request": {
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    glow: "0 20px 40px rgba(5,150,105,0.4)",
    glowHover: "0 32px 56px rgba(5,150,105,0.6)",
  },
};

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "#ffffff" }}>

      {/* ── HERO ── */}
      <section
        style={{ position: "relative", overflow: "hidden" }}
        className="flex min-h-[400px] items-center text-white sm:min-h-[560px]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.58)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{ position: "relative", zIndex: 2, width: "100%" }}
          className="mx-auto max-w-7xl px-4 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* Left: Church name + buttons */}
            <div className="max-w-2xl">
              <span
                className="inline-flex rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)" }}
              >
                Welcome Home
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
                RCCG Livingspring
                <span className="block" style={{ color: "#D8F3E2" }}>
                  Church Dundee
                </span>
              </h1>
              <p
                className="mt-5 text-lg leading-8 sm:text-xl"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                A vibrant church family where worship is heartfelt, the Word is
                taught clearly, and every person is welcomed with love and purpose.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90 sm:text-base"
                  style={{ backgroundColor: "#1E5C35" }}
                >
                  About Us
                </Link>
                <Link
                  href="/find-us"
                  className="inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white sm:text-base"
                  style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
                >
                  Find Us
                </Link>
              </div>
            </div>

            {/* Right: Service times card */}
            <div className="w-full lg:max-w-sm">
              <div
                className="rounded-3xl p-6"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(234,88,12,0.15) 50%, rgba(8,145,178,0.25) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                  borderRadius: "2rem",
                }}
              >
                {/* Diagonal stripe pattern top-right */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 140,
                    height: 140,
                    borderRadius: "inherit",
                    background:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.07), rgba(255,255,255,0.07) 2px, transparent 2px, transparent 12px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />
                {/* Glowing circle — top right */}
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(8,145,178,0.3)",
                    filter: "blur(25px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />
                {/* Chevron accent top-right */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 56,
                    height: 56,
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                >
                  {([
                    { top: 0, opacity: "rgba(234,179,8,0.6)" },
                    { top: 12, opacity: "rgba(234,179,8,0.4)" },
                    { top: 24, opacity: "rgba(234,179,8,0.2)" },
                  ] as { top: number; opacity: string }[]).map((chevron, i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        top: chevron.top,
                        right: 0,
                        width: 20,
                        height: 20,
                        borderTop: `3px solid ${chevron.opacity}`,
                        borderRight: `3px solid ${chevron.opacity}`,
                        transform: "rotate(45deg)",
                      }}
                    />
                  ))}
                </div>
                {/* Glowing circle — bottom left */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -20,
                    left: -20,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "rgba(124,58,237,0.3)",
                    filter: "blur(30px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />
                {/* Card content */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#F5C518" }}
                  >
                    Join Us
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    {serviceTimes.map((s) => {
                      const rowStyle: Record<string, { border: string; timeColor: string }> = {
                        Sunday:   { border: "3px solid #F5C518", timeColor: "#F5C518" },
                        Tuesday:  { border: "3px solid #34D399", timeColor: "#34D399" },
                        Thursday: { border: "3px solid #60A5FA", timeColor: "#60A5FA" },
                      };
                      const row = rowStyle[s.day] ?? { border: "3px solid rgba(255,255,255,0.3)", timeColor: "#D8F3E2" };
                      return (
                        <div
                          key={s.day}
                          className="rounded-2xl p-4"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.08)",
                            borderLeft: row.border,
                          }}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="font-bold" style={{ color: "white" }}>{s.day}</p>
                              <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                                {s.detail}
                              </p>
                            </div>
                            <p className="font-extrabold text-sm" style={{ color: row.timeColor }}>
                              {s.time}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICE TIMES ── */}
      <section className="px-4 pt-7 pb-4 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#1E5C35" }}
          >
            Service Times
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Gather with us throughout the week
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Whether you are visiting for the first time or looking for a church
            family in Dundee, there is a place for you here.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            {serviceTimes.map((s) => (
              <article
                key={s.day}
                className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] text-white"
                style={{
                  minHeight: "126px",
                  padding: "1.25rem",
                  background: serviceCardTheme[s.day].gradient,
                  boxShadow: serviceCardTheme[s.day].glow,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 8px, transparent 8px, transparent 18px)",
                    opacity: 0.35,
                  }}
                />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.14)" }}
                />
                <div className="relative">
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: serviceCardTheme[s.day].accent }}
                  >
                    {s.day}
                  </p>
                </div>
                <p className="relative text-2xl font-extrabold leading-none text-white sm:text-3xl">
                  {s.time}
                </p>
                <p className="relative text-xs text-white/80 sm:text-sm">{s.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="px-4 pt-4 pb-6 sm:px-10 lg:px-16">
        <div
          className="mx-auto max-w-7xl rounded-3xl px-4 py-8 sm:px-10 sm:py-10 lg:px-12"
          style={{ backgroundColor: "#F0F4F8" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#1E4D9B" }}
          >
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">
            Take the next step with us
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="relative overflow-hidden rounded-3xl p-7 text-white transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
                style={{
                  minHeight: 220,
                  background: quickLinkCardTheme[item.title].gradient,
                  boxShadow: quickLinkCardTheme[item.title].glow,
                  borderTop: "1px solid rgba(255,255,255,0.35)",
                  borderLeft: "1px solid rgba(255,255,255,0.25)",
                  borderRight: "1px solid rgba(0,0,0,0.15)",
                  borderBottom: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                {/* Diagonal stripe pattern */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 2px, transparent 2px, transparent 14px)",
                  zIndex: 0,
                  pointerEvents: "none"
                }} />
                {/* Top right gold glow */}
                <div style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-10px",
                  width: "120px",
                  height: "120px",
                  background: "rgba(245,197,24,0.25)",
                  borderRadius: "50%",
                  filter: "blur(35px)",
                  zIndex: 0,
                  pointerEvents: "none"
                }} />
                {/* Left green glow */}
                <div style={{
                  position: "absolute",
                  top: "30%",
                  left: "-30px",
                  width: "100px",
                  height: "100px",
                  background: "rgba(52,211,153,0.2)",
                  borderRadius: "50%",
                  filter: "blur(30px)",
                  zIndex: 0,
                  pointerEvents: "none"
                }} />
                {/* Bottom blue glow */}
                <div style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "20%",
                  width: "110px",
                  height: "110px",
                  background: "rgba(96,165,250,0.2)",
                  borderRadius: "50%",
                  filter: "blur(30px)",
                  zIndex: 0,
                  pointerEvents: "none"
                }} />
                {/* Chevron arrows — top right */}
                <div style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  display: "flex",
                  gap: "4px",
                  zIndex: 1
                }}>
                  <div style={{ width: "10px", height: "16px", borderRight: "3px solid rgba(245,197,24,0.7)", borderTop: "3px solid rgba(245,197,24,0.7)", transform: "rotate(45deg)" }} />
                  <div style={{ width: "10px", height: "16px", borderRight: "3px solid rgba(245,197,24,0.45)", borderTop: "3px solid rgba(245,197,24,0.45)", transform: "rotate(45deg)" }} />
                  <div style={{ width: "10px", height: "16px", borderRight: "3px solid rgba(245,197,24,0.2)", borderTop: "3px solid rgba(245,197,24,0.2)", transform: "rotate(45deg)" }} />
                </div>
                {/* Content */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.2)",
                      color: "white",
                      borderRadius: 9999,
                      padding: "4px 12px",
                      fontSize: 11,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.icon}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "white",
                      marginTop: "1.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.6,
                      marginTop: "0.5rem",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW HERE CTA ── */}
      <section className="px-4 pt-4 pb-6 sm:px-10 lg:px-16">
        <div
          className="mx-auto max-w-7xl rounded-3xl px-4 py-10 text-white sm:px-10 sm:py-12 lg:px-14"
          style={{
            background: "linear-gradient(135deg, #1E5C35 0%, #267A45 50%, #1E4D9B 100%)",
          }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                New Here?
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl lg:text-4xl">
                We would love to help you feel at home from your very first visit
              </h2>
              <p
                className="mt-3 text-base leading-7"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                Plan your visit, ask a question, or reach out to our team. We are
                here to welcome you and your family.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/find-us"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 transition hover:opacity-90 sm:w-auto"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-slate-900 sm:w-auto"
                style={{ borderColor: "rgba(255,255,255,0.4)" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#10233F", margin: 0, padding: 0 }}>
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
          <div className="grid gap-8 text-center lg:grid-cols-3 lg:text-left">

            {/* Col 1 */}
            <div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: "#1E5C35" }}
                >
                  LS
                </span>
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
                A welcoming church in Dundee helping people grow in faith, find
                community, and experience the love of Jesus.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h3
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Quick Links
              </h3>
              <div className="mt-4 flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center justify-center text-sm transition hover:text-white lg:justify-start"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 3 */}
            <div>
              <h3
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Service Times
              </h3>
              <div className="mt-4 flex flex-col gap-2">
                {serviceTimes.map((s) => (
                  <p key={s.day} className="py-1 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {s.day}: {s.time}
                  </p>
                ))}
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div
            className="mt-8 border-t pt-5 text-xs"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            © {new Date().getFullYear()} RCCG Livingspring Church Dundee. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}