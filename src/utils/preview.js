import { domToPng } from "modern-screenshot";

export const colorOptions = [
  "#ffffff",
  "#000000",
  "#f8b195",
  "#f67280",
  "#c06c84",
  "#6c5b7b",
  "#355c7d",
  "#a8e6cf",
  "#dcedc1",
  "#ffd3b6",
  "#ffaaa5",
  "#FDB7EA",
  "#B7B1F2",
  "#89A8B2",
  "#C5D3E8",
  "#D4F6FF",
  "#C9E9D2",
  "#FF90BC",
  "#092635",
  "#503C3C",
  "#B4B4B8",
  "#F72798",
  "#9195F6",
  "#A5DD9B",
  "#003C43",
  "#F3D0D7",
  "#102C57",
  "#FFB1B1",
  "#CAF4FF",
  "#9AA6B2",
];

export const captureScreenshot = async () => {
  const element = document.getElementById("screenshot-container");

  await document.fonts.ready; // Đảm bảo font chữ tải xong

  // Thêm màu nền bằng cách sao chép style của `frameColor`
  const computedStyle = window.getComputedStyle(element);
  const backgroundColor = computedStyle.backgroundColor;

  domToPng(element, {
    scale: 10, // Tăng độ phân giải (gấp 3 lần kích thước gốc)
    backgroundColor: backgroundColor, // Đảm bảo màu nền frameColor khi chụp ảnh
    cacheBust: true,
    useCORS: true, // Fix lỗi Safari không hiển thị hình ảnh
    quality: 1, // Chất lượng ảnh cao nhất
  })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "screenshot.png";
      link.click();
    })
    .catch((error) => {
      console.error("Lỗi khi chụp ảnh:", error);
    });
};

const getLuminance = (color) => {
  const hex = color.replace(/^#/, "");
  const rgb = parseInt(hex, 16); // Convert hex to RGB
  const r = (rgb >> 16) & 0xff; // Extract red
  const g = (rgb >> 8) & 0xff; // Extract green
  const b = (rgb >> 0) & 0xff; // Extract blue

  // Calculate luminance
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

export const getTextColor = (backgroundColor) => {
  const luminance = getLuminance(backgroundColor);
  return luminance > 0.5 ? "#000000" : "#ffffff"; // Nếu luminance > 0.5, chữ màu đen, ngược lại chữ màu trắng
};
