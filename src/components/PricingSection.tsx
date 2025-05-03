
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    price: { monthly: "Free", annually: "Free" },
    description: "Essential features for casual learners.",
    features: [
      "Limited access to interactive lessons",
      "Basic quizzes for core topics",
      "Community forum access",
      "Progress tracking",
    ],
    cta: "Sign Up for Free",
    mostPopular: false,
  },
  {
    name: "Premium",
    id: "tier-premium",
    price: { monthly: "$7", annually: "$70" },
    description: "Everything you need to excel in your science exams.",
    features: [
      "Unlimited access to all lessons and content",
      "Advanced quizzes with detailed solutions",
      "Timed exam challenges with real past questions",
      "Downloadable revision resources",
      "Personalized study dashboard",
      "Priority support",
    ],
    cta: "Get Started",
    mostPopular: true,
  },
  {
    name: "School",
    id: "tier-school",
    price: { monthly: "Custom", annually: "Custom" },
    description: "Perfect for schools and educational institutions.",
    features: [
      "Everything in Premium",
      "Teacher admin dashboard",
      "Class management tools",
      "Student performance analytics",
      "Custom content creation",
      "Bulk enrollment discounts",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    mostPopular: false,
  },
];

const PricingSection = () => {
  const [frequency, setFrequency] = React.useState("monthly");

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 max-w-[800px] mx-auto mb-16">
          <div className="inline-block">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-science-light text-science-primary">
              <span className="animate-pulse-light">Simple Pricing</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Choose the perfect plan for your learning goals
          </h2>
          <p className="text-muted-foreground text-lg">
            All plans include core features to help you level up your science knowledge and ace your exams.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center rounded-full border p-1 bg-muted">
            <button
              onClick={() => setFrequency("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                frequency === "monthly"
                  ? "bg-white text-science-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setFrequency("annually")}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                frequency === "annually"
                  ? "bg-white text-science-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annually
              <span className="ml-1 text-xs font-normal text-science-accent">Save 15%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`science-card flex flex-col h-full ${
                tier.mostPopular ? "border-science-primary ring-2 ring-science-primary/20" : ""
              }`}
            >
              {tier.mostPopular && (
                <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-science-primary text-white mb-4 self-start">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <div className="mt-2 mb-4">
                <span className="text-4xl font-bold">{tier.price[frequency]}</span>
                {tier.price[frequency] !== "Free" && tier.price[frequency] !== "Custom" && (
                  <span className="text-muted-foreground ml-1">
                    /{frequency === "monthly" ? "mo" : "yr"}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-science-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-science-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={tier.name === "School" ? "/contact" : "/signup"}>
                <Button
                  className={`w-full ${
                    tier.mostPopular
                      ? "bg-science-primary hover:bg-science-primary/90"
                      : "bg-white border-2 border-science-primary/30 text-science-primary hover:bg-science-light"
                  }`}
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 p-6 science-card bg-science-light/50 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-2">Need help choosing?</h3>
          <p className="text-muted-foreground mb-4">
            Unsure which plan is right for you? Contact our friendly team for personalized advice.
          </p>
          <Link to="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
