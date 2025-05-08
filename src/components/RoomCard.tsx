
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Award, BookOpen, Check, Lock, FileText } from "lucide-react";

// Updated Room interface with both progress and completionPercentage
export interface Room {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  level?: string;
  duration?: string;
  xpPoints?: number;
  progress: number; // Required property
  completed?: boolean;
  completionPercentage: number; // Required property
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
  const isPremium = room.status === 'premium';
  
  // Determine difficulty level styling
  const getDifficultyColor = (level?: string) => {
    switch(level?.toLowerCase()) {
      case 'easy': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'hard': return 'text-red-600';
      default: return 'text-blue-600';
    }
  };

  const getDifficultyBg = (level?: string) => {
    switch(level?.toLowerCase()) {
      case 'easy': return 'bg-green-100';
      case 'medium': return 'bg-yellow-100';
      case 'hard': return 'bg-red-100';
      default: return 'bg-blue-100';
    }
  };

  return (
    <Link to={`/subjects/${subject}/rooms/${room.id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-slate-200">
        <div className="relative">
          {/* Dark themed header with icon/thumbnail */}
          <div className="bg-slate-900 text-white p-4 flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1 line-clamp-2">{room.title}</h3>
              {room.level && (
                <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyBg(room.level)} ${getDifficultyColor(room.level)}`}>
                  {room.level}
                </div>
              )}
            </div>
            <div className="flex-shrink-0 ml-3">
              {room.thumbnail && room.thumbnail.startsWith('/') ? (
                <img 
                  src={room.thumbnail} 
                  alt={room.title} 
                  className="w-12 h-12 object-cover rounded-lg shadow-lg"
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shadow-lg">
                  <FileText className="w-6 h-6 text-science-primary" />
                </div>
              )}
            </div>
          </div>
          
          {/* Status badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {isCompleted && (
              <Badge variant="outline" className="bg-green-600 text-white border-none shadow-md">
                <Check className="h-3 w-3 mr-1" /> Completed
              </Badge>
            )}
            {isPremium && (
              <Badge variant="outline" className="bg-purple-600 text-white border-none shadow-md">
                <Lock className="h-3 w-3 mr-1" /> Premium
              </Badge>
            )}
          </div>
        </div>
        
        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {room.description}
          </p>
          
          <div className="flex items-center justify-between text-sm mb-3">
            {room.duration && (
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>{room.duration}</span>
              </div>
            )}
            {room.xpPoints && (
              <div className="flex items-center gap-1 text-amber-600 font-medium">
                <Award className="h-4 w-4" />
                <span>{room.xpPoints} XP</span>
              </div>
            )}
          </div>
          
          <div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  isCompleted ? "bg-green-500" : "bg-science-primary"
                }`}
                style={{ width: `${progressValue}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
              <span>{progressValue}% complete</span>
              <span className="text-science-primary font-medium">
                {isCompleted ? "Review" : progressValue > 0 ? "Continue" : "Start"}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RoomCard;
