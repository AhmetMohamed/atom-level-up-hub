
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Book, Download, FileText, Search, BookOpen, FileArchive, File, Calendar, User } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

// Mock resources data - past papers
const pastpapers = {
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
  mathematics: [
    {
      id: "math-practice-tests",
      title: "Mathematics Practice Tests",
      description: "Set of 10 practice tests covering all key mathematics topics.",
      type: "Practice Tests",
      format: "PDF",
      pages: 95,
      downloads: 2341,
      premium: true,
    },
    {
      id: "math-formula-sheet",
      title: "Mathematics Formula Reference",
      description: "Comprehensive formula reference sheet for all mathematics topics.",
      type: "Reference",
      format: "PDF",
      pages: 10,
      downloads: 6287,
      premium: false,
    },
  ],
};

// Mock blog posts
const blogPosts = [
  {
    id: "blog-1",
    title: "5 Proven Strategies to Ace Your Science Exams",
    description: "Learn effective study techniques that will help you prepare for and excel in your upcoming science exams.",
    image: "🎯",
    author: "Dr. Emma Thompson",
    date: "May 2, 2025",
    category: "Exam Tips",
    readTime: "7 min read",
    premium: false
  },
  {
    id: "blog-2",
    title: "Understanding the Periodic Table: Memory Techniques That Work",
    description: "Memorizing the periodic table can be challenging. These memory techniques will help you recall elements and their properties with ease.",
    image: "⚗️",
    author: "Prof. Michael Chen",
    date: "April 28, 2025",
    category: "Chemistry",
    readTime: "10 min read",
    premium: false
  },
  {
    id: "blog-3",
    title: "The Science of Effective Note-Taking",
    description: "Discover the research-backed methods for taking notes that enhance comprehension and retention of complex science concepts.",
    image: "📝",
    author: "Sarah Williams, MSc",
    date: "April 23, 2025",
    category: "Study Skills",
    readTime: "8 min read",
    premium: true
  },
  {
    id: "blog-4",
    title: "How to Tackle Complex Physics Problems",
    description: "Step-by-step approach to breaking down and solving challenging physics problems that often appear in exams.",
    image: "⚛️",
    author: "Dr. Robert Johnson",
    date: "April 20, 2025",
    category: "Physics",
    readTime: "12 min read",
    premium: true
  },
  {
    id: "blog-5",
    title: "Biology Diagrams Made Simple",
    description: "Improve your ability to draw and interpret biological diagrams with these practical techniques.",
    image: "🧬",
    author: "Dr. Lisa Zhang",
    date: "April 15, 2025",
    category: "Biology",
    readTime: "9 min read",
    premium: false
  },
  {
    id: "blog-6",
    title: "Math Anxiety: Overcoming the Fear of Numbers",
    description: "Practical strategies to overcome math anxiety and build confidence in solving mathematical problems.",
    image: "🔢",
    author: "Dr. James Wilson",
    date: "April 10, 2025",
    category: "Mathematics",
    readTime: "11 min read",
    premium: false
  }
];

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

const BlogPostCard = ({ post }: { post: any }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="bg-science-light/50 p-6 flex justify-center text-4xl">
        {post.image}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </div>
          {post.premium && (
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-science-primary/10 text-science-primary border border-science-primary/20">
              Premium
            </div>
          )}
        </div>
        <CardTitle className="line-clamp-2 mt-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <User className="h-3.5 w-3.5 mr-1" />
          <span>{post.author}</span>
        </div>
        <div className="text-xs bg-muted px-2 py-1 rounded-md">
          {post.readTime}
        </div>
      </CardFooter>
    </Card>
  );
};

const Resources = () => {
  const [mainTab, setMainTab] = useState("past-papers");
  const [paperTab, setPaperTab] = useState("biology");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPastPapers = pastpapers[paperTab as keyof typeof pastpapers]?.filter(
    paper => paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             paper.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBlogPosts = blogPosts.filter(
    post => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
            <p className="text-muted-foreground">
              Access past papers, revision guides, and helpful articles.
            </p>
          </div>
          <div className="w-full md:w-auto flex gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-science-primary hover:bg-science-primary/90">
              Search
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="past-papers" className="mb-8" value={mainTab} onValueChange={setMainTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="past-papers">Past Papers & Materials</TabsTrigger>
            <TabsTrigger value="blog">Blog & Exam Tips</TabsTrigger>
          </TabsList>
          
          {/* Past Papers Tab */}
          <TabsContent value="past-papers" className="space-y-6">
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
            
            <Tabs defaultValue="biology" className="mb-8" value={paperTab} onValueChange={setPaperTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="biology">Biology</TabsTrigger>
                <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
                <TabsTrigger value="physics">Physics</TabsTrigger>
                <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="biology" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPastPapers?.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="chemistry" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPastPapers?.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="physics" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPastPapers?.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="mathematics" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPastPapers?.map((resource) => (
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
          </TabsContent>
          
          {/* Blog Tab */}
          <TabsContent value="blog" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {filteredBlogPosts.slice(0, 6).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="flex justify-center">
              <Button variant="outline">
                Load More Articles
              </Button>
            </div>
            
            <Card className="mt-10">
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
                <CardDescription>Browse articles by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">Exam Tips</Button>
                  <Button variant="outline" size="sm">Study Skills</Button>
                  <Button variant="outline" size="sm">Biology</Button>
                  <Button variant="outline" size="sm">Chemistry</Button>
                  <Button variant="outline" size="sm">Physics</Button>
                  <Button variant="outline" size="sm">Mathematics</Button>
                  <Button variant="outline" size="sm">Revision Techniques</Button>
                  <Button variant="outline" size="sm">Science News</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-science-light/30 border-science-primary/20 mt-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-3xl">✨</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-1">Want to Contribute?</h3>
                  <p className="text-sm text-muted-foreground mb-0">
                    Are you a science educator or expert? Share your knowledge by writing for ScienceHub Blog.
                  </p>
                </div>
                <Link to="/contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Resources;
