import React from "react";
import { useNavigate } from "react-router-dom";
import Hynd from "../assets/images/title.png";
import Background from "../assets/images/background.png";
import photo1 from "../assets/images/photo.JPG";
import hynd from "../assets/images/hynd.JPG";
import photo2 from "../assets/images/photo.JPG";
import badge from "../assets/images/badge.png";
import bow from "../assets/images/bow.png";
import camerasticker from "../assets/images/camerasticker.png";
import discipline from "../assets/images/discipline.png";
import photoCamera from "../assets/images/photo-camera.png";
import photo3 from "../assets/images/photo.JPG";
import PhotoBooth2x2 from "../components/PhotoBooth";
import { motion } from "framer-motion";
import VerticalPhotoFrame from "../components/PhotoBooth2";
import {
  FaHeart,
  FaStar,
  FaSmileWink,
  FaRocket,
  FaCloud,
  FaMoon,
  FaSun,
  FaCat,
  FaDog,
  FaFeather,
  FaLeaf,
  FaSnowflake,
  FaGithub,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Stickers = () => {
  // Các biến thể animation
  const stickerVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    spin: {
      rotate: [0, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      },
    },
    shake: {
      rotate: [-10, 10, -10],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Trái tim */}
      <motion.div
        className="absolute top-20 left-10 text-4xl text-pink-500 hidden md:block"
        variants={stickerVariants}
        animate="float"
      >
        <FaHeart />
      </motion.div>

      {/* Ngôi sao */}
      <motion.div
        className="absolute top-40 right-10 text-4xl text-yellow-500 hidden md:block"
        variants={stickerVariants}
        animate="spin"
      >
        <FaStar />
      </motion.div>

      {/* Mặt cười */}
      <motion.div
        className="absolute bottom-20 left-20 text-4xl text-blue-500 hidden md:block"
        variants={stickerVariants}
        animate="shake"
      >
        <FaSmileWink />
      </motion.div>

      <motion.div
        className="absolute top-10 left-96 w-16 h-16 hidden md:block"
        variants={stickerVariants}
        animate="float"
      >
        <img src={discipline} alt="Heart" className="w-full h-full" />
      </motion.div>

      {/* Ngôi sao */}
      <motion.div
        className="absolute top-40 right-10 w-16 h-16 hidden md:block"
        variants={stickerVariants}
        animate="spin"
      >
        <img src={photoCamera} alt="Star" className="w-full h-full" />
      </motion.div>

      {/* Mặt cười */}
      <motion.div
        className="absolute bottom-10 left-64 w-16 h-16 hidden md:block"
        variants={stickerVariants}
        animate="shake"
      >
        <img src={bow} alt="Smile" className="w-full h-full" />
      </motion.div>

      {/* Tên lửa */}
      <motion.div
        className="absolute bottom-10 right-64 w-16 h-16 hidden md:block"
        variants={stickerVariants}
        animate="spin"
      >
        <img src={badge} alt="Rocket" className="w-full h-full" />
      </motion.div>

      {/* Đám mây */}
      <motion.div
        className="absolute top-10 right-1/4 w-16 h-16 hidden md:block"
        variants={stickerVariants}
        animate="float"
      >
        <img src={camerasticker} alt="Cloud" className="w-full h-full" />
      </motion.div>

      {/* Tên lửa */}
      <motion.div
        className="absolute bottom-40 right-20 text-4xl text-purple-500 hidden md:block"
        variants={stickerVariants}
        animate="spin"
      >
        <FaRocket />
      </motion.div>

      {/* Đám mây */}
      <motion.div
        className="absolute top-10 right-1/4 text-4xl text-white hidden md:block"
        variants={stickerVariants}
        animate="float"
      >
        <FaCloud />
      </motion.div>

      {/* Mặt trăng */}
      <motion.div
        className="absolute top-1/3 left-1/4 text-4xl text-gray-400 hidden md:block"
        variants={stickerVariants}
        animate="pulse"
      >
        <FaMoon />
      </motion.div>

      {/* Mặt trời */}
      <motion.div
        className="absolute bottom-10 left-1/3 text-4xl text-orange-400 hidden md:block"
        variants={stickerVariants}
        animate="spin"
      >
        <FaSun />
      </motion.div>

      {/* Mèo */}
      <motion.div
        className="absolute top-1/2 right-1/3 text-4xl text-gray-600 hidden md:block"
        variants={stickerVariants}
        animate="shake"
      >
        <FaCat />
      </motion.div>

      {/* Chó */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 text-4xl text-brown-500 hidden md:block"
        variants={stickerVariants}
        animate="pulse"
      >
        <FaDog />
      </motion.div>

      {/* Lông vũ */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-4xl text-teal-400 hidden md:block"
        variants={stickerVariants}
        animate="float"
      >
        <FaFeather />
      </motion.div>

      {/* Lá cây */}
      <motion.div
        className="absolute bottom-1/3 left-1/2 text-4xl text-green-500 hidden md:block"
        variants={stickerVariants}
        animate="spin"
      >
        <FaLeaf />
      </motion.div>

      {/* Bông tuyết */}
      <motion.div
        className="absolute top-1/2 left-1/2 text-4xl text-blue-200 hidden md:block"
        variants={stickerVariants}
        animate="float"
      >
        <FaSnowflake />
      </motion.div>
    </>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Stickers */}
      <Stickers />

      {/* Nội dung chính */}
      <div className="flex items-center justify-center w-full h-full bg-[#333333] bg-opacity-15 px-4">
        {/* Logo với animation */}
        <div className="fixed top-0 mt-5 left-0 w-full py-4 flex justify-center items-center gap-2 z-50">
          <img
            src={Hynd}
            alt="HYND CHECK"
            className="animate-pulse-fast max-w-full md:max-w-screen-md"
          />
        </div>

        {/* Main Content */}
        <div className="bg-white w-full max-w-4xl lg:max-w-[70%] h-auto md:h-[55%] p-6 md:px-20 md:mt-14 rounded-3xl flex flex-col items-center text-center relative z-10">
          <h1 className="typing-effect font-[LeagueGothic-Regular] text-xl md:text-3xl mt-10 md:mt-20 mb-8 md:mb-14 text-pink-300">
            "Preserve your precious moments"
          </h1>
          <motion.button
            onClick={() => navigate("/welcome")}
            className="relative mt-2 px-10 md:px-20 py-6 font-bold rounded-lg bg-[#FF75A6] text-black shadow-lg 
before:absolute before:inset-1 before:bg-[#FFDCE8] before:my-1 md:before:my-2 before:mx-1 md:before:mx-2 before:rounded-sm before:transition-all before:duration-300
hover:border-pink-200 hover:bg-black hover:before:bg-pink-500 hover:text-white flex items-center justify-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="relative z-10 text-2xl md:text-[45px] font-[Jersey15-Regular] tracking-wider">
              START
            </span>
            <span className="relative flex-col flex items-center w-10 h-3 md:w-10 md:h-6 space-y-1 left-2 md:left-8">
              <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-green-500 rounded-full shadow-md"></span>
              <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-pink-300 rounded-full"></span>
            </span>
          </motion.button>
        </div>

        {/* Photo Booth 2x2 - Ẩn trên màn hình nhỏ */}
        <div className="hidden md:block">
          <PhotoBooth2x2 images={[photo1, photo2, photo3, hynd]} />
        </div>

        {/* Vertical Photo Frame - Ẩn trên màn hình nhỏ */}
        <div className="hidden md:block">
          <VerticalPhotoFrame images={[photo1, photo2, photo3, hynd]} />
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center text-gray-600 py-4 ">
        <p className="text-sm">
          This is a product under development. If you encounter any bugs, please
          bear with me. 😊
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/nhantran5545"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-400 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.facebook.com/6month06/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-400 transition"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="mailto:nhantran.forwork@gmail.com"
            className="text-gray-600 hover:text-pink-400 transition"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
