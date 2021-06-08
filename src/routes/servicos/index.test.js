import React from "react";
import { render, screen } from "test-utils";
import { useProduct } from "hooks/products";

import ProductDetailRoute from "./index";
import { buildProduct } from "models/builders/products";

jest.mock("hooks/products");

test("renders with a product", () => {
  const product = buildProduct();
  useProduct.mockReturnValue(product);

  render(<ProductDetailRoute />);

  expect(
    screen.getByText(product.title, { selector: "h1" })
  ).toBeInTheDocument();
});

test("not found product", () => {
  useProduct.mockReturnValue(null);

  render(<ProductDetailRoute />);

  expect(
    screen.getByText("Serviço não encontrado", { selector: "h1" })
  ).toBeInTheDocument();
});
