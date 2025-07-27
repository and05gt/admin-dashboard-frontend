import { createAsyncThunk } from "@reduxjs/toolkit";
import { pharmacyApi } from "../auth/operations.js";

export const fetchSuppliers = createAsyncThunk(
  "suppliers/fetchSuppliers",
  async ({ page = 1, queryParams }, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.get(
        `/api/suppliers?page=${page}&perPage=5${queryParams}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addSupplier = createAsyncThunk(
  "suppliers/addSupplier",
  async (payload, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.post("/api/suppliers", payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateSupplier = createAsyncThunk(
  "suppliers/updateSupplier",
  async ({ supplierId, payload }, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.put(
        `/api/suppliers/${supplierId}`,
        payload
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
