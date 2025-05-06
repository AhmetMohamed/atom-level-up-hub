
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Users,
  BookOpen,
  Clock,
  CreditCard,
  Settings,
} from "lucide-react";
import AdminLayout from "@/components/AdminLayout";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "12,458",
      change: "+14%",
      trend: "up",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Active Subscriptions",
      value: "4,721",
      change: "+5.2%",
      trend: "up",
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Rooms Accessed",
      value: "35,892",
      change: "+19%",
      trend: "up",
      icon: <BookOpen className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Avg. Time per Session",
      value: "23m 12s",
      change: "+2.5%",
      trend: "up",
      icon: <Clock className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Button size="sm" variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center">
                      {stat.icon}
                      <span className="ml-1">{stat.title}</span>
                    </p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div
                    className={`text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                  <div className="text-center">
                    <BarChart className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Activity Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Sign-ups</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center pb-2 border-b"
                      >
                        <div>
                          <p className="font-medium">User {1000 + i}</p>
                          <p className="text-sm text-muted-foreground">
                            user{i}@example.com
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {i} day{i !== 1 ? "s" : ""} ago
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Biology: Cell Structure",
                      "Chemistry: Ionic Bonding",
                      "Physics: Newton's Laws",
                      "Mathematics: Differentiation",
                      "Biology: Mitosis",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center pb-2 border-b"
                      >
                        <p className="font-medium">{item}</p>
                        <span className="text-sm text-muted-foreground">
                          {Math.floor(Math.random() * 1000)} views
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage user accounts, roles, and permissions
                </p>
                <Button>View All Users</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage learning paths, modules, rooms, and quizzes
                </p>
                <Button>View All Content</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  View and manage subscription payments and transactions
                </p>
                <Button>View Payment Records</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
