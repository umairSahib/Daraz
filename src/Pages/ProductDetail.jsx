import React from "react";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const detail = useSelector((state) => state.product.productDetail);
  console.log("o", detail);
  return (
    <>
      <div>
        <img src={detail.image} alt="logo" />
      </div>
    </>
  );
};

export default ProductDetail;
