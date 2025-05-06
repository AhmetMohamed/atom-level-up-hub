import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertCircle, BookOpen, ChevronRight, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSubjectData } from "@/lib/demoData";

// Mock IGCSE exam data
const mockIGCSEExam = {
  biology: {
    id: "bio-igcse-2023",
    title: "IGCSE Biology Practice Exam",
    timeLimit: 90, // in minutes
    totalMarks: 80,
    passingMarks: 40,
    sections: [
      {
        id: "multiple-choice",
        title: "Section A: Multiple Choice Questions",
        description: "Select the one correct answer from the given options.",
        marks: 20,
        questions: [
          {
            id: "q1",
            text: "Which of the following is NOT a function of the cell membrane?",
            options: [
              "Controlling movement of substances in and out of the cell",
              "Providing structural support to the cell",
              "Synthesizing proteins for the cell",
              "Recognizing other cells through surface proteins",
            ],
            answer: 2,
            explanation: "Protein synthesis occurs at the ribosomes, not at the cell membrane.",
          },
          {
            id: "q2",
            text: "Which organelle is responsible for the production of ATP in cells?",
            options: [
              "Nucleus",
              "Ribosome",
              "Mitochondrion",
              "Golgi apparatus",
            ],
            answer: 2,
            explanation: "Mitochondria are known as the 'powerhouses' of the cell as they produce ATP through cellular respiration.",
          },
          {
            id: "q3",
            text: "The process by which water molecules move from a region of higher concentration to a region of lower concentration through a partially permeable membrane is called:",
            options: [
              "Diffusion",
              "Osmosis",
              "Active transport",
              "Facilitated diffusion",
            ],
            answer: 1,
            explanation: "Osmosis is the movement of water molecules across a partially permeable membrane from a region of higher water concentration to a region of lower water concentration.",
          },
          // More questions would be added here in a real application
        ],
      },
      {
        id: "structured-questions",
        title: "Section B: Structured Questions",
        description: "Answer all questions in this section. Write your answers in the spaces provided.",
        marks: 60,
        questions: [
          {
            id: "sq1",
            text: "The diagram below shows a section through a leaf. Study the diagram and answer the questions that follow.",
            image: "leaf-cross-section.jpg",
            parts: [
              {
                id: "sq1-a",
                text: "(a) Name the structures labeled A, B, C, and D. (4 marks)",
                marks: 4,
                type: "short-answer",
                model_answer: "A: Upper epidermis\nB: Palisade mesophyll\nC: Spongy mesophyll\nD: Lower epidermis"
              },
              {
                id: "sq1-b",
                text: "(b) Explain two adaptations of the palisade mesophyll cells for photosynthesis. (4 marks)",
                marks: 4,
                type: "extended-answer",
                model_answer: "1. Palisade mesophyll cells contain many chloroplasts, which contain chlorophyll to absorb light energy for photosynthesis.\n2. They are arranged in a tightly packed layer near the upper surface of the leaf to maximize light absorption.\n3. Their columnar shape allows many cells to be packed into the upper leaf surface, increasing the surface area for light absorption."
              },
              {
                id: "sq1-c",
                text: "(c) Describe how adaptations of the leaf help to reduce water loss. (4 marks)",
                marks: 4,
                type: "extended-answer",
                model_answer: "1. The waxy cuticle on the upper epidermis prevents water from evaporating from the leaf surface.\n2. Most stomata are located on the lower epidermis, reducing water loss as the lower surface is usually cooler and less exposed to direct sunlight.\n3. Stomata can close in hot or dry conditions to prevent excessive water loss.\n4. Some plants have adaptations like hair-like structures (trichomes) that trap moisture near the leaf surface."
              }
            ]
          },
          {
            id: "sq2",
            text: "The diagram shows the human digestive system. Study the diagram and answer the questions that follow.",
            image: "digestive-system.jpg",
            parts: [
              {
                id: "sq2-a",
                text: "(a) Identify the organs labeled P, Q, R, and S. (4 marks)",
                marks: 4,
                type: "short-answer",
                model_answer: "P: Liver\nQ: Stomach\nR: Small intestine\nS: Large intestine"
              },
              {
                id: "sq2-b",
                text: "(b) Describe the roles of enzymes in the digestion of starch as it passes through the digestive system. (6 marks)",
                marks: 6,
                type: "extended-answer",
                model_answer: "1. In the mouth, salivary amylase begins the digestion of starch by breaking it down into maltose (a disaccharide).\n2. In the small intestine, pancreatic amylase continues the breakdown of any remaining starch into maltose.\n3. Maltase, an enzyme in the small intestine, breaks down maltose into glucose molecules.\n4. These glucose molecules are then absorbed through the wall of the small intestine into the bloodstream."
              },
              {
                id: "sq2-c",
                text: "(c) Explain how the structure of the small intestine is adapted for the efficient absorption of digested food. (6 marks)",
                marks: 6,
                type: "extended-answer",
                model_answer: "1. The small intestine has a very long length (about 6-7 meters), providing a large surface area for absorption.\n2. The inner lining is folded into villi, which further increase the surface area.\n3. Each villus contains blood capillaries close to its surface for efficient absorption of digested food molecules.\n4. Epithelial cells of villi have microvilli (brush border), which further increase the surface area.\n5. Villi have a thin epithelium (one cell thick) for rapid diffusion of digested food molecules.\n6. The small intestine has a good blood supply to maintain concentration gradients for efficient absorption."
              }
            ]
          },
          // More structured questions would be added here
        ],
      },
    ],
  },
  // Other subjects would be added here
};

