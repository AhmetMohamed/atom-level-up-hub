import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-futuristic-lab.jpg";

const HeroModern = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-science-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex"
            >
              <div className="bg-gradient-to-r from-science-primary/10 to-purple-500/10 backdrop-blur-sm border border-science-primary/20 rounded-full px-4 py-2 text-sm font-medium text-science-primary">
                🚀 Next-Gen Learning Platform
              </div>
            </motion.div>

            {/* Main Heading with Beautiful Typography */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block text-gray-900">Master</span>
                <motion.span 
                  className="block bg-gradient-to-r from-science-primary via-purple-600 to-science-secondary bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Science
                </motion.span>
                <span className="block text-gray-900">
                  Through
                  <motion.span 
                    className="ml-4 text-science-primary"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    Practice
                  </motion.span>
                </span>
              </motion.h1>
              
              {/* Animated underline */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-science-primary to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </div>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Interactive learning platform with hands-on experiments and real-world applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                size="lg"
                className="h-14 px-8 text-base font-semibold bg-gradient-to-r from-science-primary to-science-secondary hover:shadow-lg hover:scale-[1.02] transition-all duration-200 group"
                asChild
              >
                <Link to="/signup">
                  <span>Start Learning Free</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="h-14 px-8 text-base font-semibold border-2 border-gray-200 hover:border-science-primary/50 hover:bg-science-primary/5 group"
                asChild
              >
                <Link to="/subjects">
                  <Play className="mr-2 h-5 w-5 text-science-primary group-hover:scale-110 transition-transform duration-200" />
                  <span>Watch Demo</span>
                </Link>
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: "⚡", text: "Interactive Labs" },
                { icon: "🎯", text: "Personalized Learning" },
                { icon: "🏆", text: "Achievement System" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 text-sm font-medium shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Hero Image */}
              <motion.div 
                className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={heroImage}
                  alt="Students in futuristic science laboratory"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -bottom-6 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-white/50"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-science-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-science-primary">25K+</p>
                    <p className="text-sm text-gray-600 font-medium">Active Students</p>
                  </div>
                </div>
              </motion.div>

              {/* Pass Rate Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-green-50 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-green-100"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={ { delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    <Trophy className="h-4 w-4 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">98%</span>
                  </div>
                  <p className="text-xs text-green-700 font-medium">Pass Rate</p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-1/4 -right-8 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroModern;