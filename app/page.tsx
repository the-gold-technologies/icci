import type { ReactNode } from "react";
import Header from "@/components/Header";
import { LogoLockup, LogoMark } from "@/components/Logo";
import { ContactForm, MembershipForm, SuggestionForm } from "@/components/Forms";
import {
  benefits,
  contact,
  gallery,
  initiatives,
  leaders,
  membershipCategories,
  nav,
  news,
  objectives,
  stakeholders,
  stats,
} from "@/lib/content";

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-white/70" : "text-saffron"}`}>
      <span className="tricolor inline-block h-1 w-8 rounded-full" />
      {children}
    </p>
  );
}

function SectionHead({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-steel"}`}>{intro}</p>}
    </div>
  );
}

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="pt-[68px] lg:pt-[84px]">
        {/* ───────────── Hero ───────────── */}
        <section className="blueprint relative overflow-hidden bg-charcoal text-white">
          <LogoMark className="pointer-events-none absolute -right-24 -bottom-16 w-[560px] opacity-[0.04]" ink="#fff" bg="#0f1115" />
          <div className={`${container} relative grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28`}>
            <div>
              <Eyebrow light>Collaborate • Innovate • Build a Better India</Eyebrow>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                The unified voice of India&apos;s <span className="text-saffron">construction</span> industry.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                The Indian Chamber of Construction Industry brings together contractors, builders, consultants,
                suppliers and allied professionals — representing the sector before Government and building a
                stronger industry, state by state.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#join" className="rounded-full bg-saffron px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink">
                  Become a Member
                </a>
                <a href="#about" className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10">
                  Discover ICCI
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-saffron/20 blur-3xl" />
              <div className="relative rounded-3xl bg-white p-10 text-[15px] shadow-2xl sm:text-lg">
                <LogoLockup />
              </div>
            </div>
          </div>
          <div className="relative border-t border-white/10 bg-black/30">
            <dl className={`${container} grid grid-cols-2 lg:grid-cols-4`}>
              {stats.map((s, i) => (
                <div key={s.label} className={`py-8 ${i % 2 ? "pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}`}>
                  <dt className="text-3xl font-bold text-white sm:text-4xl">{s.value}</dt>
                  <dd className="mt-1 text-sm uppercase tracking-wide text-white/60">{s.label}</dd>
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
              <div className="mt-6 space-y-4 leading-relaxed text-steel">
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
              ].map((c) => (
                <div key={c.t} className="group rounded-2xl border border-zinc-200 p-6 transition hover:-translate-y-1 hover:border-saffron hover:shadow-lg">
                  <div className="mb-4 h-1 w-10 rounded-full bg-saffron transition-all group-hover:w-16" />
                  <h3 className="font-semibold text-ink">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Vision & Mission ───────────── */}
        <section id="vision" className="bg-concrete py-20 lg:py-28">
          <div className={container}>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white lg:p-12">
                <div className="hatch absolute inset-0" />
                <div className="relative">
                  <Eyebrow light>Our Vision</Eyebrow>
                  <p className="mt-6 text-2xl font-semibold leading-snug sm:text-3xl">
                    To build a strong, Pan-India chamber that empowers the construction industry to drive the nation&apos;s
                    growth with integrity, innovation and excellence.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-10 lg:p-12">
                <Eyebrow>Our Mission</Eyebrow>
                <ul className="mt-6 space-y-4">
                  {[
                    "Represent the collective interests of the industry before Government and regulators.",
                    "Create a collaborative network across every state of India.",
                    "Promote quality, safety, skill development and sustainable construction.",
                    "Provide members timely knowledge, support and grievance redressal.",
                  ].map((m) => (
                    <li key={m} className="flex gap-3 text-steel">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-india-green" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <SectionHead eyebrow="Objectives" title="What the Chamber sets out to achieve" />
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
                {objectives.map((o, i) => (
                  <div key={o.title} className="bg-white p-8">
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
                <li key={s} className="flex items-center gap-4 rounded-xl border border-zinc-200 px-5 py-4 font-medium text-ink">
                  <span className={`h-8 w-1.5 rounded-full ${["bg-saffron", "bg-zinc-500", "bg-india-green"][i % 3]}`} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────── Key initiatives ───────────── */}
        <section id="initiatives" className="blueprint bg-charcoal py-20 text-white lg:py-28">
          <div className={container}>
            <SectionHead
              light
              eyebrow="Key Initiatives"
              title="Four pillars that make ICCI work for its members"
              intro="A practical framework designed to position ICCI as the central platform for contractors, subcontractors, workers and departmental stakeholders."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {initiatives.map((p) => (
                <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-saffron hover:bg-white/[0.06]">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <span className="text-4xl font-bold text-white/10 transition group-hover:text-saffron">{p.tag}</span>
                  </div>
                  <p className="mt-4 leading-relaxed text-white/65">{p.text}</p>
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
                <article key={i} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-xl">
                  <div className="relative flex aspect-[4/4.2] items-end justify-center overflow-hidden bg-gradient-to-b from-concrete to-zinc-200">
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
                  className={`rounded-2xl p-6 transition hover:-translate-y-1 ${i === 0 ? "bg-ink text-white" : "bg-white text-ink hover:shadow-lg"}`}
                >
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-steel"}`}>{c.text}</p>
                </div>
              ))}
              <a href="#join" className="flex flex-col justify-between rounded-2xl bg-saffron p-6 text-white transition hover:bg-ink">
                <h3 className="font-semibold">Not sure where you fit?</h3>
                <span className="mt-4 text-sm font-semibold">Send an enquiry →</span>
              </a>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
              <div>
                <h3 className="text-2xl font-bold text-ink">Benefits of membership</h3>
                <ul className="mt-6 space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-steel">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-india-green" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12l5 5L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl border border-zinc-300 bg-white p-6">
                  <h4 className="font-semibold text-ink">Eligibility</h4>
                  <p className="mt-2 text-sm leading-relaxed text-steel">
                    Any registered business, firm, professional or organisation engaged in construction or allied
                    activities in India is eligible to apply. Applications are reviewed by the Chamber&apos;s membership
                    committee.
                  </p>
                </div>
              </div>
              <div id="join" className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
                <h3 className="text-2xl font-bold text-ink">Membership Enquiry</h3>
                <p className="mb-8 mt-2 text-sm text-steel">Fill in your details and our team will reach out with next steps.</p>
                <MembershipForm />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── News ───────────── */}
        <section id="news" className="py-20 lg:py-28">
          <div className={container}>
            <SectionHead eyebrow="News & Articles" title="Updates from the Chamber and the industry" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {news.map((n, i) => (
                <article key={n.title} className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 transition hover:shadow-xl">
                  <div className={`hatch relative aspect-[16/9] ${["bg-ink", "bg-saffron", "bg-india-green"][i % 3]}`}>
                    <LogoMark className="absolute bottom-4 right-4 w-16 opacity-30" ink="#fff" bg="transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-concrete px-3 py-1 font-semibold text-ink">{n.category}</span>
                      <span className="text-steel">{n.date}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug text-ink group-hover:text-saffron">{n.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{n.excerpt}</p>
                    <span className="mt-5 text-sm font-semibold text-ink">Read more →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Gallery ───────────── */}
        <section id="gallery" className="bg-concrete py-20 lg:py-28">
          <div className={container}>
            <SectionHead eyebrow="Gallery" title="Moments from our journey" intro="Events, meetings, conferences and Government interactions." />
            <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-4">
              {gallery.map((g) => (
                <figure key={g.label} className={`group relative overflow-hidden rounded-2xl bg-charcoal ${g.span}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.photo} alt={g.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm font-semibold text-white">
                    {g.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Suggestion CTA ───────────── */}
        <section className="py-20 lg:py-28">
          <div className={`${container} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead
                eyebrow="Have a Suggestion?"
                title="Your voice shapes the Chamber's agenda"
                intro="Share a concern, an idea or feedback — on policy, payments, tenders, safety or anything that affects the industry. Every suggestion is reviewed by the Chamber."
              />
              <div className="tricolor mt-10 h-1.5 w-32 rounded-full" />
            </div>
            <div className="rounded-3xl border border-zinc-200 p-8 lg:p-10">
              <SuggestionForm />
            </div>
          </div>
        </section>

        {/* ───────────── Contact ───────────── */}
        <section id="contact" className="bg-charcoal py-20 text-white lg:py-28">
          <div className={container}>
            <SectionHead light eyebrow="Contact Us" title="Get in touch with ICCI" />
            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-6">
                {[
                  { k: "Office Address", v: contact.address },
                  { k: "Phone", v: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
                  { k: "Email", v: contact.email, href: `mailto:${contact.email}` },
                ].map((c) => (
                  <div key={c.k} className="border-l-2 border-saffron pl-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/50">{c.k}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block text-lg hover:text-saffron">{c.v}</a>
                    ) : (
                      <p className="mt-1 text-lg">{c.v}</p>
                    )}
                  </div>
                ))}
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <iframe
                    title="ICCI office location"
                    src="https://maps.google.com/maps?q=New%20Delhi&z=12&output=embed"
                    className="h-64 w-full grayscale"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="rounded-3xl bg-white p-8 lg:p-10">
                <h3 className="mb-6 text-xl font-bold text-ink">Send us an enquiry</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── Footer ───────────── */}
      <footer className="bg-black text-white">
        <div className="tricolor h-1" />
        <div className={`${container} grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]`}>
          <div className="flex items-start gap-4">
            <LogoMark className="w-20 shrink-0" ink="#fff" bg="#000" />
            <div>
              <p className="text-lg font-semibold uppercase leading-tight">
                Indian Chamber of
                <br />
                Construction Industry
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-white/50">Collaborate • Innovate • Build a Better India</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Quick Links</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/80 hover:text-saffron">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Reach Us</p>
            <p className="mt-4 text-sm text-white/80">{contact.address}</p>
            <p className="mt-2 text-sm text-white/80">{contact.phone}</p>
            <p className="mt-2 text-sm text-white/80">{contact.email}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className={`${container} py-6 text-xs text-white/40`}>
            © {new Date().getFullYear()} Indian Chamber of Construction Industry. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
