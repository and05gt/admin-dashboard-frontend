import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addSupplier, fetchSuppliers, updateSupplier } from "./operations.js";

const initialState = {
  suppliers: [],
  isLoading: false,
  isError: null,
};

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        state.suppliers = action.payload.data.data;
      })
      .addCase(addSupplier.fulfilled, (state, action) => {
        state.suppliers.push(action.payload.data);
      })
      .addCase(updateSupplier.fulfilled, (state, action) => {
        const index = state.suppliers.findIndex(
          supplier => supplier._id === action.payload.data._id
        );
        if (index !== -1) {
          state.suppliers[index] = action.payload.data;
        }
      })
      .addMatcher(
        isAnyOf(
          fetchSuppliers.pending,
          addSupplier.pending,
          updateSupplier.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchSuppliers.fulfilled,
          addSupplier.fulfilled,
          updateSupplier.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchSuppliers.rejected,
          addSupplier.rejected,
          updateSupplier.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const suppliersReducer = suppliersSlice.reducer;
