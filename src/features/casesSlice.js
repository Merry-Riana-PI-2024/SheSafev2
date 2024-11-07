import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

// Thunk untuk mendapatkan jurnal
export const fetchJournal = createAsyncThunk("case/fetchJournal", async () => {
  const response = await axios.get(`/api/journal/`, {
    withCredentials: true,
  });
  return response.data.data;
});

// Thunk untuk mengirimkan kasus
export const postCase = createAsyncThunk("case/postCase", async (dataCase) => {
  const response = await axios.post(`/api/cases/`, dataCase);
  return response.data;
});

// Thunk untuk menyimpan draft kasus
export const postCaseDraft = createAsyncThunk(
  "case/postCaseDraft",
  async (dataCase) => {
    const response = await axios.post(`/api/cases/draft`, dataCase);
    return response.data;
  }
);

// Slice untuk komunitas
const casesSlice = createSlice({
  name: "case",
  initialState: {
    loading: false,
    error: null,
    journal: [],
    case: [], // Menyimpan semua data kasus termasuk draft
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchJournal handlers
      .addCase(fetchJournal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJournal.fulfilled, (state, action) => {
        state.loading = false;
        state.journal = action.payload;
      })
      .addCase(fetchJournal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // postCase handlers
      .addCase(postCase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postCase.fulfilled, (state, action) => {
        state.loading = false;
        state.case = action.payload;
      })
      .addCase(postCase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // postCaseDraft handlers
      .addCase(postCaseDraft.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postCaseDraft.fulfilled, (state, action) => {
        state.loading = false;
        state.case = action.payload;
      })
      .addCase(postCaseDraft.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default casesSlice.reducer;
