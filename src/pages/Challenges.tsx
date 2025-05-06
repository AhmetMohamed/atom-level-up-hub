
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Filter,
  SortDesc,
  FileText,
  CheckSquare,
  Edit3,
  BookOpen,
  ChevronDown
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Challenge {
  id: string;
  title: string;
  subject: string;
  difficulty: "easy" | "medium" | "hard";
  questions: number;
  timeMinutes: number;
  completionRate: number;
  xpReward: number;
}

const challenges: Challenge[] = [
  {
    id: "bio-basics-1",
    title: "Biology Fundamentals",
    subject: "Biology",
    difficulty: "easy",
    questions: 20,
    timeMinutes: 30,
    completionRate: 85,
    xpReward: 150,
  },
  {
    id: "chem-organic-1",
    title: "Organic Chemistry Challenge",
    subject: "Chemistry",
    difficulty: "medium",
    questions: 15,
    timeMinutes: 25,
    completionRate: 65,
    xpReward: 200,
  },
  {
    id: "physics-mechanics-1",
    title: "Physics: Forces & Motion",
    subject: "Physics",
    difficulty: "hard",
    questions: 15,
    timeMinutes: 30,
    completionRate: 45,
    xpReward: 250,
  },
  {
    id: "math-calculus-1",
    title: "Calculus Concepts",
    subject: "Mathematics",
    difficulty: "medium",
    questions: 20,
    timeMinutes: 35,
    completionRate: 60,
    xpReward: 225,
  },
  {
    id: "bio-genetics-1",
    title: "Genetics & Inheritance",
    subject: "Biology",
    difficulty: "medium",
    questions: 15,
    timeMinutes: 25,
    completionRate: 70,
    xpReward: 175,
  },
  {
    id: "chem-periodic-1",
    title: "Periodic Table Challenge",
    subject: "Chemistry",
    difficulty: "easy",
    questions: 20,
    timeMinutes: 20,
    completionRate: 80,
    xpReward: 125,
  },
  {
    id: "physics-waves-1",
    title: "Waves & Optics",
    subject: "Physics",
    difficulty: "medium",
    questions: 15,
    timeMinutes: 25,
    completionRate: 55,
    xpReward: 200,
  },
  {
    id: "math-algebra-1",
    title: "Advanced Algebra",
    subject: "Mathematics",
    difficulty: "hard",
    questions: 15,
    timeMinutes: 30,
    completionRate: 40,
    xpReward: 250,
  },
];

// Real exam prep data
const examPrepMCQs = [
  {
    id: "mcq-1",
    question: "Which organelle is responsible for protein synthesis in a cell?",
    options: ["Mitochondria", "Ribosomes", "Golgi apparatus", "Nucleus"],
    answer: "Ribosomes"
  },
  {
    id: "mcq-2",
    question: "What is the main function of chlorophyll in plants?",
    options: ["Cell division", "Photosynthesis", "Respiration", "Protein synthesis"],
    answer: "Photosynthesis"
  },
  {
    id: "mcq-3",
    question: "Which of the following is NOT a noble gas?",
    options: ["Helium", "Neon", "Chlorine", "Argon"],
    answer: "Chlorine"
  },
  {
    id: "mcq-4",
    question: "Which law states that the volume of a gas is inversely proportional to its pressure at constant temperature?",
    options: ["Charles' Law", "Boyle's Law", "Avogadro's Law", "Gay-Lussac's Law"],
    answer: "Boyle's Law"
  },
  {
    id: "mcq-5",
    question: "What is the SI unit of force?",
    options: ["Pascal", "Joule", "Watt", "Newton"],
    answer: "Newton"
  },
  // Additional 15 MCQs would go here in a real application
];

const structuredQuestions = [
  {
    id: "sq-1",
    title: "Cellular Respiration",
    question: "Explain the process of cellular respiration and its importance in living organisms. Include the main stages and the energy transfers involved.",
    marks: 6
  },
  {
    id: "sq-2",
    title: "Chemical Bonding",
    question: "Compare and contrast ionic and covalent bonding. Provide examples of compounds that exhibit each type of bonding and explain their properties.",
    marks: 8
  },
  {
    id: "sq-3",
    title: "Newton's Laws of Motion",
    question: "State Newton's three laws of motion and provide a real-world example for each law. Explain how these laws are applied in the design of safety features in modern vehicles.",
    marks: 10
  },
  // Additional 7 structured questions would go here in a real application
];

