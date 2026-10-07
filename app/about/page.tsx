import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { afterSplash, container, delay, Eyebrow, SectionHead } from "@/components/ui";
import { about, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "About – ICCI",
  description:
    "The Indian Chamber of Construction Industry is a not-for-profit organisation representing, promoting and protecting the interests of India’s construction and allied industries.",
};

// Native <details> toggle: no client JS needed for "Read more".
function ReadMore({ paragraphs, light = false }: { paragraphs: string[]; light?: boolean }) {
  return (
    <details className="group mt-5">
      <summary
        className={`inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold transition [&::-webkit-details-marker]:hidden ${
          light ? "text-white hover:text-white/80" : "text-saffron hover:text-india-green"
        }`}
      >
        <span className="group-open:hidden">Read more</span>
        <span className="hidden group-open:inline">Read less</span>
        <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className={`mt-4 space-y-4 leading-relaxed ${light ? "text-white/85" : "text-steel"}`}>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>
    </details>
  );
}

const focusIcons = [
  "M3 21h18M5 21V10m4 11V10m6 11V10m4 11V10M2 10l10-6 10 6", // representation (institution)
  "M3 21h18M6 21V9l6-4 6 4v12M10 21v-5h4v5", // enterprises
  "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM20 17v4H6.5", // research
  "M8 12l3 3 5-6M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", // partnerships
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* ───────────── Banner ───────────── */}
        <section className="relative overflow-hidden text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.about} alt="" className="enter-settle absolute inset-0 h-full w-full object-cover" style={delay("calc(var(--after-splash) * 0.8)")} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f08]/85 via-[#1a0f08]/55 to-[#1a0f08]/25" />
          <div className={`${container} relative pb-16 pt-40 lg:pb-20 lg:pt-48`}>
            <p className="enter flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85" style={afterSplash(150)}>
              <span className="enter-draw tricolor inline-block h-1 w-8 rounded-full" style={afterSplash(300)} />
              About ICCI
            </p>
            <h1 className="enter mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl" style={afterSplash(300)}>
              Building a stronger <span className="text-saffron">construction</span> industry, together.
            </h1>
          </div>
        </section>

        {/* ───────────── About Us ───────────── */}
        <section id="about-us" className="py-20 lg:py-28">
          <div className={container}>
            <Eyebrow>About Us</Eyebrow>
            <div className="mt-6 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative overflow-hidden rounded-3xl lg:sticky lg:top-28" data-reveal="scale">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photos.aboutSite} alt="Construction site" className="aspect-[4/3] w-full object-cover" />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-steel">Not-for-profit</p>
                  <p className="text-lg font-bold text-ink">Nationwide mandate</p>
                </div>
              </div>
              <div data-reveal style={delay("120ms")}>
                <p className="text-lg leading-relaxed text-ink">{about.intro.lead}</p>
                <ReadMore paragraphs={about.intro.more} />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Focus areas ───────────── */}
        <section className="bg-concrete py-16 lg:py-20">
          <div className={container}>
            <SectionHead eyebrow="What We Work Towards" title="Where ICCI focuses its efforts" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {about.focus.map((f, i) => (
                <div key={f.title} data-reveal style={delay(`${i * 100}ms`)} className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-saffron hover:shadow-lg">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-saffron/10 text-saffron">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d={focusIcons[i % focusIcons.length]} />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Mission & Vision ───────────── */}
        <section id="vision" className="py-20 lg:py-28">
          <div className={`${container} grid gap-6 lg:grid-cols-2`}>
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 lg:p-10" data-reveal>
              <Eyebrow>Our Mission</Eyebrow>
              <p className="mt-6 text-xl font-semibold leading-snug text-ink sm:text-2xl">{about.mission.lead}</p>
              <ReadMore paragraphs={about.mission.more} />
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-saffron p-8 text-white lg:p-10" data-reveal style={delay("150ms")}>
              <div className="hatch absolute inset-0" />
              <div className="relative">
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                  <span className="inline-block h-1 w-8 rounded-full bg-white" />
                  Our Vision
                </p>
                <p className="mt-6 text-xl font-semibold leading-snug sm:text-2xl">{about.vision.lead}</p>
                <ReadMore paragraphs={about.vision.more} light />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
