import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CapturedPhotos = ({ capturedImages, frameStyle }) => {
  // Animation variants
  const photoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center mt-8 md:mt-0 z-50">
      <h1 className="text-xl md:text-2xl font-[LeagueGothic-Regular] text-gray-600 mb-4 tracking-wider">
        Your Picture
      </h1>
      <div
        className={`grid ${
          frameStyle === "2x2" ? "grid-cols-2" : "grid-cols-1"
        } gap-1 px-4 pt-2 pb-4 bg-gray-100 rounded-sm shadow-md border border-gray-300`}
      >
        <AnimatePresence>
          {capturedImages.length > 0 ? (
            capturedImages.map((photo, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={photoVariants}
                className={`border-2 rounded-none shadow-md transition-transform duration-500 
                  ${
                    frameStyle === "2x2"
                      ? "w-32 h-40 md:w-40 md:h-52"
                      : "w-48 h-36"
                  }`}
              >
                <img
                  src={photo}
                  alt={`Captured ${index}`}
                  className="w-full h-full object-cover bling-effect" // Thêm lớp bling-effect
                />
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 font-regular tracking-wide italic"
            >
              No Photo
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CapturedPhotos;
