import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
      learningPaths: [
        {
          id: "atomic-structure",
          title: "Atomic Structure",
          description: "Master the fundamentals of atoms and their components",
          difficulty: "Beginner",
          image: "⚛️",
          progress: 40,
          modules: [
            { id: "atomic-theory", title: "Atomic Theory", completed: true },
            { id: "electron-configuration", title: "Electron Configuration", completed: false },
            { id: "isotopes", title: "Isotopes & Nuclear Chemistry", completed: false },
            { id: "quantum-mechanics", title: "Quantum Mechanical Model", completed: false }
          ]
        },
        {
          id: "chemical-bonding",
          title: "Chemical Bonding",
          description: "Understand how atoms form chemical bonds",
          difficulty: "Intermediate",
          image: "🔗",
          progress: 15,
          modules: [
            { id: "ionic-bonding", title: "Ionic Bonding", completed: true },
            { id: "covalent-bonding", title: "Covalent Bonding", completed: false },
            { id: "metallic-bonding", title: "Metallic Bonding", completed: false },
            { id: "intermolecular-forces", title: "Intermolecular Forces", completed: false }
          ]
        }
      ],
      modules: [
        {
          id: "atomic-theory",
          title: "Atomic Theory",
          description: "Understand the development of atomic models and structure",
          difficulty: "Beginner",
          progress: 100,
          rooms: [
            {
              id: "early-atomic-models",
              title: "Early Atomic Models",
              duration: "40 mins",
              xpPoints: 50,
              completed: true
            },
            {
              id: "modern-atom",
              title: "The Modern Atom",
              duration: "55 mins",
              xpPoints: 70,
              completed: false
            },
            {
              id: "periodic-table",
              title: "The Periodic Table",
              duration: "45 mins",
              xpPoints: 60,
              completed: false
            }
          ]
        },
        {
          id: "ionic-bonding",
          title: "Ionic Bonding",
          description: "Learn about the transfer of electrons between atoms",
          difficulty: "Intermediate",
          progress: 60,
          rooms: [
            {
              id: "ionic-compounds",
              title: "Ionic Compounds",
              duration: "50 mins",
              xpPoints: 65,
              completed: true
            },
            {
              id: "crystal-lattices",
              title: "Crystal Lattices",
              duration: "45 mins",
              xpPoints: 60,
              completed: false
            }
          ]
        }
      ],
      rooms: [
        {
          id: "early-atomic-models",
          title: "Early Atomic Models",
          module: "Atomic Theory",
          duration: "40 mins",
          xpPoints: 50,
          completed: true
        },
        {
          id: "modern-atom",
          title: "The Modern Atom",
          module: "Atomic Theory",
          duration: "55 mins",
          xpPoints: 70,
          completed: false
        },
        {
          id: "ionic-compounds",
          title: "Ionic Compounds",
          module: "Ionic Bonding",
          duration: "50 mins",
          xpPoints: 65,
          completed: true
        }
      ]
    },
    physics: {
      title: "Physics",
      description: "Understand the fundamental principles that govern the natural world.",
      image: "⚛️",
      color: "bg-blue-100",
      textColor: "text-blue-800", 
      border: "border-blue-200",
      completionPercentage: 10,
      learningPaths: [
        {
          id: "mechanics",
          title: "Mechanics",
          description: "Study motion, forces, and energy",
          difficulty: "Intermediate",
          image: "🚀",
          progress: 20,
          modules: [
            { id: "kinematics", title: "Kinematics", completed: true },
            { id: "newtons-laws", title: "Newton's Laws", completed: false },
            { id: "energy-work", title: "Energy & Work", completed: false },
            { id: "momentum", title: "Momentum & Collisions", completed: false }
          ]
        },
        {
          id: "waves-optics",
          title: "Waves & Optics",
          description: "Explore wave properties and behavior of light",
          difficulty: "Advanced",
          image: "🔊",
          progress: 5,
          modules: [
            { id: "wave-properties", title: "Wave Properties", completed: true },
            { id: "sound-waves", title: "Sound Waves", completed: false },
            { id: "light-waves", title: "Light & EM Spectrum", completed: false },
            { id: "optics", title: "Optics & Lenses", completed: false }
          ]
        }
      ],
      modules: [
        {
          id: "kinematics",
          title: "Kinematics",
          description: "Understand motion including distance, displacement, speed, velocity, and acceleration",
          difficulty: "Intermediate",
          progress: 75,
          rooms: [
            {
              id: "motion-graphs",
              title: "Motion Graphs",
              duration: "60 mins",
              xpPoints: 75,
              completed: true
            },
            {
              id: "equations-motion",
              title: "Equations of Motion",
              duration: "70 mins",
              xpPoints: 85,
              completed: false
            }
          ]
        },
        {
          id: "wave-properties",
          title: "Wave Properties",
          description: "Learn about amplitude, wavelength, frequency, and wave speed",
          difficulty: "Beginner",
          progress: 50,
          rooms: [
            {
              id: "types-of-waves",
              title: "Types of Waves",
              duration: "45 mins",
              xpPoints: 60,
              completed: true
            },
            {
              id: "wave-behaviors",
              title: "Wave Behaviors",
              duration: "55 mins",
              xpPoints: 70,
              completed: false
            }
          ]
        }
      ],
      rooms: [
        {
          id: "motion-graphs",
          title: "Motion Graphs",
          module: "Kinematics",
          duration: "60 mins",
          xpPoints: 75,
          completed: true
        },
        {
          id: "types-of-waves",
          title: "Types of Waves",
          module: "Wave Properties",
          duration: "45 mins",
          xpPoints: 60,
          completed: true
        }
      ]
    },
    mathematics: {
      title: "Mathematics",
      description: "Master mathematical concepts crucial for scientific understanding and problem-solving.",
      image: "📊",
      color: "bg-amber-100",
      textColor: "text-amber-800",
      border: "border-amber-200",
      completionPercentage: 30,
      learningPaths: [
        {
          id: "algebra",
          title: "Algebra",
          description: "Master equations, functions, and algebraic structures",
          difficulty: "Intermediate",
          image: "➗",
          progress: 45,
          modules: [
            { id: "linear-equations", title: "Linear Equations", completed: true },
            { id: "quadratics", title: "Quadratic Equations", completed: true },
            { id: "functions", title: "Functions", completed: false },
            { id: "logarithms", title: "Logarithms & Exponents", completed: false }
          ]
        },
        {
          id: "calculus",
          title: "Calculus",
          description: "Learn about rates of change and accumulation",
          difficulty: "Advanced",
          image: "📈",
          progress: 15,
          modules: [
            { id: "limits", title: "Limits", completed: true },
            { id: "derivatives", title: "Derivatives", completed: false },
            { id: "integration", title: "Integration", completed: false },
            { id: "applications", title: "Applications of Calculus", completed: false }
          ]
        }
      ],
      modules: [
        {
          id: "linear-equations",
          title: "Linear Equations",
          description: "Solve equations involving variables to the first power",
          difficulty: "Beginner",
          progress: 100,
          rooms: [
            {
              id: "solving-linear",
              title: "Solving Linear Equations",
              duration: "50 mins",
              xpPoints: 65,
              completed: true
            },
            {
              id: "linear-systems",
              title: "Systems of Linear Equations",
              duration: "60 mins",
              xpPoints: 75,
              completed: true
            }
          ]
        },
        {
          id: "limits",
          title: "Limits",
          description: "Understand the foundation of calculus through limits",
          difficulty: "Advanced",
          progress: 60,
          rooms: [
            {
              id: "intro-limits",
              title: "Introduction to Limits",
              duration: "55 mins",
              xpPoints: 70,
              completed: true
            },
            {
              id: "limit-evaluation",
              title: "Techniques of Limit Evaluation",
              duration: "65 mins",
              xpPoints: 80,
              completed: false
            }
          ]
        }
      ],
      rooms: [
        {
          id: "solving-linear",
          title: "Solving Linear Equations",
          module: "Linear Equations",
          duration: "50 mins",
          xpPoints: 65,
          completed: true
        },
        {
          id: "linear-systems",
          title: "Systems of Linear Equations",
          module: "Linear Equations",
          duration: "60 mins",
          xpPoints: 75,
          completed: true
        },
        {
          id: "intro-limits",
          title: "Introduction to Limits",
          module: "Limits",
          duration: "55 mins",
          xpPoints: 70,
          completed: true
        }
      ]
    }
  };
  
  const subject = subjectData[subjectId as keyof typeof subjectData];
  
  if (!subject) {
    return (
      <div className="py-16">
        <div className="container px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">Subject not found</h1>
          <p className="text-muted-foreground mb-8">The subject you're looking for doesn't exist or hasn't been created yet.</p>
          <Link to="/dashboard">
            <Button>Return to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
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
