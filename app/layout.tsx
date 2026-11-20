import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Splash from "@/components/Splash";
import JsonLd from "@/components/JsonLd";
import { SocialRail } from "@/components/Social";
import { getNav, getSite, SITE_URL } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Site-wide defaults from SEO › Global. Each page sets its own title, description, canonical and
// Open Graph (lib/seo.ts): the home page from these global settings, inner pages from SEO › Pages.
export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
    title: site.siteTitle,
    description: site.siteDescription,
    applicationName: site.siteTitle,
    icons: site.favicon ? { icon: site.favicon, apple: site.favicon } : undefined,
    verification: site.searchConsoleId ? { google: site.searchConsoleId } : undefined,
  };
}

// Runs before the splash is parsed: show it only on the first load in a tab or on an explicit reload,
// not when a full page load comes from following a link or going back/forward within the site.
const splashGate = `try{var n=performance.getEntriesByType("navigation")[0];var reload=n&&n.type==="reload";if(sessionStorage.getItem("icci-splash")&&!reload){document.documentElement.classList.add("no-splash")}sessionStorage.setItem("icci-splash","1")}catch(e){}`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [site, nav] = await Promise.all([getSite(), getNav()]);
  const copy = site.footerContent!; // getSite() guarantees it is set

  return (
    <html lang="en" className={`${poppins.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-full font-sans">
        <JsonLd data={site.schema} />
        {site.customHeaderScripts && <div hidden dangerouslySetInnerHTML={{ __html: site.customHeaderScripts }} />}
        {site.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <script dangerouslySetInnerHTML={{ __html: splashGate }} />
        <Splash logo={site.logo} alt={copy.logoAlt} />
        <Header
          links={nav.links}
          actions={nav.actions}
          logoMark={site.logoMark}
          logoMarkWhite={site.logoMarkWhite}
          logoMarkAlt={copy.logoMarkAlt}
          brandLine1={copy.headerBrandLine1}
          brandLine2={copy.headerBrandLine2}
        />
        {children}
        <Footer links={nav.links} site={site} copy={copy} />
        <SocialRail items={site.socialLinks ?? []} />
        <Reveal />
        {site.customFooterScripts && <div hidden dangerouslySetInnerHTML={{ __html: site.customFooterScripts }} />}

        {/* Analytics load after the page is interactive so they never delay rendering */}
        {site.googleAnalyticsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAnalyticsId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.googleAnalyticsId}');`}
            </Script>
          </>
        )}
        {site.gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');`}
          </Script>
        )}
      </body>
    </html>
  );
}
