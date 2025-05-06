
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, CheckCircle, Clock, ArrowRight } from "lucide-react";
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

const LearningPathCard = ({
  learningPath,
  subject,
  subjectId,
}: LearningPathCardProps) => {
  const isLocked = learningPath.status === "locked";
  const isCompleted = learningPath.status === "completed";
  const totalModules = learningPath.modules.length;
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 ${isLocked ? "opacity-75" : "hover:shadow-md"}`}>
      <div className={`p-4 ${subject.color} border-b ${subject.border}`}>
        <div className="flex justify-between items-start">
          <h3 className={`font-bold text-lg ${subject.textColor}`}>
            {learningPath.title}
          </h3>
          <Badge variant="outline" className={`${subject.color} ${subject.border}`}>
            {learningPath.level}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {learningPath.description}
        </p>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">{totalModules} Modules</span>
          </div>
          
          {isLocked ? (
            <Badge variant="outline" className="flex items-center gap-1">
              <Lock className="h-3 w-3" />
              Locked
            </Badge>
          ) : isCompleted ? (
            <Badge variant="outline" className="bg-green-100 text-green-600 border-green-200 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Completed
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-blue-100 text-blue-600 border-blue-200">
              In Progress
            </Badge>
          )}
        </div>

        <div className="mt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">Completion</span>
            <span className="text-xs font-medium">
              {learningPath.completionPercentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                isCompleted
                  ? "bg-green-500"
                  : isLocked
                  ? "bg-gray-400"
                  : "bg-blue-600"
              }`}
              style={{ width: `${learningPath.completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {isLocked ? (
          <Button variant="outline" className="w-full" disabled>
            Complete previous path to unlock
            <Lock className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Link
            to={`/subjects/${subjectId}/learning-paths/${learningPath.id}`}
            className="w-full"
          >
            <Button
              variant={isCompleted ? "outline" : "default"}
              className="w-full"
            >
              {isCompleted
                ? "Review Path"
                : learningPath.completionPercentage > 0
                ? "Continue Path"
                : "Start Path"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default LearningPathCard;
