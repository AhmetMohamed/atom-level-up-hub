
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Trophy, XCircle } from "lucide-react";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";
import QuizQuestion from "@/components/QuizQuestion";

// Mock lesson data
const lessonData = {
  'biology-cells': {
    id: 'biology-cells',
    title: 'Cell Structure & Function',
    subject: 'Biology',
    level: 'Beginner',
    xp: 120,
    content: [
      {
        id: 'intro',
        title: 'Introduction to Cells',
        type: 'content',
        body: `
          <h2>What are Cells?</h2>
          <p>Cells are the basic structural and functional units of all living organisms. They are often called the "building blocks of life".</p>
          <p>All cells share several common features:</p>
          <ul>
            <li>They are bounded by a membrane that separates them from their environment</li>
            <li>They contain genetic material (DNA)</li>
            <li>They use energy and carry out metabolic reactions</li>
            <li>They can reproduce</li>
          </ul>
          <h3>Types of Cells</h3>
          <p>There are two main types of cells:</p>
          <ol>
            <li><strong>Prokaryotic cells</strong>: Simpler, smaller cells without a nucleus (e.g., bacteria)</li>
            <li><strong>Eukaryotic cells</strong>: More complex cells with a nucleus and other membrane-bound organelles (e.g., plant and animal cells)</li>
          </ol>
        `
      },
      {
        id: 'cell-structure',
        title: 'Cell Structure',
        type: 'content',
        body: `
          <h2>Eukaryotic Cell Structure</h2>
          <p>Eukaryotic cells have many specialized structures that perform specific functions. These include:</p>
          <ul>
            <li><strong>Cell Membrane</strong>: Controls what enters and leaves the cell</li>
            <li><strong>Nucleus</strong>: Contains the cell's genetic material (DNA) and controls cellular activities</li>
            <li><strong>Cytoplasm</strong>: Gel-like substance where chemical reactions occur</li>
            <li><strong>Mitochondria</strong>: Powerhouse of the cell; produces energy through cellular respiration</li>
            <li><strong>Endoplasmic Reticulum</strong>: Network of membranes involved in protein synthesis and lipid metabolism</li>
            <li><strong>Golgi Apparatus</strong>: Modifies, sorts, and packages proteins for secretion or use within the cell</li>
            <li><strong>Lysosomes</strong>: Contain digestive enzymes to break down waste materials and cellular debris</li>
            <li><strong>Ribosomes</strong>: Sites of protein synthesis</li>
          </ul>
          <h3>Plant Cells vs Animal Cells</h3>
          <p>Plant cells have additional structures not found in animal cells:</p>
          <ul>
            <li><strong>Cell Wall</strong>: Rigid outer layer that provides support and protection</li>
            <li><strong>Chloroplasts</strong>: Contain chlorophyll for photosynthesis</li>
            <li><strong>Large Central Vacuole</strong>: Stores water, nutrients, and waste products</li>
          </ul>
        `
      },
      {
        id: 'quiz-1',
        title: 'Check Your Understanding',
        type: 'quiz',
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is NOT a function of the cell membrane?',
            options: [
              'Controlling what enters and leaves the cell',
              'Providing structural support to plant cells',
              'Separating the cell from its environment',
              'Facilitating cell-to-cell communication'
            ],
            answer: 1,
          },
          {
            id: 'q2',
            question: 'Which organelle is responsible for energy production in the cell?',
            options: [
              'Nucleus',
              'Golgi Apparatus',
              'Mitochondria',
              'Endoplasmic Reticulum'
            ],
            answer: 2,
          },
          {
            id: 'q3',
            question: 'Which structures are found in plant cells but NOT in animal cells?',
            options: [
              'Nucleus and ribosomes',
              'Mitochondria and lysosomes',
              'Cell wall and chloroplasts',
              'Endoplasmic reticulum and Golgi apparatus'
            ],
            answer: 2,
          }
        ]
      },
      {
        id: 'cell-function',
        title: 'Cell Function',
        type: 'content',
        body: `
          <h2>Cell Function</h2>
          <p>Cells perform various functions essential for life:</p>
          <ul>
            <li><strong>Energy Production</strong>: Cells convert nutrients into ATP (adenosine triphosphate), the energy currency of the cell.</li>
            <li><strong>Protein Synthesis</strong>: Cells manufacture proteins based on genetic instructions from DNA.</li>
            <li><strong>Transport</strong>: Cells move substances across their membranes through processes like diffusion, osmosis, and active transport.</li>
            <li><strong>Cell Division</strong>: Cells reproduce to create new cells for growth, repair, and reproduction.</li>
          </ul>
          <h3>Cell Communication</h3>
          <p>Cells communicate with each other through:</p>
          <ul>
            <li><strong>Direct Contact</strong>: Adjacent cells can communicate through specialized junctions.</li>
            <li><strong>Chemical Signals</strong>: Cells release chemicals that can affect nearby or distant cells.</li>
            <li><strong>Electrical Signals</strong>: Some specialized cells (like neurons) use electrical impulses to communicate.</li>
          </ul>
        `
      },
      {
        id: 'quiz-2',
        title: 'Final Quiz',
        type: 'quiz',
        questions: [
          {
            id: 'q4',
            question: 'What is the primary function of mitochondria?',
            options: [
              'Protein synthesis',
              'Energy production',
              'Waste disposal',
              'Cell division'
            ],
            answer: 1,
          },
          {
            id: 'q5',
            question: 'Which process allows cells to move substances from areas of low concentration to high concentration?',
            options: [
              'Diffusion',
              'Osmosis',
              'Active transport',
              'Facilitated diffusion'
            ],
            answer: 2,
          },
          {
            id: 'q6',
            question: 'What is the main difference between prokaryotic and eukaryotic cells?',
            options: [
              'Prokaryotic cells are larger',
              'Eukaryotic cells don\'t have DNA',
              'Prokaryotic cells don\'t have a nucleus',
              'Eukaryotic cells can\'t reproduce'
            ],
            answer: 2,
          },
          {
            id: 'q7',
            question: 'Which organelle is responsible for modifying, sorting, and packaging proteins?',
            options: [
              'Ribosome',
              'Endoplasmic Reticulum',
              'Golgi Apparatus',
              'Lysosome'
            ],
            answer: 2,
          }
        ]
      }
    ]
  }
};