const RealExamPrep = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [activeTab, setActiveTab] = useState("multiple-choice");
  const [timer, setTimer] = useState<number>(0);
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const subject = getSubjectData(subjectId || "biology");
  
  // Get the appropriate exam data based on subject
  const examData = mockIGCSEExam[subjectId as keyof typeof mockIGCSEExam] || mockIGCSEExam.biology;
  
  // Start the exam timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isExamStarted && timer < examData.timeLimit * 60) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isExamStarted, timer, examData.timeLimit]);
  
  // Format the timer display
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Calculate remaining time
  const remainingTime = (examData.timeLimit * 60) - timer;
  
  // Calculate progress percentage
  const progressPercentage = (timer / (examData.timeLimit * 60)) * 100;
  
  const handleStartExam = () => {
    setIsExamStarted(true);
  };
  
  const handleSubmitExam = () => {
    // In a real application, this would submit the answers for grading
    alert("Exam submitted successfully!");
    setIsExamStarted(false);
  };
  
  const handleNextQuestion = () => {
    if (activeTab === "multiple-choice") {
      const questions = examData.sections.find(s => s.id === "multiple-choice")?.questions || [];
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else if (examData.sections.some(s => s.id === "structured-questions")) {
        setActiveTab("structured-questions");
        setCurrentQuestion(0);
      }
    } else {
      const questions = examData.sections.find(s => s.id === "structured-questions")?.questions || [];
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };
  
  const handlePrevQuestion = () => {
    if (activeTab === "structured-questions") {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
      } else if (examData.sections.some(s => s.id === "multiple-choice")) {
        const mcQuestions = examData.sections.find(s => s.id === "multiple-choice")?.questions || [];
        setActiveTab("multiple-choice");
        setCurrentQuestion(mcQuestions.length - 1);
      }
    } else {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
      }
    }
  };
  
  const handleAnswerSelect = (questionId: string, answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };
  
  // Current section and questions
  const currentSection = examData.sections.find(s => s.id === activeTab);
  const questions = currentSection?.questions || [];
  const currentQuestionData = questions[currentQuestion];
  
  if (!currentSection) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container px-4 py-8 flex-1">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Exam Not Found</h1>
            <p className="text-muted-foreground mb-6">The exam you're looking for doesn't exist or hasn't been created yet.</p>
            <Link to={`/subjects/${subjectId}`}>
              <Button>Back to {subject.title}</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-slate-50 py-6">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <div className="flex gap-2 mb-1">
                  <Badge variant="outline" className="bg-white">{subject.title}</Badge>
                  <Badge variant="outline" className="bg-white">IGCSE Level</Badge>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">{examData.title}</h1>
              </div>
              {isExamStarted ? (
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Time Remaining</div>
                    <div className={`font-mono text-xl font-bold ${remainingTime < 300 ? 'text-red-600' : ''}`}>
                      {formatTime(remainingTime)}
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    onClick={handleSubmitExam}
                  >
                    End Exam
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{examData.timeLimit} minutes</span>
                </div>
              )}
            </div>
            
            {isExamStarted && (
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            )}
          </div>
          
          {!isExamStarted ? (
            <Card>
              <CardHeader>
                <CardTitle>Exam Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Time Limit</h3>
                  <p className="text-muted-foreground">You have {examData.timeLimit} minutes to complete this exam.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Marks</h3>
                  <p className="text-muted-foreground">Total marks: {examData.totalMarks}. Passing mark: {examData.passingMarks}.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Sections</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    {examData.sections.map(section => (
                      <li key={section.id}>
                        <span className="font-medium text-foreground">{section.title}</span> - {section.description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Instructions</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Read each question carefully before answering.</li>
                    <li>Ensure you answer all questions.</li>
                    <li>Time management is crucial - allocate time based on marks.</li>
                    <li>You can navigate between questions using the navigation buttons.</li>
                    <li>Click "Submit Exam" when you've completed all questions or when time runs out.</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={handleStartExam}
                >
                  Start Exam
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2">
                  {examData.sections.map(section => (
                    <TabsTrigger key={section.id} value={section.id}>
                      {section.title.split(":")[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {examData.sections.map(section => (
                  <TabsContent key={section.id} value={section.id} className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <p className="text-muted-foreground">{section.description}</p>
                      </CardHeader>
                      
                      <CardContent>
                        {section.id === "multiple-choice" && currentQuestionData && (
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium mb-3">Question {currentQuestion + 1} of {questions.length}</h3>
                              <p className="mb-4">{currentQuestionData.text}</p>
                              <div className="space-y-3">
                                {currentQuestionData.options.map((option, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <input
                                      type="radio"
                                      id={`option-${idx}`}
                                      name={`question-${currentQuestionData.id}`}
                                      className="h-4 w-4"
                                      checked={answers[currentQuestionData.id] === idx}
                                      onChange={() => handleAnswerSelect(currentQuestionData.id, idx)}
                                    />
                                    <label htmlFor={`option-${idx}`} className="text-sm">
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {section.id === "structured-questions" && currentQuestionData && (
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium mb-3">Question {currentQuestion + 1} of {questions.length}</h3>
                              <p className="mb-4">{currentQuestionData.text}</p>
                              
                              {currentQuestionData.image && (
                                <div className="my-4 p-4 bg-gray-100 rounded-lg flex items-center justify-center">
                                  <div className="text-center">
                                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-muted-foreground">[Image: {currentQuestionData.image}]</p>
                                  </div>
                                </div>
                              )}
                              
                              <div className="space-y-6 mt-6">
                                {currentQuestionData.parts.map((part, idx) => (
                                  <div key={idx} className="p-4 border rounded-lg">
                                    <div className="flex justify-between mb-2">
                                      <p className="font-medium">{part.text}</p>
                                      <Badge variant="outline">{part.marks} marks</Badge>
                                    </div>
                                    
                                    {part.type === "short-answer" ? (
                                      <input
                                        type="text"
                                        className="w-full p-2 border rounded"
                                        placeholder="Your answer..."
                                        value={answers[part.id] || ""}
                                        onChange={(e) => handleAnswerSelect(part.id, e.target.value)}
                                      />
                                    ) : (
                                      <textarea
                                        className="w-full p-2 border rounded min-h-[100px]"
                                        placeholder="Your answer..."
                                        value={answers[part.id] || ""}
                                        onChange={(e) => handleAnswerSelect(part.id, e.target.value)}
                                      />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                      
                      <CardFooter className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={handlePrevQuestion}
                          disabled={currentQuestion === 0 && activeTab === examData.sections[0].id}
                        >
                          <ChevronLeft className="h-4 w-4 mr-2" />
                          Previous
                        </Button>
                        
                        <Button
                          onClick={handleNextQuestion}
                          disabled={
                            currentQuestion === questions.length - 1 && 
                            activeTab === examData.sections[examData.sections.length - 1].id
                          }
                        >
                          Next
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <div className="flex justify-center mt-6">
                      <Button 
                        variant="default" 
                        size="lg"
                        onClick={handleSubmitExam}
                      >
                        Submit Exam
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RealExamPrep;
