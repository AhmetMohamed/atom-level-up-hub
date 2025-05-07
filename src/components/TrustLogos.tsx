
import React from 'react';
import { motion } from 'framer-motion';

const TrustLogos = () => {
  // Sample company logos with actual company names and logos
  const logos = [
    { name: 'Harvard University', logo: 'H', bgColor: 'bg-red-100', textColor: 'text-red-800' },
    { name: 'MIT', logo: 'M', bgColor: 'bg-slate-100', textColor: 'text-slate-800' },
    { name: 'Stanford', logo: 'S', bgColor: 'bg-red-100', textColor: 'text-red-700' },
    { name: 'National Science Foundation', logo: 'NSF', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    { name: 'NASA', logo: 'N', bgColor: 'bg-indigo-100', textColor: 'text-indigo-800' },
    { name: 'Science Academy', logo: 'SA', bgColor: 'bg-green-100', textColor: 'text-green-800' },
    { name: 'Google Education', logo: 'G', bgColor: 'bg-amber-100', textColor: 'text-amber-800' },
    { name: 'Microsoft Learn', logo: 'M', bgColor: 'bg-sky-100', textColor: 'text-sky-800' },
    { name: 'Cambridge University Press', logo: 'C', bgColor: 'bg-emerald-100', textColor: 'text-emerald-800' },
    { name: 'Oxford Learning', logo: 'O', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    { name: 'Princeton', logo: 'P', bgColor: 'bg-orange-100', textColor: 'text-orange-800' },
    { name: 'Yale University', logo: 'Y', bgColor: 'bg-blue-100', textColor: 'text-blue-800' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Trusted by Leading Institutions</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Our science learning platform is used by top universities and educational organizations worldwide.
          </p>
        </motion.div>

        {/* First infinite scroll row - left to right */}
        <div className="relative overflow-hidden h-28 mb-8">
          <motion.div
            className="absolute flex items-center gap-12"
            animate={{ x: [0, -2000] }}
            transition={{
              x: { 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 40, 
                ease: "linear" 
              }
            }}
          >
            {/* Duplicate logos for continuous scroll effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={`row1-${index}`} className="flex items-center justify-center">
                <div className={`w-14 h-14 rounded-xl ${logo.bgColor} flex items-center justify-center mr-3 ${logo.textColor} font-bold shadow-sm`}>
                  {logo.logo}
                </div>
                <span className="font-medium whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second infinite scroll row - right to left (opposite direction) */}
        <div className="relative overflow-hidden h-28">
          <motion.div
            className="absolute flex items-center gap-12"
            animate={{ x: [-2000, 0] }} 
            transition={{
              x: { 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 45, 
                ease: "linear" 
              }
            }}
          >
            {/* Duplicate logos for continuous scroll effect */}
            {[...logos.slice(6), ...logos].map((logo, index) => (
              <div key={`row2-${index}`} className="flex items-center justify-center">
                <div className={`w-14 h-14 rounded-xl ${logo.bgColor} flex items-center justify-center mr-3 ${logo.textColor} font-bold shadow-sm`}>
                  {logo.logo}
                </div>
                <span className="font-medium whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
