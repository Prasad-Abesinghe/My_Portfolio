import React from "react";
import { motion } from "framer-motion";
import TestmonialSlider from "./TestmonialSlider";

const Services = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        initial={{ opacity: 0, x: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className=" my-10 text-center text-4xl"
      >
        Services
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        initial={{ opacity: 0, x: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className=" pt-[5rem] pb-[4rem] w-[80%] mx-auto "
      >
        <TestmonialSlider />
      </motion.div>
    </div>
  );
};

export default Services;
