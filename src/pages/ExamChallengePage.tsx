
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft,
  Clock,
  AlertCircle,
  CheckCircle,
  HelpCircle, 
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock exam data - in production, this would come from an API
const examData = {
  "bio-gcse-1": {
    id: "bio-gcse-1",
    title: "GCSE Biology Practice Exam",
    subject: "Biology",
    timeMinutes: 120,
    mcqs: Array(20).fill(null).map((_, i) => ({
      id: `mcq-${i+1}`,
      question: `This is multiple choice question ${i+1} about Biology. What is the correct answer?`,
      options: [
        { id: `mcq-${i+1}-a`, text: "Option A" },
        { id: `mcq-${i+1}-b`, text: "Option B" },
        { id: `mcq-${i+1}-c`, text: "Option C" },
        { id: `mcq-${i+1}-d`, text: "Option D" }
      ],
      correctAnswer: `mcq-${i+1}-b` // In production this wouldn't be sent to the client
    })),
    structuredQuestions: Array(10).fill(null).map((_, i) => ({
      id: `sq-${i+1}`,
      question: `This is structured question ${i+1} about Biology. Explain your reasoning in detail.`,
      marks: i % 3 === 0 ? 8 : i % 3 === 1 ? 5 : 3
    }))
  },
  "chem-gcse-1": {
    id: "chem-gcse-1",
    title: "GCSE Chemistry Practice Exam",
    subject: "Chemistry",
    timeMinutes: 120,
    mcqs: Array(20).fill(null).map((_, i) => ({
      id: `mcq-${i+1}`,
      question: `This is multiple choice question ${i+1} about Chemistry. What is the correct answer?`,
      options: [
        { id: `mcq-${i+1}-a`, text: "Option A" },
        { id: `mcq-${i+1}-b`, text: "Option B" },
        { id: `mcq-${i+1}-c`, text: "Option C" },
        { id: `mcq-${i+1}-d`, text: "Option D" }
      ],
      correctAnswer: `mcq-${i+1}-c`
    })),
    structuredQuestions: Array(10).fill(null).map((_, i) => ({
      id: `sq-${i+1}`,
      question: `This is structured question ${i+1} about Chemistry. Explain your reasoning in detail.`,
      marks: i % 3 === 0 ? 8 : i % 3 === 1 ? 5 : 3
    }))
  }
};

