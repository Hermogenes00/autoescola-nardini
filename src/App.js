import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import ThemeProvider, { ThemeNames } from "../src/styles/ThemeProvider";
import Home from "./components/pages/Home";
function App() {
  return (
    <ThemeProvider theme={ThemeNames.light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
