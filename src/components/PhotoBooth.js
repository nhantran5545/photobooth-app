import React, { useState } from "react";
import { motion } from "framer-motion";

const PhotoBooth2x2 = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="absolute p-2 md:p-4 bg-[#ecadff7e] transition-all hover:scale-110 rounded-lg shadow-lg border-4 border-white transform -rotate-6 right-2 md:right-[10%] top-[10%] md:top-[5%] z-10 w-48 md:w-64">
        <div className="grid grid-cols-2 gap-1">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Photo ${index + 1}`}
              className="w-24 h-24 md:w-32 md:h-32 rounded-sm object-cover cursor-pointer"
              whileHover={{ scale: 1.05 }} // Hiệu ứng phóng to khi hover
              whileTap={{ scale: 0.95 }} // Hiệu ứng nhấn nhẹ
              onClick={() => handleImageClick(img)} // Xử lý khi nhấp vào ảnh
            />
          ))}
        </div>
      </div>

      {/* Hiển thị ảnh phóng to */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose} // Đóng khi nhấp ra ngoài
        >
          <motion.img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          />
        </motion.div>
      )}
    </>
  );
};

export default PhotoBooth2x2;
