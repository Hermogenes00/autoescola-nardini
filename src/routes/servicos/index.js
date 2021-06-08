import React from "react";
import { useParams } from "react-router-dom";
import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";
import ProductDetailPage from "components/pages/ProductDetail";
import Error from "components/pages/Error";
import NotFounImage from "draws/About";

const ProductDetail = () => {
  useScrollToTop();
  const { slung } = useParams();
  const product = useProduct({ slung });

  if (!product) {
    return (
      <Error
        title="Serviço não encontrado"
        description="Serviço não encontrado ou não disponível"
        image={<NotFounImage />}
      />
    );
  }

  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
