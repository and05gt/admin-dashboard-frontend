import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./operations.js";

const initialState = {
  products: [],
  isLoading: false,
  isError: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data.data;
    });
  },
});

export const productsReducer = productsSlice.reducer;
