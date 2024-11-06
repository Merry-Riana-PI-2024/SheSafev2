import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

export const fetchCommunity = createAsyncThunk(
  "community/fetchCommunity",
  async () => {
    const response = await axios.get("http://localhost:3000/community");
    return response.data.data;
  }
);

export const fetchSupport = createAsyncThunk(
  "community/fetchSupport",
  async (casesID) => {
    const response = await axios.get(
      `http://localhost:3000/community/support/${casesID}`
    );
    console.log("API Response for fetchSupport:", response.data);
    return response.data.data;
  }
);

export const postSupport = createAsyncThunk(
  "community/postSupport",
  async ({ casesID, count }) => {
    const response = await axios.post(
      `http://localhost:3000/community/support/${casesID}`,
      { count }
    );
    return response.data;
  }
);

export const deleteSupportById = createAsyncThunk(
  "community/deleteSupportById",
  async (casesID) => {
    const response = await axios.delete(
      `http://localhost:3000/community/support/${casesID}`
    );
    return response.data;
  }
);

export const detailCommunity = createAsyncThunk(
  "community/detailCommunity",
  async (id) => {
    const response = await axios.get(`http://localhost:3000/community/${id}`);
    return response.data.data;
  }
);

// Slice untuk komunitas
const communitySlice = createSlice({
  name: "community",
  initialState: {
    loading: false,
    error: null,
    community: [],
    support: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommunity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommunity.fulfilled, (state, action) => {
        state.loading = false;
        state.community = action.payload;
      })
      .addCase(fetchCommunity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(detailCommunity.fulfilled, (state, action) => {
        state.community = action.payload;
      })
      .addCase(fetchSupport.fulfilled, (state, action) => {
        state.loading = false;
        state.support = action.payload;
      })
      .addCase(postSupport.fulfilled, (state, action) => {
        state.loading = false;
        state.support = action.payload;
      })
      .addCase(deleteSupportById.fulfilled, (state, action) => {
        state.loading = false;
        state.support = action.payload;
      });
  },
});

export default communitySlice.reducer;
