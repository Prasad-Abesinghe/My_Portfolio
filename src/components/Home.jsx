import React from "react";
import {
  FaArrowDown,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import profilePic from "../assets/profile3.gif";
import Texteffect from "./Texteffect";
import Particle from "./Particle";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, 10], // Change this to move in one direction
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
    },
  },
});

const varients = (duration) => ({
  initial: { x: -10 },
  animate: {
    x: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Home = () => {
  return (
    <div className=" lg:mx-40 border-b border-neutral-900 pb-4 ">
      <Particle />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.4 }}
              className=" pb-16 text-6xl font-bold tracking-tight lg:mt-16 lg:text-6xl"
            >
              Hey, I'm <span className="text-red-800">PRASAD</span>
            </motion.h1>
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Texteffect />
          </motion.div>

          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.8 }}
            className=" my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              variants={varients(2.5)}
              initial="initial"
              animate="animate"
              className="flex m-[2rem] ml-0 justify-between w-[50%] text-[25px] text-white font-bold"
            >
              <div className=" rounded-2xl border-4 border-neutral-800 p-4 ">
                <FaLinkedin className="cursor-pointer text-[#0a66c2] transition-transform duration-300 transform hover:text-red-500 hover:-translate-y-2" />
              </div>
              <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="cursor-pointer text-purple-800 transition-transform duration-300 transform hover:text-red-500 hover:-translate-y-2" />
              </div>
              <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaFacebook className="cursor-pointer text-[#1877f2] transition-transform duration-300 transform hover:text-red-500 hover:-translate-y-2" />
              </div>
              <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaInstagram className="cursor-pointer text-[#c32aa3] transition-transform duration-300 transform hover:text-red-500 hover:-translate-y-2" />
              </div>
              <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaTwitter className="cursor-pointer text-sky-700 transition-transform duration-300 transform hover:text-red-500 hover:-translate-y-2" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6"
          >
            <button
              className="px-[2rem] hover:bg-red-800 hover:text-neutral-900 transition-all duration-200 py-[1rem] rounded text-[18px] 
            font-bold uppercase bg-neutral-900 text-red-800 flex items-center space-x-2 relative overflow-hidden"
            >
              <p>Download CV</p>
              <FaArrowDown className="w-[1.5rem] h-[1.7rem] text-white" />
            </button>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            variants={container(2.5)}
            initial="initial"
            animate="animate"
            className=" flex  rounded-2xl mt-3 justify-center relative overflow-hidden"
          >
            <motion.img
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              initial={{ opacity: 0, x: -100, scale: 0 }}
              transition={{ duration: 1.2 }}
              src={profilePic}
              alt="profile"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
