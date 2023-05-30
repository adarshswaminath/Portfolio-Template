import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, content }) => {
  return (
    <motion.div
      className="flex justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="max-w-xs p-4 bg-gray-300 border border-black rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-gray-700 text-sm">{content}</p>
      </div>
    </motion.div>
  );
};

function Projects() {
  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="h-screen items-center justify-center">
        <motion.h1
          className="text-3xl font-semibold text-center mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        {/* cards */}
        <motion.div
          className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.1 } },
          }}
        >
          {/* card */}
          <motion.div variants={{ hidden: { scale: 0.8 }, visible: { scale: 1 } }}>
            <Card
              title="School Management System"
              content="Excepteur cupidatat in Lorem culpa adipisicing officia dolore sunt aute pariatur eu sunt do. Irure est velit velit esse ea mollit tempor eu laborum deserunt eu ut. Cillum quis quis officia velit pariatur sint quis fugiat do esse. Ex reprehenderit qui fugiat qui ad commodo. Ad nulla excepteur laborum laboris ea et elit anim nulla."
            />
          </motion.div>
          <motion.div variants={{ hidden: { scale: 0.8 }, visible: { scale: 1 } }}>
            <Card
              title="ML Projects"
              content="Excepteur cupidatat in Lorem culpa adipisicing officia dolore sunt aute pariatur eu sunt do. Irure est velit velit esse ea mollit tempor eu laborum deserunt eu ut. Cillum quis quis officia velit pariatur sint quis fugiat do esse. Ex reprehenderit qui fugiat qui ad commodo. Ad nulla excepteur laborum laboris ea et elit anim nulla."
            />
          </motion.div>
          <motion.div variants={{ hidden: { scale: 0.8 }, visible: { scale: 1 } }}>
            <Card
              title="AI Projects"
              content="Excepteur cupidatat in Lorem culpa adipisicing officia dolore sunt aute pariatur eu sunt do. Irure est velit velit esse ea mollit tempor eu laborum deserunt eu ut. Cillum quis quis officia velit pariatur sint quis fugiat do esse. Ex reprehenderit qui fugiat qui ad commodo. Ad nulla excepteur laborum laboris ea et elit anim nulla."
            />
          </motion.div>
          <motion.div variants={{ hidden: { scale: 0.8 }, visible: { scale: 1 } }}>
            <Card
              title="School Management System"
              content="Excepteur cupidatat in Lorem culpa adipisicing officia dolore sunt aute pariatur eu sunt do. Irure est velit velit esse ea mollit tempor eu laborum deserunt eu ut. Cillum quis quis officia velit pariatur sint quis fugiat do esse. Ex reprehenderit qui fugiat qui ad commodo. Ad nulla excepteur laborum laboris ea et elit anim nulla."
            />
          </motion.div>
          <motion.div variants={{ hidden: { scale: 0.8 }, visible: { scale: 1 } }}>
            <Card
              title="School Management System"
              content="Excepteur cupidatat in Lorem culpa adipisicing officia dolore sunt aute pariatur eu sunt do. Irure est velit velit esse ea mollit tempor eu laborum deserunt eu ut. Cillum quis quis officia velit pariatur sint quis fugiat do esse. Ex reprehenderit qui fugiat qui ad commodo. Ad nulla excepteur laborum laboris ea et elit anim nulla."
            />
          </motion.div>
          <motion.div variants={{ hidden: { scale: 0.8 }, visible: { scale: 1 } }}>
            <Card
              title="School Management System"
              content="Excepteur cupidatat in Lorem culpa adipisicing officia dolore sunt aute pariatur eu sunt do. Irure est velit velit esse ea mollit tempor eu laborum deserunt eu ut. Cillum quis quis officia velit pariatur sint quis fugiat do esse. Ex reprehenderit qui fugiat qui ad commodo. Ad nulla excepteur laborum laboris ea et elit anim nulla."
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
