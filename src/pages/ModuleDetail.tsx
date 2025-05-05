
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getModuleById, getSubjectData, getLearningPathById } from "@/lib/demoData";
import RoomCard from "@/components/RoomCard";

const ModuleDetail = () => {
  const { subjectId, pathId, moduleId } = useParams<{
    subjectId: string;
    pathId: string;
    moduleId: string;
  }>();
  
  const navigate = useNavigate();

  // Get the module data
  const subject = getSubjectData(subjectId || "");
  const learningPath = getLearningPathById(subjectId || "", pathId || "");
  const module = getModuleById(subjectId || "", pathId || "", moduleId || "");

  if (!module) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container py-20 text-center flex-1">
          <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
          <p className="mb-8">
            The module you're looking for doesn't exist or has been moved.
          </p>
          <Button onClick={() => navigate(`/subjects/${subjectId}`)}>Go Back to {subject.title}</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <div className={`py-8 ${subject.color}`}>
          <div className="container px-4">
            <div className="mb-4">
              {pathId ? (
                <Link
                  to={`/subjects/${subjectId}/learning-paths/${pathId}`}
                  className="inline-flex items-center text-sm hover:underline"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back to {learningPath?.title || "Learning Path"}
                </Link>
              ) : (
                <Link
                  to={`/subjects/${subjectId}`}
                  className="inline-flex items-center text-sm hover:underline"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back to {subject.title}
                </Link>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className={`text-3xl font-bold ${subject.textColor}`}>
                  {module.title}
                </h1>
                <p className="text-muted-foreground mt-1">
                  {module.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Progress</div>
                  <div className="font-medium">
                    {module.progress}% Complete
                  </div>
                </div>
                <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      module.progress === 100 ? "bg-green-500" : "bg-blue-600"
                    }`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Rooms</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {module.rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                subject={subjectId || ""}
              />
            ))}
          </div>

          {module.rooms.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2">No rooms found</h3>
              <p className="text-muted-foreground">
                This module doesn't have any rooms yet.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModuleDetail;
