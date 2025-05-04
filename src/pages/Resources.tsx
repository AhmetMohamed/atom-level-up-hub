
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, FileText, Video, Download, Search, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResourceCard = ({ resource }) => {
  return (
    <div className="group rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {resource.type === "document" && <FileText className="h-5 w-5 text-blue-600 mr-2" />}
            {resource.type === "video" && <Video className="h-5 w-5 text-red-600 mr-2" />}
            {resource.type === "book" && <Book className="h-5 w-5 text-green-600 mr-2" />}
            <span className="text-sm text-muted-foreground">{resource.type}</span>
          </div>
          <span className={`
            text-xs rounded-full px-2 py-1 
            ${resource.subject === 'Biology' ? 'bg-green-100 text-green-800' : ''}
            ${resource.subject === 'Chemistry' ? 'bg-blue-100 text-blue-800' : ''}
            ${resource.subject === 'Physics' ? 'bg-purple-100 text-purple-800' : ''}
            ${resource.subject === 'Mathematics' ? 'bg-amber-100 text-amber-800' : ''}
          `}>
            {resource.subject}
          </span>
        </div>
        <h3 className="text-lg font-semibold mt-2">{resource.title}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{resource.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="text-xs text-muted-foreground">{resource.date}</div>
          <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

const Resources = () => {
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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 py-8">
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                  <BookOpen className="h-8 w-8 text-science-primary" />
                  Learning Resources
                </h1>
                <p className="text-muted-foreground">
                  Access our collection of educational materials to support your studies
                </p>
              </div>
              
              <div className="relative w-full md:w-64">
                <Search className="h-4 w-4 absolute top-3 left-3 text-muted-foreground" />
                <Input 
                  placeholder="Search resources..." 
                  className="pl-9"
                />
              </div>
            </div>

            <Tabs defaultValue="all">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="all">All Resources</TabsTrigger>
                  <TabsTrigger value="study-guides">Study Guides</TabsTrigger>
                  <TabsTrigger value="video-tutorials">Video Tutorials</TabsTrigger>
                  <TabsTrigger value="books">Books</TabsTrigger>
                  <TabsTrigger value="exam-preparation">Exam Preparation</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="study-guides" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources
                    .filter(resource => resource.category === 'study-guides')
                    .map(resource => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="video-tutorials" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources
                    .filter(resource => resource.category === 'video-tutorials')
                    .map(resource => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="books" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources
                    .filter(resource => resource.category === 'books')
                    .map(resource => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="exam-preparation" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources
                    .filter(resource => resource.category === 'exam-preparation')
                    .map(resource => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
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
