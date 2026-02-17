export const generatePlaceholderImage = (text, bgColor) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="${bgColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#333" font-size="16" font-family="Arial, sans-serif">${text}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};