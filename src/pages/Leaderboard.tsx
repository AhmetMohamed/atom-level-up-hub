import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Star, ArrowRight, ChevronUp, ChevronDown, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/DashboardLayout";

const users = [
  {
    id: "user1",
    name: "AlexScience",
    position: 1,
    xp: 9870,
    level: 15,
    streak: 25,
    lastActive: "Today",
    badges: 12,
    subjects: ["Biology", "Chemistry"],
    change: "up",
  },
  {
    id: "user2",
    name: "QuantumQueen",
    position: 2,
    xp: 9650,
    level: 14,
    streak: 38,
    lastActive: "Today",
    badges: 15,
    subjects: ["Physics", "Chemistry"],
    change: "same",
  },
  {
    id: "user3",
    name: "BioWizard",
    position: 3,
    xp: 8730,
    level: 13,
    streak: 16,
    lastActive: "Yesterday",
    badges: 10,
    subjects: ["Biology", "Environmental Science"],
    change: "up",
  },
  {
    id: "user4",
    name: "ChemGuru",
    position: 4,
    xp: 7840,
    level: 12,
    streak: 19,
    lastActive: "2 days ago",
    badges: 9,
    subjects: ["Chemistry", "Physics"],
    change: "down",
  },
  {
    id: "user5",
    name: "PhysicsNinja",
    position: 5,
    xp: 7210,
    level: 12,
    streak: 12,
    lastActive: "Today",
    badges: 8,
    subjects: ["Physics", "Maths"],
    change: "up",
  },
  {
    id: "user6",
    name: "EcoExplorer",
    position: 6,
    xp: 6920,
    level: 11,
    streak: 9,
    lastActive: "Today",
    badges: 7,
    subjects: ["Environmental Science", "Biology"],
    change: "down",
  },
  {
    id: "user7",
    name: "AtomicAnna",
    position: 7,
    xp: 6540,
    level: 10,
    streak: 15,
    lastActive: "3 days ago",
    badges: 11,
    subjects: ["Chemistry", "Physics"],
    change: "down",
  },
  {
    id: "current",
    name: "You",
    position: 42,
    xp: 1250,
    level: 7,
    streak: 5,
    lastActive: "Now",
    badges: 3,
    subjects: ["Biology"],
    change: "up",
  },
];

// Mock subject data for subject-specific leaderboards
const subjectLeaders = {
  biology: [
    { ...users[2], position: 1 },
    { ...users[0], position: 2 },
    { ...users[5], position: 3 },
    { ...users[7], position: 12 } // current user
  ],
  chemistry: [
    { ...users[3], position: 1 },
    { ...users[1], position: 2 },
    { ...users[6], position: 3 }
  ],
  physics: [
    { ...users[4], position: 1 },
    { ...users[1], position: 2 },
    { ...users[3], position: 3 }
  ],
  environmental: [
    { ...users[5], position: 1 },
    { ...users[2], position: 2 }
  ]
};

