
import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Book,
  Edit,
  FileText,
  Filter,
  MoreVertical,
  Plus,
  Search,
  Trash2,
  Upload,
} from "lucide-react";

const contentTypes = [
  {
    id: "room1",
    title: "Cell Structure and Function",
    type: "room",
    subject: "Biology",
    status: "published",
    lastUpdated: "2024-03-15",
    author: "Dr. Sarah Chen",
  },
  {
    id: "room2",
    title: "Chemical Bonding",
    type: "room",
    subject: "Chemistry",
    status: "draft",
    lastUpdated: "2024-03-12",
    author: "Dr. James Wilson",
  },
  {
    id: "module1",
    title: "Genetics Fundamentals",
    type: "module",
    subject: "Biology",
    status: "published",
    lastUpdated: "2024-03-10",
    author: "Dr. Sarah Chen",
  },
  {
    id: "quiz1",
    title: "Atomic Structure Quiz",
    type: "quiz",
    subject: "Chemistry",
    status: "published",
    lastUpdated: "2024-03-08",
    author: "Dr. James Wilson",
  },
  {
    id: "path1",
    title: "GCSE Biology Complete Path",
    type: "learning-path",
    subject: "Biology",
    status: "published",
    lastUpdated: "2024-03-05",
    author: "Education Team",
  },
];

const AdminContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentTab, setCurrentTab] = useState("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<any>(null);

  // Filter content based on search term and filters
  const filteredContent = contentTypes.filter((content) => {
    // Search term filter
    if (
      searchTerm &&
      !content.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !content.subject.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !content.author.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Subject filter
    if (filterSubject !== "all" && content.subject !== filterSubject) {
      return false;
    }

    // Type filter
    if (filterType !== "all" && content.type !== filterType) {
      return false;
    }

    // Status filter
    if (filterStatus !== "all" && content.status !== filterStatus) {
      return false;
    }

    // Tab filter
    if (currentTab !== "all" && content.type !== currentTab) {
      return false;
    }

    return true;
  });

  const handleDeleteClick = (content: any) => {
    setSelectedContent(content);
    setDeleteDialogOpen(true);
  };

  const handleDelete = () => {
    // In a real app, you would delete the content from the database
    toast.success(`${selectedContent.title} has been deleted.`);
    setDeleteDialogOpen(false);
  };

  const handleEdit = (content: any) => {
    toast.info(`Editing ${content.title}`);
    // In a real app, you would navigate to the edit page
  };

  const handleView = (content: any) => {
    toast.info(`Viewing ${content.title}`);
    // In a real app, you would navigate to the view page
  };

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Content Management</h1>
            <p className="text-muted-foreground">
              Create, edit, and manage all content across the platform
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Content
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Content</DialogTitle>
                  <DialogDescription>
                    Select the type of content you want to create.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                    <Book className="h-10 w-10 mb-2" />
                    <span>Room</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                    <FileText className="h-10 w-10 mb-2" />
                    <span>Module</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                    <Book className="h-10 w-10 mb-2" />
                    <span>Quiz</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                    <Book className="h-10 w-10 mb-2" />
                    <span>Learning Path</span>
                  </Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => toast.info("Creating new content...")}>
                    Continue
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Import
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Content Overview</CardTitle>
            <CardDescription>
              Manage all educational content in one place
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="all"
              value={currentTab}
              onValueChange={setCurrentTab}
              className="mb-6"
            >
              <TabsList>
                <TabsTrigger value="all">All Content</TabsTrigger>
                <TabsTrigger value="room">Rooms</TabsTrigger>
                <TabsTrigger value="module">Modules</TabsTrigger>
                <TabsTrigger value="quiz">Quizzes</TabsTrigger>
                <TabsTrigger value="learning-path">Learning Paths</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search content..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select
                  value={filterSubject}
                  onValueChange={setFilterSubject}
                >
                  <SelectTrigger className="w-[130px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="Biology">Biology</SelectItem>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                    <SelectItem value="Physics">Physics</SelectItem>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[130px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContent.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="h-24 text-center"
                      >
                        No content found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredContent.map((content) => (
                      <TableRow key={content.id}>
                        <TableCell className="font-medium">
                          {content.title}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {content.type === "room"
                              ? "Room"
                              : content.type === "module"
                              ? "Module"
                              : content.type === "quiz"
                              ? "Quiz"
                              : "Learning Path"}
                          </Badge>
                        </TableCell>
                        <TableCell>{content.subject}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              content.status === "published"
                                ? "bg-green-100 text-green-800 hover:bg-green-200"
                                : content.status === "draft"
                                ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            }
                          >
                            {content.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{content.lastUpdated}</TableCell>
                        <TableCell>{content.author}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <MoreVertical className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => handleView(content)}>
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleEdit(content)}>
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                className="text-red-600 focus:text-red-600"
                                onClick={() => handleDeleteClick(content)}
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Delete confirmation dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete "{selectedContent?.title}"? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </motion.div>
    </AdminLayout>
  );
};

export default AdminContent;
