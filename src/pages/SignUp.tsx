
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container max-w-screen-xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center mb-8 text-sm font-medium text-science-primary hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="max-w-md">
              <div className="inline-block">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-science-light text-science-primary mb-6">
                  <span className="animate-pulse-light">Get Started Today</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter mb-4">
                Join ScienceHub and level up your science skills
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Create your account and start exploring interactive lessons, earning XP, and acing your exams.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-science-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="h-4 w-4 text-science-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Access interactive lessons and quizzes</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-science-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="h-4 w-4 text-science-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Earn XP and track your progress</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-science-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="h-4 w-4 text-science-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Practice with exam-style challenges</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-science-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="h-4 w-4 text-science-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Download revision resources</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="science-card max-w-md mx-auto w-full bg-white">
            <h2 className="text-2xl font-bold mb-6">Create your account</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="Enter your first name"
                    className="input-science"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Enter your last name"
                    className="input-science"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input-science"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="input-science"
                />
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.
                </p>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link to="/terms" className="text-science-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-science-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
              <Button className="w-full bg-science-primary hover:bg-science-primary/90 mt-4">
                Create Account
              </Button>
              <div className="text-center mt-4 text-sm">
                Already have an account?{" "}
                <Link to="/signin" className="text-science-primary hover:underline font-medium">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
