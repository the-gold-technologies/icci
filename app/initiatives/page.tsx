import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { InitiativesGrid, ObjectivesGrid, StakeholderList } from "@/components/sections";
import { container, PageBanner, SectionHead } from "@/components/ui";
import { getPage } from "@/lib/content";
import { headingTag, pageMetadata } from "@/lib/seo";

export const generateMetadata = () => pageMetadata("initiatives", "/initiatives");

export default async function InitiativesPage() {
  const page = await getPage("initiatives");

  const s = page.sections;
  const keyInit = s.KeyInitiativesSection;
  const objectives = s.ObjectivesSection;
  const who = s.WhoWeRepresentSection;

  return (
    <main>
      <JsonLd data={page.seo?.schema} />
      <PageBanner hero={s.InitiativesHeroSection} as={headingTag(page.seo?.headingOptions)} />

      {/* ───────────── Key initiatives ───────────── */}
      <section id="key-initiatives" className="py-20 lg:py-24">
        <div className={container}>
          <SectionHead eyebrow={keyInit.tagline} title={keyInit.headline} intro={keyInit.intro} />
          <div className="mt-12">
            <InitiativesGrid items={keyInit.items} />
          </div>
        </div>
      </section>

      {/* ───────────── Objectives ───────────── */}
      <section id="objectives" className="bg-concrete py-20 lg:py-24">
        <div className={container}>
          <SectionHead eyebrow={objectives.tagline} title={objectives.headline} />
          <div className="mt-10">
            <ObjectivesGrid items={objectives.items} />
          </div>
        </div>
      </section>

      {/* ───────────── Who we represent ───────────── */}
      <section id="who-we-represent" className="py-20 lg:py-24">
        <div className={`${container} grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]`}>
          <div>
            <SectionHead eyebrow={who.tagline} title={who.headline} intro={who.intro} />
            <Link href={who.ctaLink} className="mt-8 inline-flex rounded-full bg-saffron px-6 py-3 font-semibold text-white transition hover:bg-india-green">
              {who.ctaLabel}
            </Link>
          </div>
          <StakeholderList items={who.stakeholders} />
        </div>
      </section>
    </main>
  );
}
