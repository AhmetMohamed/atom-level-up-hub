import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, User, BookOpen, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getRoomById, getSubjectData } from "@/lib/demoData";

const Room = () => {
  const { subjectId, roomId } = useParams();
  const [activeSection, setActiveSection] = useState<string | null>("what-are-cells");
  
  const subject = getSubjectData(subjectId || "");
  const room = getRoomById(subjectId || "", roomId || "");
  
  // Room data mapping
  const roomDataMap = {
    "intro-to-cells": {
      title: "Cell Structure & Function",
      subject: "Biology",
      level: "Beginner",
      module: "Cell Structure & Function",
      instructor: "Dr. Emma Chen",
      duration: "45 mins",
      xpPoints: 50,
      progress: 0,
      completed: false,
      description: "Explore the basic building blocks of life and understand how cells function.",
      sections: [
        {
          id: "what-are-cells",
          title: "1. Introduction to Cells",
          content: "Cells are the fundamental units of life. They are the smallest structural and functional units of living organisms. All living things are made up of cells, from single-celled bacteria to multi-cellular organisms like humans.\n\nThere are two main types of cells:\n- Prokaryotic cells - simple cells without a nucleus (e.g., bacteria)\n- Eukaryotic cells - complex cells with a nucleus (e.g., plant and animal cells)",
          completed: false,
          image: "public/lovable-uploads/4ce305d8-2d7c-42f8-8aaa-fcd470a3bf58.png"
        },
        {
          id: "cell-organelles",
          title: "2. Cell Organelles",
          content: "Cell organelles are specialized structures within a cell that perform specific functions. In eukaryotic cells, these include:\n\n- Nucleus: Contains DNA and controls cellular activities\n- Mitochondria: Produces energy through cellular respiration\n- Endoplasmic Reticulum: Synthesizes proteins and lipids\n- Golgi Apparatus: Processes and packages proteins\n- Lysosomes: Digest waste materials and cellular debris\n- Ribosomes: Site of protein synthesis",
          completed: false
        },
        {
          id: "cell-membrane",
          title: "3. Cell Membrane",
          content: "The cell membrane is a semipermeable lipid bilayer that surrounds the cell and separates it from the external environment. Its main functions include:\n\n- Controlling what enters and leaves the cell\n- Maintaining cell shape and integrity\n- Cell-to-cell communication\n- Providing structural support",
          completed: false
        }
      ],
      quiz: [
        {
          question: "What are the two main types of cells?",
          options: ["Simple and complex cells", "Prokaryotic and eukaryotic cells", "Animal and plant cells", "Large and small cells"],
          answer: "Prokaryotic and eukaryotic cells"
        },
        {
          question: "Which organelle is responsible for energy production in the cell?",
          options: ["Nucleus", "Mitochondria", "Golgi apparatus", "Lysosome"],
          answer: "Mitochondria"
        },
        {
          question: "What is the primary function of the cell membrane?",
          options: ["Energy production", "Protein synthesis", "Controlling what enters and leaves the cell", "Cell division"],
          answer: "Controlling what enters and leaves the cell"
        }
      ]
    },
    // ...other room data
  };
  
  // If room not found in the actual data, try to use the hardcoded data for demo
  const useRoomData = room || roomDataMap[roomId as keyof typeof roomDataMap];
  
  if (!useRoomData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container px-4 py-8 flex-1">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Room Not Found</h1>
            <p className="text-muted-foreground mb-6">The room you're looking for doesn't exist or hasn't been created yet.</p>
            <Link to={`/subjects/${subjectId}`}>
              <Button>Back to Subject</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId === activeSection ? null : sectionId);
  };

  const markAsComplete = () => {
    // This would connect to an API in a real application
  };
  
  // Process sections based on whether they're a number (from demoData) or an array (from hardcoded data)
  const roomSections = typeof useRoomData.sections === 'number' 
    ? [] // If it's a number from demoData, we don't have section content yet
    : useRoomData.sections || [];
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1">
        <div className="container px-4 py-6 max-w-4xl mx-auto">
          <Link to={`/subjects/${subjectId}`} className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {subject.title}
          </Link>
          
          <div className="mb-6">
            <div className="flex gap-2 mb-1">
              <Badge variant="outline" className="bg-white">{subject.title}</Badge>
              <Badge variant="outline" className="bg-white">{useRoomData.level || "Lesson"}</Badge>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight mb-2">{useRoomData.title}</h1>
            <p className="text-muted-foreground mb-4">{useRoomData.description}</p>
            
            <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{useRoomData.duration}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>XP: {useRoomData.xpPoints}</span>
              </div>
            </div>
          </div>
          
          {/* Progress tracking */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium">Progress</div>
              <div className="text-sm font-medium">{useRoomData.completionPercentage}% complete</div>
            </div>
            <Progress value={useRoomData.completionPercentage} className="h-2" />
          </div>
          
          {/* Room Content */}
          <div className="space-y-4">
            {roomSections.length > 0 ? (
              roomSections.map((section: any) => (
                <Accordion
                  key={section.id}
                  type="single"
                  collapsible
                  value={activeSection === section.id ? section.id : ""}
                  onValueChange={() => handleSectionClick(section.id)}
                >
                  <AccordionItem value={section.id} className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-white">
                      <div className="flex items-center gap-3 w-full">
                        <div className="font-semibold">{section.title}</div>
                        {section.completed && (
                          <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-6 bg-white">
                      <div className="prose max-w-none">
                        {section.content.split('\n\n').map((paragraph: string, idx: number) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                        
                        {section.image && (
                          <div className="mt-4 flex justify-center">
                            <img 
                              src={section.image}
                              alt={section.title}
                              className="rounded-lg max-h-96 object-contain"
                            />
                          </div>
                        )}
                        
                        <div className="mt-6">
                          <Button variant="outline" size="sm" onClick={() => {}}>
                            Take Section Quiz
                          </Button>
                          <Button className="ml-2" size="sm" onClick={markAsComplete}>
                            Mark as Complete
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))
            ) : (
              <Card className="bg-white">
                <CardContent className="p-6">
                  <p>This room is under development. Content will be available soon.</p>
                  <div className="mt-6">
                    <Button variant="outline" size="sm" onClick={() => {}}>
                      Mark as Complete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Quiz Section */}
            {useRoomData.quiz && (
              <Card className="mt-8 overflow-hidden">
                <div className="bg-science-light p-4 border-b border-science-primary/20">
                  <h2 className="text-xl font-bold text-science-primary flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Final Assessment
                  </h2>
                  <p className="text-sm text-muted-foreground">Test your understanding of the concepts covered in this room.</p>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {useRoomData.quiz.map((question: any, index: number) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-3">Question {index + 1}: {question.question}</h3>
                        <div className="space-y-2">
                          {question.options.map((option: string, i: number) => (
                            <div key={i} className="flex items-center">
                              <input 
                                type="radio" 
                                id={`q${index}-o${i}`} 
                                name={`question-${index}`} 
                                className="mr-2"
                              />
                              <label htmlFor={`q${index}-o${i}`} className="text-sm">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div className="flex justify-end mt-4">
                      <Button>Submit Answers</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Room;
