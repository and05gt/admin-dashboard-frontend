import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, logIn, logOut, refreshUser } from "./operations.js";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.email = action.payload.data.email;
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, state => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user.name = action.payload.data.name;
        state.user.email = action.payload.data.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
