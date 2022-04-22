import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#5E3D91",
    secondary: "#F4E9CD",
    tertiary: "#9DBEBB",
    success: "#77ACA2",
    danger: "#D8315B",
  },
  fonts: {
    body: "'Encode Sans', sans-serif",
    header: "Roboto, sans-serif",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
