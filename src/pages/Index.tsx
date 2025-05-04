import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectsSection from "@/components/SubjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <SubjectsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
