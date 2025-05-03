
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Book, Download, FileText, CheckCircle, Search, BookOpen, FileArchive, File } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

// Mock resources data
const resources = {
  biology: [
    {
      id: "bio-past-papers-1",
      title: "GCSE Biology Past Papers 2022-2023",
      description: "Complete set of past exam papers from the 2022-2023 academic year.",
      type: "Past Papers",
      format: "PDF",
      pages: 48,
      downloads: 1245,
      premium: false,
    },
    {
      id: "bio-revision-guide",
      title: "Biology Revision Guide",
      description: "Comprehensive revision guide covering all GCSE biology topics.",
      type: "Revision Guide",
      format: "PDF",
      pages: 120,
      downloads: 3782,
      premium: true,
    },
    {
      id: "bio-flash-cards",
      title: "Biology Flash Cards Bundle",
      description: "250+ printable flash cards covering key biology concepts and terminology.",
      type: "Flash Cards",
      format: "PDF",
      pages: 62,
      downloads: 950,
      premium: true,
    },
  ],
  chemistry: [
    {
      id: "chem-past-papers-1",
      title: "A-Level Chemistry Past Papers 2021-2023",
      description: "Complete set of past exam papers with mark schemes.",
      type: "Past Papers",
      format: "PDF",
      pages: 86,
      downloads: 1876,
      premium: false,
    },
    {
      id: "chem-formula-sheet",
      title: "Chemistry Formula Sheet",
      description: "Essential chemical formulas and equations for quick reference.",
      type: "Reference",
      format: "PDF",
      pages: 8,
      downloads: 4287,
      premium: false,
    },
    {
      id: "chem-practice-questions",
      title: "Chemistry Practice Questions Pack",
      description: "Over 500 practice questions sorted by topic with full solutions.",
      type: "Practice Questions",
      format: "PDF",
      pages: 150,
      downloads: 2134,
      premium: true,
    },
  ],
  physics: [
    {
      id: "phys-mock-exams",
      title: "Physics Mock Exams Bundle",
      description: "Five complete mock exams with detailed solutions and mark schemes.",
      type: "Mock Exams",
      format: "PDF",
      pages: 75,
      downloads: 1567,
      premium: true,
    },
    {
      id: "phys-equations",
      title: "Physics Equations List",
      description: "Complete list of equations needed for GCSE and A-Level Physics.",
      type: "Reference",
      format: "PDF",
      pages: 6,
      downloads: 5231,
      premium: false,
    },
    {
      id: "phys-cheat-sheet",
      title: "Physics Cheat Sheet",
      description: "Quick reference guide for key physics concepts and formulas.",
      type: "Reference",
      format: "PDF",
      pages: 12,
      downloads: 3102,
      premium: true,
    },
  ],
  environmental: [
    {
      id: "env-case-studies",
      title: "Environmental Science Case Studies",
      description: "Collection of 15 case studies perfect for exam questions.",
      type: "Case Studies",
      format: "PDF",
      pages: 45,
      downloads: 876,
      premium: true,
    },
    {
      id: "env-key-terms",
      title: "Environmental Science Key Terms",
      description: "Glossary of essential environmental science terminology.",
      type: "Reference",
      format: "PDF",
      pages: 18,
      downloads: 1230,
      premium: false,
    },
  ],
};

const ResourceCard = ({ resource }: { resource: any }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
            {resource.type} • {resource.format} • {resource.pages} pages
          </div>
          {resource.premium && (
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-science-primary/10 text-science-primary border border-science-primary/20">
              Premium
            </div>
          )}
        </div>
        <CardTitle className="mt-2">{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Download className="h-3.5 w-3.5" />
          <span>{resource.downloads.toLocaleString()} downloads</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${resource.premium ? 'bg-science-primary hover:bg-science-primary/90' : 'bg-science-secondary hover:bg-science-secondary/90'}`}
        >
          {resource.premium ? 'Unlock Resource' : 'Download Free'}
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Resources = () => {
  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
            <p className="text-muted-foreground">
              Download past papers, revision guides, and more.
            </p>
          </div>
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                className="pl-9"
              />
            </div>
            <Button className="bg-science-primary hover:bg-science-primary/90">
              Search
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card className="p-4 flex flex-col items-center text-center bg-science-light/50">
            <div className="h-12 w-12 rounded-full bg-science-light flex items-center justify-center mb-3">
              <FileText className="h-6 w-6 text-science-primary" />
            </div>
            <h3 className="font-semibold mb-1">Past Papers</h3>
            <p className="text-sm text-muted-foreground">Authentic exam papers from previous years.</p>
          </Card>
          
          <Card className="p-4 flex flex-col items-center text-center bg-science-light/50">
            <div className="h-12 w-12 rounded-full bg-science-light flex items-center justify-center mb-3">
              <File className="h-6 w-6 text-science-primary" />
            </div>
            <h3 className="font-semibold mb-1">Practice Questions</h3>
            <p className="text-sm text-muted-foreground">Extra questions sorted by topic with solutions.</p>
          </Card>
          
          <Card className="p-4 flex flex-col items-center text-center bg-science-light/50">
            <div className="h-12 w-12 rounded-full bg-science-light flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-science-primary" />
            </div>
            <h3 className="font-semibold mb-1">Revision Guides</h3>
            <p className="text-sm text-muted-foreground">Comprehensive study materials for exam success.</p>
          </Card>
          
          <Card className="p-4 flex flex-col items-center text-center bg-science-light/50">
            <div className="h-12 w-12 rounded-full bg-science-light flex items-center justify-center mb-3">
              <FileArchive className="h-6 w-6 text-science-primary" />
            </div>
            <h3 className="font-semibold mb-1">Reference Materials</h3>
            <p className="text-sm text-muted-foreground">Formula sheets, cheat sheets, and key terms.</p>
          </Card>
        </div>
        
        <Tabs defaultValue="biology" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="biology">Biology</TabsTrigger>
            <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
            <TabsTrigger value="physics">Physics</TabsTrigger>
            <TabsTrigger value="environmental">Environmental</TabsTrigger>
          </TabsList>
          
          <TabsContent value="biology" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.biology.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="chemistry" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.chemistry.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="physics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.physics.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="environmental" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.environmental.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <Card className="p-6 bg-science-light/30 border-science-primary/20 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-3xl">🔒</div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-1">Unlock Premium Resources</h3>
              <p className="text-sm text-muted-foreground mb-0">
                Subscribe to ScienceHub Premium for unlimited access to all revision materials, mock exams, and past papers.
              </p>
            </div>
            <Link to="/pricing">
              <Button className="bg-science-primary hover:bg-science-primary/90">
                View Plans
              </Button>
            </Link>
          </div>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recently Added Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="h-10 w-10 rounded-md bg-science-light flex items-center justify-center">
                  <FileText className="h-5 w-5 text-science-primary" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">A-Level Biology Mock Exam 2024</p>
                  <p className="text-xs text-muted-foreground">Added 3 days ago • Premium</p>
                </div>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="h-10 w-10 rounded-md bg-science-light flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-science-primary" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">Chemistry Atomic Structure Revision Guide</p>
                  <p className="text-xs text-muted-foreground">Added 5 days ago • Premium</p>
                </div>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="h-10 w-10 rounded-md bg-science-light flex items-center justify-center">
                  <File className="h-5 w-5 text-science-primary" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">GCSE Physics Equations Cheat Sheet</p>
                  <p className="text-xs text-muted-foreground">Added 1 week ago • Free</p>
                </div>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Resources;
