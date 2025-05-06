
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { demoData } from "@/lib/demoData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Gauge, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Room } from "@/types/room";

const ModuleDetail = () => {
  const { moduleId, subjectId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState<any>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    if (moduleId) {
      let foundModule = null;
      let foundSubjectName = "";

      // Find the module and its subject name
      for (const subject of demoData.subjects) {
        const mod = subject.modules.find(m => m.id === moduleId);
        if (mod) {
          foundModule = mod;
          foundSubjectName = subject.name;
          break;
        }
      }

      if (foundModule) {
        setModule(foundModule);
        setRooms(foundModule.rooms);
        setSubjectName(foundSubjectName);
      }
      
      setLoading(false);
    }
  }, [moduleId]);

  if (loading) {
    return <div className="py-20 text-center">Loading module content...</div>;
  }

  if (!module) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Module Not Found</h2>
        <p className="mb-6">The module you're looking for doesn't exist or has been moved.</p>
        <Button 
          onClick={() => subjectId ? navigate(`/subjects/${subjectId}`) : navigate('/subjects')}
          variant="outline"
        >
          Back to Subject
        </Button>
      </div>
    );
  }

  // Calculate completion stats
  const completedRooms = rooms.filter(room => room.completed).length;
  const completionPercentage = rooms.length > 0 ? Math.round((completedRooms / rooms.length) * 100) : 0;

  return (
    <div className="container py-8 px-4 max-w-4xl mx-auto">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => subjectId ? navigate(`/subjects/${subjectId}`) : navigate('/subjects')}
          className="flex items-center gap-2 mb-4"
        >
          <ArrowLeft size={16} />
          Back to {subjectName || "Subject"}
        </Button>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{module.title}</h1>
            <p className="text-gray-500 mt-2">{module.description}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 w-full md:w-auto">
            <div className="flex items-center justify-between gap-8">
              <div>
                <div className="text-sm text-gray-500 mb-1">Completion</div>
                <div className="text-xl font-bold">{completionPercentage}%</div>
              </div>
              <div className="w-20 h-20 relative">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                  <circle 
                    className="text-gray-200" 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    strokeWidth="10" 
                    stroke="currentColor" 
                    fill="transparent"
                  />
                  <circle 
                    className="text-blue-500" 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    strokeWidth="10" 
                    stroke="currentColor" 
                    fill="transparent" 
                    strokeLinecap="round"
                    strokeDasharray={`${40 * 2 * Math.PI}`}
                    strokeDashoffset={`${40 * 2 * Math.PI * (1 - completionPercentage / 100)}`}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
                  {completedRooms}/{rooms.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Module Rooms</h2>
        <div className="grid gap-4">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card 
                className={`border-l-4 ${
                  room.completed 
                    ? "border-l-green-500" 
                    : index === completedRooms 
                    ? "border-l-blue-500" 
                    : "border-l-gray-200"
                } hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-0">
                  <Link 
                    to={`/rooms/${room.id}${subjectId ? `?subjectId=${subjectId}` : ''}`}
                    className="block p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          room.completed 
                            ? "bg-green-100 text-green-600" 
                            : index === completedRooms 
                            ? "bg-blue-100 text-blue-600" 
                            : "bg-gray-100 text-gray-400"
                        }`}>
                          {room.completed ? (
                            <CheckCircle size={16} />
                          ) : (
                            <span className="text-sm font-medium">{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{room.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{room.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock size={14} />
                          <span>{room.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Gauge size={14} />
                          <span>{room.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
