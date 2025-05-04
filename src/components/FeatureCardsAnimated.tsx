
import React from "react";
import {
  Book,
  Trophy,
  File,
  Clock,
  Star,
  Users,
  CheckCircle,
  Microscope,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";

const FeatureCardsAnimated = () => {
  const features = [
    {
      title: "Interactive Learning",
      description:
        "Engage with interactive lessons and simulations to solidify your understanding of complex science concepts.",
      icon: <Book className="h-8 w-8" />,
      color: "bg-blue-50 text-blue-600 border-blue-100",
      delay: 0.1,
    },
    {
      title: "Practice Quizzes",
      description:
        "Test your knowledge with practice quizzes tailored to different learning levels and topics.",
      icon: <CheckCircle className="h-8 w-8" />,
      color: "bg-green-50 text-green-600 border-green-100",
      delay: 0.2,
    },
    {
      title: "Exam Challenges",
      description:
        "Challenge yourself with timed exams that simulate real test conditions for GCSE and A-Level.",
      icon: <Clock className="h-8 w-8" />,
      color: "bg-amber-50 text-amber-600 border-amber-100",
      delay: 0.3,
    },
    {
      title: "Biology Focus",
      description:
        "Comprehensive biology lessons covering cells, genetics, ecosystems, and human physiology.",
      icon: <Microscope className="h-8 w-8" />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      delay: 0.4,
    },
    {
      title: "Chemistry Excellence",
      description:
        "Master chemical reactions, atomic structure, and organic chemistry through guided lessons.",
      icon: <File className="h-8 w-8" />,
      color: "bg-purple-50 text-purple-600 border-purple-100",
      delay: 0.5,
    },
    {
      title: "Physics Mastery",
      description:
        "Understand the laws of physics through clear explanations and practical examples.",
      icon: <Star className="h-8 w-8" />,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      delay: 0.6,
    },
    {
      title: "Math Support",
      description:
        "Strengthen your mathematical skills essential for success in all science disciplines.",
      icon: <Calculator className="h-8 w-8" />,
      color: "bg-red-50 text-red-600 border-red-100",
      delay: 0.7,
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with detailed progress tracking and performance analytics.",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-yellow-50 text-yellow-600 border-yellow-100",
      delay: 0.8,
    },
    {
      title: "Learning Community",
      description:
        "Join a community of learners to collaborate, compete, and celebrate achievements together.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-cyan-50 text-cyan-600 border-cyan-100",
      delay: 0.9,
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundImage: "linear-gradient(to right, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Your Scientific Potential
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our comprehensive set of features designed to help you excel
            in your science education journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl overflow-hidden border border-slate-700/50 backdrop-blur-sm bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300"
              custom={feature.delay}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="p-6">
                <div
                  className={`inline-flex p-4 rounded-lg ${feature.color} mb-5`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsAnimated;
