const theme = {
  color: {
    white: "#fff",
    "white-light": "rgba(255, 255, 255, 0.5)",
    "action-warning": "#ffb200",
    "action-danger": "#ff3b29",
    "action-primary": "#4339f2",
    "action-info": "#02a0fc",
    "action-success": "#34b53a",
    "light-primary": "#dad7fe",
    "light-success": "#e2fbd7",
    "light-danger": "#ffe5d3",
    "light-info": "#ccf8fe",
    grey: "#f8f8f8",
    black: "#000",
    "black-light": "rgba(0, 0, 0, 0.5)",
    "light-warning": "#fff5cc",
    transparent: "transparent",
  },
  font: {
    h1: "2.5rem",
    h2: "1.375rem",
    h3: "1.25rem",
    h4: "0.875rem",
    h5: "0.75rem",
  },
  borderRadius: {
    menu: "1.25rem",
    button: "0.625rem",
    card: "0.625rem",
    input: "0.625rem",
    tooltip: "0.25rem",
  },
};

type ThemeType = typeof theme;

export default theme;
export type { ThemeType };
