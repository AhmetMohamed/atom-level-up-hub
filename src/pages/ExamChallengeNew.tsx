
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Clock, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import QuizQuestion from '@/components/QuizQuestion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Exam {
  id: string;
  title: string;
  subject: string;
  duration: string;
  durationMinutes: number;
  questions: Question[];
  description: string;
  difficulty: string;
}

interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number;
}

const ExamChallengeNew = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  
  const [exam, setExam] = useState<Exam | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | undefined)[]>([]);
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0, percentage: 0 });

  // Simulated exams data
  const examsData: Record<string, Exam> = {
    "challenge-biology": {
      id: "biology-mock-gcse",
      title: "GCSE Biology Mock Exam",
      subject: "Biology",
      duration: "45 min",
      durationMinutes: 45,
      difficulty: "GCSE Level",
      description: "This mock exam covers key concepts in GCSE Biology including cell biology, organization, infection and response, bioenergetics, homeostasis, inheritance, and ecology.",
      questions: Array(20).fill(null).map((_, index) => ({
        id: `bio-q${index + 1}`,
        question: `Biology Question ${index + 1} - Sample question about cells, organisms, or biological processes.`,
        options: [
          "Answer option 1",
          "Answer option 2",
          "Answer option 3",
          "Answer option 4"
        ],
        answer: Math.floor(Math.random() * 4)
      }))
    },
    "challenge-chemistry": {
      id: "chemistry-a-level",
      title: "A-Level Chemistry Test",
      subject: "Chemistry",
      duration: "60 min",
      durationMinutes: 60,
      difficulty: "A-Level",
      description: "This challenging A-Level Chemistry test covers advanced topics including atomic structure, bonding, energetics, kinetics, equilibrium, redox processes, and organic chemistry.",
      questions: Array(20).fill(null).map((_, index) => ({
        id: `chem-q${index + 1}`,
        question: `Chemistry Question ${index + 1} - Sample question about elements, compounds, or chemical reactions.`,
        options: [
          "Answer option 1",
          "Answer option 2",
          "Answer option 3",
          "Answer option 4"
        ],
        answer: Math.floor(Math.random() * 4)
      }))
    },
    "challenge-physics": {
      id: "physics-a-level",
      title: "A-Level Physics Exam",
      subject: "Physics",
      duration: "90 min",
      durationMinutes: 90,
      difficulty: "A-Level",
      description: "This comprehensive A-Level Physics examination tests your knowledge of mechanics, electricity, waves, nuclear physics, and quantum phenomena.",
      questions: Array(20).fill(null).map((_, index) => ({
        id: `phys-q${index + 1}`,
        question: `Physics Question ${index + 1} - Sample question about forces, energy, or physical phenomena.`,
        options: [
          "Answer option 1",
          "Answer option 2",
          "Answer option 3",
          "Answer option 4"
        ],
        answer: Math.floor(Math.random() * 4)
      }))
    },
    "challenge-math": {
      id: "math-calculus-test",
      title: "Calculus Challenge",
      subject: "Mathematics",
      duration: "45 min",
      durationMinutes: 45,
      difficulty: "Advanced",
      description: "Test your advanced mathematics skills with this calculus challenge covering derivatives, integrals, differential equations, and their applications.",
      questions: Array(20).fill(null).map((_, index) => ({
        id: `math-q${index + 1}`,
        question: `Mathematics Question ${index + 1} - Sample question about calculus concepts or applications.`,
        options: [
          "Answer option 1",
          "Answer option 2",
          "Answer option 3", 
          "Answer option 4"
        ],
        answer: Math.floor(Math.random() * 4)
      }))
    }
  };

  useEffect(() => {
    // Simulate loading exam data from API
    setTimeout(() => {
      const selectedExam = examsData[examId as string];
      if (selectedExam) {
        setExam(selectedExam);
        setSelectedAnswers(Array(selectedExam.questions.length).fill(undefined));
      }
      setLoading(false);
    }, 500);
  }, [examId]);

  useEffect(() => {
    if (!examStarted || !exam) return;

    // Initialize timer
    setTimeRemaining(exam.durationMinutes * 60);
    
    // Start the countdown
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, exam]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startExam = () => {
    setExamStarted(true);
  };

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = optionIndex;
      return newAnswers;
    });
  };

  const submitExam = () => {
    // Calculate score
    if (!exam) return;
    
    let correctCount = 0;
    exam.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / exam.questions.length) * 100);
    
    setScore({
      correct: correctCount,
      total: exam.questions.length,
      percentage: percentage
    });

    setExamSubmitted(true);
  };

  const navigateBack = () => {
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container px-4 py-8 flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Loading exam...</p>
            <Progress value={50} className="w-[300px]" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container px-4 py-8 flex-1">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Exam Not Found</h1>
            <p className="text-muted-foreground mb-6">The exam you're looking for doesn't exist or hasn't been created yet.</p>
            <Button onClick={navigateBack}>Back to Dashboard</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 container px-4 py-6 max-w-4xl">
        {!examStarted && !examSubmitted ? (
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" className="mb-4" onClick={navigateBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Badge variant="outline" className="bg-science-light text-science-primary">
                  {exam.subject}
                </Badge>
              </div>
              <CardTitle className="text-3xl">{exam.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{exam.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 bg-slate-100 p-4 rounded-md">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-lg font-semibold">{exam.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 p-4 rounded-md">
                  <FileQuestion className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Questions</p>
                    <p className="text-lg font-semibold">{exam.questions.length}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 p-4 rounded-md">
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Difficulty</p>
                    <p className="text-lg font-semibold">{exam.difficulty}</p>
                  </div>
                </div>
              </div>
              
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Information</AlertTitle>
                <AlertDescription>
                  Once you start the exam, the timer will begin counting down. You must complete all 
                  {exam.questions.length} questions within {exam.duration}. Make sure you're ready 
                  before clicking the start button.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={startExam}>
                Start Exam
              </Button>
            </CardFooter>
          </Card>
        ) : examSubmitted ? (
          <Card className="shadow-sm">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <CardTitle className="text-3xl">Exam Completed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{score.percentage}%</div>
                <p className="text-muted-foreground">You scored {score.correct} out of {score.total} questions correctly</p>
              </div>
              
              <div className="p-4 bg-muted rounded-md">
                <h3 className="font-semibold mb-2">Performance Analysis</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Overall Score</span>
                      <span className="text-sm font-medium">{score.percentage}%</span>
                    </div>
                    <Progress value={score.percentage} className="h-2" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    {score.percentage >= 80 
                      ? "Excellent work! You've demonstrated a strong understanding of the subject matter."
                      : score.percentage >= 60 
                      ? "Good job. You have a solid grasp of most concepts, but there's still room for improvement."
                      : "You might need to study more on this topic. Review the questions you missed."}
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-4">Question Review</h3>
                <div className="space-y-4">
                  {exam.questions.map((question, index) => (
                    <QuizQuestion
                      key={question.id}
                      question={question}
                      index={index}
                      selectedOption={selectedAnswers[index]}
                      isSubmitted={true}
                      onSelectOption={(optionIndex) => {}}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={navigateBack}>
                Back to Dashboard
              </Button>
              <Button>Download Certificate</Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <div className="mb-6 bg-white p-4 rounded-lg border sticky top-0 z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold">{exam.title}</h1>
                  <p className="text-muted-foreground">{exam.subject} • {exam.difficulty}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Answered:</div>
                    <div className="font-bold">
                      {selectedAnswers.filter(a => a !== undefined).length} / {exam.questions.length}
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg flex items-center gap-2">
                    <Clock className="text-yellow-500 h-5 w-5" />
                    <div className="font-mono text-xl font-bold">{formatTime(timeRemaining)}</div>
                  </div>
                </div>
              </div>
              <Progress 
                value={(selectedAnswers.filter(a => a !== undefined).length / exam.questions.length) * 100} 
                className="mt-4 h-2" 
              />
            </div>
            
            <div className="space-y-6">
              {exam.questions.map((question, index) => (
                <QuizQuestion
                  key={question.id}
                  question={question}
                  index={index}
                  selectedOption={selectedAnswers[index]}
                  isSubmitted={false}
                  onSelectOption={(optionIndex) => handleSelectOption(index, optionIndex)}
                />
              ))}
              
              <div className="sticky bottom-4 bg-white p-4 rounded-lg border shadow-md">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {selectedAnswers.filter(a => a !== undefined).length} of {exam.questions.length} questions answered
                  </div>
                  <Button onClick={submitExam}>Submit Exam</Button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ExamChallengeNew;
