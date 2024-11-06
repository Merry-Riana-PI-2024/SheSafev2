import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

// Thunk untuk mendapatkan kategori
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await axios.get("http://localhost:3000/category", {
      withCredentials: true,
    });
    return response.data.data;
  }
);

// Slice untuk komunitas
const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    error: null,
    category: [],
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
        state.category = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCategories = (state) => state.category.categories;
export const selectLoading = (state) => state.category.loading;
export const selectError = (state) => state.category.error;

export default categoriesSlice.reducer;
