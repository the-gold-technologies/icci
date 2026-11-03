import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { container } from "@/components/ui";
import { news } from "@/lib/content";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  return article ? { title: `${article.title} – ICCI`, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) notFound();
  const more = news.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* ───────────── Article header ───────────── */}
        <section className="relative overflow-hidden text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/90 via-[#1a0f08]/55 to-[#1a0f08]/35" />
          <div className={`${container} relative pb-14 pt-40 lg:pb-16 lg:pt-48`}>
            <Link href="/news" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-saffron">
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" strokeWidth={2} aria-hidden /> All news
            </Link>
            <div className="mt-6 flex items-center gap-2 text-xs">
              <span className="rounded-full bg-saffron px-2.5 py-1 font-semibold uppercase tracking-wide">{article.category}</span>
              <span className="text-white/75">{article.date}</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{article.title}</h1>
          </div>
        </section>

        {/* ───────────── Body ───────────── */}
        <article className={`${container} py-14 lg:py-20`}>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-steel">
            <p className="text-xl leading-relaxed text-ink">{article.excerpt}</p>
            {article.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </article>

        {/* ───────────── More news ───────────── */}
        <section className="border-t border-zinc-200 bg-concrete py-14 lg:py-16">
          <div className={container}>
            <h2 className="text-2xl font-bold text-ink">More from the Chamber</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {more.map((n) => (
                <Link
                  key={n.slug}
                  href={`/news/${n.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-3 transition hover:border-saffron hover:shadow-md"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={n.photo} alt="" loading="lazy" className="h-20 w-24 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-saffron">{n.category}</p>
                    <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-ink group-hover:text-saffron">{n.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
