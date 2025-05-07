
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Book,
  FileText,
  Video,
  Download,
  Search,
  BookOpen,
  Filter,
  Grid2X2,
  List
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
};

// Resource Card Component
const ResourceCard = ({ resource, view = "grid" }) => {
  const getTypeIcon = () => {
    switch (resource.type) {
      case "document":
        return <FileText className="h-5 w-5 text-blue-600" />;
      case "video":
        return <Video className="h-5 w-5 text-red-600" />;
      case "book":
        return <Book className="h-5 w-5 text-green-600" />;
      default:
        return <FileText className="h-5 w-5 text-slate-600" />;
    }
  };

  const getSubjectColor = () => {
    switch (resource.subject) {
      case "Biology":
        return "bg-green-50 text-green-700 border-green-200";
      case "Chemistry":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Physics":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Mathematics":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  if (view === "list") {
    return (
      <motion.div 
        variants={itemVariants}
        className="bg-white rounded-lg border shadow-sm p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-slate-50">{getTypeIcon()}</div>
          <div>
            <h3 className="font-medium">{resource.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Badge variant="outline" className={getSubjectColor()}>
                {resource.subject}
              </Badge>
              <span>•</span>
              <span>{resource.date}</span>
            </div>
          </div>
        </div>
        <Button size="sm" variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={itemVariants}
      className="group rounded-lg bg-white border shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-slate-300"
    >
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className={getSubjectColor()}>
            {resource.subject}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            {getTypeIcon()}
            <span className="ml-1">{resource.type}</span>
          </div>
        </div>
        <h3 className="text-lg font-medium mb-2">{resource.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{resource.description}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t">
          <div className="text-xs text-muted-foreground">{resource.date}</div>
          <Button 
            size="sm" 
            variant="ghost" 
            className="group-hover:bg-primary group-hover:text-white transition-colors"
          >
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// Filter Panel Component
const FilterPanel = ({ onFilterChange, activeFilters, visible }) => {
  const subjects = ["All", "Biology", "Chemistry", "Physics", "Mathematics"];
  const types = ["All", "document", "video", "book"];

  if (!visible) return null;

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Subject</h3>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <Badge 
                  key={subject}
                  variant={activeFilters.subject === subject ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => onFilterChange("subject", subject)}
                >
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Type</h3>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Badge 
                  key={type}
                  variant={activeFilters.type === type ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => onFilterChange("type", type)}
                >
                  {type === "document" ? "Document" : 
                   type === "video" ? "Video" : 
                   type === "book" ? "Book" : type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Resources Page
const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    subject: "All",
    type: "All"
  });

  // Resources data
  const resources = [
    {
      id: 1,
      title: "GCSE Biology Revision Guide",
      description: "Complete revision guide covering all the essential topics in the GCSE Biology curriculum.",
      type: "document",
      subject: "Biology",
      date: "Updated May 2023",
      category: "study-guides"
    },
    {
      id: 2,
      title: "A-Level Chemistry Formula Sheet",
      description: "Comprehensive formula sheet with all the equations you need for A-Level Chemistry exams.",
      type: "document",
      subject: "Chemistry",
      date: "Updated April 2023",
      category: "study-guides"
    },
    {
      id: 3,
      title: "Physics Practical Experiments Guide",
      description: "Step-by-step instructions for conducting physics experiments safely and effectively.",
      type: "document",
      subject: "Physics",
      date: "Updated June 2023",
      category: "study-guides"
    },
    {
      id: 4,
      title: "Cell Division and Mitosis",
      description: "Detailed video tutorial explaining the process of cell division and mitosis with animations.",
      type: "video",
      subject: "Biology",
      date: "Released March 2023",
      category: "video-tutorials"
    },
    {
      id: 5,
      title: "Organic Chemistry Reactions",
      description: "Video series covering all major organic chemistry reaction mechanisms with examples.",
      type: "video",
      subject: "Chemistry",
      date: "Released January 2023",
      category: "video-tutorials"
    },
    {
      id: 6,
      title: "Advanced Mathematical Problem Solving",
      description: "Learn techniques for solving complex mathematical problems for competitive exams.",
      type: "book",
      subject: "Mathematics",
      date: "Published 2022",
      category: "books"
    },
    {
      id: 7,
      title: "Wave Properties and Behavior",
      description: "Interactive guide to understanding wave properties and behaviors in different mediums.",
      type: "video",
      subject: "Physics",
      date: "Released February 2023",
      category: "video-tutorials"
    },
    {
      id: 8,
      title: "Genetic Engineering Case Studies",
      description: "Collection of case studies exploring real-world applications of genetic engineering.",
      type: "book",
      subject: "Biology",
      date: "Published 2023",
      category: "books"
    },
    {
      id: 9,
      title: "GCSE Maths Past Papers Bundle",
      description: "Compilation of past GCSE mathematics papers with detailed answers and explanations.",
      type: "document",
      subject: "Mathematics",
      date: "Updated July 2023",
      category: "exam-preparation"
    }
  ];

  // Filter resources based on search query, category and filters
  const getFilteredResources = (category = "") => {
    return resources.filter((resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category ? resource.category === category : true;
      const matchesSubject = filters.subject === "All" || resource.subject === filters.subject;
      const matchesType = filters.type === "All" || resource.type === filters.type;
      
      return matchesSearch && matchesCategory && matchesSubject && matchesType;
    });
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Reset function for filters
  const resetFilters = () => {
    setFilters({
      subject: "All",
      type: "All"
    });
    setSearchQuery("");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <div className="inline-block bg-slate-100 p-2 rounded-lg mb-3">
                    <BookOpen className="h-6 w-6 text-slate-700" />
                  </div>
                  <h1 className="text-4xl font-bold mb-2">Learning Resources</h1>
                  <p className="text-muted-foreground">
                    Discover and download educational materials to support your studies
                  </p>
                </div>
              </div>

              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search resources..." 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setShowFilters(!showFilters)}
                    className={showFilters ? "bg-slate-100" : ""}
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-slate-100" : ""}
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-slate-100" : ""}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Filter Panel */}
            <FilterPanel 
              onFilterChange={handleFilterChange} 
              activeFilters={filters} 
              visible={showFilters} 
            />

            {/* Content Tabs */}
            <Tabs defaultValue="all" className="mt-6">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="study-guides">Study Guides</TabsTrigger>
                <TabsTrigger value="video-tutorials">Video Tutorials</TabsTrigger>
                <TabsTrigger value="books">Books</TabsTrigger>
                <TabsTrigger value="exam-preparation">Exam Prep</TabsTrigger>
              </TabsList>
              
              {/* All Resources */}
              <TabsContent value="all">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className={
                    viewMode === "grid" 
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                      : "space-y-3"
                  }
                >
                  {getFilteredResources().length > 0 ? (
                    getFilteredResources().map(resource => (
                      <ResourceCard key={resource.id} resource={resource} view={viewMode} />
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                        <Search className="h-8 w-8 text-slate-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">No resources found</h3>
                      <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                      <Button variant="outline" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
              
              {/* Study Guides */}
              <TabsContent value="study-guides">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className={
                    viewMode === "grid" 
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                      : "space-y-3"
                  }
                >
                  {getFilteredResources('study-guides').length > 0 ? (
                    getFilteredResources('study-guides').map(resource => (
                      <ResourceCard key={resource.id} resource={resource} view={viewMode} />
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                        <Search className="h-8 w-8 text-slate-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">No study guides found</h3>
                      <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                      <Button variant="outline" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
              
              {/* Video Tutorials */}
              <TabsContent value="video-tutorials">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className={
                    viewMode === "grid" 
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                      : "space-y-3"
                  }
                >
                  {getFilteredResources('video-tutorials').length > 0 ? (
                    getFilteredResources('video-tutorials').map(resource => (
                      <ResourceCard key={resource.id} resource={resource} view={viewMode} />
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                        <Video className="h-8 w-8 text-slate-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">No video tutorials found</h3>
                      <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                      <Button variant="outline" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
              
              {/* Books */}
              <TabsContent value="books">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className={
                    viewMode === "grid" 
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                      : "space-y-3"
                  }
                >
                  {getFilteredResources('books').length > 0 ? (
                    getFilteredResources('books').map(resource => (
                      <ResourceCard key={resource.id} resource={resource} view={viewMode} />
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                        <Book className="h-8 w-8 text-slate-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">No books found</h3>
                      <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                      <Button variant="outline" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
              
              {/* Exam Preparation */}
              <TabsContent value="exam-preparation">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className={
                    viewMode === "grid" 
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                      : "space-y-3"
                  }
                >
                  {getFilteredResources('exam-preparation').length > 0 ? (
                    getFilteredResources('exam-preparation').map(resource => (
                      <ResourceCard key={resource.id} resource={resource} view={viewMode} />
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                        <FileText className="h-8 w-8 text-slate-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">No exam materials found</h3>
                      <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                      <Button variant="outline" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resources;
