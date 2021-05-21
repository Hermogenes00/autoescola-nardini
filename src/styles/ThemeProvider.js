import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ThemeNames = {
  light: "light",
  ocean: "ocean",
};

const light = {
  colors: {
    primary: {
      main: `#ffc107`,
      dark: "#c79100",
      light: "#fff350",
      text: "@fff",
    },
    danger: {
      main: `#ff3d00`,
      dark: "#b22a00",
      text: "#212121",
    },
  },
};
const allThemes = {
  light: light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#2196f3",
        dark: "#1769aa",
        light: "#4dabf5",
        test: "#fff",
      },
    },
  },
};

const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={allThemes[theme]}>{children}</StyledProvider>
);

ThemeProvider.defaulProps = {
  theme: "light",
};

export default ThemeProvider;
