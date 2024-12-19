import React from "react";
import Category from "../Category";

const Categories = () => {
  return (
    <>
      <div className="mt-14 ">
        <div>
          <h1 className="text-xl ml-12 text-[#1B1E74]">Categories</h1>
        </div>
        <div className="bg-white grid grid-cols-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8  mx-4 sm:mx-8 md:mx-12  cursor-pointer mt-2">
          {Category.map((obj, index) => (
            <div key={index}>
              <div className="border border-gray-200 px-2 py-2 w-40 h-40 shadow-md hover:shadow-xl transition-all">
                <img src={obj.image} alt="categories" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
