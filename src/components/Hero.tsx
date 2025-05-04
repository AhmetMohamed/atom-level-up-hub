import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Star,
  Award,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 py-20 md:py-28">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-[5%] w-80 h-80 bg-purple-300 opacity-10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-[15%] w-40 h-40 bg-green-300 opacity-10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors bg-background shadow-sm">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5  text-science-primary">
              🚀 Level up your science skills
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn Science
            <span className="relative">
              <span className="inline-block animate-float">
                <span className="relative z-10 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent px-1">
                  Interactively
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 138 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 20.8553C47.2659 6.08466 133.34 -9.96878 135 20.8553"
                    stroke="#6366F1"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="text-lg text-muted-foreground md:text-xl">
            Comprehensive lessons, hands-on experiments, interactive quizzes,
            and practice exams designed to help students excel in science
            subjects.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/signup">
              <Button className="bg-science-primary hover:bg-science-primary/90 h-12 px-6 text-base">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/subjects">
              <Button variant="outline" className="h-12 px-6 text-base">
                Explore Subjects
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckmarkIcon />
              <span>Interactive learning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckmarkIcon />
              <span>Real exam prep</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckmarkIcon />
              <span>Track progress</span>
            </div>
          </div>
        </div>

        <div className="relative h-[340px] md:h-[460px] animate-fade-in animation-delay-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-[380px] aspect-square">
              {/* Main learning card */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl rotate-3 hover:rotate-0 transition-all duration-300 p-5 flex flex-col z-10">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <div className="pt-2 pb-4">
                  <h3 className="font-bold text-xl">GCSE Science</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Complete learning program
                  </p>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3">
                  <SubjectCard
                    title="Biology"
                    color="bg-green-100 text-green-700"
                    icon="🧬"
                  />
                  <SubjectCard
                    title="Chemistry"
                    color="bg-purple-100 text-purple-700"
                    icon="⚗️"
                  />
                  <SubjectCard
                    title="Physics"
                    color="bg-blue-100 text-blue-700"
                    icon="🔭"
                  />
                  <SubjectCard
                    title="Math"
                    color="bg-amber-100 text-amber-700"
                    icon="📊"
                  />
                </div>

                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full border-2 border-white bg-primary/10 flex items-center justify-center text-xs font-bold`}
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    +2,500 students
                  </span>
                </div>
              </div>

              {/* Floating achievement card */}
              <div className="absolute right-4 bottom-10 bg-white rounded-xl shadow-lg p-3 animate-float delay-500 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium">Achievement</p>
                    <p className="text-xs text-muted-foreground">
                      Perfect Score!
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating progress card */}
              <div className="absolute -left-10 top-6 bg-white rounded-xl shadow-lg p-3 animate-float delay-700 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium">Learning Progress</p>
                    <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1">
                      <div className="w-3/5 h-full bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components
const CheckmarkIcon = () => (
  <div className="rounded-full bg-green-100 p-1 text-green-600">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3L4.5 8.5L2 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const SubjectCard = ({
  title,
  color,
  icon,
}: {
  title: string;
  color: string;
  icon: string;
}) => (
  <div
    className={`${color} rounded-lg p-3 flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform cursor-pointer`}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-xs font-medium">{title}</span>
  </div>
);

export default Hero;
