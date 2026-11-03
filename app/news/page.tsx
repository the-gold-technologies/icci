import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsBrowser from "@/components/NewsBrowser";
import { container, PageBanner } from "@/components/ui";
import { news, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Articles – ICCI",
  description: "Updates from the Indian Chamber of Construction Industry and the wider construction sector.",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner photo={photos.about} eyebrow="News & Articles">
          Updates from the <span className="text-saffron">Chamber</span> and the industry.
        </PageBanner>

        <section className="bg-concrete py-14 lg:py-20">
          <div className={container}>
            <NewsBrowser items={news} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
