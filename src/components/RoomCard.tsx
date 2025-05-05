
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { getSubjectData } from "@/lib/demoData";

interface Room {
  id: string;
  title: string;
  description: string;
  image?: string;
  level?: string;
  completionPercentage: number;
  sections: any[]; // This can be an array of sections
  quizzes: number;
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
        : subject === "biology" 
          ? "bg-green-600 hover:bg-green-700"
          : subject === "chemistry" 
          ? "bg-blue-600 hover:bg-blue-700" 
          : subject === "physics" 
          ? "bg-purple-600 hover:bg-purple-700" 
          : "bg-red-600 hover:bg-red-700",
    };
  };

  const styles = getSubjectStyles(subject);
  const sectionsCount = Array.isArray(room.sections) ? room.sections.length : 0;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 animate-fade-in">
      <div className={`p-4 ${styles.color} border-b ${styles.border}`}>
        <h3 className={`font-bold text-lg ${styles.textColor}`}>{room.title}</h3>
        <p className={`text-sm ${styles.textColor} opacity-90`}>
          {sectionsCount} {sectionsCount === 1 ? 'section' : 'sections'} • {room.quizzes} {room.quizzes === 1 ? 'quiz' : 'quizzes'}
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

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{room.description}</p>

        <div className="mt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">Completion</span>
            <span className="text-xs font-medium">
              {room.completionPercentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
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
          to={`/subjects/${subject}/rooms/${room.id}`}
          className="w-full"
        >
          <Button
            variant={room.completed ? "outline" : "default"}
            className={`w-full transition-all ${
              !room.completed ? styles.buttonColor : ""
            }`}
          >
            {room.completed ? "Review Room" : room.completionPercentage > 0 ? "Continue Room" : "Start Room"}
            <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
