import { createAsyncThunk } from "@reduxjs/toolkit";
import { pharmacyApi } from "../auth/operations.js";

export const getDashboardData = createAsyncThunk(
  "dashboard/getDashboardData",
  async (_, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.get("/api/dashboard");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
