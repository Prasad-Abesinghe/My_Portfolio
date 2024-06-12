import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      initial={{ opacity: 0, x: 0, scale: 0 }}
      transition={{ duration: 1.2 }}
      className="w-[100%] top-0 h-[12vh]"
    >
      <div className="flex items-center justify-between  mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[30px] text-white font-bold">
          L<span className="text-red-600">p</span>A
        </h1>
        <div className="nav-link">HOME</div>
        <div className="nav-link">SERVICES</div>
        <div className="nav-link">ABOUT</div>
        <div className="nav-link">PROJECT</div>
        <div className="nav-link">BLOG</div>
        <div className="nav-link">CONTACT</div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
