import React from "react";

const StickerButton = ({ icon, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 md:w-12 md:h-12 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
    >
      {React.cloneElement(icon, { className: `text-2xl md:text-3xl ${color}` })}
    </button>
  );
};

export default StickerButton;
