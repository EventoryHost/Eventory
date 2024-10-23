import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { savePavData, getPavData } from "../services/flows/pavService";

interface pavState {
  formData: Record<string, any>; // Store form data for all pages
  currentPage2: number; // Track the current page
  loading: boolean;
  error: string | null;
}

const initialState: pavState = {
  formData: {},
  currentPage2: 1,
  loading: false,
  error: null,
};

// Async thunk to fetch PAV data
export const fetchPavData = createAsyncThunk(
  "pav/fetchData",
  async (userId: string) => {
    const response = await getPavData(userId);
    return response.data;
  },
);

// Async thunk to save PAV details
export const savePavDetails = createAsyncThunk(
  "pav/saveData",
  async ({ userId, data }: { userId: string; data: any }) => {
    const response = await savePavData(userId, data);
    return response.data;
  },
);

// Create a slice of the store
const pavSlice = createSlice({
  name: "pav",
  initialState,
  reducers: {
    resetPavState: (state) => {
      state.formData = {};
      state.currentPage2 = 1;
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
    setcurrentPage2: (state, action: PayloadAction<number>) => {
      state.currentPage2 = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPavData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPavData.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload; // Set the fetched data for all pages
        state.error = null;
      })
      .addCase(fetchPavData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(savePavDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(savePavDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload; // Update state with saved data
        state.error = null;
      })
      .addCase(savePavDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

// Export the reducer and actions
export const { resetPavState, updateFormData, setcurrentPage2 } =
  pavSlice.actions;
export default pavSlice.reducer;
