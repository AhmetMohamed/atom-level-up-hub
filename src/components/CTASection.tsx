import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-science-dark text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Ready to transform how you learn science?
            </h2>
            <p className="text-lg text-muted/80 max-w-[600px]">
              Join thousands of students who are leveling up their knowledge,
              enjoying the learning process, and acing their exams with
              ScienceHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="bg-science-primary hover:bg-science-primary/90 h-12 px-6">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-white/50 bg-transparent hover:bg-white/10 h-12 px-6"
                >
                  Talk to Us
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-science-dark overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt={`User avatar ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted/80">
                Joined by <span className="font-medium text-white">5,000+</span>{" "}
                students
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-science-primary/30 rounded-full blur-xl"></div>
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-science-primary/20 to-science-secondary/20 backdrop-blur-sm p-1">
              <div className="bg-science-dark rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">Your Daily Progress</h3>
                    <p className="text-sm text-muted/80">Monday, May 3</p>
                  </div>
                  <div className="badge-streak flex gap-1 items-center">
                    🔥 7 day streak
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Daily XP Goal</span>
                    <span>50/100 XP</span>
                  </div>
                  <div className="progress-container bg-white/10">
                    <div
                      className="progress-bar animate-progress-fill"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-lg border border-white/10 p-3 bg-white/5">
                    <div className="text-xs text-muted/80 mb-1">Total XP</div>
                    <div className="text-xl font-bold">1,240</div>
                  </div>
                  <div className="rounded-lg border border-white/10 p-3 bg-white/5">
                    <div className="text-xs text-muted/80 mb-1">
                      Current Level
                    </div>
                    <div className="text-xl font-bold">8</div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mt-2">
                  <div className="text-sm font-medium mb-3">
                    Suggested Next Lessons
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="font-medium">Chemical Bonding</div>
                        <div className="text-xs text-muted/80">
                          Chemistry • 15 min
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <div>
                        <div className="font-medium">Forces and Motion</div>
                        <div className="text-xs text-muted/80">
                          Physics • 20 min
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-science-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
