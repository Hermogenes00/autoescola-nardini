import { useProduct, useProducts } from "./products";

describe("useProduct()", () => {
  test("returns a product", () => {
    const slung = "primeira-habilitacao-moto";
    const product = useProduct({ slung });

    expect(product.slung).toEqual(slung);
  });

  test("returns falsy value if product was not found", () => {
    const slung = "invalid-slung";
    const product = useProduct({ slung });

    expect(product).toBeFalsy();
  });
});

describe("useProducts()", () => {
  test("returns a product list", () => {
    const products = useProducts();
    expect(products.length).toBeGreaterThan(1);
  });
});
