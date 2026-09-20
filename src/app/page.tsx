import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { RevealProvider } from "@/components/layout/RevealProvider";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SessionRecommender } from "@/components/sections/SessionRecommender";
import { Gallery } from "@/components/sections/Gallery";
import { Videos } from "@/components/sections/Videos";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { videos } from "@/data/videos";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteConfig.url,
  name: "Arti Yoga Studio",
  description:
    "Expert yoga teacher in Indore offering beginner-friendly group yoga classes and personalized one-on-one home-visit sessions.",
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.7196,
    longitude: 75.8577,
  },
  areaServed: {
    "@type": "City",
    name: "Indore",
  },
  priceRange: "₹₹",
  image: `${siteConfig.url}/opengraph-image`,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.youtube,
    siteConfig.social.facebook,
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "06:00",
    closes: "20:00",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arti Nagar",
  jobTitle: "Yoga Instructor",
  description: `Yoga teacher in Indore with ${siteConfig.experience} years of experience. Specializes in beginner yoga, flexibility, stress relief and personalized home-visit sessions.`,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.youtube,
    siteConfig.social.facebook,
  ],
  knowsAbout: ["Yoga", "Pranayama", "Flexibility Training", "Stress Relief", "Beginner Yoga"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Yoga Services by Arti Yoga Studio",
  itemListElement: services
    .filter((s) => s.available)
    .map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: {
          "@type": "LocalBusiness",
          name: "Arti Yoga Studio",
          url: siteConfig.url,
        },
        areaServed: {
          "@type": "City",
          name: "Indore",
        },
        url: `${siteConfig.url}/#services`,
      },
    })),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Arti Yoga Studio",
  url: siteConfig.url,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: testimonials.length.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    reviewBody: t.text,
    datePublished: "2026-09-01",
  })),
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Yoga Videos by Arti Nagar",
  itemListElement: videos
    .filter((v) => v.youtubeId)
    .map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: v.title,
        description: v.description,
        thumbnailUrl: `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`,
        uploadDate: "2026-01-01",
        embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
        url: `https://www.youtube.com/watch?v=${v.youtubeId}`,
        publisher: {
          "@type": "Person",
          name: "Arti Nagar",
          url: siteConfig.url,
        },
      },
    })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arti Yoga Studio",
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <RevealProvider>
        <main id="main-content" className="pb-mobile-bar lg:pb-0">
          <Hero />
          <TrustBar />
          <About />
          <Services />
          <SessionRecommender />
          <Benefits />
          <HowItWorks />
          <Gallery />
          <Videos />
          <InstagramSection />
          <Testimonials />
          <FAQ />
          <FinalCTA />
          <ContactForm />
        </main>
      </RevealProvider>
      <Footer />
      <MobileActionBar />
    </>
  );
}
