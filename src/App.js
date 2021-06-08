import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import ThemeProvider, { ThemeNames } from "../src/styles/ThemeProvider";
import Routes from "routes";

function App() {
  return (
    <ThemeProvider theme={ThemeNames.light}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
