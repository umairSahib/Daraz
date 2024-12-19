import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import ForSale from "./components/ForSale";
import Categories from "./components/Categories";
import ForYou from "./components/ForYou";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Navbar />
        <ImageSlider />
        <ForSale />
        <Categories />
        <ForYou />
        <Footer />
      </div>
    </>
  );
}

export default App;
