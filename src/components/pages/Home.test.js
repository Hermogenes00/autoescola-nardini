import React from "react";
import { render, screen } from "test-utils";

import Home from "./Home";

test("renders Home page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Matricule-se agora/);
  expect(linkElement).toBeInTheDocument();
});