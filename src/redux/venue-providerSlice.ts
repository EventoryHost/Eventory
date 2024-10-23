import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  saveVenueData,
  getVenueData,
} from "@/services/flows/venue-providerService";

interface VenueProviderState {
  formData: Record<string, any>;
  currentPage: number;
  loading: boolean;
  error: string | null;
}

const initialState: VenueProviderState = {
  formData: {},
  currentPage: 1,
  loading: false,
  error: null,
};

// Async thunk to fetch venue data
export const fetchVenueData = createAsyncThunk(
  "venueProvider/fetchData",
  async (userId: string) => {
    const response = await getVenueData(userId);
    return response.data;
  },
);

// Async thunk to save venue details
export const saveVenueDetails = createAsyncThunk(
  "venueProvider/saveData",
  async ({ userId, data }: { userId: string; data: any }) => {
    const response = await saveVenueData(userId, data);
    return response.data;
  },
);

// Create a slice of the store for venue-provider
const venueProviderSlice = createSlice({
  name: "venueProvider",
  initialState,
  reducers: {
    resetVenueState: (state) => {
      state.formData = {};
      state.currentPage = 1;
      state.loading = false;
      state.error = null;
    },
    updateFormData: (
      state,
      action: PayloadAction<{ page: number; data: any }>,
    ) => {
      const { page, data } = action.payload;
      state.formData[page] = { ...state.formData[page], ...data };
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVenueData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVenueData.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload;
        state.error = null;
      })
      .addCase(fetchVenueData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(saveVenueDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveVenueDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload;
        state.error = null;
      })
      .addCase(saveVenueDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

// Export the reducer and actions
export const { resetVenueState, updateFormData, setCurrentPage } =
  venueProviderSlice.actions;
export default venueProviderSlice.reducer;
