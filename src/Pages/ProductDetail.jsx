import React from "react";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const detail = useSelector((state) => state.product.productDetail);
  console.log("prooooo", detail);
  return (
    <>
      <h1>product detail</h1>
    </>
  );
};

export default ProductDetail;
