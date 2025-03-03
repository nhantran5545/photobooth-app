import { applyFilter } from "./applyFilter";

export const captureAndFlip = async (webcamRef, filter) => {
  if (!webcamRef.current) return null;

  const imageSrc = webcamRef.current.getScreenshot();
  if (!imageSrc) return null;

  // Lật ảnh
  const flippedImage = await new Promise((resolve) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Đặt kích thước canvas bằng với ảnh
      canvas.width = img.width;
      canvas.height = img.height;

      // Lật ảnh ngang
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);

      // Vẽ ảnh đã lật lên canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Lấy ảnh sau khi lật
      const flippedImage = canvas.toDataURL("image/jpeg");

      resolve(flippedImage); // Trả về ảnh đã lật
    };
  });

  // Áp dụng bộ lọc
  const filteredImage = await applyFilter(flippedImage, filter);

  return filteredImage; // Trả về ảnh đã lật và lọc
};
