import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesTabsSection from "@/components/FeaturesTabsSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const IndexPage = () => {
  const [contactRef, setContactRef] = useState<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    contactRef?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection onContactClick={() => window.open('https://t.me/qanelph', '_blank')} />
        <FeaturesTabsSection />
        <ProcessSection />
        <PricingSection onContactClick={() => window.open('https://t.me/qanelph', '_blank')} />
        <div ref={setContactRef}>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
