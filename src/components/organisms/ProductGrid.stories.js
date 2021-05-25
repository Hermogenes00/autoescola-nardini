import React from "react";
import ProductGrid from "./ProductGrid";
import cardPlaceholder from "stories/assets/card-placeholder.jpg";
export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: cardPlaceholder, title: "Título", sumary: "Texto" },
      { id: 2, image: cardPlaceholder, title: "Título", sumary: "Texto" },
      { id: 3, image: cardPlaceholder, title: "Título", sumary: "Texto" },
      { id: 4, image: cardPlaceholder, title: "Título", sumary: "Texto" },
      { id: 5, image: cardPlaceholder, title: "Título", sumary: "Texto" },
      { id: 6, image: cardPlaceholder, title: "Título", sumary: "Texto" },
    ]}
  />
);
