import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

export const regist = createAsyncThunk("community/regist", async (dataUser) => {
  const response = await axios.post(
    "http://localhost:3000/auth/register",
    dataUser
  );
  return response.data;
});

export const login = createAsyncThunk("community/login", async (dataUser) => {
  const response = await axios.post(
    "http://localhost:3000/auth/login",
    dataUser
  );
  return response.data;
});

export const checkAuth = createAsyncThunk("community/checkAuth", async () => {
  const response = await axios.get("http://localhost:3000/check", {
    withCredentials: true,
  });
  return response.data;
});

const communitySlice = createSlice({
  name: "community",
  initialState: {
    isLoggedin: false, // Bisa diupdate setelah memanggil checkAuth
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default userSlice.reducer;
