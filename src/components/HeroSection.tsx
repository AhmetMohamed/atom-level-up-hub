
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Trophy, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-science-light text-science-primary">
                <span className="animate-pulse-light">
                  🚀 Level up your science skills
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter animate-fade-in">
                Learn Science<br />
                <span className="text-science-primary">The Fun Way</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover interactive lessons, earn XP, complete challenges, and ace your exams with confidence.
                ScienceHub makes learning science feel like a game.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/signup">
                <Button className="bg-science-primary hover:bg-science-primary/90 h-12 px-6 text-base">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/subjects">
                <Button variant="outline" className="h-12 px-6 text-base">
                  Explore Subjects
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-science-light">
                  <Book className="h-4 w-4 text-science-primary" />
                </div>
                <span className="font-medium">Interactive Lessons</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-science-light">
                  <Trophy className="h-4 w-4 text-science-primary" />
                </div>
                <span className="font-medium">Gamified Learning</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-science-light">
                  <Award className="h-4 w-4 text-science-primary" />
                </div>
                <span className="font-medium">Exam Success</span>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-science-primary/30 to-science-secondary/30 rounded-3xl blur-3xl opacity-30 animate-pulse-light"></div>
            <div className="rounded-3xl bg-science-light p-4 shadow-xl relative overflow-hidden border border-science-primary/20 animate-scale-in">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-lg text-science-dark">Chemistry Basics</h3>
                    <p className="text-sm text-muted-foreground">Atomic Structure</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="badge-level">Level 3</span>
                    <span className="badge-xp">+25 XP</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <p className="font-medium">What is the atomic number?</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border flex items-center justify-center"></div>
                        <span>The number of neutrons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-science-primary flex items-center justify-center">
                          <svg
                            className="h-3 w-3 text-white"
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
                        <span className="font-medium">The number of protons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border flex items-center justify-center"></div>
                        <span>The number of electrons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border flex items-center justify-center"></div>
                        <span>The sum of protons and neutrons</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Progress</div>
                      <div className="text-sm font-medium">75%</div>
                    </div>
                    <div className="progress-container">
                      <div className="progress-bar" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-science-primary hover:bg-science-primary/90">
                    Continue Learning
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-science-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
