import React from "react";
import { BreakpointSize, breakAt } from "./Breakpoints";

test("break at small device", () => {
  expect(breakAt(BreakpointSize.sm)).toEqual(
    `@media (min-width: ${BreakpointSize.sm}px)`
  );
});
