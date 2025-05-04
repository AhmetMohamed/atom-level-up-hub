import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, XCircle, Clock, Award, FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "@/components/DashboardLayout";
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
  const [score, setScore] = useState(0);
  const [showExplanations, setShowExplanations] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }

    if (isFinished) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, isFinished]);

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

  if (!examId) {
    return <div>Exam ID not provided.</div>;
  }

  if (isFinished) {
    return (
      <DashboardLayout>
        <div className="container px-4 py-6 max-w-3xl">
          <div className="text-center mb-8">
            <Award className="h-12 w-12 mx-auto text-yellow-500 mb-2" />
            <h2 className="text-3xl font-bold">Exam Complete!</h2>
            <p className="text-muted-foreground">
              You've reached the end of the challenge. Here are your results:
            </p>
          </div>

          <Card className="mb-4">
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-blue-600">
                {score} / {mockQuestions.length}
              </div>
              <p className="text-muted-foreground">
                You answered {score} questions correctly out of {mockQuestions.length}.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button onClick={toggleExplanations} variant="secondary">
              {showExplanations ? "Hide Explanations" : "Show Explanations"}
            </Button>

            {showExplanations && (
              <div className="space-y-4">
                {mockQuestions.map((question) => (
                  <Card key={question.id}>
                    <CardContent>
                      <h3 className="text-lg font-semibold mb-2">{question.text}</h3>
                      <p>
                        <strong>Your Answer:</strong> {userAnswers[question.id] || "Not Answered"}
                      </p>
                      <p>
                        <strong>Correct Answer:</strong> {question.correctAnswer}
                      </p>
                      {question.explanation && (
                        <div className="mt-2">
                          <strong>Explanation:</strong> {question.explanation}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-between">
            <Link to="/challenges">
              <Button variant="outline">Back to Challenges</Button>
            </Link>
            <Button onClick={() => window.location.reload()}>Retake Exam</Button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-3xl">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Exam Challenge</h1>
            <p className="text-muted-foreground">
              {examId} - Question {currentQuestionIndex + 1} of {mockQuestions.length}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Time Left: {formatTime(timeLeft)}</span>
          </div>
        </div>

        <Card className="mb-4">
          <CardContent>
            <p className="text-lg font-semibold mb-4">{currentQuestion.text}</p>
            <RadioGroup
              defaultValue={userAnswers[currentQuestion.id]}
              onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
            >
              {currentQuestion.options.map((option) => (
                <div key={option} className="mb-2">
                  <RadioGroupItem value={option} id={option} className="peer sr-only" />
                  <Label
                    htmlFor={option}
                    className="flex items-center p-4 border rounded-lg cursor-pointer peer-checked:bg-secondary peer-checked:text-secondary-foreground peer-checked:border-secondary"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="justify-between">
            <Button
              variant="outline"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
            <Button onClick={goToNextQuestion}>
              {currentQuestionIndex === mockQuestions.length - 1 ? "Finish Exam" : "Next Question"}
            </Button>
          </CardFooter>
        </Card>

        <div className="flex justify-between">
          <Link to="/challenges">
            <Button variant="ghost">
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
    </DashboardLayout>
  );
};

export default ExamChallengeNew;
