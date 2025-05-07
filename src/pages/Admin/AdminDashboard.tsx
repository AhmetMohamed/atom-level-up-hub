
import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { 
  BarChart3,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  PieChart,
  Calendar,
  Eye,
  Bell,
  Settings,
  LayoutDashboard,
  Search
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Sample analytics data
const analyticsData = {
  activeUsers: {
    total: 2486,
    change: 12.5,
    positive: true,
    weeklyData: [340, 425, 390, 450, 480, 520, 550]
  },
  newSignups: {
    total: 128,
    change: 8.2,
    positive: true,
    weeklyData: [15, 18, 22, 19, 24, 28, 22]
  },
  premiumSubs: {
    total: 432,
    change: 3.8,
    positive: true,
    weeklyData: [40, 45, 65, 75, 72, 68, 67]
  },
  revenue: {
    total: "$14,825",
    change: 5.3,
    positive: true,
    weeklyData: [1800, 2200, 1900, 2300, 2400, 2100, 2125]
  },
  topPerformers: [
    { name: "Biology 101", students: 543, completion: 82 },
    { name: "Chemistry Basics", students: 412, completion: 75 },
    { name: "Physics for Beginners", students: 386, completion: 69 },
    { name: "Math Essentials", students: 367, completion: 72 }
  ],
  recentActivity: [
    { type: "new-signup", time: "5 minutes ago", description: "New student signed up: Sarah Wilson" },
    { type: "payment", time: "27 minutes ago", description: "Premium payment received: $49.99 from John Parker" },
    { type: "course-completion", time: "1 hour ago", description: "Course completed: Chemistry Basics by Michael Brown" },
    { type: "feedback", time: "3 hours ago", description: "New 5-star review on Physics for Beginners" },
    { type: "support", time: "5 hours ago", description: "Support ticket closed: Payment issue resolved" }
  ]
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your platform's performance and manage operations
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex flex-col">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
                <CardDescription className="text-2xl font-bold">
                  {analyticsData.activeUsers.total}
                  <span className={`ml-2 text-sm ${analyticsData.activeUsers.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {analyticsData.activeUsers.positive ? '↑' : '↓'} {analyticsData.activeUsers.change}%
                  </span>
                </CardDescription>
              </div>
              <Users className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-12">
                <div className="flex items-center justify-between space-x-1">
                  {analyticsData.activeUsers.weeklyData.map((value, i) => (
                    <div 
                      key={i} 
                      className="h-10 w-full bg-blue-100 rounded-sm"
                      style={{ 
                        height: `${(value / Math.max(...analyticsData.activeUsers.weeklyData)) * 40}px` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex flex-col">
                <CardTitle className="text-sm font-medium text-muted-foreground">New Signups</CardTitle>
                <CardDescription className="text-2xl font-bold">
                  {analyticsData.newSignups.total}
                  <span className={`ml-2 text-sm ${analyticsData.newSignups.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {analyticsData.newSignups.positive ? '↑' : '↓'} {analyticsData.newSignups.change}%
                  </span>
                </CardDescription>
              </div>
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-12">
                <div className="flex items-center justify-between space-x-1">
                  {analyticsData.newSignups.weeklyData.map((value, i) => (
                    <div 
                      key={i} 
                      className="h-10 w-full bg-green-100 rounded-sm"
                      style={{ 
                        height: `${(value / Math.max(...analyticsData.newSignups.weeklyData)) * 40}px` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex flex-col">
                <CardTitle className="text-sm font-medium text-muted-foreground">Premium Subscribers</CardTitle>
                <CardDescription className="text-2xl font-bold">
                  {analyticsData.premiumSubs.total}
                  <span className={`ml-2 text-sm ${analyticsData.premiumSubs.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {analyticsData.premiumSubs.positive ? '↑' : '↓'} {analyticsData.premiumSubs.change}%
                  </span>
                </CardDescription>
              </div>
              <Award className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-12">
                <div className="flex items-center justify-between space-x-1">
                  {analyticsData.premiumSubs.weeklyData.map((value, i) => (
                    <div 
                      key={i} 
                      className="h-10 w-full bg-purple-100 rounded-sm"
                      style={{ 
                        height: `${(value / Math.max(...analyticsData.premiumSubs.weeklyData)) * 40}px` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex flex-col">
                <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
                <CardDescription className="text-2xl font-bold">
                  {analyticsData.revenue.total}
                  <span className={`ml-2 text-sm ${analyticsData.revenue.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {analyticsData.revenue.positive ? '↑' : '↓'} {analyticsData.revenue.change}%
                  </span>
                </CardDescription>
              </div>
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-12">
                <div className="flex items-center justify-between space-x-1">
                  {analyticsData.revenue.weeklyData.map((value, i) => (
                    <div 
                      key={i} 
                      className="h-10 w-full bg-amber-100 rounded-sm"
                      style={{ 
                        height: `${(value / Math.max(...analyticsData.revenue.weeklyData)) * 40}px` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Content Tabs */}
        <div className="space-y-6">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="reports">
                <PieChart className="h-4 w-4 mr-2" />
                Reports
              </TabsTrigger>
              <TabsTrigger value="content">
                <BookOpen className="h-4 w-4 mr-2" />
                Content
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-0 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Performing Courses */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Top Performing Courses</CardTitle>
                    <CardDescription>Courses with highest enrollment and completion rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {analyticsData.topPerformers.map((course, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${
                                course.completion > 80 ? 'bg-green-500' : 
                                course.completion > 65 ? 'bg-amber-500' : 'bg-red-500'
                              }`}></div>
                              <span className="font-medium">{course.name}</span>
                              <Badge variant="outline" className="ml-2">
                                {course.students} students
                              </Badge>
                            </div>
                            <span className="text-sm font-medium">{course.completion}%</span>
                          </div>
                          <Progress value={course.completion} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest events across the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      {analyticsData.recentActivity.map((activity, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`mt-1 p-1.5 rounded-full ${
                            activity.type === 'new-signup' ? 'bg-green-100' :
                            activity.type === 'payment' ? 'bg-blue-100' :
                            activity.type === 'course-completion' ? 'bg-purple-100' :
                            activity.type === 'feedback' ? 'bg-amber-100' : 'bg-gray-100'
                          }`}>
                            {activity.type === 'new-signup' ? <Users className="h-4 w-4 text-green-600" /> :
                             activity.type === 'payment' ? <Award className="h-4 w-4 text-blue-600" /> :
                             activity.type === 'course-completion' ? <BookOpen className="h-4 w-4 text-purple-600" /> :
                             activity.type === 'feedback' ? <Eye className="h-4 w-4 text-amber-600" /> :
                             <Bell className="h-4 w-4 text-gray-600" />
                            }
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{activity.description}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Calendar and Schedule */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Scheduled events and important dates</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Calendar
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <Badge>Today</Badge>
                        <span className="text-sm font-medium">10:00 AM</span>
                      </div>
                      <h4 className="font-medium mb-1">Content Review Meeting</h4>
                      <p className="text-sm text-muted-foreground">Review new science curriculum for GCSE students</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <Badge>Tomorrow</Badge>
                        <span className="text-sm font-medium">2:30 PM</span>
                      </div>
                      <h4 className="font-medium mb-1">Marketing Campaign Launch</h4>
                      <p className="text-sm text-muted-foreground">Summer promotion for new student registrations</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">May 10</Badge>
                        <span className="text-sm font-medium">11:00 AM</span>
                      </div>
                      <h4 className="font-medium mb-1">Quarterly Performance Review</h4>
                      <p className="text-sm text-muted-foreground">Analysis of Q1 performance metrics and goals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reports" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Reports</CardTitle>
                  <CardDescription>
                    Detailed analytics and performance metrics for your educational platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-96 flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Reports Dashboard Coming Soon</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We're currently developing a comprehensive analytics dashboard with customizable reports.
                      Check back soon for detailed insights into your platform's performance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="content" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>
                    Manage courses, lessons, and educational content across your platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-96 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Content Management System Coming Soon</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We're building a powerful content management system to help you create,
                      organize and publish educational content. Stay tuned for updates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
                  <CardDescription>
                    Configure system settings and platform preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Settings className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Settings Dashboard Coming Soon</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We're developing a comprehensive settings panel to give you
                      full control over your educational platform. Coming soon!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default AdminDashboard;
