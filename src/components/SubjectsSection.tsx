import { Book, AtomIcon, TestTube, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const SubjectsSection = () => {
  const subjects = [
    {
      title: "Biology",
      description:
        "Explore the science of life from cells to ecosystems and everything in between.",
      icon: <Book className="h-7 w-7 text-biology" />,
      link: "/subjects/biology",
      className:
        "bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-green-100/40",
      iconBg: "bg-green-100",
      delay: 0.1,
    },
    {
      title: "Physics",
      description:
        "Understand the fundamental laws that govern the physical world around us.",
      icon: <AtomIcon className="h-7 w-7 text-physics" />,
      link: "/subjects/physics",
      className:
        "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-blue-100/40",
      iconBg: "bg-blue-100",
      delay: 0.2,
    },
    {
      title: "Chemistry",
      description:
        "Discover the properties, composition, and transformations of matter.",
      icon: <TestTube className="h-7 w-7 text-chemistry" />,
      link: "/subjects/chemistry",
      className:
        "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-purple-100/40",
      iconBg: "bg-purple-100",
      delay: 0.3,
    },
    {
      title: "Mathematics",
      description:
        "Master the language of numbers, shapes, and patterns essential to science.",
      icon: <BookOpen className="h-7 w-7 text-math" />,
      link: "/subjects/math",
      className:
        "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-amber-100/40",
      iconBg: "bg-amber-100",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Science Subjects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive into our comprehensive collection of lessons, quizzes, and
            resources for each scientific discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: subject.delay }}
            >
              <SubjectCard
                title={subject.title}
                description={subject.description}
                icon={subject.icon}
                link={subject.link}
                className={subject.className}
                iconBg={subject.iconBg}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface SubjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  iconBg?: string;
}

const SubjectCard = ({
  title,
  description,
  icon,
  link,
  className,
  iconBg,
}: SubjectCardProps) => {
  return (
    <a href={link} className={`block group h-full`}>
      <div
        className={`rounded-xl overflow-hidden p-6 border transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 ${className}`}
      >
        <div className="flex justify-between items-start mb-4">
          <div
            className={`rounded-full ${iconBg} p-3 group-hover:scale-110 transition-transform duration-300`}
          >
            {icon}
          </div>
          <div className="bg-white/80 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
            {title[0]}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>

        <div className="mt-auto pt-4">
          <div className="inline-flex items-center text-sm font-medium text-primary">
            Explore {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SubjectsSection;
