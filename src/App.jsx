import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ForSale from "./components/ForSale";
import Categories from "./components/Categories";
import ForYou from "./components/ForYou";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <>
      <Router>
        {/* Navbar should be rendered for all routes */}
        <Navbar />
        <Routes>
          {/* Route for the main path */}
          <Route
            path="/Daraz"
            element={
              <div className="bg-[#F5F5F5]">
                <ImageSlider />
                <ForSale />
                <Categories />
                <ForYou />
                <Footer />
              </div>
            }
          />
          {/* Route for the product details page */}
          <Route path="product" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
