import { Book, AtomIcon, TestTube, BookOpen } from "lucide-react";
import React from "react";
import { Room as RoomType, Section } from "@/types/room";

// Define proper interfaces
export interface Room extends RoomType {}

export interface Module {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  progress: number;
  rooms: Room[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: string; // Form-1, Form-2, etc.
  completionPercentage: number;
  status: "completed" | "in-progress" | "locked";
  modules: Module[];
}

export interface SubjectData {
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  border: string;
  completionPercentage: number;
  icon: React.ReactNode;
  learningPaths: LearningPath[];
}

// Mock data for each subject
const biologyData: SubjectData = {
  title: "Biology",
  description: "Explore the science of life, from cells to ecosystems and evolution.",
  image: "🧬",
  color: "bg-green-100",
  textColor: "text-green-800",
  border: "border-green-200",
  completionPercentage: 45,
  icon: <Book className="h-5 w-5" />,
  learningPaths: [
    {
      id: "bio-form4",
      title: "Form 4 Biology",
      description: "Advanced topics in cellular functions and genetics",
      level: "Form-4",
      completionPercentage: 15,
      status: "in-progress",
      modules: [
        {
          id: "bio-form4-mod1",
          title: "Cell Division and Genetics",
          description: "Understanding mitosis, meiosis and inheritance patterns",
          difficulty: "Advanced",
          progress: 30,
          rooms: [
            {
              id: "bio-form4-mod1-room1",
              title: "Mitosis and Meiosis",
              description: "Cell division processes and their importance",
              difficulty: "Medium",
              completionPercentage: 60,
              sections: 4,
              quizzes: 2,
              module: "Cell Division",
              duration: "45 min",
              xpPoints: 80,
              completed: false,
              moduleId: "bio-form4-mod1",
              order: 1
            },
            {
              id: "bio-form4-mod1-room2",
              title: "Mendelian Genetics",
              description: "Principles of inheritance and genetic crosses",
              difficulty: "Advanced",
              completionPercentage: 0,
              sections: 5,
              quizzes: 3,
              module: "Genetics",
              duration: "60 min",
              xpPoints: 100,
              completed: false,
              moduleId: "bio-form4-mod1",
              order: 2
            }
          ]
        },
        {
          id: "bio-form4-mod2",
          title: "Evolution and Adaptation",
          description: "Natural selection and evolutionary processes",
          difficulty: "Medium",
          progress: 0,
          rooms: [
            {
              id: "bio-form4-mod2-room1",
              title: "Darwin's Theory",
              description: "Natural selection and evidence for evolution",
              difficulty: "Medium",
              completionPercentage: 0,
              sections: 3,
              quizzes: 2,
              module: "Evolution",
              duration: "40 min",
              xpPoints: 75,
              completed: false,
              moduleId: "bio-form4-mod2",
              order: 1
            }
          ]
        }
      ]
    },
    {
      id: "bio-form3",
      title: "Form 3 Biology",
      description: "Physiology and organ systems in plants and animals",
      level: "Form-3",
      completionPercentage: 75,
      status: "completed",
      modules: [
        {
          id: "bio-form3-mod1",
          title: "Human Organ Systems",
          description: "Detailed examination of major organ systems",
          difficulty: "Medium",
          progress: 100,
          rooms: [
            {
              id: "bio-form3-mod1-room1",
              title: "Circulatory System",
              description: "The heart, blood vessels and circulation",
              difficulty: "Medium", 
              completionPercentage: 100,
              sections: 4,
              quizzes: 2,
              module: "Human Systems",
              duration: "35 min",
              xpPoints: 70,
              completed: true,
              moduleId: "bio-form3-mod1",
              order: 1
            },
            {
              id: "bio-form3-mod1-room2",
              title: "Respiratory System",
              description: "Gas exchange and respiratory mechanisms",
              difficulty: "Medium",
              completionPercentage: 100,
              sections: 3,
              quizzes: 2,
              module: "Human Systems",
              duration: "30 min",
              xpPoints: 65,
              completed: true,
              moduleId: "bio-form3-mod1",
              order: 2
            }
          ]
        }
      ]
    },
    {
      id: "bio-form2",
      title: "Form 2 Biology",
      description: "Cell structure and basic biological processes",
      level: "Form-2",
      completionPercentage: 100,
      status: "completed",
      modules: [
        {
          id: "bio-form2-mod1",
          title: "Cell Biology",
          description: "Cell structure and organelle functions",
          difficulty: "Easy",
          progress: 100,
          rooms: [
            {
              id: "bio-form2-mod1-room1",
              title: "Cell Structure",
              description: "Components of plant and animal cells",
              difficulty: "Easy",
              completionPercentage: 100,
              sections: 3,
              quizzes: 1,
              module: "Cell Biology",
              duration: "25 min",
              xpPoints: 50,
              completed: true,
              moduleId: "bio-form2-mod1",
              order: 1
            }
          ]
        }
      ]
    }
  ]
};

const chemistryData: SubjectData = {
  title: "Chemistry",
  description: "Discover the properties and interactions of atoms and molecules.",
  image: "⚗️",
  color: "bg-blue-100",
  textColor: "text-blue-800",
  border: "border-blue-200",
  completionPercentage: 30,
  icon: <TestTube className="h-5 w-5" />,
  learningPaths: [
    {
      id: "chem-form4",
      title: "Form 4 Chemistry",
      description: "Advanced chemical reactions and organic chemistry",
      level: "Form-4",
      completionPercentage: 0,
      status: "locked",
      modules: [
        {
          id: "chem-form4-mod1",
          title: "Organic Chemistry",
          description: "Carbon compounds and their reactions",
          difficulty: "Advanced",
          progress: 0,
          rooms: [
            {
              id: "chem-form4-mod1-room1",
              title: "Hydrocarbons",
              description: "Alkanes, alkenes, and alkynes",
              difficulty: "Advanced",
              completionPercentage: 0,
              sections: 5,
              quizzes: 3,
              module: "Organic Chemistry",
              duration: "50 min",
              xpPoints: 90,
              completed: false,
              moduleId: "chem-form4-mod1",
              order: 1
            }
          ]
        }
      ]
    },
    {
      id: "chem-form3",
      title: "Form 3 Chemistry",
      description: "Chemical bonding and reaction rates",
      level: "Form-3",
      completionPercentage: 40,
      status: "in-progress",
      modules: [
        {
          id: "chem-form3-mod1",
          title: "Chemical Bonding",
          description: "Ionic, covalent, and metallic bonds",
          difficulty: "Medium",
          progress: 65,
          rooms: [
            {
              id: "chem-form3-mod1-room1",
              title: "Ionic Bonding",
              description: "Transfer of electrons between atoms",
              difficulty: "Medium",
              completionPercentage: 100,
              sections: 3,
              quizzes: 2,
              module: "Chemical Bonding",
              duration: "35 min",
              xpPoints: 70,
              completed: true,
              moduleId: "chem-form3-mod1",
              order: 1
            },
            {
              id: "chem-form3-mod1-room2",
              title: "Covalent Bonding",
              description: "Sharing of electrons between atoms",
              difficulty: "Medium",
              completionPercentage: 30,
              sections: 4,
              quizzes: 2,
              module: "Chemical Bonding",
              duration: "35 min",
              xpPoints: 70,
              completed: false,
              moduleId: "chem-form3-mod1",
              order: 2
            }
          ]
        }
      ]
    }
  ]
};

const physicsData: SubjectData = {
  title: "Physics",
  description: "Understand the fundamental laws that govern the universe.",
  image: "⚛️",
  color: "bg-purple-100",
  textColor: "text-purple-800",
  border: "border-purple-200",
  completionPercentage: 20,
  icon: <AtomIcon className="h-5 w-5" />,
  learningPaths: [
    {
      id: "phys-form4",
      title: "Form 4 Physics",
      description: "Advanced mechanics and electromagnetism",
      level: "Form-4",
      completionPercentage: 0,
      status: "locked",
      modules: [
        {
          id: "phys-form4-mod1",
          title: "Electromagnetism",
          description: "Electric fields, magnetic fields, and their interactions",
          difficulty: "Advanced",
          progress: 0,
          rooms: [
            {
              id: "phys-form4-mod1-room1",
              title: "Electromagnetic Induction",
              description: "Production of electricity from magnetic fields",
              difficulty: "Advanced",
              completionPercentage: 0,
              sections: 4,
              quizzes: 3,
              module: "Electromagnetism",
              duration: "45 min",
              xpPoints: 85,
              completed: false,
              moduleId: "phys-form4-mod1",
              order: 1
            }
          ]
        }
      ]
    },
    {
      id: "phys-form3",
      title: "Form 3 Physics",
      description: "Forces, motion, and energy",
      level: "Form-3",
      completionPercentage: 20,
      status: "in-progress",
      modules: [
        {
          id: "phys-form3-mod1",
          title: "Forces and Motion",
          description: "Newton's laws and their applications",
          difficulty: "Medium",
          progress: 35,
          rooms: [
            {
              id: "phys-form3-mod1-room1",
              title: "Newton's Laws",
              description: "The three laws of motion",
              difficulty: "Medium",
              completionPercentage: 60,
              sections: 3,
              quizzes: 2,
              module: "Forces",
              duration: "40 min",
              xpPoints: 75,
              completed: false,
              moduleId: "phys-form3-mod1",
              order: 1
            }
          ]
        }
      ]
    }
  ]
};

const mathematicsData: SubjectData = {
  title: "Mathematics",
  description: "Master mathematical concepts essential for scientific understanding.",
  image: "📊",
  color: "bg-red-100",
  textColor: "text-red-800",
  border: "border-red-200",
  completionPercentage: 55,
  icon: <BookOpen className="h-5 w-5" />,
  learningPaths: [
    {
      id: "math-form4",
      title: "Form 4 Mathematics",
      description: "Advanced calculus and statistics",
      level: "Form-4",
      completionPercentage: 70,
      status: "in-progress",
      modules: [
        {
          id: "math-form4-mod1",
          title: "Calculus Fundamentals",
          description: "Differentiation and integration basics",
          difficulty: "Advanced",
          progress: 65,
          rooms: [
            {
              id: "math-form4-mod1-room1",
              title: "Differentiation",
              description: "Rules and applications of differentiation",
              difficulty: "Advanced",
              completionPercentage: 100,
              sections: 5,
              quizzes: 3,
              module: "Calculus",
              duration: "50 min",
              xpPoints: 90,
              completed: true,
              moduleId: "math-form4-mod1",
              order: 1
            },
            {
              id: "math-form4-mod1-room2",
              title: "Integration",
              description: "Basic integration techniques",
              difficulty: "Advanced",
              completionPercentage: 30,
              sections: 6,
              quizzes: 3,
              module: "Calculus",
              duration: "60 min",
              xpPoints: 100,
              completed: false,
              moduleId: "math-form4-mod1",
              order: 2
            }
          ]
        },
        {
          id: "math-form4-mod2",
          title: "Statistics and Probability",
          description: "Statistical distributions and hypothesis testing",
          difficulty: "Medium",
          progress: 75,
          rooms: [
            {
              id: "math-form4-mod2-room1",
              title: "Normal Distribution",
              description: "Properties and applications of normal distribution",
              difficulty: "Medium",
              completionPercentage: 100,
              sections: 3,
              quizzes: 2,
              module: "Statistics",
              duration: "40 min",
              xpPoints: 80,
              completed: true,
              moduleId: "math-form4-mod2",
              order: 1
            },
            {
              id: "math-form4-mod2-room2",
              title: "Hypothesis Testing",
              description: "Statistical significance and p-values",
              difficulty: "Medium",
              completionPercentage: 50,
              sections: 4,
              quizzes: 2,
              module: "Statistics",
              duration: "45 min",
              xpPoints: 85,
              completed: false,
              moduleId: "math-form4-mod2",
              order: 2
            }
          ]
        }
      ]
    },
    {
      id: "math-form3",
      title: "Form 3 Mathematics",
      description: "Algebra, trigonometry, and geometry",
      level: "Form-3",
      completionPercentage: 100,
      status: "completed",
      modules: [
        {
          id: "math-form3-mod1",
          title: "Advanced Algebra",
          description: "Quadratic equations and functions",
          difficulty: "Medium",
          progress: 100,
          rooms: [
            {
              id: "math-form3-mod1-room1",
              title: "Quadratic Equations",
              description: "Solving and applications of quadratic equations",
              difficulty: "Medium",
              completionPercentage: 100,
              sections: 4,
              quizzes: 2,
              module: "Algebra",
              duration: "35 min",
              xpPoints: 70,
              completed: true,
              moduleId: "math-form3-mod1",
              order: 1
            }
          ]
        },
        {
          id: "math-form3-mod2",
          title: "Trigonometry",
          description: "Trigonometric functions and identities",
          difficulty: "Medium",
          progress: 100,
          rooms: [
            {
              id: "math-form3-mod2-room1",
              title: "Sine and Cosine Rules",
              description: "Applications in solving triangles",
              difficulty: "Medium",
              completionPercentage: 100,
              sections: 3,
              quizzes: 2,
              module: "Trigonometry",
              duration: "40 min",
              xpPoints: 75,
              completed: true,
              moduleId: "math-form3-mod2",
              order: 1
            }
          ]
        }
      ]
    }
  ]
};

// Export the subjects data
export const subjectsData: { [key: string]: SubjectData } = {
  biology: biologyData,
  chemistry: chemistryData,
  physics: physicsData,
  mathematics: mathematicsData
};

// Export for backward compatibility with code using demoData
export const demoData = {
  subjects: [
    { name: "biology", ...biologyData },
    { name: "chemistry", ...chemistryData },
    { name: "physics", ...physicsData },
    { name: "mathematics", ...mathematicsData }
  ]
};

// Helper function to get subject data by ID
export const getSubjectData = (subjectId: string): SubjectData => {
  return subjectsData[subjectId] || {
    title: "Unknown Subject",
    description: "Subject information not available",
    image: "📚",
    color: "bg-gray-100",
    textColor: "text-gray-800",
    border: "border-gray-200",
    completionPercentage: 0,
    icon: <Book className="h-5 w-5" />,
    learningPaths: []
  };
};

// Helper function to get a learning path by ID
export const getLearningPathById = (subjectId: string, pathId: string): LearningPath | undefined => {
  const subject = getSubjectData(subjectId);
  return subject.learningPaths.find(path => path.id === pathId);
};

// Helper function to get a module by ID
export const getModuleById = (subjectId: string, pathId: string, moduleId: string): Module | undefined => {
  const learningPath = getLearningPathById(subjectId, pathId);
  return learningPath?.modules.find(module => module.id === moduleId);
};

// Helper function to get a room by ID
export const getRoomById = (subjectId: string, roomId: string): Room | undefined => {
  const subject = getSubjectData(subjectId);
  
  for (const path of subject.learningPaths) {
    for (const module of path.modules) {
      const room = module.rooms.find(room => room.id === roomId);
      if (room) return room;
    }
  }
  
  return undefined;
};
