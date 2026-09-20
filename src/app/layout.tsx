import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Arti Yoga Studio | Yoga Classes in Indore | Personal Home Sessions",
    template: "%s | Arti Yoga Studio Indore",
  },
  description:
    "Arti Yoga Studio — expert yoga teacher in Indore with 4+ years experience. Offering beginner-friendly group yoga classes and personalized one-on-one home-visit sessions. Book your session today.",
  keywords: [
    "yoga classes in Indore",
    "yoga teacher in Indore",
    "yoga instructor Indore",
    "personal yoga trainer Indore",
    "home yoga sessions Indore",
    "group yoga classes Indore",
    "beginner yoga Indore",
    "yoga for beginners Indore",
    "yoga at home Indore",
    "one on one yoga Indore",
    "yoga for stress relief",
    "yoga for flexibility",
    "Arti yoga studio",
    "yoga with Arti",
    "Arti Nagar yoga",
    "online yoga classes India",
  ],
  authors: [{ name: "Arti Nagar", url: siteConfig.url }],
  creator: "Arti Nagar",
  publisher: "Arti Yoga Studio",
  category: "Health & Fitness",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Arti Yoga Studio | Yoga Classes in Indore",
    description:
      "Expert yoga teacher in Indore offering group classes & personalized home-visit sessions. Beginner friendly. Book via WhatsApp.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Arti Yoga Studio — Yoga Classes in Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arti Yoga Studio | Yoga Classes in Indore",
    description:
      "Expert yoga teacher in Indore — group classes & personalized home-visit sessions. Beginner friendly.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "847efaa3bf22d635",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
