import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

export const regist = createAsyncThunk("users/regist", async (dataUser) => {
  const response = await axios.post(
    "http://localhost:3000/auth/register",
    dataUser
  );
  return response.data;
});

export const login = createAsyncThunk("users/login", async (dataUser) => {
  const response = await axios.post(
    "http://localhost:3000/auth/login",
    dataUser
  );
  return response.data;
});

export const checkAuth = createAsyncThunk("users/checkAuth", async () => {
  const response = await axios.get("http://localhost:3000/check", {
    withCredentials: true,
  });
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedin: localStorage.getItem("isLoggedin") === "true",
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLoginStatus(state, action) {
      state.isLoggedin = action.payload;
      localStorage.setItem("isLoggedin", action.payload); // Menyimpan status ke localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(regist.fulfilled, (state, action) => {
        state.loading = false;
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
        localStorage.setItem("isLoggedin", true); // Simpan status login saat berhasil login
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
        console.log("Check Auth Response:", action.payload); // Debugging
        state.loading = false;
        state.isLoggedin = action.payload.isAuthenticated;
        state.userData = action.payload.user;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLoggedin = false;
        localStorage.removeItem("isLoggedin"); // Simpan status login saat berhasil login
      });
  },
});
export const { setLoginStatus } = userSlice.actions;
export default userSlice.reducer;
