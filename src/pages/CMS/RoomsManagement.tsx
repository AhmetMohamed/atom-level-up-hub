
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
  Trash2, Copy, Eye, ChevronDown 
} from "lucide-react";
import { toast } from "sonner";
import CMSLayout from "@/components/CMSLayout";

const RoomsManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  
  // Mock room data
  const roomsData = [
    { 
      id: "intro-to-cells", 
      title: "Cell Structure & Function", 
      subject: "Biology", 
      level: "Beginner", 
      sections: 3, 
      status: "Published",
      lastUpdated: "2 days ago" 
    },
    { 
      id: "cell-division", 
      title: "Cell Division", 
      subject: "Biology", 
      level: "Intermediate", 
      sections: 4, 
      status: "Published",
      lastUpdated: "1 week ago" 
    },
    { 
      id: "atomic-structure", 
      title: "Atomic Structure", 
      subject: "Chemistry", 
      level: "Beginner", 
      sections: 5, 
      status: "Published",
      lastUpdated: "3 days ago" 
    },
    { 
      id: "chemical-bonding", 
      title: "Chemical Bonding", 
      subject: "Chemistry", 
      level: "Intermediate", 
      sections: 6, 
      status: "Draft",
      lastUpdated: "1 day ago" 
    },
    { 
      id: "forces-motion", 
      title: "Forces & Motion", 
      subject: "Physics", 
      level: "Beginner", 
      sections: 4, 
      status: "Published",
      lastUpdated: "5 days ago" 
    },
    { 
      id: "energy-transfer", 
      title: "Energy Transfer", 
      subject: "Physics", 
      level: "Advanced", 
      sections: 7, 
      status: "Draft",
      lastUpdated: "Just now" 
    },
    { 
      id: "algebra-basics", 
      title: "Algebra Basics", 
      subject: "Mathematics", 
      level: "Beginner", 
      sections: 5, 
      status: "Published",
      lastUpdated: "2 weeks ago" 
    },
    { 
      id: "calculus-intro", 
      title: "Introduction to Calculus", 
      subject: "Mathematics", 
      level: "Advanced", 
      sections: 8, 
      status: "Draft",
      lastUpdated: "3 hours ago" 
    }
  ];

  const subjects = ["All", "Biology", "Chemistry", "Physics", "Mathematics"];
  
  const filteredRooms = roomsData.filter(room => {
    const matchesSearch = room.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === "All" || room.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleDeleteRoom = (roomId: string) => {
    toast.success(`Room deleted successfully`);
    // In a real application, this would make an API request to delete the room
  };
  
  const handleDuplicateRoom = (roomId: string) => {
    toast.success(`Room duplicated successfully`);
    // In a real application, this would make an API request to duplicate the room
  };

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Room Management</h1>
            <p className="text-muted-foreground">Create and manage learning rooms for your students</p>
          </div>

          <Link to="/cms/rooms/new">
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              New Room
            </Button>
          </Link>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search rooms..."
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
                    <TableHead>Room Title</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Sections</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRooms.map((room) => (
                    <TableRow key={room.id}>
                      <TableCell className="font-medium">{room.title}</TableCell>
                      <TableCell>{room.subject}</TableCell>
                      <TableCell>{room.level}</TableCell>
                      <TableCell>{room.sections}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            room.status === "Published" 
                              ? "bg-green-100 text-green-800 border-green-200" 
                              : "bg-amber-100 text-amber-800 border-amber-200"
                          }
                        >
                          {room.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{room.lastUpdated}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <Link to={`/cms/rooms/edit/${room.id}`}>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                            </Link>
                            <Link to={`/subjects/${room.subject.toLowerCase()}/rooms/${room.id}`} target="_blank">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                Preview
                              </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem onClick={() => handleDuplicateRoom(room.id)}>
                              <Copy className="h-4 w-4 mr-2" />
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => handleDeleteRoom(room.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredRooms.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No rooms found. Try adjusting your search.
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

export default RoomsManagement;
