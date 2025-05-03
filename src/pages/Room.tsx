
import React from "react";
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
import { ArrowLeft, Clock, Trophy, BookOpen, CheckCircle, Lightbulb } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Room = () => {
  const { subjectId, roomId } = useParams();
  
  // This would come from API in a real application
  const roomData = {
    "intro-to-cells": {
      title: "Introduction to Cells",
      subject: "Biology",
      module: "Cell Structure & Function",
      duration: "45 mins",
      xpPoints: 50,
      progress: 100,
      completed: true,
      sections: [
        {
          id: "what-are-cells",
          title: "What Are Cells?",
          content: "Cells are the basic structural and functional units of all living organisms. They are the smallest unit of life that can replicate independently. The study of cells is called cell biology, cellular biology, or cytology.",
          completed: true
        },
        {
          id: "cell-theory",
          title: "Cell Theory",
          content: "Cell theory states that: (1) All living organisms are composed of one or more cells. (2) The cell is the basic unit of structure and organization in organisms. (3) All cells arise from pre-existing cells.",
          completed: true
        },
        {
          id: "types-of-cells",
          title: "Types of Cells",
          content: "There are two main types of cells: prokaryotic and eukaryotic. Prokaryotic cells are simpler and lack membrane-bound organelles, while eukaryotic cells are more complex with various membrane-bound organelles including a nucleus.",
          completed: true,
          keyPoints: [
            "Prokaryotic cells lack a true nucleus and membrane-bound organelles",
            "Eukaryotic cells have a true nucleus and numerous membrane-bound organelles",
            "Bacteria and archaea are prokaryotic",
            "Plants, animals, fungi, and protists are eukaryotic"
          ]
        },
        {
          id: "cell-sizes",
          title: "Cell Sizes and Shapes",
          content: "Cells vary greatly in size and shape. Most cells are microscopic and invisible to the naked eye, ranging from 1-100 micrometers. Cell shapes can be round, flat, elongated, star-shaped, or cylindrical depending on their function.",
          completed: true
        }
      ],
      quiz: [
        {
          question: "What is the smallest unit of life that can replicate independently?",
          options: ["Atom", "Molecule", "Cell", "Organelle"],
          answer: "Cell"
        },
        {
          question: "Which of the following is NOT part of the cell theory?",
          options: [
            "All living organisms are composed of cells",
            "Cells are the basic unit of life",
            "All cells arise from pre-existing cells",
            "All cells contain DNA in a nucleus"
          ],
          answer: "All cells contain DNA in a nucleus"
        },
        {
          question: "Which type of cell contains membrane-bound organelles?",
          options: ["Prokaryotic cells", "Eukaryotic cells", "Both types", "Neither type"],
          answer: "Eukaryotic cells"
        }
      ]
    },
    // Additional room data would be here
  };
  
  const room = roomData[roomId as keyof typeof roomData];
  
  if (!room) {
    return (
      <DashboardLayout>
        <div className="container px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Room Not Found</h1>
            <p className="text-muted-foreground mb-6">The room you're looking for doesn't exist or hasn't been created yet.</p>
            <Link to={`/subjects/${subjectId}`}>
              <Button>Back to Subject</Button>
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout>
      <div className="container px-4 py-8 max-w-4xl">
        <Link to={`/subjects/${subjectId}`} className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {room.subject}
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-3xl font-bold">{room.title}</h1>
              {room.completed && (
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 ml-2">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Completed
                </Badge>
              )}
            </div>
            <div className="text-muted-foreground">Part of: {room.module}</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="flex items-center px-3 py-1.5 rounded-md bg-muted text-sm">
              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
              {room.duration}
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-md bg-science-light text-sm">
              <Trophy className="h-4 w-4 mr-2 text-science-primary" />
              {room.xpPoints} XP
            </div>
          </div>
        </div>
        
        {/* Progress tracking */}
        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium">Your progress</div>
              <div className="text-sm font-medium">{room.progress}% Complete</div>
            </div>
            <Progress value={room.progress} className="h-2" />
          </CardContent>
        </Card>
        
        {/* Room Content */}
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {room.sections.map((section, index) => (
              <AccordionItem key={section.id} value={section.id} className="border rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:no-underline bg-muted/40">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-science-light text-science-primary font-medium text-sm">
                      {index + 1}
                    </div>
                    <span className="font-medium">{section.title}</span>
                    {section.completed && (
                      <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <div className="prose max-w-none">
                    <p>{section.content}</p>
                    
                    {section.keyPoints && (
                      <div className="mt-4 bg-muted/50 p-4 rounded-md">
                        <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                          <Lightbulb className="h-4 w-4 text-amber-500" />
                          Key Points
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                          {section.keyPoints.map((point, i) => (
                            <li key={i} className="text-sm">{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Quiz Section */}
          {room.quiz && (
            <Card className="mt-8 overflow-hidden">
              <div className="bg-science-light p-4 border-b border-science-primary/20">
                <h2 className="text-xl font-bold text-science-primary flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Knowledge Check
                </h2>
                <p className="text-sm text-muted-foreground">Test your understanding of the concepts covered in this room.</p>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-6">
                  {room.quiz.map((question, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Question {index + 1}: {question.question}</h3>
                      <div className="space-y-2">
                        {question.options.map((option, i) => (
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
    </DashboardLayout>
  );
};

export default Room;
