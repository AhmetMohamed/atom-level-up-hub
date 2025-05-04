
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Book, Trophy, Clock, Award, Star, Medal, 
  BarChart3, CheckCircle, CalendarDays, BookOpen 
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Dashboard = () => {
  // Mock data for user stats
  const userStats = {
    xpPoints: 1250,
    xpPointsThisMonth: 250,
    level: 7,
    streak: 15,
    streakBest: 21,
    completedRooms: 12,
    totalRooms: 48,
    currentRank: "Science Explorer",
    nextRank: "Science Enthusiast",
    pointsToNextRank: 250,
    achievements: [
      { name: "First Room", icon: "CheckCircle", date: "Jan 15, 2023", color: "bg-blue-100" },
      { name: "Perfect Score", icon: "Star", date: "Feb 3, 2023", color: "bg-purple-100" },
      { name: "7 Day Streak", icon: "CalendarDays", date: "Feb 10, 2023", color: "bg-green-100" },
      { name: "Biology Expert", icon: "BookOpen", date: "Mar 22, 2023", color: "bg-yellow-100" }
    ]
  };

  // Mock data for learning progress
  const learningProgress = [
    {
      id: "cell-biology",
      title: "Cell Biology",
      type: "Module",
      lastAccessed: "2 hours ago",
      progress: 65,
      icon: <Book className="h-5 w-5 text-green-600" />,
      iconBg: "bg-green-100"
    },
    {
      id: "gcse-physics",
      title: "GCSE Physics Explorer",
      type: "Learning Path",
      lastAccessed: "1 day ago",
      progress: 40,
      icon: <Book className="h-5 w-5 text-blue-600" />,
      iconBg: "bg-blue-100"
    },
    {
      id: "chemical-reactions",
      title: "Chemical Reactions",
      type: "Module",
      lastAccessed: "3 days ago",
      progress: 25,
      icon: <Book className="h-5 w-5 text-purple-600" />,
      iconBg: "bg-purple-100"
    }
  ];
  
  // Mock data for recent activity
  const recentActivity = [
    {
      title: "Cell Biology",
      type: "completion",
      date: "2 days ago",
      points: 100,
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      title: "GCSE Physics Mock",
      type: "exam",
      date: "5 days ago",
      points: 150,
      score: "85%",
      icon: <Trophy className="h-5 w-5 text-yellow-500" />
    },
    {
      title: "Chemical Bonding",
      type: "lesson",
      date: "1 week ago",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />
    },
    {
      title: "10-Day Learning Streak",
      type: "streak",
      date: "1 week ago",
      points: 50,
      icon: <BarChart3 className="h-5 w-5 text-purple-500" />
    }
  ];
  
  // Mock data for recommended content
  const recommendations = [
    {
      title: "Genetics and Inheritance",
      subject: "Biology",
      level: "Intermediate",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "GCSE Chemistry Mastery",
      subject: "Chemistry",
      level: "Beginner",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Forces and Motion",
      subject: "Physics",
      level: "Intermediate",
      color: "bg-blue-100 text-blue-800"
    }
  ];

  const renderAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "CheckCircle":
        return <CheckCircle className="h-5 w-5 text-blue-600" />;
      case "Star":
        return <Star className="h-5 w-5 text-purple-600" />;
      case "CalendarDays":
        return <CalendarDays className="h-5 w-5 text-green-600" />;
      case "BookOpen":
        return <BookOpen className="h-5 w-5 text-yellow-600" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Track your progress, achievements, and learning journey</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* XP Points Card */}
          <Card className="bg-slate-50 border shadow-sm">
            <CardContent className="p-6 flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Learning Points</p>
                <h2 className="text-3xl font-bold">{userStats.xpPoints}</h2>
                <p className="text-xs text-muted-foreground">+{userStats.xpPointsThisMonth} points this month</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          {/* Streak Card */}
          <Card className="bg-slate-50 border shadow-sm">
            <CardContent className="p-6 flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Learning Streak</p>
                <h2 className="text-3xl font-bold">{userStats.streak} days</h2>
                <p className="text-xs text-muted-foreground">Best streak: {userStats.streakBest} days</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CalendarDays className="h-6 w-6 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          {/* Completed Rooms Card */}
          <Card className="bg-slate-50 border shadow-sm">
            <CardContent className="p-6 flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Completed Rooms</p>
                <h2 className="text-3xl font-bold">{userStats.completedRooms}/{userStats.totalRooms}</h2>
                <p className="text-xs text-muted-foreground">{Math.round((userStats.completedRooms / userStats.totalRooms) * 100)}% completion</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          
          {/* Current Rank Card */}
          <Card className="bg-slate-50 border shadow-sm">
            <CardContent className="p-6 flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Current Rank</p>
                <h2 className="text-3xl font-bold">{userStats.currentRank}</h2>
                <p className="text-xs text-muted-foreground">{userStats.pointsToNextRank} points to {userStats.nextRank}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Continue Learning Section */}
            <Card className="mb-6 border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-science-primary" />
                    <h2 className="text-xl font-bold">Continue Learning</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">Pick up where you left off</p>
                </div>
                
                <div className="space-y-4">
                  {learningProgress.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 bg-white">
                      <div className="flex items-center gap-4">
                        <div className={`${item.iconBg} p-2 rounded-lg`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium mb-1">{item.title}</h3>
                              <div className="flex items-center text-xs text-muted-foreground gap-2">
                                <span className="bg-slate-100 px-2 py-0.5 rounded">{item.type}</span>
                                <span>Last accessed: {item.lastAccessed}</span>
                              </div>
                            </div>
                            <Link to={`/subjects/${item.id}`}>
                              <Button size="sm">Continue</Button>
                            </Link>
                          </div>
                          <div className="mt-3">
                            <div className="flex justify-between mb-1">
                              <span className="text-xs">Progress</span>
                              <span className="text-xs font-medium">{item.progress}%</span>
                            </div>
                            <Progress value={item.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" size="sm">
                    View All Learning Content
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Activity Section */}
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-science-primary" />
                    <h2 className="text-xl font-bold">Recent Activity</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">Your learning journey highlights</p>
                </div>
                
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-white">
                      <div className="flex items-center gap-3">
                        {activity.icon}
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {activity.points && (
                          <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                            +{activity.points} points
                          </span>
                        )}
                        
                        {activity.score && (
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {activity.score}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {/* Achievements Section */}
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Medal className="h-5 w-5 text-science-primary" />
                    <h2 className="text-lg font-bold">Achievements</h2>
                  </div>
                  <p className="text-xs text-muted-foreground">Your earned badges and awards</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {userStats.achievements.map((achievement, index) => (
                    <div key={index} className={`${achievement.color} border rounded-lg p-3 flex flex-col items-center justify-center text-center`}>
                      <div className="mb-1">
                        {renderAchievementIcon(achievement.icon)}
                      </div>
                      <p className="text-sm font-medium">{achievement.name}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" size="sm">
                    View All Achievements
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Recommended Content */}
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-science-primary" />
                    <h2 className="text-lg font-bold">Recommended for You</h2>
                  </div>
                  <p className="text-xs text-muted-foreground">Based on your learning history</p>
                </div>
                
                <div className="space-y-3">
                  {recommendations.map((item, index) => (
                    <Link to={`/subjects/${item.subject.toLowerCase()}`} key={index}>
                      <div className="border rounded-lg p-4 hover:shadow-sm transition-all bg-white">
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <div className="flex gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded ${item.color}`}>
                            {item.subject}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                            {item.level}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
