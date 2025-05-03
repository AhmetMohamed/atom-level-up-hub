
import React from "react";

const testimonials = [
  {
    content:
      "ScienceHub helped me understand complex chemistry concepts through interactive lessons and practice quizzes. I went from struggling to getting an A in my final exam!",
    author: "Emily R.",
    role: "High School Student, Grade 11",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    content:
      "The gamified approach made studying physics actually fun for the first time. I found myself wanting to log in every day to maintain my streak and climb the leaderboard.",
    author: "Michael T.",
    role: "High School Student, Grade 12",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    content:
      "As a parent, I've seen my daughter's interest in biology grow significantly since using ScienceHub. The platform's engaging approach has made a real difference in her grades.",
    author: "Sarah L.",
    role: "Parent of High School Student",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    content:
      "The timed exam challenges were perfect preparation for my final exams. They helped me manage my time better and reduced test anxiety significantly.",
    author: "David K.",
    role: "High School Student, Grade 10",
    image: "https://i.pravatar.cc/100?img=7",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-science-light/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 max-w-[800px] mx-auto mb-16">
          <div className="inline-block">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-white text-science-primary">
              <span className="animate-pulse-light">Success Stories</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            What our students are saying
          </h2>
          <p className="text-muted-foreground text-lg">
            Students who use ScienceHub regularly see significant improvements in their understanding and exam scores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="science-card bg-white hover:border-science-primary/30"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg
                    className="h-8 w-8 text-science-primary opacity-40"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-lg mb-6 flex-grow">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
