import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-4 py-8 sticky top-0 bg-[#F85606] ">
        <div className="flex-shrink-0">
          <img
            src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
            alt="logo"
            width={100}
            className="text-white"
          />
        </div>
        <div className="flex-1 mx-4">
          <form>
            <div className="flex">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              ></label>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 "
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-[#FFE1D2]"
                >
                  <svg
                    className="w-4 h-4 text-[#F85707]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="focus:outline-none text-white bg-[#F85606] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  "
              >
                Sign In
              </button>
            </div>
            <div>
              <i className="fa-solid fa-cart-shopping text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;