
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Subject from "./pages/Subject";
import Room from "./pages/Room";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import ModuleDetail from "./pages/ModuleDetail";
import LearningPathDetail from "./pages/LearningPathDetail";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Challenges from "./pages/Challenges";
import ExamChallenge from "./pages/ExamChallenge";
import ExamChallengeNew from "./pages/ExamChallengeNew";
import ExamChallengePage from "./pages/ExamChallengePage";
import Leaderboard from "./pages/Leaderboard";
import Lesson from "./pages/Lesson";
import CMSAuth from "./pages/CMS/CMSAuth";
import CMSDashboard from "./pages/CMS/CMSDashboard";
import RoomsManagement from "./pages/CMS/RoomsManagement";
import ModulesManagement from "./pages/CMS/ModulesManagement";
import ExamsManagement from "./pages/CMS/ExamsManagement";
import ResourcesManagement from "./pages/CMS/ResourcesManagement";
import RoomEditor from "./pages/CMS/RoomEditor";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/subjects/:subjectId" element={<Subject />} />
      <Route path="/modules/:moduleId" element={<ModuleDetail />} />
      <Route path="/learning-paths/:pathId" element={<LearningPathDetail />} />
      <Route path="/rooms/:roomId" element={<Room />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/challenges/exam/:examId" element={<ExamChallenge />} />
      <Route path="/challenges/exam-new/:examId" element={<ExamChallengeNew />} />
      <Route path="/challenges/exam-page/:examId" element={<ExamChallengePage />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/lesson/:lessonId" element={<Lesson />} />
      
      {/* CMS Routes */}
      <Route path="/cms/login" element={<CMSAuth />} />
      <Route path="/cms/dashboard" element={<CMSDashboard />} />
      <Route path="/cms/rooms" element={<RoomsManagement />} />
      <Route path="/cms/modules" element={<ModulesManagement />} />
      <Route path="/cms/exams" element={<ExamsManagement />} />
      <Route path="/cms/resources" element={<ResourcesManagement />} />
      <Route path="/cms/rooms/edit/:roomId" element={<RoomEditor />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
