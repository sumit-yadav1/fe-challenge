import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1400,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#202c37",
      light: "#2b3945",
      dark: "#111517",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#FFF",
    },
    grey: {
      50: "#fafafa",
      100: "#858585",
    },
    common: {
      black: "#222",
    },
  },

  typography: {
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: 16,
    h1: {
      fontWeight: 800,
      fontSize: "3.5rem",
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.375,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: "#fff",
        },
      },
    },
  },
});
