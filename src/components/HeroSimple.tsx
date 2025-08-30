import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-science-education.jpg";

const HeroSimple = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-science-primary/5 via-blue-50 to-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-science-primary/10 blur-[8rem] -z-5 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-blue-300/10 blur-[7rem] -z-5"></div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content - Text section */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main heading */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Master <span className="bg-gradient-to-r from-science-primary to-science-secondary bg-clip-text text-transparent">
                Science
              </span>
              <br />
              Through Practice
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              className="text-xl text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Interactive learning platform with hands-on experiments and real-world applications.
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button 
                size="lg"
                className="h-14 px-8 text-base font-medium bg-gradient-to-r from-science-primary to-science-secondary hover:opacity-90 shadow-lg"
                asChild
              >
                <Link to="/signup">
                  <span>Start Learning Free</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="h-14 px-8 text-base font-medium border-science-primary/30 hover:bg-science-primary/10"
                asChild
              >
                <Link to="/subjects">
                  <PlayCircle className="mr-2 h-5 w-5 text-science-primary" />
                  <span>Watch Demo</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              <motion.img
                src={heroImage}
                alt="Students learning science with interactive technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-science-primary">25K+</p>
                  <p className="text-sm text-gray-600">Active Students</p>
                </div>
              </motion.div>
              
              {/* Floating achievement badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3 border border-white/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-center">
                  <p className="text-lg font-bold text-green-600">98%</p>
                  <p className="text-xs text-gray-600">Pass Rate</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSimple;