
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectsSection from "@/components/SubjectsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import { motion } from "framer-motion";
import { BookOpen, Award, Lightbulb, Layers, Clock, Medal, Brain, Sparkles, FileCheck } from "lucide-react";

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

// New Achievement Showcase section
const AchievementShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our platform has helped students achieve their academic goals and excel in their studies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Achievement Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 h-3"></div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Medal className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">95% of Students Improved Grades</h3>
              <p className="text-muted-foreground text-center">
                Our statistics show that 95% of students using our platform for 3+ months showed significant improvement in their academic performance.
              </p>
              <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                <p className="italic text-sm">
                  "After using ScienceHub for just one term, I went from a C to an A in my biology exams. The interactive rooms and practice quizzes made all the difference."
                </p>
                <p className="text-right font-medium text-sm mt-2">— Sarah, GCSE Student</p>
              </div>
            </div>
          </motion.div>
          
          {/* Achievement Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-3"></div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">42% Higher Information Retention</h3>
              <p className="text-muted-foreground text-center">
                Students using our platform show 42% higher retention of complex scientific concepts compared to traditional learning methods.
              </p>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="italic text-sm">
                  "The visual explanations and interactive models helped me truly understand physics concepts I was struggling with for months. I can now apply these concepts to new problems with confidence."
                </p>
                <p className="text-right font-medium text-sm mt-2">— Michael, A-Level Student</p>
              </div>
            </div>
          </motion.div>
          
          {/* Achievement Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-400 to-green-500 h-3"></div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <FileCheck className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">98.5% Exam Success Rate</h3>
              <p className="text-muted-foreground text-center">
                Students who completed our exam preparation modules achieved a 98.5% pass rate in their national examinations.
              </p>
              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <p className="italic text-sm">
                  "The practice exams and personalized feedback pinpointed exactly where I needed to improve. I ended up scoring in the top 5% nationally for chemistry."
                </p>
                <p className="text-right font-medium text-sm mt-2">— Priya, University Applicant</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// New Learning Methods section
const LearningMethodsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Modern Learning Methods for Modern Students</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our platform combines cutting-edge educational technology with proven learning methodologies to create an engaging and effective learning experience.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-purple-100 rounded-lg p-3 h-fit">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
                  <p className="text-muted-foreground">
                    Our platform adapts to your individual learning pace and style, focusing more on areas where you need additional help.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 h-fit">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Spaced Repetition</h3>
                  <p className="text-muted-foreground">
                    We use scientifically-proven spaced repetition techniques to help you remember key concepts for longer periods.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-green-100 rounded-lg p-3 h-fit">
                  <Layers className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Micro-Learning</h3>
                  <p className="text-muted-foreground">
                    Complex topics are broken down into digestible micro-lessons that can be completed in just a few minutes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-science-primary">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="text-xl text-gray-400">Learning Demo Video</span>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs border">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Active students now</span>
              </div>
              <div className="text-2xl font-bold">1,247</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <TrustLogos />
      <StatsSection />
      <FeaturesSection />
      <LearningMethodsSection />
      <AchievementShowcase />
      <SubjectsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
