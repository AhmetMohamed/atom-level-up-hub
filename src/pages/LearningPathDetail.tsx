
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLearningPathById, getSubjectData } from "@/lib/demoData";
import ModuleCard from "@/components/ModuleCard";

const LearningPathDetail = () => {
  const { subjectId, pathId } = useParams<{
    subjectId: string;
    pathId: string;
  }>();

  // Get the learning path data
  const subject = getSubjectData(subjectId || "");
  const learningPath = getLearningPathById(subjectId || "", pathId || "");

  if (!learningPath) {
    return (
      <>
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Learning Path Not Found</h1>
          <p className="mb-8">
            The learning path you're looking for doesn't exist or has been moved.
          </p>
          <Link to={`/subjects/${subjectId}`}>
            <Button>Return to Subject Page</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className={`py-8 ${subject.color}`}>
          <div className="container px-4">
            <div className="mb-4">
              <Link
                to={`/subjects/${subjectId}`}
                className="inline-flex items-center text-sm hover:underline"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to {subject.title}
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className={`text-3xl font-bold ${subject.textColor}`}>
                  {learningPath.title}
                </h1>
                <p className="text-muted-foreground mt-1">
                  {learningPath.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Progress</div>
                  <div className="font-medium">
                    {learningPath.completionPercentage}% Complete
                  </div>
                </div>
                <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-blue-600`}
                    style={{ width: `${learningPath.completionPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Modules</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {learningPath.modules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                subject={{
                  color: subject.color,
                  textColor: subject.textColor,
                  border: subject.border,
                }}
                subjectId={subjectId || ""}
              />
            ))}
          </div>

          {learningPath.modules.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2">No modules found</h3>
              <p className="text-muted-foreground">
                This learning path doesn't have any modules yet.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LearningPathDetail;
