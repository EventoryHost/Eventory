import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveRentalData, getRentalData } from '../services/flows/prop-rentalService';

interface RentalState {
  formData: Record<string, any>; // Store form data for all pages
  currentPage: number; // Track the current page
  loading: boolean;
  error: string | null;
}

const initialState: RentalState = {
  formData: {},
  currentPage: 1,
  loading: false,
  error: null,
};

// Async thunk to fetch rental data
export const fetchRentalData = createAsyncThunk(
  'rental/fetchData',
  async (userId: string) => {
    const response = await getRentalData(userId);
    return response.data;
  }
);

// Async thunk to save rental details
export const saveRentalDetails = createAsyncThunk(
  'rental/saveData',
  async ({ userId, data }: { userId: string; data: any }) => {
    const response = await saveRentalData(userId, data);
    return response.data;
  }
);

// Create a slice of the store
const rentalSlice = createSlice({
  name: 'rental',
  initialState,
  reducers: {
    resetRentalState: (state) => {
      state.formData = {};
      state.currentPage = 1;
      state.loading = false;
      state.error = null;
    },
    updateFormData: (state, action: PayloadAction<{ page: number; data: any }>) => {
      const { page, data } = action.payload;
      state.formData[page] = { ...state.formData[page], ...data };
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentalData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRentalData.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload; // Set the fetched data for all pages
        state.error = null;
      })
      .addCase(fetchRentalData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(saveRentalDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveRentalDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload; // Update state with saved data
        state.error = null;
      })
      .addCase(saveRentalDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

// Export the reducer and actions
export const { resetRentalState, updateFormData, setCurrentPage } = rentalSlice.actions;
export default rentalSlice.reducer;
