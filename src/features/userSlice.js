import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const regist = createAsyncThunk("users/regist", async (dataUser) => {
  const response = await axios.post(
    "https://peculiar-linnet-shesafe-47ad0121.koyeb.app/auth/register",
    dataUser
  );
  return response.data;
});

export const login = createAsyncThunk("users/login", async (dataUser) => {
  const response = await axios.post(
    "https://peculiar-linnet-shesafe-47ad0121.koyeb.app/auth/login",
    dataUser
  );
  return response.data;
});

export const checkAuth = createAsyncThunk("users/checkAuth", async () => {
  const response = await axios.get(
    "https://peculiar-linnet-shesafe-47ad0121.koyeb.app/auth/check",
    {
      withCredentials: true,
    }
  );
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedin: false,
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(regist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(regist.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedin = true;
        state.userData = action.payload;
      })
      .addCase(regist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedin = true;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedin = action.payload.isAuthenticated;
        state.userData = action.payload.user;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
