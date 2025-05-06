
import React, { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart,
  Users,
  BookOpen,
  CreditCard,
  FileText,
  Settings,
  Bell,
  User,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <BarChart className="h-5 w-5" />,
      current: location.pathname === "/admin",
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
      current: location.pathname === "/admin/users",
    },
    {
      name: "Content",
      href: "/admin/content",
      icon: <BookOpen className="h-5 w-5" />,
      current: location.pathname === "/admin/content",
    },
    {
      name: "Payments",
      href: "/admin/payments",
      icon: <CreditCard className="h-5 w-5" />,
      current: location.pathname === "/admin/payments",
    },
    {
      name: "Reports",
      href: "/admin/reports",
      icon: <FileText className="h-5 w-5" />,
      current: location.pathname === "/admin/reports",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
      current: location.pathname === "/admin/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            <Link to="/admin" className="ml-2 font-bold text-xl">
              Admin Portal
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="bg-white border-b p-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    item.current
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="mr-3">{item.icon}</div>
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t">
                <Button
                  variant="ghost"
                  className="flex items-center w-full text-left text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Log out
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 border-r bg-white">
              <div className="flex items-center h-16 flex-shrink-0 px-4 border-b">
                <Link to="/admin" className="font-bold text-xl">
                  Admin Portal
                </Link>
              </div>
              <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
                <nav className="flex-1 px-3 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        item.current
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <div className="mr-3">{item.icon}</div>
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">
                      admin@example.com
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="flex items-center w-full mt-4 text-left text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Log out
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
