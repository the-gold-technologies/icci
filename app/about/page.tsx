import JsonLd from "@/components/JsonLd";
import { ChaptersGrid, LeadersGrid, MoreLink } from "@/components/sections";
import { container, delay, Eyebrow, PageBanner, ReadMore, SectionHead } from "@/components/ui";
import { getLeaders, getPage, paragraphs } from "@/lib/content";
import { headingTag, pageMetadata } from "@/lib/seo";

export const generateMetadata = () => pageMetadata("about", "/about");

const focusIcons = [
  "M3 21h18M5 21V10m4 11V10m6 11V10m4 11V10M2 10l10-6 10 6", // representation (institution)
  "M3 21h18M6 21V9l6-4 6 4v12M10 21v-5h4v5", // enterprises
  "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM20 17v4H6.5", // research
  "M8 12l3 3 5-6M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", // partnerships
];

export default async function AboutPage() {
  const [page, leaders] = await Promise.all([getPage("about"), getLeaders()]);

  const s = page.sections;
  const aboutUs = s.AboutUsSection;
  const focus = s.FocusAreasSection;
  const mv = s.MissionVisionSection;
  const leadership = s.LeadershipSection;
  const chapters = s.ChaptersSection;

  return (
      <main>
        <JsonLd data={page.seo?.schema} />
        <PageBanner hero={s.AboutHeroSection} as={headingTag(page.seo?.headingOptions)} />

        {/* ───────────── About Us ───────────── */}
        <section id="about-us" className="py-20 lg:py-28">
          <div className={container}>
            <Eyebrow>{aboutUs.tagline}</Eyebrow>
            <div className="mt-6 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative overflow-hidden rounded-3xl lg:sticky lg:top-28" data-reveal="scale">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={aboutUs.image}
                  alt={aboutUs.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-steel">
                    {aboutUs.badgeLabel}
                  </p>
                  <p className="text-lg font-bold text-ink">
                    {aboutUs.badgeTitle}
                  </p>
                </div>
              </div>
              <div data-reveal style={delay("120ms")}>
                <p className="text-lg leading-relaxed text-ink">
                  {aboutUs.lead}
                </p>
                <ReadMore paragraphs={paragraphs(aboutUs.more)} />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Focus areas ───────────── */}
        <section className="bg-concrete py-16 lg:py-20">
          <div className={container}>
            <SectionHead
              eyebrow={focus.tagline}
              title={focus.headline}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {focus.items.map((f: { title: string; text: string }, i: number) => (
                <div key={i} data-reveal style={delay(`${i * 100}ms`)} className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-saffron hover:shadow-lg">
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
              <Eyebrow>{mv.missionTagline}</Eyebrow>
              <p className="mt-6 text-xl font-semibold leading-snug text-ink sm:text-2xl">
                {mv.missionLead}
              </p>
              <ReadMore paragraphs={paragraphs(mv.missionMore)} />
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-saffron p-8 text-white lg:p-10" data-reveal style={delay("150ms")}>
              <div className="hatch absolute inset-0" />
              <div className="relative">
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                  <span className="inline-block h-1 w-8 rounded-full bg-white" />
                  {mv.visionTagline}
                </p>
                <p className="mt-6 text-xl font-semibold leading-snug sm:text-2xl">
                  {mv.visionLead}
                </p>
                <ReadMore paragraphs={paragraphs(mv.visionMore)} light />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Leadership ───────────── */}
        <section id="leadership" className="bg-concrete py-20 lg:py-28">
          <div className={container}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead
                eyebrow={leadership.tagline}
                title={leadership.headline}
                intro={leadership.intro}
              />
              <MoreLink href={leadership.linkHref}>{leadership.linkLabel}</MoreLink>
            </div>
            <div className="mt-12">
              <LeadersGrid leaders={leaders.officeBearers} />
            </div>
          </div>
        </section>

        {/* ───────────── State chapters ───────────── */}
        <section id="chapters" className="py-20 lg:py-28">
          <div className={container}>
            <SectionHead
              eyebrow={chapters.tagline}
              title={chapters.headline}
              intro={chapters.intro}
            />
            <div className="mt-10">
              <ChaptersGrid items={chapters.chapters} />
            </div>
          </div>
        </section>
      </main>
  );
}
