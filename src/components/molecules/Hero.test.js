import React from "react";

import { render } from "../test-utils";

import Hero from "./Hero";

test("renders Hero whit children", () => {
  const component = render(
    <Hero>
      <p>Neto</p>
    </Hero>
  );

  expect(component.getByText("Neto")).toBeInTheDocument();
});

test("renders imagem background", () => {
  const image = "http://test/sample.js";
  const { getByTestId } = render(<Hero image={image}></Hero>);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
