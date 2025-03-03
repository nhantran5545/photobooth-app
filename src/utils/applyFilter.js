export const applyFilter = (imageSrc, filter) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Đặt kích thước canvas bằng với ảnh
      canvas.width = img.width;
      canvas.height = img.height;

      // Vẽ ảnh lên canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Lấy dữ liệu pixel từ canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Áp dụng bộ lọc thủ công
      switch (filter) {
        case "grayscale":
          for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg; // Red
            data[i + 1] = avg; // Green
            data[i + 2] = avg; // Blue
          }
          break;
        case "sepia":
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
            data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
            data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
          }
          break;
        case "soft":
          // Áp dụng bộ lọc mềm mại (brightness, contrast, saturate)
          for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(255, data[i] * 1.3); // Brightness
            data[i + 1] = Math.min(255, data[i + 1] * 1.3);
            data[i + 2] = Math.min(255, data[i + 2] * 1.3);

            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg * 0.9 + data[i] * 0.05; // Contrast
            data[i + 1] = avg * 0.9 + data[i + 1] * 0.05;
            data[i + 2] = avg * 0.9 + data[i + 2] * 0.1;

            const saturation = 0.8;
            const gray =
              0.2989 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            data[i] = gray + (data[i] - gray) * saturation; // Saturate
            data[i + 1] = gray + (data[i + 1] - gray) * saturation;
            data[i + 2] = gray + (data[i + 2] - gray) * saturation;
          }
          break;
        case "vibrant":
          // Áp dụng bộ lọc rực rỡ (brightness, contrast, saturate)
          for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(255, data[i] * 1.1); // Brightness
            data[i + 1] = Math.min(255, data[i + 1] * 1.1);
            data[i + 2] = Math.min(255, data[i + 2] * 1.1);

            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg * 1.1 + data[i] * 0.9; // Contrast
            data[i + 1] = avg * 1.1 + data[i + 1] * 0.9;
            data[i + 2] = avg * 1.1 + data[i + 2] * 0.9;

            const saturation = 1.5;
            const gray =
              0.2989 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            data[i] = gray + (data[i] - gray) * saturation; // Saturate
            data[i + 1] = gray + (data[i + 1] - gray) * saturation;
            data[i + 2] = gray + (data[i + 2] - gray) * saturation;
          }
          break;
        case "smooth-skin":
          // Áp dụng bộ lọc làm mịn da (blur)
          const radius = 1;
          for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
              let r = 0,
                g = 0,
                b = 0,
                count = 0;
              for (let dy = -radius; dy <= radius; dy++) {
                for (let dx = -radius; dx <= radius; dx++) {
                  const px = x + dx;
                  const py = y + dy;
                  if (
                    px >= 0 &&
                    px < canvas.width &&
                    py >= 0 &&
                    py < canvas.height
                  ) {
                    const idx = (py * canvas.width + px) * 4;
                    r += data[idx];
                    g += data[idx + 1];
                    b += data[idx + 2];
                    count++;
                  }
                }
              }
              const idx = (y * canvas.width + x) * 4;
              data[idx] = r / count;
              data[idx + 1] = g / count;
              data[idx + 2] = b / count;
            }
          }
          break;
        case "brighten":
          // Áp dụng bộ lọc làm sáng
          for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(255, data[i] * 1.2); // Brightness
            data[i + 1] = Math.min(255, data[i + 1] * 1.2);
            data[i + 2] = Math.min(255, data[i + 2] * 1.2);

            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg * 0.9 + data[i] * 0.1; // Contrast
            data[i + 1] = avg * 0.9 + data[i + 1] * 0.1;
            data[i + 2] = avg * 0.9 + data[i + 2] * 0.1;
          }
          break;
        default:
          // Không áp dụng bộ lọc
          break;
      }

      // Đặt lại dữ liệu pixel đã lọc
      ctx.putImageData(imageData, 0, 0);

      // Lấy ảnh sau khi áp dụng bộ lọc
      const filteredImage = canvas.toDataURL("image/jpeg");

      resolve(filteredImage); // Trả về ảnh đã lọc
    };
  });
};
