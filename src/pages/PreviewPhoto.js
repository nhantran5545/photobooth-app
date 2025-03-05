import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PhotoGrid from "../components/PhotoGrid";
import ColorPicker from "../components/ColorPicker";
import StickerPicker from "../components/StickerPicker";
import ActionButtons from "../components/ActionButtons";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { captureScreenshot, colorOptions } from "../utils/preview";

const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { images, frameStyle } = location.state || {
    images: [],
    frameStyle: "2x2",
  };
  const [frameColor, setFrameColor] = useState("#ffffff");
  const [selectedStickers, setSelectedStickers] = useState([]);

  const handleAddSticker = useCallback((sticker) => {
    const newSticker = {
      id: Date.now(),
      content: sticker.content,
      color: sticker.color, // Thêm màu vào sticker
      position: { x: 50, y: 50 }, // Vị trí ban đầu (sẽ được ghi đè bởi vị trí ngẫu nhiên trong PhotoGrid)
    };
    setSelectedStickers((prev) => [...prev, newSticker]);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-bl from-pink-200 via-indigo-100 to-pink-100  p-4 md:p-8">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-700 mb-4 md:mb-8 mt-2 md:mt-6 font-[LeagueGothic-Regular] tracking-wider">
          Ảnh đã chụp
        </h1>
        <div className="flex flex-col md:flex-row w-full max-w-screen-lg gap-2 md:gap-4">
          <div className="flex-1">
            <PhotoGrid
              images={images}
              frameStyle={frameStyle}
              frameColor={frameColor}
              selectedStickers={selectedStickers}
            />
          </div>
          <div className="w-full md:w-1/2">
            <ColorPicker
              frameColor={frameColor}
              setFrameColor={setFrameColor}
              colorOptions={colorOptions}
            />
            <StickerPicker onAddSticker={handleAddSticker} />
          </div>
        </div>
        <ActionButtons
          onDownload={captureScreenshot}
          onRetake={() => navigate("/photobooth")}
        />
      </div>

      {/* Footer nằm dưới cùng */}
      <footer className="text-center text-gray-600 mt-16">
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

export default Preview;
