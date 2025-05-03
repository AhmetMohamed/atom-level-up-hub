
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SignIn = () => {
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
                  <span className="animate-pulse-light">Welcome Back</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter mb-4">
                Sign in to continue your science journey
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Pick up where you left off with your interactive lessons, challenges, and XP rewards.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full border-2 border-science-primary flex items-center justify-center bg-science-light">
                  <span className="text-science-primary font-bold text-xl">7</span>
                </div>
                <div>
                  <p className="font-medium">Your current streak</p>
                  <p className="text-sm text-muted-foreground">
                    Sign in today to keep it going!
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4 bg-muted/40">
                <p className="text-sm">
                  <span className="font-medium">Did you know?</span> Regular practice for just 15 minutes a day can improve your science understanding by up to 40%.
                </p>
              </div>
            </div>
          </div>
          
          <div className="science-card max-w-md mx-auto w-full bg-white">
            <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
            <form className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-science-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input-science"
                />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me for 30 days
                </label>
              </div>
              <Button className="w-full bg-science-primary hover:bg-science-primary/90 mt-4">
                Sign In
              </Button>
              <div className="text-center mt-4 text-sm">
                Don't have an account yet?{" "}
                <Link to="/signup" className="text-science-primary hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </form>
            <div className="mt-8 pt-6 border-t">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Or continue with
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
