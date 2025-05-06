
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModuleCard from "@/components/ModuleCard";
import { getSubjectData, getLearningPathById } from "@/lib/demoData";

const LearningPathDetail = () => {
  const { subjectId, pathId } = useParams<{ subjectId: string; pathId: string }>();
  
  const subject = getSubjectData(subjectId || "");
  const learningPath = getLearningPathById(subjectId || "", pathId || "");
  
  if (!learningPath) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container px-4 py-8 flex-1">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Learning Path Not Found</h1>
            <p className="text-muted-foreground mb-6">The learning path you're looking for doesn't exist or hasn't been created yet.</p>
            <Link to={`/subjects/${subjectId}`}>
              <Button>Back to Subject</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const subjectStyles = {
    color: subject.color,
    textColor: subject.textColor,
    border: subject.border,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className={`w-full ${subject.color} py-8`}>
          <div className="container px-4 max-w-4xl mx-auto">
            <Link to={`/subjects/${subjectId}`} className="inline-flex items-center mb-4 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {subject.title}
            </Link>
            
            <div className="mb-4">
              <h1 className={`text-3xl font-bold ${subject.textColor} mb-2`}>{learningPath.title}</h1>
              <p className="text-muted-foreground">{learningPath.description}</p>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Level: {learningPath.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Completion</span>
                <span className={`font-medium ${subject.textColor}`}>{learningPath.completionPercentage}%</span>
              </div>
            </div>
            <div className="w-full bg-white/50 rounded-full h-2 mb-4">
              <div 
                className={`h-2 rounded-full bg-science-primary`} 
                style={{ width: `${learningPath.completionPercentage}%` }}
              />
            </div>
          </div>
        </div>
        
        <div className="container px-4 py-8 max-w-4xl mx-auto">
          <section>
            <h2 className="text-2xl font-bold mb-6">Modules in this Learning Path</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningPath.modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  subject={subjectStyles}
                  subjectId={subjectId || ""}
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

export default LearningPathDetail;
