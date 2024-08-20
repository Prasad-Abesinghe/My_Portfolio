import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <motion.nav
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      initial={{ opacity: 0, x: 0, scale: 0 }}
      transition={{ duration: 1.2 }}
      className="w-[100%] top-0 h-[12vh]"
    >
      <div className=" lg:mx-40 flex items-center justify-between  mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[30px] text-white font-bold">
          L<span className="text-red-600">p</span>A
        </h1>
        <div className="nav-link">HOME</div>
        <div className="nav-link"><a href="#services">SERVICES</a></div>
        <div className="nav-link"><a href="#about">ABOUT</a></div>
        <div className="nav-link"><a href="#project">PROJECT</a></div>
        <div className="nav-link"><a href="#qualifications">QUALIFICATIONS</a></div>
        <div className="nav-link"><a href="#contact">CONTACT</a></div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
