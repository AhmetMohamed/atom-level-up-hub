
import React from 'react';
import { motion } from 'framer-motion';

const TrustLogos = () => {
  // Selected 5 prominent institutions for the single row with infinite scrolling
  const logos = [
    { name: 'Harvard University', logo: '/lovable-uploads/a25a2f66-fb7e-4bd4-b968-2dc15663f898.png', bgColor: 'bg-blue-50' },
    { name: 'MIT', logo: 'M', bgColor: 'bg-slate-100', textColor: 'text-slate-800' },
    { name: 'Stanford', logo: 'S', bgColor: 'bg-red-50', textColor: 'text-red-700' },
    { name: 'National Science Foundation', logo: 'NSF', bgColor: 'bg-blue-50', textColor: 'text-blue-800' },
    { name: 'NASA', logo: 'N', bgColor: 'bg-indigo-50', textColor: 'text-indigo-800' },
  ];

  // Duplicate logos for the infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
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

        {/* Single row with infinite scroll and gradient overlay effect */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div
            className="flex items-center justify-center gap-12 py-8"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                {logo.logo.startsWith('/') ? (
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-3 shadow-sm overflow-hidden`}>
                    <img 
                      src={logo.logo} 
                      alt={logo.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-xl ${logo.bgColor} flex items-center justify-center mr-3 ${logo.textColor || 'text-gray-800'} font-bold shadow-sm`}>
                    {logo.logo}
                  </div>
                )}
                <span className="font-medium whitespace-nowrap">{logo.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Second infinite scroll row going the opposite direction for a better effect */}
          <motion.div
            className="flex items-center justify-center gap-12 py-8"
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div 
                key={`second-${index}`} 
                className="flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                {logo.logo.startsWith('/') ? (
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-3 shadow-sm overflow-hidden`}>
                    <img 
                      src={logo.logo} 
                      alt={logo.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-xl ${logo.bgColor} flex items-center justify-center mr-3 ${logo.textColor || 'text-gray-800'} font-bold shadow-sm`}>
                    {logo.logo}
                  </div>
                )}
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
