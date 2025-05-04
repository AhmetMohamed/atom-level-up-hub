
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MoreHorizontal,
  UserCog,
  Mail,
  Trash2,
  Eye,
  ChevronDown,
  Users,
  ArrowUpDown,
  BarChart,
  Clock,
  CheckCircle
} from "lucide-react";
import { toast } from "sonner";
import CMSLayout from "@/components/CMSLayout";

const StudentsManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Mock student data
  const studentsData = [
    {
      id: "student-001",
      name: "Alex Johnson",
      email: "alex.j@example.com",
      level: 7,
      xp: 1250,
      completedRooms: 12,
      streak: 15,
      joinDate: "2 months ago",
      lastActive: "Today",
      status: "Active",
    },
    {
      id: "student-002",
      name: "Jamie Smith",
      email: "jamie.smith@example.com",
      level: 5,
      xp: 780,
      completedRooms: 8,
      streak: 3,
      joinDate: "3 months ago",
      lastActive: "Yesterday",
      status: "Active",
    },
    {
      id: "student-003",
      name: "Sam Williams",
      email: "sam.w@example.com",
      level: 9,
      xp: 1645,
      completedRooms: 15,
      streak: 21,
      joinDate: "1 year ago",
      lastActive: "3 days ago",
      status: "Active",
    },
    {
      id: "student-004",
      name: "Jordan Brown",
      email: "jordan.b@example.com",
      level: 3,
      xp: 480,
      completedRooms: 5,
      streak: 0,
      joinDate: "2 weeks ago",
      lastActive: "1 week ago",
      status: "Inactive",
    },
    {
      id: "student-005",
      name: "Taylor Lee",
      email: "taylor.lee@example.com",
      level: 6,
      xp: 950,
      completedRooms: 9,
      streak: 7,
      joinDate: "5 months ago",
      lastActive: "Today",
      status: "Active",
    },
    {
      id: "student-006",
      name: "Casey Miller",
      email: "casey.m@example.com",
      level: 4,
      xp: 620,
      completedRooms: 6,
      streak: 2,
      joinDate: "1 month ago",
      lastActive: "2 days ago",
      status: "Active",
    },
    {
      id: "student-007",
      name: "Riley Wilson",
      email: "riley.w@example.com",
      level: 8,
      xp: 1380,
      completedRooms: 14,
      streak: 12,
      joinDate: "8 months ago",
      lastActive: "Today",
      status: "Active",
    },
    {
      id: "student-008",
      name: "Morgan Davis",
      email: "morgan.d@example.com",
      level: 2,
      xp: 320,
      completedRooms: 3,
      streak: 0,
      joinDate: "3 weeks ago",
      lastActive: "2 weeks ago",
      status: "Inactive",
    },
  ];

  const getFilteredStudents = () => {
    let filtered = studentsData.filter((student) => {
      return (
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    // Sort students
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "level":
          return b.level - a.level;
        case "xp":
          return b.xp - a.xp;
        case "streak":
          return b.streak - a.streak;
        case "completedRooms":
          return b.completedRooms - a.completedRooms;
        case "lastActive":
          // Simple sort for this mock data
          if (a.lastActive === "Today") return -1;
          if (b.lastActive === "Today") return 1;
          if (a.lastActive === "Yesterday") return -1;
          if (b.lastActive === "Yesterday") return 1;
          return a.lastActive.localeCompare(b.lastActive);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredStudents = getFilteredStudents();

  const handleSortChange = (column: string) => {
    setSortBy(column);
  };

  const handleResetPassword = (studentId: string) => {
    toast.success(`Password reset link sent to student`);
    // In a real application, this would make an API request to reset password
  };

  const handleContactStudent = (studentId: string) => {
    toast.success(`Message sent to student`);
    // In a real application, this would open a modal to contact the student
  };

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Student Management</h1>
            <p className="text-muted-foreground">
              Track student progress and engagement
            </p>
          </div>

          <Button>
            <Users className="h-4 w-4 mr-2" />
            Export Student Data
          </Button>
        </div>

        {/* Student Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Total Students
                  </p>
                  <h2 className="text-3xl font-bold">256</h2>
                  <p className="text-xs text-green-600">+12 this month</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Active Students
                  </p>
                  <h2 className="text-3xl font-bold">184</h2>
                  <p className="text-xs text-muted-foreground">Last 7 days</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Avg. Session Time
                  </p>
                  <h2 className="text-3xl font-bold">24m</h2>
                  <p className="text-xs text-green-600">+3m from last month</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Completion Rate
                  </p>
                  <h2 className="text-3xl font-bold">68%</h2>
                  <p className="text-xs text-green-600">+5% from last month</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search students by name or email..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Sort By: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleSortChange("name")}>
                    Name
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSortChange("level")}>
                    Level
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSortChange("xp")}>
                    XP Points
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSortChange("streak")}>
                    Streak
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleSortChange("completedRooms")}
                  >
                    Completed Rooms
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleSortChange("lastActive")}
                  >
                    Last Active
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">
                      <div className="flex items-center gap-2">
                        Name
                        <ArrowUpDown
                          className="h-3 w-3"
                          onClick={() => handleSortChange("name")}
                        />
                      </div>
                    </TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        Level
                        <ArrowUpDown
                          className="h-3 w-3"
                          onClick={() => handleSortChange("level")}
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        XP
                        <ArrowUpDown
                          className="h-3 w-3"
                          onClick={() => handleSortChange("xp")}
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        Completed
                        <ArrowUpDown
                          className="h-3 w-3"
                          onClick={() => handleSortChange("completedRooms")}
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        Streak
                        <ArrowUpDown
                          className="h-3 w-3"
                          onClick={() => handleSortChange("streak")}
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        Last Active
                        <ArrowUpDown
                          className="h-3 w-3"
                          onClick={() => handleSortChange("lastActive")}
                        />
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">
                        {student.name}
                      </TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.level}</TableCell>
                      <TableCell>{student.xp}</TableCell>
                      <TableCell>{student.completedRooms}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {student.streak > 0 ? (
                            <>
                              <span>{student.streak}</span>
                              <span className="text-orange-500">🔥</span>
                            </>
                          ) : (
                            <span>0</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{student.lastActive}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            student.status === "Active"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-amber-100 text-amber-800 border-amber-200"
                          }
                        >
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() =>
                                window.open(
                                  `/cms/students/${student.id}`,
                                  "_blank"
                                )
                              }
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View Progress
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleContactStudent(student.id)}
                            >
                              <Mail className="h-4 w-4 mr-2" />
                              Contact Student
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleResetPassword(student.id)}
                            >
                              <UserCog className="h-4 w-4 mr-2" />
                              Reset Password
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove Student
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredStudents.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={9}
                        className="text-center py-8 text-muted-foreground"
                      >
                        No students found. Try adjusting your search.
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

export default StudentsManagement;
