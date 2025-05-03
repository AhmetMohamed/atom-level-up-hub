
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const Pricing = () => {
  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will remain until the end of your billing period."
    },
    {
      question: "Do you offer discounts for schools or educational institutions?",
      answer: "Yes! We offer special bulk pricing for schools and educational institutions. Please contact our sales team for more information about our school plans."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a free basic plan that gives you limited access to our content. This allows you to explore ScienceHub before committing to a premium subscription."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and in some regions, Apple Pay and Google Pay. School plans can be paid via invoice."
    },
    {
      question: "Can I switch between monthly and annual billing?",
      answer: "Yes, you can switch between monthly and annual billing at any time. If you switch from monthly to annual, you'll get the discounted rate immediately."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <PricingSection />
        
        {/* FAQ Section */}
        <section className="py-16 bg-science-light/30">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 max-w-[800px] mx-auto mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Still have questions? We're here to help.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="text-center mt-10">
                <p className="text-muted-foreground mb-4">
                  Still have questions? Contact our support team.
                </p>
                <a href="mailto:support@sciencehub.com" className="text-science-primary hover:underline">
                  support@sciencehub.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
