import React, { useState } from "react";
import { Product } from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { handleProduct } from "../Feature/ProductSlice";

const ForSale = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.product.productDetail);
  return (
    <>
      <div className="ml-12 pt-10">
        <h1 className="text-xl text-[#1B1E74]">Flash Sale</h1>
      </div>
      <div className="bg-white px-2 py-2 h-20  ml-12 mr-12 flex justify-between items-center">
        <div className="ml-4 text-[#F85606] font-medium text-base">
          On Sale Now
        </div>
        <div>
          <button className="ml-4 text-[#F85606] font-medium text-base border border-[#F85606] px-4 py-2">
            Shop All Products
          </button>
        </div>
      </div>
      <div className="border border-gray-300 ml-12 mr-12 mb-3"></div>
      <div className="bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-4 sm:mx-8 md:mx-12  cursor-pointer">
        {Product.map((obj, index) => (
          <div key={index}>
            <div className="bg-white shadow-md hover:shadow-xl transition-all rounded-lg overflow-hidden">
              <img
                src={obj.image}
                alt="X-box Stereo Headset"
                className="w-full h-40 object-cover"
              />
              <div className="p-3 space-y-2">
                <h2
                  onClick={() => dispatch(handleProduct(obj))}
                  className="font-semibold text-sm line-clamp-2"
                >
                  {obj.name}
                </h2>
                <h2 className="text-[#F85606] text-lg font-bold">
                  {obj.price}
                </h2>
                <div className="flex items-center gap-1">
                  <h3 className="line-through text-xs text-gray-400">Rs 799</h3>
                  <h3 className="text-xs text-gray-600">-74%</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForSale;
