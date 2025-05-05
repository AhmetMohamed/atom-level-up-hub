
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Subject from "./pages/Subject";
import LearningPathDetail from "./pages/LearningPathDetail";
import ModuleDetail from "./pages/ModuleDetail";
import Room from "./pages/Room";
import Challenges from "./pages/Challenges";
import ExamChallengePage from "./pages/ExamChallengePage";
import Resources from "./pages/Resources";
import Leaderboard from "./pages/Leaderboard";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Lesson from "./pages/Lesson";
import CMSAuth from "./pages/CMS/CMSAuth";
import CMSDashboard from "./pages/CMS/CMSDashboard";
import ModulesManagement from "./pages/CMS/ModulesManagement";
import RoomsManagement from "./pages/CMS/RoomsManagement";
import RoomEditor from "./pages/CMS/RoomEditor";
import ExamsManagement from "./pages/CMS/ExamsManagement";
import StudentsManagement from "./pages/CMS/StudentsManagement";
import ResourcesManagement from "./pages/CMS/ResourcesManagement";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subjects/:subjectId" element={<Subject />} />
        <Route path="/subjects/:subjectId/learning-paths/:pathId" element={<LearningPathDetail />} />
        <Route path="/subjects/:subjectId/learning-paths/:pathId/modules/:moduleId" element={<ModuleDetail />} />
        <Route path="/subjects/:subjectId/rooms/:roomId" element={<Room />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenge/:challengeId" element={<Challenges />} />
        <Route path="/exam-challenge/:examId" element={<ExamChallengePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        
        {/* CMS Routes */}
        <Route path="/cms" element={<CMSAuth />} />
        <Route path="/cms/dashboard" element={<CMSDashboard />} />
        <Route path="/cms/modules" element={<ModulesManagement />} />
        <Route path="/cms/rooms" element={<RoomsManagement />} />
        <Route path="/cms/room-editor/:roomId" element={<RoomEditor />} />
        <Route path="/cms/exams" element={<ExamsManagement />} />
        <Route path="/cms/students" element={<StudentsManagement />} />
        <Route path="/cms/resources" element={<ResourcesManagement />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
