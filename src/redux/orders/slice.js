import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getOrders } from "./operations.js";

const initialState = {
  orders: [],
  isLoading: false,
  isError: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getOrders.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.orders = action.payload.data.data;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
