
import React, { useState } from "react";
import CMSLayout from "@/components/CMSLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Filter, 
  FileText, 
  Book,
  BookText,
  BookOpen, 
  Edit,
  Trash,
  Eye
} from "lucide-react";

// Mock data for modules
const mockModules = [
  {
    id: 1,
    title: "GCSE Biology: Cell Structure",
    subject: "Biology",
    level: "GCSE",
    rooms: 5,
    createdAt: "2023-04-15",
    status: "published",
  },
  {
    id: 2,
    title: "A-Level Chemistry: Organic Reactions",
    subject: "Chemistry",
    level: "A-Level",
    rooms: 8,
    createdAt: "2023-05-03",
    status: "draft",
  },
  {
    id: 3,
    title: "GCSE Physics: Forces and Motion",
    subject: "Physics",
    level: "GCSE",
    rooms: 6,
    createdAt: "2023-03-20",
    status: "published",
  },
  {
    id: 4,
    title: "A-Level Mathematics: Calculus",
    subject: "Mathematics",
    level: "A-Level",
    rooms: 7,
    createdAt: "2023-06-12",
    status: "published",
  },
  {
    id: 5,
    title: "GCSE Chemistry: Atomic Structure",
    subject: "Chemistry",
    level: "GCSE",
    rooms: 4,
    createdAt: "2023-05-28",
    status: "draft",
  },
];

const ModulesManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredModules, setFilteredModules] = useState(mockModules);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query === "") {
      setFilteredModules(mockModules);
    } else {
      const filtered = mockModules.filter(
        (module) =>
          module.title.toLowerCase().includes(query) ||
          module.subject.toLowerCase().includes(query) ||
          module.level.toLowerCase().includes(query)
      );
      setFilteredModules(filtered);
    }
  };

  return (
    <CMSLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Modules Management</h1>
            <p className="text-muted-foreground">
              Create, edit and manage your educational modules
            </p>
          </div>
          <Button className="gap-1">
            <Plus className="h-4 w-4" /> New Module
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle>Module Overview</CardTitle>
            <CardDescription>
              Manage all your educational modules in one place
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search modules..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" /> Export
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Module Name</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead className="text-center">Rooms</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredModules.length > 0 ? (
                    filteredModules.map((module) => (
                      <TableRow key={module.id}>
                        <TableCell className="font-medium">{module.title}</TableCell>
                        <TableCell>{module.subject}</TableCell>
                        <TableCell>{module.level}</TableCell>
                        <TableCell className="text-center">{module.rooms}</TableCell>
                        <TableCell>{module.createdAt}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              module.status === "published"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-yellow-100 text-yellow-800 border-yellow-200"
                            }
                          >
                            {module.status === "published" ? "Published" : "Draft"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No modules found matching your search criteria
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Total Modules</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{mockModules.length}</p>
              <p className="text-sm text-muted-foreground">
                Across all subjects and levels
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Book className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">Published</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {mockModules.filter(m => m.status === "published").length}
              </p>
              <p className="text-sm text-muted-foreground">
                Live and available to students
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <BookText className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Draft</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {mockModules.filter(m => m.status === "draft").length}
              </p>
              <p className="text-sm text-muted-foreground">
                In progress and not yet published
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CMSLayout>
  );
};

export default ModulesManagement;
