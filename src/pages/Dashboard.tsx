import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Book,
  Trophy,
  Clock,
  Award,
  Star,
  Medal,
  CheckCircle,
  BookOpen,
  BookText,
  FileText,
  Flame,
  PieChart,
  BarChart,
  Zap,
  Bell
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

// Define the missing social media icons for the footer
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

// Dashboard redesign based on the image
const Dashboard = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-blue-600 text-2xl">🧪</div>
            <h1 className="font-bold text-xl">ScienceHub</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/learn" className="text-gray-700 hover:text-blue-600 transition-colors">Learn</Link>
            <Link to="/exams" className="text-gray-700 hover:text-blue-600 transition-colors">Exams</Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">Downloads</Link>
            <Link to="/leaderboard" className="text-gray-700 hover:text-blue-600 transition-colors">Leaderboard</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-gray-700 hover:text-blue-600">
              <Bell className="h-5 w-5" />
            </button>
            <Button variant="outline" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-8">Track your progress, achievements, and learning journey</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Learning Points */}
          <Card className="bg-white border border-blue-100">
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Learning Points</p>
                  <h2 className="text-3xl font-bold">1250</h2>
                  <p className="text-xs text-green-600">+250 points this month</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-full">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Streak */}
          <Card className="bg-white border border-green-100">
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Learning Streak</p>
                  <h2 className="text-3xl font-bold">15 days</h2>
                  <p className="text-xs text-gray-500">Best streak: 21 days</p>
                </div>
                <div className="bg-green-50 p-3 rounded-full">
                  <Flame className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed Rooms */}
          <Card className="bg-white border border-orange-100">
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Completed Rooms</p>
                  <h2 className="text-3xl font-bold">12/48</h2>
                  <p className="text-xs text-gray-500">25% completion</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Rank */}
          <Card className="bg-white border border-purple-100">
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Current Rank</p>
                  <h2 className="text-3xl font-bold">Science Explorer</h2>
                  <p className="text-xs text-gray-500">250 points to Science Enthusiast</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-full">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                    Continue Learning
                  </CardTitle>
                  <Link to="/learn" className="text-sm text-blue-600 hover:underline">
                    View All Learning Content
                  </Link>
                </div>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Cell Biology */}
                  <div className="p-4 border rounded-lg hover:shadow-md transition-all">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Book className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Cell Biology</h4>
                          <div className="text-sm text-gray-500">Module • Last accessed: 2 hours ago</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Continue</Button>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </div>

                  {/* GCSE Physics Explorer */}
                  <div className="p-4 border rounded-lg hover:shadow-md transition-all">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">GCSE Physics Explorer</h4>
                          <div className="text-sm text-gray-500">Learning Path • Last accessed: 1 day ago</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Continue</Button>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs font-medium">40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                  </div>

                  {/* Chemical Reactions */}
                  <div className="p-4 border rounded-lg hover:shadow-md transition-all">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <BookText className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Chemical Reactions</h4>
                          <div className="text-sm text-gray-500">Module • Last accessed: 3 days ago</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Continue</Button>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs font-medium">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <BarChart className="mr-2 h-5 w-5 text-blue-600" />
                    Recent Activity
                  </CardTitle>
                </div>
                <CardDescription>Your learning journey highlights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Cell Biology</div>
                        <div className="text-sm text-gray-500">2 days ago</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">+100 points</div>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <Trophy className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <div className="font-medium">GCSE Physics Mock</div>
                        <div className="text-sm text-gray-500">5 days ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium text-green-600">+150 points</div>
                      <div className="text-sm font-medium text-green-600">85%</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Book className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Chemical Bonding</div>
                        <div className="text-sm text-gray-500">1 week ago</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-500">Completed</div>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Zap className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium">10-Day Learning Streak</div>
                        <div className="text-sm text-gray-500">1 week ago</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">+50 points</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Achievements */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Medal className="mr-2 h-5 w-5 text-blue-600" />
                    Achievements
                  </CardTitle>
                  <Link to="/achievements" className="text-sm text-blue-600 hover:underline">
                    View All Achievements
                  </Link>
                </div>
                <CardDescription>Your earned badges and awards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-sm">First Room</h4>
                    <p className="text-xs text-gray-500">Jan 15, 2023</p>
                  </div>

                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="bg-yellow-100 p-3 rounded-full mb-2">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-sm">Perfect Score</h4>
                    <p className="text-xs text-gray-500">Feb 3, 2023</p>
                  </div>

                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="bg-green-100 p-3 rounded-full mb-2">
                      <Flame className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-medium text-sm">7 Day Streak</h4>
                    <p className="text-xs text-gray-500">Feb 10, 2023</p>
                  </div>

                  <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="bg-purple-100 p-3 rounded-full mb-2">
                      <Book className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-sm">Biology Expert</h4>
                    <p className="text-xs text-gray-500">Mar 22, 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended for You */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  Recommended for You
                </CardTitle>
                <CardDescription>Based on your learning history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-all">
                    <h4 className="font-medium">Genetics and Inheritance</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Biology</span>
                      <span className="text-xs text-gray-500">Intermediate</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-all">
                    <h4 className="font-medium">GCSE Chemistry Mastery</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Chemistry</span>
                      <span className="text-xs text-gray-500">Beginner</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-all">
                    <h4 className="font-medium">Forces and Motion</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Physics</span>
                      <span className="text-xs text-gray-500">Intermediate</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-blue-600 text-2xl">🧪</div>
                <h2 className="font-bold text-xl">ScienceHub</h2>
              </div>
              <p className="text-sm text-gray-600">Your comprehensive platform for science education with lessons, quizzes, exams, and downloadable resources.</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link to="/lessons" className="hover:text-blue-600">Lessons</Link></li>
                <li><Link to="/quizzes" className="hover:text-blue-600">Quizzes</Link></li>
                <li><Link to="/exams" className="hover:text-blue-600">Exams</Link></li>
                <li><Link to="/downloads" className="hover:text-blue-600">Downloads</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Subjects</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/subjects/biology" className="hover:text-blue-600">Biology</Link></li>
                <li><Link to="/subjects/physics" className="hover:text-blue-600">Physics</Link></li>
                <li><Link to="/subjects/chemistry" className="hover:text-blue-600">Chemistry</Link></li>
                <li><Link to="/subjects/mathematics" className="hover:text-blue-600">Mathematics</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                <a href="#" className="text-gray-600 hover:text-blue-600"><FacebookIcon className="h-5 w-5" /></a>
                <a href="#" className="text-gray-600 hover:text-blue-600"><TwitterIcon className="h-5 w-5" /></a>
                <a href="#" className="text-gray-600 hover:text-blue-600"><InstagramIcon className="h-5 w-5" /></a>
                <a href="#" className="text-gray-600 hover:text-blue-600"><YoutubeIcon className="h-5 w-5" /></a>
              </div>
              <p className="text-sm text-gray-600">Contact: info@sciencehub.com</p>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
            © 2023 ScienceHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
