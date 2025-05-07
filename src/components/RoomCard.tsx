
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Award, BookOpen } from "lucide-react";

// Updated Room interface with both progress and completionPercentage
export interface Room {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  level?: string;
  duration?: string;
  xpPoints?: number;
  progress?: number;
  completed?: boolean;
  completionPercentage?: number;
  sections?: any[];
  status?: string;
}

interface RoomCardProps {
  room: Room;
  subject: string;
}

const RoomCard = ({ room, subject }: RoomCardProps) => {
  // Use either completionPercentage or progress, with fallback
  const progressValue = room.completionPercentage !== undefined 
    ? room.completionPercentage 
    : (room.progress !== undefined ? room.progress : 0);
  
  const isCompleted = room.completed || progressValue === 100;

  return (
    <Link to={`/subjects/${subject}/rooms/${room.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 h-32 flex items-center justify-center">
            <div className="text-4xl">{room.thumbnail || "🚪"}</div>
          </div>
          {isCompleted && (
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                Completed
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{room.title}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {room.description}
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              {room.duration && (
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{room.duration}</span>
                </div>
              )}
            </div>
            {room.xpPoints && (
              <div className="flex items-center gap-1 text-amber-600 font-medium">
                <Award className="h-4 w-4" />
                <span>{room.xpPoints} XP</span>
              </div>
            )}
          </div>
          
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  isCompleted ? "bg-green-500" : "bg-blue-600"
                }`}
                style={{ width: `${progressValue}%` }}
              ></div>
            </div>
            <div className="text-xs text-right mt-1 text-muted-foreground">
              {progressValue}% complete
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RoomCard;
