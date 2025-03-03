import React from "react";
import { useDrag } from "react-dnd";

const Sticker = ({ id, content, position, moveSticker, color }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "sticker",
    item: { id, position },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      {typeof content === "string" ? ( // Nếu content là chuỗi (emoji)
        <span className={color}>{content}</span>
      ) : (
        React.cloneElement(content, {
          className: `${color} w-6 h-6`, // Đặt kích thước cố định cho hình ảnh
        })
      )}
    </div>
  );
};

export default Sticker;
