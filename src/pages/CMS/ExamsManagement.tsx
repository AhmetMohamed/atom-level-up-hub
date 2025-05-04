
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle, Search, MoreHorizontal, Edit, 
  Trash2, Copy, Eye, ChevronDown, FileQuestion
} from "lucide-react";
import { toast } from "sonner";
import CMSLayout from "@/components/CMSLayout";

const ExamsManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  
  // Mock exam data
  const examsData = [
    { 
      id: "biology-mock-gcse", 
      title: "GCSE Biology Mock", 
      subject: "Biology", 
      level: "GCSE Level", 
      questions: 30, 
      duration: "45 min",
      status: "Published",
      lastUpdated: "2 days ago" 
    },
    { 
      id: "biology-cells-quiz", 
      title: "Cell Biology Quiz", 
      subject: "Biology", 
      level: "Beginner", 
      questions: 15, 
      duration: "20 min",
      status: "Published",
      lastUpdated: "1 week ago" 
    },
    { 
      id: "chemistry-a-level", 
      title: "A-Level Chemistry Test", 
      subject: "Chemistry", 
      level: "A-Level", 
      questions: 40, 
      duration: "60 min",
      status: "Draft",
      lastUpdated: "3 days ago" 
    },
    { 
      id: "chemistry-periodic-quiz", 
      title: "Periodic Table Challenge", 
      subject: "Chemistry", 
      level: "Intermediate", 
      questions: 25, 
      duration: "30 min",
      status: "Published",
      lastUpdated: "5 days ago" 
    },
    { 
      id: "physics-forces-quiz", 
      title: "Forces & Motion Quiz", 
      subject: "Physics", 
      level: "Beginner", 
      questions: 20, 
      duration: "25 min",
      status: "Published",
      lastUpdated: "1 day ago" 
    },
    { 
      id: "physics-a-level", 
      title: "A-Level Physics Exam", 
      subject: "Physics", 
      level: "A-Level", 
      questions: 45, 
      duration: "90 min",
      status: "Draft",
      lastUpdated: "Just now" 
    },
    { 
      id: "math-algebra-test", 
      title: "Algebra Basics Test", 
      subject: "Mathematics", 
      level: "Beginner", 
      questions: 15, 
      duration: "20 min",
      status: "Published",
      lastUpdated: "2 weeks ago" 
    },
    { 
      id: "math-calculus-test", 
      title: "Calculus Challenge", 
      subject: "Mathematics", 
      level: "Advanced", 
      questions: 30, 
      duration: "45 min",
      status: "Draft",
      lastUpdated: "3 hours ago" 
    }
  ];

  const subjects = ["All", "Biology", "Chemistry", "Physics", "Mathematics"];
  
  const filteredExams = examsData.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === "All" || exam.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleDeleteExam = (examId: string) => {
    toast.success(`Exam deleted successfully`);
    // In a real application, this would make an API request to delete the exam
  };
  
  const handleDuplicateExam = (examId: string) => {
    toast.success(`Exam duplicated successfully`);
    // In a real application, this would make an API request to duplicate the exam
  };

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Exam Management</h1>
            <p className="text-muted-foreground">Create and manage exams and quizzes for your students</p>
          </div>

          <Link to="/cms/exams/new">
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              New Exam
            </Button>
          </Link>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search exams..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Subject: {selectedSubject}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {subjects.map((subject) => (
                    <DropdownMenuItem 
                      key={subject} 
                      onClick={() => setSelectedSubject(subject)}
                    >
                      {subject}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Exam Title</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Questions</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredExams.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell className="font-medium">{exam.title}</TableCell>
                      <TableCell>{exam.subject}</TableCell>
                      <TableCell>{exam.level}</TableCell>
                      <TableCell>{exam.questions}</TableCell>
                      <TableCell>{exam.duration}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            exam.status === "Published" 
                              ? "bg-green-100 text-green-800 border-green-200" 
                              : "bg-amber-100 text-amber-800 border-amber-200"
                          }
                        >
                          {exam.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{exam.lastUpdated}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <Link to={`/cms/exams/edit/${exam.id}`}>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                            </Link>
                            <Link to={`/exam-challenge/${exam.id}`} target="_blank">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                Preview
                              </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem onClick={() => handleDuplicateExam(exam.id)}>
                              <Copy className="h-4 w-4 mr-2" />
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => handleDeleteExam(exam.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredExams.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        No exams found. Try adjusting your search.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </CMSLayout>
  );
};

export default ExamsManagement;
