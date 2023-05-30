import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="h-screen flex items-center justify-center">
        <motion.div
          className="max-w-lg bg-gray-300 border border-black rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-300 text-white py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
