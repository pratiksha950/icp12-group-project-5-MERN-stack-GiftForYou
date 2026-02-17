// Generate local placeholder images with SVG
export const generatePlaceholderImage = (text, bgColor = "#f3e8ff") => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect width="300" height="300" fill="${bgColor}"/>
      <text x="50%" y="50%" font-size="18" font-weight="bold" text-anchor="middle" dy="0.3em" fill="#666" font-family="Arial">
        ${text}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Color mapping for different categories
export const getCategoryColor = (categoryName) => {
  const colors = {
    birthday: "#fce7f3",
    wedding: "#fef3c7",
    valentine: "#fee2e2",
    cake: "#fed7aa",
    fashion: "#f3e8ff"
  };
  
  for (const [key, color] of Object.entries(colors)) {
    if (categoryName.toLowerCase().includes(key)) {
      return color;
    }
  }
  return "#e5e7eb";
};
