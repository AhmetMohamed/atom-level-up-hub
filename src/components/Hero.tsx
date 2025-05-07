
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
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute top-1/4 left-1/2 w-48 h-48 bg-green-200 rounded-full filter blur-3xl opacity-10 -z-10"></div>
      
      {/* Animated pattern overlays */}
      <div className="absolute inset-0 overflow-hidden opacity-10 -z-5">
        <div className="absolute top-0 left-0 w-full h-full 
                     bg-[radial-gradient(circle_400px_at_70%_50%,rgba(100,100,255,0.4),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
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
              className="inline-flex items-center rounded-full border px-4 py-1.5 bg-white shadow-sm"
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
                className="h-14 px-8 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <Link to="/signup">
                  <span>Start Free Trial</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-14 px-8 text-base font-medium border-gray-300 hover:bg-gray-50"
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
                  className="bg-white shadow-sm border border-gray-100 rounded-full px-4 py-2 text-sm flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
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
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Your Learning Path</h3>
                    <p className="text-gray-500">Personalized for your goals</p>
                  </div>
                  <div className="bg-blue-600 text-white p-2 rounded-lg">
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
                      className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1), duration: 0.5 }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-xl mr-3">
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
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Continue Learning
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Floating achievement card */}
              <motion.div
                className="absolute -right-10 top-5 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
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
                className="absolute -left-12 -bottom-10 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
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
