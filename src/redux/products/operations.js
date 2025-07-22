import { createAsyncThunk } from "@reduxjs/toolkit";
import { pharmacyApi } from "../auth/operations.js";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.get("/api/products?page=1&perPage=5");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (payload, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.post("/api/products", payload);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.delete(`/api/products/${productId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (productId, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.put(`/api/products/${productId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
