import { Book, AtomIcon, TestTube, BookOpen } from "lucide-react";
import React from "react";

// Define proper interfaces
export interface Room {
  id: string;
  title: string;
  description: string;
  image?: string;
  level?: string;
  completionPercentage: number;
  sections: any[]; // Changed from number to accommodate both numbers and arrays
  quizzes: number;
  module: string;
  duration: string;
  xpPoints: number;
  completed: boolean;
  quiz?: any[];
}

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

// Enhanced Room Content with detailed sections
const cellStructureRoom = {
  id: "bio-form2-mod1-room1",
  title: "Cell Structure",
  description: "Components of plant and animal cells",
  completionPercentage: 100,
  sections: [
    {
      id: "cell-intro",
      title: "1. Introduction to Cells",
      content: "Cells are the basic structural and functional units of all living organisms. They were first discovered by Robert Hooke in 1665 when he observed cork under a microscope and saw tiny compartments he called 'cells'.\n\nAll living things are made up of cells, which can be broadly classified into two types:\n- Prokaryotic cells (bacteria and archaea)\n- Eukaryotic cells (plants, animals, fungi, and protists)",
      completed: true,
      image: "public/lovable-uploads/4ce305d8-2d7c-42f8-8aaa-fcd470a3bf58.png"
    },
    {
      id: "cell-types",
      title: "2. Types of Cells",
      content: "Prokaryotic cells are simpler and smaller than eukaryotic cells. They lack membrane-bound organelles and a true nucleus.\n\nEukaryotic cells have a true nucleus and membrane-bound organelles. They are larger and more complex than prokaryotic cells. Plant and animal cells are examples of eukaryotic cells, with some key differences:\n\n- Plant cells have cell walls, chloroplasts, and a large central vacuole\n- Animal cells have no cell wall, no chloroplasts, and multiple small vacuoles",
      completed: true
    },
    {
      id: "cell-organelles",
      title: "3. Cell Organelles",
      content: "Eukaryotic cells contain various organelles, each with specific functions:\n\n- Nucleus: Contains genetic material and controls cellular activities\n- Mitochondria: Powerhouse of the cell, produces ATP through cellular respiration\n- Endoplasmic Reticulum: Synthesis and transport of proteins and lipids\n- Golgi Apparatus: Modification, sorting, and packaging of proteins\n- Lysosomes: Contain digestive enzymes for breaking down waste materials\n- Ribosomes: Site of protein synthesis",
      completed: true
    }
  ],
  quizzes: 1,
  module: "Cell Biology",
  duration: "25 min",
  xpPoints: 50,
  completed: true,
  quiz: [
    {
      question: "Which organelle is known as the 'powerhouse of the cell'?",
      options: ["Nucleus", "Mitochondria", "Golgi apparatus", "Endoplasmic reticulum"],
      answer: "Mitochondria"
    },
    {
      question: "Which of the following is NOT found in plant cells?",
      options: ["Cell wall", "Chloroplast", "Centrioles", "Large vacuole"],
      answer: "Centrioles"
    },
    {
      question: "Who first observed and named cells?",
      options: ["Robert Hooke", "Charles Darwin", "Louis Pasteur", "Gregor Mendel"],
      answer: "Robert Hooke"
    }
  ]
};

