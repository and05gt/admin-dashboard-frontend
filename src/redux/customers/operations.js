import { createAsyncThunk } from "@reduxjs/toolkit";
import { pharmacyApi } from "../auth/operations.js";

export const fetchCustomers = createAsyncThunk(
  "customers/fetchCustomers",
  async ({ page = 1, queryParams }, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.get(
        `/api/customers?page=${page}&perPage=5${queryParams}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCustomerById = createAsyncThunk(
  "customers/getCustomerById",
  async (customerId, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.get(`/api/customers/${customerId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
