import JsonLd from "@/components/JsonLd";
import NewsBrowser from "@/components/NewsBrowser";
import { container, PageBanner } from "@/components/ui";
import { getNews, getPage } from "@/lib/content";
import { headingTag, pageMetadata } from "@/lib/seo";

export const generateMetadata = () => pageMetadata("news-and-articles", "/news");

export default async function NewsPage() {
  const [page, articles] = await Promise.all([getPage("news-and-articles"), getNews()]);
  const s = page.sections;

  return (
    <main>
      <JsonLd data={page.seo?.schema} />
      <PageBanner hero={s.NewsHeroSection} as={headingTag(page.seo?.headingOptions)} />

      <section className="bg-concrete py-14 lg:py-20">
        <div className={container}>
          <NewsBrowser items={articles} copy={s.NewsBrowserSection} />
        </div>
      </section>
    </main>
  );
}
