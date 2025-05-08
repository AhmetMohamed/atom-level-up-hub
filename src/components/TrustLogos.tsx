
import React from 'react';
import { motion } from 'framer-motion';

const TrustLogos = () => {
  // Selected 5 prominent institutions for the single row
  const logos = [
    { name: 'Harvard University', logo: 'H', bgColor: 'bg-red-100', textColor: 'text-red-800' },
    { name: 'MIT', logo: 'M', bgColor: 'bg-slate-100', textColor: 'text-slate-800' },
    { name: 'Stanford', logo: 'S', bgColor: 'bg-red-100', textColor: 'text-red-700' },
    { name: 'National Science Foundation', logo: 'NSF', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    { name: 'NASA', logo: 'N', bgColor: 'bg-indigo-100', textColor: 'text-indigo-800' },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
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

        {/* Single row with gradient overlay effect */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div
            className="flex items-center justify-center gap-12 py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {logos.map((logo, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 rounded-xl ${logo.bgColor} flex items-center justify-center mr-3 ${logo.textColor} font-bold shadow-sm`}>
                  {logo.logo}
                </div>
                <span className="font-medium whitespace-nowrap">{logo.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
