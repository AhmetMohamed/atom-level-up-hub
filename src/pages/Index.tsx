
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectsSection from "@/components/SubjectsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import ModernHero from "@/components/ModernHero";
import { motion } from "framer-motion";
import { BookOpen, Award, Lightbulb, Layers } from "lucide-react";

// New interactive features section to replace testimonials
const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Structured Learning Paths",
      description: "Follow expert-crafted pathways tailored to your educational level and goals, from GCSE to A-Level and beyond.",
      color: "bg-blue-50"
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Interactive Challenges",
      description: "Test your knowledge with engaging quizzes and challenges that adapt to your learning progress.",
      color: "bg-green-50"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
      title: "Personalized Recommendations",
      description: "Receive custom learning recommendations based on your performance and learning style.",
      color: "bg-amber-50"
    },
    {
      icon: <Layers className="h-6 w-6 text-purple-600" />,
      title: "Comprehensive Resources",
      description: "Access a rich library of study materials, practice questions, and visual guides to enhance your learning.",
      color: "bg-purple-50"
    }
  ];
  
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Transform How You Learn Science
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our innovative approach to science education that makes complex concepts accessible and engaging
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.color} rounded-xl p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Interactive stats section with countup animation
const StatsSection = () => {
  return (
    <section className="py-16 bg-science-primary text-white">
      <div className="container px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.div 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              1,200+
            </motion.div>
            <p className="text-blue-100">Learning Rooms</p>
          </div>
          <div>
            <motion.div 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              25K+
            </motion.div>
            <p className="text-blue-100">Active Students</p>
          </div>
          <div>
            <motion.div 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              98%
            </motion.div>
            <p className="text-blue-100">Exam Pass Rate</p>
          </div>
          <div>
            <motion.div 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              4.9/5
            </motion.div>
            <p className="text-blue-100">Student Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <Header />
      <ModernHero />
      <StatsSection />
      <FeaturesSection />
      <SubjectsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
