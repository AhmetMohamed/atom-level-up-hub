
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AtomIcon, BookOpen, Calculator, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Challenges = () => {
  const weeklyCategories = ["Biology", "Chemistry", "Physics", "Mathematics"];
  const monthlyCategories = ["General Science", "Advanced Physics", "Biology Specialization", "Chemistry Mastery"];
  const examPrepSubjects = ["Biology", "Chemistry", "Physics", "Mathematics"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-slate-50">
        <div className="container px-4 py-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Exam Challenges</h1>
            <p className="text-muted-foreground">Test your knowledge with weekly and monthly challenges or prepare for real exams.</p>
          </div>
          
          <Tabs defaultValue="weekly" className="space-y-6">
            <TabsList className="bg-muted/50 w-full md:w-auto p-0 h-auto flex flex-wrap">
              <TabsTrigger value="weekly" className="py-2.5 px-4 data-[state=active]:bg-white flex-1 md:flex-none">Weekly Challenges</TabsTrigger>
              <TabsTrigger value="monthly" className="py-2.5 px-4 data-[state=active]:bg-white flex-1 md:flex-none">Monthly Challenges</TabsTrigger>
              <TabsTrigger value="real-exam" className="py-2.5 px-4 data-[state=active]:bg-white flex-1 md:flex-none">Real Exam Prep</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weekly" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Weekly Challenges</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {weeklyCategories.map((category, index) => (
                    <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md">
                      <CardHeader className={`pb-2 ${getCategoryColor(category)}`}>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{category}</CardTitle>
                          <Badge variant="outline" className="text-xs bg-white/90">
                            {getWeeklyDifficulty(index)}
                          </Badge>
                        </div>
                        <CardDescription className="text-muted">
                          Week {index + 18} Challenge
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-1 text-sm mb-3">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>15 minutes</span>
                          <span className="mx-1">•</span>
                          <span>10 questions</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {getWeeklyChallengeDescription(category)}
                        </p>
                        <div className="flex items-center justify-between mt-2 text-sm">
                          <div>
                            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                              XP bonus: {500 + index * 100}
                            </Badge>
                          </div>
                          <div className="text-muted-foreground">
                            {index === 0 ? "New!" : `${3 - (index % 3)} days left`}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Link to={`/challenge/${category.toLowerCase()}-weekly-${index}`} className="w-full">
                          <Button className="w-full" variant={index === 0 ? "default" : "outline"}>
                            {index === 0 ? "Start Challenge" : "View Challenge"}
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="monthly" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Monthly Challenges</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {monthlyCategories.map((category, index) => (
                    <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md">
                      <CardHeader className={`${getMonthlyCategoryColor(category)}`}>
                        <div className="flex justify-between items-start">
                          <CardTitle>{category}</CardTitle>
                          <Badge variant="outline" className="bg-white/90">
                            {index === 0 ? "All Levels" : "Advanced"}
                          </Badge>
                        </div>
                        <CardDescription className="text-muted">
                          May 2023 Challenge {index + 1}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-1 text-sm mb-3">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>30 minutes</span>
                          <span className="mx-1">•</span>
                          <span>20 questions</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {getMonthlyChallengeDescription(category)}
                        </p>
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Global participants</span>
                            <span className="font-medium">{1230 - index * 210}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">XP reward</span>
                            <span className="font-medium">{1000 + index * 500} XP</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Link to={`/challenge/${category.toLowerCase().replace(/\s+/g, '-')}-monthly`} className="w-full">
                          <Button className="w-full" variant={index === 0 ? "default" : "outline"}>
                            {index === 0 ? "Start Challenge" : "View Challenge"}
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="real-exam" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Real IGCSE Exam Preparation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {examPrepSubjects.map((subject, index) => (
                    <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md">
                      <CardHeader className={`${getExamPrepColor(subject)}`}>
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            {getSubjectIcon(subject)}
                            <CardTitle className="ml-2">{subject} IGCSE Exam</CardTitle>
                          </div>
                          <Badge variant="outline" className="bg-white/90">
                            Full Exam
                          </Badge>
                        </div>
                        <CardDescription className="text-muted">
                          Complete IGCSE-style examination
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4 space-y-4">
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>90 minutes</span>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-medium">Exam Format:</h3>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground"></div>
                              <span>Section A: 20 Multiple Choice Questions</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground"></div>
                              <span>Section B: 10 Structured Questions</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground"></div>
                              <span>Total: 80 marks</span>
                            </li>
                          </ul>
                        </div>
                        
                        <p className="text-sm text-gray-600">
                          {getExamPrepDescription(subject)}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm">
                          <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                            Premium Feature
                          </Badge>
                          <span className="text-muted-foreground">Updated May 2023</span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Link to={`/exam-prep/${subject.toLowerCase()}`} className="w-full">
                          <Button className="w-full">
                            Start Exam Prep
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-lg border shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Why Practice with Real Exam Format?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800">
                        <Clock className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium">Time Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Practice working under real exam time constraints to improve your speed and efficiency.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-800">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium">Question Familiarity</h4>
                      <p className="text-sm text-muted-foreground">
                        Get accustomed to the style, format, and difficulty level of IGCSE exam questions.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
                        <Calculator className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium">Targeted Improvement</h4>
                      <p className="text-sm text-muted-foreground">
                        Identify knowledge gaps and weak areas that need additional study before the real exam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper functions for styling and content
const getCategoryColor = (category: string) => {
  switch (category) {
    case "Biology": return "bg-green-100";
    case "Chemistry": return "bg-blue-100";
    case "Physics": return "bg-purple-100";
    case "Mathematics": return "bg-red-100";
    default: return "bg-gray-100";
  }
};

const getWeeklyDifficulty = (index: number) => {
  const difficulties = ["Easy", "Medium", "Hard", "Expert"];
  return difficulties[index % difficulties.length];
};

const getWeeklyChallengeDescription = (category: string) => {
  switch (category) {
    case "Biology": return "Test your knowledge of cellular functions and organ systems.";
    case "Chemistry": return "Challenge yourself with reactions, bonds, and periodic trends.";
    case "Physics": return "Solve problems related to forces, energy, and electromagnetism.";
    case "Mathematics": return "Put your math skills to the test with algebra and calculus problems.";
    default: return "Test your scientific knowledge with this challenge.";
  }
};

const getMonthlyCategoryColor = (category: string) => {
  switch (category) {
    case "General Science": return "bg-green-100";
    case "Advanced Physics": return "bg-purple-100";
    case "Biology Specialization": return "bg-green-200";
    case "Chemistry Mastery": return "bg-blue-100";
    default: return "bg-gray-100";
  }
};

const getMonthlyChallengeDescription = (category: string) => {
  switch (category) {
    case "General Science": return "A comprehensive challenge covering topics from all science subjects for all learning levels.";
    case "Advanced Physics": return "Advanced problems in mechanics, thermodynamics, and quantum physics for senior students.";
    case "Biology Specialization": return "Specialized questions on genetics, evolution, and human physiology for biology enthusiasts.";
    case "Chemistry Mastery": return "In-depth exploration of organic chemistry, reaction kinetics, and equilibrium concepts.";
    default: return "Challenge yourself with this monthly test of your scientific knowledge.";
  }
};

const getExamPrepColor = (subject: string) => {
  switch (subject) {
    case "Biology": return "bg-green-100";
    case "Chemistry": return "bg-blue-100";
    case "Physics": return "bg-purple-100";
    case "Mathematics": return "bg-red-100";
    default: return "bg-gray-100";
  }
};

const getSubjectIcon = (subject: string) => {
  switch (subject) {
    case "Biology": return <BookOpen className="h-5 w-5 text-green-600" />;
    case "Chemistry": return <AtomIcon className="h-5 w-5 text-blue-600" />;
    case "Physics": return <AtomIcon className="h-5 w-5 text-purple-600" />;
    case "Mathematics": return <Calculator className="h-5 w-5 text-red-600" />;
    default: return <BookOpen className="h-5 w-5" />;
  }
};

const getExamPrepDescription = (subject: string) => {
  switch (subject) {
    case "Biology": 
      return "Practice with realistic IGCSE Biology questions covering cells, genetics, human physiology, and ecology. Includes detailed diagrams and data interpretation.";
    case "Chemistry": 
      return "Complete IGCSE Chemistry practice with questions on atomic structure, chemical bonds, organic chemistry, and analytical techniques.";
    case "Physics": 
      return "Comprehensive IGCSE Physics exam simulation covering mechanics, electricity, waves, and modern physics. Includes calculations and theory.";
    case "Mathematics": 
      return "Full IGCSE Mathematics exam with questions on algebra, geometry, statistics, and calculus fundamentals. Includes both calculator and non-calculator sections.";
    default: 
      return "Practice with this realistic IGCSE-style examination.";
  }
};

export default Challenges;
