import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {/* Customer Care Column */}
          <div>
            <h1 className="text-[#1B1E74] text-lg font-medium mb-4">
              Customer Care
            </h1>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Help Center
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              How to Buy
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Corporate & Bulk Purchasing
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Returns & Refunds
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Daraz Shop
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Contact Us
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Purchase Protection
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Daraz Pick up Points
            </h3>
          </div>

          {/* Daraz Column */}
          <div>
            <h1 className="text-[#1B1E74] text-lg font-medium mb-4">Daraz</h1>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              About Us
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Digital Payments
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Daraz Donates
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Daraz Blog
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Terms & Conditions
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Privacy Policy
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              NTN Number : 4012118-6
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              STRN Number : 1700401211818
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Online Shopping App
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Online Grocery Shopping
            </h3>
            <h3 className="text-[#1B1E74] hover:underline cursor-pointer text-sm mb-2.5">
              Daraz Exclusive
            </h3>
          </div>

          {/* Happy Shopping Column */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://img.lazcdn.com/us/domino/e07f9602-da7e-4d31-9c4f-df69a2e95325_PK-60-60.png"
                alt="daraz"
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-[#F85606] font-medium">Happy Shopping</h2>
                <h2 className="text-[#1B1E74]">Download App</h2>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-block w-[140px] hover:opacity-90 transition-opacity"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="w-full h-auto"
                  />
                </a>
                <a
                  href="#"
                  className="inline-block w-[140px] hover:opacity-90 transition-opacity"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <a
                href="#"
                className="inline-block w-[140px] hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://img.utdstc.com/icon/56e/8ea/56e8eae8cf725c5ea30cef9f1030ce3ddf5ccc6ca6cc8e6d5a75c61ced2850f5:200"
                  alt="Explore it on AppGallery"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
