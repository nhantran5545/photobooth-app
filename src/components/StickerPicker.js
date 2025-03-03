import React, { useState, useCallback } from "react";
import data from "@emoji-mart/data";
import {
  FaHeart,
  FaStar,
  FaSmile,
  FaRegLaughBeam,
  FaRegGrinHearts,
  FaMoon,
  FaSun,
  FaCloud,
  FaSnowflake,
} from "react-icons/fa";
import { GiFlowerEmblem, GiButterfly, GiPresent } from "react-icons/gi";
import StickerButton from "./StickerButton";
import Picker from "@emoji-mart/react";
import badge from "../assets/images/badge.png";
import bow from "../assets/images/bow.png";
import camerasticker from "../assets/images/camerasticker.png";
import discipline from "../assets/images/discipline.png";
import photoCamera from "../assets/images/photo-camera.png";

const StickerPicker = ({ onAddSticker }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiSelect = useCallback(
    (emoji) => {
      onAddSticker({ content: emoji.native, color: "text-black" }); // Thêm emoji với màu mặc định
      setShowEmojiPicker(false);
    },
    [onAddSticker]
  );

  const stickerButtons = [
    { icon: <FaHeart />, color: "text-red-500" },
    { icon: <FaStar />, color: "text-yellow-500" },
    { icon: <FaSmile />, color: "text-blue-500" },
    { icon: <FaRegLaughBeam />, color: "text-green-500" },
    { icon: <FaRegGrinHearts />, color: "text-pink-500" },
    { icon: <FaMoon />, color: "text-indigo-500" },
    { icon: <FaSun />, color: "text-orange-500" },
    { icon: <FaCloud />, color: "text-gray-500" },
    { icon: <FaSnowflake />, color: "text-blue-300" },
    { icon: <GiFlowerEmblem />, color: "text-pink-300" },
    { icon: <GiButterfly />, color: "text-purple-400" },
    { icon: <GiPresent />, color: "text-red-400" },
    // Thêm các sticker hình ảnh với kích thước cố định
    {
      icon: <img src={badge} alt="Badge" className="w-12 h-12" />,
      color: "text-yellow-400",
    },
    {
      icon: <img src={bow} alt="Bow" className="w-12 h-12" />,
      color: "text-pink-400",
    },
    {
      icon: (
        <img src={camerasticker} alt="Camera Sticker" className="w-12 h-12" />
      ),
      color: "text-gray-400",
    },
    {
      icon: <img src={discipline} alt="Discipline" className="w-12 h-12" />,
      color: "text-blue-400",
    },
    {
      icon: <img src={photoCamera} alt="Photo Camera" className="w-12 h-12" />,
      color: "text-black",
    },
  ];

  return (
    <div>
      <label className="text-gray-700 font-[LeagueGothic-Regular] mt-4 md:mt-8 mb-2 md:mb-4 block text-xl md:text-2xl tracking-wide">
        Chọn sticker:{" "}
      </label>
      <div className="flex flex-wrap gap-2">
        {stickerButtons.map((sticker, index) => (
          <StickerButton
            key={index}
            icon={sticker.icon}
            color={sticker.color}
            onClick={() =>
              onAddSticker({ content: sticker.icon, color: sticker.color })
            }
          />
        ))}
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          😀
        </button>
      </div>
      {showEmojiPicker && (
        <div className="mt-4">
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </div>
      )}
    </div>
  );
};

export default StickerPicker;
