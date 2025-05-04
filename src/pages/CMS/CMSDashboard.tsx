
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileQuestion, Book, FileText, PlusCircle, Users } from "lucide-react";
import CMSLayout from "@/components/CMSLayout";

const CMSDashboard = () => {
  // Mock data for CMS stats
  const stats = {
    totalRooms: 48,
    activeExams: 12,
    totalModules: 24,
    totalResources: 36,
    totalStudents: 256,
    recentActivity: [
      { action: "Room Created", item: "Cell Division", time: "2 hours ago", user: "Dr. Emma Chen" },
      { action: "Exam Published", item: "GCSE Biology Mock", time: "4 hours ago", user: "Dr. Emma Chen" },
      { action: "Module Updated", item: "Atomic Structure", time: "1 day ago", user: "Dr. Mark Wilson" },
      { action: "Resource Added", item: "Periodic Table PDF", time: "2 days ago", user: "Dr. Sarah Johnson" },
      { action: "Module Created", item: "Newton's Laws", time: "3 days ago", user: "Dr. Mark Wilson" }
    ]
  };

  const contentTypes = [
    {
      title: "Rooms",
      icon: <BookOpen className="h-6 w-6" />,
      count: stats.totalRooms,
      color: "bg-blue-100 text-blue-600",
      link: "/cms/rooms"
    },
    {
      title: "Modules",
      icon: <Book className="h-6 w-6" />,
      count: stats.totalModules,
      color: "bg-green-100 text-green-600",
      link: "/cms/modules"
    },
    {
      title: "Exams",
      icon: <FileQuestion className="h-6 w-6" />,
      count: stats.activeExams,
      color: "bg-purple-100 text-purple-600",
      link: "/cms/exams"
    },
    {
      title: "Resources",
      icon: <FileText className="h-6 w-6" />,
      count: stats.totalResources,
      color: "bg-orange-100 text-orange-600",
      link: "/cms/resources"
    }
  ];

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">CMS Dashboard</h1>
            <p className="text-muted-foreground">Manage your educational content all in one place</p>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/cms/rooms/new">
              <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                New Room
              </Button>
            </Link>
            <Link to="/cms/exams/new">
              <Button variant="outline">
                <PlusCircle className="h-4 w-4 mr-2" />
                New Exam
              </Button>
            </Link>
          </div>
        </div>

        {/* Content Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {contentTypes.map((content, idx) => (
            <Card key={idx} className="bg-white">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div className={`${content.color} p-3 rounded-lg`}>
                    {content.icon}
                  </div>
                  <Link to={content.link}>
                    <Button variant="ghost" size="icon">
                      <PlusCircle className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-1">
                  <h2 className="text-3xl font-bold">{content.count}</h2>
                  <p className="text-muted-foreground">{content.title}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link to={content.link} className="w-full">
                  <Button variant="outline" className="w-full">
                    Manage {content.title}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Student Stats Card */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Student Data
              </CardTitle>
              <Link to="/cms/students">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border">
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <h3 className="text-2xl font-bold">{stats.totalStudents}</h3>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border">
                  <p className="text-sm font-medium text-muted-foreground">Active This Week</p>
                  <h3 className="text-2xl font-bold">{Math.floor(stats.totalStudents * 0.72)}</h3>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border">
                  <p className="text-sm font-medium text-muted-foreground">Avg. Completion Rate</p>
                  <h3 className="text-2xl font-bold">68%</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.recentActivity.map((activity, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{activity.action}:</span>
                      <span>{activity.item}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      by {activity.user}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/cms/rooms/new" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create New Room
                </Button>
              </Link>
              <Link to="/cms/modules/new" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create New Module
                </Button>
              </Link>
              <Link to="/cms/exams/new" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create New Exam
                </Button>
              </Link>
              <Link to="/cms/resources/new" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Upload New Resource
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="p-3 bg-green-100 text-green-800 rounded-lg flex justify-between items-center">
                <span className="font-medium">All systems operational</span>
                <span className="text-xs bg-green-200 px-2 py-1 rounded-full">
                  Updated 5 min ago
                </span>
              </div>
              <div className="p-3 bg-slate-100 border rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Latest backup</span>
                  <span className="text-sm text-muted-foreground">Today, 05:30 AM</span>
                </div>
              </div>
              <div className="p-3 bg-slate-100 border rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Storage used</span>
                  <span className="text-sm text-muted-foreground">2.4 GB / 10 GB</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </CMSLayout>
  );
};

export default CMSDashboard;
