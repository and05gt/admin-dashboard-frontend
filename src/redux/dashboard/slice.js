import { createSlice } from "@reduxjs/toolkit";
import { getDashboardData } from "./operations.js";

const initialState = {
  allProducts: null,
  allSuppliers: null,
  allCustomers: null,
  lastCustomers: [],
  incomeExpenses: [],
  isLoading: false,
  isError: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getDashboardData.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.allProducts = action.payload.data.allProducts;
        state.allSuppliers = action.payload.data.allSuppliers;
        state.allCustomers = action.payload.data.allCustomers;
        state.lastCustomers = action.payload.data.lastCustomers;
        state.incomeExpenses = action.payload.data.incomeExpenses;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getDashboardData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
