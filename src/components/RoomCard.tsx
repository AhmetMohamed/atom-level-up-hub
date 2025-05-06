
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getSubjectData } from "@/lib/demoData";

interface Room {
  id: string;
  title: string;
  description: string;
  image?: string;
  level?: string;
  completionPercentage: number;  // Ensure this property exists
  progress?: number;  // Make progress optional
  sections: any[] | number;  // Allow both array and number types
  quizzes?: number;
  module: string;
  duration: string;
  xpPoints: number;
  completed: boolean;
}

interface RoomCardProps {
  room: Room;
  subject: string;
}

const RoomCard = ({ room, subject }: RoomCardProps) => {
  // Define color schemes based on subject
  const getSubjectStyles = (subjectName: string) => {
    const subjectData = getSubjectData(subjectName);
    
    return {
      color: subjectData.color,
      textColor: subjectData.textColor,
      border: subjectData.border,
      buttonColor: room.completed
        ? `${subjectData.color} ${subjectData.textColor} ${subjectData.border}`
        : `bg-${subjectName === "biology" ? "green" : subjectName === "chemistry" ? "blue" : subjectName === "physics" ? "purple" : "red"}-600`,
    };
  };

  const styles = getSubjectStyles(subject);
  
  // Handle sections count (could be array or number)
  const sectionsCount = Array.isArray(room.sections) ? room.sections.length : room.sections;
  const quizzesCount = room.quizzes || 0;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className={`p-4 ${styles.color} border-b ${styles.border}`}>
        <h3 className="font-bold text-lg">{room.title}</h3>
        <p className="text-sm text-muted-foreground">
          {sectionsCount} sections • {quizzesCount} quizzes
        </p>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{room.duration}</span>
          </div>
          <Badge variant="outline" className="badge-xp">
            {room.xpPoints} XP
          </Badge>
        </div>

        <p className="text-sm text-gray-600 mb-4">{room.description}</p>

        <div className="mt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">Completion</span>
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
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link
          to={`/subjects/${subject.toLowerCase()}/rooms/${room.id}`}
          className="w-full"
        >
          <Button
            variant={room.completed ? "outline" : "default"}
            className={`w-full ${
              !room.completed
                ? subject === "biology"
                  ? "bg-green-600"
                  : subject === "chemistry"
                  ? "bg-blue-600"
                  : subject === "physics"
                  ? "bg-purple-600"
                  : "bg-red-600"
                : ""
            }`}
          >
            {room.completed ? "Review Room" : "Start Room"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
