import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sticker from "./Sticker";
import { getTextColor } from "../utils/preview";

const PhotoGrid = ({
  images = [],
  frameStyle,
  frameColor,
  selectedStickers,
}) => {
  const [stickers, setStickers] = useState(selectedStickers);
  const currentDate = new Date().toLocaleString();
  const gridRef = useRef(null); // Tham chiếu đến phần tử PhotoGrid
  // Tính toán màu chữ dựa trên màu nền
  const textColor = getTextColor(frameColor);
  // Hàm tạo vị trí ngẫu nhiên trong phạm vi của PhotoGrid
  const getRandomPosition = () => {
    if (!gridRef.current) return { x: 50, y: 50 }; // Mặc định nếu không có tham chiếu

    const gridRect = gridRef.current.getBoundingClientRect();
    const maxX = gridRect.width - 50; // Giới hạn vị trí X (trừ đi kích thước sticker)
    const maxY = gridRect.height - 50; // Giới hạn vị trí Y (trừ đi kích thước sticker)

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  useEffect(() => {
    setStickers((prevStickers) => {
      const newStickers = selectedStickers
        .filter((sticker) => !prevStickers.some((s) => s.id === sticker.id))
        .map((sticker) => ({
          ...sticker,
          position: getRandomPosition(), // Thêm vị trí ngẫu nhiên trong PhotoGrid
        }));
      return [...prevStickers, ...newStickers];
    });
  }, [selectedStickers]);

  const moveSticker = useCallback((id, newPosition) => {
    setStickers((prevStickers) =>
      prevStickers.map((s) =>
        s.id === id ? { ...s, position: newPosition } : s
      )
    );
  }, []);

  const DropArea = ({ children }) => {
    const [, drop] = useDrop(() => ({
      accept: "sticker",
      drop: (item, monitor) => {
        const delta = monitor.getDifferenceFromInitialOffset();
        if (!delta) return;
        const left = Math.round(item.position.x + delta.x);
        const top = Math.round(item.position.y + delta.y);
        moveSticker(item.id, { x: left, y: top });
      },
    }));

    return (
      <div ref={drop} className="w-full h-full relative">
        {children}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        id="screenshot-container"
        className="flex flex-col items-center relative shadow-lg"
        style={{ backgroundColor: frameColor }}
        ref={gridRef} // Tham chiếu đến phần tử PhotoGrid
      >
        <DropArea>
          <div
            className={`grid gap-1 px-4 pt-2 rounded-xl ${
              frameStyle === "2x2" ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
                style={{ borderColor: frameColor }}
              >
                <img
                  crossorigin="anonymous"
                  src={image}
                  alt={`Captured ${index}`}
                  className={`object-cover ${
                    frameStyle === "2x2"
                      ? "w-32 h-40 md:w-40 md:h-52"
                      : "w-48 h-36"
                  }`}
                />
              </div>
            ))}
          </div>
          {stickers.map((sticker) => (
            <Sticker
              key={sticker.id}
              id={sticker.id}
              content={sticker.content}
              position={sticker.position}
              moveSticker={moveSticker}
              color={sticker.color} // Truyền màu vào Sticker
            />
          ))}
        </DropArea>
        <h4
          style={{ color: textColor }}
          className="screenshot-text text-base  text-center font-[LeagueGothic-Regular] mt-2"
        >
          <span className="">Hynd</span> {currentDate}
        </h4>
      </div>
    </DndProvider>
  );
};

export default PhotoGrid;
