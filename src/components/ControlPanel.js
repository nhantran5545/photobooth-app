import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ControlPanel = ({
  frameStyle,
  setFrameStyle,
  timer,
  setTimer,
  filter,
  setFilter,
  isCapturing,
}) => {
  const [isOpen, setIsOpen] = useState(true); // Trạng thái đóng/mở

  // Animation variants
  const panelVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100 },
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-white bg-opacity-10 backdrop-blur-sm shadow-md">
      {/* Nút đóng/mở */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-center items-center p-2 bg-pink-300 hover:bg-pink-400 transition-colors backdrop-blur-sm"
      >
        {isOpen ? (
          <FaChevronUp className="text-white text-lg" />
        ) : (
          <FaChevronDown className="text-white text-lg" />
        )}
      </button>

      {/* Nội dung ControlPanel với animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={panelVariants}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4 pt-2 pb-4"
          >
            <div className="flex flex-row items-center space-x-10">
              {/* Chọn khung hình */}
              <div className="flex flex-col items-center">
                <h1 className="font-light text-center text-gray-600 text-lg md:text-xl mb-2">
                  Chọn khung mà bạn muốn
                </h1>
                <div className="flex gap-2 md:gap-4">
                  {["2x2", "4-vertical"].map((style) => (
                    <button
                      key={style}
                      onClick={() => setFrameStyle(style)}
                      disabled={isCapturing}
                      className={`px-3 py-1 md:px-4 md:py-2 border-2 border-black bg-transparent rounded-full transition-all text-sm md:text-base 
                        ${
                          frameStyle === style
                            ? "font-bold scale-110 bg-pink-300 text-white"
                            : "bg-white"
                        } 
                        hover:scale-110 hover:bg-pink-200 hover:border-gray-600
                        ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {style === "2x2" ? "Khung 2x2" : "Khung 4 dọc"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chọn hẹn giờ */}
              <div className="flex flex-col items-center">
                <h1 className="font-light text-center text-gray-600 text-lg md:text-xl mb-2">
                  Hẹn giờ
                </h1>
                <div className="flex gap-2 md:gap-4">
                  {[3, 10].map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimer(time)}
                      disabled={isCapturing}
                      className={`px-3 py-1 md:px-4 md:py-2 border-2 border-black bg-transparent rounded-full transition-all text-sm md:text-base 
                        ${
                          timer === time
                            ? "font-bold scale-110 bg-pink-300 text-white"
                            : "bg-white"
                        } 
                        hover:scale-110 hover:bg-pink-200 hover:border-gray-600
                        ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {time === 0 ? "Không hẹn giờ" : `Hẹn giờ ${time}s`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chọn bộ lọc ảnh */}
            <div className="flex flex-col items-center">
              <h1 className="font-light text-center text-gray-600 text-lg md:text-xl mb-2">
                Chọn bộ lọc ảnh
              </h1>
              <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
                {[
                  { value: "none", label: "Không filter" },
                  { value: "grayscale", label: "Đen trắng" },
                  { value: "sepia", label: "Sepia" },
                  { value: "soft", label: "Soft" },
                  { value: "vibrant", label: "Tươi tắn" },
                  { value: "smooth-skin", label: "Mịn da" },
                  { value: "brighten", label: "Trắng hơn" },
                ].map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => setFilter(value)}
                    disabled={isCapturing}
                    className={`px-3 py-1 md:px-4 md:py-2 border-2 border-black bg-transparent rounded-full transition-all text-sm md:text-base 
                      ${
                        filter === value
                          ? "font-bold scale-110 bg-pink-300 text-white"
                          : "bg-white"
                      } 
                      hover:scale-110 hover:bg-pink-200 hover:border-gray-600
                      ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ControlPanel;
