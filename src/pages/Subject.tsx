
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Book,
  Home,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectHeader from "@/components/SubjectHeader";
import ModuleCard from "@/components/ModuleCard";
import RoomCard from "@/components/RoomCard";
import LearningPathCard from "@/components/LearningPathCard";
import { getSubjectData, LearningPath, Module } from "@/lib/demoData";

const LearnPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [activeTab, setActiveTab] = useState("home");

  // Get subject data based on the subjectId
  const subject = getSubjectData(subjectId || "");

  // Get the most recent rooms from all learning paths
  const getRecentRooms = () => {
    const allRooms = [];

    subject.learningPaths.forEach((path) => {
      path.modules.forEach((module) => {
        module.rooms.forEach((room) => {
          // Only add in-progress rooms or randomly select a few completed ones
          if (
            (room.completionPercentage > 0 &&
              room.completionPercentage < 100) ||
            (room.completed && Math.random() > 0.7)
          ) {
            allRooms.push(room);
          }
        });
      });
    });

    // Sort by completion percentage (in-progress first)
    return allRooms
      .sort((a, b) => {
        if (a.completed === b.completed) {
          return b.completionPercentage - a.completionPercentage;
        }
        return a.completed ? 1 : -1;
      })
      .slice(0, 4); // Take most recent 4
  };

  // Get all modules from all learning paths
  const getAllModules = () => {
    const allModules: Module[] = [];

    subject.learningPaths.forEach((path) => {
      path.modules.forEach((module) => {
        allModules.push(module);
      });
    });

    return allModules;
  };

  // Get all rooms from all learning paths and modules
  const getAllRooms = () => {
    const allRooms = [];

    subject.learningPaths.forEach((path) => {
      path.modules.forEach((module) => {
        module.rooms.forEach((room) => {
          allRooms.push(room);
        });
      });
    });

    return allRooms;
  };

  const recentRooms = getRecentRooms();
  const allModules = getAllModules();
  const allRooms = getAllRooms();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const tabIndicatorVariants = {
    home: { x: 0 },
    "learning-path": { x: "100%" },
    modules: { x: "200%" },
    rooms: { x: "300%" }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col">
        {/* Subject Header */}
        <SubjectHeader subject={subject} />

        {/* Main Content */}
        <div className="flex-1 container px-4 py-8 md:px-6">
          <Tabs 
            defaultValue="home" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="relative mb-8">
              <TabsList className="w-full justify-start overflow-x-auto bg-transparent border-b">
                <TabsTrigger value="home" className="flex items-center gap-2 data-[state=active]:text-science-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-4">
                  <Home className="h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="learning-path"
                  className="flex items-center gap-2 data-[state=active]:text-science-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-4"
                >
                  <BookOpen className="h-4 w-4" />
                  Learning Paths
                </TabsTrigger>
                <TabsTrigger value="modules" className="flex items-center gap-2 data-[state=active]:text-science-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-4">
                  <Book className="h-4 w-4" />
                  Modules
                </TabsTrigger>
                <TabsTrigger value="rooms" className="flex items-center gap-2 data-[state=active]:text-science-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-4">
                  <div className="h-4 w-4">🚪</div>
                  Rooms
                </TabsTrigger>
              </TabsList>
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 w-1/4 bg-science-primary" 
                animate={activeTab} 
                variants={tabIndicatorVariants}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>

            {/* Home Tab Content */}
            <TabsContent value="home">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div 
                  className="lg:col-span-2 space-y-8"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.section variants={itemVariants}>
                    <h2 className="text-2xl font-bold mb-4">
                      Welcome to {subject.title}
                    </h2>
                    <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`${subject.color} p-4 rounded-lg text-3xl`}
                        >
                          {subject.image}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            About this Subject
                          </h3>
                          <p className="text-muted-foreground">
                            {subject.description}
                          </p>
                        </div>
                      </div>
                      <p className="mb-4">
                        This course is designed to help you master the key
                        concepts of {subject.title} through interactive lessons,
                        practice quizzes, and engaging activities. Whether
                        you're preparing for GCSE, A-Level, or just curious
                        about {subject.title}, our comprehensive materials will
                        guide you through your learning journey.
                      </p>
                      <h4 className="font-semibold mb-2">What you'll learn:</h4>
                      <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                          Fundamental concepts and principles of {subject.title}
                        </li>
                        <li>Practical applications and real-world examples</li>
                        <li>Problem-solving techniques and exam strategies</li>
                        <li>Advanced topics for deeper understanding</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section variants={itemVariants}>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">
                        Continue Learning
                      </h2>
                      <Link 
                        to="#rooms"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("rooms");
                        }} 
                        className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                      >
                        View all rooms
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      variants={containerVariants}
                    >
                      {recentRooms.map((room, index) => (
                        <motion.div
                          key={room.id}
                          variants={itemVariants}
                          custom={index}
                        >
                          <RoomCard
                            room={room}
                            subject={subjectId || ""}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.section>

                  <motion.section variants={itemVariants}>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">
                        Your Learning Paths
                      </h2>
                      <Link 
                        to="#learning-path"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("learning-path");
                        }} 
                        className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                      >
                        View all learning paths
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <motion.div 
                      className="grid grid-cols-1 gap-4"
                      variants={containerVariants}
                    >
                      {subject.learningPaths.slice(0, 2).map((learningPath, index) => (
                        <motion.div
                          key={learningPath.id}
                          variants={itemVariants}
                          custom={index}
                        >
                          <LearningPathCard
                            key={learningPath.id}
                            learningPath={learningPath}
                            subject={{
                              color: subject.color,
                              textColor: subject.textColor,
                              border: subject.border,
                            }}
                            subjectId={subjectId || ""}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.section>
                </motion.div>

                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <section className="bg-white p-6 rounded-lg border shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      Your Progress
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Overall completion</span>
                          <span className="text-sm font-medium">
                            {subject.completionPercentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-blue-600`}
                            style={{ width: `0%` }}
                            animate={{ width: `${subject.completionPercentage}%` }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                          ></motion.div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Learning Paths Status
                        </h4>
                        <ul className="space-y-2">
                          {subject.learningPaths.map((path) => (
                            <li
                              key={path.id}
                              className="flex items-center gap-2"
                            >
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  path.status === "completed"
                                    ? "bg-green-500"
                                    : path.status === "in-progress"
                                    ? "bg-amber-500"
                                    : "bg-gray-300"
                                }`}
                              ></div>
                              <span className="text-sm">
                                {path.title} -{" "}
                                <span
                                  className={
                                    path.status === "completed"
                                      ? "text-green-600"
                                      : path.status === "in-progress"
                                      ? "text-amber-600"
                                      : "text-gray-500"
                                  }
                                >
                                  {path.status === "completed"
                                    ? "Complete"
                                    : path.status === "in-progress"
                                    ? "In Progress"
                                    : "Locked"}
                                </span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="bg-white p-6 rounded-lg border shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      Key Resources
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <BookOpen className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              {subject.title} Glossary
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Key terms and definitions
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="bg-purple-100 p-2 rounded-lg">
                            {subject.icon}
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              Formula Sheet
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Important equations and formulas
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="bg-green-100 p-2 rounded-lg">
                            <Book className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              Revision Guide
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Exam preparation tips
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </section>
                </motion.div>
              </div>
            </TabsContent>

            {/* Learning Path Tab Content */}
            <TabsContent value="learning-path">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Learning Paths</h2>
                <p className="text-muted-foreground">
                  Choose a learning path to follow through the curriculum.
                </p>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {subject.learningPaths.map((learningPath, index) => (
                    <motion.div
                      key={learningPath.id}
                      variants={itemVariants}
                      custom={index}
                    >
                      <LearningPathCard
                        learningPath={learningPath}
                        subject={{
                          color: subject.color,
                          textColor: subject.textColor,
                          border: subject.border,
                        }}
                        subjectId={subjectId || ""}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </TabsContent>

            {/* Modules Tab Content */}
            <TabsContent value="modules" className="space-y-6">
              <h2 className="text-2xl font-bold">All Modules</h2>
              <p className="text-muted-foreground">
                Browse all available modules in this subject.
              </p>

              <motion.div 
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {allModules.map((module, index) => (
                  <motion.div
                    key={module.id}
                    variants={itemVariants}
                    custom={index}
                  >
                    <ModuleCard
                      module={module}
                      subject={{
                        color: subject.color,
                        textColor: subject.textColor,
                        border: subject.border,
                      }}
                      subjectId={subjectId || ""}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Rooms Tab Content */}
            <TabsContent value="rooms" className="space-y-6">
              <h2 className="text-2xl font-bold">All Rooms</h2>
              <p className="text-muted-foreground">
                Explore all learning rooms available in this subject.
              </p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {allRooms.map((room, index) => (
                  <motion.div
                    key={room.id}
                    variants={itemVariants}
                    custom={index}
                  >
                    <RoomCard
                      room={room}
                      subject={subjectId || ""}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearnPage;
