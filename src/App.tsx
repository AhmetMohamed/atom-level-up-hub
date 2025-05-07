
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import LearningPathDetail from "./pages/LearningPathDetail";
import ModuleDetail from "./pages/ModuleDetail";
import RealExamPrep from "./pages/ExamChallenge/RealExamPrep";

// Admin Routes
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserManagement from "./pages/Admin/UserManagement";
import PaymentVerification from "./pages/Admin/PaymentVerification";
import PremiumContentManagement from "./pages/Admin/PremiumContentManagement";

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
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/exam-challenge/:examId" element={<ExamChallenge />} />
          <Route path="/challenge/:examId" element={<ExamChallengeNew />} />
          <Route path="/exam-prep/:subjectId" element={<RealExamPrep />} />
          
          {/* Subject routes */}
          <Route path="/subjects/:subjectId" element={<Subject />} />
          <Route path="/learn/:subjectId" element={<Subject />} />
          <Route path="/subjects/:subjectId/rooms/:roomId" element={<Room />} />
          <Route path="/learn/:subjectId/rooms/:roomId" element={<Room />} />
          
          {/* Learning Path routes */}
          <Route path="/subjects/:subjectId/learning-paths/:pathId" element={<LearningPathDetail />} />
          <Route path="/learn/:subjectId/learning-paths/:pathId" element={<LearningPathDetail />} />
          
          {/* Module routes */}
          <Route path="/subjects/:subjectId/modules/:moduleId" element={<ModuleDetail />} />
          <Route path="/learn/:subjectId/modules/:moduleId" element={<ModuleDetail />} />
          <Route path="/subjects/:subjectId/learning-paths/:pathId/modules/:moduleId" element={<ModuleDetail />} />
          <Route path="/learn/:subjectId/learning-paths/:pathId/modules/:moduleId" element={<ModuleDetail />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/payments" element={<PaymentVerification />} />
          <Route path="/admin/premium" element={<PremiumContentManagement />} />
          
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
