
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Module } from "@/lib/demoData";

interface ModuleCardProps {
  module: Module;
  subject: {
    color: string;
    textColor: string;
    border: string;
  };
  subjectId: string;
  pathId?: string;
}

const ModuleCard = ({ module, subject, subjectId, pathId }: ModuleCardProps) => {
  const completedRooms = module.rooms.filter(room => room.completed).length;
  const totalRooms = module.rooms.length;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className={`${subject.color}`}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className={`text-xl font-bold ${subject.textColor} mb-1`}>{module.title}</h3>
            <p className="text-muted-foreground">{module.description}</p>
          </div>
          <Badge variant="outline" className={`${subject.border} ${subject.color}`}>
            {module.difficulty}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-sm">
            <BookOpen className="h-4 w-4" />
            <span>{totalRooms} Rooms</span>
          </div>
          <span className="text-sm">{completedRooms}/{totalRooms} completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className={`h-2 rounded-full ${
              module.progress === 100 ? "bg-green-500" : 
              module.progress > 0 ? "bg-blue-600" : "bg-gray-300"
            }`} 
            style={{ width: `${module.progress}%` }}
          ></div>
        </div>
        
        <div className="mt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="rooms">
              <AccordionTrigger className="py-2 text-sm font-medium">
                View Rooms
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 py-2">
                  {module.rooms.map((room) => (
                    <li key={room.id} className="border rounded-lg p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{room.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <span>{room.duration}</span>
                            <span className="badge-xp">{room.xpPoints} XP</span>
                          </div>
                        </div>
                        {room.completed ? (
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                            Completed
                          </Badge>
                        ) : room.completionPercentage > 0 ? (
                          <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                            In Progress
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                            Not Started
                          </Badge>
                        )}
                      </div>
                      <Link to={`/subjects/${subjectId}/rooms/${room.id}`}>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          {room.completed ? "Review" : room.completionPercentage > 0 ? "Continue" : "Start"} Room
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
      
      <CardFooter>
        {/* Use appropriate path for modules navigation */}
        {pathId ? (
          <Link to={`/subjects/${subjectId}/learning-paths/${pathId}/modules/${module.id}`} className="w-full">
            <Button className="w-full">
              {module.progress > 0 ? "Continue Module" : "Start Module"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Link to={`/subjects/${subjectId}/learning-paths/discover/modules/${module.id}`} className="w-full">
            <Button className="w-full">
              {module.progress > 0 ? "Continue Module" : "Start Module"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ModuleCard;
