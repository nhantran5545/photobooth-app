import { captureAndFlip } from "./captureAndFlip";

export const startPhotoSession = async (
  webcamRef,
  filter,
  timer,
  setIsCapturing,
  setCapturedImages,
  setCountdown,
  setCaptureInterval,
  navigate,
  frameStyle,
  audioRef // Thêm tham số âm thanh
) => {
  setIsCapturing(true); // Bắt đầu chụp ảnh
  setCapturedImages([]); // Xóa ảnh cũ

  // Tạo một mảng tạm để lưu ảnh đã chụp
  const newCapturedImages = [];

  for (let i = 0; i < 4; i++) {
    // Bắt đầu đếm ngược và chụp ảnh
    await new Promise((resolve) => {
      setCountdown(timer); // Bắt đầu đếm ngược
      let count = timer;
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
        count--;
        if (count === 0) {
          clearInterval(countdownInterval);

          // Chụp ảnh và lật ảnh
          captureAndFlip(webcamRef, filter).then((filteredImage) => {
            if (filteredImage) {
              newCapturedImages.push(filteredImage); // Lưu ảnh đã lật và lọc vào mảng tạm
              setCapturedImages((prev) => [...prev, filteredImage]); // Cập nhật state

              // Phát âm thanh chụp ảnh
              if (audioRef.current) {
                audioRef.current.currentTime = 0; // Đặt lại thời gian phát
                audioRef.current.play(); // Phát âm thanh
              }
            }
            resolve();
          });
        }
      }, 1000);
      setCaptureInterval(countdownInterval); // Lưu interval để hủy nếu cần
    });
  }

  // Chờ 2 giây trước khi chuyển trang
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Kết thúc chụp ảnh và chuyển trang
  setIsCapturing(false);
  setCountdown(0);
  navigate("/preview", { state: { images: newCapturedImages, frameStyle } }); // Truyền dữ liệu
};
