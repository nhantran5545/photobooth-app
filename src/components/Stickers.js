import React from "react";
import { FaHeart, FaStar, FaSmileWink, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const Stickers = () => {
  const stickerVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    spin: {
      rotate: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <>
      <motion.div
        className="absolute top-20 left-10 text-4xl text-pink-500 hidden md:block"
        variants={stickerVariants}
        animate="float"
      >
        <FaHeart />
      </motion.div>
      <motion.div
        className="absolute top-40 right-10 text-4xl text-yellow-500 hidden md:block"
        variants={stickerVariants}
        animate="spin"
      >
        <FaStar />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-4xl text-blue-500 hidden md:block"
        variants={stickerVariants}
        animate="float"
      >
        <FaSmileWink />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-20 text-4xl text-purple-500 hidden md:block"
        variants={stickerVariants}
        animate="spin"
      >
        <FaRocket />
      </motion.div>
    </>
  );
};

export default Stickers;
