import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { afterSplash, container, delay, Heading, HeroHeadline, SectionHead } from "@/components/ui";
import HeroCarousel from "@/components/HeroCarousel";
import {
  BenefitsList,
  CategoriesGrid,
  InitiativesGrid,
  LeadersGrid,
  MembershipEnquiry,
  MoreLink,
  ObjectivesGrid,
  StakeholderList,
} from "@/components/sections";
import { getLeaders, getNews, getPage, getSite, paragraphs } from "@/lib/content";
import { headingTag, homeMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

// Home SEO = SEO › Global (title, description, share image, schema, hero headline tag)
export const generateMetadata = homeMetadata;

// Line icons for the hero highlights strip, by position (CMS: "Icons are fixed by position").
const statIcons = [
  <path key="people" d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13 9v-1a4 4 0 0 0-3-3.9M16 4.1a3 3 0 0 1 0 5.8" />,
  <path key="map" d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14" />,
  <path key="voice" d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1Zm13-3a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14" />,
  <path key="globe" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />,
];

/** Renders `text` with the CMS "highlight" phrase in bold. */
function withHighlight(text: string, highlight: string) {
  const at = highlight ? text.indexOf(highlight) : -1;
  if (at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <strong className="text-ink">{highlight}</strong>
      {text.slice(at + highlight.length)}
    </>
  );
}

export default async function Home() {
  // Cards on the home page are shared with (and edited under) the Initiatives and Membership pages
  const [home, initiativesPage, membershipPage, leaders, articles, site] = await Promise.all([
    getPage("home"),
    getPage("initiatives"),
    getPage("membership"),
    getLeaders(),
    getNews(),
    getSite(),
  ]);

  const s = home.sections;
  const hero = s.HeroSection;
  const about = s.AboutSection;
  const objectives = s.ObjectivesSection;
  const representation = s.RepresentationSection;
  const initiatives = s.InitiativesSection;
  const leadership = s.LeadershipSection;
  const membership = s.MembershipSection;
  const newsSec = s.NewsSection;
  const shared = { ...initiativesPage.sections, ...membershipPage.sections };
  const [featured, ...latest] = articles;

  return (
    <main id="top">
      <JsonLd data={site.schema} />

      {/* ───────────── Hero ───────────── */}
      <section className="relative text-ink">
        <HeroCarousel hero={hero}>
          <p className="enter flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/85" style={afterSplash(150)}>
            <span className="enter-draw tricolor inline-block h-1 w-8 rounded-full" style={afterSplash(300)} />
            {hero.tagline}
          </p>
          <Heading as={headingTag(site.headingOptions)} className="enter mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl" style={afterSplash(300)}>
            <HeroHeadline hero={hero} />
          </Heading>
          <div className="enter mt-8 flex flex-wrap gap-4" style={afterSplash(450)}>
            <a href={hero.primaryCtaLink} className="group inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-saffron/90">
              {hero.primaryCtaLabel}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.25} aria-hidden />
            </a>
            <a href={hero.secondaryCtaLink} className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10">
              {hero.secondaryCtaLabel}
            </a>
          </div>
        </HeroCarousel>

        {/* Highlights strip */}
        <div className="border-b border-zinc-200 bg-cream">
          <dl className={`${container} grid grid-cols-2 gap-x-4 gap-y-6 py-6 lg:flex lg:justify-between`}>
            {s.HighlightsSection.stats.map((stat: { value: string; label: string }, i: number) => (
              <div key={i} className="enter flex items-center gap-3" style={afterSplash(700 + i * 100)}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-saffron text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {statIcons[i % statIcons.length]}
                  </svg>
                </span>
                <div className="text-left">
                  <dt className="text-xl font-bold leading-none text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-steel">{stat.label}</dd>
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
            <SectionHead eyebrow={about.tagline} title={about.headline} />
            <div className="mt-6 space-y-4 leading-relaxed text-steel" data-reveal style={delay("120ms")}>
              {paragraphs(about.description).map((p, i) => (
                <p key={i}>{withHighlight(p, about.highlight)}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {about.cards.map((c: { title: string; text: string }, i: number) => (
              <div key={i} data-reveal style={delay(`${i * 100}ms`)} className="group rounded-2xl border border-zinc-200 p-6 transition hover:-translate-y-1 hover:border-saffron hover:shadow-lg">
                <div className="mb-4 h-1 w-10 rounded-full bg-saffron transition-all group-hover:w-16" />
                <h3 className="font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Objectives ───────────── */}
      <section id="objectives" className="bg-concrete py-20 lg:py-28">
        <div className={container}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow={objectives.tagline} title={objectives.headline} />
            <MoreLink href={objectives.linkHref}>{objectives.linkLabel}</MoreLink>
          </div>
          <div className="mt-10">
            <ObjectivesGrid items={shared.ObjectivesSection.items} />
          </div>
        </div>
      </section>

      {/* ───────────── Industry representation ───────────── */}
      <section className="py-20 lg:py-28">
        <div className={`${container} grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]`}>
          <SectionHead eyebrow={representation.tagline} title={representation.headline} intro={representation.intro} />
          <StakeholderList items={shared.WhoWeRepresentSection.stakeholders} />
        </div>
      </section>

      {/* ───────────── Key initiatives ───────────── */}
      <section id="initiatives" className="bg-cream py-20 text-ink lg:py-28">
        <div className={container}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow={initiatives.tagline} title={initiatives.headline} intro={initiatives.intro} />
            <MoreLink href={initiatives.linkHref}>{initiatives.linkLabel}</MoreLink>
          </div>
          <div className="mt-12">
            <InitiativesGrid items={shared.KeyInitiativesSection.items} />
          </div>
        </div>
      </section>

      {/* ───────────── Leadership ───────────── */}
      <section id="leadership" className="py-20 lg:py-28">
        <div className={container}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow={leadership.tagline} title={leadership.headline} intro={leadership.intro} />
            <MoreLink href={leadership.linkHref}>{leadership.linkLabel}</MoreLink>
          </div>
          <div className="mt-12">
            <LeadersGrid leaders={leaders.officeBearers} />
          </div>
        </div>
      </section>

      {/* ───────────── Membership ───────────── */}
      <section id="membership" className="bg-concrete py-20 lg:py-28">
        <div className={container}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow={membership.tagline} title={membership.headline} intro={membership.intro} />
            <MoreLink href={membership.linkHref}>{membership.linkLabel}</MoreLink>
          </div>
          <div className="mt-12">
            <CategoriesGrid copy={shared.CategoriesSection} />
          </div>
          <div className="mt-14" data-reveal>
            <h3 className="text-2xl font-bold text-ink">{membership.benefitsHeading}</h3>
            <div className="mt-6">
              <BenefitsList items={shared.WhyJoinSection.benefits} />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── News ───────────── */}
      {featured && (
        <section id="news" className="py-14 lg:py-16">
          <div className={container}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHead eyebrow={newsSec.tagline} title={newsSec.headline} />
              <MoreLink href={newsSec.linkHref}>{newsSec.linkLabel}</MoreLink>
            </div>
            <div className="mt-8 grid gap-3 lg:grid-cols-2">
              {/* Featured story */}
              <Link href={`/news/${featured.slug}`} data-reveal className="group relative block min-h-[310px] overflow-hidden rounded-2xl bg-zinc-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.img} alt={featured.imgAlt || ""} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-7">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-saffron px-2.5 py-1 font-semibold uppercase tracking-wide">{featured.category}</span>
                    <span className="text-white/75">{featured.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">{featured.title}</h3>
                  <p className="mt-1.5 line-clamp-1 max-w-lg text-sm text-white/80">{featured.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:text-saffron">
                    {newsSec.readMoreLabel} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} aria-hidden />
                  </span>
                </div>
              </Link>

              {/* Three compact stories */}
              <div className="grid gap-3 lg:grid-rows-3">
                {latest.slice(0, 3).map((n, i) => (
                  <Link key={n.slug} href={`/news/${n.slug}`} data-reveal style={delay(`${(i + 1) * 100}ms`)} className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-3 transition hover:border-saffron hover:shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={n.img} alt={n.imgAlt || ""} loading="lazy" className="h-24 w-28 shrink-0 rounded-xl object-cover sm:w-32" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="font-semibold uppercase tracking-wide text-saffron">{n.category}</span>
                        <span className="text-steel">· {n.date}</span>
                      </div>
                      <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug text-ink group-hover:text-saffron">{n.title}</h3>
                      <p className="mt-1 line-clamp-1 text-sm text-steel">{n.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───────────── Membership enquiry (edited under Membership › Membership Enquiry) ───────────── */}
      <section className="py-14 lg:py-20">
        <div className={container}>
          <MembershipEnquiry copy={shared.MembershipEnquirySection} categories={shared.CategoriesSection.categories} email={site.email} />
        </div>
      </section>
    </main>
  );
}
