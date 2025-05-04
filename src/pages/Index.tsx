import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SubjectsSection from "@/components/SubjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FeatureCardsAnimated from "@/components/FeatureCardsAnimated";

const Index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureCardsAnimated />
      <SubjectsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
