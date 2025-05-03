
import React from "react";
import { Clock, Book, Check, Trophy, Star, Medal } from "lucide-react";

const features = [
  {
    icon: <Book className="h-10 w-10 text-science-primary" />,
    title: "Interactive Lessons",
    description:
      "Immersive lessons with quizzes that test your understanding as you progress through topics.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-science-accent" />,
    title: "Gamified Learning",
    description:
      "Earn XP points, unlock badges, level up, and maintain daily streaks to make learning feel like a game.",
  },
  {
    icon: <Clock className="h-10 w-10 text-science-secondary" />,
    title: "Timed Exam Challenges",
    description:
      "Practice with real exam-style questions under timed conditions to simulate test environments.",
  },
  {
    icon: <Check className="h-10 w-10 text-science-success" />,
    title: "Downloadable Resources",
    description:
      "Access past papers, mock exams, and revision materials to enhance your study experience.",
  },
  {
    icon: <Star className="h-10 w-10 text-amber-500" />,
    title: "Leaderboards",
    description:
      "Compete with peers, track top performers, and motivate yourself through friendly competition.",
  },
  {
    icon: <Medal className="h-10 w-10 text-science-primary" />,
    title: "Exam Success",
    description:
      "Designed specifically to help students level up their science skills and pass exams with confidence.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 max-w-[800px] mx-auto mb-16">
          <div className="inline-block">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-science-light text-science-primary">
              <span className="animate-pulse-light">Features</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Everything you need to excel in science
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform combines interactive learning with gamification to make science education effective and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="science-card hover:border-science-primary/30 flex flex-col items-start"
            >
              <div className="h-16 w-16 rounded-2xl bg-science-light/70 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
