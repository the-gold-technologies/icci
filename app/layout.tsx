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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-full font-sans">
        <Splash />
        {children}
        <Reveal />
      </body>
    </html>
  );
}
