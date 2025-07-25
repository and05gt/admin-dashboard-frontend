import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getCustomerById, fetchCustomers } from "./operations.js";

const initialState = {
  customers: [],
  customer: null,
  isLoading: false,
  isError: null,
};

const customersSlice = createSlice({
  name: "customers",
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.customers = action.payload.data.data;
      })
      .addCase(getCustomerById.fulfilled, (state, action) => {
        state.customer = action.payload.data.data;
      })
      .addMatcher(
        isAnyOf(fetchCustomers.pending, getCustomerById.pending),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchCustomers.fulfilled, getCustomerById.fulfilled),
        state => {
          state.isLoading = false;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchCustomers.rejected, getCustomerById.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const customersReducer = customersSlice.reducer;
