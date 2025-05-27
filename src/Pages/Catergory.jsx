import React from "react";
import { handleProduct } from "../Feature/ProductSlice";
import { Link, useLocation } from "react-router-dom";

const Catergory = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.product.productDetail);
  const location = useLocation();
  console.log("first", location);
  return (
    <div>
      <h1> Catergory</h1>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
      <h2>catergory clicked</h2>
    </div>
  );
};

export default Catergory;
