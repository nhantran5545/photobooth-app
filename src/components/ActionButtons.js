import React from "react";
import { motion } from "framer-motion";
import { Download, Camera } from "lucide-react";

const ActionButtons = ({ onDownload, onRetake }) => {
  return (
    <div className="mt-4 md:mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <motion.button
        onClick={onDownload}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, rotate: -2 }}
        className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <Download size={20} />
        Tải ảnh về
      </motion.button>

      <motion.button
        onClick={onRetake}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, rotate: 2 }}
        className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <Camera size={20} />
        Chụp lại
      </motion.button>
    </div>
  );
};

export default ActionButtons;
