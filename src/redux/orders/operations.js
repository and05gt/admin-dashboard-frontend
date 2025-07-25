import { createAsyncThunk } from "@reduxjs/toolkit";
import { pharmacyApi } from "../auth/operations.js";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.get("/api/orders?page=1&perPage=5");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
