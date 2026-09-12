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

export default function Home() {
  return (
    <>
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
