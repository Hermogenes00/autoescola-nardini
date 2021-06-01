import { screen } from "@testing-library/dom";
import React from "react";
import { render, fireEvent } from "test-utils";

import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i,
      title: `Title ${i}`,
    });
  }

  return result;
};

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
])("with %i products", (size, showOnly) => {
  test(`show only ${showOnly} items`, () => {
    const { getAllByRole } = render(
      <ProductGrid products={buildProducts(size)} />
    );
    expect(getAllByRole("heading").length).toBe(showOnly);
  });

  test("show all the products when button is clicked", async () => {
    render(<ProductGrid products={buildProducts(size)} />);

    await fireEvent.click(screen.getByText("Lista completa de serviços"));

    expect(screen.getByRole("heading").length).toBe(size);
  });
});