import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  productDetail: {},
  quantity: 1,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleProduct: (state, action) => {
      state.productDetail = action.payload;
    },
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      state.quantity = Math.max(1, state.quantity - 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleProduct, increment, decrement } = productSlice.actions;

export default productSlice.reducer;
