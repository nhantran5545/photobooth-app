import React from "react";

const ColorPicker = ({ frameColor, setFrameColor, colorOptions }) => {
  return (
    <div>
      <label className="text-gray-700 font-[LeagueGothic-Regular] mb-2 md:mb-4 block text-xl md:text-2xl tracking-wide">
        Chọn màu khung:{" "}
      </label>
      <div className="flex flex-wrap gap-2">
        {colorOptions.map((color) => (
          <button
            key={color}
            onClick={() => setFrameColor(color)}
            className={`w-10 h-10 md:w-14 md:h-14 m-1 md:m-2 rounded-full transition-all duration-400 transform ${
              frameColor === color
                ? "scale-150 border-[4px] border-white shadow-xl"
                : "hover:scale-150"
            }`}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
