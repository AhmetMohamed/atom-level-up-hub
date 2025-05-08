
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Star,
  Award,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Play,
  Lightbulb,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50 to-white -z-10"></div>
      
      {/* Animated blob backgrounds */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-purple-300 rounded-full opacity-20 blur-[8rem] -z-5"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-300 rounded-full opacity-20 blur-[6rem] -z-5"></div>
      <div className="absolute top-1/2 left-1/4 w-[25rem] h-[25rem] bg-teal-300 rounded-full opacity-10 blur-[5rem] -z-5"></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-32 right-[20%] w-20 h-20 rounded-xl -z-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-full h-full bg-white/40 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 flex items-center justify-center rotate-6">
          <GraduationCap className="w-10 h-10 text-indigo-600" />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-[15%] w-16 h-16 -z-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="w-full h-full bg-white/40 backdrop-blur-lg rounded-full shadow-lg border border-white/20 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-blue-600" />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute top-40 left-[20%] w-24 h-24 -z-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="w-full h-full bg-white/40 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 flex items-center justify-center -rotate-12">
          <Sparkles className="w-12 h-12 text-amber-600" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content - Text section */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow text */}
            <motion.div 
              className="inline-flex items-center rounded-full px-4 py-1.5 bg-white/60 backdrop-blur-md shadow-sm border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-xs flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-white" />
                </div>
                Unlock your learning potential with interactive education
              </span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Master
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent px-2">
                Science
              </span>
              in a New Way
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              className="text-xl text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Comprehensive lessons, hands-on experiments, and interactive quizzes designed to help you excel in all science subjects.
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button 
                className="h-14 px-8 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border border-blue-400/20 shadow-lg shadow-blue-500/20"
                asChild
              >
                <Link to="/signup">
                  <span>Start Free Trial</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-14 px-8 text-base font-medium border-gray-300 bg-white/60 backdrop-blur-md hover:bg-gray-50"
                asChild
              >
                <Link to="/subjects" className="flex items-center">
                  <Play className="mr-2 h-5 w-5 fill-blue-600 text-white" />
                  <span>Watch Demo</span>
                </Link>
              </Button>
            </motion.div>
            
            {/* Feature pills */}
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {["AI Learning Path", "Expert Tutors", "Interactive Tests", "STEM Focus"].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="bg-white/60 backdrop-blur-md shadow-sm border border-white/20 rounded-full px-4 py-2 text-sm flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right content - Visual elements */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-lg">
              {/* Main card */}
              <motion.div 
                className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/30"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Your Learning Path</h3>
                    <p className="text-gray-500">Personalized for your goals</p>
                  </div>
                  <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg shadow-blue-500/30">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Module progress items */}
                  {[
                    { title: "Cell Biology", progress: 85, icon: "🧬" },
                    { title: "Chemical Reactions", progress: 60, icon: "⚗️" },
                    { title: "Quantum Physics", progress: 35, icon: "⚛️" }
                  ].map((module, i) => (
                    <motion.div 
                      key={i} 
                      className="bg-white/80 rounded-lg p-4 flex items-center justify-between backdrop-blur-sm border border-white/40"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1), duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-xl mr-3 shadow-sm">
                          {module.icon}
                        </div>
                        <div>
                          <p className="font-medium">{module.title}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                              <div 
                                className="h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                                style={{ width: `${module.progress}%` }}
                              />
                            </div>
                            <span>{module.progress}%</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="rounded-full p-0 w-8 h-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-blue-500/20">
                    Continue Learning
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Floating achievement card */}
              <motion.div
                className="absolute -right-10 top-5 bg-white/60 backdrop-blur-xl rounded-lg shadow-lg p-4 border border-white/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Achievement Earned!</p>
                    <p className="text-xs text-gray-500">Perfect Score Streak</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating stats card */}
              <motion.div
                className="absolute -left-12 -bottom-10 bg-white/60 backdrop-blur-xl rounded-lg shadow-lg p-4 border border-white/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Weekly Progress</p>
                    <p className="text-xs text-green-600 font-semibold">+28% from last week</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
