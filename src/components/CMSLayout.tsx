
import React, { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  PlusCircle,
  Users,
  FileQuestion,
  Book
} from "lucide-react";
import { toast } from "sonner";

interface CMSLayoutProps {
  children: ReactNode;
}

const CMSLayout = ({ children }: CMSLayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationLinks = [
    {
      title: "Dashboard",
      href: "/cms",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      title: "Rooms",
      href: "/cms/rooms",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: "Modules",
      href: "/cms/modules",
      icon: <Book className="w-5 h-5" />,
    },
    {
      title: "Exams",
      href: "/cms/exams",
      icon: <FileQuestion className="w-5 h-5" />,
    },
    {
      title: "Resources",
      href: "/cms/resources",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "Students",
      href: "/cms/students",
      icon: <Users className="w-5 h-5" />,
    }
  ];

  const handleLogout = () => {
    toast.success("You have been logged out of CMS.");
    // Normally we would handle the actual logout logic here
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="border-b sticky top-0 z-30 bg-background">
        <div className="container px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="mr-2 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/cms" className="flex items-center gap-2">
              <span className="text-2xl">🧪</span>
              <div className="flex flex-col">
                <span className="font-bold text-xl hidden sm:inline-block">
                  ScienceHub
                </span>
                <span className="text-xs text-muted-foreground hidden sm:inline-block">
                  Content Management System
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                View Site
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="rounded-full border">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar for desktop */}
        <aside className="w-64 border-r hidden lg:block shrink-0 bg-white">
          <div className="h-full flex flex-col p-4">
            <nav className="space-y-1 flex-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                    location.pathname === link.href && "bg-science-light text-science-primary hover:bg-science-light"
                  )}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              ))}
            </nav>

            <div className="border-t pt-4 space-y-1">
              <Link
                to="/cms/settings"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span>CMS Settings</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="fixed inset-0 bg-black/50"
              onClick={toggleSidebar}
              aria-hidden="true"
            />
            <div className="fixed inset-y-0 left-0 w-64 bg-white p-4 border-r animate-slide-right">
              <div className="flex justify-between items-center mb-4">
                <Link to="/cms" className="flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">ScienceHub</span>
                    <span className="text-xs text-muted-foreground">CMS</span>
                  </div>
                </Link>
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="space-y-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={toggleSidebar}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                      location.pathname === link.href && "bg-science-light text-science-primary hover:bg-science-light"
                    )}
                  >
                    {link.icon}
                    <span>{link.title}</span>
                  </Link>
                ))}
              </nav>

              <div className="border-t my-4 pt-4">
                <Link
                  to="/cms/settings"
                  onClick={toggleSidebar}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span>CMS Settings</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleSidebar();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default CMSLayout;
