import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2fcff] to-[#f5f0ff]">
      <Header />
      <main>
        <HeroSection onContactClick={() => setShowContactForm(true)} />
        <FeaturesSection />
        <ProcessSection />
        <PricingSection onContactClick={() => setShowContactForm(true)} />
        {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
