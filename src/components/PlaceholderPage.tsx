import Link from "next/link";
import PageHero from "@/components/PageHero";

type PlaceholderPageProps = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
};

export default function PlaceholderPage({
  title,
  subtitle,
  description,
  highlights,
}: PlaceholderPageProps) {
  return (
    <div className="pb-4">
      <PageHero title={title} subtitle={subtitle} />

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_60px_rgba(16,35,63,0.08)]">
            <span
              className="inline-flex rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em]"
              style={{ backgroundColor: "#E8F0FB", color: "#1E4D9B" }}
            >
              Coming Soon
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              This page is being prepared
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: "#1E4D9B" }}
              >
                Back to Home
              </Link>
            </div>
          </div>

          <aside
            className="rounded-[2rem] p-5 text-white"
            style={{
              background: "linear-gradient(135deg, #1E5C35 0%, #1E4D9B 100%)",
              boxShadow: "0 24px 60px rgba(30,77,155,0.22)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
              What To Expect
            </p>
            <h3 className="mt-2 text-2xl font-extrabold">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-white/85">{subtitle}</p>
            <div className="mt-3 space-y-2">
              {highlights.map((item) => (
                <div
                  key={`${item}-aside`}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
