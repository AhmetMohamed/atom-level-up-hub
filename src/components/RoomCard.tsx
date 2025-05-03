
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Room {
  id: string;
  title: string;
  module: string;
  duration: string;
  xpPoints: number;
  completed: boolean;
}

interface Subject {
  color: string;
  textColor: string;
  border: string;
}

interface RoomCardProps {
  room: Room;
  subject: Subject;
  subjectId: string;
}

const RoomCard = ({ room, subject, subjectId }: RoomCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className={`p-4 ${subject.color} border-b ${subject.border}`}>
        <h3 className="font-bold text-lg">{room.title}</h3>
        <p className="text-sm text-muted-foreground">Part of: {room.module}</p>
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
        
        <div className="mt-2">
          {room.completed ? (
            <Badge className="bg-green-100 text-green-800 border-green-200 w-full flex justify-center py-1">
              Completed
            </Badge>
          ) : (
            <Badge className="bg-amber-100 text-amber-800 border-amber-200 w-full flex justify-center py-1">
              Not Started
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/subjects/${subjectId}/rooms/${room.id}`} className="w-full">
          <Button variant={room.completed ? "outline" : "default"} className="w-full">
            {room.completed ? "Review Room" : "Start Room"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
