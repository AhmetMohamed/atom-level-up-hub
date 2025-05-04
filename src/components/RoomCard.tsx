
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Room {
  id: string;
  title: string;
  description: string;
  image?: string;
  level?: string;
  completionPercentage: number;
  sections: number;
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
    switch (subjectName.toLowerCase()) {
      case "biology":
        return {
          color: "bg-green-100",
          textColor: "text-green-800",
          border: "border-green-200",
          buttonColor: room.completed ? "bg-green-100 text-green-800 border-green-200" : "bg-green-600",
        };
      case "chemistry":
        return {
          color: "bg-blue-100",
          textColor: "text-blue-800",
          border: "border-blue-200",
          buttonColor: room.completed ? "bg-blue-100 text-blue-800 border-blue-200" : "bg-blue-600",
        };
      case "physics":
        return {
          color: "bg-purple-100",
          textColor: "text-purple-800",
          border: "border-purple-200",
          buttonColor: room.completed ? "bg-purple-100 text-purple-800 border-purple-200" : "bg-purple-600",
        };
      case "mathematics":
        return {
          color: "bg-red-100",
          textColor: "text-red-800",
          border: "border-red-200",
          buttonColor: room.completed ? "bg-red-100 text-red-800 border-red-200" : "bg-red-600",
        };
      default:
        return {
          color: "bg-gray-100",
          textColor: "text-gray-800",
          border: "border-gray-200",
          buttonColor: room.completed ? "bg-gray-100 text-gray-800 border-gray-200" : "bg-gray-600",
        };
    }
  };

  const styles = getSubjectStyles(subject);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className={`p-4 ${styles.color} border-b ${styles.border}`}>
        <h3 className="font-bold text-lg">{room.title}</h3>
        <p className="text-sm text-muted-foreground">
          {room.sections} sections • {room.quizzes} quizzes
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
        <Link to={`/subjects/${subject.toLowerCase()}/rooms/${room.id}`} className="w-full">
          <Button 
            variant={room.completed ? "outline" : "default"} 
            className={`w-full ${
              !room.completed ? styles.buttonColor : ""
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
