import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  productDetail: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleProduct: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleProduct } = productSlice.actions;

export default productSlice.reducer;
