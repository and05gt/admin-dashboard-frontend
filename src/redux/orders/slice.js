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
      .addCase(getOrders.fulfilled, (state, action) => {
        state.orders = action.payload.data.data;
      })
      .addMatcher(isAnyOf(getOrders.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getOrders.fulfilled), state => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getOrders.rejected), (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
