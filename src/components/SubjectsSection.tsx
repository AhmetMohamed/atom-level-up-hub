import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const subjects = [
  {
    title: "Biology",
    description: "Explore living organisms, their structures, functions, growth, and evolution.",
    image: "🧬",
    color: "bg-green-100",
    textColor: "text-green-800",
    border: "border-green-200",
    topics: ["Cells", "Genetics", "Ecology", "Evolution"],
  },
  {
    title: "Chemistry",
    description: "Study matter, its properties, and the changes it undergoes during reactions.",
    image: "⚗️",
    color: "bg-purple-100",
    textColor: "text-purple-800",
    border: "border-purple-200",
    topics: ["Atomic Structure", "Chemical Bonding", "Acids & Bases", "Organic Chemistry"],
  },
  {
    title: "Physics",
    description: "Understand the fundamental principles that govern the natural world.",
    image: "⚛️",
    color: "bg-blue-100",
    textColor: "text-blue-800",
    border: "border-blue-200",
    topics: ["Forces", "Energy", "Waves", "Electricity"],
  },
  {
    title: "Mathematics",
    description: "Master mathematical concepts crucial for scientific understanding and problem-solving.",
    image: "📊",
    color: "bg-amber-100",
    textColor: "text-amber-800",
    border: "border-amber-200",
    topics: ["Algebra", "Calculus", "Statistics", "Geometry"],
  },
  {
    title: "Environmental Science",
    description: "Learn about ecosystems, sustainability, and human impact on the environment.",
    image: "🌍",
    color: "bg-teal-100",
    textColor: "text-teal-800",
    border: "border-teal-200",
    topics: ["Ecosystems", "Climate", "Conservation", "Sustainability"],
  },
];

const SubjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 max-w-[800px] mx-auto mb-16">
          <div className="inline-block">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-science-light text-science-primary">
              <span className="animate-pulse-light">Explore Subjects</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Dive into fascinating science topics
          </h2>
          <p className="text-muted-foreground text-lg">
            From biology to physics, we cover all the major high school science subjects with interactive lessons and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className={`science-card ${subject.color} ${subject.border} hover:shadow-md overflow-hidden card-hover`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl mb-4">{subject.image}</div>
                    <h3 className={`text-2xl font-bold mb-2 ${subject.textColor}`}>{subject.title}</h3>
                    <p className="text-muted-foreground">{subject.description}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className={`text-sm font-semibold mb-2 ${subject.textColor}`}>
                    Popular Topics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map((topic, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${subject.color} border ${subject.border}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-6">
                  <Link to={`/subjects/${subject.title.toLowerCase()}`}>
                    <Button variant="outline" className="w-full">
                      Explore {subject.title}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/subjects">
            <Button className="bg-science-primary hover:bg-science-primary/90">
              View All Subjects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
