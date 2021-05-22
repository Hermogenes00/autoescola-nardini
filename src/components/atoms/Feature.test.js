import React from "react";
import { render } from "test-utils";

import Feature from "./Feature";

test("renders the title", () => {
  const { getByText } = render(<Feature title="My title" />);

  expect(getByText("My title")).toBeInTheDocument();
});
