import React from "react";
import { motion } from "framer-motion";
import {MdDeveloperMode} from "react-icons/md"

function Card({ title }) {
  return (
    <div>
      <motion.div
        className="h-24 sm:w-40 md:w-52 lg:w-64 bg-gray-200 rounded-md shadow-md flex gap-3 items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MdDeveloperMode className="text-xl"/>
        <h3 className="text-xl">{title}</h3>
      </motion.div>
    </div>
  );
}

function Service() {
  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
    <div className="h-screen items-center justify-center">
      <div className="grid">
        <motion.h3
          className="text-gray-600 text-3xl font-semibold text-center mb-4 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services.
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-lg w-1/2 bg-yellow-300"></span>
        </motion.h3>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* card */}
          <Card title="HTML" />
          <Card title="CSS" />
          <Card title="PHP" />
          <Card title="Python" />

          <Card title="Flask Development" />
          <Card title="Django Development" />
          <Card title="AI/ML Development" />
          <Card title="Database Development" />
          
        </div>
      </div>
    </div>
  </div>
  );
}

export default Service;
