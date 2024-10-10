import { createAsyncThunk, createSlice , PayloadAction } from '@reduxjs/toolkit';
import { saveCateringData, getCateringData } from '../services/flows/cateringService';

interface CateringState {
   data: any | null; 
   loading: boolean;
   error: string | null;
}

const initialState: CateringState = {
   data: null,
   loading: false,
   error: null,
};

// Async thunk to fetch catering data
export const fetchCateringData = createAsyncThunk(
   'catering/fetchData',
   async (userId: string) => {
      const response = await getCateringData(userId);
      return response.data; 
   }
);

// Async thunk to save catering details
export const saveCateringDetails = createAsyncThunk(
   'catering/saveData',
   async ({ userId, data }: { userId: string; data: any }) => {
      const response = await saveCateringData(userId, data);
      return response.data;
   }
);

// Create a slice of the store
const cateringSlice = createSlice({
   name: 'catering',
   initialState,
   reducers: {
      // Add any synchronous actions here if needed
      resetCateringState: (state) => {
         state.data = null;
         state.loading = false;
         state.error = null;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchCateringData.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchCateringData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload; // Set the fetched data
            state.error = null; // Reset error
         })
         .addCase(fetchCateringData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null; 
         })
         .addCase(saveCateringDetails.pending, (state) => {
            state.loading = true;
         })
         .addCase(saveCateringDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload; // Update state with saved data if necessary
            state.error = null; // Reset error
         })
         .addCase(saveCateringDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null; 
         });
   },
});

// Export the reducer and actions
export const { resetCateringState } = cateringSlice.actions;
export default cateringSlice.reducer;
