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
    default: "Arti Yoga Studio | Yoga Classes & Personal Sessions",
    template: "%s | Arti Yoga Studio",
  },
  description:
    "Practice yoga with Arti — experienced yoga teacher in Indore with 4+ years of teaching. Offering group yoga classes and personalized home-visit sessions. Beginner friendly. Flexible scheduling.",
  keywords: [
    "yoga classes Indore",
    "yoga teacher Indore",
    "personal yoga trainer Indore",
    "home yoga sessions Indore",
    "group yoga classes Indore",
    "yoga instructor Indore",
    "yoga with Arti",
    "Arti Yoga Studio",
    "beginner yoga",
    "online yoga classes",
  ],
  authors: [{ name: "Arti Yoga Studio" }],
  creator: "Arti Yoga Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Arti Yoga Studio | Yoga Classes & Personal Sessions",
    description:
      "Practice yoga with Arti — experienced yoga teacher offering group classes and personalized home-visit sessions. Beginner friendly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arti Yoga Studio | Yoga Classes & Personal Sessions",
    description:
      "Practice yoga with Arti — experienced yoga teacher offering group classes and personalized home-visit sessions.",
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
