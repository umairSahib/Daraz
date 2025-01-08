import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Feature/ProductSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
