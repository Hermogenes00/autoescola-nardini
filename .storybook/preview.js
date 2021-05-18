import React from "react";

import GlobalStyle from "../src/styles/GlobalStyle";
import ThemeProvider from "../src/styles/ThemeProvider";
export const decorators = [
  (StoryFn) => (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <StoryFn />
      </ThemeProvider>
    </>
  ),
];

const viewports = {
  extraSmall: {
    name: "Portrait phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },

  small: {
    name: "Landscape phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },

  medium: {
    name: "Table (md)",
    styles: {
      width: "768",
      height: "1024px",
    },
  },

  medium: {
    name: "Table (md)",
    styles: {
      width: "768",
      height: "1024px",
    },
  },

  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024",
      height: "1366px",
    },
  },

  extraLarge: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280",
      height: "800px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  viewport: {
    viewports,
  },
};
