import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:4000";

// Thunk untuk mendapatkan kategori
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await axios.get(`${BASE_URL}/category`, {
      withCredentials: true,
    });
    return response.data.data; // Pastikan data kategori tersedia dalam bentuk array
  }
);

// Slice untuk kategori
const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    loading: false,     // Status loading untuk request kategori
    error: null,        // Menyimpan pesan error
    categories: [],     // Array untuk menyimpan data kategori
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload; // Menyimpan data kategori yang diterima
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Selectors untuk memudahkan akses data kategori dari komponen lain
export const selectCategories = (state) => state.category.categories;
export const selectCategoryLoading = (state) => state.category.loading;
export const selectCategoryError = (state) => state.category.error;

export default categoriesSlice.reducer;
