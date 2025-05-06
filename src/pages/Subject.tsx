
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Book,
  Home,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectHeader from "@/components/SubjectHeader";
import ModuleCard from "@/components/ModuleCard";
import RoomCard from "@/components/RoomCard";
import LearningPathCard from "@/components/LearningPathCard";
import { getSubjectData, LearningPath, Module } from "@/lib/demoData";

const Subject = () => {
  const { subjectId } = useParams<{ subjectId: string }>();

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

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col">
        {/* Subject Header */}
        <SubjectHeader subject={subject} />

        {/* Main Content */}
        <div className="flex-1 container px-4 py-8 md:px-6">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="w-full justify-start mb-8 overflow-x-auto">
              <TabsTrigger value="home" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </TabsTrigger>
              <TabsTrigger
                value="learning-path"
                className="flex items-center gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Learning Paths
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
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-4">
                      Continue Learning
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recentRooms.map((room) => (
                        <RoomCard
                          key={room.id}
                          room={room}
                          subject={subjectId || ""}
                        />
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-4">
                      Your Learning Paths
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      {subject.learningPaths.slice(0, 2).map((learningPath) => (
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
                      ))}
                      <div className="mt-2">
                        <Link
                          to="#learning-path"
                          className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('[data-value="learning-path"]')?.click();
                          }}
                        >
                          View all learning paths
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
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
                </div>
              </div>
            </TabsContent>

            {/* Learning Path Tab Content */}
            <TabsContent value="learning-path">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Learning Paths</h2>
                <p className="text-muted-foreground">
                  Choose a learning path to follow through the curriculum.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subject.learningPaths.map((learningPath) => (
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
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Modules Tab Content */}
            <TabsContent value="modules" className="space-y-6">
              <h2 className="text-2xl font-bold">All Modules</h2>
              <p className="text-muted-foreground">
                Browse all available modules in this subject.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    subject={{
                      color: subject.color,
                      textColor: subject.textColor,
                      border: subject.border,
                    }}
                    subjectId={subjectId || ""}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Rooms Tab Content */}
            <TabsContent value="rooms" className="space-y-6">
              <h2 className="text-2xl font-bold">All Rooms</h2>
              <p className="text-muted-foreground">
                Explore all learning rooms available in this subject.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allRooms.map((room) => (
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
