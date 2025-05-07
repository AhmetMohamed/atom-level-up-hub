
import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Button } from "@/components/ui/button";
import { FileDown, Filter, Printer, RefreshCcw } from "lucide-react";

const userActivityData = [
  { month: "Jan", activeUsers: 4000, newUsers: 2400 },
  { month: "Feb", activeUsers: 3000, newUsers: 1398 },
  { month: "Mar", activeUsers: 2000, newUsers: 9800 },
  { month: "Apr", activeUsers: 2780, newUsers: 3908 },
  { month: "May", activeUsers: 1890, newUsers: 4800 },
  { month: "Jun", activeUsers: 2390, newUsers: 3800 },
  { month: "Jul", activeUsers: 3490, newUsers: 4300 },
  { month: "Aug", activeUsers: 3190, newUsers: 2300 },
  { month: "Sep", activeUsers: 2490, newUsers: 1300 },
  { month: "Oct", activeUsers: 2790, newUsers: 3700 },
  { month: "Nov", activeUsers: 4490, newUsers: 2100 },
  { month: "Dec", activeUsers: 5490, newUsers: 4700 }
];

const subjectPopularityData = [
  { name: "Physics", value: 35 },
  { name: "Biology", value: 40 },
  { name: "Chemistry", value: 25 },
  { name: "Mathematics", value: 30 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 2000 },
  { month: "Apr", revenue: 2780 },
  { month: "May", revenue: 1890 },
  { month: "Jun", revenue: 2390 },
  { month: "Jul", revenue: 3490 },
  { month: "Aug", revenue: 3190 },
  { month: "Sep", revenue: 2490 },
  { month: "Oct", revenue: 2790 },
  { month: "Nov", revenue: 4490 },
  { month: "Dec", revenue: 5490 }
];

const AdminReports = () => {
  const [activeTab, setActiveTab] = useState("usage");

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Analytics & Reports</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <FileDown className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCcw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        <Tabs defaultValue="usage" onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="usage">Platform Usage</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="content">Content Performance</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">25,431</div>
                  <p className="text-xs text-muted-foreground">+12.4% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Signups</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,249</div>
                  <p className="text-xs text-muted-foreground">+4.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Session Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24m 32s</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">84.2%</div>
                  <p className="text-xs text-muted-foreground">+6.7% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="activeUsers" fill="#8884d8" name="Active Users" />
                    <Bar dataKey="newUsers" fill="#82ca9d" name="New Users" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="revenue" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$142,984</div>
                  <p className="text-xs text-muted-foreground">+18.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,492</div>
                  <p className="text-xs text-muted-foreground">+7.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Revenue Per User</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$16.85</div>
                  <p className="text-xs text-muted-foreground">+1.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Renewal Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78.4%</div>
                  <p className="text-xs text-muted-foreground">+3.1% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="content" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Popularity</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={subjectPopularityData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {subjectPopularityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Most Popular Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Introduction to Cells", subject: "Biology", views: 12420 },
                      { title: "Chemical Bonding", subject: "Chemistry", views: 10253 },
                      { title: "Newton's Laws", subject: "Physics", views: 9871 },
                      { title: "Probability Theory", subject: "Mathematics", views: 8654 },
                      { title: "DNA Structure", subject: "Biology", views: 7932 }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.subject}</p>
                        </div>
                        <div className="text-sm font-medium">{item.views.toLocaleString()} views</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="custom">
            <Card>
              <CardHeader>
                <CardTitle>Custom Report Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Select metrics and dimensions to build your custom report.</p>
                <div className="bg-muted/50 p-8 rounded-md text-center">
                  <p className="text-muted-foreground">Custom report builder coming soon</p>
                  <Button className="mt-4">Request Early Access</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminReports;
