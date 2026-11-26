import JsonLd from "@/components/JsonLd";
import { BenefitsList, CategoriesGrid, MembershipEnquiry } from "@/components/sections";
import { container, delay, PageBanner, SectionHead } from "@/components/ui";
import { getPage, getSite } from "@/lib/content";
import { headingTag, pageMetadata } from "@/lib/seo";

export const generateMetadata = () => pageMetadata("membership", "/membership");

export default async function MembershipPage() {
  const [page, site] = await Promise.all([getPage("membership"), getSite()]);

  const s = page.sections;
  const whyJoin = s.WhyJoinSection;
  const categories = s.CategoriesSection;
  const howToJoin = s.HowToJoinSection;

  return (
    <main>
      <JsonLd data={page.seo?.schema} />
      <PageBanner hero={s.MembershipHeroSection} as={headingTag(page.seo?.headingOptions)} />

      {/* ───────────── Why join ───────────── */}
      <section id="why-join" className="py-20 lg:py-24">
        <div className={container}>
          <SectionHead eyebrow={whyJoin.tagline} title={whyJoin.headline} intro={whyJoin.intro} />
          <div className="mt-10">
            <BenefitsList items={whyJoin.benefits} />
          </div>
        </div>
      </section>

      {/* ───────────── Categories ───────────── */}
      <section id="categories" className="bg-concrete py-20 lg:py-24">
        <div className={container}>
          <SectionHead eyebrow={categories.tagline} title={categories.headline} />
          <div className="mt-10">
            <CategoriesGrid copy={categories} />
          </div>
        </div>
      </section>

      {/* ───────────── How to join ───────────── */}
      <section id="how-to-join" className="py-20 lg:py-24">
        <div className={container}>
          <SectionHead eyebrow={howToJoin.tagline} title={howToJoin.headline} />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howToJoin.steps.map((st: { title: string; text: string }, i: number) => (
              <li key={i} data-reveal style={delay(`${i * 100}ms`)} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-saffron text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-semibold text-ink">{st.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Apply ───────────── */}
      <section className="bg-cream py-20 lg:py-24">
        <div className={container}>
          <MembershipEnquiry copy={s.MembershipEnquirySection} categories={categories.categories} email={site.email} />
        </div>
      </section>
    </main>
  );
}
