
import React from 'react';
import { motion } from 'framer-motion';

const TrustLogos = () => {
  // Sample company logos (using placeholder names - replace with actual logos in a real app)
  const logos = [
    { name: 'Harvard University', initial: 'H' },
    { name: 'MIT', initial: 'M' },
    { name: 'Stanford', initial: 'S' },
    { name: 'National Science Foundation', initial: 'NSF' },
    { name: 'NASA', initial: 'N' },
    { name: 'Science Academy', initial: 'SA' },
    { name: 'Google Education', initial: 'G' },
    { name: 'Microsoft Learn', initial: 'M' },
    { name: 'Cambridge University Press', initial: 'C' },
    { name: 'Oxford Learning', initial: 'O' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // First row logos (visible)
  const firstRowLogos = logos.slice(0, 5);
  // Second row logos (for infinite scroll effect)
  const secondRowLogos = logos.slice(5);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-medium text-gray-500">Trusted by leading educational institutions</h2>
        </motion.div>

        {/* First row of logos */}
        <motion.div
          className="flex justify-center items-center flex-wrap gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {firstRowLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center justify-center h-12">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-gray-500 font-semibold">
                  {logo.initial}
                </div>
                <span className="text-gray-600 font-medium">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row with infinite scroll effect */}
        <div className="relative overflow-hidden h-20">
          <motion.div
            className="absolute flex space-x-12 items-center"
            animate={{ x: [0, -1000] }}
            transition={{
              x: { 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 30, 
                ease: "linear" 
              }
            }}
          >
            {/* Duplicate logos for continuous scroll effect */}
            {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-gray-500 font-semibold">
                  {logo.initial}
                </div>
                <span className="text-gray-600 font-medium whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
