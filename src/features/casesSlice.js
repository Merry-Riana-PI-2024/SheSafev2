import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createSelector } from 'reselect';

axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:4000";

// Selectors untuk mendapatkan data yang diperlukan dari state
const selectSelectedCase = createSelector(
  (state) => state.cases?.selectedCase,
  (selectedCase) => selectedCase
);

const selectCategories = createSelector(
  (state) => state.categories?.category,
  (categories) => categories
);

// Thunk untuk mengambil daftar jurnal
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
export const postCaseDraft = createAsyncThunk("case/postCaseDraft", async (dataCase) => {
  const response = await axios.post(`${BASE_URL}/cases/draft`, dataCase);
  return response.data;
});

// Thunk untuk mendapatkan detail kasus dan mengambil jurnal & kategori terkait
export const fetchCaseDetails = createAsyncThunk(
  "cases/fetchCaseDetails",
  async (caseId) => {
    try {
      // Step 1: Ambil detail kasus
      const caseResponse = await axios.get(`${BASE_URL}/cases/${caseId}`);
      const caseData = caseResponse.data;

      // Step 2: Ambil jurnal berdasarkan ID dari detail kasus
      const journalId = caseData.journalId;  // Sesuaikan dengan field ID jurnal pada data kasus
      const journalResponse = await axios.get(`${BASE_URL}/journal/${journalId}`);
      const journalData = journalResponse.data;

      // Step 3: Ambil kategori berdasarkan ID dari detail kasus
      const categoryId = caseData.categoryId;  // Sesuaikan dengan field ID kategori pada data kasus
      const categoryResponse = await axios.get(`${BASE_URL}/category/${categoryId}`);
      const categoryData = categoryResponse.data;

      // Step 4: Gabungkan semua data menjadi satu objek
      return {
        ...caseData,
        journal: journalData,
        category: categoryData,
      };
    } catch (error) {
      throw new Error("Gagal memuat detail kasus, jurnal, atau kategori.");
    }
  }
);

// Slice untuk kasus
const casesSlice = createSlice({
  name: "case",
  initialState: {
    journal: [],       // Daftar jurnal yang tersedia
    category: [],      // Daftar kategori yang tersedia
    selectedCase: null, // Menyimpan detail kasus yang dipilih
    status: "idle",    // Status async request
    error: null,
    case: [],          // Menyimpan semua data kasus termasuk draft
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

      // fetchCaseDetails handlers
      .addCase(fetchCaseDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCaseDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCase = action.payload; // Simpan detail kasus yang diterima
        state.journal = action.payload.journal; // Simpan data jurnal terkait
        state.category = action.payload.category; // Simpan data kategori terkait
      })
      .addCase(fetchCaseDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default casesSlice.reducer;
