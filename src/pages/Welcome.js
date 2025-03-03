import React from "react";
import Hynd from "../assets/images/title.png";
import { useNavigate } from "react-router-dom";
import {
  FaCameraRetro,
  FaHeart,
  FaStar,
  FaSmileWink,
  FaRocket,
  FaMusic,
  FaFilm,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-white p-6 text-center relative overflow-hidden">
      {/* Hiệu ứng background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff33_10%,#ffffff00_50%)] animate-pulse"></div>

      {/* Logo với animation nhịp thở */}
      <div className="fixed top-0 mt-10 left-0 w-full py-4 flex justify-center items-center gap-2 z-50">
        <img
          src={Hynd}
          alt="HYND CHECK"
          className="animate-pulse-fast max-w-full md:max-w-screen-md"
        />
      </div>

      {/* Sticker xung quanh trang */}
      <motion.div
        className="absolute top-20 left-10 text-4xl text-pink-500"
        variants={stickerVariants}
        animate="float"
      >
        <FaHeart />
      </motion.div>

      <motion.div
        className="absolute top-40 right-10 text-4xl text-yellow-500"
        variants={stickerVariants}
        animate="spin"
      >
        <FaStar />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-4xl text-blue-500"
        variants={stickerVariants}
        animate="float"
      >
        <FaSmileWink />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-20 text-4xl text-purple-500"
        variants={stickerVariants}
        animate="spin"
      >
        <FaRocket />
      </motion.div>

      <motion.div
        className="absolute top-10 right-1/4 text-4xl text-green-500"
        variants={stickerVariants}
        animate="float"
      >
        <FaMusic />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/4 text-4xl text-red-500"
        variants={stickerVariants}
        animate="spin"
      >
        <FaFilm />
      </motion.div>

      {/* Tiêu đề với animation */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 drop-shadow-lg"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Chào Mừng!
      </motion.h1>

      {/* Nội dung với animation */}
      <motion.p
        className="text-lg md:text-xl text-gray-950 max-w-2xl leading-relaxed mb-8"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        Bạn có <b>3 giây hoặc 10 giây</b> cho mỗi bức ảnh – không có chụp lại!
        <br />
        Gian chụp ảnh này sẽ chụp liên tiếp <b>4 tấm</b>, hãy tạo dáng đẹp nhất
        và tận hưởng khoảnh khắc vui vẻ!
        <br />
        Sau khi hoàn tất, bạn có thể tải xuống bản kỹ thuật số và chia sẻ với
        mọi người!
      </motion.p>

      {/* Nút bắt đầu với animation */}
      <motion.button
        onClick={() => navigate("/photobooth")}
        className="mt-8 px-10 py-4 z-50 font-bold border-2 border-black rounded-full text-black bg-white hover:bg-black hover:text-white transition flex items-center gap-3 shadow-lg hover:shadow-2xl transform hover:scale-105 duration-300"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <FaCameraRetro className="text-xl md:text-2xl" /> BẮT ĐẦU
      </motion.button>
    </div>
  );
};

export default Welcome;