const Challenges = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("default");
  const [activeTab, setActiveTab] = useState("challenges");

  const filteredChallenges = challenges
    .filter(challenge => !selectedSubject || challenge.subject === selectedSubject)
    .filter(challenge => !selectedDifficulty || challenge.difficulty === selectedDifficulty)
    .sort((a, b) => {
      switch (sortBy) {
        case "xp-high":
          return b.xpReward - a.xpReward;
        case "xp-low":
          return a.xpReward - b.xpReward;
        case "difficulty-high":
          return b.difficulty === "hard" ? 1 : b.difficulty === "medium" ? (a.difficulty === "hard" ? -1 : 1) : -1;
        case "difficulty-low":
          return a.difficulty === "easy" ? -1 : a.difficulty === "medium" ? (b.difficulty === "easy" ? 1 : -1) : 1;
        default:
          return 0;
      }
    });

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-amber-100 text-amber-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyStars = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return 1;
      case "medium":
        return 2;
      case "hard":
        return 3;
      default:
        return 0;
    }
  };

  const clearFilters = () => {
    setSelectedSubject(null);
    setSelectedDifficulty(null);
    setSortBy("default");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                  <Award className="h-8 w-8 text-science-primary" />
                  Science Challenges
                </h1>
                <p className="text-muted-foreground">
                  Test your knowledge with our science exam challenges and practice materials
                </p>
              </div>
            </div>

            <Tabs defaultValue="challenges" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="w-full justify-start mb-8 overflow-x-auto">
                <TabsTrigger value="challenges" className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4" />
                  Quick Challenges
                </TabsTrigger>
                <TabsTrigger value="exam-prep" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Real Exam Prep
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="challenges">
                <div className="flex gap-2 mb-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Subject
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSelectedSubject("Biology")}>
                        Biology
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedSubject("Chemistry")}>
                        Chemistry
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedSubject("Physics")}>
                        Physics
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedSubject("Mathematics")}>
                        Mathematics
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        Difficulty
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSelectedDifficulty("easy")}>
                        Easy
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedDifficulty("medium")}>
                        Medium
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSelectedDifficulty("hard")}>
                        Hard
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <SortDesc className="h-4 w-4" />
                        Sort
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSortBy("xp-high")}>
                        XP (Highest first)
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("xp-low")}>
                        XP (Lowest first)
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("difficulty-high")}>
                        Difficulty (Hardest first)
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("difficulty-low")}>
                        Difficulty (Easiest first)
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {(selectedSubject || selectedDifficulty || sortBy !== "default") && (
                  <div className="flex items-center gap-2 mb-6 p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Active filters:</span>
                    {selectedSubject && (
                      <Badge variant="outline" className={getSubjectColor(selectedSubject)}>
                        {selectedSubject}
                      </Badge>
                    )}
                    {selectedDifficulty && (
                      <Badge variant="outline" className={getDifficultyColor(selectedDifficulty)}>
                        {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}
                      </Badge>
                    )}
                    {sortBy !== "default" && (
                      <Badge variant="outline">
                        {sortBy === "xp-high" ? "XP (High → Low)" : 
                        sortBy === "xp-low" ? "XP (Low → High)" : 
                        sortBy === "difficulty-high" ? "Difficulty (Hard → Easy)" : 
                        "Difficulty (Easy → Hard)"}
                      </Badge>
                    )}
                    <button 
                      onClick={clearFilters}
                      className="text-xs text-red-500 hover:text-red-700 ml-auto"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}

                {filteredChallenges.length === 0 ? (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-semibold mb-2">No challenges found</h3>
                    <p className="text-muted-foreground mb-6">Try adjusting your filter criteria</p>
                    <Button onClick={clearFilters}>Clear all filters</Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredChallenges.map((challenge) => (
                      <Card key={challenge.id} className="overflow-hidden transition-all hover:shadow-md">
                        <div className={`p-4 ${getSubjectColor(challenge.subject)}`}>
                          <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">{challenge.title}</h3>
                            <Badge variant="outline" className={getSubjectColor(challenge.subject)}>
                              {challenge.subject}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardContent className="p-4">
                          <div className="grid grid-cols-3 gap-2 text-center mb-4">
                            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                              <span className="text-xs text-muted-foreground">Difficulty</span>
                              <div className="flex mt-1">
                                {Array(getDifficultyStars(challenge.difficulty))
                                  .fill(0)
                                  .map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className="h-4 w-4 text-amber-500 fill-amber-500" 
                                    />
                                  ))}
                                {Array(3 - getDifficultyStars(challenge.difficulty))
                                  .fill(0)
                                  .map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className="h-4 w-4 text-gray-300" 
                                    />
                                  ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                              <span className="text-xs text-muted-foreground">Time</span>
                              <div className="flex items-center mt-1">
                                <Clock className="h-4 w-4 text-blue-600 mr-1" />
                                <span className="font-medium">{challenge.timeMinutes} min</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                              <span className="text-xs text-muted-foreground">Questions</span>
                              <span className="font-medium mt-1">{challenge.questions}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-muted-foreground">Completion Rate</span>
                            <span className="text-xs font-medium">
                              {challenge.completionRate}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                challenge.completionRate > 75 ? "bg-green-500" :
                                challenge.completionRate > 50 ? "bg-blue-500" :
                                challenge.completionRate > 25 ? "bg-amber-500" : "bg-red-500"
                              }`}
                              style={{ width: `${challenge.completionRate}%` }}
                            ></div>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="border-t p-4 flex items-center justify-between">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Award className="h-3.5 w-3.5" />
                            <span>{challenge.xpReward} XP</span>
                          </Badge>
                          
                          <Link to={`/challenge/${challenge.id}`}>
                            <Button size="sm">
                              Start Challenge
                              <ArrowRight className="h-4 w-4 ml-1.5" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="exam-prep">
                <div className="bg-white p-6 rounded-lg border mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">GCSE-Style Exam Practice</h2>
                      <p className="text-muted-foreground mb-4">
                        Practice with real exam-style questions to prepare for your GCSE exams. This section includes both multiple choice and structured questions similar to what you'll find in actual exams.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-slate-50 p-4 rounded-lg flex flex-col items-center">
                          <CheckSquare className="h-5 w-5 text-green-600 mb-2" />
                          <span className="font-medium text-lg">20</span>
                          <span className="text-sm text-muted-foreground">Multiple Choice Questions</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg flex flex-col items-center">
                          <Edit3 className="h-5 w-5 text-amber-600 mb-2" />
                          <span className="font-medium text-lg">10</span>
                          <span className="text-sm text-muted-foreground">Structured Questions</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg flex flex-col items-center">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="font-medium text-lg">120</span>
                          <span className="text-sm text-muted-foreground">Minutes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CheckSquare className="h-5 w-5" />
                      Section A: Multiple Choice Questions (20 marks)
                    </h3>
                    <Card>
                      <CardHeader className="bg-slate-50 border-b">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Instructions</h4>
                            <p className="text-sm text-muted-foreground">Answer all questions. Each question is worth 1 mark.</p>
                          </div>
                          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">20 Questions</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Accordion type="single" collapsible className="w-full">
                          {examPrepMCQs.map((mcq, index) => (
                            <AccordionItem key={mcq.id} value={mcq.id}>
                              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50">
                                <div className="flex items-center gap-3 text-left">
                                  <span className="font-medium">Question {index + 1}</span>
                                  <span className="text-muted-foreground text-sm">{mcq.question.length > 60 ? mcq.question.substring(0, 60) + '...' : mcq.question}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 py-4 border-t bg-white">
                                <div className="mb-4">
                                  <p className="mb-4">{mcq.question}</p>
                                  <RadioGroup defaultValue="">
                                    {mcq.options.map((option, i) => (
                                      <div key={i} className="flex items-center space-x-2 mb-2 p-2 rounded hover:bg-slate-50">
                                        <RadioGroupItem value={`option-${i}`} id={`${mcq.id}-option-${i}`} />
                                        <Label htmlFor={`${mcq.id}-option-${i}`} className="flex-1 cursor-pointer">{option}</Label>
                                      </div>
                                    ))}
                                  </RadioGroup>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                          <AccordionItem value="more-mcqs">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50 text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <span>See 15 more questions</span>
                                <ChevronDown className="h-4 w-4" />
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 border-t bg-white">
                              <p className="text-center text-muted-foreground">Additional questions would appear here in a full implementation.</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Edit3 className="h-5 w-5" />
                      Section B: Structured Questions (80 marks)
                    </h3>
                    <Card>
                      <CardHeader className="bg-slate-50 border-b">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Instructions</h4>
                            <p className="text-sm text-muted-foreground">Answer all questions. Write your answers in the spaces provided.</p>
                          </div>
                          <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">10 Questions</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Accordion type="single" collapsible className="w-full">
                          {structuredQuestions.map((sq, index) => (
                            <AccordionItem key={sq.id} value={sq.id}>
                              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50">
                                <div className="flex items-center gap-3 text-left">
                                  <span className="font-medium">Question {index + 1}</span>
                                  <span className="text-muted-foreground text-sm">{sq.title}</span>
                                  <Badge variant="outline" className="ml-auto">{sq.marks} marks</Badge>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 py-4 border-t bg-white">
                                <div className="mb-4">
                                  <p className="mb-6">{sq.question}</p>
                                  <div className="space-y-2">
                                    <Label htmlFor={`answer-${sq.id}`}>Your answer:</Label>
                                    <Textarea id={`answer-${sq.id}`} placeholder="Type your answer here..." className="min-h-32" />
                                  </div>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                          <AccordionItem value="more-structured">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50 text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <span>See 7 more questions</span>
                                <ChevronDown className="h-4 w-4" />
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 border-t bg-white">
                              <p className="text-center text-muted-foreground">Additional questions would appear here in a full implementation.</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </section>
                  
                  <div className="flex justify-center mt-8">
                    <Button size="lg" className="px-8">
                      Submit Exam Answers
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Challenges;
