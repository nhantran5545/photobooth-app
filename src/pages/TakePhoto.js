import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Stickers from "../components/Stickers";
import ControlPanel from "../components/ControlPanel";
import CameraView from "../components/CameraView";
import CapturedPhotos from "../components/CapturedPhotos";
import { startPhotoSession } from "../utils/startPhotoSession";
import { cancelCapture } from "../utils/cancelCapture";

const TakePhoto = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [frameStyle, setFrameStyle] = useState("2x2"); // "2x2" hoặc "4-vertical"
  const [timer, setTimer] = useState(3);
  const [filter, setFilter] = useState("none"); // Lọc màu ảnh
  const [capturedImages, setCapturedImages] = useState([]); // Lưu ảnh đã chụp
  const [countdown, setCountdown] = useState(0); // Đếm ngược
  const [isCapturing, setIsCapturing] = useState(false); // Trạng thái đang chụp ảnh
  const [captureInterval, setCaptureInterval] = useState(null); // Lưu interval đếm ngược

  // Hàm bắt đầu chụp ảnh
  const handleStartPhotoSession = () => {
    startPhotoSession(
      webcamRef,
      filter,
      timer,
      setIsCapturing,
      setCapturedImages,
      setCountdown,
      setCaptureInterval,
      navigate,
      frameStyle
    );
  };

  // Hàm hủy bỏ chụp ảnh
  const handleCancelCapture = () => {
    cancelCapture(
      captureInterval,
      setIsCapturing,
      setCountdown,
      setCapturedImages
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-white relative backdrop-blur-lg">
      <Stickers />
      <ControlPanel
        frameStyle={frameStyle}
        setFrameStyle={setFrameStyle}
        timer={timer}
        setTimer={setTimer}
        filter={filter}
        setFilter={setFilter}
        isCapturing={isCapturing}
      />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20 md:mt-24 p-4">
        <CameraView
          webcamRef={webcamRef}
          countdown={countdown}
          filter={filter}
        />
        <CapturedPhotos
          capturedImages={capturedImages}
          frameStyle={frameStyle}
        />
      </div>
      <div className="flex gap-4 mt-8 mb-20">
        <button
          onClick={handleStartPhotoSession} // Sử dụng hàm handleStartPhotoSession
          disabled={isCapturing}
          className={`px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition
            ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Start Capture
        </button>
        <button
          onClick={handleCancelCapture} // Sử dụng hàm handleCancelCapture
          disabled={!isCapturing}
          className={`px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 transition
            ${!isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Cancel Capture
        </button>
      </div>
    </div>
  );
};

export default TakePhoto;
