
import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";
import { UserPlus, Activity, ArrowUp, ArrowDown, Layers, BookOpen, Award, Users, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample data for charts
const userGrowthData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 650 },
  { name: 'Mar', users: 820 },
  { name: 'Apr', users: 1050 },
  { name: 'May', users: 1250 },
  { name: 'Jun', users: 1500 },
];

const contentCompletionData = [
  { name: 'Biology', completed: 68 },
  { name: 'Chemistry', completed: 72 },
  { name: 'Physics', completed: 55 },
  { name: 'Mathematics', completed: 80 },
];

const revenueData = [
  { name: 'Jan', revenue: 4500 },
  { name: 'Feb', revenue: 5200 },
  { name: 'Mar', revenue: 6800 },
  { name: 'Apr', revenue: 7400 },
  { name: 'May', revenue: 8900 },
  { name: 'Jun', revenue: 10200 },
];

const recentUsers = [
  { id: 1, name: 'Emma Watson', email: 'emma@example.com', plan: 'Premium', joinDate: '2023-05-12' },
  { id: 2, name: 'James Smith', email: 'james@example.com', plan: 'Basic', joinDate: '2023-05-14' },
  { id: 3, name: 'Sophia Lee', email: 'sophia@example.com', plan: 'Premium', joinDate: '2023-05-15' },
  { id: 4, name: 'Noah Johnson', email: 'noah@example.com', plan: 'Basic', joinDate: '2023-05-16' },
  { id: 5, name: 'Olivia Brown', email: 'olivia@example.com', plan: 'Premium', joinDate: '2023-05-17' },
];

const pieChartColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState("30days");
  
  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor platform performance and user activity
            </p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Key stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">25,342</div>
              <p className="text-xs flex items-center text-green-600 mt-1">
                <ArrowUp className="h-3 w-3 mr-1" />
                12% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Premium Users</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8,719</div>
              <p className="text-xs flex items-center text-green-600 mt-1">
                <ArrowUp className="h-3 w-3 mr-1" />
                7.8% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Content Items</CardTitle>
              <Layers className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,432</div>
              <p className="text-xs flex items-center text-green-600 mt-1">
                <ArrowUp className="h-3 w-3 mr-1" />
                4.3% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$42,589</div>
              <p className="text-xs flex items-center text-green-600 mt-1">
                <ArrowUp className="h-3 w-3 mr-1" />
                15.2% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">User Analytics</TabsTrigger>
            <TabsTrigger value="content">Content Analytics</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Content Completion</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={contentCompletionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="completed"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {contentCompletionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={pieChartColors[index % pieChartColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Recent Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left pb-3 pl-2">Name</th>
                        <th className="text-left pb-3">Email</th>
                        <th className="text-left pb-3">Plan</th>
                        <th className="text-left pb-3 pr-2">Joined</th>
                        <th className="text-right pb-3 pr-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-muted">
                          <td className="py-3 pl-2">{user.name}</td>
                          <td className="py-3">{user.email}</td>
                          <td className="py-3">
                            <Badge variant={user.plan === "Premium" ? "secondary" : "outline"}>
                              {user.plan}
                            </Badge>
                          </td>
                          <td className="py-3 pr-2">{user.joinDate}</td>
                          <td className="py-3 pr-2 text-right">
                            <Button variant="outline" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Engagement</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={contentCompletionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completed" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="revenue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Button variant="outline" className="flex flex-col h-24 gap-2">
              <UserPlus className="h-5 w-5" />
              <span>Add User</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-24 gap-2">
              <BookOpen className="h-5 w-5" />
              <span>New Content</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-24 gap-2">
              <Award className="h-5 w-5" />
              <span>Manage Premium</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-24 gap-2">
              <FileText className="h-5 w-5" />
              <span>Reports</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-24 gap-2">
              <Users className="h-5 w-5" />
              <span>User Groups</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default AdminDashboard;