// Mock data for each subject with enhanced content
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
              completionPercentage: 60,
              sections: [
                {
                  id: "mitosis-intro",
                  title: "1. Introduction to Cell Division",
                  content: "Cell division is a process by which a parent cell divides into two or more daughter cells. There are two main types of cell division: mitosis and meiosis.\n\nCell division serves important functions in growth, repair, and reproduction of organisms.",
                  completed: true
                },
                {
                  id: "mitosis-process",
                  title: "2. The Process of Mitosis",
                  content: "Mitosis is the division of a cell into two identical daughter cells. It occurs in somatic (body) cells and is essential for growth and tissue repair.\n\nThe process of mitosis includes several phases:\n- Prophase: Chromosomes condense and become visible\n- Metaphase: Chromosomes align at the cell's equator\n- Anaphase: Sister chromatids separate and move to opposite poles\n- Telophase: Nuclear membranes form around each set of chromosomes\n- Cytokinesis: Cytoplasm divides, resulting in two new cells",
                  completed: true
                },
                {
                  id: "meiosis-process",
                  title: "3. The Process of Meiosis",
                  content: "Meiosis is a type of cell division that produces four daughter cells, each with half the number of chromosomes as the parent cell. It is essential for sexual reproduction.\n\nMeiosis involves two successive divisions (Meiosis I and Meiosis II), resulting in genetic diversity through crossing over and independent assortment of chromosomes.",
                  completed: false
                },
                {
                  id: "comparison",
                  title: "4. Comparing Mitosis and Meiosis",
                  content: "Key differences between mitosis and meiosis include:\n\n- Purpose: Mitosis is for growth and repair; meiosis is for sexual reproduction\n- Number of divisions: Mitosis involves one division; meiosis involves two\n- Number of daughter cells: Mitosis produces two daughter cells; meiosis produces four\n- Chromosome number: Mitosis maintains the chromosome number; meiosis reduces it by half\n- Genetic variation: Mitosis produces genetically identical cells; meiosis produces genetically diverse cells",
                  completed: false
                }
              ],
              quizzes: 2,
              module: "Cell Division",
              duration: "45 min",
              xpPoints: 80,
              completed: false,
              quiz: [
                {
                  question: "During which phase of mitosis do chromosomes align at the cell's equator?",
                  options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
                  answer: "Metaphase"
                },
                {
                  question: "How many daughter cells are produced from a single cell during meiosis?",
                  options: ["1", "2", "3", "4"],
                  answer: "4"
                },
                {
                  question: "Which process contributes to genetic diversity during meiosis?",
                  options: ["Cytokinesis", "Crossing over", "Chromosome condensation", "Nuclear membrane formation"],
                  answer: "Crossing over"
                }
              ]
            },
            {
              id: "bio-form4-mod1-room2",
              title: "Mendelian Genetics",
              description: "Principles of inheritance and genetic crosses",
              completionPercentage: 0,
              sections: [
                {
                  id: "mendel-intro",
                  title: "1. Introduction to Mendelian Genetics",
                  content: "Mendelian genetics is named after Gregor Mendel, an Austrian monk who conducted experiments with pea plants in the 19th century. His work laid the foundation for our understanding of heredity and genetic inheritance.\n\nMendel's experiments involved tracking the inheritance of seven different traits in pea plants over multiple generations.",
                  completed: false
                },
                {
                  id: "mendel-laws",
                  title: "2. Mendel's Laws of Inheritance",
                  content: "Mendel formulated three laws based on his experiments:\n\n1. Law of Dominance: When two different alleles for a trait are present, only the dominant allele is expressed in the phenotype.\n\n2. Law of Segregation: During gamete formation, the two alleles for each trait separate so that each gamete receives only one allele.\n\n3. Law of Independent Assortment: Alleles for different traits segregate independently of one another during gamete formation.",
                  completed: false
                },
                {
                  id: "genetic-crosses",
                  title: "3. Genetic Crosses",
                  content: "Genetic crosses can be represented using Punnett squares, which help predict the possible genotypes and phenotypes of offspring.\n\nTypes of genetic crosses include:\n- Monohybrid cross: Tracking the inheritance of a single trait\n- Dihybrid cross: Tracking the inheritance of two traits simultaneously\n- Test cross: Determining if an individual with a dominant phenotype is homozygous or heterozygous",
                  completed: false
                },
                {
                  id: "genetic-disorders",
                  title: "4. Genetic Disorders",
                  content: "Genetic disorders can result from mutations in genes or abnormalities in chromosomes. They can be inherited according to Mendelian patterns:\n\n- Autosomal dominant: One copy of the mutated gene is sufficient to cause the disorder (e.g., Huntington's disease)\n- Autosomal recessive: Two copies of the mutated gene are required to cause the disorder (e.g., cystic fibrosis)\n- X-linked: The gene is located on the X chromosome (e.g., hemophilia, color blindness)",
                  completed: false
                },
                {
                  id: "beyond-mendel",
                  title: "5. Beyond Mendelian Genetics",
                  content: "While Mendel's laws explain many patterns of inheritance, some traits do not follow these patterns due to various factors:\n\n- Incomplete dominance: Neither allele is completely dominant (e.g., pink flowers from red and white parents)\n- Codominance: Both alleles are expressed in the phenotype (e.g., AB blood type)\n- Multiple alleles: More than two alleles exist for a gene in a population (e.g., ABO blood types)\n- Polygenic inheritance: Multiple genes contribute to a trait (e.g., skin color, height)",
                  completed: false
                }
              ],
              quizzes: 3,
              module: "Genetics",
              duration: "60 min",
              xpPoints: 100,
              completed: false,
              quiz: [
                {
                  question: "Who is known as the 'Father of Genetics'?",
                  options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "James Watson"],
                  answer: "Gregor Mendel"
                },
                {
                  question: "According to Mendel's Law of Segregation, when do alleles separate?",
                  options: ["During fertilization", "During gamete formation", "During mitosis", "During embryonic development"],
                  answer: "During gamete formation"
                },
                {
                  question: "What type of cross would you use to determine if an organism with a dominant phenotype is homozygous or heterozygous?",
                  options: ["Monohybrid cross", "Dihybrid cross", "Test cross", "Reciprocal cross"],
                  answer: "Test cross"
                }
              ]
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
              completionPercentage: 0,
              sections: [
                {
                  id: "darwin-intro",
                  title: "1. Charles Darwin and the Voyage of the Beagle",
                  content: "Charles Darwin's five-year voyage on HMS Beagle (1831-1836) provided him with observations and specimens that would later shape his theory of evolution. During this journey, Darwin visited various locations, including the Galápagos Islands, where he observed variations in species across different islands.",
                  completed: false
                },
                {
                  id: "natural-selection",
                  title: "2. Natural Selection",
                  content: "Natural selection is the process by which organisms better adapted to their environment tend to survive and produce more offspring. The theory of natural selection includes several key principles:\n\n1. Variation: Individuals within a species show variation in traits\n2. Inheritance: Some traits are heritable and can be passed to offspring\n3. Overproduction: Organisms produce more offspring than can survive\n4. Competition: Limited resources lead to competition among individuals\n5. Differential survival and reproduction: Individuals with advantageous traits are more likely to survive and reproduce",
                  completed: false
                },
                {
                  id: "evidence-evolution",
                  title: "3. Evidence for Evolution",
                  content: "Multiple lines of evidence support the theory of evolution:\n\n- Fossil record: Shows changes in species over time and transitions between major groups\n- Comparative anatomy: Similarities in structure (homologous structures) suggest common ancestry\n- Embryology: Similarities in embryonic development of different species\n- Molecular biology: DNA and protein similarities between species indicate relatedness\n- Biogeography: Distribution of species across Earth reflects evolutionary history\n- Observable instances: Evolution observed in nature (e.g., antibiotic resistance in bacteria)",
                  completed: false
                }
              ],
              quizzes: 2,
              module: "Evolution",
              duration: "40 min",
              xpPoints: 75,
              completed: false,
              quiz: [
                {
                  question: "Which islands were particularly important in shaping Darwin's theory of evolution?",
                  options: ["Hawaiian Islands", "Galápagos Islands", "Canary Islands", "Falkland Islands"],
                  answer: "Galápagos Islands"
                },
                {
                  question: "What term describes structures that have similar internal organization despite different functions, such as a bat's wing and a human arm?",
                  options: ["Analogous structures", "Homologous structures", "Vestigial structures", "Embryonic structures"],
                  answer: "Homologous structures"
                },
                {
                  question: "Which of the following is NOT a component of Darwin's theory of natural selection?",
                  options: ["Variation exists within populations", "Traits can be inherited", "Organisms produce more offspring than can survive", "Evolution always leads to more complex organisms"],
                  answer: "Evolution always leads to more complex organisms"
                }
              ]
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
              completionPercentage: 100,
              sections: [
                {
                  id: "circ-intro",
                  title: "1. Introduction to the Circulatory System",
                  content: "The circulatory system is responsible for transporting blood throughout the body, delivering oxygen and nutrients to cells and removing waste products. It consists of the heart, blood vessels, and blood.",
                  completed: true
                },
                {
                  id: "heart",
                  title: "2. The Heart",
                  content: "The heart is a muscular organ that pumps blood throughout the body. It has four chambers: two atria (upper chambers) and two ventricles (lower chambers). The right side of the heart pumps deoxygenated blood to the lungs, while the left side pumps oxygenated blood to the body.",
                  completed: true
                },
                {
                  id: "blood-vessels",
                  title: "3. Blood Vessels",
                  content: "Blood vessels are the tubes that carry blood throughout the body. There are three main types of blood vessels:\n\n- Arteries: Carry blood from the heart to the body\n- Veins: Carry blood back to the heart\n- Capillaries: Connect arteries and veins, allowing for exchange of nutrients and waste products",
                  completed: true
                },
                {
                  id: "circulation",
                  title: "4. Circulation",
                  content: "Circulation is the continuous flow of blood through the circulatory system. It includes three main phases:\n\n- Deoxygenation: Blood picks up oxygen in the lungs\n- Oxygenation: Blood delivers oxygen to cells\n- Deoxygenation: Blood returns to the heart to be oxygenated again",
                  completed: true
                }
              ],
              quizzes: 3,
              module: "Human Systems",
              duration: "35 min",
              xpPoints: 70,
              completed: true,
              quiz: [
                {
                  question: "What is the main function of the heart?",
                  options: ["To produce energy", "To store oxygen", "To pump blood", "To regulate body temperature"],
                  answer: "To pump blood"
                },
                {
                  question: "Which of the following is NOT a type of blood vessel?",
                  options: ["Artery", "Vein", "Capillary", "Nerve"],
                  answer: "Nerve"
                },
                {
                  question: "What is the purpose of capillaries?",
                  options: ["To transport oxygen and nutrients to cells", "To store blood", "To remove waste products", "To regulate body temperature"],
                  answer: "To transport oxygen and nutrients to cells"
                }
              ]
            },
            {
              id: "bio-form3-mod1-room2",
              title: "Respiratory System",
              description: "Gas exchange and respiratory mechanisms",
              completionPercentage: 100,
              sections: [
                {
                  id: "res-intro",
                  title: "1. Introduction to the Respiratory System",
                  content: "The respiratory system is responsible for gas exchange, which involves the transfer of oxygen from the air into the bloodstream and the transfer of carbon dioxide from the bloodstream into the air. It consists of the nose, pharynx, larynx, trachea, bronchi, and lungs.",
                  completed: true
                },
                {
                  id: "respiration",
                  title: "2. Respiration",
                  content: "Respiration is the process of gas exchange that occurs in the respiratory system. It includes two main processes: inhalation and exhalation.\n\nInhalation: Air is drawn into the lungs through the nose or mouth, and the diaphragm and intercostal muscles contract to expand the chest cavity and increase the volume of the lungs.\n\nExhalation: Air is expelled from the lungs through the nose or mouth, and the diaphragm and intercostal muscles relax to decrease the volume of the lungs.",
                  completed: true
                },
                {
                  id: "gas-exchange",
                  title: "3. Gas Exchange",
                  content: "Gas exchange occurs in the alveoli, which are tiny air sacs in the lungs. Oxygen diffuses from the alveoli into the bloodstream, while carbon dioxide diffuses from the bloodstream into the alveoli.",
                  completed: true
                }
              ],
              quizzes: 3,
              module: "Human Systems",
              duration: "30 min",
              xpPoints: 65,
              completed: true,
              quiz: [
                {
                  question: "What is the main function of the respiratory system?",
                  options: ["To produce energy", "To store oxygen", "To pump blood", "To regulate body temperature"],
                  answer: "To produce energy"
                },
                {
                  question: "Which of the following is NOT a part of the respiratory system?",
                  options: ["Nose", "Pharynx", "Larynx", "Heart"],
                  answer: "Heart"
                },
                {
                  question: "What is the purpose of the diaphragm?",
                  options: ["To pump blood", "To store oxygen", "To expand the chest cavity", "To regulate body temperature"],
                  answer: "To expand the chest cavity"
                }
              ]
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
              completionPercentage: 100,
              sections: [
                {
                  id: "cell-intro",
                  title: "1. Introduction to Cells",
                  content: "Cells are the basic structural and functional units of all living organisms. They were first discovered by Robert Hooke in 1665 when he observed cork under a microscope and saw tiny compartments he called 'cells'.\n\nAll living things are made up of cells, which can be broadly classified into two types:\n- Prokaryotic cells (bacteria and archaea)\n- Eukaryotic cells (plants, animals, fungi, and protists)",
                  completed: true,
                  image: "public/lovable-uploads/4ce305d8-2d7c-42f8-8aaa-fcd470a3bf58.png"
                },
                {
                  id: "cell-types",
                  title: "2. Types of Cells",
                  content: "Prokaryotic cells are simpler and smaller than eukaryotic cells. They lack membrane-bound organelles and a true nucleus.\n\nEukaryotic cells have a true nucleus and membrane-bound organelles. They are larger and more complex than prokaryotic cells. Plant and animal cells are examples of eukaryotic cells, with some key differences:\n\n- Plant cells have cell walls, chloroplasts, and a large central vacuole\n- Animal cells have no cell wall, no chloroplasts, and multiple small vacuoles",
                  completed: true
                },
                {
                  id: "cell-organelles",
                  title: "3. Cell Organelles",
                  content: "Eukaryotic cells contain various organelles, each with specific functions:\n\n- Nucleus: Contains genetic material and controls cellular activities\n- Mitochondria: Powerhouse of the cell, produces ATP through cellular respiration\n- Endoplasmic Reticulum: Synthesis and transport of proteins and lipids\n- Golgi Apparatus: Modification, sorting, and packaging of proteins\n- Lysosomes: Contain digestive enzymes for breaking down waste materials\n- Ribosomes: Site of protein synthesis",
                  completed: true
                }
              ],
              quizzes: 1,
              module: "Cell Biology",
              duration: "25 min",
              xpPoints: 50,
              completed: true,
              quiz: [
                {
                  question: "Which organelle is known as the 'powerhouse of the cell'?",
                  options: ["Nucleus", "Mitochondria", "Golgi apparatus", "Endoplasmic reticulum"],
                  answer: "Mitochondria"
                },
                {
                  question: "Which of the following is NOT found in plant cells?",
                  options: ["Cell wall", "Chloroplast", "Centrioles", "Large vacuole"],
                  answer: "Centrioles"
                },
                {
                  question: "Who first observed and named cells?",
                  options: ["Robert Hooke", "Charles Darwin", "Louis Pasteur", "Gregor Mendel"],
                  answer: "Robert Hooke"
                }
              ]
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
              completionPercentage: 0,
              sections: [
                {
                  id: "hydrocarbons-intro",
                  title: "1. Introduction to Hydrocarbons",
                  content: "Hydrocarbons are organic compounds that contain only carbon and hydrogen atoms. They are the building blocks of many organic molecules, including hydrocarbons themselves.",
                  completed: true
                },
                {
                  id: "hydrocarbons-types",
                  title: "2. Types of Hydrocarbons",
                  content: "There are three main types of hydrocarbons:\n\n- Alkanes: Hydrocarbons with only single bonds between carbon atoms\n- Alkenes: Hydrocarbons with one or more double bonds between carbon atoms\n- Alkynes: Hydrocarbons with one or more triple bonds between carbon atoms",
                  completed: true
                },
                {
                  id: "hydrocarbons-properties",
                  title: "3. Properties of Hydrocarbons",
                  content: "Hydrocarbons have several important properties:\n\n- Soluble in nonpolar solvents (e.g., hexane, gasoline)\n- Insoluble in polar solvents (e.g., water)\n- Flammable\n- Combustible\n- Can be used as fuels (e.g., gasoline, diesel)\n- Can be used as solvents (e.g., benzene, toluene)",
                  completed: true
                }
              ],
              quizzes: 3,
              module: "Organic Chemistry",
              duration: "50 min",
              xpPoints: 90,
              completed: false,
              quiz: [
                {
                  question: "What is the main difference between alkanes, alkenes, and alkynes?",
                  options: ["Number of carbon atoms", "Number of hydrogen atoms", "Number of double bonds", "Number of triple bonds"],
                  answer: "Number of double bonds"
                },
                {
                  question: "Which of the following is NOT a type of hydrocarbon?",
                  options: ["Alkanes", "Alkenes", "Alkynes", "Amines"],
                  answer: "Amines"
                },
                {
                  question: "What is the boiling point of hexane?",
                  options: ["-100°C", "-50°C", "0°C", "50°C"],
                  answer: "-100°C"
                }
              ]
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
              completionPercentage: 100,
              sections: [
                {
                  id: "ionic-intro",
                  title: "1. Introduction to Ionic Bonding",
                  content: "Ionic bonding is a type of chemical bonding that involves the transfer of electrons from a metal to a non-metal, resulting in the formation of positively and negatively charged ions that attract each other.\n\nIonic compounds typically form between elements with large differences in electronegativity, usually a metal and a non-metal.",
                  completed: true
                },
                {
                  id: "electron-transfer",
                  title: "2. Electron Transfer and Ion Formation",
                  content: "During ionic bonding:\n\n- Metals tend to lose electrons to form positive ions (cations)\n- Non-metals tend to gain electrons to form negative ions (anions)\n\nFor example, in sodium chloride (NaCl), sodium (Na) loses one electron to become Na⁺, and chlorine (Cl) gains one electron to become Cl⁻.",
                  completed: true
                },
                {
                  id: "ionic-properties",
                  title: "3. Properties of Ionic Compounds",
                  content: "Ionic compounds typically have the following properties:\n\n- High melting and boiling points due to strong electrostatic forces\n- Crystalline structure at room temperature\n- Conduct electricity when dissolved in water or molten (not in solid state)\n- Generally soluble in water but insoluble in organic solvents\n- Brittle and can shatter when force is applied",
                  completed: true
                }
              ],
              quizzes: 2,
              module: "Chemical Bonding",
              duration: "35 min",
              xpPoints: 70,
              completed: true,
              quiz: [
                {
                  question: "In ionic bonding, electrons are:",
                  options: ["Shared equally", "Shared unequally", "Transferred from one atom to another", "Neither shared nor transferred"],
                  answer: "Transferred from one atom to another"
                },
                {
                  question: "Which of the following is NOT a property of ionic compounds?",
                  options: ["High melting point", "Conduct electricity in solid state", "Crystalline structure", "Soluble in water"],
                  answer: "Conduct electricity in solid state"
                },
                {
                  question: "Which type of elements typically lose electrons during ionic bonding?",
                  options: ["Metals", "Non-metals", "Metalloids", "Noble gases"],
                  answer: "Metals"
                }
              ]
            },
            {
              id: "chem-form3-mod1-room2",
              title: "Covalent Bonding",
              description: "Sharing of electrons between atoms",
              completionPercentage: 30,
              sections: [
                {
                  id: "covalent-intro",
                  title: "1. Introduction to Covalent Bonding",
                  content: "Covalent bonding is a type of chemical bonding that involves the sharing of electron pairs between atoms. This sharing of electrons allows each atom to attain a more stable electronic configuration.\n\nCovalent bonds typically form between non-metal atoms with similar electronegativities.",
                  completed: true
                },
                {
                  id: "covalent-types",
                  title: "2. Types of Covalent Bonds",
                  content: "There are different types of covalent bonds based on electron pair sharing:\n\n- Single bond: One pair of electrons is shared (e.g., H-H in H₂)\n- Double bond: Two pairs of electrons are shared (e.g., O=O in O₂)\n- Triple bond: Three pairs of electrons are shared (e.g., N≡N in N₂)\n\nCovalent bonds can also be classified as:\n\n- Polar covalent: Electrons are shared unequally due to electronegativity differences\n- Non-polar covalent: Electrons are shared equally",
                  completed: false
                },
                {
                  id: "molecular-shapes",
                  title: "3. Molecular Shapes",
                  content: "The shape of a molecule is determined by the arrangement of electron pairs around the central atom, which can be explained by the Valence Shell Electron Pair Repulsion (VSEPR) theory.\n\nCommon molecular geometries include:\n\n- Linear: Two electron pairs (e.g., CO₂)\n- Trigonal planar: Three electron pairs (e.g., BF₃)\n- Tetrahedral: Four electron pairs (e.g., CH₄)\n- Trigonal bipyramidal: Five electron pairs (e.g., PCl₅)\n- Octahedral: Six electron pairs (e.g., SF₆)",
                  completed: false
                },
                {
                  id: "covalent-properties",
                  title: "4. Properties of Covalent Compounds",
                  content: "Covalent compounds typically have the following properties:\n\n- Low melting and boiling points (except for network covalent structures)\n- Poor conductors of electricity\n- Often exist as gases, liquids, or soft solids at room temperature\n- Usually insoluble in water but soluble in organic solvents\n- Generally do not dissociate into ions in solution",
                  completed: false
                }
              ],
              quizzes: 2,
              module: "Chemical Bonding",
              duration: "35 min",
              xpPoints: 70,
              completed: false,
              quiz: [
                {
                  question: "In a covalent bond, electrons are:",
                  options: ["Transferred from one atom to another", "Shared between atoms", "Neither shared nor transferred", "Removed completely"],
                  answer: "Shared between atoms"
                },
                {
                  question: "How many electron pairs are shared in a double bond?",
                  options: ["1", "2", "3", "4"],
                  answer: "2"
                },
                {
                  question: "Which of the following molecules has a tetrahedral shape?",
                  options: ["CO₂", "BF₃", "CH₄", "H₂O"],
                  answer: "CH₄"
                }
              ]
            },
            {
              id: "chem-form3-mod1-room3",
              title: "Metallic Bonding",
              description: "Bonding in metals and their properties",
              completionPercentage: 0,
              sections: [
                {
                  id: "metallic-intro",
                  title: "1. Introduction to Metallic Bonding",
                  content: "Metallic bonding is the type of chemical bonding that holds atoms together in metal elements. It can be described as a sea of delocalized electrons surrounding a lattice of positive metal ions.\n\nIn metals, the valence electrons are not bound to any particular atom and are free to move throughout the metal structure.",
                  completed: false
                },
                {
                  id: "metallic-model",
                  title: "2. Electron Sea Model",
                  content: "The electron sea model explains metallic bonding as follows:\n\n- Metal atoms lose their valence electrons to form positive ions (cations)\n- These electrons become delocalized and form a 'sea' or 'cloud' of electrons\n- The positive metal ions are arranged in a regular lattice structure\n- The electrostatic attraction between the positive ions and the negative electron sea holds the metal together",
                  completed: false
                },
                {
                  id: "metallic-properties",
                  title: "3. Properties of Metals",
                  content: "The metallic bonding model explains the characteristic properties of metals:\n\n- Good conductors of electricity (due to mobile electrons)\n- Good conductors of heat\n- Malleable and ductile (can be hammered into sheets and drawn into wires)\n- Lustrous (shiny) appearance\n- High melting and boiling points (except for alkali metals)\n- High density (except for alkali metals)",
                  completed: false
                }
              ],
              quizzes: 1,
              module: "Chemical Bonding",
              duration: "30 min",
              xpPoints: 60,
              completed: false,
              quiz: [
                {
                  question: "In metallic bonding, what are the mobile, delocalized particles?",
                  options: ["Protons", "Neutrons", "Electrons", "Ions"],
                  answer: "Electrons"
                },
                {
                  question: "Which property of metals is due to the ability of delocalized electrons to move and carry energy?",
                  options: ["Luster", "Malleability", "Electrical conductivity", "High density"],
                  answer: "Electrical conductivity"
                },
                {
                  question: "The ability of metals to be hammered into sheets is known as:",
                  options: ["Ductility", "Malleability", "Conductivity", "Density"],
                  answer: "Malleability"
                }
              ]
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
              completionPercentage: 0,
              sections: [
                {
                  id: "em-intro",
                  title: "1. Introduction to Electromagnetic Induction",
                  content: "Electromagnetic induction is the process by which an electric current is generated in a conductor when the conductor is moved through a magnetic field or when a magnetic field is changed.",
                  completed: true
                },
                {
                  id: "em-process",
                  title: "2. The Process of Electromagnetic Induction",
                  content: "The process of electromagnetic induction can be explained using Faraday's law of induction:\n\n- A changing magnetic field induces an electric current in a conductor\n- The direction of the induced current is determined by Lenz's law (the induced current opposes the change that caused it)\n\nElectromagnetic induction has many practical applications, including generators, transformers, and electric motors.",
                  completed: true
                },
                {
                  id: "em-applications",
                  title: "3. Applications of Electromagnetic Induction",
                  content: "Electromagnetic induction has numerous applications in physics and engineering:\n\n- Generators: Convert mechanical energy to electrical energy\n- Transformers: Step up or step down the voltage of electrical power\n- Electric motors: Convert electrical energy to mechanical energy\n- Induction cooktops: Use electromagnetic induction to heat food\n- Electromagnetic waves: Transmit information through space",
                  completed: true
                }
              ],
              quizzes: 2,
              module: "Electromagnetism",
              duration: "45 min",
              xpPoints: 85,
              completed: false,
              quiz: [
                {
                  question: "What is the main difference between electromagnetic induction and direct current?",
                  options: ["Electromagnetic induction is a process, while direct current is a type of current", "Electromagnetic induction is a type of current, while direct current is a process", "Electromagnetic induction is a type of energy, while direct current is a type of energy", "Electromagnetic induction is a type of energy, while direct current is a type of current"],
                  answer: "Electromagnetic induction is a process, while direct current is a type of current"
                },
                {
                  question: "Which of the following is NOT an application of electromagnetic induction?",
                  options: ["Generators", "Transformers", "Electric motors", "Induction cooktops"],
                  answer: "Induction cooktops"
                },
                {
                  question: "What is the direction of the induced current in a generator?",
                  options: ["Opposite to the direction of the magnetic field", "Same as the direction of the magnetic field", "Perpendicular to the direction of the magnetic field", "Parallel to the direction of the magnetic field"],
                  answer: "Opposite to the direction of the magnetic field"
                }
              ]
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
              completionPercentage: 60,
              sections: [
                {
                  id: "newton-intro",
                  title: "1. Introduction to Newton's Laws",
                  content: "Sir Isaac Newton formulated three fundamental laws that describe the relationship between an object, the forces acting on it, and its motion. These laws, published in 1687, form the foundation of classical mechanics.\n\nNewton's laws apply to objects moving at speeds much lower than the speed of light and at scales larger than atomic.",
                  completed: true
                },
                {
                  id: "first-law",
                  title: "2. Newton's First Law: Law of Inertia",
                  content: "Newton's First Law states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.\n\nThis law introduces the concept of inertia, which is the resistance of an object to changes in its state of motion. The mass of an object is a measure of its inertia.\n\nExamples of the First Law:\n- A book remains on a table until a force moves it\n- Passengers lurch forward when a bus stops suddenly\n- Objects in space continue moving in the same direction at constant speed",
                  completed: true
                },
                {
                  id: "second-law",
                  title: "3. Newton's Second Law: Law of Acceleration",
                  content: "Newton's Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.\n\nMathematically, this is expressed as F = ma, where:\n- F is the net force (in newtons, N)\n- m is the mass (in kilograms, kg)\n- a is the acceleration (in meters per second squared, m/s²)\n\nThis law allows us to calculate the force needed to accelerate an object or the acceleration resulting from applied forces.",
                  completed: false
                },
                {
                  id: "third-law",
                  title: "4. Newton's Third Law: Action and Reaction",
                  content: "Newton's Third Law states that for every action, there is an equal and opposite reaction.\n\nThis means that when one object exerts a force on a second object, the second object exerts an equal force in the opposite direction on the first object.\n\nExamples of the Third Law:\n- A swimmer pushes water backward and moves forward\n- Rocket propulsion (expelling gas creates forward thrust)\n- Walking (pushing backward on the ground moves you forward)",
                  completed: false
                }
              ],
              quizzes: 2,
              module: "Forces",
              duration: "40 min",
              xpPoints: 75,
              completed: false,
              quiz: [
                {
                  question: "Newton's First Law is also known as:",
                  options: ["Law of Acceleration", "Law of Action and Reaction", "Law of Inertia", "Law of Gravitation"],
                  answer: "Law of Inertia"
                },
                {
                  question: "According to Newton's Second Law, if the mass of an object is doubled while the force remains constant, the acceleration will:",
                  options: ["Double", "Remain the same", "Be halved", "Be reduced to zero"],
                  answer: "Be halved"
                },
                {
                  question: "Which of Newton's laws explains how rockets are propelled?",
                  options: ["First Law", "Second Law", "Third Law", "Law of Universal Gravitation"],
                  answer: "Third Law"
                }
              ]
            },
            {
              id: "phys-form3-mod1-room2",
              title: "Forces in Equilibrium",
              description: "Balanced forces and their applications",
              completionPercentage: 0,
              sections: [
                {
                  id: "equilibrium-intro",
                  title: "1. Introduction to Equilibrium",
                  content: "An object is said to be in equilibrium when the vector sum of all forces acting on it is zero. This means that the object is either at rest (static equilibrium) or moving with constant velocity (dynamic equilibrium).\n\nUnderstanding forces in equilibrium is essential for analyzing structures and systems in physics and engineering.",
                  completed: false
                },
                {
                  id: "free-body",
                  title: "2. Free Body Diagrams",
                  content: "A free body diagram is a simplified diagram showing all the forces acting on an object. To create a free body diagram:\n\n1. Draw a simple shape representing the object\n2. Draw arrows representing all forces acting on the object\n3. Label each force with its magnitude and direction\n\nFree body diagrams help visualize and analyze the forces in equilibrium problems.",
                  completed: false
                },
                {
                  id: "resolving-forces",
                  title: "3. Resolving Forces",
                  content: "Forces are vector quantities and can be resolved into components along different directions, typically x and y axes.\n\nFor a force F at an angle θ to the horizontal:\n- The horizontal component is F cos(θ)\n- The vertical component is F sin(θ)\n\nResolving forces into components simplifies the analysis of equilibrium problems involving multiple forces in different directions.",
                  completed: false
                },
                {
                  id: "equilibrium-conditions",
                  title: "4. Conditions for Equilibrium",
                  content: "For an object to be in equilibrium, two conditions must be satisfied:\n\n1. The sum of all forces in each direction (x, y, z) must be zero: ΣFx = 0, ΣFy = 0, ΣFz = 0\n2. The sum of all torques (rotational forces) must be zero: Στ = 0\n\nThese conditions ensure both translational and rotational equilibrium.",
                  completed: false
                }
              ],
              quizzes: 2,
              module: "Forces",
              duration: "35 min",
              xpPoints: 70,
              completed: false,
              quiz: [
                {
                  question: "An object in equilibrium must have:",
                  options: ["No forces acting on it", "Equal forces in all directions", "A net force of zero", "Constant acceleration"],
                  answer: "A net force of zero"
                },
                {
                  question: "What is the horizontal component of a 10 N force acting at an angle of 60° to the horizontal?",
                  options: ["5 N", "5√3 N", "8.66 N", "10 N"],
                  answer: "5 N"
                },
                {
                  question: "Which of the following represents translational equilibrium?",
                  options: ["Στ = 0", "ΣF = 0", "ΣFx · ΣFy = 0", "F = ma"],
                  answer: "ΣF = 0"
                }
              ]
            }
          ]
        },
        {
          id: "phys-form3-mod2",
          title: "Energy and Work",
          description: "Types of energy and energy transformations",
          difficulty: "Medium",
          progress: 0,
          rooms: [
            {
              id: "phys-form3-mod2-room1",
              title: "Work, Energy, and Power",
              description: "Relationships between work, energy, and power",
              completionPercentage: 0,
              sections: [
                {
                  id: "work-intro",
                  title: "1. Understanding Work",
                  content: "In physics, work is done when a force causes an object to move in the direction of the force. Work is a scalar quantity and is measured in joules (J).\n\nThe formula for work is W = F·d·cos(θ), where:\n- W is work (in joules, J)\n- F is force (in newtons, N)\n- d is displacement (in meters, m)\n- θ is the angle between the force and displacement vectors\n\nWork can be positive, negative, or zero, depending on the angle between force and displacement.",
                  completed: false
                },
                {
                  id: "energy-types",
                  title: "2. Types of Energy",
                  content: "Energy is the capacity to do work. The main types of energy include:\n\n- Kinetic energy: Energy of motion (KE = ½mv²)\n- Potential energy: Stored energy due to position or state\n  - Gravitational potential energy (GPE = mgh)\n  - Elastic potential energy (EPE = ½kx²)\n- Chemical energy: Stored in chemical bonds\n- Thermal energy: Related to temperature and molecular motion\n- Electrical energy: Associated with electric charges\n- Nuclear energy: Stored in atomic nuclei\n\nEnergy is measured in joules (J) and can be converted from one form to another.",
                  completed: false
                },
                {
                  id: "conservation-energy",
                  title: "3. Conservation of Energy",
                  content: "The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another.\n\nIn a closed system, the total energy remains constant. For example, when an object falls:\n- Gravitational potential energy decreases\n- Kinetic energy increases\n- The sum of potential and kinetic energy remains constant (minus any energy lost to friction)\n\nThis principle is fundamental to all physics and engineering applications.",
                  completed: false
                },
                {
                  id: "power-intro",
                  title: "4. Understanding Power",
                  content: "Power is the rate at which work is done or energy is transferred. It is measured in watts (W), where 1 watt equals 1 joule per second.\n\nThe formula for power is P = W/t or P = F·v, where:\n- P is power (in watts, W)\n- W is work (in joules, J)\n- t is time (in seconds, s)\n- F is force (in newtons, N)\n- v is velocity (in meters per second, m/s)\n\nPower is important in determining how quickly a task can be completed or how rapidly energy is used.",
                  completed: false
                }
              ],
              quizzes: 2,
              module: "Energy",
              duration: "45 min",
              xpPoints: 80,
              completed: false,
              quiz: [
                {
                  question: "Which of the following is the correct unit for work?",
                  options: ["Newton (N)", "Watt (W)", "Joule (J)", "Pascal (Pa)"],
                  answer: "Joule (J)"
                },
                {
                  question: "When a ball falls freely, its gravitational potential energy is converted to:",
                  options: ["Chemical energy", "Nuclear energy", "Kinetic energy", "Electrical energy"],
                  answer: "Kinetic energy"
                },
                {
                  question: "Power can be calculated as:",
                  options: ["Force × distance", "Force × acceleration", "Work ÷ time", "Mass × velocity"],
                  answer: "Work ÷ time"
                }
              ]
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
              completionPercentage: 100,
              sections: [
                {
                  id: "diff-intro",
                  title: "1. Introduction to Differentiation",
                  content: "Differentiation is a fundamental concept in calculus that deals with the rate of change of a function with respect to a variable. The derivative of a function represents its instantaneous rate of change.\n\nThe derivative of a function f(x) is denoted as f'(x) or df/dx, and it measures the slope of the tangent line to the curve y = f(x) at any point.",
                  completed: true
                },
                {
                  id: "diff-rules",
                  title: "2. Differentiation Rules",
                  content: "Several rules make differentiation more efficient:\n\n- Constant rule: If f(x) = c, then f'(x) = 0\n- Power rule: If f(x) = xⁿ, then f'(x) = n·xⁿ⁻¹\n- Sum rule: If f(x) = g(x) + h(x), then f'(x) = g'(x) + h'(x)\n- Product rule: If f(x) = g(x)·h(x), then f'(x) = g'(x)·h(x) + g(x)·h'(x)\n- Quotient rule: If f(x) = g(x)/h(x), then f'(x) = [g'(x)·h(x) - g(x)·h'(x)]/[h(x)]²\n- Chain rule: If f(x) = g(h(x)), then f'(x) = g'(h(x))·h'(x)",
                  completed: true
                },
                {
                  id: "diff-applications",
                  title: "3. Applications of Differentiation",
                  content: "Differentiation has numerous applications in mathematics and sciences:\n\n- Finding the slope of a curve at a specific point\n- Determining the rate of change of one variable with respect to another\n- Optimization problems (finding maxima and minima)\n- Related rates problems\n- Motion analysis (velocity and acceleration)\n- Approximating function values using tangent lines",
                  completed: true
                },
                {
                  id: "higher-derivatives",
                  title: "4. Higher Derivatives",
                  content: "The derivative of a derivative is called the second derivative, denoted as f''(x) or d²f/dx². Higher derivatives can be found by repeatedly differentiating.\n\n- First derivative (f'): Rate of change of the function\n- Second derivative (f''): Rate of change of the first derivative\n- Third derivative (f'''): Rate of change of the second derivative\n\nHigher derivatives are used in analyzing the concavity of functions and in applications such as motion (acceleration, jerk) and differential equations.",
                  completed: true
                },
                {
                  id: "curve-sketching",
                  title: "5. Curve Sketching",
                  content: "Derivatives are essential for analyzing and sketching curves:\n\n- f'(x) = 0 identifies critical points (potential maxima, minima, or inflection points)\n- f'(x) > 0 indicates the function is increasing\n- f'(x) < 0 indicates the function is decreasing\n- f''(x) > 0 indicates the curve is concave up (∪)\n- f''(x) < 0 indicates the curve is concave down (∩)\n- f''(x) = 0 identifies potential inflection points (where concavity changes)",
                  completed: true
                }
              ],
              quizzes: 3,
              module: "Calculus",
              duration: "50 min",
              xpPoints: 90,
              completed: true,
              quiz: [
                {
                  question: "What is the derivative of x³?",
                  options: ["3x²", "3x", "x²", "3"],
                  answer: "3x²"
                },
                {
                  question: "The second derivative represents:",
                  options: ["Position", "Velocity", "Acceleration", "Distance"],
                  answer: "Acceleration"
                },
                {
                  question: "At a maximum point of a function, the first derivative is:",
                  options: ["Positive", "Negative", "Zero", "Undefined"],
                  answer: "Zero"
                }
              ]
            },
            {
              id: "math-form4-mod1-room2",
              title: "Integration",
              description: "Basic integration techniques",
              completionPercentage: 30,
              sections: [
                {
                  id: "int-intro",
                  title: "1. Introduction to Integration",
                  content: "Integration is the reverse process of differentiation. It involves finding a function from its derivative. The integral of a function represents the area under its curve.\n\nThere are two types of integrals:\n- Indefinite integrals: ∫f(x)dx = F(x) + C, where F'(x) = f(x) and C is the constant of integration\n- Definite integrals: ∫[a,b]f(x)dx = F(b) - F(a), representing the area under the curve from x = a to x = b",
                  completed: true
                },
                {
                  id: "int-rules",
                  title: "2. Integration Rules",
                  content: "Basic integration rules include:\n\n- Constant rule: ∫c dx = cx + C\n- Power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ -1)\n- Logarithmic rule: ∫(1/x) dx = ln|x| + C\n- Sum rule: ∫[f(x) + g(x)] dx = ∫f(x) dx + ∫g(x) dx\n- Constant multiple rule: ∫c·f(x) dx = c·∫f(x) dx",
                  completed: false
                },
                {
                  id: "int-techniques",
                  title: "3. Integration Techniques",
                  content: "More advanced integration techniques include:\n\n- Integration by substitution (change of variable): Used when the integrand can be simplified by substituting a new variable\n- Integration by parts: Based on the product rule of differentiation, useful for integrating products of functions\n- Integration of trigonometric functions: Special techniques for integrating sin, cos, tan, etc.\n- Partial fractions: Used for integrating rational functions",
                  completed: false
                },
                {
                  id: "applications-integration",
                  title: "4. Applications of Integration",
                  content: "Integration has numerous applications in mathematics, physics, and engineering:\n\n- Finding the area under a curve\n- Calculating the volume of a solid of revolution\n- Determining the arc length of a curve\n- Computing the surface area of a solid of revolution\n- Solving differential equations\n- Finding the center of mass and moment of inertia\n- Analyzing probability distributions in statistics",
                  completed: false
                },
                {
                  id: "fundamental-theorem",
                  title: "5. Fundamental Theorem of Calculus",
                  content: "The Fundamental Theorem of Calculus establishes the relationship between differentiation and integration:\n\n- First part: If f is continuous on [a,b] and F is defined by F(x) = ∫[a,x]f(t)dt, then F'(x) = f(x)\n- Second part: If f is continuous on [a,b] and F is any antiderivative of f, then ∫[a,b]f(x)dx = F(b) - F(a)\n\nThis theorem is a cornerstone of calculus, showing that differentiation and integration are inverse processes.",
                  completed: false
                },
                {
                  id: "numerical-integration",
                  title: "6. Numerical Integration",
                  content: "When analytical integration is difficult or impossible, numerical methods can be used to approximate definite integrals:\n\n- Rectangle method (left, right, or midpoint)\n- Trapezoidal rule\n- Simpson's rule\n\nThese methods divide the area into simple shapes and sum their areas to approximate the integral.",
                  completed: false
                }
              ],
              quizzes: 3,
              module: "Calculus",
              duration: "60 min",
              xpPoints: 100,
              completed: false,
              quiz: [
                {
                  question: "What is the integral of 2x?",
                  options: ["x² + C", "2x² + C", "x² + 2C", "x² + 2"],
                  answer: "x² + C"
                },
                {
                  question: "The definite integral ∫[a,b]f(x)dx represents:",
                  options: ["The slope at x = a", "The area under the curve from x = a to x = b", "The derivative at x = b", "The rate of change of f(x)"],
                  answer: "The area under the curve from x = a to x = b"
                },
                {
                  question: "Which integration technique is based on the product rule of differentiation?",
                  options: ["Substitution", "Partial fractions", "Integration by parts", "Numerical integration"],
                  answer: "Integration by parts"
                }
              ]
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
              completionPercentage: 100,
              sections: [
                {
                  id: "normal-intro",
                  title: "1. Introduction to the Normal Distribution",
                  content: "The normal distribution is a continuous probability distribution that is symmetric around the mean and has a bell-shaped curve. It is one of the most important distributions in statistics and is used in many fields, including science, engineering, and social sciences.",
                  completed: true
                },
                {
                  id: "normal-properties",
                  title: "2. Properties of the Normal Distribution",
                  content: "The normal distribution has the following properties:\n\n- It is symmetric around the mean\n- The mean, median, and mode are all equal\n- The distribution is bell-shaped\n- The total area under the curve is 1\n- The distribution is continuous and unbounded\n- The distribution is characterized by its mean (μ) and standard deviation (σ)",
                  completed: true
                },
                {
                  id: "normal-applications",
                  title: "3. Applications of the Normal Distribution",
                  content: "The normal distribution has numerous applications in statistics and science:\n\n- It is used to model many natural phenomena, such as heights, weights, and IQ scores\n- It is used to perform hypothesis testing and make inferences about population parameters\n- It is used to calculate probabilities and percentiles\n- It is used in statistical quality control and process improvement",
                  completed: true
                }
              ],
              quizzes: 3,
              module: "Statistics",
              duration: "40 min",
              xpPoints: 80,
              completed: true,
              quiz: [
                {
                  question: "What is the mean of a normal distribution?",
                  options: ["The value at the peak of the curve", "The value at the center of the curve", "The value at the left end of the curve", "The value at the right end of the curve"],
                  answer: "The value at the center of the curve"
                },
                {
                  question: "What is the standard deviation of a normal distribution?",
                  options: ["The distance from the mean to the left end of the curve", "The distance from the mean to the right end of the curve", "The distance from the mean to the peak of the curve", "The distance from the mean to the center of the curve"],
                  answer: "The distance from the mean to the center of the curve"
                },
                {
                  question: "Which of the following is NOT a property of the normal distribution?",
                  options: ["Symmetry around the mean", "Bell-shaped curve", "Mean, median, and mode are equal", "Total area under the curve is 1"],
                  answer: "Total area under the curve is 1"
                }
              ]
            },
            {
              id: "math-form4-mod2-room2",
              title: "Hypothesis Testing",
              description: "Statistical significance and p-values",
              completionPercentage: 50,
              sections: [
                {
                  id: "hypothesis-intro",
                  title: "1. Introduction to Hypothesis Testing",
                  content: "Hypothesis testing is a statistical method used to determine whether a claim or hypothesis about a population parameter is supported by the data. It involves formulating a null hypothesis and an alternative hypothesis, collecting data, and using statistical tests to determine whether the null hypothesis can be rejected.",
                  completed: true
                },
                {
                  id: "hypothesis-process",
                  title: "2. The Process of Hypothesis Testing",
                  content: "The process of hypothesis testing includes the following steps:\n\n1. State the null hypothesis (H₀) and the alternative hypothesis (H₁)\n2. Choose a significance level (α) and a test statistic\n3. Collect data and calculate the test statistic\n4. Determine the p-value and compare it to the significance level\n5. Make a decision to reject or fail to reject the null hypothesis",
                  completed: true
                },
                {
                  id: "hypothesis-applications",
                  title: "3. Applications of Hypothesis Testing",
                  content: "Hypothesis testing has numerous applications in science, engineering, and social sciences:\n\n- It is used to test the effectiveness of treatments or interventions\n- It is used to compare the means of two or more groups\n- It is used to test the relationship between two variables\n- It is used to make inferences about population parameters",
                  completed: true
                }
              ],
              quizzes: 3,
              module: "Statistics",
              duration: "45 min",
              xpPoints: 85,
              completed: true,
              quiz: [
                {
                  question: "What is the purpose of hypothesis testing?",
                  options: ["To determine whether a claim is true or false", "To estimate population parameters", "To make predictions about future events", "To compare two or more groups"],
                  answer: "To determine whether a claim is true or false"
                },
                {
                  question: "What is the significance level in hypothesis testing?",
                  options: ["The probability of rejecting the null hypothesis when it is true", "The probability of accepting the null hypothesis when it is false", "The probability of making a Type I error", "The probability of making a Type II error"],
                  answer: "The probability of rejecting the null hypothesis when it is true"
                },
                {
                  question: "Which of the following is NOT a type of error in hypothesis testing?",
                  options: ["Type I error", "Type II error", "Type III error", "Type IV error"],
                  answer: "Type III error"
                }
              ]
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
              completionPercentage: 100,
              sections: [
                {
                  id: "quadratic-intro",
                  title: "1. Introduction to Quadratic Equations",
                  content: "A quadratic equation is an equation of the form ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0. Quadratic equations have two solutions, which can be found using the quadratic formula: x = [-b ± √(b² - 4ac)]/(2a).",
                  completed: true
                },
                {
                  id: "quadratic-solutions",
                  title: "2. Solving Quadratic Equations",
                  content: "There are three main methods for solving quadratic equations:\n\n- Factoring: If the quadratic equation can be factored into two binomials, the solutions can be found by setting each factor equal to zero\n- Completing the square: This method involves rewriting the quadratic equation in the form (x + h)² = k, where h and k are constants\n- Quadratic formula: This method involves using the quadratic formula: x = [-b ± √(b² - 4ac)]/(2a)",
                  completed: true
                },
                {
                  id: "quadratic-applications",
                  title: "3. Applications of Quadratic Equations",
                  content: "Quadratic equations have numerous applications in mathematics and science:\n\n- They are used to model projectile motion and other physical phenomena\n- They are used to solve optimization problems, such as finding the maximum or minimum value of a function\n- They are used to find the intersection points of two curves\n- They are used in statistics and probability to model data distributions",
                  completed: true
                }
              ],
              quizzes: 3,
              module: "Algebra",
              duration: "35 min",
              xpPoints: 70,
              completed: true,
              quiz: [
                {
                  question: "What is the quadratic formula?",
                  options: ["x = [-b ± √(b² - 4ac)]/(2a)", "x = a(b + c)/c", "x = b(a + c)/c", "x = c(a + b)/b"],
                  answer: "x = [-b ± √(b² - 4ac)]/(2a)"
                },
                {
                  question: "What is the vertex form of a quadratic equation?",
                  options: ["y = ax² + bx + c", "y = a(x - h)² + k", "y = a(x + h)² + k", "y = a(x - h)² - k"],
                  answer: "y = a(x - h)² + k"
                },
                {
                  question: "Which of the following is NOT a type of quadratic equation?",
                  options: ["Standard form", "Factored form", "Vertex form", "Intercept form"],
                  answer: "Intercept form"
                }
              ]
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
              completionPercentage: 100,
              sections: [
                {
                  id: "trig-intro",
                  title: "1. Introduction to Trigonometry",
                  content: "Trigonometry is the study of the relationships between the sides and angles of triangles. The three main trigonometric functions are sine, cosine, and tangent, which are defined as follows:\n\n- Sine (sin): The ratio of the length of the opposite side to the length of the hypotenuse\n- Cosine (cos): The ratio of the length of the adjacent side to the length of the hypotenuse\n- Tangent (tan): The ratio of the length of the opposite side to the length of the adjacent side",
                  completed: true
                },
                {
                  id: "trig-formulas",
                  title: "2. Trigonometric Formulas",
                  content: "There are several trigonometric formulas that can be used to solve triangles:\n\n- Sine rule: a/sin(A) = b/sin(B) = c/sin(C)\n- Cosine rule: a² = b² + c² - 2bc·cos(A)\n- Tangent rule: tan(A) = sin(A)/cos(A)",
                  completed: true
                },
                {
                  id: "trig-applications",
                  title: "3. Applications of Trigonometry",
                  content: "Trigonometry has numerous applications in mathematics and science:\n\n- It is used to solve problems involving right triangles, such as finding the length of a side or the measure of an angle\n- It is used to solve problems involving oblique triangles, such as finding the length of a side or the measure of an angle\n- It is used in navigation and surveying to determine distances and angles\n- It is used in physics to model wave motion and other phenomena",
                  completed: true
                }
              ],
              quizzes: 3,
              module: "Trigonometry",
              duration: "40 min",
              xpPoints: 75,
              completed: true,
              quiz: [
                {
                  question: "What is the sine rule?",
                  options: ["a/sin(A) = b/sin(B) = c/sin(C)", "a/b = sin(A)/sin(B)", "a/c = sin(A)/sin(C)", "b/c = sin(B)/sin(C)"],
                  answer: "a/sin(A) = b/sin(B) = c/sin(C)"
                },
                {
                  question: "What is the cosine rule?",
                  options: ["a² = b² + c² - 2bc·cos(A)", "a² = b² + c² + 2bc·cos(A)", "a² = b² - c² + 2bc·cos(A)", "a² = b² - c² - 2bc·cos(A)"],
                  answer: "a² = b² + c² - 2bc·cos(A)"
                },
                {
                  question: "Which of the following is NOT a trigonometric function?",
                  options: ["Sine", "Cosine", "Tangent", "Cotangent"],
                  answer: "Cotangent"
                }
              ]
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
