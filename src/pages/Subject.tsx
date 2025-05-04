
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Book,
  Home,
  Microscope,
  FlaskConical,
  Calculator,
  Dna,
  File,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Define proper types for Room and Module
interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  progress: number;
  status: string;
  difficulty?: string;
  rooms?: any[];
}

interface Room {
  id: string;
  title: string;
  description: string;
  image: string;
  level: string;
  completionPercentage: number;
  sections: number;
  quizzes: number;
  module: string;
  duration: string;
  xpPoints: number;
  completed: boolean;
}

interface SubjectData {
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  completionPercentage: number;
  icon: JSX.Element;
  border?: string;
}

const ModuleCard = ({ module }: { module: any }) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className="p-5">
        <h3 className="text-lg font-medium mb-2">{module.title}</h3>
        <p className="text-gray-600 mb-4">{module.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{module.duration}</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {module.level}
          </span>
        </div>
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            <span className="text-xs">Progress</span>
            <span className="text-xs font-medium">{module.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${module.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="border-t p-4 bg-gray-50">
        <button
          className={`w-full py-2 px-4 rounded-md ${
            module.status === "completed"
              ? "bg-green-500 text-white"
              : module.status === "in-progress"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {module.status === "completed"
            ? "Review"
            : module.status === "in-progress"
            ? "Continue"
            : "Start"}
        </button>
      </div>
    </div>
  );
};

const RoomCard = ({ room, subject }: { room: any; subject: string }) => {
  const subjectData = getSubjectData(subject);
  
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className={`p-5 ${subjectData.color} border-b ${subjectData.border || ""}`}>
        <h3 className="font-bold text-lg">{room.title}</h3>
        <p className="text-sm text-muted-foreground">
          {room.sections} sections • {room.quizzes} quizzes
        </p>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
            {room.level}
          </span>
        </div>
        <div className="mt-3">
          <div className="flex justify-between mb-1">
            <span className="text-xs">Completion</span>
            <span className="text-xs font-medium">
              {room.completionPercentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                room.completionPercentage === 100
                  ? "bg-green-500"
                  : room.completionPercentage > 0
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
              style={{ width: `${room.completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="border-t p-4 bg-gray-50">
        <button
          className={`w-full py-2 px-4 rounded-md ${
            room.completionPercentage === 100
              ? "bg-green-100 text-green-800 border border-green-200"
              : room.completionPercentage > 0
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          {room.completionPercentage === 100
            ? "Review Room"
            : room.completionPercentage > 0
            ? "Continue Room"
            : "Start Room"}
        </button>
      </div>
    </div>
  );
};

const SubjectHeader = ({ subject }: { subject: SubjectData }) => {
  return (
    <div className={`w-full ${subject.color}`}>
      <div className="container px-4 py-8 md:px-6">
        <a href="/dashboard" className="inline-flex items-center mb-4 text-muted-foreground hover:text-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Dashboard
        </a>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{subject.image}</div>
            <div>
              <h1 className={`text-3xl font-bold ${subject.textColor}`}>{subject.title}</h1>
              <p className="text-muted-foreground mt-1 max-w-xl">{subject.description}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Overall completion</span>
              <span className={`font-bold ${subject.textColor}`}>{subject.completionPercentage}%</span>
            </div>
            <div className="w-full md:w-48 bg-white/50 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-blue-600" 
                style={{ width: `${subject.completionPercentage}%` }}
              ></div>
            </div>
            <button className="mt-2 w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Continue Learning</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to get subject data based on subjectId
const getSubjectData = (subjectId: string): SubjectData => {
  switch (subjectId) {
    case "biology":
      return {
        title: "Biology",
        description:
          "Explore the science of life, from cells to ecosystems and evolution.",
        image: "🧬",
        color: "bg-green-100",
        textColor: "text-green-800",
        border: "border-green-200",
        completionPercentage: 45,
        icon: <Dna className="h-5 w-5" />,
      };
    case "chemistry":
      return {
        title: "Chemistry",
        description:
          "Discover the properties and interactions of atoms and molecules.",
        image: "⚗️",
        color: "bg-blue-100",
        textColor: "text-blue-800",
        border: "border-blue-200",
        completionPercentage: 30,
        icon: <FlaskConical className="h-5 w-5" />,
      };
    case "physics":
      return {
        title: "Physics",
        description:
          "Understand the fundamental laws that govern the universe.",
        image: "⚛️",
        color: "bg-purple-100",
        textColor: "text-purple-800",
        border: "border-purple-200",
        completionPercentage: 20,
        icon: <Microscope className="h-5 w-5" />,
      };
    case "mathematics":
      return {
        title: "Mathematics",
        description:
          "Master mathematical concepts essential for scientific understanding.",
        image: "📊",
        color: "bg-red-100",
        textColor: "text-red-800",
        border: "border-red-200",
        completionPercentage: 55,
        icon: <Calculator className="h-5 w-5" />,
      };
    default:
      return {
        title: "Science Subject",
        description: "Explore this interesting scientific discipline.",
        image: "🔬",
        color: "bg-gray-100",
        textColor: "text-gray-800",
        border: "border-gray-200",
        completionPercentage: 0,
        icon: <BookOpen className="h-5 w-5" />,
      };
  }
};

const Subject = () => {
  const { subjectId } = useParams<{ subjectId: string }>();

  // Get subject data based on the subjectId
  const subject = getSubjectData(subjectId || "");

  // Mock data for modules
  const modules = [
    {
      id: 1,
      title: "Introduction to the Subject",
      description: "Learn the fundamental concepts and principles.",
      duration: "30 min",
      level: "Beginner",
      progress: 100,
      status: "completed",
      difficulty: "Easy",
      rooms: []
    },
    {
      id: 2,
      title: "Key Theories and Applications",
      description:
        "Explore important theories and their real-world applications.",
      duration: "45 min",
      level: "Intermediate",
      progress: 60,
      status: "in-progress",
      difficulty: "Medium",
      rooms: []
    },
    {
      id: 3,
      title: "Advanced Concepts",
      description: "Delve deeper into complex topics and edge cases.",
      duration: "50 min",
      level: "Advanced",
      progress: 0,
      status: "not-started",
      difficulty: "Hard",
      rooms: []
    },
  ];

  // Mock data for rooms
  const rooms = [
    {
      id: "room-1",
      title: "Foundation Concepts",
      description: "Master the core concepts and terminology.",
      image: "public/lovable-uploads/a855077b-a467-48fa-8038-7fcc8f1951c8.png",
      level: "GCSE",
      completionPercentage: 100,
      sections: 4,
      quizzes: 2,
      module: "Introduction",
      duration: "30 min",
      xpPoints: 50,
      completed: true
    },
    {
      id: "room-2",
      title: "Intermediate Principles",
      description: "Build on your foundation with more complex ideas.",
      image: "public/lovable-uploads/a855077b-a467-48fa-8038-7fcc8f1951c8.png",
      level: "GCSE",
      completionPercentage: 45,
      sections: 5,
      quizzes: 3,
      module: "Key Theories",
      duration: "45 min",
      xpPoints: 75,
      completed: false
    },
    {
      id: "room-3",
      title: "Advanced Applications",
      description: "Apply your knowledge to solve complex problems.",
      image: "public/lovable-uploads/a855077b-a467-48fa-8038-7fcc8f1951c8.png",
      level: "A-Level",
      completionPercentage: 0,
      sections: 6,
      quizzes: 4,
      module: "Advanced Topics",
      duration: "60 min",
      xpPoints: 100,
      completed: false
    },
    {
      id: "room-4",
      title: "Exam Preparation",
      description:
        "Get ready for your exams with practice questions and reviews.",
      image: "public/lovable-uploads/a855077b-a467-48fa-8038-7fcc8f1951c8.png",
      level: "A-Level",
      completionPercentage: 0,
      sections: 3,
      quizzes: 5,
      module: "Revision",
      duration: "50 min",
      xpPoints: 85,
      completed: false
    },
  ];

  // Mock data for learning path
  const learningPath = [
    {
      id: "path-1",
      title: "Getting Started",
      modules: [
        "Introduction to " + subject.title,
        "Basic Concepts",
        "Terminology",
      ],
      completionPercentage: 100,
      status: "completed",
    },
    {
      id: "path-2",
      title: "Core Principles",
      modules: ["Key Theories", "Fundamental Laws", "Scientific Method"],
      completionPercentage: 75,
      status: "in-progress",
    },
    {
      id: "path-3",
      title: "Advanced Topics",
      modules: [
        "Complex Systems",
        "Current Research",
        "Practical Applications",
      ],
      completionPercentage: 0,
      status: "locked",
    },
    {
      id: "path-4",
      title: "Exam Preparation",
      modules: ["Practice Questions", "Past Papers", "Revision Techniques"],
      completionPercentage: 0,
      status: "locked",
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col">
        {/* Subject Header */}
        <SubjectHeader subject={subject} />

        {/* Main Content */}
        <div className="flex-1 container px-4 py-8 md:px-6">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="w-full justify-start mb-8">
              <TabsTrigger value="home" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </TabsTrigger>
              <TabsTrigger
                value="learning-path"
                className="flex items-center gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Learning Path
              </TabsTrigger>
              <TabsTrigger value="modules" className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                Modules
              </TabsTrigger>
              <TabsTrigger value="rooms" className="flex items-center gap-2">
                <div className="h-4 w-4">🚪</div>
                Rooms
              </TabsTrigger>
            </TabsList>

            {/* Home Tab Content */}
            <TabsContent value="home">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      Welcome to {subject.title}
                    </h2>
                    <div className="bg-white p-6 rounded-lg border">
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
                        about
                        {subject.title}, our comprehensive materials will guide
                        you through your learning journey.
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
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-4">
                      Continue Learning
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {rooms.slice(0, 2).map((room) => (
                        <RoomCard
                          key={room.id}
                          room={room}
                          subject={subjectId || ""}
                        />
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-8">
                  <section className="bg-white p-6 rounded-lg border">
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
                          <div
                            className={`h-2 rounded-full bg-blue-600`}
                            style={{
                              width: `${subject.completionPercentage}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Topics Covered
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm">
                              Foundation Concepts - Complete
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                            <span className="text-sm">
                              Intermediate Principles - In Progress
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                            <span className="text-sm">
                              Advanced Applications - Not Started
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="bg-white p-6 rounded-lg border">
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
                            <File className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              Subject Glossary
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
                            <File className="h-4 w-4 text-purple-600" />
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
                            <File className="h-4 w-4 text-green-600" />
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
                </div>
              </div>
            </TabsContent>

            {/* Learning Path Tab Content */}
            <TabsContent value="learning-path">
              <div className="space-y-8">
                {learningPath.map((pathItem, index) => (
                  <div
                    key={pathItem.id}
                    className={`border rounded-lg ${
                      pathItem.status === "completed"
                        ? "border-green-200 bg-green-50"
                        : pathItem.status === "in-progress"
                        ? "border-blue-200 bg-blue-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className="p-6 relative">
                      {/* Connection line between items */}
                      {index < learningPath.length - 1 && (
                        <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-gray-300 translate-y-full z-10"></div>
                      )}

                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center ${
                            pathItem.status === "completed"
                              ? "bg-green-100 text-green-600"
                              : pathItem.status === "in-progress"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {pathItem.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <div className="w-full max-w-xs bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  pathItem.status === "completed"
                                    ? "bg-green-500"
                                    : pathItem.status === "in-progress"
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                                }`}
                                style={{
                                  width: `${pathItem.completionPercentage}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">
                              {pathItem.completionPercentage}%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pl-20">
                        <h4 className="font-medium mb-2">Modules included:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {pathItem.modules.map((module, moduleIndex) => (
                            <li
                              key={moduleIndex}
                              className="flex items-center gap-2"
                            >
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  pathItem.status === "completed"
                                    ? "bg-green-500"
                                    : pathItem.status === "in-progress" &&
                                      moduleIndex === 0
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                                }`}
                              ></div>
                              <span className="text-sm">{module}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4">
                          {pathItem.status === "completed" ? (
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Completed
                            </div>
                          ) : pathItem.status === "in-progress" ? (
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                              Continue Learning
                            </button>
                          ) : (
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              Locked - Complete previous modules first
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Modules Tab Content */}
            <TabsContent value="modules" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
              </div>
            </TabsContent>

            {/* Rooms Tab Content */}
            <TabsContent value="rooms" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    subject={subjectId || ""}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subject;
