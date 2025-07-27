import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./operations.js";

const initialState = {
  orders: [],
  totalPages: null,
  isLoading: false,
  isError: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchOrders.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload.data.data;
        state.totalPages = action.payload.data.totalPages;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
