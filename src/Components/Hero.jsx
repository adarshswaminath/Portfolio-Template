import React from "react";
import { motion } from 'framer-motion';
import image from "../assets/hero.svg";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
function Hero() {
  return (
    <div>
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state of the animation
        animate={{ opacity: 1, y: 0 }} // Final state of the animation
        transition={{ duration: 0.5 }} // Animation duration
        className="grid h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Initial state of the animation
            animate={{ opacity: 1, y: 0 }} // Final state of the animation
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
            className="mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl"
          >
            HEY I'AM Adarsh, A <span className="modern-strike">CREATIVE</span> DEVELOPER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Initial state of the animation
            animate={{ opacity: 1, y: 0 }} // Final state of the animation
            transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
            className="max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
          >
            <div className="mr-3 inline-flex gap-8 text-2xl items-center">
              <a href="#">
                <BsGithub className="hover:text-black" />
              </a>
              <a href="#">
                <BsTwitter className="hover:text-blue-500" />
              </a>
              <a href="#">
                <BsLinkedin className="hover:text-blue-700" />
              </a>
            </div>
          </motion.p>
          <motion.a
            href="mailto:sample@gmail.com"
            initial={{ opacity: 0, y: 20 }} // Initial state of the animation
            animate={{ opacity: 1, y: 0 }} // Final state of the animation
            transition={{ duration: 0.5, delay: 0.6 }} // Animation duration and delay
            className="mr-3 inline-flex bg-white items-center justify-center px-5 py-2 text-base font-medium text-center text-gray-900 border border-black rounded-full"
          >
            Let's talk
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </motion.a>
          <motion.a
            href="mailto:sample@gmail.com"
            initial={{ opacity: 0, y: 20 }} // Initial state of the animation
            animate={{ opacity: 1, y: 0 }} // Final state of the animation
            transition={{ duration: 0.5, delay: 0.8 }} // Animation duration and delay
            className="inline-flex bg-yellow-300 items-center justify-center px-5 py-2 text-base font-medium text-center text-gray-900 border rounded-full"
          >
            Let's Discuss
          </motion.a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }} // Initial state of the animation
            animate={{ opacity: 1, scale: 1 }} // Final state of the animation
            transition={{ duration: 0.5, delay: 1 }} // Animation duration and delay
            src={image} // Replace 'image' with your actual image source
            alt="mockup"
          />
        </div>
      </motion.div>
    </section>
  </div>
  );
}

export default Hero;