const Lesson = () => {
  const { lessonId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});
  const [earnedXp, setEarnedXp] = useState(0);
  
  // Get the lesson data
  const lesson = lessonId ? lessonData[lessonId as keyof typeof lessonData] : null;
  
  if (!lesson) {
    return (
      <DashboardLayout>
        <div className="container px-4 py-12 max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">Lesson Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The lesson you're looking for doesn't exist or hasn't been created yet.
          </p>
          <Link to="/dashboard">
            <Button>Return to Dashboard</Button>
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const currentLesson = lesson.content[currentSection];
  const isFirstSection = currentSection === 0;
  const isLastSection = currentSection === lesson.content.length - 1;
  
  const progress = Math.floor(((currentSection + 1) / lesson.content.length) * 100);

  const handleNext = () => {
    if (!isLastSection) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (!isFirstSection) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    if (!quizSubmitted[currentLesson.id]) {
      setQuizAnswers({ ...quizAnswers, [questionId]: optionIndex });
    }
  };

  const handleSubmitQuiz = () => {
    if (currentLesson.type === 'quiz') {
      let correctAnswers = 0;
      let totalQuestions = currentLesson.questions.length;
      
      currentLesson.questions.forEach(question => {
        if (quizAnswers[question.id] === question.answer) {
          correctAnswers++;
        }
      });
      
      const score = Math.floor((correctAnswers / totalQuestions) * 100);
      const xpEarned = Math.floor((correctAnswers / totalQuestions) * 25); // 25 XP max per quiz
      
      setEarnedXp(earnedXp + xpEarned);
      setQuizSubmitted({ ...quizSubmitted, [currentLesson.id]: true });
      
      if (score >= 70) {
        toast.success(`Great job! You scored ${score}% and earned ${xpEarned} XP!`);
      } else if (score >= 40) {
        toast.info(`You scored ${score}% and earned ${xpEarned} XP. Keep practicing!`);
      } else {
        toast.warning(`You scored ${score}%. Try reviewing the content and try again.`);
      }
    }
  };

  const isQuizComplete = currentLesson.type === 'quiz' && 
    currentLesson.questions.every(q => quizAnswers[q.id] !== undefined);
  
  const canProceed = currentLesson.type === 'content' || quizSubmitted[currentLesson.id];

  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-4xl">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <Link to="/dashboard" className="text-muted-foreground hover:text-foreground flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-2">
            <div className="badge-level">
              {lesson.level}
            </div>
            {earnedXp > 0 && (
              <div className="badge-xp animate-pulse-light">
                <Trophy className="h-3 w-3 mr-1" />
                +{earnedXp} XP
              </div>
            )}
          </div>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{lesson.title}</h1>
          <p className="text-muted-foreground">{lesson.subject}</p>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                {currentLesson.title}
              </CardTitle>
              <div className="text-sm font-medium">
                {currentSection + 1} / {lesson.content.length}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {currentLesson.type === 'content' ? (
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: currentLesson.body }}
              />
            ) : (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Quiz: {currentLesson.title}</h2>
                {currentLesson.questions.map((question, index) => (
                  <QuizQuestion
                    key={question.id}
                    question={question}
                    index={index}
                    selectedOption={quizAnswers[question.id]}
                    isSubmitted={quizSubmitted[currentLesson.id]}
                    onSelectOption={(optionIndex) => handleAnswerSelect(question.id, optionIndex)}
                  />
                ))}
                
                {!quizSubmitted[currentLesson.id] && (
                  <Button 
                    onClick={handleSubmitQuiz} 
                    disabled={!isQuizComplete}
                    className="bg-science-primary hover:bg-science-primary/90"
                  >
                    Submit Answers
                  </Button>
                )}
                
                {quizSubmitted[currentLesson.id] && (
                  <div className="p-4 rounded-lg bg-muted/50 text-center">
                    <p className="font-medium">You've completed this quiz!</p>
                    {!isLastSection && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Continue to the next section.
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={isFirstSection}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={isLastSection || !canProceed}
              className="bg-science-primary hover:bg-science-primary/90"
            >
              {isLastSection ? 'Complete' : 'Next'}
              {!isLastSection && <ArrowRight className="ml-1.5 h-4 w-4" />}
            </Button>
          </div>
          <div className="w-full sm:w-48">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Lesson Content</h2>
          <Tabs defaultValue={lesson.content[currentSection].id}>
            <TabsList className="mb-3 overflow-x-auto flex flex-nowrap w-full max-w-[95vw]">
              {lesson.content.map((section, index) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  onClick={() => setCurrentSection(index)}
                  className="flex-shrink-0"
                >
                  <div className="flex items-center gap-1.5">
                    {quizSubmitted[section.id] ? (
                      <CheckCircle className="h-3.5 w-3.5" />
                    ) : (
                      <span className="h-4 w-4 rounded-full border flex items-center justify-center text-xs">
                        {index + 1}
                      </span>
                    )}
                    {section.type === 'content' ? 'Content' : 'Quiz'}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="rounded-lg border p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Having trouble with this lesson? Try watching our 
            <Link to="#" className="text-science-primary hover:underline mx-1">
              supplementary video
            </Link>
            or check out the
            <Link to="#" className="text-science-primary hover:underline mx-1">
              discussion forum
            </Link>.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Lesson;
