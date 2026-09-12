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
