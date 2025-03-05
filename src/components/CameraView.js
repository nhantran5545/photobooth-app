import React from "react";
import Webcam from "react-webcam";

const CameraView = ({ webcamRef, countdown, filter }) => {
  return (
    <div className="w-full md:w-[800px] rounded-xl relative flex flex-col items-center border-black border-[3px]">
      <Webcam
        style={{ transform: "scaleX(-1)" }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className={`w-full rounded-xl ${filter}`}
      />
      {countdown > 0 && (
        <div className="animate-pulse-slow absolute top-[45%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-red-500 bg-white bg-opacity-20 rounded-2xl px-4 py-2 md:px-8 md:py-4">
          {countdown}
        </div>
      )}
    </div>
  );
};

export default CameraView;
