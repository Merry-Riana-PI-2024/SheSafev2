import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;  

const BASE_URL = "https://peculiar-linnet-shesafe-47ad0121.koyeb.app/";


export const regist = createAsyncThunk("users/regist", async (dataUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, dataUser, {
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Terjadi kesalahan saat registrasi."
    );
  }
});

export const login = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Gagal login");
    }
  }
);

export const checkAuth = createAsyncThunk("users/checkAuth", async () => {
  const response = await axios.get(`${BASE_URL}/auth/check`, {
    withCredentials: true,
});
return response.data;
});

export const logout = createAsyncThunk("users/logout", async () => {
  await axios.post(`${BASE_URL}/auth/logout`, {}, { withCredentials: true }); 
  return; 
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
      localStorage.setItem("isLoggedin", action.payload); 
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
        localStorage.setItem("isLoggedin", true); 
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
        console.log("Check Auth Response:", action.payload); 
        state.loading = false;
        state.isLoggedin = action.payload.isAuthenticated;
        state.userData = action.payload.user; 
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLoggedin = false;
        localStorage.removeItem("isLoggedin");
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedin = false;
        state.userData = null;
        localStorage.removeItem("isLoggedin"); 
      });
  },
});

export const { setLoginStatus } = userSlice.actions;
export default userSlice.reducer;
