import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.section
      className="px-6 py-12 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-4xl font-title text-center mb-4 mt-8">My Résumé</h2>

      <div className="max-w-4xl mx-auto shadow-lg rounded overflow-hidden">
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTwejcfjfJYr-C1NZH0wbSApA6NNPRgvpXvWHkNqALVA7oeJf3O2SkQCZgBCe3Acg/pub?embedded=true"
          title="Resume PDF"
          className="w-full h-[600px] md:h-[700px] rounded"
        ></iframe>
      </div>
    </motion.section>
  );
}
