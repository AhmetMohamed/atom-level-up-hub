
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

// Mock exam data
const examData = {
  "challenge-biology": {
    id: "challenge-biology",
    title: "GCSE Biology Mock",
    subject: "Biology",
    description: "Test your biology knowledge with this comprehensive mock exam.",
    timeLimit: 45 * 60, // 45 minutes in seconds
    questions: [
      {
        id: "q1",
        question: "Which organelle is responsible for protein synthesis in a cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
        answer: 1,
      },
      {
        id: "q2",
        question: "Which process converts glucose to ATP without the use of oxygen?",
        options: ["Photosynthesis", "Cellular respiration", "Anaerobic respiration", "Osmosis"],
        answer: 2,
      },
      {
        id: "q3",
        question: "What is the function of stomata in plants?",
        options: [
          "To absorb water from the soil",
          "To store excess glucose", 
          "To allow gas exchange with the atmosphere", 
          "To create energy via photosynthesis"
        ],
        answer: 2,
      },
      {
        id: "q4",
        question: "Which of the following is NOT a method of asexual reproduction?",
        options: ["Binary fission", "Budding", "Meiosis", "Vegetative propagation"],
        answer: 2,
      },
      {
        id: "q5",
        question: "What is the role of enzymes in biological reactions?",
        options: [
          "They provide energy for the reaction", 
          "They catalyze (speed up) reactions", 
          "They are produced as a result of reactions", 
          "They prevent reactions from occurring"
        ],
        answer: 1,
      }
    ],
    xpReward: 100,
  },
  "challenge-chemistry": {
    id: "challenge-chemistry",
    title: "A-Level Chemistry Test",
    subject: "Chemistry",
    description: "Challenge yourself with this A-Level chemistry exam.",
    timeLimit: 60 * 60, // 60 minutes in seconds
    questions: [
      {
        id: "q1",
        question: "What is the molecular formula for glucose?",
        options: ["C6H12O6", "C12H22O11", "C2H6O", "CH4O"],
        answer: 0,
      },
      {
        id: "q2",
        question: "Which element has the electron configuration 1s² 2s² 2p⁶ 3s² 3p³?",
        options: ["Nitrogen", "Phosphorus", "Sulfur", "Chlorine"],
        answer: 1,
      },
      {
        id: "q3",
        question: "What type of bond is formed between hydrogen and chlorine in HCl?",
        options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
        answer: 0,
      },
      {
        id: "q4",
        question: "What is the pH of a solution with a hydrogen ion concentration of 10⁻⁹ mol/L?",
        options: ["5", "7", "9", "14"],
        answer: 2,
      },
      {
        id: "q5",
        question: "Which of these compounds would conduct electricity when dissolved in water?",
        options: ["C6H12O6 (glucose)", "NaCl (sodium chloride)", "C2H6 (ethane)", "C12H22O11 (sucrose)"],
        answer: 1,
      }
    ],
    xpReward: 150,
  }
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const ExamChallenge = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examResults, setExamResults] = useState<{
    correctAnswers: number;
    totalQuestions: number;
    score: number;
    xpEarned: number;
  } | null>(null);
  const [isTimedOut, setIsTimedOut] = useState(false);
  
  // Get the exam data
  const exam = examId ? examData[examId as keyof typeof examData] : null;
  
  useEffect(() => {
    if (exam) {
      setTimeRemaining(exam.timeLimit);
    }
  }, [exam]);
  
  // Timer effect
  useEffect(() => {
    if (!exam || examSubmitted || isTimedOut) return;
    
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [exam, examSubmitted, isTimedOut]);
  
  if (!exam) {
    return (
      <DashboardLayout>
        <div className="container px-4 py-12 max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">Exam Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The exam challenge you're looking for doesn't exist.
          </p>
          <Link to="/dashboard">
            <Button>Return to Dashboard</Button>
          </Link>
        </div>
      </DashboardLayout>
    );
  }
  
  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    if (!examSubmitted && !isTimedOut) {
      setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
    }
  };
  
  const handleNext = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleTimeOut = () => {
    setIsTimedOut(true);
    toast.warning("Time's up! Your exam has been submitted automatically.");
    submitExam();
  };
  
  const submitExam = () => {
    if (!examSubmitted) {
      let correctAnswers = 0;
      
      exam.questions.forEach(question => {
        if (selectedAnswers[question.id] === question.answer) {
          correctAnswers++;
        }
      });
      
      const score = Math.floor((correctAnswers / exam.questions.length) * 100);
      const xpEarned = Math.floor((correctAnswers / exam.questions.length) * exam.xpReward);
      
      setExamResults({
        correctAnswers,
        totalQuestions: exam.questions.length,
        score,
        xpEarned,
      });
      
      setExamSubmitted(true);
      
      if (score >= 80) {
        toast.success(`Great job! You scored ${score}% and earned ${xpEarned} XP!`);
      } else if (score >= 50) {
        toast.info(`You scored ${score}% and earned ${xpEarned} XP. Good effort!`);
      } else {
        toast.warning(`You scored ${score}%. Keep practicing to improve!`);
      }
    }
  };
  
  const currentQ = exam.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / exam.questions.length) * 100;
  const allQuestionsAnswered = exam.questions.every(q => selectedAnswers[q.id] !== undefined);
  
  // Show results page if exam is submitted
  if (examSubmitted) {
    return (
      <DashboardLayout>
        <div className="container px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{exam.title} Results</h1>
            <p className="text-muted-foreground">
              You've completed the exam challenge!
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="text-center space-y-4 mb-8">
                <div className="inline-block h-24 w-24 rounded-full bg-science-light border-4 border-science-primary flex items-center justify-center text-4xl">
                  {examResults?.score || 0}%
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {examResults?.score || 0 >= 80 ? "Excellent!" : 
                     examResults?.score || 0 >= 50 ? "Good effort!" : 
                     "Keep practicing!"}
                  </h2>
                  <p className="text-muted-foreground">
                    You answered {examResults?.correctAnswers || 0} out of {examResults?.totalQuestions || 0} questions correctly.
                  </p>
                </div>
                <div className="badge-xp animate-pulse-light text-base py-1.5 px-4">
                  +{examResults?.xpEarned || 0} XP
                </div>
              </div>
              
              <div className="space-y-6">
                {exam.questions.map((question, index) => (
                  <div key={question.id} className="p-4 rounded-lg border">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Question {index + 1}</div>
                      {selectedAnswers[question.id] === question.answer ? (
                        <div className="text-green-600 font-medium flex items-center gap-1">
                          Correct
                        </div>
                      ) : (
                        <div className="text-red-500 font-medium flex items-center gap-1">
                          Incorrect
                        </div>
                      )}
                    </div>
                    <p className="mb-3">{question.question}</p>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div 
                          key={optionIndex}
                          className={`p-3 rounded-md border ${
                            question.answer === optionIndex 
                              ? 'bg-green-100 border-green-300' 
                              : selectedAnswers[question.id] === optionIndex 
                                ? 'bg-red-100 border-red-300' 
                                : 'bg-muted/50'
                          }`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                >
                  Return to Dashboard
                </Button>
                <Button
                  className="bg-science-primary hover:bg-science-primary/90"
                  onClick={() => navigate('/leaderboard')}
                >
                  View Leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }
  
  // Show exam page
  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-4xl">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-background z-10 py-2">
          <Link to="/dashboard" className="text-muted-foreground hover:text-foreground flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Exit Exam
          </Link>
          
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            timeRemaining < 60 ? 'bg-red-100 border-red-300 animate-pulse' : 'bg-muted/50'
          }`}>
            <Clock className={`h-4 w-4 ${timeRemaining < 60 ? 'text-red-500' : 'text-muted-foreground'}`} />
            <span className="font-mono font-medium">
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>
        
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">{exam.title}</h1>
          <p className="text-muted-foreground">{exam.description}</p>
        </div>
        
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Question {currentQuestion + 1}</h2>
                <span className="text-sm text-muted-foreground">
                  {currentQuestion + 1} of {exam.questions.length}
                </span>
              </div>
              
              <p className="text-lg">{currentQ.question}</p>
              
              <div className="space-y-3 pt-2">
                {currentQ.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedAnswers[currentQ.id] === index
                        ? 'bg-science-light border-science-primary'
                        : 'hover:bg-muted/50'
                    }`}
                    onClick={() => handleAnswerSelect(currentQ.id, index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center border ${
                        selectedAnswers[currentQ.id] === index
                          ? 'bg-science-primary text-white border-science-primary'
                          : 'border-muted-foreground'
                      }`}>
                        <span className="text-sm">
                          {String.fromCharCode(65 + index)}
                        </span>
                      </div>
                      <span>{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            
            {currentQuestion === exam.questions.length - 1 ? (
              <Button
                className="bg-science-primary hover:bg-science-primary/90"
                onClick={submitExam}
                disabled={!allQuestionsAnswered}
              >
                Submit Exam
              </Button>
            ) : (
              <Button
                className="bg-science-primary hover:bg-science-primary/90"
                onClick={handleNext}
                disabled={!selectedAnswers[currentQ.id]}
              >
                Next Question
              </Button>
            )}
          </div>
          
          <div className="w-full sm:w-48">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {exam.questions.map((question, index) => (
            <div
              key={question.id}
              className={`h-8 w-8 rounded-full flex items-center justify-center cursor-pointer ${
                selectedAnswers[question.id] !== undefined
                  ? 'bg-science-primary text-white'
                  : 'bg-muted border'
              } ${currentQuestion === index ? 'ring-2 ring-science-primary/50' : ''}`}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        
        {!allQuestionsAnswered && (
          <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-200">
            <AlertCircle className="h-4 w-4" />
            <p className="text-sm">
              You need to answer all questions before submitting the exam.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ExamChallenge;
