
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
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
          <Link 
            to="/subjects/biology"
            className="text-muted-foreground hover:text-science-primary transition-colors"
          >
            Biology
          </Link>
          <Link 
            to="/subjects/chemistry"
            className="text-muted-foreground hover:text-science-primary transition-colors"
          >
            Chemistry
          </Link>
          <Link 
            to="/subjects/physics"
            className="text-muted-foreground hover:text-science-primary transition-colors"
          >
            Physics
          </Link>
          <Link 
            to="/subjects/mathematics"
            className="text-muted-foreground hover:text-science-primary transition-colors"
          >
            Math
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
              <Link 
                to="/subjects/biology"
                className="text-lg font-semibold hover:text-science-primary transition-colors"
              >
                Biology
              </Link>
              <Link 
                to="/subjects/chemistry"
                className="text-lg font-semibold hover:text-science-primary transition-colors"
              >
                Chemistry
              </Link>
              <Link 
                to="/subjects/physics"
                className="text-lg font-semibold hover:text-science-primary transition-colors"
              >
                Physics
              </Link>
              <Link 
                to="/subjects/mathematics"
                className="text-lg font-semibold hover:text-science-primary transition-colors"
              >
                Math
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
