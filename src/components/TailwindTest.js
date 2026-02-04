import React from 'react';
import { motion } from 'framer-motion';

const TailwindTest = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Tailwind + Framer Motion
        </h1>
        <p className="text-gray-600 mb-6">
          If you see this styled and animated, both libraries are working correctly!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Click Me!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default TailwindTest;
