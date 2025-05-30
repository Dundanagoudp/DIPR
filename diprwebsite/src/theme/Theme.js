const theme = {
  colors: {
    primary: "#1E88E5",
    primaryRgb: "26, 115, 232",
    background: "#ffffff",
    white: "#ffffff",
    secondary: "#1E88E5",
    success: "#28a745",
    error: "#DD403C",
    warning: "#ffc107",
    info: "#DEDEDE",
    light: "#E1E8FF",
    text: "#262524",
    sidebarBgColor: "#475569",
    textgray: "#c2c3c4",
    black: "#000000",
    lightgreen: "#ebfced",
    backgray: "#e0e0e0",
    button: "#1E88E5",
    Footerbg: "#235FCD",
    Footerstrip: "#1A4492",
    margin: "#C5CEDA",
    icons: "#787878",
    bggrey: "#F3F3F3",
    maincolor: "#372670",
    primaryVideo: "#ff0000",
    trcloure: "hsla(0, 0.00%, 100.00%, 0.20)",
    // Add missing colors referenced in HomePage.styles.js
    lightgray: "#f1f1f1",
    lightText: "#666666",
     gray: {
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    
  },
  fonts: {
    body: "'poppins', sans-serif",
    heading: "'poppins', sans-serif",
    monospace: "'Source Sans 3', monospace",
    accent: "'Nunito', sans-serif",
    display: "'Outfit', sans-serif",
  },
  fontSizes: {
    small: "12px",
    medium: "14px",
    large: "16px"
    
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
        large: "1280px",
  },
  spacing: (factor) => `${factor * 8}px`,
  spacing1: (multiplier) => `${multiplier * 4}px`,

  borderRadius: {
    small: "4px",
    medium: "8px",
    circle: "50%"
  },
  transitions: {
    fast: "0.2s ease"
  }
};

export default theme;