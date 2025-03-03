import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PhotoGrid from "../components/PhotoGrid";
import ColorPicker from "../components/ColorPicker";
import StickerPicker from "../components/StickerPicker";
import ActionButtons from "../components/ActionButtons";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-pink-200 via-indigo-100 to-pink-100 p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-700 mb-4 md:mb-8 mt-4 md:mt-12 font-[LeagueGothic-Regular] tracking-wider">
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
  );
};

export default Preview;
