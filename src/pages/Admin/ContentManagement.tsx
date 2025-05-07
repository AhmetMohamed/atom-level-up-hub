
import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  MoreHorizontal, 
  Search, 
  Plus, 
  Edit, 
  Trash, 
  Eye, 
  Clock, 
  FileText, 
  BookOpen, 
  TestTube, 
  BarChart 
} from "lucide-react";

const ContentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const lessonContent = [
    { id: 1, title: "Introduction to Cells", subject: "Biology", status: "Published", views: 12420, lastUpdated: "2025-04-28" },
    { id: 2, title: "Chemical Bonding", subject: "Chemistry", status: "Published", views: 10253, lastUpdated: "2025-05-01" },
    { id: 3, title: "Newton's Laws", subject: "Physics", status: "Draft", views: 0, lastUpdated: "2025-05-05" },
    { id: 4, title: "Probability Theory", subject: "Mathematics", status: "Published", views: 8654, lastUpdated: "2025-04-15" },
    { id: 5, title: "DNA Structure", subject: "Biology", status: "Published", views: 7932, lastUpdated: "2025-04-22" },
    { id: 6, title: "Thermodynamics", subject: "Physics", status: "Review", views: 324, lastUpdated: "2025-05-06" }
  ];
  
  const examContent = [
    { id: 1, title: "Biology End of Term", subject: "Biology", questions: 45, difficulty: "Intermediate", lastUpdated: "2025-04-20" },
    { id: 2, title: "Chemistry Practice Quiz", subject: "Chemistry", questions: 25, difficulty: "Beginner", lastUpdated: "2025-05-02" },
    { id: 3, title: "Advanced Physics Exam", subject: "Physics", questions: 60, difficulty: "Advanced", lastUpdated: "2025-04-28" }
  ];
  
  const interactiveContent = [
    { id: 1, title: "Cell Explorer", subject: "Biology", type: "Interactive Model", lastUpdated: "2025-04-28" },
    { id: 2, title: "Chemical Reactions Simulator", subject: "Chemistry", type: "Simulation", lastUpdated: "2025-05-01" },
    { id: 3, title: "Gravity Physics Game", subject: "Physics", type: "Game", lastUpdated: "2025-04-15" }
  ];
  
  const filteredLessonContent = lessonContent.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const renderStatusBadge = (status) => {
    switch(status) {
      case "Published":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
      case "Draft":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{status}</Badge>;
      case "Review":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  const renderDifficultyBadge = (difficulty) => {
    switch(difficulty) {
      case "Beginner":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{difficulty}</Badge>;
      case "Intermediate":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">{difficulty}</Badge>;
      case "Advanced":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">{difficulty}</Badge>;
      default:
        return <Badge>{difficulty}</Badge>;
    }
  };
  
  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Content Management</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New Content
          </Button>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search content..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="lessons" className="space-y-4">
          <TabsList>
            <TabsTrigger value="lessons" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Lessons
            </TabsTrigger>
            <TabsTrigger value="exams" className="flex items-center">
              <TestTube className="h-4 w-4 mr-2" />
              Exams & Quizzes
            </TabsTrigger>
            <TabsTrigger value="interactive" className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              Interactive Content
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center">
              <BarChart className="h-4 w-4 mr-2" />
              Content Analytics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="lessons">
            <Card>
              <CardHeader>
                <CardTitle>Lesson Content</CardTitle>
                <CardDescription>Manage your lessons, modules, and learning paths.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLessonContent.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.subject}</TableCell>
                        <TableCell>{renderStatusBadge(item.status)}</TableCell>
                        <TableCell>{item.views.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            {item.lastUpdated}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="exams">
            <Card>
              <CardHeader>
                <CardTitle>Exams & Quizzes</CardTitle>
                <CardDescription>Manage your assessments and practice materials.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Questions</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {examContent.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.subject}</TableCell>
                        <TableCell>{item.questions}</TableCell>
                        <TableCell>{renderDifficultyBadge(item.difficulty)}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            {item.lastUpdated}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="interactive">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Content</CardTitle>
                <CardDescription>Manage simulations, games, and interactive learning tools.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {interactiveContent.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.subject}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            {item.lastUpdated}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Content Analytics</CardTitle>
                <CardDescription>View detailed analytics for your educational content.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-8 rounded-md text-center">
                  <p className="text-muted-foreground">Detailed content analytics coming soon</p>
                  <Button className="mt-4">Preview Beta</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default ContentManagement;
