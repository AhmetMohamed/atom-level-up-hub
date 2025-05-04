
import React, { useState } from "react";
import CMSLayout from "@/components/CMSLayout";
import {
  PlusCircle,
  Search,
  Edit,
  Trash,
  ChevronDown,
  Book,
  BookOpen,
} from "lucide-react";
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface Module {
  id: string;
  title: string;
  description: string;
  subject: string;
  level: string;
  status: string;
  roomsCount: number;
  lastUpdated: string;
}

const sampleModules: Module[] = [
  {
    id: "mod-1",
    title: "Cell Biology Fundamentals",
    description: "Introduction to cell structure and function",
    subject: "Biology",
    level: "GCSE",
    status: "Published",
    roomsCount: 4,
    lastUpdated: "2023-07-15",
  },
  {
    id: "mod-2",
    title: "Atomic Structure",
    description: "Understanding the structure of atoms",
    subject: "Chemistry",
    level: "GCSE",
    status: "Published",
    roomsCount: 3,
    lastUpdated: "2023-07-10",
  },
  {
    id: "mod-3",
    title: "Forces and Motion",
    description: "Principles of Newtonian mechanics",
    subject: "Physics",
    level: "GCSE",
    status: "Draft",
    roomsCount: 2,
    lastUpdated: "2023-07-05",
  },
  {
    id: "mod-4",
    title: "Genetics and Inheritance",
    description: "Advanced genetics concepts and inheritance patterns",
    subject: "Biology",
    level: "A-Level",
    status: "Published",
    roomsCount: 5,
    lastUpdated: "2023-07-01",
  },
  {
    id: "mod-5",
    title: "Organic Chemistry",
    description: "Study of carbon compounds and reactions",
    subject: "Chemistry",
    level: "A-Level",
    status: "Draft",
    roomsCount: 0,
    lastUpdated: "2023-06-25",
  },
  {
    id: "mod-6",
    title: "Electromagnetics",
    description: "Study of electricity and magnetism",
    subject: "Physics",
    level: "A-Level",
    status: "Archived",
    roomsCount: 3,
    lastUpdated: "2023-06-20",
  },
  {
    id: "mod-7",
    title: "Calculus Foundations",
    description: "Basic principles of calculus",
    subject: "Mathematics",
    level: "A-Level",
    status: "Published",
    roomsCount: 4,
    lastUpdated: "2023-06-15",
  },
  {
    id: "mod-8",
    title: "Algebra Foundations",
    description: "Core algebraic concepts and techniques",
    subject: "Mathematics",
    level: "GCSE",
    status: "Published",
    roomsCount: 5,
    lastUpdated: "2023-06-10",
  },
];

const ModulesManagement = () => {
  const [modules, setModules] = useState<Module[]>(sampleModules);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [moduleToDelete, setModuleToDelete] = useState<string | null>(null);
  const [isNewModuleDialogOpen, setIsNewModuleDialogOpen] = useState(false);
  const [newModule, setNewModule] = useState({
    title: "",
    description: "",
    subject: "",
    level: "GCSE",
  });

  const filteredModules = modules.filter(
    (module) =>
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteModule = () => {
    if (moduleToDelete) {
      setModules(modules.filter((module) => module.id !== moduleToDelete));
      toast.success("Module deleted successfully");
      setIsDeleteDialogOpen(false);
      setModuleToDelete(null);
    }
  };

  const handleCreateModule = () => {
    const newId = `mod-${modules.length + 1}`;
    const createdModule: Module = {
      id: newId,
      title: newModule.title,
      description: newModule.description,
      subject: newModule.subject,
      level: newModule.level,
      status: "Draft",
      roomsCount: 0,
      lastUpdated: new Date().toISOString().slice(0, 10),
    };

    setModules([...modules, createdModule]);
    setNewModule({ title: "", description: "", subject: "", level: "GCSE" });
    setIsNewModuleDialogOpen(false);
    toast.success("Module created successfully");
  };

  const getSubjectColor = (subject: string) => {
    switch (subject.toLowerCase()) {
      case "biology":
        return "bg-green-100 text-green-800";
      case "chemistry":
        return "bg-blue-100 text-blue-800";
      case "physics":
        return "bg-purple-100 text-purple-800";
      case "mathematics":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-amber-100 text-amber-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <CMSLayout>
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              <Book className="mr-2 h-6 w-6" /> Module Management
            </h1>
            <p className="text-muted-foreground">
              Create and manage educational modules
            </p>
          </div>

          <Button onClick={() => setIsNewModuleDialogOpen(true)}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Create Module
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search modules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="bg-white rounded-lg border shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Module</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Rooms</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredModules.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-12">
                    <div className="flex flex-col items-center justify-center">
                      <BookOpen className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <h3 className="font-semibold mb-1">No modules found</h3>
                      <p className="text-muted-foreground mb-4">
                        {searchQuery
                          ? "Try adjusting your search query"
                          : "Get started by creating a new module"}
                      </p>
                      <Button
                        onClick={() => setIsNewModuleDialogOpen(true)}
                        variant="outline"
                      >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Create Module
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredModules.map((module) => (
                  <TableRow key={module.id}>
                    <TableCell>
                      <div className="font-medium">{module.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-1">
                        {module.description}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getSubjectColor(
                          module.subject
                        )}`}
                      >
                        {module.subject}
                      </span>
                    </TableCell>
                    <TableCell>{module.level}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          module.status
                        )}`}
                      >
                        {module.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      {module.roomsCount}
                    </TableCell>
                    <TableCell>{module.lastUpdated}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Actions
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" /> Edit Module
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BookOpen className="mr-2 h-4 w-4" /> View Rooms
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => {
                              setModuleToDelete(module.id);
                              setIsDeleteDialogOpen(true);
                            }}
                          >
                            <Trash className="mr-2 h-4 w-4" /> Delete
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

        {/* Delete Confirmation Dialog */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this module? This action cannot
                be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteModule}>
                Delete Module
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Create New Module Dialog */}
        <Dialog
          open={isNewModuleDialogOpen}
          onOpenChange={setIsNewModuleDialogOpen}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Module</DialogTitle>
              <DialogDescription>
                Add a new educational module to your curriculum
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Module Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Cell Biology Fundamentals"
                  value={newModule.title}
                  onChange={(e) =>
                    setNewModule({ ...newModule, title: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of the module content"
                  value={newModule.description}
                  onChange={(e) =>
                    setNewModule({ ...newModule, description: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    value={newModule.subject}
                    onValueChange={(value) =>
                      setNewModule({ ...newModule, subject: value })
                    }
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Biology">Biology</SelectItem>
                      <SelectItem value="Chemistry">Chemistry</SelectItem>
                      <SelectItem value="Physics">Physics</SelectItem>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="level">Level</Label>
                  <Select
                    value={newModule.level}
                    onValueChange={(value) =>
                      setNewModule({ ...newModule, level: value })
                    }
                  >
                    <SelectTrigger id="level">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GCSE">GCSE</SelectItem>
                      <SelectItem value="A-Level">A-Level</SelectItem>
                      <SelectItem value="University">University</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsNewModuleDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateModule} type="submit">
                Create Module
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </CMSLayout>
  );
};

export default ModulesManagement;
