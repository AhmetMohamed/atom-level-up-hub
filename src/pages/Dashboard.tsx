
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Trophy, Clock, Award, Star, Medal } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

// Mock data for lessons
const lessons = [
  {
    id: "biology-cells",
    subject: "Biology",
    title: "Cell Structure & Function",
    description: "Learn about the fundamental building blocks of all living organisms.",
    progress: 75,
    xp: 120,
    duration: "25 min",
    level: "Beginner",
    image: "🧬"
  },
  {
    id: "chemistry-atoms",
    subject: "Chemistry",
    title: "Atomic Structure",
    description: "Understand the structure of atoms and their properties.",
    progress: 45,
    xp: 90,
    duration: "30 min",
    level: "Intermediate",
    image: "⚗️"
  },
  {
    id: "physics-forces",
    subject: "Physics",
    title: "Forces & Motion",
    description: "Explore Newton's laws and how forces affect motion.",
    progress: 10,
    xp: 60,
    duration: "35 min",
    level: "Advanced",
    image: "⚛️"
  },
  {
    id: "enviro-ecosystems",
    subject: "Environmental Science",
    title: "Ecosystems",
    description: "Discover how organisms interact with each other and their environment.",
    progress: 0,
    xp: 150,
    duration: "40 min",
    level: "Beginner",
    image: "🌍"
  }
];

// Mock data for user stats
const userStats = {
  xp: 1250,
  level: 7,
  streak: 5,
  nextLevelXp: 1500,
  badges: [
    { name: "Fast Learner", icon: "🚀", earned: true },
    { name: "Biology Expert", icon: "🧬", earned: true },
    { name: "Quiz Master", icon: "🎯", earned: true },
    { name: "Chemistry Novice", icon: "⚗️", earned: false },
    { name: "Physics Enthusiast", icon: "⚛️", earned: false }
  ],
  recentAchievements: [
    { name: "5-Day Streak", icon: "🔥", date: "Today", xp: 50 },
    { name: "Completed 'Cell Division'", icon: "🧬", date: "Yesterday", xp: 100 },
    { name: "Aced a Quiz", icon: "🎯", date: "2 days ago", xp: 75 }
  ]
};

// Mock data for challenges
const challenges = [
  {
    id: "challenge-biology",
    title: "GCSE Biology Mock",
    subject: "Biology",
    duration: "45 min",
    questions: 30,
    difficulty: "GCSE Level",
    image: "🧬"
  },
  {
    id: "challenge-chemistry",
    title: "A-Level Chemistry Test",
    subject: "Chemistry",
    duration: "60 min",
    questions: 40,
    difficulty: "A-Level",
    image: "⚗️"
  }
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Student!</h1>
            <p className="text-muted-foreground">Continue your learning journey.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="badge-xp">
              <Trophy className="h-3 w-3 mr-1" />
              {userStats.xp} XP
            </div>
            <div className="badge-level">
              <Star className="h-3 w-3 mr-1" />
              Level {userStats.level}
            </div>
            <div className="badge-streak">
              <Award className="h-3 w-3 mr-1" />
              {userStats.streak} Day Streak
            </div>
          </div>
        </div>

        <Tabs defaultValue="lessons" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="lessons">
              <Book className="h-4 w-4 mr-2" />
              Lessons
            </TabsTrigger>
            <TabsTrigger value="challenges">
              <Clock className="h-4 w-4 mr-2" />
              Exam Challenges
            </TabsTrigger>
            <TabsTrigger value="progress">
              <Trophy className="h-4 w-4 mr-2" />
              My Progress
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="lessons" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {lessons.map((lesson) => (
                <Link to={`/lessons/${lesson.id}`} key={lesson.id}>
                  <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="text-3xl mb-2">{lesson.image}</div>
                        <div className="badge-level">{lesson.level}</div>
                      </div>
                      <CardTitle>{lesson.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {lesson.subject} • {lesson.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {lesson.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium">Progress</span>
                          <span className="text-xs font-medium">{lesson.progress}%</span>
                        </div>
                        <Progress value={lesson.progress} className="h-2" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <div className="badge-xp">
                        <Trophy className="h-3 w-3 mr-1" />
                        {lesson.xp} XP
                      </div>
                      <Button variant="outline" size="sm">
                        {lesson.progress > 0 ? 'Continue' : 'Start'}
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link to="/subjects">
                <Button variant="outline">
                  Browse All Subjects
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="challenges" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {challenges.map((challenge) => (
                <Link to={`/exam-challenge/${challenge.id}`} key={challenge.id}>
                  <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1 border-science-secondary/30">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="text-3xl mb-2">{challenge.image}</div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-science-secondary/20 text-science-secondary border border-science-secondary/30">
                          <Clock className="h-3 w-3 mr-1" />
                          {challenge.duration}
                        </div>
                      </div>
                      <CardTitle>{challenge.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {challenge.subject} • {challenge.questions} questions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Test your knowledge with this {challenge.difficulty} exam challenge.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <div className="text-xs font-medium text-muted-foreground">Difficulty: {challenge.difficulty}</div>
                      <Button variant="outline" size="sm">
                        Start Challenge
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link to="/exam-challenges">
                <Button variant="outline">
                  Browse All Challenges
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* User Level Progress */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Level {userStats.level}</span>
                        <span className="text-sm font-medium">{userStats.xp} / {userStats.nextLevelXp} XP</span>
                      </div>
                      <div className="progress-container">
                        <div 
                          className="progress-bar" 
                          style={{ width: `${(userStats.xp / userStats.nextLevelXp) * 100}%` }}
                        ></div>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {userStats.nextLevelXp - userStats.xp} XP needed to reach Level {userStats.level + 1}
                      </p>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold mb-2">Recent Achievements</h4>
                      <div className="space-y-2">
                        {userStats.recentAchievements.map((achievement, index) => (
                          <div 
                            key={index} 
                            className="flex justify-between items-center p-2 rounded-md bg-muted/50"
                          >
                            <div className="flex items-center gap-2">
                              <div className="text-xl">{achievement.icon}</div>
                              <div>
                                <p className="text-sm font-medium">{achievement.name}</p>
                                <p className="text-xs text-muted-foreground">{achievement.date}</p>
                              </div>
                            </div>
                            <div className="badge-xp">+{achievement.xp} XP</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Badges Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Medal className="h-4 w-4" />
                    Badges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {userStats.badges.map((badge, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                          badge.earned ? 'bg-science-light border-science-primary/30' : 'bg-muted/30 border-muted text-muted-foreground'
                        }`}
                      >
                        <div className="text-2xl mb-1">{badge.icon}</div>
                        <p className={`text-xs font-medium text-center ${badge.earned ? '' : 'text-muted-foreground'}`}>
                          {badge.name}
                        </p>
                        {!badge.earned && (
                          <p className="text-[10px] text-muted-foreground text-center mt-1">Locked</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
