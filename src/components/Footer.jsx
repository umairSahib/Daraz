import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mr-12 ml-12 mt-12">
        <div>
          {" "}
          <h1 className="text-[#1B1E74] text-lg mb-2">Customer Care</h1>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Help Center
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            How to Buy
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Corporate & Bulk Purchasing
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Returns & Refunds
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Daraz Shop
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Contact Us
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Purchase Protection
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Daraz Pick up Points
          </h3>
        </div>
        <div>
          <h1 className="text-[#1B1E74] text-lg mb-2">Daraz</h1>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            About Us
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Digital Payments
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Daraz Donates
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Daraz Blog
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Terms & Conditions
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Privacy Policy
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            NTN Number : 4012118-6
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            STRN Number : 1700401211818
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Online Shopping App
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Online Grocery Shopping
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Daraz Exclusive
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Daraz University
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Sell on Daraz
          </h3>
          <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm">
            Join Daraz Affiliate Program
          </h3>
        </div>
        <div className="flex mt-8 gap-3">
          <div>
            <img
              src="https://img.lazcdn.com/us/domino/e07f9602-da7e-4d31-9c4f-df69a2e95325_PK-60-60.png"
              alt="daraz"
            />
          </div>
          <div>
            <h2 className="text-[#F85606]">Happy Shopping</h2>
            <h2 className="text-[#1B1E74]">Download App</h2>
          </div>
        </div>
        <div>
          <div className="">
            <button className="bg-black px-4 py-2 rounded-lg  flex items-center gap-2">
              <div>
                <i className="fa-solid fa-mobile-screen-button text-white text-4xl "></i>
              </div>
              <div>
                <h2 className="text-white text-sm">Available on the </h2>
                <h2 className="-mt-2">
                  {" "}
                  <span className="text-2xl text-white ">App Store</span>
                </h2>
              </div>
            </button>
          </div>
          <div className="">
            <button className="bg-black px-4 py-2 rounded-lg  flex items-center gap-2">
              <div>
                <i className="fa-brands fa-google-play text-white text-4xl "></i>
              </div>
              <div>
                <h2 className="text-white text-sm">Android App on </h2>
                <h2 className="-mt-2">
                  {" "}
                  <span className="text-2xl text-white italic font-light">
                    Google Play
                  </span>
                </h2>
              </div>
            </button>
          </div>
          <div>
            <div>
              <img
                src="https://img.lazcdn.com/us/domino/e07f9602-da7e-4d31-9c4f-df69a2e95325_PK-60-60.png"
                alt="daraz"
              />
            </div>
            <div>
              <h2 className="text-[#F85606]">Happy Shopping</h2>
              <h2 className="text-[#1B1E74]">Download App</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
