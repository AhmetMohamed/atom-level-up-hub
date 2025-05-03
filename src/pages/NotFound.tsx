
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <div className="inline-block mb-8">
            <div className="bg-science-light text-science-primary text-6xl font-bold h-32 w-32 rounded-2xl flex items-center justify-center">
              404
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-science-primary hover:bg-science-primary/90">
                Back to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Support</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
