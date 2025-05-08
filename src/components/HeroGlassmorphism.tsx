
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles, BookOpen, Award, Zap } from "lucide-react";

const HeroGlassmorphism = () => {
  const controls = useAnimation();
  
  // Particles animation
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }));

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-science-primary/5 via-blue-50 to-white -z-10"></div>
      
      {/* Animated blobs */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-science-primary/10 blur-[8rem] -z-5 animate-[pulse_15s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-blue-300/10 blur-[7rem] -z-5 animate-[pulse_20s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute top-1/3 right-1/3 w-[25rem] h-[25rem] rounded-full bg-science-secondary/5 blur-[6rem] -z-5 animate-[pulse_18s_ease-in-out_infinite_1s]"></div>
      
      {/* Animated particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm z-0"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content - Text section */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            {/* Eyebrow text */}
            <motion.div 
              className="inline-flex items-center rounded-full px-4 py-1.5 bg-white/60 backdrop-blur-md shadow-sm border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-xs flex items-center gap-1.5 font-semibold text-science-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Unlock your scientific potential
              </span>
            </motion.div>
            
            {/* Main heading with animated gradient text */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Learn <span className="relative">
                <span className="bg-gradient-to-r from-science-primary via-purple-500 to-science-secondary bg-clip-text text-transparent animate-gradient-x">
                  Science
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-science-primary to-science-secondary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span> Through
              <br />
              <span className="text-science-primary">Interactive</span> Experience
            </motion.h1>
            
            {/* Subheading with glassmorphism */}
            <motion.div 
              className="bg-white/40 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/30 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-lg text-gray-700">
                Immerse yourself in our interactive learning platform designed by top educators and scientists. 
                Master complex concepts through engaging visualizations and hands-on experiments.
              </p>
            </motion.div>
            
            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button 
                className="h-14 px-8 text-base font-medium bg-gradient-to-r from-science-primary to-science-secondary hover:opacity-90 border border-science-primary/20 shadow-lg shadow-science-primary/20"
                asChild
              >
                <Link to="/signup">
                  <span>Start Learning Now</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-14 px-8 text-base font-medium border-science-primary/30 bg-white/60 backdrop-blur-md hover:bg-white/80"
                asChild
              >
                <Link to="/subjects" className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-science-primary" />
                  <span>Explore Subjects</span>
                </Link>
              </Button>
            </motion.div>
            
            {/* Feature pills with glassmorphism */}
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                { text: "Interactive Learning", icon: <Zap className="h-4 w-4 text-yellow-500" /> },
                { text: "Expert Educators", icon: <Award className="h-4 w-4 text-purple-500" /> },
                { text: "STEM Focus", icon: <Sparkles className="h-4 w-4 text-blue-500" /> }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="bg-white/50 backdrop-blur-md shadow-sm border border-white/30 rounded-full px-4 py-2 text-sm flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <div className="mr-2">{feature.icon}</div>
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right content - Visual elements with glassmorphism */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main glassmorphic card */}
            <div className="relative mx-auto w-full max-w-md">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-science-primary/20 to-science-secondary/20 rounded-2xl blur-xl -z-10"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.6, 0.5],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              <motion.div 
                className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/30"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Biology Fundamentals</h3>
                    <p className="text-gray-600">Cell Structure & Function</p>
                  </div>
                  <div className="bg-science-primary text-white p-2 rounded-lg shadow-lg">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="space-y-5">
                  {/* Interactive lesson preview */}
                  <div className="bg-gradient-to-br from-white/80 to-white/40 rounded-xl p-4 border border-white/50">
                    <h4 className="font-medium mb-3 text-gray-800">Explore the Cell</h4>
                    <div className="relative h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-4xl">🧬</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Interactive 3D model</span>
                      <span className="text-science-primary font-medium">Explore →</span>
                    </div>
                  </div>
                  
                  {/* Progress section */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-700">Your Progress</div>
                      <div className="text-sm font-medium text-gray-700">68%</div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 rounded-full bg-gradient-to-r from-science-primary to-science-secondary" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                  
                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className="text-xs text-gray-600">Completed</p>
                      <p className="font-bold text-science-primary">12/18</p>
                      <p className="text-xs">lessons</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className="text-xs text-gray-600">Earned</p>
                      <p className="font-bold text-amber-500">350</p>
                      <p className="text-xs">XP points</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className="text-xs text-gray-600">Next Quiz</p>
                      <p className="font-bold text-green-500">Ready</p>
                      <p className="text-xs">to start</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-science-primary to-science-secondary hover:opacity-90 text-white">
                    Continue Learning
                  </Button>
                </div>
              </motion.div>
              
              {/* Floating achievement card */}
              <motion.div
                className="absolute -right-10 top-10 bg-white/70 backdrop-blur-xl rounded-lg shadow-lg p-3 border border-white/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Quiz Complete!</p>
                    <p className="text-xs text-gray-500">+50 XP Earned</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating badge card */}
              <motion.div
                className="absolute -left-5 -bottom-5 bg-white/70 backdrop-blur-xl rounded-lg shadow-lg p-3 border border-white/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shadow-sm">
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">5-Day Streak!</p>
                    <p className="text-xs text-gray-500">Keep going 🔥</p>
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

export default HeroGlassmorphism;
