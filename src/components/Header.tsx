
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-science-primary w-8 h-8 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-display font-bold text-xl text-science-dark">
            ScienceHub
          </span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/"
            className="text-muted-foreground hover:text-science-primary transition-colors"
          >
            Home
          </Link>
          
          {/* Subjects dropdown */}
          <div className="relative">
            <DropdownMenu open={isSubjectsOpen} onOpenChange={setIsSubjectsOpen}>
              <DropdownMenuTrigger asChild>
                <button 
                  className="text-muted-foreground hover:text-science-primary transition-colors flex items-center gap-1"
                >
                  Subjects
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/subjects/biology" className="w-full cursor-pointer">Biology</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/subjects/chemistry" className="w-full cursor-pointer">Chemistry</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/subjects/physics" className="w-full cursor-pointer">Physics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/subjects/mathematics" className="w-full cursor-pointer">Mathematics</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Link 
            to="/resources"
            className="text-muted-foreground hover:text-science-primary transition-colors"
          >
            Resources
          </Link>
          <Link 
            to="/pricing"
            className="text-muted-foreground hover:text-science-primary transition-colors"
          >
            Pricing
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-science-primary hover:bg-science-primary/90">Get Started</Button>
          </Link>
        </div>
        
        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 py-6">
              <Link 
                to="/"
                className="text-lg font-semibold hover:text-science-primary transition-colors"
              >
                Home
              </Link>
              
              <div className="space-y-3">
                <p className="text-lg font-semibold">Subjects</p>
                <div className="pl-4 border-l border-muted space-y-2">
                  <Link 
                    to="/subjects/biology"
                    className="block text-muted-foreground hover:text-science-primary transition-colors"
                  >
                    Biology
                  </Link>
                  <Link 
                    to="/subjects/chemistry"
                    className="block text-muted-foreground hover:text-science-primary transition-colors"
                  >
                    Chemistry
                  </Link>
                  <Link 
                    to="/subjects/physics"
                    className="block text-muted-foreground hover:text-science-primary transition-colors"
                  >
                    Physics
                  </Link>
                  <Link 
                    to="/subjects/mathematics"
                    className="block text-muted-foreground hover:text-science-primary transition-colors"
                  >
                    Mathematics
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/resources"
                className="text-lg font-semibold hover:text-science-primary transition-colors"
              >
                Resources
              </Link>
              <Link 
                to="/pricing"
                className="text-lg font-semibold hover:text-science-primary transition-colors"
              >
                Pricing
              </Link>
              
              <div className="grid gap-3 mt-6">
                <Link to="/signin">
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full bg-science-primary hover:bg-science-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
