import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import CookieNotice from "@/components/CookieNotice";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenniford Outdoor Storage | Secure Caravan Storage in Exeter",
  description:
    "Secure outdoor storage for caravans, motorhomes, boats and trailers in Clyst St Mary, Exeter. CASSOA-accredited, family-run site with 24/7 CCTV and gated access 7am – 8pm.",
  keywords: [
    "caravan storage Exeter",
    "caravan storage Devon",
    "motorhome storage Exeter",
    "boat storage Devon",
    "secure storage Clyst St Mary",
    "Kenniford Outdoor Storage",
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kenniford",
  },
};

export const viewport: Viewport = {
  themeColor: "#c7dbe5",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
