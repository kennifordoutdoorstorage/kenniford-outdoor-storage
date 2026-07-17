import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

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
    "Secure outdoor storage for caravans, motorhomes, boats and trailers in Clyst St Mary, Exeter. Family-run site with 24/7 CCTV and gated access.",
  keywords: [
    "caravan storage Exeter",
    "caravan storage Devon",
    "motorhome storage Exeter",
    "boat storage Devon",
    "secure storage Clyst St Mary",
    "Kenniford Outdoor Storage",
  ],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
