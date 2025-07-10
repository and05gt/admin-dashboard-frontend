import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const pharmacyApi = axios.create({
  baseURL: "https://admin-dashboard-backend-t6zq.onrender.com",
});

const setAuthHeader = token => {
  pharmacyApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  pharmacyApi.defaults.headers.common.Authorization = "";
};

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await pharmacyApi.post("/api/user/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await pharmacyApi.post("/api/user/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await pharmacyApi.post("/api/user/refresh");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = pharmacyApi.get("/api/user/user-info");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
