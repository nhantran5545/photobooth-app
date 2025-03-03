import React from "react";

const VerticalPhotoFrame = ({ images }) => {
  return (
    <div className="absolute p-2 md:p-4 bg-[#ecadff7e] rounded-lg shadow-lg z-10 border-4 border-white transition-all hover:scale-110 transform rotate-6 left-2 md:left-[10%] top-[20%] md:top-[15%] w-36 md:w-48 ">
      <div className="flex flex-col gap-1">
        {images.map((img, index) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            key={index}
            src={img}
            alt={`Photo ${index + 1}`}
            className="w-36 h-16 md:w-48 md:h-28 rounded-md border-2 border-white object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalPhotoFrame;
