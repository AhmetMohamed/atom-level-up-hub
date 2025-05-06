
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { demoData } from "@/lib/demoData";
import { Section } from "@/types/room";

const Room = () => {
  const { roomId, subjectId } = useParams();
  const navigate = useNavigate();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sections, setSections] = useState<Section[]>([]);
  const [room, setRoom] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (roomId) {
      // Find the room from all modules
      const allRooms = demoData.subjects
        .flatMap(subject => subject.modules)
        .flatMap(module => module.rooms);
      
      const foundRoom = allRooms.find(r => r.id === roomId);
      
      if (foundRoom) {
        setRoom(foundRoom);
        
        // Handle different formats of sections (number or array)
        if (Array.isArray(foundRoom.sections)) {
          setSections(foundRoom.sections);
        } else if (typeof foundRoom.sections === 'number') {
          // If sections is a number, create mock sections
          const mockSections = Array.from({ length: foundRoom.sections || 3 }, (_, i) => ({
            id: `section-${i}`,
            title: i === 0 ? "Introduction" : i === 1 ? "Main Content" : "Summary",
            content: i === 0 
              ? `Welcome to ${foundRoom.title}. This room will help you understand the key concepts.` 
              : i === 1 
              ? `The main content for ${foundRoom.title} goes here. We'll explore various aspects of this topic.`
              : `Now you've completed ${foundRoom.title}. Let's summarize what we've learned.`,
            type: "text"
          }));
          setSections(mockSections);
        } else {
          // Default fallback
          setSections([{
            id: "default-section",
            title: "Content",
            content: `Content for ${foundRoom.title}`,
            type: "text"
          }]);
        }
      }
      setLoading(false);
    }
  }, [roomId]);

  if (loading) {
    return <div className="py-20 text-center">Loading room content...</div>;
  }

  if (!room) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Room Not Found</h2>
        <p className="mb-6">The room you're looking for doesn't exist or hasn't been created yet.</p>
        <Button 
          onClick={() => subjectId ? navigate(`/subjects/${subjectId}`) : navigate('/subjects')}
          variant="outline"
        >
          Back to Subject
        </Button>
      </div>
    );
  }

  const goToPreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const goToNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const currentSection = sections[currentSectionIndex];

  return (
    <div className="container py-8 px-4 max-w-4xl mx-auto">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => subjectId ? navigate(`/subjects/${subjectId}`) : navigate('/subjects')}
          className="flex items-center gap-2 mb-4"
        >
          <ArrowLeft size={16} />
          Back to Subject
        </Button>
        
        <h1 className="text-3xl font-bold mb-2">{room.title}</h1>
        <p className="text-gray-500 mb-6">{room.description}</p>
        
        <div className="flex gap-2 mb-6">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {room.difficulty}
          </div>
          <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            {room.duration}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">
              Section {currentSectionIndex + 1} of {sections.length}
            </h3>
            <div className="text-sm text-gray-500">
              {Math.round((currentSectionIndex + 1) / sections.length * 100)}% Complete
            </div>
          </div>
          <div className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
            <div 
              className="bg-blue-500 h-1 transition-all duration-300 ease-in-out"
              style={{ width: `${(currentSectionIndex + 1) / sections.length * 100}%` }}
            ></div>
          </div>
        </div>

        <motion.div
          key={currentSectionIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6"
        >
          {currentSection && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">{currentSection.title}</h2>
              <div className="prose max-w-none">
                {currentSection.content}
              </div>
            </div>
          )}
        </motion.div>

        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <Button 
            variant="outline" 
            onClick={goToPreviousSection}
            disabled={currentSectionIndex === 0}
          >
            Previous
          </Button>
          <Button 
            onClick={goToNextSection}
            disabled={currentSectionIndex === sections.length - 1}
          >
            {currentSectionIndex === sections.length - 1 ? "Complete" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Room;
