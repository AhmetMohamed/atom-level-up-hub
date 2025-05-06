import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, AlertCircle, Search, BookOpen, Lightbulb, BookMarked } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { getSubjectData, getLearningPathById, getModuleById } from "@/lib/demoData";

// Define the Room interface to match RoomCard props
interface Room {
  id: string;
  title: string;
  description: string;
  image?: string;
  level?: string;
  completionPercentage: number;
  progress?: number; // Add this to make it optional
  sections: any[] | number;
  quizzes?: number;
  module: string;
  duration: string;
  xpPoints: number;
  completed: boolean;
}

const ModuleDetail = () => {
  const { subjectId, pathId, moduleId } = useParams<{ subjectId: string; pathId: string; moduleId: string }>();
  
  const subject = getSubjectData(subjectId || "");
  const learningPath = getLearningPathById(subjectId || "", pathId || "");
  const module = getModuleById(subjectId || "", pathId || "", moduleId || "");
  
  if (!module) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container px-4 py-8 flex-1">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600">
                <AlertCircle className="h-10 w-10" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Module Not Found</h1>
            <p className="text-muted-foreground text-lg mb-6">
              The module you're looking for doesn't exist or hasn't been created yet.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-medium mb-3">What you can do next:</h2>
              <ul className="space-y-3 text-left mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Search className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-medium">Browse other modules</span>
                    <p className="text-sm text-muted-foreground">Explore other available modules in this subject</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">View learning paths</span>
                    <p className="text-sm text-muted-foreground">Check other learning paths that include different modules</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Lightbulb className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-medium">Check recommended modules</span>
                    <p className="text-sm text-muted-foreground">Discover modules that match your learning level and interests</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <BookMarked className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="font-medium">Take an assessment</span>
                    <p className="text-sm text-muted-foreground">Find out which modules are right for your current knowledge level</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={`/subjects/${subjectId}`}>
                <Button variant="default" size="lg" className="w-full">
                  Back to {subject.title}
                </Button>
              </Link>
              {learningPath && (
                <Link to={`/subjects/${subjectId}/learning-paths/${learningPath.id}`}>
                  <Button variant="outline" size="lg" className="w-full">
                    Back to Learning Path
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className="container px-4 py-6 max-w-4xl mx-auto">
          <Link to={`/subjects/${subjectId}`} className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {subject.title}
          </Link>
          
          <div className="mb-6">
            <div className="flex gap-2 mb-1">
              <Badge variant="outline" className="bg-white">{subject.title}</Badge>
              <Badge variant="outline" className="bg-white">{learningPath?.level || "Module"}</Badge>
              <Badge variant="outline" className="bg-white">{module.difficulty}</Badge>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight mb-2">{module.title}</h1>
            <p className="text-muted-foreground mb-4">{module.description}</p>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className={`h-2 rounded-full ${
                  module.progress === 100 ? "bg-green-500" : 
                  module.progress > 0 ? "bg-blue-600" : "bg-gray-300"
                }`} 
                style={{ width: `${module.progress}%` }}
              />
            </div>
            <div className="text-sm text-right">{module.progress}% complete</div>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rooms in this Module</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {module.rooms.map((roomData) => {
                // Transform roomData to match Room interface if needed
                const room: Room = {
                  ...roomData,
                  // Ensure completionPercentage exists (fallback to progress if not)
                  completionPercentage: roomData.completionPercentage !== undefined ? 
                    roomData.completionPercentage : 
                    roomData.progress || 0,
                  // Include progress if it exists
                  progress: roomData.progress,
                  // Other properties with fallbacks if needed
                  sections: roomData.sections || [],
                };
                
                return (
                  <RoomCard
                    key={room.id}
                    room={room}
                    subject={subjectId || ""}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModuleDetail;
