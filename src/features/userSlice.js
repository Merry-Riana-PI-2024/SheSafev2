import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Registrasi user
export const regist = createAsyncThunk("users/regist", async (dataUser) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      dataUser,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Terjadi kesalahan saat registrasi."
    );
  }
});

// Login user
export const login = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Gagal login");
    }
  }
);

// Check status login (untuk verifikasi apakah user sudah login)
export const checkAuth = createAsyncThunk("users/checkAuth", async () => {
  const response = await axios.get(`${API_BASE_URL}/check`, {
    withCredentials: true,
  });
  return response.data;
});

// Logout user
export const logout = createAsyncThunk("users/logout", async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Gagal logout");
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedin: false,
    userData: null,
    loading: false,
    error: null,
    isLoginChecked: false,
  },
  reducers: {
    setLoginStatus(state, action) {
      state.isLoggedin = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
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
        state.userData = action.payload;
        state.isLoggedin = true;
        localStorage.setItem("isLoggedin", true);
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
        state.isLoginChecked = true;
        state.isLoggedin = action.payload.isAuthenticated; // Status login tergantung pada respons server
        state.userData = action.payload.user;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLoginChecked = true;
        state.isLoggedin = false;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedin = false;
        state.userData = null;
        localStorage.removeItem("isLoggedin");
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setLoginStatus, setUserData } = userSlice.actions;
export default userSlice.reducer;
