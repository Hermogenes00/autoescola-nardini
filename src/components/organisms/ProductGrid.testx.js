// import React from "react";
// import { render, screen, fireEvent, cleanup } from "test-utils";

// import ProductGrid from "./ProductGrid";

// const buildProducts = (size) => {
//   const result = [];

//   for (let i = 0; i < size; i++) {
//     result.push({
//       id: i,
//       title: `Title ${i}`,
//     });
//   }

//   return result;
// };

// let valueTest = [
//   [1, 1],
//   [2, 2],
//   [3, 3],
//   [4, 3],
//   [6, 3],
// ];

// valueTest.forEach((value) => {
//   test(`show only ${value[1]} items`, () => {
//     render(<ProductGrid products={buildProducts(value[0])} />);

//     expect(screen.getAllByRole("heading").length).toBe(value[1]);
//   });

//   test("show all the products when button is clicked", async () => {
//     render(<ProductGrid products={buildProducts(value[0])} />);

//     await fireEvent.click(screen.getByText("Lista completa de serviços"));

//     expect(screen.getAllByRole("heading").length).toBe(value[1]);
//   });
// });

// // describe.each([
// //   [1, 1],
// //   [2, 2],
// //   [3, 3],
// //   [4, 3],
// //   [6, 3],
// // ])("with %i products", (size, showOnly) => {
// //   afterEach(cleanup);

// //   test(`show only ${showOnly} items`, () => {
// //     render(<ProductGrid products={buildProducts(size)} />);

// //     expect(screen.getAllByRole("heading").length).toBe(showOnly);
// //   });

// //   test("show all the products when button is clicked", async () => {
// //     render(<ProductGrid products={buildProducts(size)} />);

// //     await fireEvent.click(screen.getByText("Lista completa de serviços"));

// //     expect(screen.getAllByRole("heading").length).toBe(size);
// //   });
// // });
