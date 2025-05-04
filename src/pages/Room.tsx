
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
import { ArrowLeft, Clock, User, BookOpen, CheckCircle, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Room = () => {
  const { subjectId, roomId } = useParams();
  const [activeSection, setActiveSection] = useState<string | null>("what-are-cells");
  
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
    "room-1": {
      title: "Foundation Concepts",
      subject: "Biology",
      level: "GCSE",
      module: "Introduction",
      instructor: "Dr. Sarah Johnson",
      duration: "30 min",
      xpPoints: 50,
      progress: 100,
      completed: true,
      description: "Master the core concepts and terminology.",
      sections: [
        {
          id: "intro-section",
          title: "1. Introduction to Fundamentals",
          content: "This section covers the basic principles and key terminology used throughout this subject. Understanding these core concepts is essential for building a strong foundation in the science.\n\nKey terms to know:\n- Scientific method: A systematic approach to research involving observation, hypothesis formation, experimentation, and conclusion drawing\n- Theory: A well-substantiated explanation acquired through the scientific method\n- Law: A statement based on repeated experimental observations that describes some phenomena of nature",
          completed: true
        },
        {
          id: "history-section",
          title: "2. Historical Context",
          content: "The historical development of this field helps us understand how scientific knowledge evolves. Major breakthroughs and paradigm shifts have shaped our current understanding.\n\nImportant historical milestones include:\n- Early observations and hypotheses\n- Development of specialized tools and techniques\n- Modern research methodologies and computational approaches",
          completed: true
        }
      ],
      quiz: [
        {
          question: "What is the scientific method?",
          options: ["A random approach to solving problems", "A systematic approach to research involving observation, hypothesis, experimentation, and conclusion", "A method only used in chemistry", "A theoretical concept with no practical application"],
          answer: "A systematic approach to research involving observation, hypothesis, experimentation, and conclusion"
        },
        {
          question: "What is the difference between a scientific theory and a scientific law?",
          options: ["They are the same thing", "Theories are proven but laws are not", "Laws describe phenomena, theories explain them", "Laws are more important than theories"],
          answer: "Laws describe phenomena, theories explain them"
        }
      ]
    },
    "room-2": {
      title: "Intermediate Principles",
      subject: "Chemistry",
      level: "GCSE",
      module: "Key Theories",
      instructor: "Prof. Michael Anderson",
      duration: "45 min",
      xpPoints: 75,
      progress: 45,
      completed: false,
      description: "Build on your foundation with more complex ideas.",
      sections: [
        {
          id: "intermediate-concepts",
          title: "1. Advanced Terminology",
          content: "This section builds upon basic concepts and introduces more complex terminology and principles. These intermediate concepts form the bridge between foundational knowledge and specialized applications.\n\nThis section covers:\n- Extended theoretical frameworks\n- Relationships between different scientific phenomena\n- Practical applications of intermediate principles",
          completed: false
        },
        {
          id: "case-studies",
          title: "2. Real-world Applications",
          content: "Understanding how theoretical principles apply to real-world situations helps cement your knowledge. This section presents case studies and practical examples of scientific principles in action.\n\nWe'll explore:\n- Industry applications\n- Research case studies\n- Everyday examples of scientific principles",
          completed: false
        }
      ],
      quiz: [
        {
          question: "Why are real-world applications important in scientific education?",
          options: ["They aren't important", "They help connect theory to practice", "They're only important for advanced students", "They replace the need for theoretical understanding"],
          answer: "They help connect theory to practice"
        },
        {
          question: "What builds the bridge between basic knowledge and specialized applications?",
          options: ["Only practical experience", "Memorizing terms without understanding", "Intermediate principles and concepts", "Advanced mathematics"],
          answer: "Intermediate principles and concepts"
        }
      ]
    },
    "room-3": {
      title: "Advanced Applications",
      subject: "Physics",
      level: "A-Level",
      module: "Advanced Topics",
      instructor: "Dr. Elizabeth Wong",
      duration: "60 min",
      xpPoints: 100,
      progress: 0,
      completed: false,
      description: "Apply your knowledge to solve complex problems.",
      sections: [
        {
          id: "advanced-principles",
          title: "1. Complex Theory",
          content: "This advanced section delves into sophisticated theoretical frameworks and complex principles. These concepts represent the cutting edge of the field and require a solid understanding of foundational and intermediate concepts.\n\nKey areas covered:\n- Specialized theoretical models\n- Advanced problem-solving techniques\n- Current research directions",
          completed: false
        },
        {
          id: "problem-solving",
          title: "2. Complex Problem Solving",
          content: "Applying advanced principles to solve complex, real-world problems is the hallmark of expertise in any scientific field. This section focuses on developing sophisticated problem-solving skills.\n\nYou will learn to:\n- Break down complex problems into manageable components\n- Apply multiple principles simultaneously\n- Evaluate and refine solutions based on outcomes",
          completed: false
        }
      ],
      quiz: [
        {
          question: "What characterizes advanced scientific concepts?",
          options: ["They're easy to understand", "They build on foundational and intermediate principles", "They don't relate to basic principles", "They don't have practical applications"],
          answer: "They build on foundational and intermediate principles"
        },
        {
          question: "What is an important skill when solving complex scientific problems?",
          options: ["Memorizing formulas without understanding them", "Avoiding mathematical calculations", "Breaking problems down into manageable components", "Working alone without consultation"],
          answer: "Breaking problems down into manageable components"
        }
      ]
    },
    "room-4": {
      title: "Exam Preparation",
      subject: "Mathematics",
      level: "A-Level",
      module: "Revision",
      instructor: "Prof. James Wilson",
      duration: "50 min",
      xpPoints: 85,
      progress: 0,
      completed: false,
      description: "Get ready for your exams with practice questions and reviews.",
      sections: [
        {
          id: "exam-strategies",
          title: "1. Exam Techniques",
          content: "Successful exam performance combines knowledge with strategic approaches to test-taking. This section covers proven techniques for maximizing your exam scores.\n\nYou'll learn about:\n- Time management during exams\n- Question interpretation strategies\n- Common exam pitfalls and how to avoid them",
          completed: false
        },
        {
          id: "practice-questions",
          title: "2. Practice Materials",
          content: "Regular practice with exam-style questions is one of the most effective ways to prepare for assessments. This section provides curated practice materials with detailed solutions.\n\nThis section includes:\n- Past paper questions with solutions\n- Common mistake analysis\n- Progressive difficulty exercises",
          completed: false
        }
      ],
      quiz: [
        {
          question: "What is one of the most effective ways to prepare for exams?",
          options: ["Studying only the night before", "Regular practice with exam-style questions", "Focusing only on theory", "Avoiding difficult topics"],
          answer: "Regular practice with exam-style questions"
        },
        {
          question: "Why is time management important during exams?",
          options: ["It isn't important", "To ensure you can answer all questions appropriately", "To impress the examiner with speed", "To finish faster than other students"],
          answer: "To ensure you can answer all questions appropriately"
        }
      ]
    }
  };
  
  const room = roomDataMap[roomId as keyof typeof roomDataMap];
  
  if (!room) {
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
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1">
        <div className="container px-4 py-6 max-w-4xl mx-auto">
          <Link to={`/subjects/${subjectId}`} className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learning Rooms
          </Link>
          
          <div className="mb-6">
            <div className="flex gap-2 mb-1">
              <Badge variant="outline" className="bg-white">{room.subject}</Badge>
              <Badge variant="outline" className="bg-white">{room.level}</Badge>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight mb-2">{room.title}</h1>
            <p className="text-muted-foreground mb-4">{room.description}</p>
            
            <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{room.duration}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>By: {room.instructor}</span>
              </div>
            </div>
          </div>
          
          {/* Progress tracking */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium">Progress</div>
              <div className="text-sm font-medium">{room.progress}% complete</div>
            </div>
            <Progress value={room.progress} className="h-2" />
          </div>
          
          {/* Room Content */}
          <div className="space-y-4">
            {room.sections.map((section) => (
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
                      {section.content.split('\n\n').map((paragraph, idx) => (
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
            ))}
            
            {/* Quiz Section */}
            {room.quiz && (
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Room;
