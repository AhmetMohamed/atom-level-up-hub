
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle, Search, MoreHorizontal, Edit, 
  Trash2, Download, Eye, ChevronDown,
  FileText, File, FileImage, FileSpreadsheet, FileVideo
} from "lucide-react";
import { toast } from "sonner";
import CMSLayout from "@/components/CMSLayout";

const ResourcesManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock resource data
  const resourcesData = [
    { 
      id: "biology-notes", 
      title: "Cell Biology Notes", 
      subject: "Biology", 
      type: "Document",
      fileType: "PDF",
      fileSize: "2.4 MB",
      downloadCount: 156,
      author: "Dr. Emma Chen",
      category: "Notes",
      createdAt: "2 weeks ago" 
    },
    { 
      id: "biology-diagram", 
      title: "Cell Structure Diagram", 
      subject: "Biology", 
      type: "Image",
      fileType: "PNG",
      fileSize: "780 KB",
      downloadCount: 98,
      author: "Dr. Emma Chen",
      category: "Diagram",
      createdAt: "1 week ago" 
    },
    { 
      id: "chemistry-table", 
      title: "Periodic Table Reference", 
      subject: "Chemistry", 
      type: "Document",
      fileType: "PDF",
      fileSize: "1.2 MB",
      downloadCount: 245,
      author: "Dr. Mark Wilson",
      category: "Reference",
      createdAt: "3 days ago" 
    },
    { 
      id: "chemistry-data", 
      title: "Element Properties Dataset", 
      subject: "Chemistry", 
      type: "Spreadsheet",
      fileType: "XLSX",
      fileSize: "4.8 MB",
      downloadCount: 67,
      author: "Dr. Mark Wilson",
      category: "Dataset",
      createdAt: "5 days ago" 
    },
    { 
      id: "physics-video", 
      title: "Forces & Motion Demonstration", 
      subject: "Physics", 
      type: "Video",
      fileType: "MP4",
      fileSize: "28.6 MB",
      downloadCount: 112,
      author: "Dr. Sarah Johnson",
      category: "Tutorial",
      createdAt: "1 day ago" 
    },
    { 
      id: "physics-formulas", 
      title: "Physics Formulas Cheat Sheet", 
      subject: "Physics", 
      type: "Document",
      fileType: "PDF",
      fileSize: "980 KB",
      downloadCount: 321,
      author: "Dr. Sarah Johnson",
      category: "Reference",
      createdAt: "2 days ago" 
    },
    { 
      id: "math-worksheet", 
      title: "Algebra Practice Worksheet", 
      subject: "Mathematics", 
      type: "Document",
      fileType: "PDF",
      fileSize: "1.5 MB",
      downloadCount: 189,
      author: "Dr. John Brown",
      category: "Worksheet",
      createdAt: "1 week ago" 
    },
    { 
      id: "math-solutions", 
      title: "Calculus Problem Solutions", 
      subject: "Mathematics", 
      type: "Document",
      fileType: "PDF",
      fileSize: "2.1 MB",
      downloadCount: 145,
      author: "Dr. John Brown",
      category: "Solutions",
      createdAt: "4 days ago" 
    },
    { 
      id: "biology-past-paper", 
      title: "GCSE Biology 2022 Past Paper", 
      subject: "Biology", 
      type: "Document",
      fileType: "PDF",
      fileSize: "3.2 MB",
      downloadCount: 415,
      author: "Exam Board",
      category: "Past Paper",
      createdAt: "3 weeks ago" 
    },
    { 
      id: "physics-past-paper", 
      title: "A-Level Physics 2023 Paper 1", 
      subject: "Physics", 
      type: "Document",
      fileType: "PDF",
      fileSize: "4.5 MB",
      downloadCount: 298,
      author: "Exam Board",
      category: "Past Paper",
      createdAt: "2 weeks ago" 
    },
    { 
      id: "study-tips", 
      title: "Effective Science Study Techniques", 
      subject: "General", 
      type: "Document",
      fileType: "PDF",
      fileSize: "1.8 MB",
      downloadCount: 276,
      author: "ScienceHub Team",
      category: "Blog Post",
      createdAt: "6 days ago" 
    },
    { 
      id: "exam-preparation", 
      title: "How to Prepare for Science Exams", 
      subject: "General", 
      type: "Document",
      fileType: "PDF",
      fileSize: "2.3 MB",
      downloadCount: 312,
      author: "ScienceHub Team",
      category: "Blog Post",
      createdAt: "1 week ago" 
    }
  ];

  const fileTypes = ["All", "Document", "Image", "Spreadsheet", "Video"];
  
  const getFilteredResources = () => {
    return resourcesData.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === "All" || resource.type === selectedType;
      const matchesTab = activeTab === "all" || 
                         (activeTab === "past-papers" && resource.category === "Past Paper") || 
                         (activeTab === "blog" && resource.category === "Blog Post");
      return matchesSearch && matchesType && matchesTab;
    });
  };
  
  const filteredResources = getFilteredResources();

  const handleDeleteResource = (resourceId: string) => {
    toast.success(`Resource deleted successfully`);
    // In a real application, this would make an API request to delete the resource
  };
  
  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case "Document":
        return <FileText className="h-5 w-5 text-blue-600" />;
      case "Image":
        return <FileImage className="h-5 w-5 text-green-600" />;
      case "Spreadsheet":
        return <FileSpreadsheet className="h-5 w-5 text-purple-600" />;
      case "Video":
        return <FileVideo className="h-5 w-5 text-red-600" />;
      default:
        return <File className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Resource Management</h1>
            <p className="text-muted-foreground">Upload and manage educational resources</p>
          </div>

          <Link to="/cms/resources/new">
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              New Resource
            </Button>
          </Link>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="past-papers">Past Papers</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search resources..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Type: {selectedType}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {fileTypes.map((type) => (
                        <DropdownMenuItem 
                          key={type} 
                          onClick={() => setSelectedType(type)}
                        >
                          {type}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">Type</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Downloads</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Added</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredResources.map((resource) => (
                        <TableRow key={resource.id}>
                          <TableCell>
                            <div className="flex justify-center">
                              {getResourceTypeIcon(resource.type)}
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{resource.title}</TableCell>
                          <TableCell>{resource.subject}</TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {resource.category}
                            </Badge>
                          </TableCell>
                          <TableCell>{resource.fileSize}</TableCell>
                          <TableCell>{resource.downloadCount}</TableCell>
                          <TableCell className="text-muted-foreground">{resource.author}</TableCell>
                          <TableCell className="text-muted-foreground">{resource.createdAt}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <Link to={`/cms/resources/edit/${resource.id}`}>
                                  <DropdownMenuItem>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                  </DropdownMenuItem>
                                </Link>
                                <Link to={`/resources/${resource.id}`} target="_blank">
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    Preview
                                  </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem>
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-red-600"
                                  onClick={() => handleDeleteResource(resource.id)}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                      {filteredResources.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                            No resources found. Try adjusting your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="past-papers">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Past Exam Papers</h2>
                  <Link to="/cms/resources/new?type=past-paper">
                    <Button variant="outline" size="sm">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Upload Past Paper
                    </Button>
                  </Link>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>File Type</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Downloads</TableHead>
                        <TableHead>Added</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredResources.map((resource) => (
                        <TableRow key={resource.id}>
                          <TableCell className="font-medium">{resource.title}</TableCell>
                          <TableCell>{resource.subject}</TableCell>
                          <TableCell>{resource.fileType}</TableCell>
                          <TableCell>{resource.fileSize}</TableCell>
                          <TableCell>{resource.downloadCount}</TableCell>
                          <TableCell className="text-muted-foreground">{resource.createdAt}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {filteredResources.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                            No past papers found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="blog">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Blog Posts</h2>
                  <Link to="/cms/resources/new?type=blog">
                    <Button variant="outline" size="sm">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      New Blog Post
                    </Button>
                  </Link>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Downloads</TableHead>
                        <TableHead>Published</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredResources.map((resource) => (
                        <TableRow key={resource.id}>
                          <TableCell className="font-medium">{resource.title}</TableCell>
                          <TableCell>{resource.subject}</TableCell>
                          <TableCell>{resource.author}</TableCell>
                          <TableCell>{resource.downloadCount}</TableCell>
                          <TableCell className="text-muted-foreground">{resource.createdAt}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {filteredResources.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            No blog posts found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </CMSLayout>
  );
};

export default ResourcesManagement;
