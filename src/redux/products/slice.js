import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "./operations.js";

const initialState = {
  products: [],
  totalPages: null,
  isLoading: false,
  isError: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.data.data;
        state.totalPages = action.payload.data.totalPages;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          product => product._id === action.payload.data._id
        );
        if (index !== -1) {
          state.products[index] = action.payload.data;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          product => product._id !== action.payload.data
        );
      })
      .addMatcher(
        isAnyOf(
          fetchProducts.pending,
          addProduct.pending,
          updateProduct.pending,
          deleteProduct.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchProducts.fulfilled,
          addProduct.fulfilled,
          updateProduct.fulfilled,
          deleteProduct.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchProducts.rejected,
          addProduct.rejected,
          updateProduct.rejected,
          deleteProduct.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const productsReducer = productsSlice.reducer;
