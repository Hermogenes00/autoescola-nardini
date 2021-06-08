import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";
import { buildProduct } from "models/builders/products";

test("renders ProductDetail page", () => {
  const product = buildProduct();
  render(<ProductDetail product={product} />);
  expect(screen.queryAllByText(product.title).length).not.toBeLessThan(1);
});
