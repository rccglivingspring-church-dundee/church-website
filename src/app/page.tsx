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
    icon: "Play",
  },
  {
    title: "Give Online",
    description: "Support the ministry securely and help us serve our city.",
    href: "/give",
    icon: "Give",
  },
  {
    title: "Events",
    description: "See upcoming gatherings, church activities, and special services.",
    href: "/events",
    icon: "Date",
  },
  {
    title: "Prayer Request",
    description: "Share your prayer needs and let our team stand with you.",
    href: "/contact",
    icon: "Hope",
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

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section
        className="relative -mt-24 flex min-h-[500px] items-center overflow-hidden pt-24 text-white sm:min-h-[560px] sm:pt-28"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(240,244,248,0.2),_transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,_transparent,_rgba(255,255,255,0.16))]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <span
              className="inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.34em] text-white/85"
              style={{ borderColor: "rgba(255,255,255,0.24)" }}
            >
              Welcome Home
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              RCCG Livingspring
              <span className="block text-[#D8F3E2]">Church Dundee</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              A vibrant church family where worship is heartfelt, the Word is
              taught clearly, and every person is welcomed with love and purpose.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 sm:text-base"
                style={{ backgroundColor: "#1E5C35" }}
              >
                About Us
              </Link>
              <Link
                href="/find-us"
                className="inline-flex items-center justify-center rounded-full border px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-900 sm:text-base"
                style={{ borderColor: "rgba(255,255,255,0.4)" }}
              >
                Find Us
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md self-stretch lg:max-w-lg">
            <div
              className="rounded-[2rem] border p-6 shadow-2xl sm:p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.16)",
              }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/72">
                Join Us
              </p>
              <div className="mt-6 space-y-4">
                {serviceTimes.map((service) => (
                  <div
                    key={service.day}
                    className="rounded-3xl border p-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderColor: "rgba(255,255,255,0.14)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-lg font-bold">{service.day}</p>
                        <p className="text-sm text-white/70">{service.detail}</p>
                      </div>
                      <p className="text-base font-extrabold text-[#D8F3E2] sm:text-lg">
                        {service.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p
              className="text-sm font-bold uppercase tracking-[0.28em]"
              style={{ color: "#1E5C35" }}
            >
              Service Times
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Gather with us throughout the week
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you are visiting for the first time or looking for a church
              family in Dundee, there is a place for you here.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceTimes.map((service) => (
              <article
                key={service.day}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(16,35,63,0.08)]"
              >
                <p
                  className="text-sm font-bold uppercase tracking-[0.26em]"
                  style={{ color: "#1E5C35" }}
                >
                  {service.day}
                </p>
                <p
                  className="mt-6 text-4xl font-extrabold"
                  style={{ color: "#1E4D9B" }}
                >
                  {service.time}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-7xl rounded-[2.5rem] px-6 py-12 sm:px-10 lg:px-14"
          style={{ backgroundColor: "#F0F4F8" }}
        >
          <div className="max-w-2xl">
            <p
              className="text-sm font-bold uppercase tracking-[0.28em]"
              style={{ color: "#1E4D9B" }}
            >
              Quick Links
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Take the next step with us
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[2rem] border border-white/60 bg-white p-7 shadow-[0_18px_45px_rgba(16,35,63,0.08)] transition duration-300 hover:-translate-y-1"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-extrabold uppercase tracking-[0.14em]"
                  style={{
                    backgroundColor: "rgba(30,77,155,0.08)",
                    color: "#1E4D9B",
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-900 transition group-hover:text-[#1E4D9B]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-7xl rounded-[2.5rem] px-6 py-14 text-white shadow-[0_24px_70px_rgba(46,125,79,0.28)] sm:px-10 lg:px-14"
          style={{
            background:
              "linear-gradient(135deg, #1E5C35 0%, #267A45 52%, #1E4D9B 100%)",
          }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/72">
                New Here?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                We would love to help you feel at home from your very first visit
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/82">
                Plan your visit, ask a question, or reach out to our team. We are
                here to welcome you and your family.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/find-us"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 sm:text-base"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-900 sm:text-base"
                style={{ borderColor: "rgba(255,255,255,0.4)" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="px-4 pb-8 pt-6 text-white sm:px-6 lg:px-8"
        style={{ backgroundColor: "#10233F" }}
      >
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 px-6 py-10 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-base font-extrabold"
                style={{ backgroundColor: "#1E5C35" }}
                >
                  LS
                </span>
                <div>
                  <p className="text-lg font-extrabold">
                    RCCG Livingspring Church Dundee
                  </p>
                  <p className="text-sm text-white/65">
                    Worship. Community. Transformation.
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
                A welcoming church in Dundee helping people grow in faith, find
                community, and experience the love of Jesus.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/68">
                Quick Links
              </h3>
              <div className="mt-5 flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/68">
                Service Times
              </h3>
              <div className="mt-5 space-y-3 text-sm text-white/80">
                {serviceTimes.map((service) => (
                  <p key={service.day}>
                    {service.day}: {service.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
            © {new Date().getFullYear()} RCCG Livingspring Church Dundee. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
