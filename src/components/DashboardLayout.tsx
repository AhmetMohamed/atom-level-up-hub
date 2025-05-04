
import React, { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Book,
  Trophy,
  FileText,
  Clock,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  Microscope,
  FlaskConical,
  Calculator,
  Dna,
  ChevronDown,
  ChevronUp,
  Award
} from "lucide-react";
import { toast } from "sonner";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subjectsExpanded, setSubjectsExpanded] = useState(true);

  const mainLinks = [
    {
      title: "Home",
      href: "/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      title: "Resources",
      href: "/resources",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "Challenges",
      href: "/challenges",
      icon: <Award className="w-5 h-5" />,
    }
  ];

  const subjectLinks = [
    {
      title: "Biology",
      href: "/subjects/biology",
      icon: <Dna className="w-5 h-5" />,
      color: "text-green-600",
    },
    {
      title: "Chemistry",
      href: "/subjects/chemistry",
      icon: <FlaskConical className="w-5 h-5" />,
      color: "text-blue-600",
    },
    {
      title: "Physics",
      href: "/subjects/physics",
      icon: <Microscope className="w-5 h-5" />,
      color: "text-purple-600",
    },
    {
      title: "Mathematics",
      href: "/subjects/mathematics",
      icon: <Calculator className="w-5 h-5" />,
      color: "text-red-600",
    },
  ];

  const handleLogout = () => {
    toast.success("You have been logged out.");
    // Normally we would handle the actual logout logic here
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
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
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🧪</span>
              <span className="font-bold text-xl hidden sm:inline-block">
                ScienceHub
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="badge-level bg-science-light/70 text-science-primary px-3 py-1 rounded-full text-xs font-medium">
                Level 7
              </div>
              <div className="badge-xp bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                1,250 XP
              </div>
              <div className="badge-streak bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                5 Day Streak 🔥
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full border">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar for desktop */}
        <aside className="w-64 border-r hidden lg:block shrink-0">
          <div className="h-full flex flex-col p-4">
            <nav className="space-y-1 flex-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                    location.pathname === link.href &&
                      "bg-science-light text-science-primary hover:bg-science-light"
                  )}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              ))}

              <Collapsible
                open={subjectsExpanded}
                onOpenChange={setSubjectsExpanded}
                className="mt-4 border-t pt-4"
              >
                <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <Book className="w-5 h-5" />
                    <span className="font-medium">Subjects</span>
                  </div>
                  {subjectsExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-2 mt-1 space-y-1">
                  {subjectLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                        location.pathname === link.href &&
                          "bg-science-light text-science-primary hover:bg-science-light",
                        location.pathname.includes(link.href) &&
                          "text-science-primary"
                      )}
                    >
                      <div className={link.color}>{link.icon}</div>
                      <span>{link.title}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </nav>

            <div className="border-t pt-4 space-y-1">
              <Link
                to="/settings"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
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
            <div className="fixed inset-y-0 left-0 w-64 bg-background p-4 border-r animate-slide-right">
              <div className="flex justify-between items-center mb-4">
                <Link to="/" className="flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  <span className="font-bold text-xl">ScienceHub</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <div className="badge-level bg-science-light/70 text-science-primary px-3 py-1 rounded-full text-xs font-medium">
                  Level 7
                </div>
                <div className="badge-xp bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                  1,250 XP
                </div>
                <div className="badge-streak bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                  5 Day Streak 🔥
                </div>
              </div>

              <nav className="space-y-1">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={toggleSidebar}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                      location.pathname === link.href &&
                        "bg-science-light text-science-primary hover:bg-science-light"
                    )}
                  >
                    {link.icon}
                    <span>{link.title}</span>
                  </Link>
                ))}

                <Collapsible className="mt-4 border-t pt-4">
                  <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <Book className="w-5 h-5" />
                      <span className="font-medium">Subjects</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-2 mt-1 space-y-1">
                    {subjectLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={toggleSidebar}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                          location.pathname === link.href &&
                            "bg-science-light text-science-primary hover:bg-science-light"
                        )}
                      >
                        <div className={link.color}>{link.icon}</div>
                        <span>{link.title}</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <div className="border-t my-4 pt-4">
                  <Link
                    to="/settings"
                    onClick={toggleSidebar}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
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
              </nav>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
