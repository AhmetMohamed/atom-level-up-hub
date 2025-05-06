import React, { useState, useEffect } from "react";
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
import { ArrowLeft, Clock, User, BookOpen, CheckCircle, Award, BookText } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSubjectData, getRoomById } from "@/lib/demoData";

const Room = () => {
  const { subjectId, roomId } = useParams();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get the actual subject ID from the URL or use the room's subject association
  const actualRoomId = roomId || "";
  
  // Try to find the room from any subject
  let foundRoom;
  let foundSubjectId = subjectId || "";
  
  useEffect(() => {
    // When component mounts, fetch the room data
    setIsLoading(true);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [roomId]);
  
  // If we have a roomId but no subjectId, search through all subjects
  if (actualRoomId && !foundSubjectId) {
    for (const [subjId, subjData] of Object.entries(getSubjectData(""))) {
      const room = getRoomById(subjId, actualRoomId);
      if (room) {
        foundRoom = room;
        foundSubjectId = subjId;
        break;
      }
    }
  } else {
    // Otherwise use the provided subjectId
    foundRoom = getRoomById(foundSubjectId, actualRoomId);
  }
  
  // Room data mapping for fallback - ensure sections is always an array
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
      completionPercentage: 0,
      completed: false,
      description: "Explore the basic building blocks of life and understand how cells function.",
      sections: [
        {
          id: "what-are-cells",
          title: "1. Introduction to Cells",
          content: "Cells are the fundamental units of life. They are the smallest structural and functional units of living organisms. All living things are made up of cells, from single-celled bacteria to multi-cellular organisms like humans.\n\nThere are two main types of cells:\n- Prokaryotic cells - simple cells without a nucleus (e.g., bacteria)\n- Eukaryotic cells - complex cells with a nucleus (e.g., plant and animal cells)",
          completed: false,
          image: "/lovable-uploads/4ce305d8-2d7c-42f8-8aaa-fcd470a3bf58.png"
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
  
  // Use either the found room from the data or fallback to the hardcoded room
  const room = foundRoom || roomDataMap[actualRoomId as keyof typeof roomDataMap];
  const subject = getSubjectData(foundSubjectId);
  
  // Ensure sections is always an array
  const roomSections = Array.isArray(room?.sections) ? room.sections : [];
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mb-4"></div>
            <p className="text-muted-foreground">Loading room content...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!room) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container px-4 py-8 flex-1 flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="mb-4 text-amber-500">
              <BookText className="h-16 w-16 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Room Not Found</h1>
            <p className="text-muted-foreground mb-6">The room you're looking for doesn't exist or hasn't been created yet.</p>
            <Link to={`/subjects/${foundSubjectId || "biology"}`}>
              <Button>Back to {subject.title || "Subject"}</Button>
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

  const markAsComplete = (sectionId: string) => {
    // This would connect to an API in a real application
    toast.success("Section marked as complete!", {
      description: "Your progress has been updated"
    });
  };
  
  // If no active section is selected, set the first one
  useEffect(() => {
    if (roomSections.length > 0 && !activeSection) {
      setActiveSection(roomSections[0].id);
    }
  }, [roomSections, activeSection]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 w-full">
        <div className={`w-full py-8 ${subject.color}`}>
          <div className="container px-4 mx-auto">
            <Link to={`/subjects/${foundSubjectId || "biology"}`} className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {subject.title || "Subject"}
            </Link>
            
            <div className="mb-6">
              <div className="flex gap-2 mb-1">
                <Badge variant="outline" className="bg-white">{room.subject || subject.title}</Badge>
                <Badge variant="outline" className="bg-white">{room.level || "Standard"}</Badge>
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight mb-2 animate-fade-in">{room.title}</h1>
              <p className="text-muted-foreground mb-4">{room.description}</p>
              
              <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{room.duration}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>By: {room.instructor || "Instructor"}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span>{room.xpPoints} XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-8">
          {/* Progress tracking */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium">Progress</div>
              <div className="text-sm font-medium">{room.completionPercentage || room.progress || 0}% complete</div>
            </div>
            <Progress value={room.completionPercentage || room.progress || 0} className="h-2" />
          </div>
          
          {/* Room Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {roomSections.length > 0 ? (
                  roomSections.map((section) => (
                    <Accordion
                      key={section.id}
                      type="single"
                      collapsible
                      value={activeSection === section.id ? section.id : ""}
                      onValueChange={() => handleSectionClick(section.id)}
                    >
                      <AccordionItem value={section.id} className="border rounded-lg overflow-hidden animate-fade-in">
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
                                  className="rounded-lg max-h-96 object-contain transition-all duration-500 hover:scale-105"
                                />
                              </div>
                            )}
                            
                            <div className="mt-6">
                              <Button variant="outline" size="sm" onClick={() => {}}>
                                Take Section Quiz
                              </Button>
                              <Button className="ml-2" size="sm" onClick={() => markAsComplete(section.id)}>
                                Mark as Complete
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))
                ) : (
                  <div className="text-center py-12 border rounded-lg">
                    <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium">No sections available</h3>
                    <p className="text-muted-foreground mt-1">This room doesn't have any content sections yet.</p>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <div className="sticky top-4">
                {/* Quiz Section */}
                {room.quiz && (
                  <Card className="overflow-hidden mb-6 animate-fade-in">
                    <div className="bg-science-light p-4 border-b border-science-primary/20">
                      <h2 className="text-xl font-bold text-science-primary flex items-center">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Final Assessment
                      </h2>
                      <p className="text-sm text-muted-foreground">Test your understanding of the concepts covered in this room.</p>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <p className="text-sm">The quiz contains {room.quiz.length} questions to test your knowledge.</p>
                        <Button className="w-full">Start Quiz</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {/* Resources Section */}
                <Card className="animate-fade-in">
                  <div className="bg-slate-100 p-4 border-b">
                    <h2 className="font-bold flex items-center">
                      <BookText className="h-4 w-4 mr-2" />
                      Additional Resources
                    </h2>
                  </div>
                  <CardContent className="p-4">
                    <ul className="space-y-3 text-sm">
                      <li>
                        <a href="#" className="flex items-center p-2 hover:bg-slate-50 rounded-md transition-colors">
                          <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center mr-3">
                            <BookOpen className="h-4 w-4 text-blue-600" />
                          </div>
                          <span>Supplementary Reading</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-2 hover:bg-slate-50 rounded-md transition-colors">
                          <div className="h-8 w-8 rounded bg-green-100 flex items-center justify-center mr-3">
                            <User className="h-4 w-4 text-green-600" />
                          </div>
                          <span>Ask a Tutor</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-2 hover:bg-slate-50 rounded-md transition-colors">
                          <div className="h-8 w-8 rounded bg-purple-100 flex items-center justify-center mr-3">
                            <CheckCircle className="h-4 w-4 text-purple-600" />
                          </div>
                          <span>Practice Exercises</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Room;
