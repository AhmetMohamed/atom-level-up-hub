
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { getSubjectData, getLearningPathById, getModuleById } from "@/lib/demoData";

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
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Module Not Found</h1>
            <p className="text-muted-foreground mb-6">The module you're looking for doesn't exist or hasn't been created yet.</p>
            <Link to={`/subjects/${subjectId}`}>
              <Button>Back to Subject</Button>
            </Link>
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
              {module.rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  subject={subjectId || ""}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModuleDetail;