const Leaderboard = () => {
  const [timeFrame, setTimeFrame] = useState("weekly");
  
  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Leaderboard</h1>
          <p className="text-muted-foreground">
            See where you stand against other science enthusiasts.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <Tabs defaultValue="all" className="w-auto">
            <TabsList>
              <TabsTrigger value="all">All Subjects</TabsTrigger>
              <TabsTrigger value="biology">Biology</TabsTrigger>
              <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
              <TabsTrigger value="physics">Physics</TabsTrigger>
              <TabsTrigger value="environmental">Environmental</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              className={timeFrame === "daily" ? "bg-muted" : ""}
              onClick={() => setTimeFrame("daily")}
            >
              Daily
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className={timeFrame === "weekly" ? "bg-muted" : ""}
              onClick={() => setTimeFrame("weekly")}
            >
              Weekly
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className={timeFrame === "monthly" ? "bg-muted" : ""}
              onClick={() => setTimeFrame("monthly")}
            >
              Monthly
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className={timeFrame === "alltime" ? "bg-muted" : ""}
              onClick={() => setTimeFrame("alltime")}
            >
              All Time
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsContent value="all" className="space-y-8">
            {/* Top 3 Podium */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {users.slice(1, 2).map((user) => (
                <div key={user.id} className="col-start-2 flex flex-col items-center justify-end">
                  <div className="mb-2 relative">
                    <div className="h-20 w-20 rounded-full bg-science-light border-4 border-science-primary flex items-center justify-center text-4xl">
                      👑
                    </div>
                    <div className="absolute -bottom-2 right-0 badge-level">
                      Lvl {user.level}
                    </div>
                  </div>
                  <div className="h-36 bg-gradient-to-t from-science-primary/20 to-science-primary/5 w-full rounded-t-lg flex flex-col items-center justify-end p-4">
                    <p className="font-bold text-lg">{user.name}</p>
                    <div className="badge-xp mt-1">
                      <Trophy className="h-3 w-3 mr-1" />
                      {user.xp} XP
                    </div>
                    <div className="mt-2 text-2xl font-bold text-science-primary">2nd</div>
                  </div>
                </div>
              ))}
              
              {users.slice(0, 1).map((user) => (
                <div key={user.id} className="col-start-1 flex flex-col items-center justify-end">
                  <div className="mb-2 relative">
                    <div className="h-16 w-16 rounded-full bg-amber-100 border-4 border-amber-500 flex items-center justify-center text-3xl">
                      🥇
                    </div>
                    <div className="absolute -bottom-2 right-0 badge-level">
                      Lvl {user.level}
                    </div>
                  </div>
                  <div className="h-44 bg-gradient-to-t from-amber-300/20 to-amber-300/5 w-full rounded-t-lg flex flex-col items-center justify-end p-4">
                    <p className="font-bold text-lg">{user.name}</p>
                    <div className="badge-xp mt-1">
                      <Trophy className="h-3 w-3 mr-1" />
                      {user.xp} XP
                    </div>
                    <div className="mt-2 text-2xl font-bold text-amber-500">1st</div>
                  </div>
                </div>
              ))}
              
              {users.slice(2, 3).map((user) => (
                <div key={user.id} className="col-start-3 flex flex-col items-center justify-end">
                  <div className="mb-2 relative">
                    <div className="h-14 w-14 rounded-full bg-amber-50 border-4 border-amber-300 flex items-center justify-center text-2xl">
                      🥉
                    </div>
                    <div className="absolute -bottom-2 right-0 badge-level">
                      Lvl {user.level}
                    </div>
                  </div>
                  <div className="h-28 bg-gradient-to-t from-amber-100/20 to-amber-100/5 w-full rounded-t-lg flex flex-col items-center justify-end p-4">
                    <p className="font-bold text-lg">{user.name}</p>
                    <div className="badge-xp mt-1">
                      <Trophy className="h-3 w-3 mr-1" />
                      {user.xp} XP
                    </div>
                    <div className="mt-2 text-2xl font-bold text-amber-300">3rd</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Leaderboard Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-science-primary" />
                  {timeFrame === "daily" ? "Today's" : 
                   timeFrame === "weekly" ? "This Week's" : 
                   timeFrame === "monthly" ? "This Month's" : "All-Time"} Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {users.slice(0, 7).map((user) => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 text-center font-semibold">
                          {user.position}
                        </div>
                        
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Level {user.level} • {user.lastActive}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Medal className="h-4 w-4 text-science-secondary" />
                          <span className="text-sm">{user.badges}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-red-500" />
                          <span className="text-sm">{user.streak}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium">{user.xp.toLocaleString()}</span>
                        </div>
                        
                        <div className="w-6 text-center">
                          {user.change === "up" ? (
                            <ChevronUp className="h-5 w-5 text-green-500" />
                          ) : user.change === "down" ? (
                            <ChevronDown className="h-5 w-5 text-red-500" />
                          ) : (
                            <div className="h-5 w-5 flex items-center justify-center">
                              <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Divider */}
                  <div className="h-0.5 w-full bg-muted my-3"></div>
                  
                  {/* Current user */}
                  {users.filter(u => u.id === "current").map((user) => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-science-light/30 border border-science-primary/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 text-center font-semibold">
                          {user.position}
                        </div>
                        
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Level {user.level} • {user.lastActive}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Medal className="h-4 w-4 text-science-secondary" />
                          <span className="text-sm">{user.badges}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-red-500" />
                          <span className="text-sm">{user.streak}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium">{user.xp.toLocaleString()}</span>
                        </div>
                        
                        <div className="w-6 text-center">
                          {user.change === "up" ? (
                            <ChevronUp className="h-5 w-5 text-green-500" />
                          ) : user.change === "down" ? (
                            <ChevronDown className="h-5 w-5 text-red-500" />
                          ) : (
                            <div className="h-5 w-5 flex items-center justify-center">
                              <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Keep learning to climb the leaderboard!</p>
              <Link to="/dashboard">
                <Button variant="outline">
                  Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>
          
          {/* Other tabs with similar content structure */}
          <TabsContent value="biology" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-science-primary" />
                  Biology Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {subjectLeaders.biology.slice(0, 3).map((user) => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 text-center font-semibold">
                          {user.position}
                        </div>
                        
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Level {user.level} • {user.lastActive}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium">{user.xp.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Biology Current user */}
                  {subjectLeaders.biology.filter(u => u.id === "current").map((user) => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-science-light/30 border border-science-primary/20 mt-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 text-center font-semibold">
                          {user.position}
                        </div>
                        
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Level {user.level} • {user.lastActive}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium">{user.xp.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="chemistry" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-science-primary" />
                  Chemistry Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {subjectLeaders.chemistry.map((user) => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 text-center font-semibold">
                          {user.position}
                        </div>
                        
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Level {user.level} • {user.lastActive}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium">{user.xp.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="physics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-science-primary" />
                  Physics Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {subjectLeaders.physics.map((user) => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 text-center font-semibold">
                          {user.position}
                        </div>
                        
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Level {user.level} • {user.lastActive}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium">{user.xp.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="environmental">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-science-primary" />
                  Environmental Science Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {subjectLeaders.environmental.map((user) => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 text-center font-semibold">
                          {user.position}
                        </div>
                        
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Level {user.level} • {user.lastActive}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium">{user.xp.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Leaderboard;
