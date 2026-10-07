import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Reveal from "@/components/Reveal";
import Splash from "@/components/Splash";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ICCI – Indian Chamber of Construction Industry",
  description:
    "The Indian Chamber of Construction Industry (ICCI) unites contractors, builders, consultants, suppliers and allied professionals to collaborate, innovate and build a better India.",
};

// Runs before the splash is parsed: show it only on the first load in a tab or on an explicit reload,
// not when a full page load comes from following a link or going back/forward within the site.
const splashGate = `try{var n=performance.getEntriesByType("navigation")[0];var reload=n&&n.type==="reload";if(sessionStorage.getItem("icci-splash")&&!reload){document.documentElement.classList.add("no-splash")}sessionStorage.setItem("icci-splash","1")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-full font-sans">
        <script dangerouslySetInnerHTML={{ __html: splashGate }} />
        <Splash />
        {children}
        <Reveal />
      </body>
    </html>
  );
}