const ExamChallengePage = () => {
  const { examId } = useParams<{examId: string}>();
  const [started, setStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [currentTab, setCurrentTab] = useState("intro");
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, string>>({});
  const [structuredAnswers, setStructuredAnswers] = useState<Record<string, string>>({});
  const [examCompleted, setExamCompleted] = useState(false);
  
  const exam = examData[examId as keyof typeof examData];
  
  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    
    return `${hours > 0 ? `${hours}h ` : ''}${minutes}m ${seconds}s`;
  };
  
  const handleStartExam = () => {
    setStarted(true);
    setTimeRemaining(exam.timeMinutes * 60);
    setCurrentTab("mcq");
  };
  
  const handleMcqAnswer = (questionId: string, answerId: string) => {
    setMcqAnswers({
      ...mcqAnswers,
      [questionId]: answerId
    });
  };
  
  const handleStructuredAnswer = (questionId: string, text: string) => {
    setStructuredAnswers({
      ...structuredAnswers,
      [questionId]: text
    });
  };
  
  const handleSubmitExam = () => {
    setExamCompleted(true);
    setCurrentTab("results");
    // In a real app, you would send the answers to the backend for grading
  };
  
  const getMcqPercentage = () => {
    return Object.keys(mcqAnswers).length / exam.mcqs.length * 100;
  };
  
  const getStructuredPercentage = () => {
    return Object.keys(structuredAnswers).length / exam.structuredQuestions.length * 100;
  };
  
  const getTotalPercentage = () => {
    const mcqCount = exam.mcqs.length;
    const structuredCount = exam.structuredQuestions.length;
    const totalCount = mcqCount + structuredCount;
    
    const answeredCount = Object.keys(mcqAnswers).length + Object.keys(structuredAnswers).length;
    return answeredCount / totalCount * 100;
  };
  
  useEffect(() => {
    if (started && !examCompleted) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [started, examCompleted]);
  
  if (!exam) {
    return (
      <>
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
          <p className="mb-8">
            The exam you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/challenges">
            <Button>Return to Challenges</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  const getSubjectColor = (subject: string) => {
    switch (subject.toLowerCase()) {
      case "biology":
        return "bg-green-100 text-green-800 border-green-200";
      case "chemistry":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "physics":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "mathematics":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 pb-10">
        {!started ? (
          <div className="container px-4 py-8 max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                to="/challenges"
                className="inline-flex items-center text-sm hover:underline"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Challenges
              </Link>
            </div>
            
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{exam.title}</CardTitle>
                    <CardDescription>GCSE Practice Examination</CardDescription>
                  </div>
                  <Badge variant="outline" className={getSubjectColor(exam.subject)}>
                    {exam.subject}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-100 rounded-md p-4">
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    About This Exam
                  </h3>
                  <p className="text-sm text-gray-600">
                    This is a full GCSE-style practice examination for {exam.subject}. It covers 
                    the entire curriculum and is designed to give you realistic exam experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Exam Structure</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-white border rounded-md p-4">
                      <div className="font-medium mb-1">Section A: Multiple Choice</div>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                          <span>{exam.mcqs.length} multiple choice questions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                          <span>1 mark per question</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                          <span>Select one correct answer from A-D</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border rounded-md p-4">
                      <div className="font-medium mb-1">Section B: Structured Questions</div>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                          <span>{exam.structuredQuestions.length} structured questions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                          <span>3-8 marks per question</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                          <span>Requires detailed written answers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Exam Information</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                        <div className="font-medium">{exam.timeMinutes} minutes</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border">
                      <HelpCircle className="h-4 w-4 text-amber-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">Total Questions</div>
                        <div className="font-medium">{exam.mcqs.length + exam.structuredQuestions.length}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">Pass Mark</div>
                        <div className="font-medium">60%</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4 text-sm">
                  <p className="font-medium mb-1">Important Notes:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Once you start the exam, the timer will begin.</li>
                    <li>You can navigate between the multiple choice and structured question sections.</li>
                    <li>Your answers are saved as you go.</li>
                    <li>If the time runs out, your exam will be automatically submitted.</li>
                    <li>You cannot pause the exam once started.</li>
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-6">
                <Link to="/challenges">
                  <Button variant="outline">Back to Challenges</Button>
                </Link>
                <Button onClick={handleStartExam}>Start Exam Now</Button>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <div className="container px-4 py-8 max-w-5xl mx-auto">
            {!examCompleted ? (
              <>
                <div className="bg-white p-4 rounded-lg shadow mb-6 sticky top-0 z-10">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h1 className="text-xl font-bold">{exam.title}</h1>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getSubjectColor(exam.subject)}>
                          {exam.subject}
                        </Badge>
                        <span className="text-sm text-muted-foreground">GCSE Practice Exam</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-red-50 border border-red-100 text-red-800 px-3 py-1 rounded-md flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">{formatTime(timeRemaining)}</span>
                      </div>
                      
                      <Button onClick={handleSubmitExam}>Submit Exam</Button>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress: {Math.round(getTotalPercentage())}%</span>
                      <span>
                        {Object.keys(mcqAnswers).length + Object.keys(structuredAnswers).length} / {exam.mcqs.length + exam.structuredQuestions.length} questions answered
                      </span>
                    </div>
                    <Progress value={getTotalPercentage()} className="h-2" />
                  </div>
                </div>
                
                <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="mcq" className="flex-1">
                      Section A: Multiple Choice 
                      <span className="ml-2 text-xs">
                        ({Object.keys(mcqAnswers).length}/{exam.mcqs.length})
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="structured" className="flex-1">
                      Section B: Structured Questions
                      <span className="ml-2 text-xs">
                        ({Object.keys(structuredAnswers).length}/{exam.structuredQuestions.length})
                      </span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="mcq">
                    <div className="space-y-6">
                      {exam.mcqs.map((mcq, i) => (
                        <Card key={mcq.id} className={`transition-all ${mcqAnswers[mcq.id] ? "border-blue-200 bg-blue-50" : "bg-white"}`}>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full h-7 w-7 flex items-center justify-center mr-2 flex-shrink-0">
                                {i+1}
                              </span>
                              {mcq.question}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <RadioGroup 
                              value={mcqAnswers[mcq.id]} 
                              onValueChange={(value) => handleMcqAnswer(mcq.id, value)}
                            >
                              {mcq.options.map(option => (
                                <div key={option.id} className="flex items-center space-x-2 mb-2">
                                  <RadioGroupItem value={option.id} id={option.id} />
                                  <Label htmlFor={option.id} className="font-normal cursor-pointer">
                                    {option.text}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="structured">
                    <div className="space-y-6">
                      {exam.structuredQuestions.map((question, i) => (
                        <Card key={question.id} className={`transition-all ${structuredAnswers[question.id] ? "border-green-200 bg-green-50" : "bg-white"}`}>
                          <CardHeader className="pb-3">
                            <div className="flex justify-between">
                              <CardTitle className="text-lg flex items-start">
                                <span className="bg-purple-100 text-purple-800 rounded-full h-7 w-7 flex items-center justify-center mr-2 flex-shrink-0">
                                  {i+1}
                                </span>
                                {question.question}
                              </CardTitle>
                              <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                                {question.marks} marks
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <Textarea 
                              placeholder="Write your answer here..." 
                              value={structuredAnswers[question.id] || ""}
                              onChange={(e) => handleStructuredAnswer(question.id, e.target.value)}
                              className="min-h-[150px]"
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentTab(currentTab === "mcq" ? "structured" : "mcq")}
                  >
                    {currentTab === "mcq" ? "Go to Structured Questions" : "Go to Multiple Choice"}
                  </Button>
                  <Button onClick={handleSubmitExam}>Submit Exam</Button>
                </div>
              </>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center mb-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Exam Submitted Successfully!</h2>
                  <p className="text-gray-600 mb-6">
                    Your {exam.subject} GCSE practice exam has been submitted. 
                    Your answers are being processed.
                  </p>
                  <div className="bg-white border rounded-md p-4 mb-6 inline-block">
                    <div className="text-sm text-gray-500 mb-1">Your submission summary</div>
                    <div className="font-medium">
                      {Object.keys(mcqAnswers).length + Object.keys(structuredAnswers).length} of {exam.mcqs.length + exam.structuredQuestions.length} questions answered
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      In a real exam, your answers would now be sent for marking.
                      Your results would typically be available within 1-2 weeks.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Link to="/challenges">
                        <Button variant="outline">Back to Challenges</Button>
                      </Link>
                      <Button>View All Exams</Button>
                    </div>
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Exam Performance</CardTitle>
                    <CardDescription>See how you did on each section</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium">Multiple Choice Questions</h3>
                        <span className="text-sm">
                          {Object.keys(mcqAnswers).length}/{exam.mcqs.length} answered
                        </span>
                      </div>
                      <Progress value={getMcqPercentage()} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium">Structured Questions</h3>
                        <span className="text-sm">
                          {Object.keys(structuredAnswers).length}/{exam.structuredQuestions.length} answered
                        </span>
                      </div>
                      <Progress value={getStructuredPercentage()} className="h-2" />
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium">Overall Completion</h3>
                        <span className="font-medium">
                          {Math.round(getTotalPercentage())}%
                        </span>
                      </div>
                      <Progress value={getTotalPercentage()} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ExamChallengePage;
