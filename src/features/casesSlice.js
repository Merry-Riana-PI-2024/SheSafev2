import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:4000";

// Thunk untuk mendapatkan jurnal
export const fetchJournal = createAsyncThunk("case/fetchJournal", async () => {
  const response = await axios.get(`${BASE_URL}/journal/`, {
    withCredentials: true,
  });
  return response.data.data;
});

// Thunk untuk mengirimkan kasus
export const postCase = createAsyncThunk("case/postCase", async (dataCase) => {
  const response = await axios.post(`${BASE_URL}/cases/`, dataCase);
  return response.data;
});

// Thunk untuk menyimpan draft kasus
export const postCaseDraft = createAsyncThunk(
  "case/postCaseDraft",
  async (dataCase) => {
    const response = await axios.post(`${BASE_URL}/cases/draft`, dataCase);
    return response.data;
  }
);

export const fetchCaseDetails = createAsyncThunk(
  "cases/fetchCaseDetails",
  async (caseId) => {
    const response = await axios.get(`${BASE_URL}/cases/${caseId}`);
    return response.data; 
  }
);

// Slice untuk komunitas
const casesSlice = createSlice({
  name: "case",
  initialState: {
    journal: [],
    selectedCase: null, // Menyimpan detail kasus yang dipilih
    status: "idle", // Status async request
    error: null,
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
      })
      .addCase(fetchCaseDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCaseDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCase = action.payload; // Setel detail kasus
      })
      .addCase(fetchCaseDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default casesSlice.reducer;