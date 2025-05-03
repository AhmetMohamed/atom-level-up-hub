
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface SubjectHeaderProps {
  subject: {
    title: string;
    description: string;
    image: string;
    color: string;
    textColor: string;
    completionPercentage: number;
  }
}

const SubjectHeader = ({ subject }: SubjectHeaderProps) => {
  return (
    <div className={`w-full ${subject.color}`}>
      <div className="container px-4 py-8 md:px-6">
        <Link to="/dashboard" className="inline-flex items-center mb-4 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Dashboard
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{subject.image}</div>
            <div>
              <h1 className={`text-3xl font-bold ${subject.textColor}`}>{subject.title}</h1>
              <p className="text-muted-foreground mt-1 max-w-xl">{subject.description}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Overall completion</span>
              <span className={`font-bold ${subject.textColor}`}>{subject.completionPercentage}%</span>
            </div>
            <div className="w-full md:w-48 bg-white/50 rounded-full h-2">
              <div 
                className={`h-2 rounded-full bg-science-primary`} 
                style={{ width: `${subject.completionPercentage}%` }}
              ></div>
            </div>
            <Button className="mt-2 w-full md:w-auto">Continue Learning</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectHeader;
