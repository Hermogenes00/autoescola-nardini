import React from "react";
import { render } from "test-utils";

import Grid from "./Grid";

test("match snapshot  with no params", () => {
  const { asFragment } = render(<Grid></Grid>);

  expect(asFragment()).toMatchSnapshot();
});
