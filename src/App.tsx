import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Lesson from "./pages/Lesson";
import Leaderboard from "./pages/Leaderboard";
import Resources from "./pages/Resources";
import ExamChallenge from "./pages/ExamChallenge";
import ExamChallengeNew from "./pages/ExamChallengeNew";
import Subject from "./pages/Subject";
import Room from "./pages/Room";
import Pricing from "./pages/Pricing";
import Challenges from "./pages/Challenges";

// CMS Routes
import CMSDashboard from "./pages/CMS/CMSDashboard";
import RoomsManagement from "./pages/CMS/RoomsManagement";
import RoomEditor from "./pages/CMS/RoomEditor";
import ExamsManagement from "./pages/CMS/ExamsManagement";
import ResourcesManagement from "./pages/CMS/ResourcesManagement";
import StudentsManagement from "./pages/CMS/StudentsManagement";
import ModulesManagement from "./pages/CMS/ModulesManagement";
import CMSAuth from "./pages/CMS/CMSAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/lessons/:lessonId" element={<Lesson />} /> */}
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/exam-challenge/:examId" element={<ExamChallenge />} />
          <Route path="/challenge/:examId" element={<ExamChallengeNew />} />
          <Route path="/subjects/:subjectId" element={<Subject />} />
          <Route path="/subjects/:subjectId/rooms/:roomId" element={<Room />} />

          {/* CMS routes */}
          <Route path="/cms/login" element={<CMSAuth />} />
          <Route path="/cms" element={<CMSDashboard />} />
          <Route path="/cms/rooms" element={<RoomsManagement />} />
          <Route
            path="/cms/rooms/:operation/:roomId"
            element={<RoomEditor />}
          />
          <Route path="/cms/rooms/:operation" element={<RoomEditor />} />
          <Route path="/cms/exams" element={<ExamsManagement />} />
          <Route path="/cms/modules" element={<ModulesManagement />} />
          <Route path="/cms/resources" element={<ResourcesManagement />} />
          <Route path="/cms/students" element={<StudentsManagement />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
