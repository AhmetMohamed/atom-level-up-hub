
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { LearningPath } from "@/lib/demoData";

interface LearningPathCardProps {
  learningPath: LearningPath;
  subject: {
    color: string;
    textColor: string;
    border: string;
  };
  subjectId: string;
}

const LearningPathCard = ({ learningPath, subject, subjectId }: LearningPathCardProps) => {
  // Count total modules and completed modules
  const totalModules = learningPath.modules.length;
  const completedModules = learningPath.modules.filter(module => 
    module.progress === 100
  ).length;
  
  // Determine status color and text
  const getStatusInfo = () => {
    switch (learningPath.status) {
      case "completed":
        return { 
          bgColor: "bg-green-100", 
          textColor: "text-green-800", 
          borderColor: "border-green-200",
          text: "Completed"
        };
      case "in-progress":
        return { 
          bgColor: "bg-amber-100", 
          textColor: "text-amber-800", 
          borderColor: "border-amber-200",
          text: "In Progress"
        };
      case "locked":
        return { 
          bgColor: "bg-gray-100", 
          textColor: "text-gray-800", 
          borderColor: "border-gray-200",
          text: "Locked"
        };
      default:
        return { 
          bgColor: "bg-gray-100", 
          textColor: "text-gray-800", 
          borderColor: "border-gray-200",
          text: "Not Started"
        };
    }
  };

  const statusInfo = getStatusInfo();
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className={`${subject.color}`}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className={`text-xl font-bold ${subject.textColor} mb-1`}>{learningPath.title}</h3>
            <p className="text-muted-foreground">{learningPath.description}</p>
          </div>
          <Badge variant="outline" className={`${subject.border} ${subject.color} ${subject.textColor}`}>
            {learningPath.level}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-sm">
            <BookOpen className="h-4 w-4" />
            <span>{totalModules} Modules</span>
          </div>
          <span className="text-sm">{completedModules}/{totalModules} completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className={`h-2 rounded-full ${
              learningPath.completionPercentage === 100 ? "bg-green-500" : 
              learningPath.completionPercentage > 0 ? "bg-blue-600" : "bg-gray-300"
            }`} 
            style={{ width: `${learningPath.completionPercentage}%` }}
          ></div>
        </div>
        
        <Badge 
          variant="outline" 
          className={`${statusInfo.bgColor} ${statusInfo.textColor} ${statusInfo.borderColor}`}
        >
          {statusInfo.text}
        </Badge>
      </CardContent>
      
      <CardFooter>
        <Link 
          to={`/subjects/${subjectId}/learning-paths/${learningPath.id}`} 
          className="w-full"
          aria-disabled={learningPath.status === "locked"}
        >
          <Button 
            className="w-full" 
            disabled={learningPath.status === "locked"}
            variant={learningPath.status === "locked" ? "outline" : "default"}
          >
            {learningPath.status === "completed" && "Review Path"}
            {learningPath.status === "in-progress" && "Continue Learning"}
            {learningPath.status === "locked" && "Locked"}
            {learningPath.status !== "locked" && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LearningPathCard;
