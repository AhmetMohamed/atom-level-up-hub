
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, Check } from 'lucide-react';

const ModernHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  const controls = useAnimation();
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 2, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 3 }
      });
    };
    
    sequence();
  }, [controls]);

  const features = [
    "Interactive learning paths tailored to your goals",
    "Expert-crafted content for all educational levels",
    "Practice questions with instant feedback",
    "Track your progress with detailed analytics"
  ];

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute top-32 -left-24 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40 -z-10"></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-[20%] w-16 h-16 rounded-lg bg-green-100 shadow-lg hidden lg:flex items-center justify-center"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <span className="text-3xl">🧬</span>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-[15%] w-20 h-20 rounded-full bg-blue-100 shadow-lg hidden lg:flex items-center justify-center"
        animate={{ 
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <span className="text-3xl">⚛️</span>
      </motion.div>
      
      <motion.div 
        className="absolute top-40 left-[20%] w-12 h-12 rounded-lg bg-amber-100 shadow-lg rotate-12 hidden lg:flex items-center justify-center"
        animate={{ 
          y: [0, 15, 0],
          rotate: [12, 0, 12]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <span className="text-2xl">🔬</span>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-[20%] w-14 h-14 rounded-lg bg-purple-100 shadow-lg -rotate-6 hidden lg:flex items-center justify-center"
        animate={{ 
          y: [0, -15, 0],
          rotate: [-6, 0, -6]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <span className="text-2xl">📊</span>
      </motion.div>

      {/* Main hero content */}
      <div className="container relative px-4 min-h-[90vh] flex flex-col items-center justify-center py-20 md:py-32">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          style={{ y, opacity, scale }}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-science-primary to-violet-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            Master Science Through Interactive Learning
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            From foundational concepts to advanced topics, unlock your potential with personalized learning paths designed by expert educators.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut"
            }}
          >
            <Button asChild size="lg" className="bg-science-primary hover:bg-science-primary/90 text-base">
              <Link to="/signup">
                Start Learning Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/learn/biology">
                <BookOpen className="mr-2 h-4 w-4" /> Explore Subjects
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut"
            }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 1 + (i * 0.2),
                  ease: "easeOut"
                }}
              >
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-green-600" />
                </div>
                <p className="text-sm text-muted-foreground text-left">{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 8, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg className="w-6 h-6 text-muted-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernHero;
