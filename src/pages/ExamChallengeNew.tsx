
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, XCircle, Clock, Award, FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

const mockQuestions: Question[] = [
  {
    id: "1",
    text: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
    correctAnswer: "Mitochondria",
    explanation: "Mitochondria are known as the powerhouse of the cell because they generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
  },
  {
    id: "2",
    text: "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
    explanation: "Plants absorb carbon dioxide from the atmosphere during photosynthesis to produce glucose and oxygen."
  },
  {
    id: "3",
    text: "What is the chemical symbol for water?",
    options: ["Wa", "H2O", "HO2", "H2"],
    correctAnswer: "H2O",
    explanation: "The chemical symbol for water is H2O, indicating that each water molecule consists of two hydrogen atoms and one oxygen atom."
  },
  {
    id: "4",
    text: "Which of Newton's laws states that for every action, there is an equal and opposite reaction?",
    options: ["First Law", "Second Law", "Third Law", "Law of Gravity"],
    correctAnswer: "Third Law",
    explanation: "Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction."
  },
  {
    id: "5",
    text: "What is the process by which plants convert light energy into chemical energy?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
    correctAnswer: "Photosynthesis",
    explanation: "Photosynthesis is the process by which plants convert light energy into chemical energy in the form of glucose."
  }
];

const ExamChallengeNew = () => {
  const { examId } = useParams<{ examId: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanations, setShowExplanations] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  useEffect(() => {
    if (!isStarted || timeLeft <= 0) {
      return;
    }

    if (isFinished) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, isFinished, isStarted]);

  const currentQuestion = mockQuestions[currentQuestionIndex];

  const handleAnswerChange = (questionId: string, answer: string) => {
    setUserAnswers({ ...userAnswers, [questionId]: answer });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    setIsFinished(true);
    calculateScore();
  };

  const calculateScore = () => {
    let correctAnswersCount = 0;
    mockQuestions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswersCount++;
      }
    });
    setScore(correctAnswersCount);
    toast.success("Exam finished! Check your results below.");
  };

  const toggleExplanations = () => {
    setShowExplanations(!showExplanations);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const startExam = () => {
    setIsStarted(true);
  };

  if (!examId) {
    return (
      <>
        <Header />
        <div className="container py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Exam ID not provided.</h1>
            <Link to="/challenges">
              <Button>Back to Challenges</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!isStarted) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-2 border-science-primary/20 shadow-lg">
              <div className="bg-gradient-to-r from-science-primary/10 to-science-secondary/10 p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Science Challenge Exam</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Test your knowledge and skills with our timed exam
                </p>
                <div className="flex justify-center">
                  <Clock className="h-16 w-16 text-science-primary mb-4" />
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-science-primary bg-science-primary/10 p-4 text-science-primary rounded-r-md">
                    <h3 className="font-semibold mb-2">Exam Details:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Subject: {examId}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Questions: {mockQuestions.length}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Time Limit: 30 minutes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Instructions:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Read each question carefully before answering</li>
                      <li>You can only select one answer per question</li>
                      <li>The timer will start as soon as you begin the exam</li>
                      <li>Your results will be displayed after you complete all questions</li>
                      <li>Good luck!</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-center pt-4">
                    <Button 
                      onClick={startExam} 
                      size="lg" 
                      className="bg-science-primary hover:bg-science-primary/90 text-white px-8"
                    >
                      Begin Exam
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (isFinished) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
          <div className="container px-4 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Award className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
              <h2 className="text-3xl font-bold">Exam Complete!</h2>
              <p className="text-muted-foreground">
                You've reached the end of the challenge. Here are your results:
              </p>
            </div>

            <Card className="mb-6 shadow-lg border-2 border-science-primary/20">
              <CardContent className="text-center p-8">
                <div className="text-5xl font-bold text-science-primary mb-2">
                  {score} / {mockQuestions.length}
                </div>
                <p className="text-lg text-muted-foreground">
                  You answered {score} questions correctly out of {mockQuestions.length}.
                </p>
                
                <div className="mt-6">
                  <Progress
                    value={(score / mockQuestions.length) * 100}
                    className="h-3"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Button 
                onClick={toggleExplanations} 
                variant="outline" 
                className="w-full"
              >
                {showExplanations ? "Hide Explanations" : "Show Explanations"}
              </Button>

              {showExplanations && (
                <div className="space-y-4">
                  {mockQuestions.map((question, index) => (
                    <Card key={question.id}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">
                          Question {index + 1}: {question.text}
                        </h3>
                        
                        <div className="mt-3 mb-4">
                          <div className={`p-3 border rounded-md ${
                            userAnswers[question.id] === question.correctAnswer 
                              ? "bg-green-50 border-green-200" 
                              : "bg-red-50 border-red-200"
                          }`}>
                            <div className="flex gap-2 items-center mb-2">
                              {userAnswers[question.id] === question.correctAnswer ? (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-600" />
                              )}
                              <span className="font-medium">
                                {userAnswers[question.id] === question.correctAnswer 
                                  ? "Correct Answer!" 
                                  : "Incorrect Answer"}
                              </span>
                            </div>
                            <p>
                              <strong>Your Answer:</strong> {userAnswers[question.id] || "Not Answered"}
                            </p>
                            <p>
                              <strong>Correct Answer:</strong> {question.correctAnswer}
                            </p>
                          </div>
                        </div>
                        
                        {question.explanation && (
                          <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
                            <p className="font-medium mb-1">Explanation:</p>
                            <p className="text-sm">{question.explanation}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/challenges" className="flex-1">
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Back to Challenges
                </Button>
              </Link>
              <Button onClick={() => window.location.reload()} className="flex-1 bg-science-primary hover:bg-science-primary/90">
                <Award className="h-4 w-4 mr-2" />
                Retake Exam
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
        <div className="container px-4 max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">Science Challenge Exam</h1>
                <p className="text-muted-foreground">
                  {examId} - Question {currentQuestionIndex + 1} of {mockQuestions.length}
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-md">
                <Clock className="h-5 w-5" />
                <span className="font-medium">Time Left: {formatTime(timeLeft)}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{Math.round(((currentQuestionIndex + 1) / mockQuestions.length) * 100)}%</span>
              </div>
              <Progress value={((currentQuestionIndex + 1) / mockQuestions.length) * 100} className="h-2" />
            </div>
          </div>

          <Card className="mb-6 shadow-lg border-2 border-science-primary/20">
            <CardContent className="p-6">
              <p className="text-xl font-semibold mb-6">{currentQuestion.text}</p>
              <RadioGroup
                defaultValue={userAnswers[currentQuestion.id]}
                onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <div key={option} className="flex items-center">
                    <RadioGroupItem value={option} id={option} className="peer sr-only" />
                    <Label
                      htmlFor={option}
                      className="flex items-center p-4 w-full border rounded-lg cursor-pointer transition-colors peer-checked:bg-science-primary/10 peer-checked:border-science-primary peer-checked:text-science-primary hover:bg-slate-50"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="justify-between p-6 border-t bg-gray-50">
              <Button
                variant="outline"
                onClick={() => window.history.back()}
              >
                Exit Exam
              </Button>
              <Button 
                onClick={goToNextQuestion}
                className="bg-science-primary hover:bg-science-primary/90"
                disabled={!userAnswers[currentQuestion.id]}
              >
                {currentQuestionIndex === mockQuestions.length - 1 ? "Finish Exam" : "Next Question"}
              </Button>
            </CardFooter>
          </Card>

          <div className="flex justify-between mt-4">
            <Link to="/challenges">
              <Button variant="ghost" className="text-muted-foreground">
                <FileText className="h-4 w-4 mr-2" />
                Back to Challenges
              </Button>
            </Link>
            <Button variant="destructive" onClick={finishExam}>
              <XCircle className="h-4 w-4 mr-2" />
              End Exam
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExamChallengeNew;
