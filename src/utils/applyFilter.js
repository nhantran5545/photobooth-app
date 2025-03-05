export const applyFilter = (imageSrc, filter) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = imageData.data;

      switch (filter) {
        case "grayscale":
          for (let i = 0; i < data.length; i += 4) {
            let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = data[i + 1] = data[i + 2] = avg;
          }
          break;

        case "sepia":
          for (let i = 0; i < data.length; i += 4) {
            let r = data[i],
              g = data[i + 1],
              b = data[i + 2];
            data[i] = Math.min(255, 0.393 * r + 0.769 * g + 0.189 * b);
            data[i + 1] = Math.min(255, 0.349 * r + 0.686 * g + 0.168 * b);
            data[i + 2] = Math.min(255, 0.272 * r + 0.534 * g + 0.131 * b);
          }
          break;

        case "soft":
          for (let i = 0; i < data.length; i += 4) {
            data[i] *= 1.2;
            data[i + 1] *= 1.2;
            data[i + 2] *= 1.2;
          }
          break;

        case "vibrant":
          for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(255, data[i] * 1.3);
            data[i + 1] = Math.min(255, data[i + 1] * 1.3);
            data[i + 2] = Math.min(255, data[i + 2] * 1.3);
          }
          break;

        case "smooth-skin":
          let tempData = new Uint8ClampedArray(data);
          for (let i = 4; i < data.length - 4; i += 4) {
            data[i] = (tempData[i - 4] + tempData[i] + tempData[i + 4]) / 3;
            data[i + 1] =
              (tempData[i - 3] + tempData[i + 1] + tempData[i + 5]) / 3;
            data[i + 2] =
              (tempData[i - 2] + tempData[i + 2] + tempData[i + 6]) / 3;
          }
          break;

        case "brighten":
          for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(255, data[i] * 1.4);
            data[i + 1] = Math.min(255, data[i + 1] * 1.4);
            data[i + 2] = Math.min(255, data[i + 2] * 1.4);
          }
          break;
      }

      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
  });
};
