import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import CookieNotice from "@/components/CookieNotice";
import { businessConfig } from "@/lib/config";

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

const TITLE = "Kenniford Outdoor Storage | Secure Caravan Storage in Exeter";
const DESCRIPTION =
  "Secure outdoor storage for caravans, motorhomes, boats and trailers in Clyst St Mary, Exeter. CASSOA-accredited, family-run site with 24/7 CCTV and gated access 7am – 8pm.";

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.url),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "caravan storage Exeter",
    "caravan storage Devon",
    "motorhome storage Exeter",
    "boat storage Devon",
    "secure storage Clyst St Mary",
    "CASSOA storage Devon",
    "Kenniford Outdoor Storage",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: businessConfig.url,
    siteName: businessConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/photos/img_2941.jpg",
        width: 1200,
        height: 630,
        alt: "Kenniford Outdoor Storage — hardstanding pitches and site view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/photos/img_2941.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kenniford",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#c7dbe5",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Structured data — schema.org LocalBusiness (SelfStorage subtype).
// This is the single most impactful "SEO thing" for a local business:
// it tells Google explicitly what the business is, where it is, its
// hours, its price range, and how to contact it, in a format the
// search index can consume directly. Feeds Google Business Profile
// matching, rich-snippet eligibility, and local pack ranking.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "SelfStorage",
  "@id": `${businessConfig.url}/#business`,
  name: businessConfig.name,
  description: businessConfig.shortDescription,
  url: businessConfig.url,
  telephone: businessConfig.phoneE164,
  email: businessConfig.email,
  image: [`${businessConfig.url}/photos/logo.jpg`, `${businessConfig.url}/photos/img_2941.jpg`],
  logo: `${businessConfig.url}/photos/logo.jpg`,
  priceRange: businessConfig.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessConfig.address.line1,
    addressLocality: businessConfig.address.city,
    addressRegion: businessConfig.address.county,
    postalCode: businessConfig.address.postcode,
    addressCountry: businessConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessConfig.geo.latitude,
    longitude: businessConfig.geo.longitude,
  },
  hasMap: `https://www.google.com/maps/place//@${businessConfig.geo.latitude},${businessConfig.geo.longitude},17z`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Exeter" },
    { "@type": "City", name: "Topsham" },
    { "@type": "City", name: "Exmouth" },
    { "@type": "AdministrativeArea", name: "Devon" },
  ],
  // Non-schema.org field so we don't fake a rating we don't have.
  // aggregateRating intentionally omitted until real reviews exist.
};

// FAQ schema — Google may render these directly under our result
// as a rich snippet. Copy is kept identical to whatever's visible on
// the page in the FAQ component so it isn't flagged as "content not
// on the page" (a common cause of FAQ snippet removal).
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How close is Kenniford to the M5?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kenniford Farm is just 2 miles from Junction 30 of the M5, near Clyst St Mary in Exeter. Easy on and off the motorway whether you're heading to Devon, Cornwall, or beyond.",
      },
    },
    {
      "@type": "Question",
      name: "What size pitches do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All pitches are 3.5m wide and on hardstanding. We offer three lengths: Small (up to 6.99m), Medium (7m+) for caravans, and Large (7m+) for motorhomes and boats.",
      },
    },
    {
      "@type": "Question",
      name: "Do insurers offer a discount for CaSSOA sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most UK caravan and motorhome insurers offer a discount when your vehicle is stored at a CaSSOA-registered site. Kenniford holds the CaSSOA Silver Award. Check with your insurer for the exact discount.",
      },
    },
    {
      "@type": "Question",
      name: "What are your access hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The gate is open 7am to 8pm daily, entered with an issued key fob. Outside these hours, access can be arranged by prior agreement.",
      },
    },
    {
      "@type": "Question",
      name: "What does storage cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annual rates start at £468 for Small (up to 6.99m), £520 for Medium (caravans 7m+), and £572 for Large (boats and motorhomes 7m+). All prices include VAT. You can also pay by 3-month or 6-month periods.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a deposit for the key fob?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — a fully refundable £10 deposit is taken for the access key fob when you start your storage agreement.",
      },
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
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
