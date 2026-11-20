import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { container, delay, PageBanner, SectionHead } from "@/components/ui";
import { getEvents, getPage, type Event } from "@/lib/content";
import { headingTag, pageMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

export const generateMetadata = () => pageMetadata("events", "/events");

/** Events › Upcoming / Past section as saved in the CMS. */
type ListCopy = { tagline: string; headline: string; emptyText: string; emptyCtaLabel: string; emptyCtaLink: string };

function EventList({ items, copy }: { items: Event[]; copy: ListCopy }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center" data-reveal>
        <p className="text-steel">{copy.emptyText}</p>
        <Link href={copy.emptyCtaLink} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron hover:text-india-green">
          {copy.emptyCtaLabel} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} aria-hidden />
        </Link>
      </div>
    );
  }
  return (
    <div className="grid gap-4">
      {items.map((e, i) => (
        <article key={e.id} data-reveal style={delay(`${i * 80}ms`)} className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 sm:grid-cols-[160px_1fr]">
          <div>
            <p className="font-semibold text-saffron">{e.date}</p>
            <p className="text-sm text-steel">{e.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink">{e.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-steel">{e.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default async function EventsPage() {
  const [page, events] = await Promise.all([getPage("events"), getEvents()]);

  const s = page.sections;
  const upcoming: ListCopy = s.UpcomingEventsSection;
  const past: ListCopy = s.PastEventsSection;

  return (
    <main>
      <JsonLd data={page.seo?.schema} />
      <PageBanner hero={s.EventsHeroSection} as={headingTag(page.seo?.headingOptions)} />

      <section id="upcoming" className="py-20 lg:py-24">
        <div className={container}>
          <SectionHead eyebrow={upcoming.tagline} title={upcoming.headline} />
          <div className="mt-8">
            <EventList items={events.filter((e) => !e.isPast)} copy={upcoming} />
          </div>
        </div>
      </section>

      <section id="past" className="bg-concrete py-20 lg:py-24">
        <div className={container}>
          <SectionHead eyebrow={past.tagline} title={past.headline} />
          <div className="mt-8">
            <EventList items={events.filter((e) => e.isPast)} copy={past} />
          </div>
        </div>
      </section>
    </main>
  );
}
