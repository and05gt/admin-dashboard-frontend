import { createAsyncThunk } from "@reduxjs/toolkit";
import { pharmacyApi } from "../auth/operations.js";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async ({ page = 1, queryParams }, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.get(
        `/api/orders?page=${page}&perPage=5${queryParams}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
