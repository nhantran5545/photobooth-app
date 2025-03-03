export const cancelCapture = (
  captureInterval,
  setIsCapturing,
  setCountdown,
  setCapturedImages
) => {
  if (captureInterval) {
    clearInterval(captureInterval); // Dừng đếm ngược
  }
  setIsCapturing(false); // Dừng chụp ảnh
  setCountdown(0); // Đặt lại đếm ngược
  setCapturedImages([]); // Xóa ảnh đã chụp
};
