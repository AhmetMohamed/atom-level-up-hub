
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectsSection from "@/components/SubjectsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import TrustLogos from "@/components/TrustLogos";
import { motion } from "framer-motion";
import HeroSimple from "@/components/HeroSimple";
import { Award, BookOpen, Brain, FileCheck, Medal, Sparkles } from "lucide-react";

// Interactive stats section with countup animation
const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-science-primary to-science-secondary text-white">
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
            <p className="text-blue-50">Learning Rooms</p>
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
            <p className="text-blue-50">Active Students</p>
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
            <p className="text-blue-50">Exam Pass Rate</p>
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
            <p className="text-blue-50">Student Satisfaction</p>
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
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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

// New Features Section with more modern design
const FeatureCardsSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Structured Learning Paths",
      description: "Follow expert-crafted pathways tailored to your educational level and goals, from GCSE to A-Level and beyond.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Interactive Challenges",
      description: "Test your knowledge with engaging quizzes and challenges that adapt to your learning progress.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: "Personalized Learning",
      description: "Receive custom recommendations based on your performance and learning style.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "Comprehensive Resources",
      description: "Access a rich library of study materials, practice questions, and visual guides to enhance your learning.",
      color: "from-amber-500 to-amber-700"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-science-primary to-science-secondary bg-clip-text text-transparent">
            Transform How You Learn Science
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our innovative approach to science education that makes complex concepts accessible and engaging
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              <div className={`bg-gradient-to-r ${feature.color} p-5`}>
                <div className="mb-3 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              </div>
              <div className="bg-white p-6">
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <Header />
      <HeroSimple />
      <TrustLogos />
      <StatsSection />
      <SubjectsSection />
      <AchievementShowcase />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
