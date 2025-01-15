import React from "react";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const detail = useSelector((state) => state.product.productDetail);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="p-4">
            <img
              src={detail.image || "/placeholder.svg"}
              alt={detail.name}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="md:w-1/2 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{detail.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-muted-foreground">(935 Ratings)</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-3xl font-bold text-orange-500">Rs. 133</p>
            <p className="text-sm text-muted-foreground">
              <span className="line-through">Rs. 140</span>{" "}
              <span className="text-orange-500">-5%</span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Promotions</h3>
            <div className="bg-orange-100 p-3 rounded-md text-sm">
              Buy 1, Get 12% off, Buy 2, Get 18% off, Buy 3, Get 23% off
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-semibold">Quantity</span>
              <div className="flex items-center gap-2 border rounded-md">
                <button className="px-2 py-1 text-lg">-</button>
                <span className="w-12 text-center">1</span>
                <button className="px-2 py-1 text-lg">+</button>
              </div>
            </div>
          </div>

          <div className="">
            <button className="px-20 text-white font-semibold py-3 bg-orange-500 hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
