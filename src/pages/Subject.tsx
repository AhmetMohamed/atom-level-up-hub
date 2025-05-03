
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle, Lock, Star } from "lucide-react";
import SubjectHeader from "@/components/SubjectHeader";
import ModuleCard from "@/components/ModuleCard";
import RoomCard from "@/components/RoomCard";

const Subject = () => {
  const { subjectId } = useParams();
  const [activeTab, setActiveTab] = useState("learning-paths");
  
  // This would come from an API call in a real app
  const subjectData = {
    biology: {
      title: "Biology",
      description: "Master the foundations of living organisms, their structures, functions, and processes.",
      image: "🧬",
      color: "bg-green-100",
      textColor: "text-green-800",
      border: "border-green-200",
      completionPercentage: 45,
      learningPaths: [
        {
          id: "cellular-biology",
          title: "Cellular Biology",
          description: "Learn about the building blocks of life and how cells function",
          difficulty: "Intermediate",
          image: "🔬",
          progress: 65,
          modules: [
            { id: "cell-structure", title: "Cell Structure & Function", completed: true },
            { id: "cell-division", title: "Cell Division & Reproduction", completed: true },
            { id: "metabolism", title: "Cellular Metabolism", completed: false },
            { id: "gene-expression", title: "Gene Expression", completed: false }
          ]
        },
        {
          id: "genetics",
          title: "Genetics & Heredity",
          description: "Explore DNA, genes, and inheritance patterns",
          difficulty: "Advanced",
          image: "🧬",
          progress: 30,
          modules: [
            { id: "dna-structure", title: "DNA Structure & Replication", completed: true },
            { id: "mendelian-genetics", title: "Mendelian Genetics", completed: false },
            { id: "genetic-disorders", title: "Genetic Disorders", completed: false },
            { id: "genetic-engineering", title: "Genetic Engineering", completed: false }
          ]
        }
      ],
      modules: [
        {
          id: "cell-structure",
          title: "Cell Structure & Function",
          description: "Understand the fundamental building blocks of all living organisms",
          difficulty: "Beginner",
          progress: 100,
          rooms: [
            {
              id: "intro-to-cells",
              title: "Introduction to Cells",
              duration: "45 mins",
              xpPoints: 50,
              completed: true,
              content: [
                { type: "text", content: "Cells are the basic structural and functional units of all living organisms." },
                { type: "text", content: "All cells come from pre-existing cells through cell division." },
                { type: "text", content: "The two main types of cells are prokaryotic and eukaryotic cells." }
              ]
            },
            {
              id: "cell-organelles",
              title: "Cell Organelles",
              duration: "60 mins",
              xpPoints: 75,
              completed: true,
              content: [
                { type: "text", content: "Mitochondria are the powerhouses of the cell, generating ATP through cellular respiration." },
                { type: "text", content: "The nucleus contains the cell's genetic material in the form of DNA." },
                { type: "text", content: "The endoplasmic reticulum is involved in protein and lipid synthesis." }
              ]
            },
            {
              id: "cell-membrane",
              title: "Cell Membrane & Transport",
              duration: "50 mins",
              xpPoints: 60,
              completed: false,
              content: [
                { type: "text", content: "The cell membrane is a phospholipid bilayer with embedded proteins." },
                { type: "text", content: "Passive transport includes diffusion, osmosis, and facilitated diffusion." },
                { type: "text", content: "Active transport requires energy in the form of ATP." }
              ]
            }
          ]
        },
        {
          id: "metabolism",
          title: "Cellular Metabolism",
          description: "Learn about the chemical processes that occur within a living organism",
          difficulty: "Intermediate",
          progress: 45,
          rooms: [
            {
              id: "intro-metabolism",
              title: "Introduction to Metabolism",
              duration: "40 mins",
              xpPoints: 50,
              completed: true,
              content: [
                { type: "text", content: "Metabolism is the set of life-sustaining chemical reactions in organisms." },
                { type: "text", content: "Anabolism builds complex molecules from simpler ones." },
                { type: "text", content: "Catabolism breaks down complex molecules into simpler ones." }
              ]
            },
            {
              id: "photosynthesis",
              title: "Photosynthesis",
              duration: "70 mins",
              xpPoints: 90,
              completed: false,
              content: [
                { type: "text", content: "Photosynthesis converts light energy into chemical energy in the form of glucose." },
                { type: "text", content: "The light-dependent reactions occur in the thylakoid membrane." },
                { type: "text", content: "The Calvin cycle (light-independent reactions) takes place in the stroma." }
              ]
            },
            {
              id: "cellular-respiration",
              title: "Cellular Respiration",
              duration: "65 mins",
              xpPoints: 80,
              completed: false,
              content: [
                { type: "text", content: "Cellular respiration converts glucose into ATP, which provides energy for cellular activities." },
                { type: "text", content: "Glycolysis is the first stage of cellular respiration and occurs in the cytoplasm." },
                { type: "text", content: "The Krebs cycle and electron transport chain take place in the mitochondria." }
              ]
            }
          ]
        }
      ],
      rooms: [
        {
          id: "intro-to-cells",
          title: "Introduction to Cells",
          module: "Cell Structure & Function",
          duration: "45 mins",
          xpPoints: 50,
          completed: true
        },
        {
          id: "cell-organelles",
          title: "Cell Organelles",
          module: "Cell Structure & Function",
          duration: "60 mins",
          xpPoints: 75,
          completed: true
        },
        {
          id: "intro-metabolism",
          title: "Introduction to Metabolism",
          module: "Cellular Metabolism",
          duration: "40 mins",
          xpPoints: 50,
          completed: true
        },
        {
          id: "photosynthesis",
          title: "Photosynthesis",
          module: "Cellular Metabolism",
          duration: "70 mins",
          xpPoints: 90,
          completed: false
        }
      ]
    },
    chemistry: {
      title: "Chemistry",
      description: "Explore matter, its properties, and the changes it undergoes during reactions.",
      image: "⚗️",
      color: "bg-purple-100",
      textColor: "text-purple-800",
      border: "border-purple-200",
      completionPercentage: 25,
      learningPaths: [],
      modules: [],
      rooms: []
    },
    physics: {
      title: "Physics",
      description: "Understand the fundamental principles that govern the natural world.",
      image: "⚛️",
      color: "bg-blue-100",
      textColor: "text-blue-800", 
      border: "border-blue-200",
      completionPercentage: 10,
      learningPaths: [],
      modules: [],
      rooms: []
    }
  };
  
  const subject = subjectData[subjectId as keyof typeof subjectData];
  
  if (!subject) {
    return <div className="container py-16 text-center">Subject not found</div>;
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Subject Header */}
      <SubjectHeader subject={subject} />
      
      {/* Content Tabs */}
      <div className="container px-4 py-8 md:px-6">
        <Tabs 
          defaultValue="learning-paths" 
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="learning-paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
          </TabsList>
          
          {/* Learning Paths */}
          <TabsContent value="learning-paths" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {subject.learningPaths.map(path => (
                <Card key={path.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col h-full">
                    <div className={`p-6 ${subject.color}`}>
                      <div className="text-4xl mb-3">{path.image}</div>
                      <h3 className={`text-2xl font-bold ${subject.textColor}`}>{path.title}</h3>
                      <p className="text-muted-foreground mt-2">{path.description}</p>
                      
                      <div className="mt-4">
                        <Badge variant="outline" className={`${subject.border} ${subject.color}`}>
                          {path.difficulty}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-medium">{path.progress}%</span>
                      </div>
                      <div className="progress-container">
                        <div 
                          className="progress-bar" 
                          style={{ width: `${path.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold mb-3">Modules:</h4>
                        <ul className="space-y-2">
                          {path.modules.map(module => (
                            <li key={module.id} className="flex items-center gap-2">
                              {module.completed ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                              )}
                              <span className={module.completed ? "text-sm" : "text-sm text-muted-foreground"}>
                                {module.title}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-6 pt-0 mt-auto">
                      <Link to={`/subjects/${subjectId}/paths/${path.id}`}>
                        <Button className="w-full">
                          {path.progress > 0 ? "Continue Path" : "Start Path"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Modules */}
          <TabsContent value="modules" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {subject.modules.map(module => (
                <ModuleCard key={module.id} module={module} subject={subject} subjectId={subjectId as string} />
              ))}
            </div>
          </TabsContent>
          
          {/* Rooms */}
          <TabsContent value="rooms" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {subject.rooms.map(room => (
                <RoomCard key={room.id} room={room} subject={subject} subjectId={subjectId as string} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Subject;
