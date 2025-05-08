
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Challenges from "./pages/Challenges";
import Subject from "./pages/Subject";
import Room from "./pages/Room";
import ModuleDetail from "./pages/ModuleDetail";
import Lesson from "./pages/Lesson";
import ExamChallenge from "./pages/ExamChallenge";
import Resources from "./pages/Resources";
import LearningPathDetail from "./pages/LearningPathDetail";
import Pricing from "./pages/Pricing";
import Leaderboard from "./pages/Leaderboard";
import ExamChallengeNew from "./pages/ExamChallengeNew";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserManagement from "./pages/Admin/UserManagement";
import ContentManagement from "./pages/Admin/ContentManagement";
import AdminSettings from "./pages/Admin/AdminSettings";
import AccessControl from "./pages/Admin/AccessControl";
import AdminReports from "./pages/Admin/AdminReports";
import PaymentVerification from "./pages/Admin/PaymentVerification";
import PremiumContentManagement from "./pages/Admin/PremiumContentManagement";
import AdminContent from "./pages/Admin/AdminContent";

// CMS routes
import CMSDashboard from "./pages/CMS/CMSDashboard";
import CMSAuth from "./pages/CMS/CMSAuth";
import ModulesManagement from "./pages/CMS/ModulesManagement";
import RoomsManagement from "./pages/CMS/RoomsManagement";
import ResourcesManagement from "./pages/CMS/ResourcesManagement";
import ExamsManagement from "./pages/CMS/ExamsManagement";
import StudentsManagement from "./pages/CMS/StudentsManagement";
import RoomEditor from "./pages/CMS/RoomEditor";

import "./App.css";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Index />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/resources" element={<Resources />} />

      {/* Subject routes */}
      <Route path="/subjects/:subjectId" element={<Subject />} />
      <Route path="/subjects/:subjectId/rooms/:roomId" element={<Room />} />
      <Route path="/subjects/:subjectId/modules/:moduleId" element={<ModuleDetail />} />
      <Route path="/subjects/:subjectId/modules/:moduleId/lessons/:lessonId" element={<Lesson />} />
      <Route path="/subjects/:subjectId/learning-paths/:pathId" element={<LearningPathDetail />} />
      <Route path="/subjects/:subjectId/learning-paths/:pathId/modules/:moduleId" element={<ModuleDetail />} />

      {/* User dashboard routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/challenges/exam/:examId" element={<ExamChallenge />} />
      <Route path="/challenges/exam/new/:examId" element={<ExamChallengeNew />} />

      {/* Learn routes (redirect to subjects) */}
      <Route path="/learn/biology" element={<Subject />} />
      <Route path="/learn/chemistry" element={<Subject />} />
      <Route path="/learn/physics" element={<Subject />} />
      <Route path="/learn/mathematics" element={<Subject />} />

      {/* Admin routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<UserManagement />} />
      <Route path="/admin/content" element={<AdminContent />} />
      <Route path="/admin/content-management" element={<ContentManagement />} />
      <Route path="/admin/premium" element={<PremiumContentManagement />} />
      <Route path="/admin/reports" element={<AdminReports />} />
      <Route path="/admin/access" element={<AccessControl />} />
      <Route path="/admin/payments" element={<PaymentVerification />} />
      <Route path="/admin/settings" element={<AdminSettings />} />

      {/* CMS routes */}
      <Route path="/cms" element={<CMSDashboard />} />
      <Route path="/cms/auth" element={<CMSAuth />} />
      <Route path="/cms/modules" element={<ModulesManagement />} />
      <Route path="/cms/rooms" element={<RoomsManagement />} />
      <Route path="/cms/resources" element={<ResourcesManagement />} />
      <Route path="/cms/exams" element={<ExamsManagement />} />
      <Route path="/cms/students" element={<StudentsManagement />} />
      <Route path="/cms/rooms/:roomId/edit" element={<RoomEditor />} />

      {/* Fallback for unknown routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
