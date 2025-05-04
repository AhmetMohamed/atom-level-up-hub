import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Award,
  FileText,
  Calculator,
  Microscope,
  FlaskConical,
  Dna,
  CheckCircle,
  Star,
  Trophy,
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

// Mock data for challenge exams
const challengeExams = [
  {
    id: "biology-gcse-mock",
    title: "GCSE Biology Mock Exam",
    subject: "Biology",
    description:
      "Test your knowledge with this comprehensive GCSE Biology mock exam covering key topics.",
    duration: "45 minutes",
    questions: 20,
    difficulty: "GCSE Level",
    icon: <Dna className="h-5 w-5" />,
    color: "bg-green-100 text-green-800 border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "chemistry-challenges",
    title: "A-Level Chemistry Challenge",
    subject: "Chemistry",
    description:
      "Challenge yourself with advanced A-Level Chemistry questions focused on organic chemistry.",
    duration: "60 minutes",
    questions: 25,
    difficulty: "A-Level",
    icon: <FlaskConical className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-800 border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "physics-forces",
    title: "GCSE Physics: Forces & Motion",
    subject: "Physics",
    description:
      "Test your understanding of forces, motion, and Newton's laws in this timed exam.",
    duration: "40 minutes",
    questions: 20,
    difficulty: "GCSE Level",
    icon: <Microscope className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-800 border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "maths-algebra",
    title: "A-Level Mathematics: Algebra",
    subject: "Mathematics",
    description:
      "Challenge your algebraic skills with this A-Level Mathematics exam.",
    duration: "55 minutes",
    questions: 15,
    difficulty: "A-Level",
    icon: <Calculator className="h-5 w-5" />,
    color: "bg-red-100 text-red-800 border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

// Mock data for past challenges
const pastChallenges = [
  {
    id: "past-biology-cells",
    title: "Cell Biology Challenge",
    subject: "Biology",
    score: "85%",
    date: "2 weeks ago",
    timeSpent: "42 minutes",
    icon: <Dna className="h-5 w-5" />,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "past-chemistry-periodic",
    title: "Periodic Table Challenge",
    subject: "Chemistry",
    score: "92%",
    date: "1 month ago",
    timeSpent: "58 minutes",
    icon: <FlaskConical className="h-5 w-5" />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "past-physics-waves",
    title: "Waves & Sound Challenge",
    subject: "Physics",
    score: "78%",
    date: "2 months ago",
    timeSpent: "38 minutes",
    icon: <Microscope className="h-5 w-5" />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const Challenges = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("all");

  const filteredChallenges =
    selectedSubject === "all"
      ? challengeExams
      : challengeExams.filter(
          (challenge) => challenge.subject.toLowerCase() === selectedSubject
        );

  return (
    <DashboardLayout>
      <div className="container px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Exam Challenges
            </h1>
            <p className="text-muted-foreground">
              Test your knowledge with timed exam challenges
            </p>
          </div>
        </div>

        <Tabs defaultValue="challenges" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="challenges">
              <Clock className="h-4 w-4 mr-2" />
              Available Challenges
            </TabsTrigger>
            <TabsTrigger value="past">
              <CheckCircle className="h-4 w-4 mr-2" />
              Past Challenges
            </TabsTrigger>
            <TabsTrigger value="achievements">
              <Award className="h-4 w-4 mr-2" />
              Challenge Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="challenges">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-6">
                <Button
                  variant={selectedSubject === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSubject("all")}
                >
                  All Subjects
                </Button>
                <Button
                  variant={
                    selectedSubject === "biology" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedSubject("biology")}
                >
                  <Dna className="h-4 w-4 mr-1" />
                  Biology
                </Button>
                <Button
                  variant={
                    selectedSubject === "chemistry" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedSubject("chemistry")}
                >
                  <FlaskConical className="h-4 w-4 mr-1" />
                  Chemistry
                </Button>
                <Button
                  variant={
                    selectedSubject === "physics" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedSubject("physics")}
                >
                  <Microscope className="h-4 w-4 mr-1" />
                  Physics
                </Button>
                <Button
                  variant={
                    selectedSubject === "mathematics" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedSubject("mathematics")}
                >
                  <Calculator className="h-4 w-4 mr-1" />
                  Mathematics
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredChallenges.map((challenge) => (
                  <Card
                    key={challenge.id}
                    className="overflow-hidden border border-gray-200 transition-all hover:shadow-md"
                  >
                    <CardHeader className="bg-gray-50 border-b pb-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className={`${challenge.iconBg} p-2 rounded-lg`}>
                            {challenge.icon}
                          </div>
                          <div>
                            <Badge
                              variant="outline"
                              className={challenge.color}
                            >
                              {challenge.subject}
                            </Badge>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-gray-200 text-gray-600"
                        >
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="mt-2">{challenge.title}</CardTitle>
                      <CardDescription>{challenge.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 border rounded-lg">
                          <div className="text-sm text-muted-foreground">
                            Duration
                          </div>
                          <div className="font-medium flex items-center justify-center gap-1 mt-1">
                            <Clock className="h-4 w-4" />
                            {challenge.duration}
                          </div>
                        </div>
                        <div className="text-center p-3 border rounded-lg">
                          <div className="text-sm text-muted-foreground">
                            Questions
                          </div>
                          <div className="font-medium flex items-center justify-center gap-1 mt-1">
                            <FileText className="h-4 w-4" />
                            {challenge.questions}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 border-t pt-4">
                      <Link
                        to={`/challenge/${challenge.id}`}
                        className="w-full"
                      >
                        <Button className="w-full">Start Challenge</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredChallenges.length === 0 && (
                <div className="text-center p-10 border rounded-lg">
                  <p className="text-muted-foreground">
                    No challenges available for this subject yet.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-6">
              <h2 className="text-lg font-medium">
                Recently Completed Challenges
              </h2>

              {pastChallenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${challenge.iconBg} p-3 rounded-lg`}>
                      {challenge.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{challenge.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        {challenge.subject}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {challenge.date} • {challenge.timeSpent}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div
                      className={`text-lg font-bold ${
                        parseInt(challenge.score) >= 90
                          ? "text-green-600"
                          : parseInt(challenge.score) >= 70
                          ? "text-amber-600"
                          : "text-orange-600"
                      }`}
                    >
                      {challenge.score}
                    </div>
                    <Link to={`/challenge-results/${challenge.id}`}>
                      <Button variant="outline" size="sm">
                        View Results
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-6">
              <h2 className="text-lg font-medium">Challenge Achievements</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="border border-amber-200 bg-amber-50">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center">
                      <div className="bg-amber-100 p-4 rounded-full">
                        <Star className="h-8 w-8 text-amber-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <h3 className="font-bold">Perfect Score</h3>
                    <p className="text-sm text-muted-foreground">
                      Score 100% on any challenge
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center pt-0">
                    <Badge
                      variant="outline"
                      className="bg-amber-100 text-amber-800 border-amber-200"
                    >
                      <CheckCircle className="h-3 w-3 mr-1" /> Achieved
                    </Badge>
                  </CardFooter>
                </Card>

                <Card className="border border-blue-200 bg-blue-50">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center">
                      <div className="bg-blue-100 p-4 rounded-full">
                        <Trophy className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <h3 className="font-bold">Challenge Master</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete 10 challenges
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center pt-0">
                    <Badge
                      variant="outline"
                      className="bg-blue-100 text-blue-800 border-blue-200"
                    >
                      <CheckCircle className="h-3 w-3 mr-1" /> Achieved
                    </Badge>
                  </CardFooter>
                </Card>

                <Card className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center">
                      <div className="bg-gray-100 p-4 rounded-full">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <h3 className="font-bold text-gray-500">Speed Demon</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete a challenge in record time
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center pt-0">
                    <Badge
                      variant="outline"
                      className="border-gray-200 text-gray-500"
                    >
                      Locked
                    </Badge>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Challenges;
