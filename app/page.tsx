import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { afterSplash, container, delay, SectionHead } from "@/components/ui";
import HeroCarousel from "@/components/HeroCarousel";
import { MembershipForm } from "@/components/Forms";
import {
  benefits,
  initiatives,
  leaders,
  membershipCategories,
  news,
  objectives,
  stakeholders,
  stats,
} from "@/lib/content";


// Line icons for the hero highlights strip, in the same order as `stats`.
const statIcons = [
  <path key="map" d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14" />,
  <path key="people" d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13 9v-1a4 4 0 0 0-3-3.9M16 4.1a3 3 0 0 1 0 5.8" />,
  <path key="voice" d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1Zm13-3a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14" />,
  <path key="globe" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />,
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* ───────────── Hero ───────────── */}
        <section className="relative text-ink">
          <HeroCarousel>
            <p className="enter flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/85" style={afterSplash(150)}>
              <span className="enter-draw tricolor inline-block h-1 w-8 rounded-full" style={afterSplash(300)} />
              Collaborate • Innovate • Build a Better India
            </p>
            <h1 className="enter mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl" style={afterSplash(300)}>
              The unified voice of India&apos;s <span className="text-saffron">construction</span> industry.
            </h1>
            <div className="enter mt-8 flex flex-wrap gap-4" style={afterSplash(450)}>
              <a href="#join" className="group inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-saffron/90">
                Join the Chamber
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
              <a href="#about" className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10">
                Discover ICCI
              </a>
            </div>
          </HeroCarousel>

          {/* Highlights strip */}
          <div className="border-b border-zinc-200 bg-cream">
            <dl className={`${container} grid grid-cols-2 gap-x-4 gap-y-6 py-6 lg:flex lg:justify-between`}>
              {stats.map((s, i) => (
                <div key={s.label} className="enter flex items-center gap-3" style={afterSplash(700 + i * 100)}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-saffron text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      {statIcons[i % statIcons.length]}
                    </svg>
                  </span>
                  <div className="text-left">
                    <dt className="text-xl font-bold leading-none text-ink">{s.value}</dt>
                    <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-steel">{s.label}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ───────────── About ───────────── */}
        <section id="about" className="py-20 lg:py-28">
          <div className={`${container} grid gap-14 lg:grid-cols-2`}>
            <div>
              <SectionHead
                eyebrow="About the Chamber"
                title="A recognised platform for everyone who builds India."
              />
              <div className="mt-6 space-y-4 leading-relaxed text-steel" data-reveal style={delay("120ms")}>
                <p>
                  ICCI was formed by industry leaders who felt the need for one credible, organised body to represent
                  the construction and allied industries. Today the Chamber brings together <strong className="text-ink">7 state members</strong> and{" "}
                  <strong className="text-ink">30 founding members</strong>, with a vision to establish chapters in every state.
                </p>
                <p>
                  The Chamber works as a bridge between the industry and Government departments — raising members&apos;
                  concerns, contributing to policy, and helping businesses of every size grow with fairness, quality
                  and transparency.
                </p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { t: "Background & Formation", d: "Founded by experienced contractors and industry stakeholders to give the sector a unified voice." },
                { t: "Role in the Industry", d: "Networking, knowledge, skill development and quality standards for the built environment." },
                { t: "Representation", d: "Structured engagement with Central & State departments, PWD, CPWD and public bodies." },
                { t: "Pan-India Expansion", d: "A growing network of state chapters, each led by local industry leadership." },
              ].map((c, i) => (
                <div key={c.t} data-reveal style={delay(`${i * 100}ms`)} className="group rounded-2xl border border-zinc-200 p-6 transition hover:-translate-y-1 hover:border-saffron hover:shadow-lg">
                  <div className="mb-4 h-1 w-10 rounded-full bg-saffron transition-all group-hover:w-16" />
                  <h3 className="font-semibold text-ink">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Objectives ───────────── */}
        <section id="objectives" className="bg-concrete py-20 lg:py-28">
          <div className={container}>
            <div>
              <SectionHead eyebrow="Objectives" title="What the Chamber sets out to achieve" />
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
                {objectives.map((o, i) => (
                  <div key={o.title} data-reveal style={delay(`${i * 80}ms`)} className="bg-white p-8">
                    <span className="text-sm font-bold text-saffron">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 text-lg font-semibold text-ink">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{o.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Industry representation ───────────── */}
        <section className="py-20 lg:py-28">
          <div className={`${container} grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]`}>
            <SectionHead
              eyebrow="Industry Representation"
              title="One chamber. Every stakeholder in construction."
              intro="ICCI represents the full value chain of the construction and allied industries — and engages with Government departments, public bodies and policy makers on their behalf."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {stakeholders.map((s, i) => (
                <li key={s} data-reveal style={delay(`${i * 60}ms`)} className="flex items-center gap-4 rounded-xl border border-zinc-200 px-5 py-4 font-medium text-ink">
                  <span className={`h-8 w-1.5 rounded-full ${["bg-saffron", "bg-zinc-500", "bg-india-green"][i % 3]}`} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────── Key initiatives ───────────── */}
        <section id="initiatives" className="bg-cream py-20 text-ink lg:py-28">
          <div className={container}>
            <SectionHead
              eyebrow="Key Initiatives"
              title="Four pillars that make ICCI work for its members"
              intro="A practical framework designed to position ICCI as the central platform for contractors, subcontractors, workers and departmental stakeholders."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {initiatives.map((p, i) => (
                <div key={p.title} data-reveal style={delay(`${i * 100}ms`)} className="group rounded-2xl border border-zinc-200 bg-white p-8 transition hover:border-saffron hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <span className="text-4xl font-bold text-zinc-200 transition group-hover:text-saffron">{p.tag}</span>
                  </div>
                  <p className="mt-4 leading-relaxed text-steel">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Leadership ───────────── */}
        <section id="leadership" className="py-20 lg:py-28">
          <div className={container}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead
                eyebrow="Leadership & Founding Members"
                title="The people building the Chamber"
                intro="Experienced industry leaders from across the states who came together to found ICCI."
              />
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leaders.map((l, i) => (
                <article key={i} data-reveal style={delay(`${(i % 4) * 100}ms`)} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-xl">
                  <div className="relative flex aspect-[4/3] items-end justify-center overflow-hidden bg-gradient-to-b from-concrete to-zinc-200">
                    <svg viewBox="0 0 100 100" className="h-4/5 text-zinc-300 transition group-hover:scale-105" fill="currentColor">
                      <circle cx="50" cy="36" r="18" />
                      <path d="M14 100c0-22 16-36 36-36s36 14 36 36z" />
                    </svg>
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink shadow-sm">
                      {l.state}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-saffron">{l.role}</p>
                    <h3 className="mt-1 text-lg font-semibold text-ink">{l.name}</h3>
                    <p className="text-sm text-steel">{l.org}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Membership ───────────── */}
        <section id="membership" className="bg-concrete py-20 lg:py-28">
          <div className={container}>
            <SectionHead
              eyebrow="Membership"
              title="Join the chamber that represents your business"
              intro="ICCI membership is open to businesses, professionals and organisations across the construction and allied industries."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {membershipCategories.map((c, i) => (
                <div
                  key={c.title}
                  data-reveal
                  style={delay(`${i * 80}ms`)}
                  className={`rounded-2xl p-6 transition hover:-translate-y-1 bg-white text-ink hover:shadow-lg ${i === 0 ? "ring-2 ring-saffron" : ""}`}
                >
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-steel`}>{c.text}</p>
                </div>
              ))}
              <a href="#join" data-reveal style={delay(`${membershipCategories.length * 80}ms`)} className="flex flex-col justify-between rounded-2xl bg-saffron p-6 text-white transition hover:bg-india-green">
                <h3 className="font-semibold">Not sure where you fit?</h3>
                <span className="mt-4 text-sm font-semibold">Send an enquiry →</span>
              </a>
            </div>

            <div className="mt-14" data-reveal>
              <h3 className="text-2xl font-bold text-ink">Benefits of membership</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-steel">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-india-green" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M5 12l5 5L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────── News ───────────── */}
        <section id="news" className="py-14 lg:py-16">
          <div className={container}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHead eyebrow="News & Articles" title="Latest from the Chamber" />
              <a href="#news" className="text-sm font-semibold text-saffron hover:text-india-green">View all →</a>
            </div>
            <div className="mt-8 grid gap-3 lg:grid-cols-2">
              {/* Featured story */}
              <article data-reveal className="group relative min-h-[310px] overflow-hidden rounded-2xl bg-zinc-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={news[0].photo} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-7">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-saffron px-2.5 py-1 font-semibold uppercase tracking-wide">{news[0].category}</span>
                    <span className="text-white/75">{news[0].date}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">{news[0].title}</h3>
                  <p className="mt-1.5 line-clamp-1 max-w-lg text-sm text-white/80">{news[0].excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-semibold group-hover:text-saffron">Read more →</span>
                </div>
              </article>

              {/* Three compact stories */}
              <div className="grid gap-3 lg:grid-rows-3">
                {news.slice(1, 4).map((n, i) => (
                  <article key={n.title} data-reveal style={delay(`${(i + 1) * 100}ms`)} className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-3 transition hover:border-saffron hover:shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={n.photo} alt="" loading="lazy" className="h-24 w-28 shrink-0 rounded-xl object-cover sm:w-32" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="font-semibold uppercase tracking-wide text-saffron">{n.category}</span>
                        <span className="text-steel">· {n.date}</span>
                      </div>
                      <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug text-ink group-hover:text-saffron">{n.title}</h3>
                      <p className="mt-1 line-clamp-1 text-sm text-steel">{n.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Membership enquiry ───────────── */}
        <section className="py-14 lg:py-20">
          <div className={container}>
            <div id="join" className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
              <div>
                <SectionHead
                  eyebrow="Become a Member"
                  title="Apply for ICCI membership"
                  intro="Fill in your details and our team will reach out with next steps."
                />
                <div className="mt-8 rounded-2xl border border-zinc-200 bg-concrete p-6" data-reveal style={delay("120ms")}>
                  <h4 className="font-semibold text-ink">Eligibility</h4>
                  <p className="mt-2 text-sm leading-relaxed text-steel">
                    Any registered business, firm, professional or organisation engaged in construction or allied
                    activities in India is eligible to apply. Applications are reviewed by the Chamber&apos;s membership
                    committee.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm lg:p-10" data-reveal style={delay("200ms")}>
                <h3 className="mb-8 text-2xl font-bold text-ink">Membership Enquiry</h3>
                <MembershipForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
